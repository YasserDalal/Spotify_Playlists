import ListButton from "../../../buttons/ListButtons";

import LoadingList from "@/components/loading UI/CardSkeleton";
export default function ListContent({playlists, loading, song}) {
  return (
    <div className="text-white bg-slate-900 max-[450px]:max-w-[90%] max-[450px]:min-w-[300px] min-w-[400px] max-w-[30%] w-full h-[600px] rounded-xl shadow-[0px_4px_5px_3px_black]">
      <div className="flex flex-col pl-6 pr-5 h-full">
        <div className="pl-5 pt-9">
          <h3 className="text-2xl font-bold ">RESULTS</h3>
        </div>
        <div className="pt-5 h-full">
          <ul className="flex flex-col overflow-y-auto h-[80%] custom-scrollbar  scroll-fade">
             
            {loading && song ? (
              <div>
                <LoadingList />
                <LoadingList />
                <LoadingList />
                <LoadingList />
              </div>
              // 
            ) : playlists ? (
              playlists.map((playlist) => (
                <ListButton playlist={playlist} key={playlist.id} />
              ))
            ) : !playlists && (
              <div className="flex flex-col items-center">
                <img src="../../../../../public/No music.png" alt="No music image" className="w-72 relative"/>
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