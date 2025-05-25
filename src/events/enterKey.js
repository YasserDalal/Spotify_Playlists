
import searchSongs from "./searchSongs";
// enter key for searching songs
export default async function enterKey(e, song, setLoading, setPlaylists){
  if (e.key === "Enter") {
    searchSongs(song, setLoading, setPlaylists);
  }
};