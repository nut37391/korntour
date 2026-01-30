import React from "react";
import BannerService from "@/app/component/bannerService";
import {
  Booking,
  ImageGalleryService,
  Price,
  ServiceDetail,
} from "@/app/component";

//banner
import doisuthepBanner from "@/public/images/chaingmai-4309820.jpg";

//whiteTemGallery
import whiteTem from "@/public/images/whiteTemple.jpg";
import bhuda2 from "@/public/images/chiangraiLadyTemple/bhuda2.jpg";
import bhuda3 from "@/public/images/chiangraiLadyTemple/bhuda3.jpg";
import bhudalady from "@/public/images/chiangraiLadyTemple/bhudalady.jpg";
import image2 from "@/public/images/chiangraiLadyTemple/image2.jpg";

//DoiSuthepGallery
import doisuthep1 from "@/public/images/Doisuthep/doisuthep1.jpg";
import doisuthep2 from "@/public/images/Doisuthep/doisuthep2.jpg";
import doisuthep3 from "@/public/images/Doisuthep/doisuthep3.jpg";
import doisuthep4 from "@/public/images/Doisuthep/doisuthep4.jpg";
import doisuthep5 from "@/public/images/Doisuthep/doisuthep5.jpg";
import doisuthep6 from "@/public/images/Doisuthep/doisuthep6.jpg";
import doisuthep7 from "@/public/images/Doisuthep/doisuthep7.jpg";
import doisuthep8 from "@/public/images/Doisuthep/doisuthep8.jpg";
import doisuthep9 from "@/public/images/Doisuthep/doisuthep9.jpg";
import doisuthep10 from "@/public/images/Doisuthep/doisuthep10.jpg";
import doisuthep11 from "@/public/images/Doisuthep/doisuthep11.jpg";
import doisuthep12 from "@/public/images/Doisuthep/doisuthep12.jpg";
import doisuthep13 from "@/public/images/Doisuthep/doisuthep13.jpg";

//EleGrandCanyonGallery
import ElephantGrandCanyon1 from "@/public/images/ElephantGrandCanyon/ElephantGrandCanyon1.jpg";
import ElephantGrandCanyon2 from "@/public/images/ElephantGrandCanyon/ElephantGrandCanyon2.jpg";
import ElephantGrandCanyon3 from "@/public/images/ElephantGrandCanyon/ElephantGrandCanyon3.jpg";
import ElephantGrandCanyon4 from "@/public/images/ElephantGrandCanyon/ElephantGrandCanyon4.jpg";
import ElephantGrandCanyon5 from "@/public/images/ElephantGrandCanyon/ElephantGrandCanyon5.jpg";
import ElephantGrandCanyon6 from "@/public/images/ElephantGrandCanyon/ElephantGrandCanyon6.jpg";
import ElephantGrandCanyon7 from "@/public/images/ElephantGrandCanyon/ElephantGrandCanyon7.jpg";
import ElephantGrandCanyon8 from "@/public/images/ElephantGrandCanyon/ElephantGrandCanyon8.jpg";
import ElephantGrandCanyon9 from "@/public/images/ElephantGrandCanyon/ElephantGrandCanyon9.jpg";
import ElephantGrandCanyon10 from "@/public/images/ElephantGrandCanyon/ElephantGrandCanyon10.jpg";
import ElephantGrandCanyon11 from "@/public/images/ElephantGrandCanyon/ElephantGrandCanyon11.jpg";
import ElephantGrandCanyon12 from "@/public/images/ElephantGrandCanyon/ElephantGrandCanyon12.jpg";
import ElephantGrandCanyon13 from "@/public/images/ElephantGrandCanyon/ElephantGrandCanyon13.jpg";
import ElephantGrandCanyon14 from "@/public/images/ElephantGrandCanyon/ElephantGrandCanyon14.jpg";
import ElephantGrandCanyon15 from "@/public/images/ElephantGrandCanyon/ElephantGrandCanyon15.jpg";
import ElephantGrandCanyon16 from "@/public/images/ElephantGrandCanyon/ElephantGrandCanyon16.jpg";

