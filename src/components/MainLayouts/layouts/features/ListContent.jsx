import ListButton from "../../../buttons/ListButtons";

import LoadingList from "@/components/loading UI/CardSkeleton";
export default function ListContent({playlists, loading}) {
  return (
    <div className="text-white bg-slate-900 max-[450px]:max-w-[90%] max-[450px]:min-w-[300px] min-w-[400px] max-w-[30%] w-full h-[600px] rounded-xl shadow-[0px_4px_5px_3px_black]">
      <div className="flex flex-col pl-6 pr-5 h-full">
        <div className="pl-5 pt-9">
          <h3 className="text-2xl font-bold ">RESULTS</h3>
        </div>
        <div className="pt-5 h-full">
          <ul className="flex flex-col overflow-y-auto h-[80%] custom-scrollbar  scroll-fade">
             
            {loading ? (
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
            ) : (
              <p className="text-sm text-center text-gray-400 px-2">
                No data. Type a song then click search.
              </p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}