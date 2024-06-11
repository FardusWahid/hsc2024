import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';

export const option = {

    providers: [

        GoogleProvider({
           
        profile(profile){
            console.log("Google Profile:", profile);

            let userRole = "unpaid";
            const proUsers = ["farduswahid87@gmail.com","akashjr190@gmail.com","tanjirislamshishir@gmail.com", "ms1897473@gmail.com", "shahi76569@gmail.com","oodhora32@gmail.com"];
            const preEmails = ["mdaraf1232@gmail.com","farduswahid31@gmail.com","hozukisuigestu6@gmail.com"];


            if(profile?.email && preEmails.includes(profile.email)){
                userRole= "premium";

            }else if(profile?.email && proUsers.includes(profile.email)){
                userRole = "pro";
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