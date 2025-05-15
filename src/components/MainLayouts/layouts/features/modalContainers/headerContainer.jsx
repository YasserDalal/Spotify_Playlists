

export default function ModalHeaderContainer({ className, FontAwesomeIcon, faSpotify }) {
  return (
    <div className={className}>
      <div>
        <FontAwesomeIcon icon={faSpotify} className='text-[#28d7a3]' size="3x"/>
      </div>
      <div className='text-xl pt-5'>Successfully Added in Spotify</div>
    </div>
  );
}