
export default function handleClick(playlist, newPlaylists, setNewPlaylists, setIsAdded) {
  // check if newPlayLists id is equal to the playlists id
  const isDuplicate = newPlaylists.some(p => p.id === playlist.id);
  // if the id is 'not equal' to the playlist id, add the playlist to the newPlaylists
  if (!isDuplicate) {
    setNewPlaylists(prev => [playlist, ...prev]) 
    setIsAdded(false);
    // dont add the playlist to the newPlaylists if the id is equal to the playlists id
  } else {
    setIsAdded(true);
  }
}