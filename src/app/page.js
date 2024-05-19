import { getServerSession } from 'next-auth'
import { option } from './api/auth/[...nextauth]/option'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Sub from './component/sub'
const page = async (prop) => {
  const session =  await getServerSession(option)
  
   if(!session){
   redirect("/api/auth/signin?callbackUrl=/")
 }

  
  return (
    <div>
<section className='grid items-center m-auto justify-center w-3/4 mt-1 '>
      
      <h1 className='text-center font-sans font-bold text-lg'>HI there <span className='font-sans font-extrabold tracking-tight'>{session?.user?.name}</span> </h1>
      <p className='text-lg text-center my-2 font-sans font-extrabold tracking-tighter'>your account status: <span className='font-extrabold font-sans uppercase tracking-widest  px-2 rounded-sm py-[2px] shadow'>{session?.user?.role}</span><br/></p>
      {session?.user?.role == "unpaid"? <p className='text-center font-sans font-extrabold'>Pay <Link className='text-white bg-blue-950 tracking-widest font-extrabold px-2 py-[2px] rounded-md shadow-inner shadow-blue-500' href="https://www.facebook.com/free.courses.vercel/">here</Link> to continue</p>: <p className='font-sans text-center p-2 tracking-tighter font-extrabold '>Get 50taka Cashback for every successful referral <Link className='bg-zinc-200 text-purple-950 px-1 py-[2px] rounded-sm shadow-inner font-sans shadow-gray-400 active:tracking-normal' href="https://www.facebook.com/free.courses.vercel/">Explain</Link> </p>}
      </section>


<h1 className='text-center mt-5 italic font-sans text-black text-2xl font-extrabold'>ACS all Cycles HSC 2025 </h1>
      <section>
    <Sub
    name="ACS Engineering 2024"
    route="/denied"
    />

<Sub
    name="ACS varsity 2024"
    route="/denied"
    />


<Sub
    name="ACS Medical 2024"
    route="/denied"
    />

<Sub
    name="Darpan Academy OneShot 24"
    route="oneshot"
    />
    </section>
    </div>  
    

  
  
  )
}
export default page