import MainLayout from "./components/MainLayouts/MainLayout";
import { useState } from "react";
import getStorage from "./components/localStorage/getStorage";
import getValue from "./components/localStorage/getValue";

export default function App() {
  // at first render this state will be 'null' so it will execute the else statement and set it to 'false'
  const [isLoggedIn, setIsLoggedIn] = useState(getStorage('isLoggedIn') || false);
  const [playlists, setPlaylists] = useState(getStorage('playlists') || undefined);
  const [song, setSong] = useState();
  const [loading, setLoading] = useState(false);

  const [newPlaylists, setNewPlaylists] = useState(getStorage('newPlaylists') || []);
  const [isAdded, setIsAdded] = useState(false);
  const [spotifyAdd, setSpotifyAdd] = useState(getStorage('spotifyAdd') || false);
  const [spotifyUrl, setSpotifyUrl] = useState()
  const [hasClicked, setHasClicked] = useState(getStorage('hasClicked') || false);
  const [successfullyLogin, setSuccessfullyLogin] = useState(getStorage('successfullyLogin') || false);
  const [didClose, setDidClose] = useState(getStorage('didClose') || false);

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
                  spotifyUrl={spotifyUrl} 
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
                  setSpotifyUrl={setSpotifyUrl} 
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