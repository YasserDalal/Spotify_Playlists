import { useEffect, useState } from "react";

import TopBar from "./layouts/TopContent"
import CenterContent from "./layouts/CenterContent"
import BottomContent from "./layouts/BottomContent"

import getToken from "./layouts/features/fetchData/getToken";
import searchTrack from "./layouts/features/fetchData/searchTrack";

import prioritizeTracks from "../../algorithm/searchAlgorithm";

export default function MainContent() {
  const [playlists, setPlaylists] = useState();
  const [song, setSong] = useState();
  const [loading, setLoading] = useState(false);

  const [newPlaylists, setNewPlaylists] = useState([]);
  const [isAdded, setIsAdded] = useState(false);

  // search songs from Spotify
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

  // generate songs using 'Enter' key
  const enterKey = (e) => {
    if (e.key === "Enter") {
      searchSongs();
    }
  };

  // generate songs using 'Search' button
  const handleSongs = (e) => {
    e.preventDefault();
    setSong(e.target.value);
  };

  // add button
  const handleClick = (playlist) => {
    // check if newPlayLists id is equal to the playlists id
    const isDuplicate = newPlaylists.some(p => p.id === playlist.id);

    // if the id is 'not equal' to the playlist id, add the playlist to the newPlaylists
    if (!isDuplicate) {
      setNewPlaylists(prev => [playlist, ...prev]) 
      setIsAdded(false);

      // dont add the playlist to the newPlaylists if the id is equal to the playlists id
    } else {
      setIsAdded(true);
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
    <div className="w-auto h-screen">
      {/* TopBar (the one with the big spotify logo) */}
      <TopBar />
      
      {/* CenterContent (the one with the search bar and the two lists) */}
      <CenterContent searchSongs={searchSongs} handleSongs={handleSongs} enterKey={enterKey} handleClick={handleClick} handleRemove={handleRemove} isAdded={isAdded} loading={loading} playlists={playlists} newPlaylists={newPlaylists} setIsAdded={setIsAdded} setSong={setSong} setPlaylists={setPlaylists} setLoading={setLoading} setNewPlaylists={setNewPlaylists} song={song}/>

      {/* BottomContent (the one with the watermark at the bottom) */}
      <BottomContent />
    </div>
  )
}