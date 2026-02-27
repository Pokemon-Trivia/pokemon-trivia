import db from './client.js'
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

   await findUserIdByUsername('testUser2')
   await findUsernameById(3)
}

await db.connect();
await seed();
await db.end();
console.log("Database seeded 🌱")