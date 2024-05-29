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
      <h1 className='text-center mt-7 italic font-sans text-black text-3xl font-extrabold'>Apple HSC-2024 </h1>

<section className='grid items-center m-auto justify-center w-3/4 mt-3 '>
      
      <h1 className='text-center font-[cursive] font-extrabold tracking-wider text-lg'>Welcome back <span className='font-sans italic font-extrabold tracking-tight normal-case'>{session?.user?.name}</span> </h1>
      <p className='text-lg text-start my-2 font-[cursive] font-extrabold tracking-wider'>account status: <span className='font-extrabold font-sans capitalize   italic'>{session?.user?.role}</span><br/></p>
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


    <div className='min-h-[150px] md:min-h-[230px] flex items-end justify-center '>
<p className='font-mono italic text-center mx-1 text-sm md:text-xl tracking-tighter font-extrabold '>Get <span className='text-xl'>50taka</span> Cashback for every successful referral. </p>
    </div>

    </div>  
    

  
  
  )
}
export default page