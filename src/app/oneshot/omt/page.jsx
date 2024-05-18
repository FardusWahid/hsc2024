import Neo from "@/app/component/class";
import { getServerSession } from 'next-auth';
import { option } from "@/app/api/auth/[...nextauth]/option";
import { redirect } from 'next/navigation'

    const Math = async (props) => {
        const session = await getServerSession(option);
       if(session?.user?.role !== "pro"){
        redirect("/denied")
     }
    return(

        <div>
            <Neo
            chapter="Mathematics"
            playid="PLvgzT9BBU5XwFiwmUKLQ7rh4hJF3OCp3f"
            />
        </div>
    )
}

export default Math