import Sub from '../component/sub';
import Mat from '../component/mat';


const Folder =  () => {
    
  
   
  return (
    <div>
<h1 className='chapterHeading mt-1 mb-1 md:mt-0 md:mb-0 tracking-tighter md:tracking-tight'>CPS Engineering 2024</h1>
<div>
<h1 className='text-center text-[17px] font-mono md:my-4 text-pink-300'>First Paper</h1>

<section>


    <Sub
  name="Vector"
  route="/cps/vector"
  />
    <Sub
  name="Newtonian Mechanics"
  route="/cps"
  />


    <Sub
  name="Gravitation & Gravity"
  route="/cps"
  />

<Sub
  name="Periodic Motion"
  route="/cps/periodic"
  />
    <Sub
  name="Properties of matter"
  route="/cps"
  />
    <Sub
  name="Ideal gas & kinetics"
  route="/cps"
  />

<Mat link="https://docs.google.com/document/d/1Sm6LecuVbJRlbafSFT4t-smy4irrZMxSLZEB4l7jC9M/edit?usp=sharing"/>
  
</section>
</div>

<div>
    <h1 className='text-center text-[16px]  tracking-wider mt-5 text-pink-300 font-mono'>Second paper</h1>

<section className='mt-2'>

  <Sub
  name="Thermodynamics"
  route="/cps/thermo"
  />
    <Sub
  name="Static Electricity"
  route="/cps"
  />
    <Sub
  name="Current Electricity"
  route="/cps"
  />
    <Sub
  name="Physical Optics"
  route="/cps"
  />
    <Sub
  name="Modern Physics"
  route="/cps"
  />


<Mat link="https://docs.google.com/document/d/1Sm6LecuVbJRlbafSFT4t-smy4irrZMxSLZEB4l7jC9M/edit?usp=sharing"/>
</section>
</div>

<br />

    </div>
  )
}

export default Folder