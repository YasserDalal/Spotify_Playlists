
export default function CloseButton({ className, handleModal, setSpotifyAdd, setHasClicked, setNewPlaylists }) {
  return (
    <div className={className} onClick={() => handleModal(setSpotifyAdd, setHasClicked, setNewPlaylists)}>
      <button className="text-6xl text-[#e37575] hover:text-[#ff4e4e]">×</button>
    </div>
  );
}