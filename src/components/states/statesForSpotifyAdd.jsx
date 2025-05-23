
import { useState } from "react";
import getStorage from "../localStorage/getStorage";

export default function useStatesOfSpotify(){
  const [spotifyAdd, setSpotifyAdd] = useState(getStorage('spotifyAdd') || false);
  const [hasClicked, setHasClicked] = useState(getStorage('hasClicked') || false);

  return { spotifyAdd, setSpotifyAdd, hasClicked, setHasClicked };
}