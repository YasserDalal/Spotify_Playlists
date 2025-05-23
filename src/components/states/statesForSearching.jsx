
import { useState } from "react";
import getStorage from "../localStorage/getStorage";

export default function useStatesForSearching() {
  const [song, setSong] = useState();
  const [loading, setLoading] = useState(false);
  const [playlists, setPlaylists] = useState(getStorage('playlists') || undefined);

  return { song, setSong, loading, setLoading, playlists, setPlaylists };
}