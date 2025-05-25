
export default function ProfileButton({ className, userDetails, handleReveal, revealLists, setRevealLists }) {
  return (
    <div className={className}>
      <div className="z-50">
        <img src={userDetails?.images[1]?.url || userDetails?.images[0]?.url} alt="Profile picture" className='rounded-full cursor-pointer hover:shadow-[0px_0.2px_1px_2px] hover:shadow-[#606060] duration-100' onClick={() => handleReveal(setRevealLists, revealLists)}/>
      </div>
    </div>
  )
}