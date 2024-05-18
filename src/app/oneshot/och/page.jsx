import Neo from "@/app/component/class";
import { getServerSession } from 'next-auth';
import { option } from "@/app/api/auth/[...nextauth]/option";
import { redirect } from 'next/navigation'

    const Che = async (props) => {
        const session = await getServerSession(option);
       if(session?.user?.role !== "pro"){
        redirect("/denied")
     }
    return(

        <div>
            <Neo
            chapter="Chemistry"
            playid="PLvgzT9BBU5Xzlu6YTzhzVO450dxklyAiV"
            />
        </div>
    )
}

export default Che