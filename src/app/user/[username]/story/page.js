"use client";
import Script from "next/script";
import InkButtons from "@/components/InkButtons";
import "./story.css";
import { useState, useRef } from "react";

export default function StoryPage() {
  // Use refs to track loading without causing re-renders that unmount scripts
  const inkLoadedRef = useRef(false);
  const storyLoadedRef = useRef(false);

  // Use state only to trigger conditional rendering of subsequent scripts
  const [inkLoaded, setInkLoaded] = useState(false);
  const [storyLoaded, setStoryLoaded] = useState(false);

  const handleInkLoad = () => {
    console.log("ink.js loaded");
    if (!inkLoadedRef.current) {
      inkLoadedRef.current = true;
      setInkLoaded(true);
    }
  };

  const handleStoryLoad = () => {
    console.log("firstDraft.js loaded");
    if (!storyLoadedRef.current) {
      storyLoadedRef.current = true;
      setStoryLoaded(true);
    }
  };

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
        onLoad={handleInkLoad}
      />
      {(inkLoaded || inkLoadedRef.current) && (
        <Script
          src="/ink-files/firstDraft.js"
          strategy="afterInteractive"
          onLoad={handleStoryLoad}
        />
      )}
      {(storyLoaded || storyLoadedRef.current) && (
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
