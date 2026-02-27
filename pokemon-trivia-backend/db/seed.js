import db from './client.js'
import { addFriend } from './queries/friends.js';
import { createUser, findUserIdByUsername, findUsernameById } from './queries/users.js';

const seed = async() => {
   for (let userCount = 1; userCount <= 5; userCount++) {
      const newUser = {
         username: `testUser${userCount}`,
         password: 'password',
         highScore: userCount + 8
      }
      await createUser(newUser);
   }

   for (let i = 1; i < 5; ++i) {
      if (i === 1 || i === 2) {
         await addFriend(i, i + 1)
      } else if (i === 3) {
         await addFriend(i, i - 1)
      }
   }
}

await db.connect();
await seed();
await db.end();
console.log("Database seeded 🌱")