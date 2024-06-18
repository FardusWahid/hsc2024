import React from 'react'
import Post from '../component/post'

function page(props) {
  return (
    <div>
<h1 className='text-center font-serif italic font-bold text-2xl '>Latest updates</h1>

<div className='flex flex-wrap justify-between  gap-5 md:mx-5 lg:mx-8 lg:justify-between'>

<Post
date="19 june 2024"
line="Facebook service is Unavailable for next 3 days. Message here for any potential question. https://t.me/applecourses"
color='bg-pink-400'
/>

<Post
date="12 june 2024"
line="OneShot course এর ২টা missing ক্লাস Lecture Sheet এর সাথে দেয়া আছে "
color='bg-sky-200'
/>




<Post
date="10 june 2024"
line="We have Updated subscription to all our Engineering Course Members. Now you guys can access Darpan Academy One course for free."
color='bg-lime-100'
/>



</div>
    
    <br />
    
</div>
  )
}


export default page