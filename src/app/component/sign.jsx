import Link from "next/link";
import { getServerSession } from "next-auth";
import option from "../api/auth/[...nextauth]/option";

const Sign = async () =>{
    const session = await getServerSession(option);

    return(
        <div className="">

      {session ? <Link href='/api/auth/signout?callbackUrl=/'>Logout</Link> : <Link href="/api/auth/signin?callbackUrl=/">Login</Link>}



        </div>
    )
}
export default Sign;