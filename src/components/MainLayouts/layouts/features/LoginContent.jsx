
import CloseNotif from "@/components/buttons/loginNotif/closeButton";
import getStorage from "@/components/localStorage/getStorage";

import LoadingToken from "@/components/loading UI/LoadingToken";

export default function LoginContent({ className, closeNotif, FontAwesomeIcon, faSpotify, userDetails }) {
  return (
    <div className={className}>
        {userDetails.display_name ? ( 
        <>
        <CloseNotif className="absolute top-2 right-2"  closeNotif={closeNotif}/>
        <div className="flex flex-col items-center gap-5 ">
          <div>
            <FontAwesomeIcon icon={faSpotify} size="4x" className="text-[#28d7a3] p-4" />
          </div>
          <div className="text-2xl pb-10">You have been logged in successfully</div>
          <div className="border-2 border-[#115f47] rounded-full p-3">
            <img src={userDetails?.images[0]?.url || userDetails?.images[1]?.url} 
                className="w-24 rounded-full"
                alt="Profile picture" />
          </div>
          <div>
            <div className="text-2xl">{userDetails?.display_name}</div>
          </div>
          <div className="pt-10">
            <div>You can now add songs in the playlists</div>
          </div>
        </div>
      </>
      ) : <LoadingToken className="flex flex-col justify-center items-center" FontAwesomeIcon={FontAwesomeIcon} faSpotify={faSpotify}/>}
    </div>
  );
}