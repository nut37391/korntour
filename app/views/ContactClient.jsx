/* eslint-disable @next/next/no-img-element */
"use client";
import { z } from "zod";
import { useState } from "react";
import axios from "axios";

import { TextInput, Button, TextArea, MapComponent } from "../component";
import { JungleBackdrop, QrCard } from "../component/Jungle";
import { site } from "../data/site";
import { altOf } from "../data/imageAlts";
import { getDict } from "../i18n/dict";
import {
  EnvelopeIcon,
  FacebookIcon,
  InstagramIcon,
  LineIcon,
  MapMarkerIcon,
  PhoneIcon,
  TikTokIcon,
} from "../component/Icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactClient({ qr, banner, lang = "en" }) {
  const t = getDict(lang).contact;
  const c = getDict(lang).common;
  const [isLoading, setIsLoading] = useState(false);
  // Bumped after a successful send to remount (and so clear) the form.
  const [formKey, setFormKey] = useState(0);
  const [name, setName] = useState(false);
  const [lastname, setLastame] = useState(false);
  const [email, setEmail] = useState(false);
  const [tel, setTel] = useState(false);
  const [msg, setMsg] = useState(false);
  const [code, setCode] = useState(false);

  const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
  );

  const stringSchema = z.string().min(1);
  const emailSchema = z.string().email();
  const telSchema = z.string().regex(phoneRegex, t.errTel);

  const Contact = z.object({
    name: z.string().min(1),
    lastname: z.string().min(1),
    email: z.string().email(),
    tel: z.string().regex(phoneRegex, t.errTel),
    message: z.string().min(1),
    code: z.string().min(3),
  });

  function onValidate(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const lastname = formData.get("lastname");
    const email = formData.get("email");
    const tel = formData.get("tel");
    const message = formData.get("message");
    const code = formData.get("code");
    const result = Contact.safeParse({
      name: name,
      lastname: lastname,
      email: email,
      tel: tel,
      message: message,
      code: code,
    });
    if (result.success) {
      return true;
    } else {
      const errors = result.error.flatten().fieldErrors;
      if (errors.name) setName(true);
      else setName(false);
      if (errors.lastname) setLastame(true);
      else setLastame(false);
      if (errors.email) setEmail(true);
      else setEmail(false);
      if (errors.tel) setTel(true);
      else setTel(false);
      if (errors.message) setMsg(true);
      else setMsg(false);
      if (errors.code) setCode(true);
      else setCode(false);

      return false;
    }
  }

  function onValidates(event) {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "name") {
      const res = stringSchema.safeParse(value);
      if (res.success) setName(false);
      else setName(true);
    }
    if (name === "lastname") {
      const res = stringSchema.safeParse(value);
      if (res.success) setLastame(false);
      else setLastame(true);
    }
    if (name === "email") {
      const res = emailSchema.safeParse(value);
      if (res.success) setEmail(false);
      else setEmail(true);
    }
    if (name === "tel") {
      const res = telSchema.safeParse(value);
      if (res.success) setTel(false);
      else setTel(true);
    }
    if (name === "message") {
      const res = stringSchema.safeParse(value);
      if (res.success) setMsg(false);
      else setMsg(true);
    }
    if (name === "code") {
      const res = stringSchema.safeParse(value);
      if (res.success) setCode(false);
      else setCode(true);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const isValid = onValidate(event);
    if (isValid) {
      onSendEmail(formData);
    }
  }

  const notify = () => {
    toast.success(t.sent, {
      position: "top-center",
    });
  };

  const onSendEmail = async (formData) => {
    const name = formData.get("name");
    const email = formData.get("email");
    const tel = formData.get("tel");
    const message = formData.get("message");
    try {
      setIsLoading(true);
      const res = await axios({
        method: "post",
        url: "https://app-sb2bzrnqyq-uc.a.run.app/contact-mail",
        data: {
          email: email,
          name: name,
          tel: tel,
          message: message,
        },
      });
      notify();
      setFormKey((k) => k + 1);
    } catch (err) {
      console.error(err);
      toast.error(t.error);
    } finally {
      setIsLoading(false);
    }
  };

  const info = [
    {
      icon: <PhoneIcon className="w-7 h-7" />,
      label: t.phone,
      lines: [{ text: site.phoneDisplay, href: `tel:${site.phone}` }, { text: t.available }],
    },
    {
      icon: <MapMarkerIcon className="w-7 h-7" />,
      label: t.address,
      lines: site.address.map((text) => ({ text })),
    },
    {
      icon: <EnvelopeIcon className="w-7 h-7" />,
      label: t.email,
      lines: [{ text: site.email, href: `mailto:${site.email}` }, { text: t.reply }],
    },
  ];

  const socials = [
    { href: site.social.facebook, label: "Facebook", Icon: FacebookIcon },
    { href: site.social.instagram, label: "Instagram", Icon: InstagramIcon },
    { href: site.social.tiktok, label: "TikTok", Icon: TikTokIcon },
    { href: site.social.line, label: "LINE", Icon: LineIcon },
  ];

  const faqs = t.faqs;

  // Dark filled inputs to match the page (NextUI slot classes).
  const field = {
    inputWrapper:
      "bg-white/[0.04] border-white/10 rounded-md data-[hover=true]:border-ember-500/60 group-data-[focus=true]:border-ember-500",
    input: "!text-white placeholder:text-white/35",
    label: "!text-white/60 text-xs uppercase tracking-widest",
  };

  const Accent = ({ children }) => (
    <p className="text-center font-hand text-3xl text-ember-400 sm:text-4xl">{children}</p>
  );

  return (
    <div className="min-h-screen bg-jungle-950 text-white">
      {/* Photo banner */}
      <section className="px-4 pt-4 lg:px-6">
        <div className="relative flex h-[340px] items-center justify-center overflow-hidden rounded-[1.5rem] sm:h-[420px]">
          {banner ? (
            <img src={banner} alt={altOf(banner, undefined, lang)} className="absolute inset-0 h-full w-full object-cover" />
          ) : (
            <JungleBackdrop />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-jungle-950/70 via-jungle-950/50 to-jungle-950/80" />
          <div className="relative text-center">
            <h1 className="border-[3px] border-white px-6 py-3 font-display uppercase text-4xl tracking-wide sm:px-10 sm:text-6xl">
              {t.title1} <span className="text-ember-500">{t.title2}</span>
            </h1>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
              {site.name}
            </p>
          </div>
        </div>
      </section>

      {/* Info columns */}
      <section className="px-5 pt-20 lg:px-10">
        <Accent>{t.getInTouch}</Accent>
        <div className="mx-auto mt-12 grid max-w-5xl md:grid-cols-3">
          {info.map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col items-center px-6 py-6 text-center ${
                i > 0 ? "border-t border-ember-500/60 md:border-l md:border-t-0" : ""
              }`}
            >
              <span className="text-ember-400">{item.icon}</span>
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.25em] text-ember-400">{item.label}</p>
              <div className="mt-3 space-y-1 text-sm text-white/75">
                {item.lines.map((line) =>
                  line.href ? (
                    <a key={line.text} href={line.href} className="block break-all font-semibold text-white hover:text-ember-400">
                      {line.text}
                    </a>
                  ) : (
                    <p key={line.text}>{line.text}</p>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="px-5 pt-20 lg:px-10">
        <div className="mx-auto max-w-2xl">
          <p className="text-center text-sm font-semibold uppercase leading-7 tracking-[0.2em] text-white/80">
            {t.formIntro1}
            <br />
            {t.formIntro2}
          </p>
          <form key={formKey} onSubmit={handleSubmit} onChange={onValidates} className="mt-10">
            <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-2">
              <TextInput
                name="name"
                id="id"
                label={t.firstName}
                placeholder={c.firstNamePh}
                isInvalid={name}
                color={name ? "danger" : "default"}
                errorMessage={t.errName}
                classNames={field}
              />
              <TextInput
                name="lastname"
                label={t.lastName}
                placeholder={c.lastNamePh}
                isInvalid={lastname}
                color={lastname ? "danger" : "default"}
                errorMessage={t.errLastname}
                classNames={field}
              />
            </div>
            <TextInput
              name="email"
              label={t.emailLabel}
              type="email"
              placeholder={c.emailPh}
              isInvalid={email}
              color={email ? "danger" : "default"}
              errorMessage={t.errEmail}
              classNames={field}
            />
            <p className="mb-2 text-xs uppercase tracking-widest text-white/60">{t.phoneLabel}</p>
            <div className="flex gap-3">
              <div className="w-24">
                <TextInput
                  name="code"
                  aria-label={`${t.phoneLabel} – ${c.countryCode}`}
                  isInvalid={code}
                  color={code ? "danger" : "default"}
                  errorMessage={t.errRequired}
                  placeholder="+66"
                  classNames={field}
                />
              </div>
              <div className="flex-1">
                <TextInput
                  name="tel"
                  aria-label={t.phoneLabel}
                  placeholder="81-234-5678"
                  isInvalid={tel}
                  color={tel ? "danger" : "default"}
                  errorMessage={t.errTel}
                  classNames={field}
                />
              </div>
            </div>
            <TextArea
              name="message"
              label={t.message}
              placeholder={t.messagePlaceholder}
              isInvalid={msg}
              color={msg ? "danger" : "default"}
              errorMessage={t.errMessage}
              classNames={field}
            />
            <div className="mt-4 flex justify-center">
              <Button
                type="submit"
                text={t.send}
                size="h-12 px-10 text-sm font-bold uppercase tracking-widest"
                isLoading={isLoading}
              />
            </div>
          </form>
          <ToastContainer autoClose={3000} />
        </div>
      </section>

      {/* Connect */}
      <section className="px-5 pt-20 lg:px-10">
        <Accent>{t.connect}</Accent>
        <div className="mt-8 flex justify-center gap-4">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-12 w-12 items-center justify-center rounded-lg bg-ember-500 text-white transition-all hover:-translate-y-1 hover:bg-ember-400"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
        {qr && (
          <div className="mt-10 flex justify-center">
            <QrCard src={qr} dark lang={lang} />
          </div>
        )}
      </section>

      {/* FAQ */}
      <section className="px-5 pt-24 lg:px-10">
        <Accent>{t.goodToKnow}</Accent>
        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-xl border border-white/10 bg-white/[0.03] px-6 py-5 transition-colors open:border-ember-500/40 open:bg-white/[0.06]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">
                {faq.q}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-lg transition-transform duration-300 group-open:rotate-45 group-open:bg-ember-500">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Map */}
      <section className="px-4 pb-4 pt-24 lg:px-6">
        <div className="h-[420px] overflow-hidden rounded-[1.5rem]">
          <MapComponent dark directionsLabel={t.directions} />
        </div>
      </section>
    </div>
  );
}
