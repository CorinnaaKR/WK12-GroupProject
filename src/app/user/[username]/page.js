import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function ProfilePage({ params }) {
  let passedParams = await params;
  let currUser = await currentUser();
  if (passedParams.username != currUser.username) {
    redirect(`/user/${currUser.username}`);
  }
  return (
    <>
      <h1>Hi, {currUser.firstName}</h1>
    </>
  );
}
