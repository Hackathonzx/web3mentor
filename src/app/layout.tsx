"use client";

import localFont from "next/font/local";
import "./globals.css";
import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect, useState } from 'react';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Web3mentor</title>
        <meta name="description" content="Web3 education app" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {isClient ? (
          <Router>
            {children}
          </Router>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
