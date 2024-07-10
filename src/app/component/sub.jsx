import Link from "next/link"
import { FaCirclePlay } from "react-icons/fa6";


export default function Sub(props){
    return(

        <div>
<section className="mt-5 w-5/6 md:w-[360px] m-auto">
<Link href={props.route}><p className=" bg-cyan-300 hover:bg-blue-400 justify-center rounded-md md:py-3 text-black ring-1 ring-black m-auto px-2 py-[11px] my-1 font-bold text-lg hover:text-[20px] md:text-xl md:hover:text-[22px] hover:ring-[1.6px] font-sans flex gap-2 transition-all ease-in-out duration-100 ">{props.name}&nbsp;<FaCirclePlay  size={27}/></p>
</Link>          
       
         
</section>       
            
     
        
   
       </div> 
)
}