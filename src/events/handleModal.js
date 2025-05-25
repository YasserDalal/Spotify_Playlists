
import removeStorage from "../components/localStorage/removeStorage";
// remove the modal when successfully added in spotify
export default function handleModal(setSpotifyAdd, setHasClicked, setNewPlaylists){
  setSpotifyAdd(false);
  setHasClicked(false);
  removeStorage('newPlaylists');
  setNewPlaylists([]);
}