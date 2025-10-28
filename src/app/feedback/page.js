import { db } from "@/utils/dbConnection";
import { auth, currentUser } from "@clerk/nextjs/server";

export default function handleFeedbackSave() {
  const { userId } = auth();
  if (userId) {
  }

  async function handleFeedbackSubmission(formData) {
    "use server";

    const user = await currentUser();

    const name = formData.get("nameBox");
    const email = formData.get("emailBox");
    const done_well = formData.get("wellBox");
    const do_better = formData.get("betterBox");
    const other = formData.get("otherBox");
    const usefulString = formData.get("foundUseful");

    const useful = usefulString === "true";

    console.log(name);
    console.log(email);
    console.log(done_well);
    console.log(do_better);
    console.log(other);
    console.log(usefulString);
    console.log(useful);

    try {
      await db.query(
        `INSERT INTO feedback (name, email, done_well, do_better, other, useful, users_id) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
        [name, email, done_well, do_better, other, useful, user.id]
      );
    } catch (error) {
      console.error("Error unable to save to database:", error);
    }
  }

  return (
    <div>
      <h1>Feedback</h1>
      <div>
        <h2>Leave a comment</h2>
        <form action={handleFeedbackSubmission}>
          <div>
            <label htmlFor="nameBox">Name: </label>
            <input
              required
              name="nameBox"
              type="text"
              id="nameBox"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="emailBox">Email: </label>
            <input
              required
              name="emailBox"
              type="email"
              id="emailBox"
              placeholder="name@yourEmail.com"
            />
          </div>

          <div>
            <label htmlFor="doneWell">What did we do well?: </label>
            <textarea
              required
              name="wellBox"
              type="text"
              id="wellBox"
              placeholder="What were we great at?"
            />
          </div>

          <div>
            <label htmlFor="doBetter">What could we do better?: </label>
            <textarea
              required
              name="betterBox"
              type="text"
              id="betterBox"
              placeholder="How could we improve?"
            />
          </div>

          <div>
            <label>Did you find this useful?:</label>
            <br />

            <input
              type="radio"
              id="useful_yes"
              name="foundUseful"
              value="true"
              required
            />
            <label htmlFor="useful_yes">Yes</label>

            <input
              type="radio"
              id="useful_no"
              name="foundUseful"
              value="false"
              required
            />
            <label htmlFor="useful_no">No</label>
          </div>

          <div>
            <label htmlFor="otherBox">Any other feedback?: </label>
            <textarea
              required
              name="otherBox"
              type="text"
              id="otherBox"
              placeholder="We welcome all feedback!"
            />
          </div>

          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
}
