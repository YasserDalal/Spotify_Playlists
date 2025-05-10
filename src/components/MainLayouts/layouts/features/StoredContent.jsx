import SaveToSpotifyButton from "../../../buttons/SaveToSpotifyButton";
import StoredListButton from "../../../buttons/StoredListButtons";
export default function StoredContent({newPlaylists, handleRemove}) {
  return (
    <div className="text-white bg-slate-900 max-[450px]:max-w-[90%] max-[450px]:min-w-[300px] min-w-[400px] max-w-[30%] w-full h-[600px] rounded-xl shadow-[0px_4px_5px_3px_black]">
      <div className="flex flex-col px-8">
        <div className="border-b-2 border-gray-400 pt-10">
          <h3 className="pl-5 py-5 text-2xl font-bold">NEW PLAYLISTS</h3>
        </div>
        <div className="pt-10 max-h-[348px]">
          <ul className="flex flex-col overflow-y-auto max-h-[328px] custom-scrollbar  scroll-fade">
              {newPlaylists.map((playlist) => (
                <StoredListButton playlist={playlist} key={playlist.id} handleRemove={() => handleRemove(playlist)}/>
              ))}    
          </ul>
        </div>
        <div>
          <SaveToSpotifyButton />
        </div>
      </div>
    </div>
  );
}