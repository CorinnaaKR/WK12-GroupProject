// "use client";
// import CommentsPage from "@/app/comments/page.js";
import FeedbackPage from "@/app/feedback/page.js";
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
  for (let i = 0; i < data.length; i++) {
    if (currUser.id == data[i].id) {
      userExists = true;
      break;
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
      <h1>Welcome to H.e.l.i</h1>
      <h2>Helping Everyone Learn Interactively</h2>
      <br />
      <p>
        Our Interactive learning portal focuses on the UK Government&apos;s
        counter-terrorism strategy known as Prevent. Through this, we aim to
        provide an engaging means to help identify or assess vulnerable
        individuals who may be at risk of radicalisation.
      </p>
      <br />
      <p>
        Through the use of interactive fiction, we aim to bring a conscientious
        and active approach to this training to further cement the importance of
        this training in the user&apos;s mind by immersing them in the situation
        and how they might handle this interaction as opposed to static learning
        such as leaflets, documentation or slides.
      </p>
      <br />
      <p>
        Through this increased engagement, we hope to see users take this
        information onboard to a greater degree, allowing them to recall the
        information and act appropriately in the moment.
      </p>
      <br />
      <p>
        As the programme expands, we aim to include a greater variety of
        situations, branching narratives, and greater depth of thinking to fully
        explore the scenarios presented, driving safety through learning,
        engagement and conscious decision making.{" "}
      </p>
      {/* <CommentsPage /> */}
      <FeedbackPage />
      <Footer />
    </div>
  );
}
