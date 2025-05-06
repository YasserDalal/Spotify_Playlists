

export default function ListContent() {
  return (
    <div className="text-white bg-slate-900 max-[450px]:max-w-[90%] max-[450px]:min-w-[300px] min-w-[400px] max-w-[30%] w-full h-[600px] rounded-xl">

      <div className="flex flex-col px-8">
        <div className="pl-5 pt-9">
          <h3 className="text-2xl font-bold ">RESULTS</h3>
        </div>
        <div className="pt-5">
          <ul>
            <li className="p-2">1</li>
            <li className="p-2">2</li>
            <li className="p-2">3</li>
            <li className="p-2">4</li>
          </ul>
        </div>
      </div>
    </div>
  );
}