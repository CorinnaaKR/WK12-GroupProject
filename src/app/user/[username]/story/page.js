"use client";
import Script from "next/script";
import InkButtons from "@/components/InkButtons";
import "./story.css";

export const metadata = {
  title: "Interactive Story | Heli ", // Becomes "Interactive Story | Heli"
  description: "An interactive story about radicalisation",
};

export default function StoryPage() {
  return (
    <main className="pageContainer">
      <section className="storySection">
        <div className="outerContainer">
          <div id="story" className="container"></div>
        </div>
      </section>
      <InkButtons />
      <Script src="/ink-files/firstDraft.js"></Script>
      <Script src="/ink-files/ink.js"></Script>
      <Script src="/ink-files/main.js"></Script>
    </main>
  );
}
