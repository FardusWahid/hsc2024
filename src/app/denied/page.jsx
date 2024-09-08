import { getServerSession } from 'next-auth';
import { option } from '../api/auth/[...nextauth]/option';
import Link from 'next/link';
import { IoMdArrowRoundBack } from "react-icons/io";



const Denied = async () => {
    const session = await getServerSession(option);
    return(
        <div className="flex flex-col text-blue-200 items-center justify-center h-[450px] md:h-[600px] ">
  <h1 className='text-center mx-5 text-2xl font-sans italic font-extrabold'><span className='text-3xl'>Opps!</span>  {session?.user?.name}. Looks like you do not have access to this course.</h1>
  <p className='font-sans mt-3 italic font-extrabold text-cyan-200 text-lg'>Please <a className='to-blue-300 font-extrabold underline italic font-sans tracking-widest' href="https://www.facebook.com/apple.courses.netlify.app.3.0/">buy</a> access to continue.</p>
<a className='mt-5 bg-yellow-300 px-2 py-[6.5px] tracking-tight italic hover:bg-yellow-400 rounded-[5px] hover:scale-110 text-black font-sans font-extrabold text-lg  transition-all ease-in duration-75' href="https://applecourses.netlify.app">Back to Apple Shop</a>
  
<a className='flex justify-center gap-1 mx-5 mt-2 text-black font-extrabold font-sans text-[18px]  bg-pink-400 rounded-md hover:scale-110 w-[179px] px-2 py-1 transition-all ease-in duration-75' href="/"><IoMdArrowRoundBack size={27} />
 HOME</a>
  
  
  </div>
    )
}
export default Denied