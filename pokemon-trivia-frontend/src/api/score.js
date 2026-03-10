export const sendScore = async(scoreInfo) => {
   const response = await fetch("/api/users/highscore", {
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