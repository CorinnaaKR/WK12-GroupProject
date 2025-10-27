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
      <h1>Home</h1>
    </div>
  );
}
