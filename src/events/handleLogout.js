
import removeAllData from "../components/localStorage/removeAllData";

export default function handleLogout(){
  // remove data __ refresh the page
  removeAllData(), window.location.reload()
}