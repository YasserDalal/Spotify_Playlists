export default function Password() {
  return (
    <input className="border-b-2 border-gray-400 outline-none p-2 mb-4 bg-transparent focus:border-zinc-50" 
            type="password" placeholder="Password" autoComplete="on" required/>
  );
}