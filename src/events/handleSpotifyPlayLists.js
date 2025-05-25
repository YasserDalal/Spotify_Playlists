
import modifyPlayLists from "../components/MainLayouts/layouts/features/fetchData/modifyPlayLists";
// create the playlists in spotify account
export default function handleSpotifyPlayLists(newPlaylists, setSpotifyAdd, setHasClicked, playlistName, setToken, setIsEditing) {
  modifyPlayLists(newPlaylists, setSpotifyAdd, setHasClicked, playlistName, setToken);
  setIsEditing(false);
}