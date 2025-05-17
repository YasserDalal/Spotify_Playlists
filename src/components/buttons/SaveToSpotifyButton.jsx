
export default function SaveToSpotifyButton({ className, handleSpotifyPlayLists }) {
  return (
    <div className={className}>
      <button className="bg-[#28d7a3] hover:bg-[#1da57c] transition-all duration-100 text-black font-bold py-3 px-4 rounded-full cursor-pointer min-w-40 max-w-[100%] w-full " onClick={handleSpotifyPlayLists}>SAVE TO SPOTIFY</button>
    </div>
  );
}