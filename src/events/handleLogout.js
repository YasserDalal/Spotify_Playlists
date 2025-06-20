
import removeAllData from "../components/localStorage/removeAllData";
import saveStorage from "@/components/localStorage/saveStorage";
// Logout button event listener
export default function handleLogout(setDidClickLogout, setSuccessfullyLogout){
  // logout the user
  setDidClickLogout(true);
  setSuccessfullyLogout(true);
  saveStorage('didClickLogout', true);
  saveStorage('successfullyLogout', true);
  removeAllData() // remove all data
  window.history.replaceState(null, '', window.location.pathname);
  window.location.reload() // refresh the page
}