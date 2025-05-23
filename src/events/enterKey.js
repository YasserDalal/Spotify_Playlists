
import searchSongs from "./searchSongs";

export default async function enterKey(e, song, setLoading, setPlaylists){
  if (e.key === "Enter") {
    searchSongs(song, setLoading, setPlaylists);
  }
};