//ElephantStickyGallery
import ElephantSticky1 from "@/public/images/ElephantSticky/ElephantSticky1.jpg";
import ElephantSticky2 from "@/public/images/ElephantSticky/ElephantSticky2.jpg";
import ElephantSticky3 from "@/public/images/ElephantSticky/ElephantSticky3.jpg";
import ElephantSticky4 from "@/public/images/ElephantSticky/ElephantSticky4.jpg";
import ElephantSticky5 from "@/public/images/ElephantSticky/ElephantSticky5.jpg";
import ElephantSticky6 from "@/public/images/ElephantSticky/ElephantSticky6.jpg";
import ElephantSticky7 from "@/public/images/ElephantSticky/ElephantSticky7.jpg";
import ElephantSticky8 from "@/public/images/ElephantSticky/ElephantSticky8.jpg";
import ElephantSticky9 from "@/public/images/ElephantSticky/ElephantSticky9.jpg";
import ElephantSticky10 from "@/public/images/ElephantSticky/ElephantSticky10.jpg";

//ElephatWhiteGallery
import ElephantWhite1 from "@/public/images/ElephantWhite/ElephantWhite1.jpg";
import ElephantWhite2 from "@/public/images/ElephantWhite/ElephantWhite2.jpg";
import ElephantWhite3 from "@/public/images/ElephantWhite/ElephantWhite3.jpg";
import ElephantWhite4 from "@/public/images/ElephantWhite/ElephantWhite4.jpg";
import ElephantWhite5 from "@/public/images/ElephantWhite/ElephantWhite5.jpg";
import ElephantWhite6 from "@/public/images/ElephantWhite/ElephantWhite6.jpg";
import ElephantWhite7 from "@/public/images/ElephantWhite/ElephantWhite7.jpg";
import ElephantWhite8 from "@/public/images/ElephantWhite/ElephantWhite8.jpg";

//ElephanSanctuaryGallery
import ElephantSanctuary1 from "@/public/images/ElephantSanctuary/ElephantSanctuary1.jpg";
import ElephantSanctuary2 from "@/public/images/ElephantSanctuary/ElephantSanctuary2.jpg";
import ElephantSanctuary3 from "@/public/images/ElephantSanctuary/ElephantSanctuary3.jpg";
import ElephantSanctuary4 from "@/public/images/ElephantSanctuary/ElephantSanctuary4.jpg";
import ElephantSanctuary5 from "@/public/images/ElephantSanctuary/ElephantSanctuary5.jpg";
import ElephantSanctuary6 from "@/public/images/ElephantSanctuary/ElephantSanctuary6.jpg";
import ElephantSanctuary7 from "@/public/images/ElephantSanctuary/ElephantSanctuary7.jpg";
import ElephantSanctuary8 from "@/public/images/ElephantSanctuary/ElephantSanctuary8.jpg";
import ElephantSanctuary9 from "@/public/images/ElephantSanctuary/ElephantSanctuary9.jpg";
import ElephantSanctuary10 from "@/public/images/ElephantSanctuary/ElephantSanctuary10.jpg";
import ElephantSanctuary11 from "@/public/images/ElephantSanctuary/ElephantSanctuary11.jpg";
import ElephantSanctuary12 from "@/public/images/ElephantSanctuary/ElephantSanctuary12.jpg";
import ElephantSanctuary13 from "@/public/images/ElephantSanctuary/ElephantSanctuary13.jpg";
import ElephantSanctuary14 from "@/public/images/ElephantSanctuary/ElephantSanctuary14.jpg";

//Inthanon national park Trekking Kew Mae Pan
import Inthanon1 from "@/public/images/InthanonTrekkingKew/InthanonTrekkingKew1.jpg";
import Inthanon2 from "@/public/images/InthanonTrekkingKew/InthanonTrekkingKew2.jpg";
import Inthanon3 from "@/public/images/InthanonTrekkingKew/InthanonTrekkingKew3.jpg";
import Inthanon4 from "@/public/images/InthanonTrekkingKew/InthanonTrekkingKew4.jpg";
import Inthanon5 from "@/public/images/InthanonTrekkingKew/InthanonTrekkingKew5.jpg";
import Inthanon6 from "@/public/images/InthanonTrekkingKew/InthanonTrekkingKew6.jpg";
import Inthanon7 from "@/public/images/InthanonTrekkingKew/InthanonTrekkingKew7.jpg";
import Inthanon8 from "@/public/images/InthanonTrekkingKew/InthanonTrekkingKew8.jpg";

