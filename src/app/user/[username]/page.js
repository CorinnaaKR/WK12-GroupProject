import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import * as profileStyles from "./profile.module.css";
export default async function ProfilePage({ params }) {
  let passedParams = await params;
  let currUser = await currentUser();
  if (passedParams.username != currUser.username) {
    redirect(`/user/${currUser.username}`);
  }
  return (
    <main className={profileStyles.pageContainer}>
      <h1 className={profileStyles.userWelcome}>Hi, {currUser.firstName}</h1>
      <h2 className={profileStyles.howToUse}>How to use:</h2>
      <h3 className={profileStyles.buttonTitle}>Restart:</h3>
      <p className={profileStyles.desc}>
        Restarts the story from the beginning
      </p>
      <h3 className={profileStyles.buttonTitle}>Save:</h3>
      <p className={profileStyles.desc}>
        Saves your current point in the story
      </p>
      <h3 className={profileStyles.buttonTitle}>Load:</h3>
      <p className={profileStyles.desc}>
        Loads from your saved point in the story
      </p>
      <h3 className={profileStyles.buttonTitle}>Snippet:</h3>
      <p className={profileStyles.desc}>
        Highlight/select text and click this to save the selected text as a
        snippet, allowing you to remember key words from the story at a glance
      </p>
    </main>
  );
}
