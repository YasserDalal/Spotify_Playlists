
export default function handleDoneRename(setIsEditing, playlistName, setPlaylistName) {
  setIsEditing(false);
  if(playlistName === '') {
    setPlaylistName('My PlayLists');
  }
}