import SearchBar from "../../inputs/SearchBar";
import ListContent from "./features/ListContent";
import StoredContent from "./features/StoredContent";

export default function CenterContent() {
  return (
    <div className="text-white bg-slate-700 pb-10">
      <SearchBar />
      <div className="flex justify-center gap-10 pt-14 flex-wrap px-3">
        <ListContent />
        <StoredContent />
      </div>
    </div>
  );
}