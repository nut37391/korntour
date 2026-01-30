"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "../component";
import ImageBlueTem from "@/public/images/ServiceImage/imageElephantWhite.png";
import Doisuthep from "@/public/images/ServiceImage/imageDoiSuthep.png";
import GrendConyon from "@/public/images/ServiceImage/GrandCanyon.png";
import StickyWater from "@/public/images/ServiceImage/imageEleSticky.png";
import waterrafing from "@/public/images/ServiceImage/EleWaterRaf.png";
import MMSanctuary from "@/public/images/ServiceImage/EleSan.png";
import InthanonTrek from "@/public/images/ServiceImage/InThaNonTrek.png";
import PhaDok from "@/public/images/ServiceImage/InthanonPhaDok.png";
import AFunDay25 from "@/public/images/A-Fun-Day/AFunDay25.jpg";

const services = [
  {
    id: 1,
    name: "Chiangrai White Temple & Blue Temple",
    slug: "chiangrai-white-temple-blue-temple",
    imageSrc: ImageBlueTem,
    category: "Temple Tours",
    tag: "Cultural",
  },
  {
    id: 2,
    name: "Doi Suthep Temple & Pha Lad Temple",
    slug: "doi-suthep-temple-pha-lad-temple",
    imageSrc: Doisuthep,
    category: "Temple Tours",
    tag: "Cultural",
  },
  {
    id: 3,
    name: "Elephant Care + Grand Canyon Water Park",
    slug: "elephant-care-grand-canyon-water-park",
    imageSrc: GrendConyon,
    category: "Elephant Tours",
    tag: "Popular",
  },
  {
    id: 4,
    name: "Elephant Care + Sticky Waterfall",
    slug: "elephant-care-sticky-water-fall",
    imageSrc: StickyWater,
    category: "Elephant Tours",
    tag: "Adventure",
  },
  {
    id: 5,
    name: "Elephant Care + White Water Rafting",
    slug: "elephant-care-white-water-rafting",
    imageSrc: waterrafing,
    category: "Elephant Tours",
    tag: "Adventure",
  },
  {
    id: 7,
    name: "Inthanon National Park Trekking Kew Mae Pan",
    slug: "inthanon-national-park-trekking-kew-mae-pan",
    imageSrc: InthanonTrek,
    category: "Trekking",
    tag: "Nature",
  },
  {
    id: 8,
    name: "Inthanon National Park Trekking Pha Dok Seaw Waterfall",
    slug: "inthanon-national-park-trekking-pha-dok-seaw-water-fall",
    imageSrc: PhaDok,
    category: "Trekking",
    tag: "Nature",
  },
  {
    id: 9,
    name: "A FUN DAY WITH COOKING CLASS AND ELEPHANTS",
    slug: "a-fun-day-with-cooking-class-and-elephants",
    imageSrc: AFunDay25,
    category: "Elephant Tours",
    tag: "Nature",
  },
];

const categories = ["All", "Elephant Tours", "Temple Tours", "Trekking"];

export default function ServicesClient() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((s) => s.category === activeCategory);

  const handleServiceClick = (slug) => {
    router.push(`/services/detail/${slug}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-blue via-royal-blue to-ocean-blue py-20 px-6">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="relative max-w-[1440px] mx-auto text-center">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-royal-blue bg-light-gold rounded-full">
            Explore Our Tours
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Tours & Experiences
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Discover the best of Chiang Mai with our carefully curated tours.
            From elephant sanctuaries to ancient temples and breathtaking nature trails.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-0 z-10 bg-white shadow-sm py-4 px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-royal-blue text-white shadow-lg shadow-royal-blue/30"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6">
        <div className="max-w-[1440px] mx-auto">
          {/* Results Count */}
          <p className="text-gray-500 mb-8 text-center">
            Showing {filteredServices.length} tour{filteredServices.length !== 1 ? "s" : ""}
            {activeCategory !== "All" && ` in ${activeCategory}`}
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative h-[220px] overflow-hidden">
                  <Image
                    src={service.imageSrc}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  {/* Tag */}
                  <span
                    className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full ${
                      service.tag === "Best Seller"
                        ? "bg-yellow-500 text-black"
                        : service.tag === "Popular"
                        ? "bg-red-500 text-white"
                        : service.tag === "Adventure"
                        ? "bg-orange-500 text-white"
                        : "bg-gold text-white"
                    }`}
                  >
                    {service.tag}
                  </span>
                  {/* Category */}
                  <span className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                    {service.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-gray-900 mb-4 line-clamp-2 min-h-[48px] group-hover:text-royal-blue transition-colors">
                    {service.name}
                  </h3>
                  <Button
                    size="w-full h-11"
                    text="View Details"
                    onClick={() => handleServiceClick(service.slug)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-Gray93">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-gray-600 mb-8">
            We offer custom tour packages tailored to your preferences.
            Contact us and let us create your perfect Chiang Mai adventure.
          </p>
          <Button
            size="h-12 px-8"
            text="Contact Us"
            onClick={() => router.push("/contact-us")}
          />
        </div>
      </section>
    </div>
  );
}
