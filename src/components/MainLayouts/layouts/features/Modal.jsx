
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

import ModalHeaderContainer from './modalContainers/headerContainer';
import SongTracks from './modalContainers/SongTracks';
import ModalButtonsContainer from './modalContainers/buttonContainer';

import LoadingScreen from '@/components/loading UI/LoadingScreen';

export default function Modal({ className, newPlaylists, handleModal, handleNavigateSpotify, spotifyAdd, playlistName }) {
  return (
    <div className={className}>
      {!spotifyAdd ?  <LoadingScreen className='flex flex-col justify-center items-center h-[610px]' 
                        FontAwesomeIcon={FontAwesomeIcon} 
                        faSpotify={faSpotify}/> 
        : (
          <div className='h-[610px]'>  
            <ModalHeaderContainer className='flex flex-col items-center pt-5' 
            FontAwesomeIcon={FontAwesomeIcon} 
            faSpotify={faSpotify}/>

            <SongTracks className='flex flex-col pt-7' 
            newPlaylists={newPlaylists} playlistName={playlistName}/>

            <ModalButtonsContainer className='flex pt-5 absolute bottom-5 right-5 left-5'
            handleNavigateSpotify={handleNavigateSpotify} 
            handleModal={handleModal} 
            FontAwesomeIcon={FontAwesomeIcon} 
            faSpotify={faSpotify}/>
          </div>
        )
      }
    </div>
  )
}