//inthanon national park Trekking Pha Dok Seaw Water fall
import InthanonPhaDok1 from "@/public/images/InthanonPhaDok/InthanonPhaDok1.jpg";
import InthanonPhaDok2 from "@/public/images/InthanonPhaDok/InthanonPhaDok2.jpg";
import InthanonPhaDok3 from "@/public/images/InthanonPhaDok/InthanonPhaDok3.jpg";
import InthanonPhaDok4 from "@/public/images/InthanonPhaDok/InthanonPhaDok4.jpg";
import InthanonPhaDok5 from "@/public/images/InthanonPhaDok/InthanonPhaDok5.jpg";
import InthanonPhaDok6 from "@/public/images/InthanonPhaDok/InthanonPhaDok6.jpg";
import InthanonPhaDok7 from "@/public/images/InthanonPhaDok/InthanonPhaDok7.jpg";
import InthanonPhaDok8 from "@/public/images/InthanonPhaDok/InthanonPhaDok8.jpg";
import InthanonPhaDok9 from "@/public/images/InthanonPhaDok/InthanonPhaDok9.jpg";
import InthanonPhaDok10 from "@/public/images/InthanonPhaDok/InthanonPhaDok10.jpg";
import InthanonPhaDok11 from "@/public/images/InthanonPhaDok/InthanonPhaDok11.jpg";
import InthanonPhaDok12 from "@/public/images/InthanonPhaDok/InthanonPhaDok12.jpg";
import InthanonPhaDok13 from "@/public/images/InthanonPhaDok/InthanonPhaDok13.jpg";

//A-FUN-DAY
import AFunDay1 from "@/public/images/A-Fun-Day/AFunDay1.jpg";
import AFunDay2 from "@/public/images/A-Fun-Day/AFunDay2.jpg";
import AFunDay3 from "@/public/images/A-Fun-Day/AFunDay3.jpg";
import AFunDay4 from "@/public/images/A-Fun-Day/AFunDay4.jpg";
import AFunDay5 from "@/public/images/A-Fun-Day/AFunDay5.jpg";
import AFunDay6 from "@/public/images/A-Fun-Day/AFunDay6.jpg";
import AFunDay7 from "@/public/images/A-Fun-Day/AFunDay7.jpg";
import AFunDay8 from "@/public/images/A-Fun-Day/AFunDay8.jpg";
import AFunDay9 from "@/public/images/A-Fun-Day/AFunDay9.jpg";
import AFunDay10 from "@/public/images/A-Fun-Day/AFunDay10.jpg";
import AFunDay11 from "@/public/images/A-Fun-Day/AFunDay11.jpg";
import AFunDay12 from "@/public/images/A-Fun-Day/AFunDay12.jpg";
import AFunDay13 from "@/public/images/A-Fun-Day/AFunDay13.jpg"; 
import AFunDay14 from "@/public/images/A-Fun-Day/AFunDay14.jpg";
import AFunDay15 from "@/public/images/A-Fun-Day/AFunDay15.jpg";
import AFunDay16 from "@/public/images/A-Fun-Day/AFunDay16.jpg";
import AFunDay17 from "@/public/images/A-Fun-Day/AFunDay17.jpg";
import AFunDay18 from "@/public/images/A-Fun-Day/AFunDay18.jpg";
import AFunDay19 from "@/public/images/A-Fun-Day/AFunDay19.jpg";
import AFunDay20 from "@/public/images/A-Fun-Day/AFunDay20.jpg";
import AFunDay21 from "@/public/images/A-Fun-Day/AFunDay21.jpg";
import AFunDay22 from "@/public/images/A-Fun-Day/AFunDay22.jpg";
import AFunDay23 from "@/public/images/A-Fun-Day/AFunDay23.jpg";
import AFunDay24 from "@/public/images/A-Fun-Day/AFunDay24.jpg";
import AFunDay25 from "@/public/images/A-Fun-Day/AFunDay25.jpg";


const whiteTemGallery = [
  { src: whiteTem },
  { src: bhuda2 },
  { src: bhuda3 },
  { src: bhudalady },
  { src: image2 },
];

