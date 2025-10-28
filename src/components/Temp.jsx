import { db } from "@/utils/dbConnection.js";
export default function Temp({ currUser }) {
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
}
