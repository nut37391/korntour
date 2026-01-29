import Image from "next/image";
import React from "react";
import { Anuphan } from "next/font/google";
import Link from "next/link";
// import { ScrollLink } from "react-scroll";

/// import image
import icon11 from "../../public/images/icon11.png";
import igIcon from "../../public/images/icon/ig.png";
import fbIcon from "../../public/images/icon/facebook.png";
import youtubeIcon from "../../public/images/icon/youtube.png";
import phoneIcon from "../../public/images/icon/phone.png";
import emailIcon from "../../public/images/icon/email.png";

const anuphan = Anuphan({ subsets: ["latin"], weights: [400, 700] });

const Footer = () => {
  return (
    <footer
      className={`bg-navy-blue text-white w-full ${anuphan.className}`}
    >
      {/* Top Accent Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-[1440px] mx-auto w-full py-8 px-6 lg:px-20">
        {/* Main Footer Content - Single Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Logo & Social */}
          <div className="flex items-center gap-6">
            <Image src={icon11} alt="logo" width={80} height={80} />
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/elephantcaregrandcanyonjumping"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-all duration-300"
              >
                <Image src={igIcon} alt="Instagram" width={14} height={14} />
              </a>
              <a
                href="https://www.facebook.com/share/185CkrrwhC/"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-all duration-300"
              >
                <Image src={fbIcon} alt="Facebook" width={14} height={14} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-all duration-300"
              >
                <Image src={youtubeIcon} alt="YouTube" width={14} height={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <Link href="/services" className="text-white/70 hover:text-gold transition-colors">
              Services
            </Link>
            <Link href="/contact-us" className="text-white/70 hover:text-gold transition-colors">
              Contact
            </Link>
            <Link href="/privacy-policy" className="text-white/70 hover:text-gold transition-colors">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="text-white/70 hover:text-gold transition-colors">
              Terms
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
            <a href="tel:+66622830334" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Image src={phoneIcon} alt="Phone" width={12} height={12} />
              (66) 62-283-0334
            </a>
            <a href="mailto:ChiangmaiFriendlyTour.cnx@gmail.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Image src={emailIcon} alt="Email" width={12} height={12} />
              ChiangmaiFriendlyTour.cnx@gmail.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-white/10" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>© 2024 CHIANG MAI FRIENDLY TOUR All rights reserved.</p>
          <p>Chiang Mai, Thailand</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
