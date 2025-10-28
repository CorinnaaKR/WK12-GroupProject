"use client";
import Link from "next/link";

export default function ErrorPage({ error }) {
  return (
    <>
      <h1>Oopsies. Error! </h1>
      <h2>Back the way you came, you little rebel ⚠️</h2>
      <p>{error}</p>
      <Link href={"/"}>Go home</Link>
    </>
  );
}
