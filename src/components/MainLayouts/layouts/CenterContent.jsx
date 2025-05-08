import { useState } from "react";

import SearchBar from "../../inputs/SearchBar";
import ListContent from "./features/ListContent";
import StoredContent from "./features/StoredContent";

import getToken from "./features/fetchData/getToken";
import searchTrack from "./features/fetchData/searchTrack";
export default function CenterContent() {
  const [playlists, setPlaylists] = useState();
  const [song, setSong] = useState();

  const searchSongs = async () => {
    const accessToken = await getToken();
    const data = await searchTrack(accessToken, song);
    setPlaylists(data);
  };

  const handleSongs = (e) => {
    e.preventDefault();
    setSong(e.target.value);
  };
  return (
    <div className="text-white bg-slate-700 pb-10">
      <SearchBar searchSongs={searchSongs} handleSongs={handleSongs}/>
      <div className="flex justify-center gap-10 pt-14 flex-wrap px-3">
        <ListContent playlists={playlists} handleSongs={handleSongs} setArtist={setArtist} setSong={setSong}/>
        <StoredContent />
      </div>
    </div>
  );
}