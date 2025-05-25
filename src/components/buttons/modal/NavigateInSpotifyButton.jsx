
export default function NavigateInSpotifyButton({ className, handleNavigateSpotify, FontAwesomeIcon, faSpotify, userDetails }) {
  return (
   <div className={className} onClick={() => handleNavigateSpotify(userDetails)}>
      <button>
        Check in Spotify <FontAwesomeIcon icon={faSpotify} className='text-[#28d7a3]' size="1x"/>
      </button>
   </div>
  );
}