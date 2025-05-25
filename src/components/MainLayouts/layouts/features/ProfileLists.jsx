
export default function ProfileLists({ className, handleLogout, faPowerOff, FontAwesomeIcon, faSpotify, handleNavigateSpotify, userDetails, setSuccessfullyLogout, setDidClickLogout }) {
  return (
    <div className={className}>
        <ul className={`bg-gray-900 rounded-bl-md rounded-br-md py-3 px-5`}>
          <li className="py-2 cursor-pointer rounded-md hover:shadow-[-2px_1px_1px_1px_#334155] hover:pl-2 transition-all duration-300 mb-2" onClick={() => handleNavigateSpotify(userDetails)}>
            <div className="flex items-center">
              <div className="">Check your profile</div> 
              <FontAwesomeIcon icon={faSpotify} className="ml-2 text-[#28d7a3]" onClick={handleLogout}/>
            </div>
          </li>
          <li className="py-2 cursor-pointer rounded-md hover:shadow-[-2px_1px_1px_1px_#334155] hover:pl-2 transition-all duration-300" onClick={() => handleLogout(setSuccessfullyLogout, setDidClickLogout)}>
            <div className="flex items-center">
              <div className="pr-[79px]">Logout</div> 
              <FontAwesomeIcon icon={faPowerOff} className="ml-2 text-[#d17979]" onClick={handleLogout}/>
            </div>
          </li>
        </ul>
    </div>
  )
}