const DoiSuthepGallery = [
  { src: doisuthep1 },
  { src: doisuthep2 },
  { src: doisuthep3 },
  { src: doisuthep4 },
  { src: doisuthep5 },
  { src: doisuthep6 },
  { src: doisuthep7 },
  { src: doisuthep8 },
  { src: doisuthep9 },
  { src: doisuthep10 },
  { src: doisuthep11 },
  { src: doisuthep12 },
  { src: doisuthep13 },
];

const EleGrandCanyonGallery = [
  { src: ElephantGrandCanyon1 },
  { src: ElephantGrandCanyon2 },
  { src: ElephantGrandCanyon3 },
  { src: ElephantGrandCanyon4 },
  { src: ElephantGrandCanyon5 },
  { src: ElephantGrandCanyon6 },
  { src: ElephantGrandCanyon7 },
  { src: ElephantGrandCanyon8 },
  { src: ElephantGrandCanyon9 },
  { src: ElephantGrandCanyon10 },
  { src: ElephantGrandCanyon11 },
  { src: ElephantGrandCanyon12 },
  { src: ElephantGrandCanyon13 },
  { src: ElephantGrandCanyon14 },
  { src: ElephantGrandCanyon15 },
  { src: ElephantGrandCanyon16 },
];

const ElephantStickyGallery = [
  { src: ElephantSticky1 },
  { src: ElephantSticky2 },
  { src: ElephantSticky3 },
  { src: ElephantSticky4 },
  { src: ElephantSticky5 },
  { src: ElephantSticky6 },
  { src: ElephantSticky7 },
  { src: ElephantSticky8 },
  { src: ElephantSticky9 },
  { src: ElephantSticky10 },
];

const ElephantWhiteGallery = [
  { src: ElephantWhite1 },
  { src: ElephantWhite2 },
  { src: ElephantWhite3 },
  { src: ElephantWhite4 },
  { src: ElephantWhite5 },
  { src: ElephantWhite6 },
  { src: ElephantWhite7 },
  { src: ElephantWhite8 },
];

const ElephantSanctuaryGallery = [
  { src: ElephantSanctuary1 },
  { src: ElephantSanctuary2 },
  { src: ElephantSanctuary3 },
  { src: ElephantSanctuary4 },
  { src: ElephantSanctuary5 },
  { src: ElephantSanctuary6 },
  { src: ElephantSanctuary7 },
  { src: ElephantSanctuary8 },
  { src: ElephantSanctuary9 },
  { src: ElephantSanctuary10 },
  { src: ElephantSanctuary11 },
  { src: ElephantSanctuary12 },
  { src: ElephantSanctuary13 },
  { src: ElephantSanctuary14 },
];

const InthanonGallery = [
  { src: Inthanon1 },
  { src: Inthanon2 },
  { src: Inthanon3 },
  { src: Inthanon4 },
  { src: Inthanon5 },
  { src: Inthanon6 },
  { src: Inthanon7 },
  { src: Inthanon8 },
];

const ElephantPhaDokGallery = [
  { src: InthanonPhaDok1 },
  { src: InthanonPhaDok2 },
  { src: InthanonPhaDok3 },
  { src: InthanonPhaDok4 },
  { src: InthanonPhaDok5 },
  { src: InthanonPhaDok6 },
  { src: InthanonPhaDok7 },
  { src: InthanonPhaDok8 },
  { src: InthanonPhaDok9 },
  { src: InthanonPhaDok10 },
  { src: InthanonPhaDok11 },
  { src: InthanonPhaDok12 },
  { src: InthanonPhaDok13 },
];

const AFunDayGallery = [
  { src: AFunDay1 },
  { src: AFunDay2 },
  { src: AFunDay3 },
  { src: AFunDay4 },
  { src: AFunDay5 },
  { src: AFunDay6 },
  { src: AFunDay7 },
  { src: AFunDay8 },
  { src: AFunDay9 },
  { src: AFunDay10 },
  { src: AFunDay11 },
  { src: AFunDay12 },
  { src: AFunDay13 },
  { src: AFunDay14 },
  { src: AFunDay15 },
  { src: AFunDay16 },
  { src: AFunDay17 },
  { src: AFunDay18 },
  { src: AFunDay19 },
  { src: AFunDay20 },
  { src: AFunDay21 },
  { src: AFunDay22 },
  { src: AFunDay23 },
  { src: AFunDay24 },
  { src: AFunDay25 },
];

