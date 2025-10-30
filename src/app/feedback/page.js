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
    <div
    style={{
  textAlign: "center",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        border: "2px solid #2BD872",
        borderRadius: "10px"
      }}>
      <h1><b>Feedback</b></h1>
      <div>
        <h2>Share your thoughts on Heli</h2>
        <p>We would love to hear your feedback on Heli&apos; debut web app and story so that we can offer the best experience going forward with our future endeavours. We aim to provide the highest quality educational interactive fiction for Prevent training as we grow.</p>
        <form action={handleFeedbackSubmission}>
          <div>
            <label htmlFor="nameBox">Name: </label>
            <input
              required
              name="nameBox"
              type="text"
              id="nameBox"
              placeholder="Your Name"
              style={{ width: "100%", boxSizing: "border-box" }}

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
              style={{ width: "100%", boxSizing: "border-box" }}

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
              style={{ width: "100%", boxSizing: "border-box" }}
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
              style={{ width: "100%", boxSizing: "border-box" }}

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
            <label htmlFor="useful_yes">Yes </label>

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
              style={{ width: "100%", boxSizing: "border-box" }}

            />
          </div>

          <button type="submit" class="confirm-button">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
}
