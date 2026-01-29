"use client";
import Image from "next/image";
import { z } from "zod";
import { useState } from "react";
import axios from "axios";

import { TextInput, Button, TextArea, MapComponent } from "../component";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import pinIcon from "../../public/images/icon/pin-g.png";
import phoneIcon from "../../public/images/icon/phone-g.png";
import emailIcon from "../../public/images/icon/email-g.png";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState(false);
  const [lastname, setLastame] = useState(false);
  const [email, setEmail] = useState(false);
  const [tel, setTel] = useState(false);
  const [msg, setMsg] = useState(false);
  const [code, setCode] = useState(false);

  const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
  );

  const stringSchema = z.string().min(1);
  const emailSchema = z.string().email();
  const telSchema = z.string().regex(phoneRegex, "Invalid Number!");

  const Contact = z.object({
    name: z.string().min(1),
    lastname: z.string().min(1),
    email: z.string().email(),
    tel: z.string().regex(phoneRegex, "Invalid Number!"),
    message: z.string().min(1),
    code: z.string().min(3),
  });

  function onValidate(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const lastname = formData.get("lastname");
    const email = formData.get("email");
    const tel = formData.get("tel");
    const message = formData.get("message");
    const code = formData.get("code");
    const result = Contact.safeParse({
      name: name,
      lastname: lastname,
      email: email,
      tel: tel,
      message: message,
      code: code,
    });
    if (result.success) {
      return true;
    } else {
      const errors = result.error.flatten().fieldErrors;
      if (errors.name) setName(true);
      else setName(false);
      if (errors.lastname) setLastame(true);
      else setLastame(false);
      if (errors.email) setEmail(true);
      else setEmail(false);
      if (errors.tel) setTel(true);
      else setTel(false);
      if (errors.message) setMsg(true);
      else setMsg(false);
      if (errors.code) setCode(true);
      else setCode(false);

      return false;
    }
  }

  function onValidates(event) {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "name") {
      const res = stringSchema.safeParse(value);
      if (res.success) setName(false);
      else setName(true);
    }
    if (name === "lastname") {
      const res = stringSchema.safeParse(value);
      if (res.success) setLastame(false);
      else setLastame(true);
    }
    if (name === "email") {
      const res = emailSchema.safeParse(value);
      if (res.success) setEmail(false);
      else setEmail(true);
    }
    if (name === "tel") {
      const res = telSchema.safeParse(value);
      if (res.success) setTel(false);
      else setTel(true);
    }
    if (name === "message") {
      const res = stringSchema.safeParse(value);
      if (res.success) setMsg(false);
      else setMsg(true);
    }
    if (name === "code") {
      const res = stringSchema.safeParse(value);
      if (res.success) setCode(false);
      else setCode(true);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const isValid = onValidate(event);
    if (isValid) {
      onSendEmail(formData);
    }
  }

  const notify = () => {
    toast.success("Message successfully sent!", {
      position: "top-center",
    });
  };

  const onSendEmail = async (formData) => {
    const name = formData.get("name");
    const email = formData.get("email");
    const tel = formData.get("tel");
    const message = formData.get("message");
    try {
      setIsLoading(true);
      const res = await axios({
        method: "post",
        url: "https://app-sb2bzrnqyq-uc.a.run.app/contact-mail",
        data: {
          email: email,
          name: name,
          tel: tel,
          message: message,
        },
      });
      notify();
    } catch (err) {
      console.error(err);
      toast.error("Error, please try again");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-forest-green via-pine-green to-green-cyan py-20 px-6">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="relative max-w-[1440px] mx-auto text-center">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-forest-green bg-white rounded-full">
            Get In Touch
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Have questions about our tours? We'd love to hear from you.
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-6 -mt-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Location Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-forest-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-map-marker-alt text-2xl text-forest-green" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                6/1 Kamphaeng Din Road 2,<br />
                Chang Khlan, Mueang Chiang Mai,<br />
                Chiang Mai 51000
              </p>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-forest-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-phone text-2xl text-forest-green" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
              <a
                href="tel:+66622830334"
                className="text-forest-green font-semibold hover:text-pine-green transition-colors"
              >
                (66) 62-283-0334
              </a>
              <p className="text-sm text-gray-500 mt-1">Available 24/7</p>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-forest-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-envelope text-2xl text-forest-green" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
              <a
                href="mailto:mrkorntourtravel@gmail.com"
                className="text-forest-green font-semibold hover:text-pine-green transition-colors text-sm"
              >
                mrkorntourtravel@gmail.com
              </a>
              <p className="text-sm text-gray-500 mt-1">We reply within 24 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Send Us A Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you shortly.
              </p>

              <form onSubmit={handleSubmit} onChange={onValidates}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <TextInput
                    name="name"
                    id="id"
                    label="First Name"
                    placeholder="John"
                    isInvalid={name}
                    color={name ? "danger" : "default"}
                    errorMessage="Please enter your name"
                  />
                  <TextInput
                    name="lastname"
                    label="Last Name"
                    placeholder="Doe"
                    isInvalid={lastname}
                    color={lastname ? "danger" : "default"}
                    errorMessage="Please enter your last name"
                  />
                </div>

                <div className="mb-4">
                  <TextInput
                    name="email"
                    label="Email Address"
                    type="email"
                    placeholder="john@example.com"
                    isInvalid={email}
                    color={email ? "danger" : "default"}
                    errorMessage="Please enter a valid email"
                  />
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Phone Number</p>
                  <div className="flex gap-3">
                    <div className="w-24">
                      <TextInput
                        name="code"
                        isInvalid={code}
                        color={code ? "danger" : "default"}
                        errorMessage="Required"
                        placeholder="+66"
                      />
                    </div>
                    <div className="flex-1">
                      <TextInput
                        name="tel"
                        placeholder="62-283-0334"
                        isInvalid={tel}
                        color={tel ? "danger" : "default"}
                        errorMessage="Please enter a valid phone number"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <TextArea
                    name="message"
                    label="Your Message"
                    placeholder="Tell us about your travel plans..."
                    isInvalid={msg}
                    color={msg ? "danger" : "default"}
                    errorMessage="Please enter your message"
                  />
                </div>

                <Button
                  type="submit"
                  text="Send Message"
                  size="w-full h-12"
                  isLoading={isLoading}
                />
                <ToastContainer autoClose={3000} />
              </form>
            </div>

            {/* Map */}
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Find Us Here
              </h2>
              <p className="text-gray-600 mb-6">
                Visit our office in the heart of Chiang Mai.
              </p>
              <div className="flex-1 min-h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <MapComponent />
              </div>

              {/* Social Links */}
              <div className="mt-6 p-6 bg-white rounded-2xl shadow-lg">
                <h3 className="font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=100094070260358"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-forest-green/10 rounded-full flex items-center justify-center hover:bg-forest-green hover:text-white text-forest-green transition-all duration-300"
                  >
                    <i className="fab fa-facebook-f text-lg" />
                  </a>
                  <a
                    href="https://www.instagram.com/elephantcaregrandcanyonjumping"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-forest-green/10 rounded-full flex items-center justify-center hover:bg-forest-green hover:text-white text-forest-green transition-all duration-300"
                  >
                    <i className="fab fa-instagram text-lg" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-forest-green/10 rounded-full flex items-center justify-center hover:bg-forest-green hover:text-white text-forest-green transition-all duration-300"
                  >
                    <i className="fab fa-youtube text-lg" />
                  </a>
                  <a
                    href="https://line.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-forest-green/10 rounded-full flex items-center justify-center hover:bg-forest-green hover:text-white text-forest-green transition-all duration-300"
                  >
                    <i className="fab fa-line text-lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-Gray93">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mb-10">
            Quick answers to common questions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              {
                q: "What are your operating hours?",
                a: "We operate tours daily from 7:00 AM to 6:00 PM. Our customer service is available 24/7.",
              },
              {
                q: "Do you offer hotel pickup?",
                a: "Yes! We provide free hotel pickup and drop-off for all our tours within Chiang Mai city.",
              },
              {
                q: "How do I book a tour?",
                a: "You can book through our website, email, or call us directly. We accept various payment methods.",
              },
              {
                q: "What's your cancellation policy?",
                a: "Free cancellation up to 24 hours before the tour. Full refund will be processed within 5-7 days.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
