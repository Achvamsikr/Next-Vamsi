import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vamsi resort booking site",
  name: "More than just your place to stay – Booking.com offers all types of accommodation. From take off to landing and everything in between - book your whole trip with us. Hotels. Hostels.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="More than just your place to stay – Booking.com offers all types of accommodation. From take off to landing and everything in between - book your whole trip with us. Hotels. Hostels." />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
