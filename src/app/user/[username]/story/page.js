"use client";

import Script from "next/script";
import InkButtons from "@/components/InkButtons";
import "./story.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function StoryPage() {
  let router = useRouter();
  useEffect(() => {
    let refreshInterval = setInterval(() => {
      router.refresh();
    }, 1000);
    return () => {
      clearInterval(refreshInterval);
    };
  });
  return (
    <main className="pageContainer">
      <section className="storySection">
        <div className="outerContainer">
          <div id="story" className="container"></div>
        </div>
      </section>
      <InkButtons />
      <Script src="/ink-files/ink.js"></Script>
      <Script src="/ink-files/firstDraft.js"></Script>
      <Script src="/ink-files/main.js"></Script>
    </main>
  );
}
