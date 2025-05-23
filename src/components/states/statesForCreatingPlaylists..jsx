
import { useState } from "react";
import getStorage from "../localStorage/getStorage";

export default function useStatesForCreatingPlaylists() {
  const [newPlaylists, setNewPlaylists] = useState(getStorage('newPlaylists') || []);
  const [isAdded, setIsAdded] = useState(false);

  return { newPlaylists, setNewPlaylists, isAdded, setIsAdded };
}