
import { useState } from "react";
import getStorage from "../localStorage/getStorage";

export default function useStatesForLoggingInSpotify(){
  const [successfullyLogin, setSuccessfullyLogin] = useState(getStorage('successfullyLogin') || false);
  const [didClose, setDidClose] = useState(getStorage('didClose') || false);

  return { successfullyLogin, setSuccessfullyLogin, didClose, setDidClose };
}