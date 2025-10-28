import CommentsPage from "@/app/comments/page.js";
import FeedbackPage from "@/app/feedback/page.js";
import Footer from "@/components/Footer.jsx";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/utils/dbConnection";
export default async function Home() {
  let currUser = await currentUser();
  db.query(
    `INSERT INTO users (id,first_name,last_name,email) VALUES ($1,$2,$3,$4)`,
    [
      currUser.id,
      currUser.firstName,
      currUser.lastName,
      currUser.emailAddresses[0].emailAddress,
    ]
  );
  return (
    <div>
      <header />

      <h1>Welcome to H.E.L.I</h1>
      <h2>Helping Everyone Learn Interactively</h2>
      <p></p>
      <Footer />

      <CommentsPage />
      {/* <FeedbackPage /> */}
    </div>
  );
}
