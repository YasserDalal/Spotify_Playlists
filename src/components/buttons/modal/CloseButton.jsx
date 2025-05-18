
export default function CloseButton({ className, handleModal }) {
  return (
    <div className={className} onClick={handleModal}>
      <button className="text-6xl text-[#e37575] hover:text-[#ff4e4e]">×</button>
    </div>
  );
}