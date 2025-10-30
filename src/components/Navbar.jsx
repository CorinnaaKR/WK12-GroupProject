import { SignedIn, SignedOut } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
// import { revalidatePath } from "next/cache";
import Link from "next/link";
// import { redirect } from "next/navigation";

export default async function Navbar() {
  let currUser = await currentUser();
  let username = currUser.username;

  // async function redirectToStory() {
  //   "use server";
  //   revalidatePath(`/user/${username}/story`);
  //   redirect(`/user/${username}/story`);
  // }

  return (
    <>
      <SignedIn>
        {/* <form action={redirectToStory}>
          <button type="submit">Story</button>
        </form> */}

        <Link className="navLinks" href="/">
          Home
        </Link>
        <Link className="navLinks" href="/about">
          About
        </Link>
        <Link className="navLinks" href={`/user/${username}`}>
          Profile
        </Link>
        <Link className="navLinks" href={`/user/${username}/story`}>
          Story
        </Link>
        <Link className="navLinks" href="/resources">
          Resources
        </Link>
        <Link className="navLinks" href="/feedback">
          Feedback
        </Link>
      </SignedIn>
      <SignedOut>
        <Link className="navLinks" href="/">
          Home
        </Link>
        <Link className="navLinks" href="/">
          About
        </Link>
        <Link className="navLinks" href={`/user/${username}/story`}>
          Story
        </Link>
        <Link className="navLinks" href="/resources">
          Resources
        </Link>
        <Link className="navLinks" href="/feedback">
          Feedback
        </Link>
      </SignedOut>
    </>
  );
}
