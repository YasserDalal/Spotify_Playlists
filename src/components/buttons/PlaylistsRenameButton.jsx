
export default function PlaylistsRenameButton({ className, Fontawesome, faPenToSquare, handleRename, handleDoneRename, isEditing, faCheck, setIsEditing, playlistName, setPlaylistName }) {
  return (
    <button className={className} onClick={() =>isEditing ? handleDoneRename(setIsEditing, playlistName, setPlaylistName) : handleRename(setIsEditing) }><Fontawesome icon={isEditing ? faCheck : faPenToSquare} className='text-[#28d7a3]' size="1x"/></button>
  )
}