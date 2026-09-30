"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import Script from "next/script";
import { TextInput, TextArea, DatePicker } from "../component";
import { JungleBackdrop, QrCard } from "./Jungle";
import { CheckIcon, LineIcon, PhoneIcon } from "./Icons";
import { site } from "../data/site";
import { z } from "zod";
import { useRouter } from "next/navigation";
import axios from "axios";
import { format } from "date-fns";
import { useBookingStore } from "../store/BookingStore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { db } from "@/app/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const MIN_GUESTS = 2;
const MAX_GUESTS = 30;
const TRUST = ["Free cancellation 24h", "Hotel pickup", "Insurance included", "Local guide"];

const StepTitle = ({ n, title }) => (
  <div className="mb-5 flex items-center gap-3">
    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ember-500 text-sm font-bold text-white">
      {n}
    </span>
    <h3 className="text-lg font-semibold text-jungle-900">{title}</h3>
  </div>
);

const Booking = ({ tour, price, qr }) => {
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
    adults: "2",
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
      // Same page Omise returns 3-D Secure payments to (return_uri in korntour-api).
      // /payment-success/<id> only exists for bookings made before the last build.
      router.push("/thank-you");
    }, 3500);
  };

  const handleError = (message = "Payment failed, please try again") => {
    setIsLoading(false);
    toast.error(message);
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
    const OmiseCard = window.OmiseCard;
    OmiseCard.configure({
      publicKey: process.env.NEXT_PUBLIC_OMISE_PUBLIC_KEY,
      currency: "THB",
      frameLabel: "KornTourCNX",
      submitLabel: "Pay NOW",
      buttonLabel: "Pay with Omise",
    });
  };

  const creditCardConfigure = () => {
    const OmiseCard = window.OmiseCard;
    OmiseCard.configure({
      defaultPaymentMethod: "credit_card",
      otherPaymentMethods: [],
    });
    OmiseCard.configureButton("#credit-card");
    OmiseCard.attach();
  };

  const omiseCardHandler = () => {
    const totalAmount = price * parseInt(formValues.adults, 10) * 100; // Calculate total price in smallest currency unit
    window.OmiseCard.open({
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
      // Re-enable the button if the customer closes the card form without paying
      onFormClosed: () => setIsLoading(false),
    });
  };

  const handleClickPayNow = () => {
    if (!window.OmiseCard) {
      handleError("Payment is still loading, please try again in a moment");
      return;
    }
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
      handleError("Payment failed, please try again or contact us on LINE");
    } finally {
      setIsLoading(false);
    }
  };

  const guests = parseInt(formValues.adults || "0", 10);
  const totalPrice = price * guests;

  const setGuests = (n) => {
    const value = String(Math.min(MAX_GUESTS, Math.max(MIN_GUESTS, n)));
    setFormValues((prev) => ({ ...prev, adults: value }));
    setFormErrors((prev) => ({ ...prev, adults: "" }));
  };

  return (
    <section id="book" className="relative overflow-hidden bg-jungle-950 py-20 md:py-24">
      <Script
        strategy="afterInteractive"
        src="https://cdn.omise.co/omise.js"
        onLoad={handleLoadScript}
      />
      <JungleBackdrop className="opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-jungle-950 via-jungle-950/80 to-jungle-950" />

      <div className="relative max-w-[1180px] mx-auto px-5 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <span className="inline-block rounded-full bg-ember-500 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white">
              Reserve Your Spot
            </span>
            <h2 className="mt-4 font-display uppercase text-5xl md:text-6xl leading-none text-white">
              Book this <span className="text-ember-500">Trip</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-white/70">
            Fill in your details, choose a date and pay securely online. We&apos;ll email your
            confirmation right away.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-6 lg:grid-cols-[1fr_380px] items-start">
          {/* Form card */}
          <div className="rounded-3xl bg-white p-6 md:p-10 shadow-2xl shadow-black/30">
            <StepTitle n={1} title="Your details" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
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

            <div className="my-6 border-t border-dashed border-gray-200" />

            <StepTitle n={2} title="Trip details" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
              <DatePicker
                name="date"
                isInvalid={!!formErrors.date}
                color={!!formErrors.date ? "danger" : "default"}
                onChange={handleDateChange}
                errorMessage={formErrors.date}
              />
              <div className="pb-5">
                <p className="text-sm text-gray-700 mb-2">Number of Guests</p>
                <div
                  className={`flex h-12 items-center justify-between rounded-lg border-2 px-2 ${
                    formErrors.adults ? "border-danger" : "border-gray-200"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setGuests(guests - 1)}
                    disabled={guests <= MIN_GUESTS}
                    aria-label="Fewer guests"
                    className="h-8 w-8 rounded-full bg-jungle-50 text-lg font-bold text-jungle-800 hover:bg-ember-500 hover:text-white disabled:opacity-40 disabled:hover:bg-jungle-50 disabled:hover:text-jungle-800 transition-colors"
                  >
                    −
                  </button>
                  <span className="text-lg font-semibold text-jungle-900">
                    {guests} <span className="text-sm font-normal text-gray-500">guests</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => setGuests(guests + 1)}
                    disabled={guests >= MAX_GUESTS}
                    aria-label="More guests"
                    className="h-8 w-8 rounded-full bg-jungle-50 text-lg font-bold text-jungle-800 hover:bg-ember-500 hover:text-white disabled:opacity-40 transition-colors"
                  >
                    +
                  </button>
                </div>
                <p className={`mt-1 text-xs ${formErrors.adults ? "text-danger" : "text-gray-500"}`}>
                  {formErrors.adults || `Minimum ${MIN_GUESTS} guests`}
                </p>
              </div>
            </div>

            <div className="my-6 border-t border-dashed border-gray-200" />

            <StepTitle n={3} title="Special requests" />
            <TextArea
              name="msg"
              placeholder="Hotel name for pickup, dietary needs, questions..."
              isInvalid={!!formErrors.msg}
              color={!!formErrors.msg ? "danger" : "default"}
              errorMessage={formErrors.msg}
              onChange={handleChange}
            />
          </div>

          {/* Summary card */}
          <aside className="lg:sticky lg:top-6 space-y-4">
            <div className="overflow-hidden rounded-3xl bg-jungle-900 text-white shadow-2xl shadow-black/30 ring-1 ring-white/10">
              <div className="bg-gradient-to-br from-ember-500 to-ember-700 p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/80">Your trip</p>
                <p className="mt-1 text-xl font-semibold leading-snug">{tour}</p>
              </div>
              <div className="p-6 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/60">Date</span>
                  <span className="font-medium">{formValues.date || "Not selected"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Price per person</span>
                  <span className="font-medium">{price?.toLocaleString()} THB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Guests</span>
                  <span className="font-medium">× {guests}</span>
                </div>
                <div className="border-t border-white/10 pt-4 flex items-end justify-between">
                  <span className="text-white/60">Total</span>
                  <span className="font-display text-4xl text-ember-400">
                    {totalPrice.toLocaleString()}
                    <span className="ml-1 font-body text-sm text-white/60">THB</span>
                  </span>
                </div>

                <button
                  id="credit-card"
                  type="submit"
                  disabled={isLoading}
                  className="mt-2 w-full rounded-full bg-ember-500 py-4 px-6 text-base font-semibold text-white shadow-lg shadow-ember-500/30 hover:bg-ember-600 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
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
                <p className="flex items-center justify-center gap-1 text-xs text-white/50">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Secure payment powered by Omise
                </p>
              </div>
              <ul className="grid grid-cols-2 gap-px bg-white/10 text-xs">
                {TRUST.map((item) => (
                  <li key={item} className="flex items-center gap-2 bg-jungle-900 px-4 py-3 text-white/80">
                    <CheckIcon className="w-4 h-4 shrink-0 text-ember-400" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Help card */}
            <div className="rounded-3xl bg-white/5 p-6 text-white ring-1 ring-white/10 backdrop-blur">
              <p className="font-semibold">Need help?</p>
              <p className="mt-1 text-sm text-white/60">Questions about this trip? Talk to us.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href={site.social.line}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#06C755] px-4 py-2 text-sm font-semibold hover:brightness-110"
                >
                  <LineIcon className="w-4 h-4" /> Chat on LINE
                </a>
                <a
                  href={`tel:${site.phone}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold hover:border-ember-500 hover:text-ember-400"
                >
                  <PhoneIcon className="w-4 h-4" /> {site.phoneDisplay}
                </a>
              </div>
              {qr && (
                <div className="mt-5">
                  <QrCard src={qr} dark />
                </div>
              )}
            </div>
          </aside>
        </form>
        <ToastContainer autoClose={3004} />
      </div>
    </section>
  );
};

Booking.propTypes = {
  tour: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  qr: PropTypes.string,
};

export default Booking;
