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
