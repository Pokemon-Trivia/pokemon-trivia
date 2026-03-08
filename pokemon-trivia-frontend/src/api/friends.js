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

export const getUsernames = async (token) => {
   const response = await fetch("/api/friends/search", {
      method: "GET",
      headers: {
         "Conetent-Type": "application/json",
         Authorization: "Bearer " + token
      }
   })
   const result = await response.json()
   if (!response.ok) {
      throw new Error(result.message)
   }
   return result;
}

export const addNewFriend = async (friendInfo) => {
   const response = await fetch("/api/friends/add", {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
         Authorization: "Bearer " + friendInfo.token
      },
      body:JSON.stringify(friendInfo)
   })

   const result = await response.json()
   if (!response.ok) {
      throw new Error(result.message)
   }
   return result;
}