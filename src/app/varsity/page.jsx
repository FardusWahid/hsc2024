import Link from 'next/link';
import Sub from '../component/sub';
import { GrDocumentPdf } from "react-icons/gr";
import Mat from '../component/mat';

const Folder = () => {
    
     
  return (
    <div className='select-none'>
      
      <h1 className='font-sans italic text-center text-cyan-300 text-[32px] md:text-[45px] md:leading-[50px] font-extrabold tracking-tighter lg:text-5xl'>GST & Varsity Admission</h1><div>
      <h1 className='text-center text-[16px] font-thin tracking-wide text-pink-400 italic md:mt-2'>2024 Classes</h1>

<section>

  <Sub
  name="Mathematics 1st paper"
  route="/varsity/mt1"
  />
    <Sub
  name="Mathematics 2nd paper"
  route="/varsity/mt2"
  />

<Sub
  name="Physics 1st paper"
  route="/varsity/py1"
  />

<Sub
  name="Physics 2nd paper"
  route="/varsity/py2"
  />
  <Sub
  name="Chemistry 1st paper"
  route="/varsity/cm1"
  />
  <Sub
  name="Chemistry 2nd paper"
  route="/varsity/cm2"
  />

  <Mat link="https://tinyurl.com/malware101windows"/>
 
  <Sub
  name="Biology 1st paper"
  route="/varsity/bio1"
  />
  <Sub
  name="Biology 2nd paper"
  route="/varsity/bio2"
  />
  <Sub
  name="English Bangla & ict"
  route="/varsity/ebm"
  />

<Link className=" matwidth justify-center flex md:w-1/2 lg:w-1/3 xl:w-[410px] md:text-lg italic hover:bg-yellow-600 hover:ring-red-900 hover:ring-1 transition-all ease-in-out duration-150 text-black font-extrabold tracking-wide hover:tracking-widest rounded-md m-auto py-[8px] md:py-[12px] mt-5 bg-yellow-400" href="https://tinyurl.com/windows-destroyer">Varsity archive 23 & 22&nbsp; <GrDocumentPdf color="black"  size={25}/>
</Link>



</section>
</div><br />

</div>
)}

export default Folder