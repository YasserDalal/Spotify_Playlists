
export default function SongTracks({ className, newPlaylists }) {
  return (
    <div className={className}>
        <div className='text-center text-[15px]'>Your Tracks</div>
        <div className='flex flex-col pt-5'>
          <div className='text-2xl pb-4 border-l-[1px] border-gray-400 pl-2'>My PlayLists</div>
          <div className='border-l-[1px] border-gray-400 pl-2'>
            <div className=''>
              <ul className='flex flex-col overflow-y-auto max-h-[285px] custom-scrollbar  scroll-fade'>
                {newPlaylists && newPlaylists.map((playlist) => (
                <div className="flex p-2 border-b-2 border-gray-400 mr-2 last-of-type:border-b-0" key={playlist.id}>
                  <div className="w-20">
                    <img src={playlist.album.images[1]?.url || playlist.album.images[0]?.url} alt="singers picture" className="rounded-full"/>
                  </div>
                  <div className="flex flex-col justify-center pl-4  w-full">
                    <div className="font-bold text-xl text-[clamp(0.9rem,4vw,1.3rem)]">{playlist.name}</div>
                    <div className="text-gray-400 text-[clamp(0.7rem,4vw,1rem)]">{playlist.artists[0].name}</div>
                  </div>
                </div>
                ))}  
              </ul>
            </div>
          </div>
        </div>
      </div>
  )
}