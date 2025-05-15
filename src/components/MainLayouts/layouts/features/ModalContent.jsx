
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

import ModalHeaderContainer from './modalContainers/headerContainer';
import SongTracks from './modalContainers/SongTracks';
import ModalButtonsContainer from './modalContainers/buttonContainer';

export default function Modal({ className, newPlaylists, handleModal, handleNavigateSpotify }) {
  return (
    <div className={className}>
      <ModalHeaderContainer className='flex flex-col items-center pt-5' FontAwesomeIcon={FontAwesomeIcon} faSpotify={faSpotify}/>
      <SongTracks className='flex flex-col pt-7' newPlaylists={newPlaylists}/>
      <ModalButtonsContainer className='flex justify-between pt-5 absolute bottom-5 right-5 left-5' handleNavigateSpotify={handleNavigateSpotify} handleModal={handleModal} FontAwesomeIcon={FontAwesomeIcon} faSpotify={faSpotify}/>
    </div>
  )
}