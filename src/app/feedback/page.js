"use client";

import React, { useState } from "react";

export default function FeedbackPage() {
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
      <h1>Feedback</h1>
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
            <label htmlFor="doneWell">What did we do well?:</label>
            <textarea
              required
              type="text"
              id="wellBox"
              placeholder="What were we great at?"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="doBetter">What could we do better?:</label>
            <textarea
              required
              type="text"
              id="betterBox"
              placeholder="How could we improve?"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="foundUseful">What did you find useful?:</label>
            <textarea
              required
              type="text"
              id="usefulBox"
              placeholder="What was the most useful part?"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="other">Any other feedback?:</label>
            <textarea
              required
              type="text"
              id="otherBox"
              placeholder="We welcome all feedback!"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
          </div>

          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
}
