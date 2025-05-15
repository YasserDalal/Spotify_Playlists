
import NavigateInSpotifyButton from "@/components/buttons/modal/NavigateInSpotifyButton";
import CloseButton from "@/components/buttons/modal/CloseButton";

export default function ModalButtonsContainer({ className, handleModal, handleNavigateSpotify, FontAwesomeIcon, faSpotify }) {
  return (
    <div className={className}>
      
      <NavigateInSpotifyButton className='border-[2px] border-[#28d7a3] py-2 px-3 rounded-full cursor-pointer hover:bg-[#133d31] hover:border-transparent duration-200 transition-all' handleNavigateSpotify={handleNavigateSpotify} FontAwesomeIcon={FontAwesomeIcon} faSpotify={faSpotify}/>

      <CloseButton className='border-[2px] border-[#f16767] py-2 px-3 rounded-full cursor-pointer hover:bg-[#8f3e3e] hover:border-transparent duration-200 transition-all' handleModal={handleModal}/>

    </div>
  );
}