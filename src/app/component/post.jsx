import Image from "next/image"

function Post(props) {
  return (
    <div><br />
        
        <div 
  className={`ring-1 ring-black rounded-lg w-11/12 md:w-[370px] lg:w-[450px] m-auto px-2 py-4 ${props.color}`}>

    <div className="flex gap-1 mt-2">    
        <Image className="bg-white ring-1 ring-red-600 p-[5px] rounded-full" src="/aple.png" width={45} height={40}/>
        <section>
        <p className="text-lg font-serif font-extrabold text-purple-950 tracking-tighter italic">@Apple ghost</p>
        <p className="text-[11px] text-end font-mono font-extrabold italic tracking-widest">{props.date}</p>
        </section> 

    </div>
    <h1 className="mt-5 font-sans text-lg italic text-start tracking-wide font-bold">{props.line}</h1>
    <a href={props.road} className="text-sm font-sans font-extrabold underline text-blue-900">{props.name}</a>
<img src={props.link} loading="lazy"  className="rounded-md mt-2 "/>
</div>

    </div>
  )
}

export default Post