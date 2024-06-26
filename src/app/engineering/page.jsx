import Link from 'next/link';
import Sub from '../component/sub';
import { GrDocumentPdf } from "react-icons/gr";
import { MdTipsAndUpdates } from "react-icons/md";



const Folder = async () => {
    
  
   
  return (
    <div>
      
<h1 className='font-sans text-center text-[33px] tracking-tight  md:text-4xl md:tracking-wide font-extrabold mt-2 md:mt-0 mb-1'>ACS Engineering 2024 </h1>
<div>
    <h1 className='text-center font-extrabold text-xl font-mono italic'>classes</h1>

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






<Link className='w-5/6 md:w-[360px] m-auto flex bg-[#3942c1] text-black items-center justify-center py-1 my-5 gap-2 rounded-lg hover:tracking-wide transition-all ease-in duration-100  font-sans font-bold text-lg' href="https://tinyurl.com/engi24" target='_blank'>Class Materials&nbsp; <GrDocumentPdf color="black"  size={25}/></Link>

<Link className="flex bg-[#3942c1] text-black w-5/6 md:w-[360px] items-center justify-center py-1 hover:text-[20px] transition-all ease-in-out duration-200 m-auto my-5 gap-3 rounded-lg font-sans font-bold text-lg" href="https://docs.google.com/document/d/1G4whoYmuYn1W0-cg1VxRWO4NnnH-MT2dzi4hQX8FlJI/edit?usp=sharing" target='_blank'>Practice Sheets&nbsp; <GrDocumentPdf color="black"  size={25}/>
</Link>
<p className='text-center font-mono font-extrabold text-xl' >2023 archive</p>
<Sub
  name="Engineering Archive"
  route="/engineering/archive"
  />
<Link className="flex bg-teal-950 hover:text-[20px] transition-all ease-in-out duration-200 text-white w-5/6 md:w-[360px] items-center justify-center py-1 m-auto my-5 gap-3 rounded-lg font-sans font-bold text-lg" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSgB3wkcnixnfqmiKcYeho-XipkkTEfLHX08un1iRYvovxSGxKXgXRuZZ7jJ9R5-K-l377svfjCKhin/pubhtml" target='_blank'>2023 Materials&nbsp; <GrDocumentPdf color="white"  size={25}/>
</Link>
  
</section>
</div>


<Link className='flex justify-center hover:ring-1 hover:ring-[#d0c7aa]  bg-[#f9f1d8] md:bg-[#f5ecd3] w-11/12 md:w-[380px] p-2 rounded-xl hover:text-[17px] transition-all ease-in-out duration-200  font-sans font-extrabold tracking-widest m-auto mb-2 gap-2' href="/updates">See what is new<MdTipsAndUpdates size={24} color='blue'/></Link>
<br /></div>
)}

export default Folder