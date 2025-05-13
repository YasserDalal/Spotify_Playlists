
export default function SearchButton({ className, searchSongs }) {
  return (
    <div className={className}>
      <button className="bg-[#28d7a3] hover:bg-[#1da57c] transition-all duration-100 text-black font-bold py-3 px-4 rounded-full cursor-pointer min-w-32 max-w-[60%] w-full " onClick={searchSongs}>SEARCH</button>
    </div>
  );
}