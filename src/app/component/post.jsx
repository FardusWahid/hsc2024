import Image from "next/image"
import Link from "next/link"

function Post(props) {
  return (
    <div><br />
        
        <div 
  className={`ring-1 ring-black rounded-lg w-11/12 z-0 md:w-[370px] lg:w-[450px] m-auto px-2 py-4 ${props.color}`}>

    <div className="flex gap-1 mt-2">    
        <Image className="bg-white ring-1 ring-red-600 p-[5px] rounded-full" src="/aple.png" width={45} height={40}/>
        <section>
        <Link href='https://www.facebook.com/apple.courses.netlify.app.3.0/' className="text-lg font-sans font-extrabold tracking-wide italic">@Apple ghost</Link>
        <p className="text-[11px] text-end font-sans font-bold italic tracking-widest">{props.date}</p>
        </section> 

    </div>
    <h1 className="mt-5 mb-1 font-sans text-lg  text-start tracking-normal font-bold">{props.line}</h1>
    <a href={props.road} className="text-sm font-sans underline text-blue-800 hover:bg-lime-400 px-2 py-1 hover:no-underline rounded-sm hover:text-black bg-transparent backdrop-blur-xl bg-opacity-100 hover:shadow-md hover:shadow-gray-700 transition-all ease-in-out duration-150 font-extrabold">{props.name}</a>
<img src={props.link} loading="lazy"  className="rounded-md mt-2 "/>
</div>

    </div>
  )
}

export default Post