import MainLayout from "./components/MainLayouts/MainLayout";

import useStatesForSearching from "./components/states/statesForSearching";
import useStatesForCreatingPlaylists from "./components/states/statesForCreatingPlaylists.";
import useStatesOfSpotify from "./components/states/statesForSpotifyAdd";
import useStatesForLoggingInSpotify from "./components/states/statesForLoggingInSpotify";
import useStatesForPlaylistsInSpotify from "./components/states/statesForPlaylistsInSpotify";
import useStatesForUserData from "./components/states/statesForUserData";
import useStatesForEditingExpiration from "./components/states/statesForEditing&Expiration";
import useStatesForRevealingLists from "./components/states/statesForRevealingLists";

export default function App() {
  const { song, setSong, loading, setLoading, playlists, setPlaylists } = useStatesForSearching();
  const { newPlaylists, setNewPlaylists, isAdded, setIsAdded } = useStatesForCreatingPlaylists();
  const { spotifyAdd, setSpotifyAdd, hasClicked, setHasClicked } = useStatesOfSpotify();
  const { successfullyLogin, setSuccessfullyLogin, didClose, setDidClose } = useStatesForLoggingInSpotify();
  const { token, setToken, codeVerifier, setCodeVerifier } = useStatesForPlaylistsInSpotify();
  const { userDetails, setUserDetails, playlistName, setPlaylistName } = useStatesForUserData();
  const { isEditing, setIsEditing, expiresIn, setExpiresIn } = useStatesForEditingExpiration();
  const { revealLists, setRevealLists } = useStatesForRevealingLists();

  return (
    <>
      <MainLayout playlists={playlists} 
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