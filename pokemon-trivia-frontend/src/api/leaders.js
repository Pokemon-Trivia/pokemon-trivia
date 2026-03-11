export const getLeaders = async () => {
   const response = await fetch("/api/users/leaderboard")
   const result = await response.json();
   if (!response.ok) {
      throw new Error(result.message);
   }
   console.log("Front API Call: ", result)
   return result;
}