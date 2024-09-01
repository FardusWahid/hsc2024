import Link from 'next/link';
import Sub from '../component/sub';
import { GrDocumentPdf } from "react-icons/gr";

const Folder = () => {
    
     
  return (
    <div className='select-none'>
      
      <h1 className='font-sans italic text-center text-cyan-300 text-[32px] md:text-[45px] md:leading-[50px] font-extrabold tracking-tighter'>Medical Admission 2024</h1><div>
      <h1 className='text-center text-[16px] font-thin tracking-wide text-pink-400 italic'>2024 Classes</h1>

<section>
<Sub
  name="Gk. General Knowledge"
  route="/medical/mgk"
  />

  <Sub
  name="Biology 1st paper"
  route="/medical/mbio1"
  />
    <Sub
  name="Biology 2nd paper"
  route="/medical/mbio2"
  />

<Sub
  name="Physics 1st paper"
  route="/medical/mpy1"
  />

<Sub
  name="Physics 2nd paper"
  route="/medical/mpy2"
  />
  <Sub
  name="Chemistry 1st paper"
  route="/medical/mcm1"
  />
  <Sub
  name="Chemistry 2nd paper"
  route="/medical/mcm2"
  />


  <Sub
  name="Medical English prep"
  route="/medical/menglish"
  />
  <Link className=" matwidth justify-center flex md:w-1/2 lg:w-1/3 xl:w-[410px] md:text-lg italic hover:bg-red-950 hover:ring-red-900 hover:ring-1 transition-all ease-in-out duration-150 text-cyan-100 font-extrabold tracking-wide hover:tracking-widest rounded-md m-auto py-[8px] md:py-[12px] mt-5 bg-gray-700" href="">lecture & practice sheets&nbsp; <GrDocumentPdf color="white"  size={25}/>
  </Link>


<Link className=" matwidth justify-center flex md:w-1/2 lg:w-1/3 xl:w-[410px] md:text-lg italic hover:bg-yellow-600 hover:ring-red-900 hover:ring-1 transition-all ease-in-out duration-150 text-black font-extrabold tracking-wide hover:tracking-widest rounded-md m-auto py-[8px] md:py-[12px] mt-5 bg-yellow-400" href="">Medical archive 2023&nbsp; <GrDocumentPdf color="black"  size={25}/>
</Link>



</section>
</div><br />

</div>
)}

export default Folder