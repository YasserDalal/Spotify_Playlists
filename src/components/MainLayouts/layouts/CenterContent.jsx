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

  const [newPlaylists, setNewPlaylists] = useState([]);

  const searchSongs = async () => {
    if (!song || song.trim() === '') {
      setPlaylists();
      return;
    }
    setLoading(true);
    setPlaylists();
    const accessToken = await getToken();
    const data = await searchTrack(accessToken, song);

    const sortedData = prioritizeTracks(data, song);

    const preloadImages = sortedData.map((track) => {
      return new Promise((resolve) => {
        const img = new Image();
        const url = track.album.images[1]?.url || track.album.images[0]?.url;
        img.src = url;
        img.onload = resolve;
        img.onerror = resolve; 
      });
    });

    await Promise.all(preloadImages);

    setPlaylists(sortedData);
    setLoading(false);
  };

  const enterKey = (e) => {
    if (e.key === "Enter") {
      searchSongs();
    }
  };

  const handleSongs = (e) => {
    e.preventDefault();
    setSong(e.target.value);
  };

  // add button
  const handleClick = (playlist) => {
    if(!newPlaylists.includes(playlist)) {
      setNewPlaylists(prev => [...prev, playlist]);
    }
  }

  // remove button
  const handleRemove = (playlist) => {
    setNewPlaylists(prev => prev.filter(item => item.id !== playlist.id));
  }

  // check the state newPlaylists every time the state changes from handleClick
  useEffect(() => {
    console.log(newPlaylists);
  }, [newPlaylists]);

  return (
    <div className="text-white bg-slate-700 pb-10">
      <SearchBar searchSongs={searchSongs} handleSongs={handleSongs} enterKey={enterKey}/>
      <div className="flex justify-center gap-10 pt-14 flex-wrap px-3">
        <ListContent playlists={playlists} setSong={setSong} loading={loading} song={song} handleClick={handleClick}/>
        <StoredContent newPlaylists={newPlaylists} handleRemove={handleRemove}/>
      </div>
    </div>
  );
}