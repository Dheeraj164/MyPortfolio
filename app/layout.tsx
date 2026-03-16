import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: {
    default: "Dheeraj Kumar Ravi Gowda | Full Stack Developer",
    template: "%s | Dheeraj Kumar Ravi Gowda",
  },
  description:
    "Portfolio of Dheeraj Kumar Ravi Gowda, a Full Stack Developer specializing in React, Next.js, WebRTC, Electron, and AWS serverless architectures. Explore projects including real-time streaming systems, cloud-native applications, and scalable web platforms.",

  keywords: [
    "Dheeraj Kumar Ravi Gowda",
    "Full Stack Developer",
    "React Developer",
    "Next.js Portfolio",
    "WebRTC Developer",
    "Electron Developer",
    "AWS Serverless",
    "Software Engineer Portfolio",
  ],

  authors: [{ name: "Dheeraj Kumar Ravi Gowda" }],
  creator: "Dheeraj Kumar Ravi Gowda",

  openGraph: {
    title: "Dheeraj Kumar Ravi Gowda | Full Stack Developer",
    description:
      "Full Stack Developer building scalable web applications, real-time systems, and cloud-native platforms using React, Next.js, WebRTC, Electron, and AWS.",
    url: "https://yourdomain.com",
    siteName: "Dheeraj Kumar Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dheeraj Kumar Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dheeraj Kumar Ravi Gowda | Full Stack Developer",
    description:
      "Portfolio showcasing real-time applications, WebRTC systems, and serverless cloud architectures.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
