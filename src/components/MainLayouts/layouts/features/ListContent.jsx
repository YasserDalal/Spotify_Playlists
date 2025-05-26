
import ListButton from "../../../buttons/ListButtons";
import LoadingCards from "@/components/loading UI/CardSkeleton";
import noMusic from "@/assets/No-music.png";

export default function ListContent({ className, playlists, loading, song, handleClick, newPlaylists, setNewPlaylists, setIsAdded }) {
  return (
    <div className={className}>
      <div className="flex flex-col pl-6 pr-5 h-full">
        <div className="pl-5 pt-9">
          <h3 className="text-2xl font-bold ">RESULTS</h3>
        </div>
        <div className="pt-5 h-full">
          <ul className="flex flex-col overflow-y-auto h-[80%] custom-scrollbar  scroll-fade">    
            {loading && song ? (
              <div>
                <LoadingCards className="flex items-center gap-4 py-5 pl-5"/>
                <LoadingCards className="flex items-center gap-4 py-5 pl-5"/>
                <LoadingCards className="flex items-center gap-4 py-5 pl-5"/>
                <LoadingCards className="flex items-center gap-4 py-5 pl-5"/>
              </div>
            ) : playlists ? (
              playlists.map((playlist) => (
                <ListButton className="p-2 rounded-lg" playlist={playlist} key={playlist.id} handleClick={() => handleClick(playlist, newPlaylists, setNewPlaylists, setIsAdded)}/>
              ))
            ) : !playlists && (
              <div className="flex flex-col items-center relative">
                <img src={noMusic ? noMusic : "../../../../assets/No-music.png"} alt="No music image" className="w-72"/>
                <div className="absolute bottom-0">
                  NO MUSIC FOUND
                </div>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}