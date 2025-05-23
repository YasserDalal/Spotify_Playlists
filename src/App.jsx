import MainLayout from "./components/MainLayouts/MainLayout";
import { useState } from "react";
import getStorage from "./components/localStorage/getStorage";
import getValue from "./components/localStorage/getValue";

import useStatesForSearching from "./components/states/statesForSearching";
import useStatesForCreatingPlaylists from "./components/states/statesForCreatingPlaylists.";
import useStatesOfSpotify from "./components/states/statesForSpotifyAdd";
import useStatesForLoggingInSpotify from "./components/states/statesForLoggingInSpotify";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(getStorage('isLoggedIn') || false);
  
  const { song, setSong, loading, setLoading, playlists, setPlaylists } = useStatesForSearching();
  const { newPlaylists, setNewPlaylists, isAdded, setIsAdded } = useStatesForCreatingPlaylists();
  const { spotifyAdd, setSpotifyAdd, hasClicked, setHasClicked } = useStatesOfSpotify();
  const { successfullyLogin, setSuccessfullyLogin, didClose, setDidClose } = useStatesForLoggingInSpotify();

  const [isEditing, setIsEditing] = useState(getStorage('isEditing') || false);
  const [playlistName, setPlaylistName] = useState(getStorage('playlistName') || 'My PlayLists');

  const [codeVerifier, setCodeVerifier] = useState(getStorage('codeVerifier') || '');
  const [token, setToken] = useState(getValue('accessToken') || '');
  const [expiresIn, setExpiresIn] = useState(getStorage('expiresIn') || '');
  const [userDetails, setUserDetails] = useState(getStorage('userDetails') || {});

  const [revealLists, setRevealLists] = useState(getValue('reveal') || false)
  return (
    <>
      <MainLayout isLoggedIn={isLoggedIn}        
                  playlists={playlists} 
                  song={song} 
                  loading={loading} 
                  newPlaylists={newPlaylists}           // States
                  isAdded={isAdded} 
                  hasClicked={hasClicked}
                  spotifyAdd={spotifyAdd} 
                  isEditing={isEditing}   
                  playlistName={playlistName} 
                  successfullyLogin={successfullyLogin} 
                  didClose={didClose} 
                  revealLists={revealLists} 

                  codeVerifier={codeVerifier}
                  token={token}                          // states for OAuth
                  expiresIn={expiresIn}
                  userDetails={userDetails}     

                  setPlaylists={setPlaylists} 
                  setSong={setSong} 
                  setLoading={setLoading} 
                  setNewPlaylists={setNewPlaylists} 
                  setIsAdded={setIsAdded}                // Setters
                  setSpotifyAdd={setSpotifyAdd} 
                  setHasClicked={setHasClicked}
                  setIsEditing={setIsEditing}
                  setPlaylistName={setPlaylistName}
                  setSuccessfullyLogin={setSuccessfullyLogin}
                  setDidClose={setDidClose}
                  setRevealLists={setRevealLists}

                  setCodeVerifier={setCodeVerifier}
                  setToken={setToken}                    // Setters for OAuth
                  setExpiresIn={setExpiresIn}
                  setUserDetails={setUserDetails}
      />
    </>
  );
}