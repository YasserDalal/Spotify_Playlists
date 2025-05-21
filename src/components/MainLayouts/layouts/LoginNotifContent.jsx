
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

import LoginContent from "./features/LoginContent";

export default function LoginNotifContent({ className, closeNotif, userDetails }) {
  return (
    <div className={className}>
      <LoginContent className="max-[450px]:max-w-[90%] max-[450px]:min-w-[300px] min-w-[400px] max-w-[50%] w-full h-[610px] rounded-xl shadow-[0px_4px_5px_3px_black] bg-slate-900 flex flex-col justify-center p-5 relative" FontAwesomeIcon={FontAwesomeIcon} faSpotify={faSpotify} closeNotif={closeNotif} userDetails={userDetails}/>
    </div>
  );
}