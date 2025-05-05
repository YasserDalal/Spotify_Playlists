import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

export default function Form({ handleLogin }) {
  return (
    <div className="flex justify-center items-center w-auto h-screen text-white">
      <div className="w-full h-auto flex  justify-center">
        <div className="flex flex-row
        min-[500px]:min-w-[475px] 
        max-w-[35%] 
        max-[420px]:min-w-[300px] 
        max-[500px]:max-w-[95%] w-full justify-center">
          <form className="flex max-[450px]:flex-col border-[1px] border-[#28d7a3] rounded-lg py-2 pr-7 w-full items-center max-[450px]:px-10 shadow-[2px_0px_20px_0px_#28d7a3]">
            <div className='h-full text-[#28d7a3] px-10 pt-10'>
              <FontAwesomeIcon icon={faSpotify} size="6x"/>
            </div>
            <div className="flex flex-col h-auto w-[100%] justify-center pb-12 ">
              <h1 className="text-4xl font-bold flex flex-col h-full w-full pt-10 pb-24">
                <p className="text-center">Login</p>
                <p className="text-sm   text-gray-500 pt-2 text-center">Please login to your account</p>
              </h1>

              <div className='flex flex-col'>
                <input className="border-b-2 border-gray-400 outline-none p-2 mb-4 w-full bg-transparent focus:border-zinc-50" 
                
                type="email" placeholder="Email" required/>

                <input className="border-b-2 border-gray-400 outline-none p-2 mb-4 bg-transparent focus:border-zinc-50" 
                
                type="password" placeholder="Password" required/>
                <input className="bg-[#28d7a3] hover:bg-[#1da57c] transition-all duration-100 text-black font-bold py-2 px-4 rounded" value="Login" type="submit" onClick={handleLogin}/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}