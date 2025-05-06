import TopBar from "./layouts/TopContent"
import CenterContent from "./layouts/CenterContent"
import BottomContent from "./layouts/BottomContent"
export default function MainContent() {
  return (
    <div className="w-auto h-screen">
      <TopBar />
      <CenterContent />
      <BottomContent />
    </div>
  )
}