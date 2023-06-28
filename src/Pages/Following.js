import React, { useCallback, useEffect, useState } from "react";
import { useParams,NavLink } from "react-router-dom";

const Following=()=>{

    const [repo, setRepo]= useState([]);
    const {id}= useParams();

    const getData= useCallback(async (id) =>{
        const res= await fetch(`https://api.github.com/users/${id}/following`);
        const data= await res.json();
        setRepo(data);
    })
    useEffect(()=>{
        getData(id);
    },1);

    return(
        <>
            <section className="text-gray-600 body-font bg-slate-900">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-col text-center w-full py-5">
                        <h1 class=" text-white tracking-widest font-lg font-bold title-font mb-1">Following</h1>
                    </div>

                    <div className="flex flex-wrap items-center justify-center">
                        {
                            repo.map((ele)=>{
                                return(
                                    <>
                                       <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-dotted border-2 border-black-500 border-radius-50 rounded-2xl shadow-md  shadow-lg shadow-red-300/50 border-opacity-60 bg-slate-400 m-6">
                                            <h2 class="text-lg sm:text-xl text-gray-900 font-bold title-font mb-2 mx-14">{ele.login}</h2>
                                            <img src={ele.avatar_url} />
                                            <p className="leading-relaxed text-black font-bold mb-4">
                                                Hello!!!
                                            </p>
                                            <NavLink to={`/user/${ele.login}`}>
                                                <button class="bg-slate-900 hover:bg-blue-900 text-white font-bold py-2 px-2 mx-14 rounded-md">Visit User</button>
                                            </NavLink>  
                                       </div> 
                                       <br/>
                                    </>
                                )
                            })
                        }
                    </div>

                    <NavLink to={`/`}>
                        <button className="flex mx-auto  text-white bg-blue-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Back</button>
                    </NavLink>
                </div>
            </section>
        </>
    )
}

export default Following;