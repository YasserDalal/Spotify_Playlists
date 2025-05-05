
export default function SubmitButton({ handleLogin}){
  return (
    <input className="bg-[#28d7a3] hover:bg-[#1da57c] transition-all duration-100 text-black font-bold py-2 px-4 rounded" value="Login" type="submit" onClick={handleLogin}/>
  );
}