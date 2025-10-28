"use client";

import { redirect, useRouter } from "next/navigation";

export default function NavButton({ href, buttonText }) {
  const router = useRouter();
  function redirectClient() {
    router.replace(`${href}`);
  }
  return (
    <>
      <button onClick={redirectClient}>{buttonText}</button>
    </>
  );
}
