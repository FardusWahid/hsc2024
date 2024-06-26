import Link from "next/link"
import { FaCirclePlay } from "react-icons/fa6";


export default function Sub(props){
    return(

        <div>

<section className="mt-5 w-5/6 md:w-[360px] m-auto">
<Link href={props.route}><p className="shadow-inner shadow-blue-700 bg-black hover:bg-purple-950 justify-center rounded-md md:py-3 text-white m-auto px-2 py-[11px] my-1 font-[900] text-[18px] hover:text-[19px] md:text-[20px] md:hover:text-[21px] active:text-yellow-100 hover:ring-2 hover:ring-purple-900 font-sans flex gap-2 transition-all ease-in-out duration-150 ">{props.name}&nbsp;<FaCirclePlay color="yellow" size={26}/></p>
</Link>       
       
         
</section>         
     
        
   
       </div> 
)
}