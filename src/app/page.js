import { getServerSession } from 'next-auth'
import { option } from './api/auth/[...nextauth]/option'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { MdTipsAndUpdates } from "react-icons/md";
import Sub from './component/sub'
const page = async (prop) => {
  const session =  await getServerSession(option)
  
   if(!session){
   redirect("/api/auth/signin?callbackUrl=/")
 }

  
  return (
    <div>
      <h1 className='text-center mt-7 italic tracking-tighter md:tracking-normal font-sans font-extrabold text-black text-3xl md:text-4xl'>Apple Admission 2024 </h1>

<section className='grid items-center m-auto justify-center w-3/4 mt-3 '>
      
      <h1 className='text-center tracking-tight md:tracking-normal font-bold font-sans text-lg md:text-xl'>Welcome back <span className='font-serif italic font-extrabold tracking-tight text-lg'>{session?.user?.name}</span> </h1>
      <p className='text-lg text-start my-2 font-sans font-semibold '>account status: <span className='font-extrabold font-sans capitalize text-lg  italic'>{session?.user?.role}</span><br/></p>
      </section>


      <section>
    <Sub
    name="ACS Engineering 2024"
    route="/engineering"
    />

<Sub
    name="ACS varsity 2024"
    route="/denied"
    />


<Sub
    name="Darpan Academy OneShot"
    route="/oneshot"
    />
    </section>

<br/>
    <Link className='flex justify-center hover:ring-1 hover:ring-[#d9ceaf]  bg-[#f7eed5] md:bg-[#f1e7c9] w-5/6 md:w-[380px] p-2 rounded-xl hover:text-[17px] transition-all ease-in-out duration-200  font-sans font-extrabold tracking-widest m-auto mb-2 gap-2' href="/updates">See what is new<MdTipsAndUpdates size={24} color='blue'/></Link>


    </div>  
    

  
  
  )
}
export default page