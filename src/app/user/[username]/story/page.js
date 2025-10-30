"use client";
import Script from "next/script";
import InkButtons from "@/components/InkButtons";
import "./story.css";


export default function StoryPage() {
  return (
    <main className="pageContainer">
      <section className="storySection">
        <div className="outerContainer">
          <div id="story" className="container"></div>
        </div>
      </section>
      <InkButtons />
      <Script
        src="/ink-files/ink.js"
        strategy="beforeInteractive"
        onReady={() => {
          console.log("ink.js loaded");
        }}
      />
      <Script
        type="module"
        src="/ink-files/main.js"
        strategy="afterInteractive"
        onReady={() => {
          console.log("main.js loaded and executed");
        }}
        crossOrigin="use-credentials"
      />
    </main>
  );
}
