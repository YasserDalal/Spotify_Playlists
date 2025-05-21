
import saveStorage from "@/components/localStorage/saveStorage";

export default async function getUserDetails(setUserDetails, token) {
  const response = await fetch('https://api.spotify.com/v1/me', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  const userDetails = await response.json()
  saveStorage('userDetails', userDetails);
  setUserDetails(userDetails);
  console.log(userDetails);
  return userDetails;
}