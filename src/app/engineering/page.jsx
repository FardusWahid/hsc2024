import Link from 'next/link';
import Sub from '../component/sub';
import { GrDocumentPdf } from "react-icons/gr";
import Mat from '../component/mat';



const Folder = () => {
    
  
   
  return (
    <div className='select-none'>
      
      <h1 className='font-sans text-center tracking-tighter text-cyan-300 text-[32px] md:text-[45px] md:leading-[50px] lg:text-5xl mt-2 md:mt-0 font-extrabold'>Engineering batch 2024</h1><div>
      <h1 className='text-center text-[17px] md:text-[18px] lg:text-[20px] font-mono mt-1 md:mt-3 font-thin text-cyan-400 italic'>2024 Classes</h1>

<section>

  <Sub
  name="Physics 1st paper"
  route="/engineering/p1"
  />
    <Sub
  name="Physics 2nd paper"
  route="/engineering/p2"
  />

<Sub
  name="Math 1st paper"
  route="/engineering/m1"
  />

<Sub
  name="Math 2nd paper"
  route="/engineering/m2"
  />
  <Sub
  name="Chemistry 1st paper"
  route="/engineering/c1"
  />
  <Sub
  name="Chemistry 2nd paper"
  route="/engineering/c2"
  />






<Mat link="https://tinyurl.com/engi24"/>
<Link className=" matwidth justify-center flex md:w-1/2 lg:w-1/3 xl:w-[410px] md:text-lg italic bg-gray-900 hover:bg-gray-900 ring-gray-800 hover:ring-red-900 ring-1 hover:ring-[.9px] transition-all ease-in duration-100 hover:scale-105 text-cyan-100 font-extrabold tracking-wide hover:tracking-widest rounded-md m-auto py-[8px] md:py-[12px] mt-5" href="https://docs.google.com/document/d/1G4whoYmuYn1W0-cg1VxRWO4NnnH-MT2dzi4hQX8FlJI/edit?usp=sharing">Practice Sheets&nbsp; <GrDocumentPdf color="white"  size={25}/>
</Link>
<p className='text-center font-sans tracking-wide my-3 font-extralight italic text-cyan-400 text-[16px]' >2023 Engineering Archive</p>
<Sub
  name="Engineering Archive"
  route="/engineering/archive"
  />
<Link className=" matwidth flex justify-center md:w-1/2 lg:w-1/3 xl:w-[410px] md:text-lg italic bg-gray-900 hover:bg-gray-950 hover:ring-gray-800 hover:ring-1 transition-all ease-in duration-150 text-cyan-100 font-extrabold tracking-wide hover:scale-105 hover:tracking-widest rounded-md m-auto py-[8px] md:py-[12px] mt-5" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSgB3wkcnixnfqmiKcYeho-XipkkTEfLHX08un1iRYvovxSGxKXgXRuZZ7jJ9R5-K-l377svfjCKhin/pubhtml" target='_blank'>2023 Materials&nbsp; <GrDocumentPdf color="white"  size={25}/>
</Link>
  
</section>
</div><br />

</div>
)}

export default Folder