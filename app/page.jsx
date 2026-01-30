/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Image from "next/image";
import { Anuphan } from "next/font/google";
import "../app/globals.css";
import { YouTubeEmbed, Button } from "./component";
import {
  ArrowRightIcon,
  CertificateIcon,
  HeartIcon,
  StarIcon,
  MapMarkerIcon,
  CompassIcon,
  EnvelopeIcon,
  UsersIcon,
} from "./component/Icons";
import { useRouter } from "next/navigation";
// Import images
import ElephatGrand from "@/public/images/ElephantGrandCanyon/ElephantGrandCanyon11.jpg";
import InthanonPhaDok from "@/public/images/InthanonPhaDok/InthanonPhaDok7.jpg";
import AFunDay25 from "@/public/images/A-Fun-Day/AFunDay25.jpg";
import ElephantSan from "@/public/images/wat-phra-that-doi-suthep.jpg";

const anuphan = Anuphan({ subsets: ["latin"], weights: [400, 700] });

export default function Home() {
  const router = useRouter();

  const tours = [
    {
      image: ElephatGrand,
      text: "Elephant Care + Grand Canyon Water park",
      link: "/services/detail/elephant-care-grand-canyon-water-park",
      tag: "Popular",
    },
    {
      image: AFunDay25,
      text: "A FUN DAY WITH COOKING CLASS AND ELEPHANTS",
      link: "/services/detail/a-fun-day-with-cooking-class-and-elephants",
      tag: "Best Seller",
    },
    {
      image: InthanonPhaDok,
      text: "Inthanon National Park Trekking Pha Dok Seaw Waterfall",
      link: "/services/detail/inthanon-national-park-trekking-pha-dok-seaw-water-fall",
      tag: "Adventure",
    },
  ];

  return (
    <div className={anuphan.className}>
      <div className="flex flex-col min-h-screen max-w-[1440px] mx-auto w-full">
        {/* Hero Section */}
        <section className="relative w-full h-[500px] lg:h-[600px] overflow-hidden">
          <Image
            src={ElephantSan}
            alt="Chiang Mai Friendly Tour - Elephant Care and Temple Tours in Chiang Mai Thailand"
            fill
            priority
            quality={75}
            sizes="100vw"
            placeholder="blur"
            className="object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-blue/30 via-royal-blue/30 to-transparent" />
          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-6 lg:px-20">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-white bg-gold/90 rounded-full">
                Discover Chiang Mai
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Chiang Mai Friendly Tour is managed by locals with over 35 years of experience as tour guides in Chiang Mai. <br />
              </h1>
              <p className="text-lg text-white/90 mb-8 max-w-lg">
                Experience authentic elephant encounters, breathtaking nature trails,
                and the culture of Northern Thailand.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="h-12 px-8"
                  text="Explore Tours"
                  onClick={() => router.push("/services")}
                />
                <button
                  className="h-12 px-8 border-2 border-white text-white font-semibold rounded-lg hover:bg-gold hover:text-white hover:border-gold transition-all duration-300"
                  onClick={() => router.push("/contact-us")}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 border-2 border-gold/50 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-gold/70 rounded-full" />
            </div>
          </div>
        </section>

        {/* Tours Section */}
        <section className="py-20 px-6 lg:px-20 bg-white">
          <div className="max-w-[1280px] mx-auto">
            {/* Section Header */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
              <div>
                <span className="text-royal-blue font-semibold text-sm tracking-wider uppercase">
                  Our Services
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
                  Popular Tours & Experiences
                </h2>
                <p className="text-gray-stack mt-4 max-w-xl">
                  The most authentic elephant sanctuary in Chiang Mai - Thailand.
                  Experience the elephants in their natural habitat.
                </p>
              </div>
              <button
                className="mt-6 lg:mt-0 text-royal-blue font-semibold flex items-center gap-2 hover:gap-4 transition-all duration-300"
                onClick={() => router.push("/services")}
              >
                View All Tours
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Tour Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tours.map((tour, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  {/* Card Image */}
                  <div className="relative h-[280px] overflow-hidden">
                    <Image
                      src={tour.image}
                      alt={tour.text}
                      fill
                      quality={75}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      placeholder="blur"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Tag */}
                    <span className="absolute top-4 left-4 px-3 py-1 bg-gold text-white text-xs font-semibold rounded-full">
                      {tour.tag}
                    </span>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2 min-h-[56px]">
                      {tour.text}
                    </h3>
                    <Button
                      size="w-full h-11"
                      text="Learn More"
                      onClick={() => router.push(tour.link)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 lg:px-20 bg-pale-gold/30">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <CertificateIcon className="w-8 h-8 text-royal-blue" />,
                  title: "Licensed Tour Operator",
                  desc: "TAT License No. 23/03998 - Fully licensed and insured",
                },
                {
                  icon: <HeartIcon className="w-8 h-8 text-royal-blue" />,
                  title: "Ethical Tourism",
                  desc: "We support elephant welfare and sustainable practices",
                },
                {
                  icon: <StarIcon className="w-8 h-8 text-royal-blue" />,
                  title: "5-Star Reviews",
                  desc: "Highly rated by travelers from around the world",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-sky-blue/10 rounded-full flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-stack">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="relative py-24 px-6 lg:px-20 bg-gradient-to-br from-navy-blue via-royal-blue to-ocean-blue">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          <div className="relative max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-royal-blue bg-light-gold rounded-full">
              Watch & Explore
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              See Our Adventures in Action
            </h2>
            <p className="text-white/80 mb-10 max-w-2xl mx-auto">
              Watch our video to get a glimpse of the amazing tours and
              activities we offer in Chiang Mai.
            </p>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <YouTubeEmbed videoId="AsQce0DWIRU" autoplay={false} />
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about-us" className="py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={ElephantSan}
                    alt="About Us"
                    className="w-full h-[400px] lg:h-[500px] object-cover"
                  />
                </div>
                {/* Floating Card */}
                <div className="absolute -bottom-6 -right-6 lg:right-auto lg:-left-6 bg-gradient-to-br from-royal-blue to-ocean-blue text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-4xl font-bold">30+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
              </div>
              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <span className="text-royal-blue font-semibold text-sm tracking-wider uppercase">
                  About Us
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-6">
                  Your Trusted Travel Partner in Chiang Mai
                </h2>
                <p className="text-gray-stack mb-6 leading-relaxed">
                  We are a leading tour and travel company in Chiang Mai, offering
                  a variety of tours and services to help you explore the beauty
                  and culture of the region.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Professional and friendly local guides",
                    "Small group sizes for personalized experience",
                    "Commitment to ethical and sustainable tourism",
                    "24/7 customer support during your trip",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-light-gold rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-check text-royal-blue text-xs" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  size="h-12 px-8"
                  text="Contact Us"
                  onClick={() => router.push("/contact-us")}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-6 lg:px-20 bg-gradient-to-b from-sky-blue/10 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-royal-blue font-semibold text-sm tracking-wider uppercase">
              Testimonials
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-gray-stack mb-12 max-w-2xl mx-auto">
              Read reviews from travelers who have experienced our tours and services
            </p>
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <div
                className="sk-ww-tripadvisor-reviews"
                data-embed-id="25427232"
              ></div>
              <script
                src="https://widgets.sociablekit.com/tripadvisor-reviews/widget.js"
                async
                defer
              ></script>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 px-6 lg:px-20 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={InthanonPhaDok}
              alt="Adventure Background"
              fill
              quality={60}
              sizes="100vw"
              placeholder="blur"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-blue/95 via-royal-blue/85 to-ocean-blue/90" />
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-gold/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
          {/* Content */}
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/20 backdrop-blur-sm rounded-full">
              <MapMarkerIcon className="w-4 h-4 text-light-gold" />
              <span className="text-white text-sm font-medium">Chiang Mai, Thailand</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Start Your <br />
              <span className="text-light-gold">Adventure?</span>
            </h2>
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
              Book your tour today and create unforgettable memories exploring
              the beauty of Northern Thailand with our expert local guides
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                className="group h-14 px-8 bg-gold text-white font-semibold rounded-xl hover:bg-golden hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-lg shadow-black/20"
                onClick={() => router.push("/services")}
              >
                <CompassIcon className="w-5 h-5" />
                Browse Tours
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                className="group h-14 px-8 bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white font-semibold rounded-xl hover:bg-white hover:text-royal-blue hover:scale-105 transition-all duration-300 flex items-center gap-3"
                onClick={() => router.push("/contact-us")}
              >
                <EnvelopeIcon className="w-5 h-5" />
                Get in Touch
              </button>
            </div>
            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/70">
              <div className="flex items-center gap-2">
                <StarIcon className="w-4 h-4 text-gold" />
                <span className="text-sm">5-Star Rated</span>
              </div>
              <div className="flex items-center gap-2">
                <UsersIcon className="w-4 h-4" />
                <span className="text-sm">1000+ Happy Travelers</span>
              </div>
              <div className="flex items-center gap-2">
                <CertificateIcon className="w-4 h-4 text-light-gold" />
                <span className="text-sm">License No. 23/03998</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
