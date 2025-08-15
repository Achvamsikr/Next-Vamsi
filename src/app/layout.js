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
  name: "nGew1Jmg4Z9p78jCp0CcNI4VM0OpuEyrWc7aeEykKeY",
  description:"Nellore district,Andra Pradesh(state),India mobile:9879*****2 See traveler reviews, candid photos, and great deals for Hotel Vamsi Residency, ranked"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="New booking site in nellore" content="Nellore district,Andra Pradesh(state),India mobile:9879*****2 See traveler reviews, candid photos, and great deals for Hotel Vamsi Residency, ranked " />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
