
import handleDoneRename from "./handleDoneRename";
// enter key for renaming playlist
export default function enterKeyRename(e, setIsEditing, playlistName, setPlaylistName) {
  e.key === "Enter" && handleDoneRename(setIsEditing, playlistName, setPlaylistName);
}