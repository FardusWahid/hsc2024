import Link from 'next/link';
import { GrDocumentPdf } from "react-icons/gr";

const Mat = (props) => {
  return (
    <div>
<Link className='mat flex gap-3 justify-center' href={props.link}>Materials&nbsp; <GrDocumentPdf  size={25} /></Link>


    </div>
  )
}

export default Mat