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
    <div>
<h1 className='font-sans text-center text-3xl md:text-4xl italic font-extrabold mt-7 mb-0'><span className='tracking-widest md:tracking-normal'>Darpan Academy </span>OneShots-24 </h1>


<section className='mt-2'>

  <Sub
  name="Physics"
  route="/oneshot/opy"
  />
    <Sub
  name="Chemistry"
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
  name="Udvash ict final revision"
  route="/oneshot/ud-ic"
  />


<a href="https://docs.google.com/document/d/1FRaWZKeEiv2cPROC2FWYqo5zYLqw8CjdaJp8fsDthX0/edit?usp=sharing" target='_blank'><p className="flex bg-teal-950 text-white w-5/6 md:w-[360px] items-center justify-center py-1 m-auto mt-5 gap-3 rounded-lg font-mono font-extrabold text-lg">Materials&nbsp; <GrDocumentPdf color="white"  size={25}/>
</p></a>
<Sub
  name="2023 Archive"
  route="https://www.youtube.com/playlist?list=PLuv5X6bIrbrH2aqZ2WWQ2-pVsGX-yrgaF"
  />

  
</section>
<br />
<Link className='flex justify-center  bg-[#eae0c3] md:bg-[#e2d5b0] w-11/12 md:w-[380px] p-2 rounded-xl hover:text-[17px] transition-all ease-in-out duration-200  font-sans font-extrabold tracking-widest m-auto mb-2 gap-2' href="/updates">See what is new<MdTipsAndUpdates size={24} color='blue'/></Link>





    </div>
  )
}

export default Folder