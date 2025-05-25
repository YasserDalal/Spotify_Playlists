
import NavigateInSpotifyButton from "@/components/buttons/modal/NavigateInSpotifyButton";
import CloseButton from "@/components/buttons/modal/CloseButton";

export default function ModalButtonsContainer({ className, handleModal, handleNavigateSpotify, FontAwesomeIcon, faSpotify, setSpotifyAdd, setHasClicked, setNewPlaylists, userDetails }) {
  return (
    <div className={className}>
      
      <NavigateInSpotifyButton className='border-[2px] border-[#28d7a3] py-2 px-3 rounded-full cursor-pointer hover:bg-[#133d31] hover:border-transparent duration-200 transition-all absolute right-0 bottom-0' 
      handleNavigateSpotify={handleNavigateSpotify} 
      FontAwesomeIcon={FontAwesomeIcon} 
      faSpotify={faSpotify}
      userDetails={userDetails}/>

      <CloseButton className='absolute -top-[560px] right-0' 
      handleModal={handleModal}
      setSpotifyAdd={setSpotifyAdd}
      setHasClicked={setHasClicked}
      setNewPlaylists={setNewPlaylists}/>

    </div>
  );
}