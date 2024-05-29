import Sub from '../component/sub';
import { GrDocumentPdf } from "react-icons/gr";


const Folder = async () => {
    
  
   
  return (
    <div>
      
<h1 className='font-sans text-center text-3xl md:text-4xl italic font-extrabold mt-5 mb-2'>ACS Engineering 2024 </h1>
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




<a href="https://tinyurl.com/engi24" target='_blank'><p className="flex bg-gray-900 text-white w-5/6 md:w-[360px] items-center justify-center py-1 m-auto my-5 gap-3 rounded-lg font-mono font-extrabold text-lg">Class Materials&nbsp; <GrDocumentPdf color="yellow"  size={25}/>
</p></a>

<a href="/engineering"><p className="flex bg-gray-900 text-white w-5/6 md:w-[360px] items-center justify-center py-1 m-auto my-5 gap-3 rounded-lg font-mono font-extrabold text-lg">Other Materials&nbsp; <GrDocumentPdf color="yellow"  size={25}/>
</p></a>
  
</section>
</div> </div>
)}

export default Folder