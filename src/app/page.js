// "use client";
// import CommentsPage from "@/app/comments/page.js";
// import FeedbackPage from "@/app/feedback/page.js";
import Header from "@/components/Header.jsx";
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
    <div
      style={{
        textAlign: "center",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
      }}
    >
      {" "}
      <Header />
      <h2><b>Helping Everyone Learn Interactively</b></h2>
      <br />
      <p>
        Heli aids the UK Government’s Prevent strategy by offering an interactive platform to identify and assess at-risk individuals.
      </p>
      <br />
      <p>
        Through immersive fiction, it fosters active learning that improves recall and response. Future developments will introduce varied scenarios, branching narratives, and deeper insights to boost engagement, understanding, and decision-making.
      </p>
{/* 
   
      {/* <CommentsPage /> */}
      {/* <FeedbackPage /> */}
      <Footer />
    </div>
  );
}