import Neo from "@/app/component/class";
import { getServerSession } from 'next-auth';
import { option } from "@/app/api/auth/[...nextauth]/option";
import { redirect } from 'next/navigation'

    const Phy = async (props) => {
        const session = await getServerSession(option);
       if(session?.user?.role !== "pro"){
        redirect("/denied")
     }
    return(

        <div>
            <Neo
            chapter="Physics"
            playid="PLvgzT9BBU5Xxt1r_-KByEu4xfu_Rt3o_c"
            />
        </div>
    )
}

export default Phy