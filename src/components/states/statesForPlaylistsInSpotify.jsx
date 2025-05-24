
import { useState } from "react";
import getStorage from "../localStorage/getStorage";
import getValue from "../localStorage/getValue";

export default function useStatesForPlaylistsInSpotify() {
  const [token, setToken] = useState(getValue('accessToken') || '');
  const [codeVerifier, setCodeVerifier] = useState(getStorage('codeVerifier') || '');

  return { token, setToken, codeVerifier, setCodeVerifier };
}