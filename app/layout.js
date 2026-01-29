import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://mrkorntourcnx.com"),
  title: "Chaing Mai Friendly Tour & Travel Chiang Mai",
  description: "The best tour and travel in Chiang Mai",
  openGraph: {
    title: "Chaing Mai Friendly Tour & Travel Chiang Mai",
    description: "The best tour and travel in Chiang Mai",
    type: "website",
    locale: "en_US",
    url: "https://mrkorntourcnx.com",
    site_name: "Chaing Mai Friendly Tour & Travel Chiang Mai",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
