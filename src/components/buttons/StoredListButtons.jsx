
export default function StoredListButton({playlist, handleRemove}) {
  console.log(playlist)
  return (
    <li className="p-2 rounded-lg">
      <div className="flex rounded-lg cursor-pointer p-2 hover:shadow-[0px_1.8px_1px_2px_#28d7a3] hover:shadow-slate-700 duration-100 " onClick={handleRemove}>
        <div className="w-32">
          <img src={playlist.album.images[1]?.url || playlist.album.images[0]?.url} alt="singers picture" className="rounded-full"/>
        </div>
        <div className="flex flex-col justify-center pl-4  w-full">
          <div className="font-bold text-xl text-[clamp(0.9rem,4vw,1.3rem)]">{playlist.name}</div>
          <div className="text-gray-400 text-[clamp(0.7rem,4vw,1rem)]">{playlist.artists[0].name}</div>
        </div>
        <div className="flex justify-end items-center">
          <div className="text-5xl">-</div>
        </div>
      </div>
    </li>
  );
}