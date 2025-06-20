
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

import ProfileButton from '@/components/buttons/ProfileButton';
import { Skeleton } from '@/components/ui/skeleton';
import ProfileLists from './features/ProfileLists';

export default function TopBar({ className, userDetails, handleLogout, handleReveal, revealLists, handleNavigateSpotify, setRevealLists, setSuccessfullyLogout, setDidClickLogout }) {
  return (
    <div className={className}>
      <div className='flex w-full justify-between z-50 bg-gray-900'>
        <div className='flex items-center'>
          <div className='text-[#28d7a3]'>
            <FontAwesomeIcon icon={faSpotify} size="4x" className='p-4'/>
          </div>
          <h1 className='font-bold text-[clamp(1rem,5vw,2rem)]'>Spotify PlayLists</h1>
        </div>
        <div className='flex flex-col justify-center'>
          {userDetails.display_name ? 
          ( 
          <div>
            <ProfileButton className='flex flex-col relative w-24 pr-5' userDetails={userDetails} handleLogout={handleLogout} handleReveal={handleReveal} revealLists={revealLists} setRevealLists={setRevealLists}/> 
          </div>
          ) : <Skeleton className=" h-20 rounded-full" />}
        </div>
      </div>
      <ProfileLists className={`absolute right-10 rounded-bl-md rounded-br-md  transition-all duration-200 w-[210px]  ${revealLists ? '-bottom-28 opacity-100': '-bottom-0 opacity-0'}`}handleReveal={handleReveal} handleLogout={handleLogout} FontAwesomeIcon={FontAwesomeIcon} faPowerOff={faPowerOff} faSpotify={faSpotify} handleNavigateSpotify={handleNavigateSpotify} userDetails={userDetails} setDidClickLogout={setDidClickLogout} setSuccessfullyLogout={setSuccessfullyLogout}/>
    </div>
  );
}