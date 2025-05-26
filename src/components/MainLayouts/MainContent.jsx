
import TopBar from "./layouts/TopContent"
import CenterContent from "./layouts/CenterContent"
import BottomContent from "./layouts/BottomContent"
import ModalContent from "./layouts/ModalContent";
import LoginNotifContent from "./layouts/LoginNotifContent";

import searchSongs from "../../events/searchSongs";
import enterKey from "../../events/enterKey";
import handleSongs from "@/events/handleSongs";
import handleClick from "@/events/handleClick";
import handleRemove from "@/events/handleRemove";
import handleSpotifyPlayLists from "@/events/handleSpotifyPlayLists";
import handleModal from "@/events/handleModal";
import handleNavigateSpotify from "@/events/handleNavigateSpotify";
import handleRename from "@/events/handleRename";
import handleDoneRename from "@/events/handleDoneRename";
import handleChange from "@/events/handleChange";
import enterKeyRename from "@/events/enterKeyRename";
import closeNotif from "@/events/closeNotif";
import handleLogout from "@/events/handleLogout";
import handleReveal from "@/events/handleReveal";

export default function MainContent({ className, playlists, setPlaylists, newPlaylists, setNewPlaylists, setIsAdded, isAdded, loading, setLoading, song, setSong, spotifyAdd, setSpotifyAdd, hasClicked, setHasClicked, isEditing, setIsEditing, playlistName, setPlaylistName, successfullyLogin, setSuccessfullyLogin, setDidClose, setToken, userDetails, revealLists, setRevealLists, setSuccessfullyLogout, setDidClickLogout }) {
  return (
    <div className={className}>
      {/* TopBar (the one with the big spotify logo) */}
      <TopBar className={`text-white flex fixed left-0 right-0 justify-between bg-gray-900 z-50 ${(hasClicked || successfullyLogin) && 'brightness-50'}`} userDetails={userDetails} revealLists={revealLists} handleLogout={handleLogout} handleReveal={handleReveal} handleNavigateSpotify={handleNavigateSpotify} setRevealLists={setRevealLists} setSuccessfullyLogout={setSuccessfullyLogout} setDidClickLogout={setDidClickLogout}/>
      {/* CenterContent (the one with the search bar and the two lists) */}
      <CenterContent className={`text-white bg-slate-700 pb-10 ${(hasClicked || successfullyLogin) && 'brightness-50'}`}
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
      isEditing={isEditing}
      handleRename={handleRename}
      handleDoneRename={handleDoneRename}
      handleChange={handleChange}
      playlistName={playlistName}
      enterKeyRename={enterKeyRename}
      setSpotifyAdd={setSpotifyAdd}
      setToken={setToken}
      setIsEditing={setIsEditing}
      setHasClicked={setHasClicked}
      setPlaylistName={setPlaylistName}/>

      {/* BottomContent (the one with the watermark at the bottom) */}
      <BottomContent className={`text-white bg-slate-900 w-full h-28 ${(hasClicked || successfullyLogin) && 'brightness-50'}`}/>

      <ModalContent className={`text-white w-full fixed top-0 h-screen ${hasClicked ? 'flex' : 'hidden'} justify-center items-center z-[9000]`}
      newPlaylists={newPlaylists} 
      handleModal={handleModal} 
      handleNavigateSpotify={handleNavigateSpotify} 
      spotifyAdd={spotifyAdd} 
      hasClicked={hasClicked}
      playlistName={playlistName}
      setSpotifyAdd={setSpotifyAdd}
      setHasClicked={setHasClicked}
      setNewPlaylists={setNewPlaylists}
      userDetails={userDetails}/>

      <LoginNotifContent className={`text-white w-full fixed top-0 h-screen ${successfullyLogin ? 'flex' : 'hidden'} items-center justify-center z-[9000]`} closeNotif={closeNotif} userDetails={userDetails} setSuccessfullyLogin={setSuccessfullyLogin} setDidClose={setDidClose}/>
    </div>
  )
}