export const getFriends = async (token) => {
   const response = await fetch("/api/friends", {
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

export const getUsernames = async () => {
   const response = await fetch("/api/friends/search")
   const result = await response.json()
   if (!response.ok) {
      throw new Error(result.message)
   }
   console.log(result)
   return result;
}