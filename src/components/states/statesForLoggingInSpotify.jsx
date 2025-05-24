
import { useState } from "react";
import getStorage from "../localStorage/getStorage";
import getValue from "../localStorage/getValue";

export default function useStatesForLoggingInSpotify(){
  const [successfullyLogin, setSuccessfullyLogin] = useState(getValue('successfullyLogin') || false);
  const [didClose, setDidClose] = useState(getStorage('didClose') || false);

  return { successfullyLogin, setSuccessfullyLogin, didClose, setDidClose };
}