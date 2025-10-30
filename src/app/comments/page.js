import { db } from "@/utils/dbConnection";
import React from "react";
import { auth, currentUser } from "@clerk/nextjs/server";

export default function CommentsPage() {
  const { userId } = auth();
  if (userId) {
  }

  async function handleCommentSave(formData) {
    "use server";

    const user = await currentUser();

    const name = formData.get("commenter_name");
    const email = formData.get("commenter_email");
    const comment = formData.get("comment_content");

    if (!name || !email || !comment) {
      console.error("Missing input(s)");
      return;
    }

    try {
      await db.query(
        `INSERT INTO comments (name, email, comment, users_id) VALUES ($1, $2, $3, $4)`,
        [name, email, comment, user.id]
      );
    } catch (error) {
      console.error("Error unable to save to database:", error);
    }
  }

  return (
    <div>
      <h1>Comments</h1>
      <div>
        <h2>Leave a comment</h2>
        <form action={handleCommentSave}>
          <div>
            <label htmlFor="nameBox" aria-label="Name">
              Name:
            </label>
            <input
              required
              type="text"
              id="nameBox"
              name="commenter_name"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="emailBox" aria-label="email">
              Email:
            </label>
            <input
              required
              type="email"
              id="emailBox"
              name="commenter_email"
              placeholder="name@youremail.com"
            />
          </div>

          <div>
            <label htmlFor="commentBox" aria-label="comment">
              Comment:
            </label>
            <textarea
              required
              id="commentBox"
              name="comment_content"
              placeholder="Leave a comment"
            />
          </div>

          <button type="submit" aria-label="submit">
            Submit Comment
          </button>
        </form>
      </div>
    </div>
  );
}
