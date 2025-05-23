

export default function handleRemove(playlist, setNewPlaylists) {
  setNewPlaylists(prev => prev.filter(item => item.id !== playlist.id));
}