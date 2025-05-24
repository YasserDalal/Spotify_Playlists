
import { useState } from "react";
import getStorage from "../localStorage/getStorage";

export default function useStatesForRevealingLists() {
  const [revealLists, setRevealLists] = useState(getStorage('isRevealed') || false);
  
  return { revealLists, setRevealLists }
}