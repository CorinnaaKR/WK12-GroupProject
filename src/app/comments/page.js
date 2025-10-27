"use client";

import React, { useState } from "react";

export default function CommentsPage() {
  const [name, setName] = useState(``);
  const [email, setEmail] = useState(``);
  const [comment, setComment] = useState(``);

  //Form Validation
  const emailValidity = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const submitForm = (event) => {
    event.preventDefault();

    //Submit data
    //! NEED TO PUT IN API CALL ONCE ESTABLISHED
    console.log({ name, email, comment });

    //Clear form
    setName("");
    setEmail("");
    setComment("");
  };

  return (
    <div>
      <h1>Comments</h1>
      <div>
        <h2>Leave a comment</h2>
        <form onSubmit={submitForm}>
          <div>
            <label htmlFor="nameBox">Name:</label>
            <input
              required
              type="text"
              id="nameBox"
              placeholder="Your Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="emailBox">Email:</label>
            <input
              required
              type="email"
              id="emailBox"
              placeholder="name@youremail.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="commentBox">Comment:</label>
            <textarea
              required
              id="commentBox"
              placeholder="Leave a comment"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
          </div>

          <button type="submit">Submit Comment</button>
        </form>
      </div>
    </div>
  );
}
