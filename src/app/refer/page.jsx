import React from 'react'

function page(props) {
  return (
 <div>

  <h1 className='text-center mt-3 text-2xl md:mt-0 md:text-4xl'
  style={{fontFamily: "fantasy"}}>What is the procedure?</h1>

<ol className="list-decimal pl-5 bg-gray-950 mt-3 select-text lg:w-[1000px] lg:m-auto lg:text-[17px] lg:mt-6">
  <li>আমাদের কোর্স সম্পর্কে অন্যদের জানাবে, বিস্তারিত জানতে চাইলে আমাদের Website or Facebook link Share করবে।
     <ol className='list-disc pl-3 md:pl-5 text-sm my-2 lg:text-[17px] lg:tracking-normal'>
    <span className='font-semibold tracking-tight italic'>Copy website & facebook link from here:</span>
  <li><span className='select-all selection:bg-yellow-400 selection:text-black'>https://applecourses.up.railway.app</span></li>
  <li><span className='select-all selection:bg-yellow-400 selection:text-black'>https://applecourses.vercel.app</span></li>
  <li><span className='tracking-tighter select-all selection:bg-yellow-400 selection:text-black'>https://www.facebook.com/applecourses.pro</span></li>

  </ol>   
  </li>
  <li>কেউ Purchase করলে, তোমার মাধ্যমেই যে সে আমাদের জানতে পেরেছে সেটা Proof করবে।</li>
  <ol className='pl-5 list-disc my-2'>
<li>Minimal কোনো Proof হলেই চলবে</li>
<li>যেমন Comments, Reply, Post or message এর screenshot.</li>
  </ol>
  <li>Proof solid হলে 5mins এর মধ্যেই bkash এ তোমার প্রাপ amount পাঠিয়ে দেয়া হবে।</li>
  <li>Per Admission Course এর জন্য 75BDT & অন্যন্য Course এর জন্য 25.</li>
</ol>
 </div>
  )
}


export default page