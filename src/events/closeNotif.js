
import saveStorage from "../components/localStorage/saveStorage";
// close the login notification
export default function closeNotif(setSuccessfullyLogin, setDidClose){
  setSuccessfullyLogin(true);
  setDidClose(true);
  saveStorage('successfullyLogin', true);
  saveStorage('didClose', true);
}