
import { useState } from "react";
import getValue from "../localStorage/getStorage";
import getStorage from "../localStorage/getStorage";

export default function useStatesForLoggingInSpotify(){
  const [successfullyLogin, setSuccessfullyLogin] = useState(getValue('successfullyLogin') || false);
  const [didClose, setDidClose] = useState(getStorage('didClose') || false);

  return { successfullyLogin, setSuccessfullyLogin, didClose, setDidClose };
}