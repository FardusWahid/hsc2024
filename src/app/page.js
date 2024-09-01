import { getServerSession } from 'next-auth'
import { option } from './api/auth/[...nextauth]/option'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { MdTipsAndUpdates } from "react-icons/md";
import Sub from './component/sub'
const page = async (prop) => {
  const session =  await getServerSession(option)
  
   if(!session){
   redirect("/api/auth/signin?callbackUrl=/")
 }

  
  return (
    <div className='select-none'>
      <h1 className='chapterHeading tracking-tighter md:tracking-normal mb-10'>Apple Admission 2024 </h1>

      <section className='flex  gap-1  justify-start wd  m-auto  text-[15px] md:w-1/2 lg:w-1/3 xl:w-[390px] md:justify-start my-4 font-sans italic font-semibold'>
      
      <h1 className='bg-gray-800 px-3 py-[2.5px] w-fit rounded-md shadow-inner shadow-gray-700 hover:bg-gray-900 tracking-tight md:tracking-normal'> <span>{session?.user?.name}</span></h1>
      <p className='bg-yellow-500 hover:bg-yellow-600 px-3 w-fit py-[2.5px] rounded-md shadow-inner text-black shadow-yellow-300'>status: <span>{session?.user?.role}</span></p>
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
    route="/medical"
    />

<Sub
    name="Darpan Acdmy OneShot"
    route="/oneshot"
    />
    </section>


<br/>
<Link href="/updates" className="mat m-auto hover:bg-purple-600 flex bg-purple-500 text-black items-center font-semibold justify-center p-[9px] my-5 gap-2 rounded-lg hover:tracking-wide transition-all ease-in duration-100  font-sans  tracking-widest italic text-lg">See what is new<MdTipsAndUpdates size={24} color='black'/>
</Link>

    </div>  
    

  
  
  )
}
export default page