
import removeStorage from "../components/localStorage/removeStorage";

export default function handleModal(setSpotifyAdd, setHasClicked, setNewPlaylists){
  setSpotifyAdd(false);
  setHasClicked(false);
  removeStorage('newPlaylists');
  setNewPlaylists([]);
}