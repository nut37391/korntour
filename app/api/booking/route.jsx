import { NextResponse, NextRequest } from "next/server";
import bookingRequest from "../../lib/BookingRequest";

// Handles POST requests to /api

export async function POST(request) {
  try {
    const body = await request.json();
    await bookingRequest({
      tour: body.tour,
      name: body.name,
      email: body.email,
      tel: body.tel,
      date: body.date,
      guests: body.guests,
      message: body.message,
      paid_at: body.paid_at,
      charge_id: body.charge_id,
      amount: body.amount,
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    NextResponse.status(400).json({ message: "COULD NOT SEND MESSAGE" });
  }
}
