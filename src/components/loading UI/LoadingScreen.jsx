
export default function LoadingScreen({ className, FontAwesomeIcon, faSpotify }) {
  return (
    <div className={className}>
      <div className="w-32 h-32 border-4 border-[#28d7a3] border-t-transparent rounded-full animate-spin relative">
        <FontAwesomeIcon icon={faSpotify} size="6x" className="text-[#28d7a3] absolute right-3 bottom-3"/>
      </div>
      <div className="text-gray-500 text-[clamp(1.5rem,2vw,2rem)] font-bold pt-10">
        Adding it to Spotify
      </div>
    </div>
  );
}