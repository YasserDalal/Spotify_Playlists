
import { Skeleton } from "../ui/skeleton"

export default function LoadingCards({ className }) {
  return (
    <div className={className}>
      <div className="w-20 h-auto">
        <Skeleton className=" h-20 rounded-full" />
      </div>
      <div>
        <Skeleton className="h-5 w-44 mb-2"/>
        <Skeleton className="h-5 w-20" />
      </div>
    </div>
  )
}