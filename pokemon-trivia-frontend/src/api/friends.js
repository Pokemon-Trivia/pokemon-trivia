export const getFriends = async (token) => {
   const response = await fetch(`${import.meta.env.VITE_API_URL}/api/friends`, {
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
   const response = await fetch(`${import.meta.env.VITE_API_URL}/api/friends/search`, {
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
   const response = await fetch(`${import.meta.env.VITE_API_URL}/api/friends/add`, {
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

export const deleteFriend = async({token, friendUsername}) => {
   const response = await fetch(`${import.meta.env.VITE_API_URL}/api/friends/delete`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
         Authorization: "Bearer " + token
      },
      body: JSON.stringify({ friendUsername })
   });

   const result = await response.json();
   if (!response.ok) {
      throw new Error(result.message)
   }
   return result
}
