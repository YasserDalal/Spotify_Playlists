
import Watermark from "./features/DetailsContent";

export default function BottomContent({ className }) {
  return (
    <div className={className}>
      <Watermark className="pt-5 text-[14px] text-gray-400 opacity-60 select-none pointer-events-none z-40 text-center"/>
    </div>
  );
}