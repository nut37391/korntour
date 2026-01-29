import React from "react";

export default function thankyou() {
  return (
    <div className="flex flex-col pt-[55px] min-h-screen ">
      <div className="flex flex-col justify-center items-center">
        <div className=" w-1/2 flex justify-center">
          <h1 className="text-3xl font-bold flex  text-dark-red">
            Thank you for your booking
          </h1>
        </div>
        <div className=" w-1/2 flex justify-center">
          <p className="text-lg text-gray-stack text-center">
            We will send you a confirmation email shortly.
          </p>
        </div>
      </div>
    </div>
  );
}
