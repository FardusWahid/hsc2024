import { getServerSession } from 'next-auth'
import { option } from '../api/auth/[...nextauth]/option'
import { redirect } from 'next/navigation'
import Sub from '../component/sub';
import { GrDocumentPdf } from "react-icons/gr";
import Link from 'next/link';
import { MdTipsAndUpdates } from "react-icons/md";



const Folder = async () => {
     const session = await getServerSession(option);
    
   
  return (
    <div className='select-none us'>
<h1 className='font-sans text-center text-3xl md:text-4xl italic font-extrabold mt-2 mb-0'><span className='text-[34px] md:text-4xl md:tracking-normal'>Darpan Academy </span>OneShots-24 </h1>


<section className='mt-2'>

  <Sub
  name="Physics 1st & 2nd"
  route="/oneshot/opy"
  />
    <Sub
  name="Chemistry 1st & 2nd"
  route="/oneshot/och"
  />
    <Sub
  name="Mathematics"
  route="/oneshot/omt"
  />
    <Sub
  name="ICT"
  route="/oneshot/oict"
  />

<Sub
  name="2023 Archive playlist"
  route="https://www.youtube.com/playlist?list=PLuv5X6bIrbrH2aqZ2WWQ2-pVsGX-yrgaF"
  />

<a href="https://docs.google.com/document/d/1FRaWZKeEiv2cPROC2FWYqo5zYLqw8CjdaJp8fsDthX0/edit?usp=sharing"><p className="wd md:w-[375px] m-auto flex bg-black text-white items-center justify-center p-[9px] my-5 gap-2 rounded-md hover:tracking-wide transition-all ease-in duration-100  font-sans font-extrabold text-lg">Materials&nbsp; <GrDocumentPdf color="white"  size={25}/>
</p></a>


  
</section>

<Link className='flex justify-center bg-purple-900 hover:ring-1 hover:ring-black w-11/12 md:w-[380px] p-2 rounded-md hover:text-[17px] transition-all ease-in-out duration-200   font-sans font-thin text-white italic m-auto mb-2 gap-2' href="/updates">See what is new<MdTipsAndUpdates size={24} color='pink'/></Link>




    </div>
  )
}

export default Folder