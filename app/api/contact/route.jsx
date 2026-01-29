import { NextResponse, NextRequest } from "next/server";
import sendMail from "../../lib/mail";

// Handles POST requests to /api

export async function POST(request) {
  try {
    const formData = await request.formData();
    const name = formData.get("name");
    const lastname = formData.get("lastname");
    const code = formData.get("code");
    const tel = formData.get("tel");
    const email = formData.get("email");
    const message = formData.get("message");
    const res = await sendMail({
      name: `${name} ${lastname}`,
      email: email,
      tel: `${code} ${tel}`,
      msg: message,
    });

    if (res.success) {
      return NextResponse.json({ message: "Success: email was sent" });
    }
    return NextResponse.status(400).json({ message: res.error });
  } catch (error) {
    NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}
