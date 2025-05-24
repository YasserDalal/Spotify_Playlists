
import { useState } from "react";
import getStorage from "../localStorage/getStorage";

export default function useStatesForEditingExpiration() {
  const [isEditing, setIsEditing] = useState(getStorage('isEditing') || false);
  const [expiresIn, setExpiresIn] = useState(getStorage('expiresIn') || '');

  return { isEditing, setIsEditing, expiresIn, setExpiresIn };
}