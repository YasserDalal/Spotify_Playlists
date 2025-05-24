
import MainContent from './MainContent.jsx'

export default function MainLayout({ playlists, song, loading, newPlaylists, isAdded, hasClicked, spotifyAdd, setPlaylists, setSong, setLoading, setNewPlaylists, setIsAdded, setSpotifyAdd, setHasClicked, isEditing, setIsEditing, playlistName, setPlaylistName, successfullyLogin, setSuccessfullyLogin, didClose, setDidClose, codeVerifier, setCodeVerifier, token, setToken, userDetails, setUserDetails, expiresIn, setExpiresIn, revealLists, setRevealLists }) {

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
                    setRevealLists={setRevealLists}/>           
    </div>
  );

}