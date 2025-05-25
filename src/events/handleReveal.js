
import saveStorage from "@/components/localStorage/saveStorage";
// event listener for the profile button
export default function handleReveal(setRevealLists, revealLists) {
  if(revealLists) {
    saveStorage('revealLists', false);
    setRevealLists(false);
    return;
  }
  saveStorage('revealLists', true);
  setRevealLists(true);
}