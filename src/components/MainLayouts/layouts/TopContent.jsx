
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

export default function TopBar({ className }){
  return (
    <div className={className}>
      <div className='flex items-center'>
        <div className='text-[#28d7a3]'>
          <FontAwesomeIcon icon={faSpotify} size="4x" className='p-4'/>
        </div>
        <h1 className='font-bold text-3xl'>Spotify PlayLists</h1>
      </div>
    </div>
  
  );
}