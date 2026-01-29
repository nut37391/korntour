import nodemailer from "nodemailer";
import * as Handlebars from "../../node_modules/handlebars/dist/handlebars.js";

import { booking_req } from "@/public/mail-templates/booking-request.jsx";

export default async function sendBooking(props) {
  const { SMTP_PASSWORD, SMTP_EMAIL } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    await new Promise((resolve, reject) => {
      transport.verify((error, success) => {
        if (error) {
          reject(error);
        } else {
          resolve(success);
        }
      });
    });

    await new Promise((resolve, reject) => {
      transport.sendMail(
        {
          from: SMTP_EMAIL,
          to: "korntour8@gmail.com",
          subject: `A Booking from ${props.name}`,
          text: msg,
          cc: props.email,
        },
        (error, info) => {
          if (error) {
            reject(error);
          } else {
            resolve(info);
          }
        }
      );
    });
  } catch (e) {
    // console.log(e);
  }
}

export function compileBookingTemplate(props) {
  const template = Handlebars.compile(booking_req);
  const htmlBody = template(props);
  return htmlBody;
}
