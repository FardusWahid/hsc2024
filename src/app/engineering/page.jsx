import Link from 'next/link';
import Sub from '../component/sub';
import { GrDocumentPdf } from "react-icons/gr";
import { MdTipsAndUpdates } from "react-icons/md";



const Folder = async () => {
    
  
   
  return (
    <div className='select-none'>
      
      <h1 className='font-sans text-center tracking-tight md:tracking-normal text-3xl md:text-[39px] font-extrabold my-3 md:my-2'>ACS Engineering 2024 </h1><div>
      <h1 className='text-center font-extrabold text-xl font-mono italic'>2024 Classes</h1>

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






<Link className='wd md:w-[375px] m-auto flex bg-black text-white items-center justify-center p-[9px] my-5 gap-2 rounded-lg hover:tracking-wide transition-all ease-in duration-100  font-sans font-bold text-lg' href="https://tinyurl.com/engi24">Class Materials&nbsp; <GrDocumentPdf color="white"  size={27}/></Link>

<Link className="wd md:w-[375px] m-auto flex bg-black text-white items-center justify-center p-[9px] my-5 gap-2 rounded-lg hover:tracking-wide transition-all ease-in duration-100  font-sans font-extrabold text-lg" href="https://docs.google.com/document/d/1G4whoYmuYn1W0-cg1VxRWO4NnnH-MT2dzi4hQX8FlJI/edit?usp=sharing">Practice Sheets&nbsp; <GrDocumentPdf color="white"  size={25}/>
</Link>
<p className='text-center font-mono font-extrabold text-xl italic' >2023 Archive</p>
<Sub
  name="Engineering Archive"
  route="/engineering/archive"
  />
<Link className="wd md:w-[375px] m-auto flex bg-black text-white items-center justify-center p-[9px] my-5 gap-2 rounded-md hover:tracking-wide transition-all ease-in duration-100  font-sans font-bold text-lg" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSgB3wkcnixnfqmiKcYeho-XipkkTEfLHX08un1iRYvovxSGxKXgXRuZZ7jJ9R5-K-l377svfjCKhin/pubhtml" target='_blank'>2023 Materials&nbsp; <GrDocumentPdf color="white"  size={25}/>
</Link>
  
</section>
</div>


<Link className='flex justify-center bg-purple-900 hover:ring-1 hover:ring-black w-11/12 md:w-[380px] p-2 rounded-md hover:text-[17px] transition-all ease-in-out duration-200   font-sans font-thin text-white italic m-auto mb-2 gap-2' href="/updates">See what is new<MdTipsAndUpdates size={24} color='pink'/></Link><br /></div>
)}

export default Folder