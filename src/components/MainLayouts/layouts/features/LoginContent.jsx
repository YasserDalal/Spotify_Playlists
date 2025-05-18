
import CloseNotif from "@/components/buttons/loginNotif/closeButton";

export default function LoginContent({ className,  closeNotif }) {
  return (
    <div className={className}>
      <CloseNotif className="absolute top-2 right-2"  closeNotif={closeNotif}/>
      <div>You have been logged in successfully</div>
    </div>
  );
}