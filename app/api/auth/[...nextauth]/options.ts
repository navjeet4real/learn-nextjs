import type { NextAuthOptions } from "next-auth";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
    providers:[
        GitHub({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        // Credentials({
        //     name: "Credentials",
        //     credentials: {
        //         username: { 
        //             label: "Username", 
        //             type: "text",
        //             placeholder: "your-cool-username" 
        //         },
        //         async authorize(credentials){
                     
        //         }
        //     }
        // })
    ]
}

