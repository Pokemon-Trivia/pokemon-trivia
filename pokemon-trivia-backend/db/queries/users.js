import db from '../client.js'

export const createUser = async({username, password, highScore}) => {
   const sql = `
      INSERT INTO users (username, password, high_score)
   `
}