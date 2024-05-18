import Link from "next/link"
import { FaCirclePlay } from "react-icons/fa6";


export default function Sub(props){
    return(

        <div>

<section className="mt-5">
<Link href={props.route}><p className="hover:ring-yellow-400 hover:ring-2 active:tracking-tight active:ring-2 active:ring-yellow-400 bg-black justify-center rounded-md w-[340px] md:w-[360px] md:py-3 text-white m-auto px-2 py-[11px] my-1  font-extrabold text-[18px] md:text-[20px] font-sans flex transition gap-2 ease-in duration-200 ">{props.name}&nbsp;<FaCirclePlay color="yellow" size={26}/></p>
</Link>        
       
         
</section>         
     
        
   
       </div> 
)
}