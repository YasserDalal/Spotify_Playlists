
import { useEffect } from 'react';

import saveStorage from '../localStorage/saveStorage.js';

import getTokenForModify from "./layouts/features/fetchData/getTokenForModify";
import getUserDetails from "./layouts/features/fetchData/getUserDetails";

import MainContent from './MainContent.jsx'

export default function MainLayout({ playlists, song, loading, newPlaylists, isAdded, hasClicked, spotifyAdd, setPlaylists, setSong, setLoading, setNewPlaylists, setIsAdded, setSpotifyAdd, setHasClicked, isEditing, setIsEditing, playlistName, setPlaylistName, successfullyLogin, setSuccessfullyLogin, didClose, setDidClose, codeVerifier, setCodeVerifier, token, setToken, userDetails, setUserDetails, expiresIn, setExpiresIn, revealLists, setRevealLists, successfullyLogout, setSuccessfullyLogout, didClickLogout, setDidClickLogout }) {
  useEffect(() => {
    saveStorage('newPlaylists', newPlaylists);
    saveStorage('playlistName', playlistName);
    saveStorage('isEditing', isEditing);
    saveStorage('spotifyAdd', spotifyAdd);
    saveStorage('hasClicked', hasClicked);
    const codeParam = new URLSearchParams(window.location.search).get("code");
    if (codeParam && !didClose) {
      setSuccessfullyLogin(true);
      saveStorage('didClose', didClose);
      saveStorage('successfullyLogin', successfullyLogin);
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
    }
  }, [token])
  
  useEffect(() => {
    saveStorage('revealLists', revealLists);
  }, [revealLists])

  useEffect(() => {
    saveStorage('successfullyLogout', successfullyLogout);
  }, [successfullyLogout])
  return (
    <div className='w-full h-full bg-slate-900'>
      <MainContent  className="w-auto h-screen" 
                    playlists={playlists} 
                    song={song} 
                    loading={loading} 
                    newPlaylists={newPlaylists} 
                    isAdded={isAdded} 
                    hasClicked={hasClicked} 
                    spotifyAdd={spotifyAdd} 
                    isEditing={isEditing} 
                    playlistName={playlistName}
                    successfullyLogin={successfullyLogin}
                    didClose={didClose}
                    codeVerifier={codeVerifier}
                    token={token}
                    userDetails={userDetails}
                    expiresIn={expiresIn}
                    revealLists={revealLists}
                    successfullyLogout={successfullyLogout}
                    didClickLogout={didClickLogout}

                    setPlaylists={setPlaylists} 
                    setSong={setSong} 
                    setLoading={setLoading} 
                    setNewPlaylists={setNewPlaylists} 
                    setIsAdded={setIsAdded} 
                    setSpotifyAdd={setSpotifyAdd} 
                    setHasClicked={setHasClicked}
                    setIsEditing={setIsEditing}
                    setPlaylistName={setPlaylistName}
                    setSuccessfullyLogin={setSuccessfullyLogin}
                    setDidClose={setDidClose}
                    setCodeVerifier={setCodeVerifier}
                    setToken={setToken}
                    setUserDetails={setUserDetails}
                    setExpiresIn={setExpiresIn}
                    setRevealLists={setRevealLists}
                    setSuccessfullyLogout={setSuccessfullyLogout}
                    setDidClickLogout={setDidClickLogout}/>           
    </div>
  );
}