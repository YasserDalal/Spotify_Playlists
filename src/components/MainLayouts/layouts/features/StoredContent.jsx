
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import TextareaAutosize from 'react-textarea-autosize';

import SaveToSpotifyButton from "../../../buttons/SaveToSpotifyButton";
import StoredListButton from "../../../buttons/StoredListButtons";
import PlaylistsRenameButton from "../../../buttons/playlistsRenameButton";

export default function StoredContent({ className, newPlaylists, handleSpotifyPlayLists, handleRemove, isAdded, isEditing, handleRename, handleDoneRename, playlistName, handleChange, enterKeyRename, setNewPlaylists, setSpotifyAdd, setHasClicked, setToken, setIsEditing, setPlaylistName }) {
  return (
    <div className={className}>
      <div className={`bg-[#0f172a91]  ${isAdded && '-translate-y-10'} transition-all duration-300 text-center pt-2 pb-4 absolute right-1 left-1 z-0 rounded-tl-xl rounded-tr-xl shadow-[0px_8px_8px_2px_black] text-[clamp(0.9rem,4vw,1rem)]`}>The song that you clicked is already in here</div>
      <div className="bg-slate-900 rounded-xl text-white z-10 relative h-full">
        <div className="flex flex-col pl-6 pr-5 h-full">
          <div className={`border-b-2 ${isEditing ? 'border-[#28d7a3]' : 'border-gray-400'} pt-10`}>
            <h3 className="pl-5 py-5 text-2xl font-bold flex justify-between">
              {isEditing ? (
                <TextareaAutosize
                  spellCheck={false}
                  value={playlistName}
                  onChange={(e) => handleChange(e, setPlaylistName)}
                  onKeyDown={(e) => enterKeyRename(e, setIsEditing, playlistName, setPlaylistName)}
                  maxLength={40}
                  onFocus={(e) => {
                    const val = e.target.value;
                    e.target.setSelectionRange(val.length, val.length);
                  }}
                  autoFocus
                  className=" text-white bg-transparent border-none border-0 focus:outline-none resize-none text-left"
                />
              ) : (
                <div>{playlistName}</div>
              )}
              <PlaylistsRenameButton Fontawesome={FontAwesomeIcon} faPenToSquare={faPenToSquare} isEditing={isEditing} handleRename={handleRename} handleDoneRename={handleDoneRename} faCheck={faCheck} setIsEditing={setIsEditing} playlistName={playlistName} setPlaylistName={setPlaylistName}/>
            </h3>
          </div>
          <div className="pt-10 max-h-[365px]">
            <ul className="flex flex-col overflow-y-auto max-h-[345px] custom-scrollbar  scroll-fade">
                {newPlaylists && newPlaylists.map((playlist) => (
                  <StoredListButton className="p-2 rounded-lg"
                   playlist={playlist} 
                   key={playlist.id} 
                   handleRemove={() => handleRemove(playlist, setNewPlaylists)}/>
                ))}    
            </ul>
          </div>
          <div>
            <SaveToSpotifyButton className="px-10 pt-10" handleSpotifyPlayLists={() => handleSpotifyPlayLists(newPlaylists, setSpotifyAdd, setHasClicked, playlistName, setToken, setIsEditing)}/>
          </div>
        </div>
      </div>
    </div>
  );
}