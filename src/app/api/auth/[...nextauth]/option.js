import GoogleProvider from 'next-auth/providers/google';
export const option = {

    providers: [

        GoogleProvider({
           
        profile(profile){
            console.log("Google Profile:", profile);

            let userRole = "unpaid";
            const proUsers = ["farduswahid87@gmail.com","akashjr190@gmail.com","tanjirislamshishir@gmail.com", "ms1897473@gmail.com", "shahi76569@gmail.com","oodhora32@gmail.com","nahid01845654611@gmail.com","mostafizurvc2580@gmail.com","moinul12266@gmail.com","thorfinxx99@gmail.com","nomantui4321@gmail.com","ghoshavijit6749@gmail.com","muhammadtufazzal0@gmail.com"];
            const preEmails = ["arafloser1@gmail.com","applebyte87@gmail.com","hozukisuigestu6@gmail.com","ssindidahmednabil@gmail.com","jawataafnan734@gmail.com","hscstudy47@gmail.com","tabassumcoxbd@gmail.com","fawzulpunno@gmail.com","kftmosara@gmail.com","acscourse10a@gmail.com","zhb8115@gmail.com","londondairy80@gmail.com","ardinalislam@gmail.com","pproshantaroy45@gmail.com","techsudipto.360@gmail.com","sakiradnan17285@gmail.com","ashik384897@gmail.com","hafijurrahman00097@gmail.com","mdtaiwan101@gmail.com","3423rohan@gmail.com","rashidabegum3014@gmail.com","skjahangir2253@gmail.com","tituhin2021@gmail.com","rosidh207@gmail.com","sheikhrifatahsan@gmail.com","podartobiggan2006@gmail.com","porag10102006@gmail.com","nilmonichowdhury525@gmail.com"];
            const neanderthal = ["wahidfardus37@gmail.com","maheehossain823@gmail.com"];
            const martian = ["razanmunsi158259@gmail.com","satabdipaulesita@gmail.com","hasantasin50@gmail.com","ufxytrgj27743@gmail.com","saimumstudy@gmail.com","joy123ctg12@gmail.com","roy741737@gmail.com"];
            const medvar = ["farduswahid31@gmail.com","simantoansary15@gmail.com"]
            if(profile?.email && preEmails.includes(profile.email)){
                userRole= "premium";

            }else if(profile?.email && proUsers.includes(profile.email)){
                userRole = "pro";
            }else if(profile?.email && neanderthal.includes(profile.email)){
                userRole = "Neanderthal";
            }else if(profile?.email && martian.includes(profile.email)){
                userRole = "Martian";
            }else if(profile?.email && medvar.includes(profile.email)){
                userRole = "Navarian"
            }

             return{
                ...profile,
                role: userRole,
                id: profile.sub
             };

        },


        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,

        }),
    ],

    session: {
        strategy: 'jwt',
        maxAge: 86400,
    },

    callbacks: {
        async jwt({token, user}) {
            if(user) token.role = user.role;
            return token;
        },
        async session({session, token}){
            if(session?.user) session.user.role = token.role;
            return session;
        },
    }
}