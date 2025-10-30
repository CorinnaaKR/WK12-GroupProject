"use client";
import Script from "next/script";
import InkButtons from "@/components/InkButtons";
// import "./story.css";
import { useState, useEffect } from "react";
// import { Story } from "inkjs";
const useScript = (url) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = url;
    script.type = "module";
    script.crossOrigin = "use-credentials";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};
export default function Story() {
  useScript("/ink-files/ink.js");
  useScript("/ink-files/main.js");
  return (
    <>
      <main className="pageContainer">
        <section className="storySection">
          <div className="outerContainer">
            <div id="story" className="container"></div>
          </div>
        </section>
        <InkButtons />
        {/* <Script
            src="/ink-files/ink.js"
            strategy="beforeInteractive"
            onReady={() => {}}
          /> */}

        {/* <Script
          async
  
        <Script
  
          type="module"
          src="/ink-files/main.js"
          strategy="afterInteractive"
          onReady={() => {
            console.log("main.js loaded and executed");
          }}
          crossOrigin="use-credentials"
        /> */}
      </main>
    </>
  );
}