// Reusable content component for tour itinerary
const TourItinerary = ({ schedule, highlights, included, whatToBring }) => (
  <div className="py-12 md:py-16 px-4">
    <div className="max-w-4xl mx-auto">
      {/* Schedule Section */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
        <div className="bg-gradient-to-r from-green-cyan to-pine-green px-6 py-4">
          <h3 className="text-white text-lg font-semibold flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Tour Schedule
          </h3>
        </div>
        <div className="p-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-3 bg-green-50 px-4 py-3 rounded-lg">
              <div className="w-10 h-10 bg-green-cyan/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Pickup</p>
                <p className="font-semibold text-gray-800">{schedule.pickup}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-amber-50 px-4 py-3 rounded-lg">
              <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Return</p>
                <p className="font-semibold text-gray-800">{schedule.return}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
        <div className="bg-gradient-to-r from-pine-green to-forest-green px-6 py-4">
          <h3 className="text-white text-lg font-semibold flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            Tour Highlights
          </h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-8 h-8 bg-green-cyan/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-cyan font-semibold text-sm">{index + 1}</span>
                </div>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What's Included Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 p-6">
        <h3 className="text-gray-800 text-lg font-semibold mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-green-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          What&apos;s Included
        </h3>
        <div className="flex flex-wrap gap-2">
          {included.map((item, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1.5 bg-green-cyan/10 text-green-cyan px-3 py-1.5 rounded-full text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* What to Bring Section */}
      {whatToBring && whatToBring.length > 0 && (
        <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl border border-amber-100 p-6 mt-8">
          <h3 className="text-gray-800 text-lg font-semibold mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            What to Bring
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {whatToBring.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-gray-700"
              >
                <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
);

const detailId = [
  {
    id: 1,
    slug: "chiangrai-white-temple-blue-temple",
    detail: "Chiangrai White temple Blue temple Big bhuda lady temple",
    src: image2,
    imageGallery: whiteTemGallery,
    price: 1000,
    content: (
      <TourItinerary
        schedule={{ pickup: "7:00 - 7:30 AM", return: "6:00 PM" }}
        highlights={[
          "Visit the stunning White Temple (Wat Rong Khun)",
          "Explore the beautiful Blue Temple",
          "See the Big Buddha statue",
          "Visit the Lady Temple",
          "Relax at Hot Spring",
          "Optional: Long Neck Village (+300 THB/person)"
        ]}
        included={["Transportation", "Ticket fees", "Lunch", "Guide", "Insurance"]}
      />
    ),
  },
  {
    id: 2,
    slug: "doi-suthep-temple-pha-lad-temple",
    detail: "Doi suthep temple + Pha lad temple",
    src: doisuthepBanner,
    imageGallery: DoiSuthepGallery,
    price: 1800,
    content: (
      <TourItinerary
        schedule={{ pickup: "9:00 - 9:30 AM", return: "1:00 PM" }}
        highlights={[
          "Visit Doi Suthep Temple - the most sacred temple in Chiang Mai",
          "Explore the hidden Pha Lad Temple in the forest",
          "Enjoy panoramic views of Chiang Mai city",
          "Private tour experience"
        ]}
        included={["Transportation", "Gasoline", "Ticket fees"]}
      />
    ),
  },
  {
    id: 3,
    slug: "elephant-care-grand-canyon-water-park",
    detail: "Elephant Care + Grand Canyon Water park",
    src: ElephantGrandCanyon11,
    imageGallery: EleGrandCanyonGallery,
    price: 2900,
    content: (
      <TourItinerary
        schedule={{ pickup: "8:00 - 8:30 AM", return: "5:30 PM" }}
        highlights={[
          "Learn about Thai elephants with English-speaking guide",
          "Feed elephants their favorite treats",
          "Walk with elephants through the jungle",
          "Bathe with elephants in the river",
          "Enjoy lunch at the sanctuary",
          "Splash and play at Grand Canyon Water Park"
        ]}
        included={["Transportation", "Guide", "Insurance", "Elephant food", "Lunch", "Drinking water", "Water park ticket"]}
      />
    ),
  },
  {
    id: 4,
    slug: "elephant-care-sticky-water-fall",
    detail: "Elephant Care + Sticky water fall",
    src: ElephantSticky2,
    imageGallery: ElephantStickyGallery,
    price: 1800,
    content: (
      <TourItinerary
        schedule={{ pickup: "8:00 - 8:30 AM", return: "5:30 PM" }}
        highlights={[
          "Learn about Thai elephants with English-speaking guide",
          "Feed elephants their favorite treats",
          "Walk with elephants through the jungle",
          "Bathe with elephants in the river",
          "Enjoy lunch at the sanctuary",
          "Visit the unique Sticky Waterfall - walk up the limestone!"
        ]}
        included={["Transportation", "Guide", "Insurance", "Elephant food", "Lunch", "Drinking water", "Waterfall entrance"]}
      />
    ),
  },
  {
    id: 5,
    slug: "elephant-care-white-water-rafting",
    detail: "Elephant Care + white water rafting",
    src: ElephantWhite6,
    imageGallery: ElephantWhiteGallery,
    price: 2200,
    content: (
      <TourItinerary
        schedule={{ pickup: "8:00 - 8:30 AM", return: "5:30 PM" }}
        highlights={[
          "Learn about Thai elephants with English-speaking guide",
          "Feed elephants their favorite treats",
          "Walk with elephants through the jungle",
          "Bathe with elephants in the river",
          "Enjoy lunch at the sanctuary",
          "Experience thrilling white water rafting adventure"
        ]}
        included={["Transportation", "Guide", "Insurance", "Elephant food", "Lunch", "Drinking water", "Rafting equipment"]}
      />
    ),
  },
  {
    id: 6,
    slug: "mm-elephant-sanctuary-chiang-mai",
    detail: "MM Elephant sanctuary chiang mai",
    src: ElephantSanctuary4,
    imageGallery: ElephantSanctuaryGallery,
    price: 1700,
    content: (
      <TourItinerary
        schedule={{ pickup: "12:00 - 12:30 PM", return: "5:30 PM" }}
        highlights={[
          "Half-day afternoon elephant experience",
          "Learn about Thai elephants with English-speaking guide",
          "Feed elephants their favorite treats",
          "Walk with elephants through the jungle",
          "Bathe with elephants in the river"
        ]}
        included={["Transportation", "Guide", "Insurance", "Elephant food", "Lunch", "Drinking water"]}
      />
    ),
  },
  {
    id: 7,
    slug: "inthanon-national-park-trekking-kew-mae-pan",
    detail: "Inthanon national park Trekking Kew Mae Pan",
    src: Inthanon7,
    imageGallery: InthanonGallery,
    price: 1500,
    content: (
      <TourItinerary
        schedule={{ pickup: "7:00 - 7:30 AM", return: "5:30 PM" }}
        highlights={[
          "Visit the highest point in Thailand",
          "See the King's and Queen's Pagodas",
          "Shop at Hmong Market for local goods",
          "Trek Kew Mae Pan trail (2 hours)",
          "Visit Karen Village at Baan Mae Klang Luang",
          "Marvel at Wachirathan Waterfall"
        ]}
        included={["Transportation", "National park fees", "Local hiking guide", "Lunch", "Insurance"]}
      />
    ),
  },
  {
    id: 8,
    slug: "inthanon-national-park-trekking-pha-dok-seaw-water-fall",
    detail: "Inthanon national park Trekking Pha Dok Seaw Water fall",
    src: InthanonPhaDok6,
    imageGallery: ElephantPhaDokGallery,
    price: 1500,
    content: (
      <TourItinerary
        schedule={{ pickup: "7:00 - 7:30 AM", return: "5:30 PM" }}
        highlights={[
          "Visit the highest point in Thailand",
          "See the King's and Queen's Pagodas",
          "Shop at Hmong Market for local goods",
          "Trek to Pha Dok Seaw Waterfall (2 hours)",
          "Visit Karen Village at Baan Mae Klang Luang",
          "Marvel at Wachirathan Waterfall"
        ]}
        included={["Transportation", "National park fees", "Local hiking guide", "Lunch", "Insurance"]}
      />
    ),
  },
  {
    id: 9,
    slug: "a-fun-day-with-cooking-class-and-elephants",
    detail: "A Fun Day with Cooking Class and Elephants",
    src: AFunDay25,
    imageGallery: AFunDayGallery,
    price: 2800,
    person: 'Ages 1-3 years are free.',
    content: (
      <>
        {/* About Us Section */}
        <div className="py-12 md:py-16 px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green-cyan to-pine-green px-6 py-4">
                <h3 className="text-white text-lg font-semibold flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  About Us
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-pine-green">A Fun Day Cooking Class and Elephants</strong> is designed to offer quality cooking courses and elephant activities for English and Mandarin Chinese speaking visitors and residents in Chiang Mai. We currently have 3 kitchens with a capacity of 34 customers at one time. Our location is in a beautiful setting surrounded by trees.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This product is focusing on being a part of our culture like Thai Cooking Class, starting with the Market Tours and cooking Thai Food with locals who speak English and Mandarin Chinese well.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-amber-800 mb-1">Ethical Elephant Care</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Thai Elephant Observation: we are going to take the customers to learn how Thai Elephants&apos; life, walk, feed and make vitamins if they have any health concerns. <strong className="text-red-600">NO ELEPHANTS RIDING OR HUMAN-LIKE BEHAVIOR</strong> allowed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <TourItinerary
          schedule={{ pickup: "8:30 - 9:00 AM", return: "5:00 PM" }}
          highlights={[
            "Cooking Class pickup (8:30 - 9:00 AM)",
            "Market Tour - explore local Thai market (9:15 - 10:00 AM)",
            "Thai Cooking Class - learn authentic recipes (10:00 AM - 1:45 PM)",
            "Elephants pickup (2:00 PM)",
            "Learn the life of Thai Elephants",
            "Make vitamin balls for elephants",
            "Feed the elephants",
            "Walk with the elephants (2:00 - 5:00 PM)"
          ]}
          included={["Round-trip transportation", "Cooking Class ingredients and utensils", "PDF recipe book", "Elephant food", "Insurance", "Drinking Water"]}
          whatToBring={[
            "Extra clothes",
            "Sunscreen lotion",
            "Swimming suit",
            "Insect spray",
            "Sandals and towel",
            "Your own allergy medication",
            "Rain coats (rainy season)",
            "Winter coats (cool season)"
          ]}
        />
      </>
    ),
  },
];

export async function generateMetadata({ params }) {
  const { slug } = params;
  const detail = detailId.find((item) => item.slug === slug);

  if (!detail) {
    return {
      title: "Tour Not Found",
      description: "The requested tour could not be found.",
    };
  }

  const tourUrl = `https://chiangmaifriendlytour.com/services/detail/${slug}`;

  return {
    title: detail.detail,
    description: `Book ${detail.detail} tour in Chiang Mai. Experience authentic Thai culture with local guides. Includes transportation, guide, and lunch. Starting from ${detail.price} THB. Book now!`,
    keywords: [
      detail.detail,
      "Chiang Mai tour",
      "Thailand tour",
      slug.split("-").join(" "),
    ],
    alternates: {
      canonical: tourUrl,
    },
    openGraph: {
      title: `${detail.detail} | Chiang Mai Friendly Tour`,
      description: `Book ${detail.detail} tour. Includes transportation, guide, and lunch. Starting from ${detail.price} THB.`,
      url: tourUrl,
      type: "website",
    },
  };
}

export function generateStaticParams() {
  return detailId.map(({ slug }) => ({ slug }));
}

export default function Details({ params: { slug } }) {
  const detail = detailId.find((item) => item.slug === slug);

  if (!slug) {
    return <div>Loading...</div>;
  }

  if (!detail) {
    return <div>Not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
        {/* Hero Banner */}
        <BannerService scrImage={detail.src} title={detail.detail} />

        {/* Main Content */}
        <div className="flex-1">
          {/* Title Section */}
          <ServiceDetail detail={detail.detail} />

          {/* Tour Itinerary */}
          {detail.content}

          {/* Pricing */}
          <div className="py-8 md:py-12 bg-gradient-to-b from-white to-gray-50">
            <Price price={detail.price} person={detail.person} />
          </div>

          {/* Image Gallery */}
          {detail.imageGallery && (
            <ImageGalleryService imageGallery={detail.imageGallery} />
          )}

          {/* Booking Form */}
          <Booking tour={detail.detail} price={detail.price} />
        </div>
      </div>
  );
}
