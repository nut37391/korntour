"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "@/app/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";

const BookingDetail = (props) => {
  const { refId } = props;
  const [bookingDetails, setBookingDetails] = useState();

  useEffect(() => {
    console.log("OPEN");
    async function fetch() {
      const data = await fetchData();
      if (data) {
        setBookingDetails(data);
        setTimeout(() => {
          onSendEmail();
        }, 1000);
      }
    }
    fetch();
  }, [refId]);

  const fetchData = async () => {
    try {
      console.log("fetch data", refId);
      const querySnapshot = await getDoc(doc(db, "booking", refId));
      console.log("querySnapshot", querySnapshot);
      if (querySnapshot.exists()) {
        console.log(querySnapshot.data());
        return querySnapshot.data();
      } else {
        console.log("No such document");
      }
    } catch (error) {
      console.log("error", error);
      return null;
    }
  };

  const onSendEmail = async () => {
    try {
      const data = {
        email: bookingDetails.email,
        name: `${bookingDetails.name} ${bookingDetails.name}`,
        tour: bookingDetails.tour,
        amount: bookingDetails.total,
        date: bookingDetails.date,
        code: bookingDetails.code,
        tel: bookingDetails.tel,
        message: bookingDetails.msg,
        guests: bookingDetails.guest,
        paid_at: new Date(),
        charge_id: refId,
      };
      const response = await axios({
        url: "https://app-sb2bzrnqyq-uc.a.run.app/booking",
        method: "post",
        data: data,
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("response", response);
      // if (!response.ok) {
      //   throw new Error(`Response status: ${response.status}`);
      // }
    } catch (error) {
      console.log("errorOnSendEmail", error);
    }
  };
  if (!bookingDetails) {
    return <div className=" bg-white" />;
  }
  return (
    <div className="w-1/2 outline-offset-1 shadow-xl rounded-b-[8px] border flex flex-col pl-10 pr-10 pt-6 pb-6">
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
    </div>
  );
};

export default BookingDetail;
