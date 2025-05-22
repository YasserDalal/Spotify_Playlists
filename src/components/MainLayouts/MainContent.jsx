
import { useEffect } from "react";

import TopBar from "./layouts/TopContent"
import CenterContent from "./layouts/CenterContent"
import BottomContent from "./layouts/BottomContent"
import ModalContent from "./layouts/ModalContent";
import LoginNotifContent from "./layouts/LoginNotifContent";

import getToken from "./layouts/features/fetchData/getToken";
import searchTrack from "./layouts/features/fetchData/searchTrack";
import modifyPlayLists from "./layouts/features/fetchData/modifyPlayLists";
import getTokenForModify from "./layouts/features/fetchData/getTokenForModify";
import getUserDetails from "./layouts/features/fetchData/getUserDetails";

import prioritizeTracks from "../../algorithm/searchAlgorithm";
import saveStorage from "../localStorage/saveStorage";
import removeStorage from "../localStorage/removeStorage";
import removeAllData from "../localStorage/removeAllData";
import ProfileLists from "./layouts/features/ProfileLists";

export default function MainContent({ className, playlists, setPlaylists, newPlaylists, setNewPlaylists, setIsAdded, isAdded, loading, setLoading, song, setSong, spotifyAdd, setSpotifyAdd, spotifyUrl, setSpotifyUrl, hasClicked, setHasClicked, isEditing, setIsEditing, playlistName, setPlaylistName, successfullyLogin, setSuccessfullyLogin, didClose, setDidClose, codeVerifier, setCodeVerifier, token, setToken, userDetails, setUserDetails, expiresIn, setExpiresIn, revealLists, setRevealLists }) {
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
    modifyPlayLists(newPlaylists, setSpotifyAdd, setSpotifyUrl, setHasClicked, playlistName, setSuccessfullyLogin, token, setDidClose, setCodeVerifier, setToken, setUserDetails, setExpiresIn, userDetails);
    setIsEditing(false);
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
    window.open(userDetails.external_urls.spotify, "_blank");
  }

  const handleRename = async () => {
    setIsEditing(true);
  }
  const handleDoneRename = () => {
    setIsEditing(false);
    if(playlistName === '') {
      setPlaylistName('My PlayLists');
    }
  }
  const handleChange = (e) => {
    setPlaylistName(e.target.value);
  };

  const enterKeyRename = (e) => {
    if (e.key === "Enter") {
      handleDoneRename();
    }
  }

  const closeNotif = () => {
    setSuccessfullyLogin(false);
    setDidClose(true);
  }

  const handleLogout = () => {
    removeAllData();
    window.location.reload()
  }

  const handleReveal = () => {
    if(revealLists) {
      saveStorage('revealLists', false);
      setRevealLists(false);
      return;
    }
    saveStorage('revealLists', true);
    setRevealLists(true);
  }
  // check the state newPlaylists every time the state changes from handleClick
  useEffect(() => {
    console.log(newPlaylists);
    console.log(token)
    console.log(userDetails);
    saveStorage('newPlaylists', newPlaylists);
    saveStorage('playlistName', playlistName);
    saveStorage('isEditing', isEditing);
    saveStorage('spotifyAdd', spotifyAdd);
    saveStorage('hasClicked', hasClicked);
    const codeParam = new URLSearchParams(window.location.search).get("code");
    if (codeParam && !didClose) {
      console.log('yes')
      setSuccessfullyLogin(true);
      saveStorage('didClose', didClose);
      saveStorage('successfullyLogin', successfullyLogin);
      console.log(codeParam)
    } else {
      setSuccessfullyLogin(false);
      saveStorage('didClose', didClose);
      saveStorage('successfullyLogin', successfullyLogin);
    }
  }, [newPlaylists, playlistName, isEditing, spotifyAdd, hasClicked, didClose, successfullyLogin]);

  // kunin yung userDetails state tas irender yung data
  useEffect(() => {
    const codeParam = new URLSearchParams(window.location.search).get("code");
    if(codeParam) {
      if(!token) {
        saveStorage('accessToken', token);
        getTokenForModify(setToken);
      }
      saveStorage('codeVerifier', codeVerifier);
      saveStorage('expiresIn', expiresIn);
      saveStorage('userDetails', userDetails);
      getUserDetails(setUserDetails, token);
      console.log(token);
      console.log(userDetails);
    }
  }, [token])
  
  useEffect(() => {
    saveStorage('revealLists', revealLists);
  }, [revealLists])
  return (
    <div className={className}>
      {/* TopBar (the one with the big spotify logo) */}
      <TopBar className={`text-white flex fixed left-0 right-0 justify-between bg-gray-900 z-50 ${hasClicked && 'brightness-50'}`} userDetails={userDetails} revealLists={revealLists} handleLogout={handleLogout} handleReveal={handleReveal} handleNavigateSpotify={handleNavigateSpotify}/>
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
      spotifyAdd={spotifyAdd}
      isEditing={isEditing}
      handleRename={handleRename}
      handleDoneRename={handleDoneRename}
      handleChange={handleChange}
      playlistName={playlistName}
      setPlaylistName={setPlaylistName}
      enterKeyRename={enterKeyRename}/>

      {/* BottomContent (the one with the watermark at the bottom) */}
      <BottomContent className={`text-white bg-slate-900 w-full h-28 ${hasClicked && 'brightness-50'}`}/>

      <ModalContent className={`text-white w-full fixed top-0 h-screen ${hasClicked ? 'flex' : 'hidden'} justify-center items-center z-[9000]`}
      newPlaylists={newPlaylists} 
      handleModal={handleModal} 
      handleNavigateSpotify={handleNavigateSpotify} 
      spotifyAdd={spotifyAdd} 
      hasClicked={hasClicked}
      playlistName={playlistName}/>

      <LoginNotifContent className={`text-white w-full fixed top-0 h-screen ${successfullyLogin ? 'flex' : 'hidden'} items-center justify-center z-[9000]`} closeNotif={closeNotif} userDetails={userDetails}/>
    </div>
  )
}