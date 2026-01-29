import nodemailer from "nodemailer";
// import * as Handlebars from "handlebars";
import ejs from "ejs";

import { contact_us } from "@/public/mail-templates/contact-us-copy.jsx";
import { resolve } from "styled-jsx/css";

export default async function sendMail({ name, email, tel, msg }) {
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
          subject: `A message from ${name}`,
          // html: compileContactUsTemplate({ name, email, tel, message: msg }),
          text: msg,
          cc: email,
          html: "<h1>test</h1>",
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

export function compileContactUsTemplate({ name, email, tel, message }) {
  let html = ejs.render(contact_us, {
    name: name,
    email: email,
    tel: tel,
    message: message,
  });
  // const template = Handlebars.compile(contact_us);
  // const htmlBody = template({
  //   name: name,
  //   tel: tel,
  //   email: email,
  //   message: message,
  // });
  // return htmlBody;
  return html;
}
