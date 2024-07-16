import Link from "next/link"
import { FaCirclePlay } from "react-icons/fa6";


export default function Sub(props){
    return(

<div className="select-none">


<Link href={props.route} className="chapter flex justify-center gap-2 transition-all ease-in duration-100">{props.name}<FaCirclePlay size={27}/>
</Link>          
                
</div> 

)}