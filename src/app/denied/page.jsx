import { getServerSession } from 'next-auth';
import { option } from '../api/auth/[...nextauth]/option';
const Denied = async () => {
    const session = await getServerSession(option);
    return(
        <div className="flex flex-col items-center justify-center h-[650px] md:h-[600px] ">
  <h1 className='text-center text-2xl font-sans italic font-bold'><span className='text-3xl font-extrabold font-mono tracking-tighter italic'>Opps! </span> {session?.user?.name}. Looks like you do not have access to this course</h1>
  <p className='font-sans mt-3 italic font-semibold text-lg'>please <a className='text-blue-950 font-extrabold underline italic font-mono tracking-widest' href="https://www.facebook.com/free.courses.vercel/">buy</a> access to continue.</p>
<a className='mt-5 bg-gray-800 text-white px-2 py-1 rounded-md font-sans font-semibold tracking-wider shadow-md shadow-blue-400 active:tracking-widest ring-1 ring-yellow-400' href="https://applecourses.netlify.app">Back to Apple Shop</a>
  </div>
    )
}
export default Denied