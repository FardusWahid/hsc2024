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
  name="Dynamic Motion"
  route="/physics/p1-3"
  />
    <Sub
  name="Newtonian Mechanics"
  route="/physics/p1-4"
  />


    <Sub
  name="Gravitation & Gravity"
  route="/physics/p1-gra"
  />

<Sub
  name="Periodic Motion"
  route="/cps/periodic"
  />
    <Sub
  name="Properties of matter"
  route="/physics/matter"
  />
    <Sub
  name="Ideal gas & kinetics"
  route="/physics/p1-ideal"
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
  route="/physics/p2-2"
  />
    <Sub
  name="Current Electricity"
  route="/physics/p2current"
  />
    <Sub
  name="Physical Optics"
  route="/soon"
  />
    <Sub
  name="Modern Physics"
  route="/soon"
  />


<Mat link="https://docs.google.com/document/d/1Sm6LecuVbJRlbafSFT4t-smy4irrZMxSLZEB4l7jC9M/edit?usp=sharing"/>
</section>
</div>

<br />

    </div>
  )
}

export default Folder