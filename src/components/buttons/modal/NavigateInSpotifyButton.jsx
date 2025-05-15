
export default function NavigateInSpotifyButton({ className, handleNavigateSpotify, FontAwesomeIcon, faSpotify }) {
  return (
   <div className={className} onClick={handleNavigateSpotify}>
      <button>
        Check in Spotify <FontAwesomeIcon icon={faSpotify} className='text-[#28d7a3]' size="1x"/>
      </button>
   </div>
  );
}