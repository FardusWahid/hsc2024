import Link from 'next/link';
import Sub from '../component/sub';
import { GrDocumentPdf } from "react-icons/gr";
import { MdTipsAndUpdates } from "react-icons/md";



const Folder = async () => {
    
  
   
  return (
    <div>
      
<h1 className='font-sans text-center text-3xl md:text-4xl italic md:tracking-wider font-extrabold mt-5 mb-2'>ACS Engineering 2024 </h1>
<div className=''>
    <h1 className='text-center font-extrabold text-xl tracking-wider font-sans italic'>classes</h1>

<section className='mt-2'>

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






<a href="https://tinyurl.com/engi24" target='_blank'><p className="flex bg-[#3942c1] text-black w-5/6 md:w-[360px] items-center justify-center py-1 m-auto my-5 gap-2 rounded-lg hover:tracking-wide transition-all ease-in duration-100  font-mono font-extrabold text-lg">Class Materials&nbsp; <GrDocumentPdf color="black"  size={25}/>
</p></a>

<a href="https://docs.google.com/document/d/1G4whoYmuYn1W0-cg1VxRWO4NnnH-MT2dzi4hQX8FlJI/edit?usp=sharing" target='_blank'><p className="flex bg-[#3942c1] text-black w-5/6 md:w-[360px] items-center justify-center py-1 hover:text-[20px] transition-all ease-in-out duration-200 m-auto my-5 gap-3 rounded-lg font-mono font-extrabold text-lg">Practice Sheets&nbsp; <GrDocumentPdf color="black"  size={25}/>
</p></a>
<p className='text-center font-serif font-extrabold italic md:text-lg' >2023 archive</p>
<Sub
  name="Engineering Archive"
  route="/engineering/archive"
  />
<a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSgB3wkcnixnfqmiKcYeho-XipkkTEfLHX08un1iRYvovxSGxKXgXRuZZ7jJ9R5-K-l377svfjCKhin/pubhtml" target='_blank'><p className="flex bg-teal-950 hover:text-[20px] transition-all ease-in-out duration-200 text-white w-5/6 md:w-[360px] items-center justify-center py-1 m-auto my-5 gap-3 rounded-lg font-mono font-extrabold text-lg">2023 Materials&nbsp; <GrDocumentPdf color="white"  size={25}/>
</p></a>
  
</section>
</div>


<Link className='flex justify-center  bg-[#eae0c3] md:bg-[#e2d5b0] w-11/12 md:w-[380px] p-2 rounded-xl hover:text-[17px] transition-all ease-in-out duration-200  font-sans font-extrabold tracking-widest m-auto mb-2 gap-2' href="/updates">See what is new<MdTipsAndUpdates size={24} color='blue'/></Link>
</div>
)}

export default Folder