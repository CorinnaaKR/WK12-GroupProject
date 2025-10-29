"use client";
import Script from "next/script";
import InkButtons from "@/components/InkButtons";
import "./story.css";
import { useState } from "react";

export default function StoryPage() {
  const [inkLoaded, setInkLoaded] = useState(false);
  const [storyLoaded, setStoryLoaded] = useState(false);
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
        strategy="afterInteractive"
        onLoad={() => {
          console.log("ink.js loaded");
          setInkLoaded(true);
        }}
      />
      {inkLoaded && (
        <Script
          src="/ink-files/firstDraft.js"
          strategy="afterInteractive"
          onLoad={() => {
            console.log("firstDraft.js loaded");
            setStoryLoaded(true);
          }}
        />
      )}
      {storyLoaded && (
        <Script
          src="/ink-files/main.js"
          strategy="afterInteractive"
          onLoad={() => {
            console.log("main.js loaded and executed");
          }}
        />
      )}
    </main>
  );
}
