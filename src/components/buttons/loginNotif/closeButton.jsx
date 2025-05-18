
export default function CloseNotif({ className, closeNotif }) {
  return (
    <div className={className}>
      <button className="text-6xl text-[#e37575] hover:text-[#ff4e4e]" onClick={closeNotif}>×</button>
    </div>
  )
}