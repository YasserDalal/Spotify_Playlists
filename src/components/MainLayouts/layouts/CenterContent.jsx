
import SearchBar from "../../inputs/SearchBar";
import ListContent from "./features/ListContent";
import StoredContent from "./features/StoredContent";

export default function CenterContent({ className, handleClick, searchSongs, handleRemove, handleSongs, enterKey, isAdded, loading, playlists, newPlaylists, setSong, song, handleSpotifyPlayLists, handleRename, handleDoneRename, isEditing, playlistName, handleChange, enterKeyRename, setLoading, setPlaylists, setNewPlaylists, setIsAdded, setSpotifyAdd, setHasClicked, setToken, setIsEditing, setPlaylistName }) {
  return (
    <div className={className}>

      <SearchBar className="w-full flex flex-col items-center pt-44"
      searchSongs={searchSongs} 
      handleSongs={handleSongs} 
      enterKey={enterKey}
      song={song}
      setLoading={setLoading}
      setPlaylists={setPlaylists}
      setSong={setSong}/>

      <div className="flex justify-center gap-10 pt-14 flex-wrap px-3 max-[863px]:gap-20">

        <ListContent className="text-white bg-slate-900 max-[450px]:max-w-[90%] max-[450px]:min-w-[300px] min-w-[400px] max-w-[30%] w-full h-[600px] rounded-xl shadow-[0px_4px_5px_3px_black]"
        playlists={playlists} 
        setSong={setSong} 
        loading={loading} 
        song={song} 
        handleClick={handleClick}
        newPlaylists={newPlaylists}
        setNewPlaylists={setNewPlaylists}
        setIsAdded={setIsAdded}/>

        <StoredContent className="bg-slate-900 relative z-0 max-[450px]:max-w-[90%] max-[450px]:min-w-[300px] min-w-[400px] max-w-[30%] w-full h-[600px] rounded-xl shadow-[0px_4px_5px_3px_black]"
        newPlaylists={newPlaylists}
        handleRemove={handleRemove} 
        isAdded={isAdded} 
        handleSpotifyPlayLists={handleSpotifyPlayLists}
        handleDoneRename={handleDoneRename}
        handleRename={handleRename}
        isEditing={isEditing}
        playlistName={playlistName}
        handleChange={handleChange}
        enterKeyRename={enterKeyRename}
        setNewPlaylists={setNewPlaylists}
        setSpotifyAdd={setSpotifyAdd}
        setHasClicked={setHasClicked}
        setToken={setToken}
        setIsEditing={setIsEditing}
        setPlaylistName={setPlaylistName}/>
      </div>
    </div>
  );
}