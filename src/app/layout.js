import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

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
  description: "Vamsi Next.js Project resort booking site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <meta name="google-site-verification" content="nGew1Jmg4Z9p78jCp0CcNI4VM0OpuEyrWc7aeEykKeY" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
