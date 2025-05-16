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
  const [spotifyAdd, setSpotifyAdd] = useState(false)
  const [spotifyUrl, setSpotifyUrl] = useState()
  const [hasClicked, setHasClicked] = useState(false);
  return (
    <>
      <MainLayout isLoggedIn={isLoggedIn}
                  playlists={playlists} 
                  song={song} 
                  loading={loading} 
                  newPlaylists={newPlaylists} 
                  isAdded={isAdded} 
                  hasClicked={hasClicked}
                  spotifyAdd={spotifyAdd} 
                  spotifyUrl={spotifyUrl} 
                  setPlaylists={setPlaylists} 
                  setSong={setSong} 
                  setLoading={setLoading} 
                  setNewPlaylists={setNewPlaylists} 
                  setIsAdded={setIsAdded} 
                  setSpotifyAdd={setSpotifyAdd} 
                  setSpotifyUrl={setSpotifyUrl} 
                  setHasClicked={setHasClicked}
      />
    </>
  );
}