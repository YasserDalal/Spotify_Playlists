
import { useState } from "react";
import getStorage from "../localStorage/getStorage";

export default function useStatesForUserData(){
  const [userDetails, setUserDetails] = useState(getStorage('userDetails') || {});
  const [playlistName, setPlaylistName] = useState(getStorage('playlistName') || 'My PlayLists');

  return { userDetails, setUserDetails, playlistName, setPlaylistName };
}