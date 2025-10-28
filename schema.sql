CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  username TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  avatar TEXT,
  email TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS comments (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  comment TEXT NOT NULL,
  users_id TEXT REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS feedback (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  done_well TEXT,
  do_better TEXT,
  other TEXT,
  useful boolean,
  users_id TEXT REFERENCES users(id)
);


SELECT comments.name, comments.email, comments.comment, comments.users_id
FROM comments
JOIN users ON users_id = comments.users_id; 

SELECT feedback.name, feedback.email, feedback.done_well, feedback.do_better, feedback.other, feedback.useful, feedback.users_id
FROM feedback
JOIN users ON users_id = feedback.users_id; 