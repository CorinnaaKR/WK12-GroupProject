import { db } from "@/utils/dbConnection";
import { currentUser } from "@clerk/nextjs/server";
export default async function Home() {
  let currUser;
  currUser = await currentUser();
  if (currUser != undefined) {
    let res = db.query(
      `INSERT INTO users (id,first_name,last_name,email) VALUES ($1,$2,$3,$4)`,
      [
        currUser.id,
        currUser.firstName,
        currUser.lastName,
        currUser.emailAddresses[0].emailAddress,
      ]
    );
  }
  return (
    <div>
      <h1>Welcome to H.E.L.I</h1>
      <h2>Helping Everyone Learn Interactively</h2>
    </div>
    );
}
