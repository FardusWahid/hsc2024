import Neo from "@/app/component/class";
import { getServerSession } from 'next-auth';
import { option } from "@/app/api/auth/[...nextauth]/option";
import { redirect } from 'next/navigation'

    const Ict = async (props) => {
        const session = await getServerSession(option);
       if(session?.user?.role !== "pro"){
        redirect("/denied")
     }
    return(

        <div>
            <Neo
            chapter="ICT"
            playid="PLvgzT9BBU5XzBJRxFGNHNEgpGAferXpbb"
            />
        </div>
    )
}

export default Ict