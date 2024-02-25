"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import React from "react";
// import './globals.css'
import "../css/bootstrap.min.css";
import "../css/animate.min.css";
import "../css/aos.min.css";
import "../css/magnific-popup.css";
import "../css/icofont.min.css";
import "../css/slick.css";
import "../css/swiper-bundle.min.css";
import "../css/style.css";
import { NavBar } from "./Components/NavBar/NavBar";
import { Provider } from "react-redux";
import { store } from "./Store";
import Main from "./main";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider
          store={store}
          children={
            <>
              <NavBar />
              <Main children={children} />
            </>
          }
        />
        <script src="/js/vendor/modernizr-3.5.0.min.js"></script>
        <script src="/js/vendor/jquery-3.6.0.min.js"></script>
        <script src="/js/popper.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        <script src="/js/isotope.pkgd.min.js"></script>
        <script src="/js/slick.min.js"></script>
        <script src="/js/jquery.meanmenu.min.js"></script>
        <script src="/js/ajax-form.js"></script>
        <script src="/js/wow.min.js"></script>
        <script src="/js/jquery.scrollUp.min.js"></script>
        <script src="/js/imagesloaded.pkgd.min.js"></script>
        <script src="/js/jquery.magnific-popup.min.js"></script>
        <script src="/js/waypoints.min.js"></script>
        <script src="/js/jquery.counterup.min.js"></script>
        <script src="/js/plugins.js"></script>
        <script src="/js/swiper-bundle.min.js"></script>
        <script src="/js/main.js"></script>
      </body>
    </html>
  );
}
