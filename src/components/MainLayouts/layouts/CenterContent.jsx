import { useState, useEffect } from "react";

import SearchBar from "../../inputs/SearchBar";
import ListContent from "./features/ListContent";
import StoredContent from "./features/StoredContent";

import getToken from "./features/fetchData/getToken";
import searchTrack from "./features/fetchData/searchTrack";

import prioritizeTracks from "../../../algorithm/searchAlgorithm";

export default function CenterContent() {
  const [playlists, setPlaylists] = useState();
  const [song, setSong] = useState();
  const [loading, setLoading] = useState(false);

  const searchSongs = async () => {
    setLoading(true);
    const accessToken = await getToken();
    const data = await searchTrack(accessToken, song);

    const sortedData = prioritizeTracks(data, song);
    setPlaylists(sortedData);
    setLoading(false);
  };

  const handleSongs = (e) => {
    e.preventDefault();
    setSong(e.target.value);
  };
  return (
    <div className="text-white bg-slate-700 pb-10">
      <SearchBar searchSongs={searchSongs} handleSongs={handleSongs}/>
      <div className="flex justify-center gap-10 pt-14 flex-wrap px-3">
        <ListContent playlists={playlists} handleSongs={handleSongs} setSong={setSong} loading={loading}/>
        <StoredContent />
      </div>
    </div>
  );
}