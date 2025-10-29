import CommentsPage from "@/app/comments/page.js";
import FeedbackPage from "@/app/feedback/page.js";
import Footer from "@/components/Footer.jsx";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/utils/dbConnection";
export default async function Home() {
  let currUser;
  currUser = await currentUser();
  let res = await db.query(`SELECT id FROM users`);
  let data = res.rows;
  let userExists = false;
  if (currUser != undefined) {
    for (let i = 0; i < data.length; i++) {
      if (currUser.id == data[i].id) {
        userExists = true;
        break;
      }
    }
  }
  if (!userExists) {
    if (currUser != undefined) {
      db.query(
        `INSERT INTO users (id,username,first_name,last_name,email) VALUES ($1,$2,$3,$4,$5)`,
        [
          currUser.id,
          currUser.username,
          currUser.firstName,
          currUser.lastName,
          currUser.emailAddresses[0].emailAddress,
        ]
      );
    }
  }

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
