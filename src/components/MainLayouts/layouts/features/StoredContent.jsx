import SaveToSpotifyButton from "../../../buttons/SaveToSpotifyButton";

export default function StoredContent() {
  return (
    <div className="text-white bg-slate-900 max-[450px]:max-w-[90%] max-[450px]:min-w-[300px] min-w-[400px] max-w-[30%] w-full h-[600px] rounded-xl">
      <div className="flex flex-col px-8">
        <div className="border-b-2 border-gray-400 pt-10">
          <h3 className="pl-5 py-5 text-2xl font-bold">NEW PLAYLISTS</h3>
        </div>
        <div className="pt-10">
          <ul>
            <li className="p-2">1</li>
            <li className="p-2">2</li>
            <li className="p-2">3</li>
            <li className="p-2">4</li>
          </ul>
        </div>
        <div>
          <SaveToSpotifyButton />
        </div>
      </div>
    </div>
  );
}