"use client";
import CommentsPage from "@/app/comments/page.js";
import React, { useState } from "react";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <CommentsPage />
    </div>
  );
}
