export const sendScore = async(scoreInfo) => {
   const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/highscore`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
         Authorization: "Bearer " + scoreInfo.token
      },
      body: JSON.stringify(scoreInfo)
   });

   const result = await response.json();
   if (!response.ok) {
      throw new Error(result.message)
   }
   return result;
}