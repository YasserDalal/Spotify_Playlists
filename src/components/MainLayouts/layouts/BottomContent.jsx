import Watermark from "./features/DetailsContent";

export default function BottomContent() {
  return (
    <div className="text-white bg-slate-900 w-full h-28">
      <Watermark className="pt-5 text-[14px] text-gray-400 opacity-60 select-none pointer-events-none z-50 text-center"/>
    </div>
  );
}