import Sub from '../component/sub';
import Mat from '../component/mat';



const Folder = () => {
    
   
  return (
    <div className='select-none'>
<h1 className='chapterHeading mt-2 md:mt-0 leading-[42px] lg:tracking-tighter'>Darpan Academy OneShot 24</h1>

<section className='mt-3 md:mt-5'>

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

<Mat link="https://docs.google.com/document/d/1FRaWZKeEiv2cPROC2FWYqo5zYLqw8CjdaJp8fsDthX0/edit?usp=sharing" />


  
</section>


    </div>
  )
}

export default Folder