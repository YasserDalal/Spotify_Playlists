import SaveToSpotifyButton from "../../../buttons/SaveToSpotifyButton";

export default function StoredContent() {
  return (
    <div className="text-white bg-slate-900 max-[450px]:max-w-[90%] max-[450px]:min-w-[300px] min-w-[400px] max-w-[30%] w-full h-[600px] rounded-xl shadow-[0px_4px_5px_3px_black]">
      <div className="flex flex-col px-8">
        <div className="border-b-2 border-gray-400 pt-10">
          <h3 className="pl-5 py-5 text-2xl font-bold">NEW PLAYLISTS</h3>
        </div>
        <div className="pt-10">
        <ul className="flex flex-col overflow-y-auto h-[80%] custom-scrollbar  scroll-fade">
            <li className="p-2 rounded-lg">
              <div className="flex rounded-lg cursor-pointer p-2 hover:shadow-[0px_1.8px_1px_2px_#28d7a3] hover:shadow-slate-700 duration-100 ">
                <div className="w-32">
                  <img src="../../../../../public/singers pictures/aimer profile picture.jpg" alt="singers picture" className="rounded-full"/>
                </div>
                <div className="flex flex-col justify-center pl-4">
                  <div className="font-bold text-xl">Kataomoi</div>
                  <div className="text-gray-400">Aimer</div>
                </div>
                <div className="flex justify-end w-full items-center">
                  <div className="text-5xl">-</div>
                </div>
              </div>
            </li>
            
          </ul>
        </div>
        <div>
          <SaveToSpotifyButton />
        </div>
      </div>
    </div>
  );
}