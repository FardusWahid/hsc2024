import { getServerSession } from 'next-auth'
import { option } from '../api/auth/[...nextauth]/option'
import { redirect } from 'next/navigation'
import Sub from '../component/sub';
import { GrDocumentPdf } from "react-icons/gr";


const Folder = async () => {
     const session = await getServerSession(option);
    if(session?.user?.role !== "pro"){
     redirect("/denied")
  }
  
   
  return (
    <div>
<h1 className='font-sans text-center text-3xl md:text-4xl italic font-extrabold mt-7 mb-0'>Darpan Academy OneShots </h1>


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


<a href="https://docs.google.com/document/d/1FRaWZKeEiv2cPROC2FWYqo5zYLqw8CjdaJp8fsDthX0/edit?usp=sharing" target='_blank'><p className="flex bg-gray-900 text-white w-11/12 md:w-[360px] items-center justify-center py-1 m-auto mt-3 gap-3 rounded-lg font-mono font-extrabold text-lg">Materials&nbsp; <GrDocumentPdf color="yellow"  size={25}/>
</p></a>
  
</section>






    </div>
  )
}

export default Folder