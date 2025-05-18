
import Form from '../login/Form.jsx'
import MainContent from './MainContent.jsx'

import saveStorage from '../localStorage/saveStorage.js';

export default function MainLayout({ isLoggedIn, playlists, song, loading, newPlaylists, isAdded, hasClicked, spotifyAdd, spotifyUrl, setPlaylists, setSong, setLoading, setNewPlaylists, setIsAdded, setSpotifyAdd, setSpotifyUrl, setHasClicked, isEditing, setIsEditing, playlistName, setPlaylistName, successfullyLogin, setSuccessfullyLogin, didClose, setDidClose }) {

  const handleLogin = () => {
    // the isLoggedIn state will be set to 'true'
    saveStorage('isLoggedIn', true);
  }

  return (
    <div className='w-full h-full bg-slate-900'>
      {isLoggedIn ? <MainContent className="w-auto h-screen" 
                      playlists={playlists} 
                      song={song} 
                      loading={loading} 
                      newPlaylists={newPlaylists} 
                      isAdded={isAdded} 
                      hasClicked={hasClicked} 
                      spotifyAdd={spotifyAdd} 
                      spotifyUrl={spotifyUrl}
                      isEditing={isEditing} 
                      playlistName={playlistName}
                      successfullyLogin={successfullyLogin}
                      didClose={didClose}

                      setPlaylists={setPlaylists} 
                      setSong={setSong} 
                      setLoading={setLoading} 
                      setNewPlaylists={setNewPlaylists} 
                      setIsAdded={setIsAdded} 
                      setSpotifyAdd={setSpotifyAdd} 
                      setSpotifyUrl={setSpotifyUrl} 
                      setHasClicked={setHasClicked}
                      setIsEditing={setIsEditing}
                      setPlaylistName={setPlaylistName}
                      setSuccessfullyLogin={setSuccessfullyLogin}
                      setDidClose={setDidClose}/> 
                      : <Form className="flex justify-center items-center w-auto h-screen text-white" handleLogin={handleLogin} />}
    </div>
  );

}