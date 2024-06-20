import { getServerSession } from 'next-auth';
import { option } from '../api/auth/[...nextauth]/option';
import Link from 'next/link';
import { IoMdArrowRoundBack } from "react-icons/io";



const Denied = async () => {
    const session = await getServerSession(option);
    return(
        <div className="flex flex-col items-center justify-center h-[450px] md:h-[600px] ">
  <h1 className='text-center mx-5 text-2xl font-sans italic font-bold'><span className='text-3xl font-extrabold font-mono tracking-tighter italic'>Opps! </span> {session?.user?.name}. Looks like you do not have access to this course</h1>
  <p className='font-sans mt-3 italic font-semibold text-lg'>please <a className='text-blue-950 font-extrabold underline italic font-mono tracking-widest' href="https://www.facebook.com/apple.courses.netlify.app.3.0/">buy</a> access to continue.</p>
<a className='mt-5 bg-teal-950 text-white px-2 py-2 rounded-md font-sans font-bold  text-[17px] shadow-md shadow-gray-500 hover:shadow-lg  ' href="https://applecourses.netlify.app">Back to Apple Shop</a>
  
<Link className='flex justify-center gap-1 mx-5 mt-2 text-black font-extrabold font-sans text-[18px]  bg-orange-300 rounded-md w-[173px] px-2 py-1 shadow-inner shadow-gray-300 active:bg-yellow-600' href="/"><IoMdArrowRoundBack size={27} />
 HOME</Link>
  
  
  </div>
    )
}
export default Denied