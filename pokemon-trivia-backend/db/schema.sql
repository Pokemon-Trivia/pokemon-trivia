DROP TABLE IF EXISTS friends;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
   id SERIAL PRIMARY KEY,
   username VARCHAR(30) UNIQUE NOT NULL,
   password VARCHAR(100) NOT NULL,
   high_score INTEGER DEFAULT 0
);

CREATE TABLE friends (
   id SERIAL PRIMARY KEY,
   user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
   friend_user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE
);

-- This is so we can not have duplicate pairings and for easier searching for future friend calls
CREATE UNIQUE INDEX no_duplicate_friends ON friends (
   LEAST(user_id, friend_user_id),
   GREATEST(user_id, friend_user_id)
)
