
import { useEffect } from "react";

import TopBar from "./layouts/TopContent"
import CenterContent from "./layouts/CenterContent"
import BottomContent from "./layouts/BottomContent"
import ModalContent from "./layouts/ModalContent";

import getToken from "./layouts/features/fetchData/getToken";
import searchTrack from "./layouts/features/fetchData/searchTrack";
import modifyPlayLists from "./layouts/features/fetchData/modifyPlayLists";

import prioritizeTracks from "../../algorithm/searchAlgorithm";
import saveStorage from "../localStorage/saveStorage";
import removeStorage from "../localStorage/removeStorage";

export default function MainContent({ className, playlists, setPlaylists, newPlaylists, setNewPlaylists, setIsAdded, isAdded, loading, setLoading, song, setSong, spotifyAdd, setSpotifyAdd, spotifyUrl, setSpotifyUrl, hasClicked, setHasClicked }) {
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
    saveStorage('playlists', sortedData);
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
  // add songs
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
  // remove songs
  const handleRemove = (playlist) => {
    setNewPlaylists(prev => prev.filter(item => item.id !== playlist.id));
  }
  // add the songs in spotify
  const handleSpotifyPlayLists = async () => {
    modifyPlayLists(newPlaylists, setSpotifyAdd, setSpotifyUrl, setHasClicked);
    setHasClicked(true);
    /*
      step 1: npm run dev
      step 2: go to cmd and type -> ( ngrok http 5178 ) if it isn't 5178 remove the bash in terminal and type the ( npm run dev ) again
      step 3: go to the ngrok dashboard and copy the url (the one with the https)
      step 4: go to the spotify developer account and add the ngrok url in the redirect uris, add /callback at the end of the url and add the actual without the /callback
      step 5: click save
      step 6: go to getTokenForModify() and replace redirectUri variable with the actual url of the ngrok url
      step 7: go to vite.config.js find the allowedHostproperty and replace the first value of the array with ngrok url ( !!! DONT ADD THE ( 'HTTPS:// ) add only the middle part without the https)')
      step 8: paste the http://localHost:5178 in the browser
    */
  };
  // close modal
  const handleModal = () => {
    setSpotifyAdd(false);
    setHasClicked(false);
    removeStorage('newPlaylists');
    setNewPlaylists([]);
  }
  // navigate to spotify
  const handleNavigateSpotify = () => {
    window.open(spotifyUrl, "_blank");
  }
  // check the state newPlaylists every time the state changes from handleClick
  useEffect(() => {
    console.log(newPlaylists);
    saveStorage('newPlaylists', newPlaylists);
  }, [newPlaylists]);
  
  return (
    <div className={className}>
      {/* TopBar (the one with the big spotify logo) */}
      <TopBar className={`text-white bg-gray-900 ${hasClicked && 'brightness-50'}`}/>
      
      {/* CenterContent (the one with the search bar and the two lists) */}
      <CenterContent className={`text-white bg-slate-700 pb-10 ${hasClicked && 'brightness-50'}`}
      searchSongs={searchSongs} 
      handleSongs={handleSongs} 
      enterKey={enterKey} 
      handleClick={handleClick} 
      handleRemove={handleRemove} 
      setIsAdded={setIsAdded} 
      setSong={setSong} 
      setPlaylists={setPlaylists} 
      setLoading={setLoading} 
      setNewPlaylists={setNewPlaylists} 
      handleSpotifyPlayLists={handleSpotifyPlayLists} 
      isAdded={isAdded} 
      loading={loading} 
      playlists={playlists} 
      newPlaylists={newPlaylists} 
      song={song} 
      spotifyAdd={spotifyAdd}/>

      {/* BottomContent (the one with the watermark at the bottom) */}
      <BottomContent className={`text-white bg-slate-900 w-full h-28 ${hasClicked && 'brightness-50'}`}/>

      <ModalContent className={`text-white w-full fixed top-0 h-screen ${hasClicked ? 'flex' : 'hidden'} justify-center items-center z-[9000]`}
      newPlaylists={newPlaylists} 
      handleModal={handleModal} 
      handleNavigateSpotify={handleNavigateSpotify} 
      spotifyAdd={spotifyAdd} 
      hasClicked={hasClicked}/>
    </div>
  )
}