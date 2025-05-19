import MainLayout from "./components/MainLayouts/MainLayout";
import { useState } from "react";
import getStorage from "./components/localStorage/getStorage";

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

  const [code, setCode] = useState(getStorage('code') || '');
  const [accessToken, setAccessToken] = useState(getStorage('accessToken') || '');
  const [expiresIn, setExpiresIn] = useState(getStorage('expiresIn') || '');
  const [userDetails, setUserDetails] = useState(getStorage('userDetails') || {});
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

                  code={code}
                  accessToken={accessToken}
                  expiresIn={expiresIn}
                  userDetails={userDetails}     

                  setPlaylists={setPlaylists} 
                  setSong={setSong} 
                  setLoading={setLoading} 
                  setNewPlaylists={setNewPlaylists} 
                  setIsAdded={setIsAdded}               // Setters
                  setSpotifyAdd={setSpotifyAdd} 
                  setSpotifyUrl={setSpotifyUrl} 
                  setHasClicked={setHasClicked}
                  setIsEditing={setIsEditing}
                  setPlaylistName={setPlaylistName}
                  setSuccessfullyLogin={setSuccessfullyLogin}
                  setDidClose={setDidClose}

                  setCode={setCode}
                  setAccessToken={setAccessToken}
                  setExpiresIn={setExpiresIn}
                  setUserDetails={setUserDetails}

      />
    </>
  );
}