import React, { useCallback, useEffect, useState } from "react";
import { useParams,NavLink } from "react-router-dom";

const Repo=()=>{

    const [repo, setRepo]= useState([]);
    const {id}= useParams();

    const getData= useCallback(async (id) =>{
        const res= await fetch(`https://api.github.com/users/${id}/repos`);
        const data= await res.json();
        setRepo(data);
    })
    useEffect(()=>{
        getData(id);
    },1);
    
    return(
        <>
            <section className="text-gray-600 body-font bg-slate-900">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-col text-center w-full py-5">
                        <h1 class=" text-white tracking-widest font-lg title-font mb-1">Repositories</h1>
                    </div>
                    <div className="flex flex-wrap items-center justify-center">
                        {
                            repo.map((ele)=>{
                                return(
                                    <>
                                       <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-dotted border-2 border-black-500 border-radius-50 rounded-2xl shadow-md  shadow-lg shadow-red-300/50 border-opacity-60 bg-slate-400 m-6">
                                            <h2 class="text-lg sm:text-xl text-black font-bold title-font mb-2">{ele.name}</h2>
                                            <p className="text-green-800 font-bold">
                                                {ele.private? "Private": "Public"}, issues={ele.open_issues}{ele.language!=null ?`, ${ele.language}`:""}
                                            </p>
                                            <a class="text-indigo-500 inline-flex items-center" href={ele.html_url}>
                                                <button className="bg-slate-900 hover:bg-blue-900 text-white font-bold mt-2 py-2 px-4 rounded-md">Check Repo</button>
                                            </a>
                                       </div> 
                                       <br/>
                                    </>
                                )
                            })
                        }
                    </div>

                    <NavLink to={`/`}>
                        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Back</button>
                    </NavLink>
                </div>

            </section>
        </>
    )
}

export default Repo;