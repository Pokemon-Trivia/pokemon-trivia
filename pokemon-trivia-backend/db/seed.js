import db from './client.js'
import { createUser } from './queries/users'

const seed = async() => {
   for (let userCount = 1; userCount <= 5; userCount++) {
      const newUser = {
         username: `testUser${userCount}`,
         password: 'password',
         highScore: userCount + 8
      }
      await createUser(newUser)
   }
}

await db.connect();
await seed();
await db.end();