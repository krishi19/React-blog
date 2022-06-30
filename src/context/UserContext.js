import { createContext,useState,useEffect } from "react";


export const UserContext=createContext()

export const UserProvider=({children})=>{
    const [user,setUser]=useState(null)

    console.log("User from context is",user)

    

    useEffect(()=>{
        let data=localStorage.getItem("BLOG_USER")
        if(data){
            setUser(JSON.parse(data))
        }
},[])

    useEffect(()=>{
        if(user){
            localStorage.setItem("BLOG_USER",JSON.stringify(user))
        }
    },[user])




    return <UserContext.Provider value={[user,setUser]}>
{children}
    </UserContext.Provider>
}