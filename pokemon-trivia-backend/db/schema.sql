DROP TABLE IF EXISTS friends;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
   id SERIAL PRIMARY KEY,
   username VARCHAR(30) NOT NULL,
   password VARCHAR(100) NOT NULL,
   high_score INTEGER
);

CREATE TABLE friends (
   user_id INTEGER NOT NULL REFERENCES users(id),
   friend_user_id INTEGER NOT NULL REFERENCES users(id)
);

CREATE UNIQUE INDEX no_duplicate_friends ON friends (
   LEAST(user_id, friend_user_id),
   GREATEST(user_id, friend_user_id)
)
