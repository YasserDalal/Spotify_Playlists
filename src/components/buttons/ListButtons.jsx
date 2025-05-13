
export default function ListButton({ className, playlist, handleClick }) {
  return (
    <li className={className}>
      <div className="flex rounded-lg cursor-pointer p-2 hover:shadow-[0px_1.8px_1px_2px] hover:shadow-slate-700 duration-100 z-10" onClick={handleClick}>
        <div className="w-36">
          <img src={playlist.album.images[1]?.url || playlist.album.images[0]?.url} loading="lazy" alt="singers picture" className="rounded-full"/>
        </div>
        <div className="flex flex-col justify-center pl-4 w-full">
          <div className="font-bold text-xl w-full text-[clamp(0.9rem,4vw,1.3rem)]">{playlist.name}</div>
          <div className="text-gray-400 text-[clamp(0.7rem,4vw,1rem)]">{playlist.artists[0].name}</div>
        </div>
        <div className="flex justify-end items-center">
          <div className="text-3xl">+</div>
        </div>
      </div>
    </li>
  )
}