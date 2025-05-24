
import handleDoneRename from "./handleDoneRename";

export default function enterKeyRename(e, setIsEditing, playlistName, setPlaylistName) {
  e.key === "Enter" && handleDoneRename(setIsEditing, playlistName, setPlaylistName);
}