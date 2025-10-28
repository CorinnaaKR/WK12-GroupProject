import { useAuth } from "@clerk/nextjs";
import {
  SignedIn,
  SignedOut,
} from "@clerk/nextjs/dist/types/components.server";
import Link from "next/link";

export default function Navbar() {
  let currUser = useAuth();
  let userID = currUser.userId;
  return (
    <>
      <SignedIn>
        <Link href="/">Home</Link>
        <Link href={`/user/${userID}`}>Profile</Link>
        <Link href={`/user/${userID}/story`}>Story</Link>
      </SignedIn>
      <SignedOut>
        <Link href="/">Home</Link>
      </SignedOut>
    </>
  );
}
