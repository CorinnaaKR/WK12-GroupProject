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
        maxWidth: "50rem",
        margin: "0 auto",
        padding: "1.25rem",
        border: "0.375rem solid #2BD872",
        borderRadius: "0.625rem",
      }}
    >
      <h1 style={{ fontSize: "3rem" }}>
        <i>Feedback</i>
      </h1>
      <div>
        <h2 style={{ margin: "0.625rem", fontSize: "1.2rem" }}>
          <i>Share your thoughts on Heli</i>
        </h2>
        <p style={{ marginBottom: "0.625rem" }}>
          We would love to hear your feedback on Heli&apos;s debut web app and
          story so that we can offer the best experience going forward with our
          future endeavours. We aim to provide the highest quality educational
          interactive fiction for Prevent training as we grow.
        </p>
        <form action={handleFeedbackSubmission}>
          <div>
            <label htmlFor="nameBox" style={{ fontSize: "1.25rem" }}>
              Name:
            </label>
            <input
              required
              name="nameBox"
              type="text"
              id="nameBox"
              placeholder="Your Name"
              border="0.063rem"
              style={{
                width: "100%",
                boxSizing: "border-box",
                border: "0.125rem solid #c67afe",
                padding: "0.625rem",
                borderRadius: "0.625rem",
                marginBottom: "0.625rem",
              }}
            />
          </div>

          <div>
            <label htmlFor="emailBox" style={{ fontSize: "1.25rem" }}>
              Email:
            </label>
            <input
              required
              name="emailBox"
              type="email"
              id="emailBox"
              placeholder="name@yourEmail.com"
              style={{
                width: "100%",
                boxSizing: "border-box",
                border: "0.125rem solid #c67afe",
                padding: "0.625rem",
                borderRadius: "0.313rem",
                marginBottom: "0.625rem",
              }}
            />
          </div>

          <div>
            <label htmlFor="doneWell" style={{ fontSize: "1.25rem" }}>
              What did we do well?:
            </label>
            <textarea
              required
              name="wellBox"
              type="text"
              id="wellBox"
              placeholder="What were we great at?"
              style={{
                width: "100%",
                boxSizing: "border-box",
                border: "0.125rem solid #c67afe",
                padding: "0.625rem",
                borderRadius: "0.313rem",
                marginBottom: "0.625rem",
              }}
            />
          </div>

          <div>
            <label htmlFor="doBetter" style={{ fontSize: "1.25rem" }}>
              What could we do better?:{" "}
            </label>
            <textarea
              required
              name="betterBox"
              type="text"
              id="betterBox"
              placeholder="How could we improve?"
              style={{
                width: "100%",
                boxSizing: "border-box",
                border: "0.125rem solid #c67afe",
                padding: "0.625rem",
                borderRadius: "0.313rem",
                marginBottom: "0.625rem",
              }}
            />
          </div>

          <div>
            <label htmlFor="otherBox" style={{ fontSize: "1.25rem" }}>
              Any other feedback?:{" "}
            </label>
            <textarea
              required
              name="otherBox"
              type="text"
              id="otherBox"
              placeholder="We welcome all feedback!"
              style={{
                width: "100%",
                boxSizing: "border-box",
                border: "0.125rem solid #c67afe",
                padding: "0.625rem",
                borderRadius: "0.313rem",
                marginBottom: "0.625rem",
              }}
            />
          </div>

          <div>
            <label style={{ fontSize: "1.25rem" }}>
              Did you find this useful?:
            </label>
            <br />

            <input
              type="radio"
              id="useful_yes"
              name="foundUseful"
              value="true"
              required
            />
            <label htmlFor="useful_yes" style={{ padding: "0.438rem" }}>
              Yes{" "}
            </label>

            <input
              type="radio"
              id="useful_no"
              name="foundUseful"
              value="false"
              required
            />
            <label htmlFor="useful_no" style={{ padding: "0.438rem" }}>
              No
            </label>
          </div>

          <button type="submit" class="confirm-button">
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}
