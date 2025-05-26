
import getTokenForModify from "./getTokenForModify";
import createPlayLists from "./createPlaylistInSpotify";

import getStorage from "@/components/localStorage/getStorage";

export default async function modifyPlayLists(tracks, setSpotifyAdd, setHasClicked, playlistName, setToken) {
  const accessToken = await getTokenForModify(setToken); 
  if (!accessToken) {
    alert("No Token Received, Please Log In First, If you are the developer of this app kindly check the console");
    console.log("Yasser check the getTokenForModify() function we didn't received a token, maybe we get an invalid Redirect Uri from our spotify account check the variable that holds the Redirect Uri and check if that redirect uri is in the redirect uri in our spotify developer account");
    return;
  }

  const userDetails = getStorage('userDetails');
  if (!userDetails.id) {
    alert("No User ID found in your spotify account");
    console.log('Yasser check the getUserDetails() function we didn\'t received a user id from your spotify account, check the getTokenModify() function as well then console.log() everything to check if there is an error');
    return;
  }

  const trackUris = tracks.map(track => track.uri);
  if (!trackUris.length) {
    alert("Please add songs in the playlists first.");
    setHasClicked(false);
    console.log("the track parameter holds the value of the state ( newPlayLists ) check it in the MainContent.jsx to see if it was empty or not");
    return;
  }

  // create the playlists in spotify account
  createPlayLists(accessToken, userDetails.id, trackUris, setSpotifyAdd, setHasClicked, playlistName);

}