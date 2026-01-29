import React from "react";
import { BookingDetail } from "@/app/component";
import { db } from "@/app/firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

// export async function generateStaticParams() {
//   return [
//     {
//       slug: "1",
//     },
//     {
//       slug: "2",
//     },
//     {
//       slug: "3",
//     },
//   ];
// }

export async function getStaticPaths() {
  // In case you want to pre-generate some paths
  const snapshot = await getDocs(collection(db, "booking"));
  const paths = [];
  snapshot.forEach((item) => {
    paths.push({
      params: { slug: String(item.id) },
    });
  });
  return {
    paths,
    fallback: true,
  };
}

const PaymentPage = ({ params }) => {
  const { slug } = params;

  return (
    <div className="flex flex-col pt-[55px] min-h-screen ">
      <div className="flex flex-col justify-center items-center">
        <div className=" w-1/2 flex justify-center">
          <h1 className="text-3xl font-bold flex  text-dark-red">
            Payment Successful
          </h1>
        </div>

        <div className="w-1/2 bg-black pl-[43px] pt-[15px] pb-[15px] mt-[45px] rounded-t-[8px]">
          <p className="text-2xl text-[#D9D9D9]">Booking Detail</p>
        </div>
        <BookingDetail refId={slug} />
        {/* <div className="w-1/2 outline-offset-1 shadow-xl rounded-b-[8px] border flex flex-col pl-10 pr-10 pt-6 pb-6">
          <div className="flex flex-row">
            <p className="text-base font-bold text-black">Tour:</p>
            <p className="text-base text-dark-red ml-[4px] capitalize">
              {bookingDetails.tour}
            </p>
          </div>
          <div className="mt-[13px] flex flex-row">
            <p className="text-base font-bold text-black">Name:</p>

            <span className="text-base text-dark-red ml-[4px]">
              {bookingDetails.name} {bookingDetails.lastname}
            </span>
          </div>
          <div className="mt-[13px] flex flex-row">
            <p className="text-base font-bold text-black">Guest:</p>
            <p className="text-base text-dark-red ml-[4px]">
              {bookingDetails.guest} persons
            </p>
          </div>
          <div className="mt-[13px] flex flex-row">
            <p className="text-base font-bold text-black">Date:</p>
            <p className="text-base text-dark-red ml-[4px]">
              {bookingDetails.date}
            </p>
          </div>
          <div className="mt-[13px] flex flex-row">
            <p className="text-base font-bold text-black">Total:</p>
            <p className="text-base text-dark-red ml-[4px]">
              {bookingDetails.total} THB
            </p>
          </div>
          <p className=" text-pixie-green mt-3">
            * Your booking detail has been sent to your email. Please check your
            inbox/spam.
          </p>
        </div> */}
      </div>
    </div>
  );
};
export const dynamicParams = true;
export default PaymentPage;
