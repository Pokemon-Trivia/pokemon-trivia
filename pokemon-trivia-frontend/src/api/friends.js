export const getFriends = async () => {
   const response = await fetch("/friends", {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
         Authorization: "Bearer " + token
      }
   });
   
   const result = await response.json();
   if (!response.ok) {
         throw new Error(result.message)
   }

   return result;
}