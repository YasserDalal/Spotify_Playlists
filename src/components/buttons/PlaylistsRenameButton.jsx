
export default function PlaylistsRenameButton({ className, Fontawesome, faPenToSquare, handleRename, handleDoneRename, isEditing, faCheck }) {
  return (
    <button className={className} onClick={isEditing ? handleDoneRename : handleRename }><Fontawesome icon={isEditing ? faCheck : faPenToSquare} className='text-[#28d7a3]' size="1x"/></button>
  )
}