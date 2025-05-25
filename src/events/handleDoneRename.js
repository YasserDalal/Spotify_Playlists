// if playlist name is empty, name it 'My Playlists'
export default function handleDoneRename(setIsEditing, playlistName, setPlaylistName) {
  setIsEditing(false);
  if(playlistName === '') {
    setPlaylistName('My PlayLists');
  }
}