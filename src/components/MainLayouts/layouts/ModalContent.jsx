import Modal from "./features/Modal";

export default function ModalContent({ className, newPlaylists, handleModal, handleNavigateSpotify, spotifyAdd, playlistName }) {
  return (
    <div className={className}>
      <Modal className="max-[450px]:max-w-[90%] max-[450px]:min-w-[300px] min-w-[400px] max-w-[50%] w-full h-[610px] rounded-xl shadow-[0px_4px_5px_3px_black] bg-slate-900 flex flex-col p-5 relative" 
        newPlaylists={newPlaylists} 
        spotifyAdd={spotifyAdd} 
        handleModal={handleModal}  
        handleNavigateSpotify={handleNavigateSpotify}
        playlistName={playlistName}/>
    </div>
  )
}