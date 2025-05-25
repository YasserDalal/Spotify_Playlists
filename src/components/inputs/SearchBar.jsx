
import SearchButton from "../buttons/SearchButton";

export default function SearchBar({ className, handleSongs, searchSongs, enterKey, song, setLoading, setPlaylists, setSong }) {
  return (
    <div className={className}>
      <div className="flex flex-col max-w-[30%] min-w-[250px] w-full">
        <input className="border-b-2 border-gray-400 outline-none px-2 py-2 mb-10  bg-transparent focus:border-zinc-50 min-w-[200px] max-w-[100%] w-full" type="text" placeholder="Search For Songs" autoComplete="on" required onChange={(e) => handleSongs(e, setSong)} onKeyDown={(e) => enterKey(e, song, setLoading, setPlaylists)}/>
        <SearchButton className="flex justify-center" searchSongs={() => searchSongs(song, setLoading, setPlaylists)}/>
      </div>
    </div>
  );
}