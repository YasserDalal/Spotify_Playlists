
import { useState } from "react";
import getStorage from "../localStorage/getStorage";

export default function useStatesForLoggingOutSpotify() {
  const [successfullyLogout, setSuccessfullyLogout] = useState(getStorage('successfullyLogout') || false);
  const [didClickLogout, setDidClickLogout] = useState(getStorage('didClickLogout') || false);

  return { successfullyLogout, setSuccessfullyLogout, didClickLogout, setDidClickLogout };
}