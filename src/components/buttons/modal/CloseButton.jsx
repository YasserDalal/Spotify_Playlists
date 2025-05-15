
export default function CloseButton({ className, handleModal }) {
  return (
    <div className={className} onClick={handleModal}>
      <button>Close</button>
    </div>
  );
}