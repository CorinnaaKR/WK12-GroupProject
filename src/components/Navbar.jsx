import { SignedIn, SignedOut } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import NavButton from "./NavButton";

export default async function Navbar() {
  let currUser = await currentUser();
  let username = currUser.username;
  return (
    <>
      <SignedIn>
        <NavButton href="/" buttonText={"Home"}></NavButton>
        <NavButton
          href={`/user/${username}`}
          buttonText={"Profile"}
        ></NavButton>
        <NavButton
          href={`/user/${username}/story`}
          buttonText={"Story"}
        ></NavButton>
      </SignedIn>
      <SignedOut>
        <NavButton href="/" buttonText={"Home"}></NavButton>
      </SignedOut>
    </>
  );
}
