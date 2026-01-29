"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import Script from "next/script";
import { TextInput, TextArea, DatePicker } from "../component";
import { z } from "zod";
import { useRouter } from "next/navigation";
import axios from "axios";
import { format } from "date-fns";
import { useBookingStore } from "../store/BookingStore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { db } from "@/app/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const Booking = ({ tour, price }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [formValues, setFormValues] = useState({
    name: "",
    lastname: "",
    email: "",
    code: "",
    tel: "",
    msg: "",
    adults: "",
    date: "",
  });

  const { setBookingDetails } = useBookingStore();

  const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
  );

  const addDataToStore = async (bookingData) => {
    try {
      const docRef = await addDoc(collection(db, "booking"), bookingData);
      return docRef.id;
    } catch (error) {
      return null;
    }
  };

  const Contact = z.object({
    name: z.string().min(1, "Please enter your name"),
    lastname: z.string().min(1, "Please enter your last name"),
    email: z.string().email("Please enter a valid email"),
    code: z.string().min(3, "Please enter your country code"),
    tel: z.string().regex(phoneRegex, "Invalid Number!"),
    msg: z.string().min(1, "Please enter your message"),
    adults: z
      .string()
      .refine((val) => parseInt(val) >= 2, { message: "Minimum 2 guests" }),
    date: z.string().refine((val) => !isNaN(Date.parse(val)), "Invalid date"),
  });

  const validateForm = (data) => {
    const result = Contact.safeParse(data);
    if (result.success) {
      return { isValid: true, errors: {} };
    } else {
      const errors = result.error.flatten().fieldErrors;
      return { isValid: false, errors };
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleDateChange = (date) => {
    const formatted = format(
      new Date(date.year, date.month, date.day),
      "yyyy-MM-dd"
    );
    setFormValues((prevValues) => ({ ...prevValues, date: formatted }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationResult = validateForm(formValues);
    if (!validationResult.isValid) {
      setFormErrors(validationResult.errors);
      return;
    }

    setIsLoading(true);
    const formData = new FormData(event.target);
    formData.append("tour", tour);

    try {
      handleClickPayNow();
    } catch (error) {
      console.error(error);
      alert("Error, please try resubmitting the form");
    }
  };

  const notify = () => {
    toast("Booking Success!");
  };

  const handleSuccess = (ref) => {
    setIsLoading(false);
    notify();
    setTimeout(() => {
      router.push(`/payment-success/${ref}`);
    }, 3500);
  };

  const handleError = () => {
    setIsLoading(false);
    log.error(error);
    toast.error("Payment failed, please try again");
  };

  const onSendEmail = async (data) => {
    try {
      const response = await axios({
        url: "https://app-sb2bzrnqyq-uc.a.run.app/booking",
        method: "post",
        data: data,
        headers: {
          "Content-Type": "application/json",
        },
      });
      // if (!response.ok) {
      //   throw new Error(`Response status: ${response.status}`);
      // }
    } catch (error) {
      // error
    }
  };

  const handleLoadScript = () => {
    OmiseCard = window.OmiseCard;
    OmiseCard.configure({
      publicKey: process.env.NEXT_PUBLIC_OMISE_PUBLIC_KEY,
      currency: "THB",
      frameLabel: "KornTourCNX",
      submitLabel: "Pay NOW",
      buttonLabel: "Pay with Omise",
    });
  };

  const creditCardConfigure = () => {
    OmiseCard.configure({
      defaultPaymentMethod: "credit_card",
      otherPaymentMethods: [],
    });
    OmiseCard.configureButton("#credit-card");
    OmiseCard.attach();
  };

  const omiseCardHandler = () => {
    const totalAmount = price * parseInt(formValues.adults, 10) * 100; // Calculate total price in smallest currency unit
    OmiseCard.open({
      amount: totalAmount,
      onCreateTokenSuccess: (token) => {
        creditCardCharge(
          formValues.email,
          `${formValues.name} ${formValues.lastname}`,
          tour,
          totalAmount,
          token
        );
      },
      onFormClosed: () => {},
    });
  };

  const handleClickPayNow = () => {
    creditCardConfigure();
    omiseCardHandler();
  };

  const creditCardCharge = async (email, name, tour, amount, token) => {
    try {
      const bookingData = {
        name: formValues.name,
        lastname: formValues.lastname,
        date: formValues.date,
        tour: tour,
        guest: formValues.adults,
        total: amount / 100,
        colde: formValues.code,
        tel: formValues.tel,
        message: formValues.msg,
        email: formValues.email,
        // paid_at: res.data.data.paid_at,
        // charge_id: res.data.data.charge_id,
      };
      const refId = await addDataToStore(bookingData);
      const res = await axios({
        method: "post",
        // url: "http://localhost:80/payment-credit-card",
        url: "https://app-sb2bzrnqyq-uc.a.run.app/payment-credit-card",
        data: {
          email,
          name,
          tour,
          amount,
          token,
          ref: refId,
        },
      });
      if (res.data.data.status === "pending") {
        // navigate(res.data.data.authorize_uri);
        setTimeout(() => {
          window.location.assign(res.data.data.authorize_uri);
        }, 1000);
      } else if (res.data.successful) {
        await onSendEmail({
          email,
          name,
          tour,
          amount: amount / 100,
          date: formValues.date,
          colde: formValues.code,
          tel: formValues.tel,
          message: formValues.msg,
          guests: formValues.adults,
          paid_at: res.data.data.paid_at,
          charge_id: res.data.data.charge_id,
        });
        handleSuccess(refId);
      } else {
        handleError("Payment failed, please try again");
      }
    } catch (e) {
      console.error("error:", e);
      alert("Payment failed, please try again");
    } finally {
      setIsLoading(false);
    }
  };

  const totalPrice = price * parseInt(formValues.adults || "0", 10);

  return (
    <div className="bg-gray-50 py-16 md:py-20">
      <Script
        strategy="afterInteractive"
        src="https://cdn.omise.co/omise.js"
        onLoad={handleLoadScript}
      />
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-green-cyan text-sm uppercase tracking-widest mb-2">
            Reserve Your Spot
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Book This Tour
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-[2px] w-8 bg-green-cyan/50"></div>
            <div className="h-[2px] w-16 bg-green-cyan"></div>
            <div className="h-[2px] w-8 bg-green-cyan/50"></div>
          </div>
        </div>

        {/* Booking Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Form Section */}
            <div className="flex-1 p-6 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TextInput
                    name="name"
                    id="name"
                    label="First Name"
                    placeholder="John"
                    isInvalid={!!formErrors.name}
                    color={!!formErrors.name ? "danger" : "default"}
                    errorMessage={formErrors.name}
                    onChange={handleChange}
                  />
                  <TextInput
                    name="lastname"
                    label="Last Name"
                    placeholder="Doe"
                    isInvalid={!!formErrors.lastname}
                    color={!!formErrors.lastname ? "danger" : "default"}
                    errorMessage={formErrors.lastname}
                    onChange={handleChange}
                  />
                </div>

                {/* Email */}
                <TextInput
                  name="email"
                  label="Email Address"
                  type="email"
                  placeholder="john@example.com"
                  isInvalid={!!formErrors.email}
                  color={!!formErrors.email ? "danger" : "default"}
                  errorMessage={formErrors.email}
                  onChange={handleChange}
                />

                {/* Phone */}
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Phone Number</p>
                  <div className="flex gap-3">
                    <div className="w-24">
                      <TextInput
                        name="code"
                        isInvalid={!!formErrors.code}
                        color={!!formErrors.code ? "danger" : "default"}
                        errorMessage={formErrors.code}
                        placeholder="+66"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex-1">
                      <TextInput
                        name="tel"
                        placeholder="812345678"
                        isInvalid={!!formErrors.tel}
                        color={!!formErrors.tel ? "danger" : "default"}
                        errorMessage={formErrors.tel}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Date and Guests */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <DatePicker
                      name="date"
                      isInvalid={!!formErrors.date}
                      color={!!formErrors.date ? "danger" : "default"}
                      onChange={handleDateChange}
                      errorMessage={formErrors.date}
                    />
                  </div>
                  <TextInput
                    name="adults"
                    id="adults"
                    label="Number of Guests"
                    placeholder="2"
                    isInvalid={!!formErrors.adults}
                    color={!!formErrors.adults ? "danger" : "default"}
                    errorMessage={formErrors.adults}
                    onChange={handleChange}
                  />
                </div>

                {/* Message */}
                <TextArea
                  name="msg"
                  label="Special Requests"
                  placeholder="Any special requirements or questions..."
                  isInvalid={!!formErrors.msg}
                  color={!!formErrors.msg ? "danger" : "default"}
                  errorMessage={formErrors.msg}
                  onChange={handleChange}
                />

                {/* Price Summary */}
                <div className="bg-gray-50 rounded-xl p-4 mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Price per person</span>
                    <span className="font-medium">{price?.toLocaleString()} THB</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Guests</span>
                    <span className="font-medium">{formValues.adults || 0}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-800">Total</span>
                      <span className="text-2xl font-bold text-green-cyan">
                        {totalPrice?.toLocaleString()} THB
                      </span>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  id="credit-card"
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-green-cyan to-pine-green text-white font-semibold py-4 px-6 rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      Pay by Credit Card
                    </>
                  )}
                </button>

                {/* Security Note */}
                <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Secure payment powered by Omise
                </p>
              </form>
            </div>

            {/* Info Sidebar */}
            <div className="bg-gradient-to-br from-green-cyan to-pine-green p-6 md:p-10 md:w-80 text-white">
              <h3 className="text-xl font-bold mb-6">What&apos;s Included</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Hotel pickup and drop-off</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Professional English-speaking guide</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Lunch and drinking water</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>All entrance fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Travel insurance</span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-white/20">
                <h4 className="font-semibold mb-3">Need Help?</h4>
                <p className="text-sm text-white/80 mb-4">
                  Contact us for any questions about this tour
                </p>
                <a
                  href="https://line.me/ti/p/~korntour"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.105.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                  </svg>
                  Chat on LINE
                </a>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer autoClose={3004} />
      </div>
    </div>
  );
};

Booking.propTypes = {
  tour: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Booking;
