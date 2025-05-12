import SaveToSpotifyButton from "../../../buttons/SaveToSpotifyButton";
import StoredListButton from "../../../buttons/StoredListButtons";
export default function StoredContent({newPlaylists, handleRemove, isAdded}) {
  return (
    <div className="bg-slate-900 relative z-0 max-[450px]:max-w-[90%] max-[450px]:min-w-[300px] min-w-[400px] max-w-[30%] w-full h-[600px] rounded-xl shadow-[0px_4px_5px_3px_black]">
      <div className={`bg-[#0f172a91]  ${isAdded && '-translate-y-10'} transition-all duration-300 text-center pt-2 pb-4 absolute right-1 left-1 z-0 rounded-tl-xl rounded-tr-xl shadow-[0px_8px_8px_2px_black] text-[clamp(0.9rem,4vw,1rem)]`}>The song that you clicked is already in here</div>
      <div className="bg-slate-900 rounded-xl text-white z-10 relative h-full">
        <div className="flex flex-col pl-6 pr-5 h-full">
          <div className="border-b-2 border-gray-400 pt-10">
            <h3 className="pl-5 py-5 text-2xl font-bold">NEW PLAYLISTS</h3>
          </div>
          <div className="pt-10 max-h-[365px]">
            <ul className="flex flex-col overflow-y-auto max-h-[345px] custom-scrollbar  scroll-fade">
                {newPlaylists && newPlaylists.map((playlist) => (
                  <StoredListButton playlist={playlist} key={playlist.id} handleRemove={() => handleRemove(playlist)}/>
                ))}    
            </ul>
          </div>
          <div>
            <SaveToSpotifyButton />
          </div>
        </div>
      </div>
    </div>
  );
}