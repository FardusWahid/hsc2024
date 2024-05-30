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
      <h1 className='text-center mt-7 italic tracking-tighter md:tracking-normal  poet text-black text-3xl md:text-4xl'>Apple Admission 2024 </h1>

<section className='grid items-center m-auto justify-center w-3/4 mt-3 '>
      
      <h1 className='text-center poet tracking-tight md:tracking-normal text-lg md:text-xl'>Welcome back <span className='font-sans italic font-extrabold tracking-tight text-lg'>{session?.user?.name}</span> </h1>
      <p className='text-lg text-start my-2 poet '>account status: <span className='font-extrabold font-sans capitalize text-lg  italic'>{session?.user?.role}</span><br/></p>
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
    name="ACS Medical 2024"
    route="/denied"
    />

<Sub
    name="Darpan Academy OneShot"
    route="oneshot"
    />
    </section>


  

    </div>  
    

  
  
  )
}
export default page