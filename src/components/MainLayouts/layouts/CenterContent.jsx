
import SearchBar from "../../inputs/SearchBar";
import ListContent from "./features/ListContent";
import StoredContent from "./features/StoredContent";

export default function CenterContent({handleClick, searchSongs, handleRemove, handleSongs, enterKey, isAdded, loading, playlists, newPlaylists, setSong, song}) {
  return (
    <div className="text-white bg-slate-700 pb-10">
      <SearchBar searchSongs={searchSongs} handleSongs={handleSongs} enterKey={enterKey}/>
      <div className="flex justify-center gap-10 pt-14 flex-wrap px-3 max-[863px]:gap-20">
        <ListContent playlists={playlists} setSong={setSong} loading={loading} song={song} handleClick={handleClick}/>
        <StoredContent newPlaylists={newPlaylists} handleRemove={handleRemove} isAdded={isAdded}/>
      </div>
    </div>
  );
}