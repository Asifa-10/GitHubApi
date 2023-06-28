import React, { useEffect, useState } from "react";
import GitHub from "./GitHub";

const Home=()=>{
 
    const [user,setUser]= useState();
    const [Userdata, setData]= useState(JSON.stringify({" ":""}));
    const [GithubData,setGitHub]=useState();

    const getData=(async(user) =>{
        const res= await fetch(`https://api.github.com/users/${user}`);
        const data= await res.json();
        setData(JSON.stringify(data));
        setGitHub(data)
    })

    const handleApi=()=>{
        getData(user);
    }
    useEffect(()=>{
        getData(user)
    },1)
        
    return(
        <>
            <div className="bg-slate-900 ">
                <div className="container">
                    <input type="text" value={user} onChange={e => setUser(e.target.value)} id="admin" placeholder="asifa-10" className="h-10 w-11/12 rounded-md p-3 mx-10 my-10"/>
                    <button className="bg-slate-400 rounded-md h-10 w-20 ml-96 -mt-4" onClick={handleApi}>Get</button>
                </div>
            </div>
                {
                    user==""?<h1 className="text-center text-3xl text-underline">Please enter the Username</h1>:""
                }
            <GitHub text={Userdata}/>
        </>
    )
}

export default Home;