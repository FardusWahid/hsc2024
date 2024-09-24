import { getServerSession } from 'next-auth'
import { option } from './api/auth/[...nextauth]/option'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { RiMoneyEuroCircleFill } from "react-icons/ri";
import Sub from './component/sub'
const page = async (prop) => {
  const session =  await getServerSession(option)
  
   if(!session){
   redirect("/api/auth/signin?callbackUrl=/")
 }

  
  return (
    <div className='select-none'>
      <h1 className='chapterHeading tracking-tighter md:tracking-normal mb-6'>Apple Admission 2024</h1>

      <section className='flex  gap-2  justify-start wd  m-auto  text-[15px] md:w-1/2 lg:w-1/3 xl:w-[390px] md:justify-start my-4 font-sans italic font-semibold'>
      
      <h1 className='bg-gray-900 sha hover:shadow-none px-3 py-[2.5px] w-fit rounded-md tracking-tight md:tracking-normal'> <span>{session?.user?.name}</span></h1>
      <p className='bg-yellow-400 px-3 w-fit py-[2.5px] rounded-[3px] text-black'>status: <span>{session?.user?.role}</span></p>
      </section>


      <section>
    <Sub
    name="ACS Engineering 2024"
    route="/engineering"
    />

<Sub
    name="ACS varsity 2024"
    route="/varsity"
    />

<Sub
    name="ACS Medical Admission 24"
    route="/denied"
    />
<Sub
    name="CPS Engineering Physics"
    route="/cps"
    />
<Sub
    name="Darpan Acdmy OneShot"
    route="/oneshot"
    />
    </section>


<div className='mt-5'>
<Link href="/refer" className="mat m-auto hover:bg-blue-700 flex bg-purple-600 hover:font-bold text-black items-center font-semibold justify-center p-[9px] my-5 gap-2 rounded-lg hover:scale-105 transition-all ease-in duration-100  font-sans  tracking-widest capitalize  text-[17px]">Earn 75taka per refer<RiMoneyEuroCircleFill  size={24} color='black'/>
</Link>
</div>
    </div>  
    

  
  
  )
}
export default page