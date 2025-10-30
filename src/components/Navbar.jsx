import { SignedIn, SignedOut } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function Navbar() {
  let currUser = await currentUser();
  let username = currUser.username;
  return (
    <>
      <SignedIn>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href={`/user/${username}`}>Profile</Link>
        <Link href={`/user/${username}/story`}>Story</Link>
        <Link href="/resources">Resources</Link>
        <Link href="/feedback">Feedback</Link>


        
      </SignedIn>
      <SignedOut>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href={`/user/${username}/story`}>Story</Link>
        <Link href="/resources">Resources</Link>
        <Link href="/feedback">Feedback</Link>

      </SignedOut>
    </>
  );
}