import React from "react";
import { NavLink } from "react-router-dom";

const GitHub=({text})=>{
    const data= JSON.parse(text);

  return(
    <>
      <section className="bg-slate-900 -my-20 ">
        <div className="container mx-10 my-10">
          <div>
            <div className="flex justify-center ml-28">   
              <img className="flex rounded-lg justify-center my-12 -mx-44 inline-flex" src={data.avatar_url} alt="" width={100} height={100}/>
              <h1 className="text-2xl ml-20 text-white font-bold inline-flex">{data.login}</h1>
            </div>
            <div className="flex justify-center ">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex -ml-12">
              </div>
            </div>
          </div>

          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/4 flex flex-col text-center items-center my-10">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div class="flex-grow ">
                <h2 class="text-white text-lg title-font font-medium ">Repositories</h2>
                <NavLink to={`/${data.login}/repo`}>
                  <button class="flex mx-auto my-4  text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none   text-lg">{data.public_repos}</button>
                </NavLink>
              </div>
            </div>

            <div className="p-4 md:w-1/4 flex flex-col text-center items-center ">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0 mt-10">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="text-white text-lg title-font font-medium mb-3">Followers</h2>
                <NavLink to={`/${data.login}/followers`}>
                  <button class="flex mx-auto my-4 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none   text-lg">{data.followers}</button>
                </NavLink>
              </div>
            </div>

            <div class="p-4 md:w-1/4 flex flex-col text-center items-center ">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0 mt-10">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="text-white text-lg title-font font-medium mb-3">Following</h2>
                <NavLink to={`/${data.login}/following`}>
                  <button class="flex mx-auto my-4 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none text-lg">{data.following}</button>
                </NavLink>
              </div>
            </div>

            <div class="p-4 md:w-1/4 flex flex-col text-center items-center ">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0 mt-10">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="text-white text-lg title-font font-medium mb-3">Type</h2>
                <NavLink to={`/${data.id}`}>
                  <button class="flex mx-auto my-4 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none text-lg">{data.type}</button>
                </NavLink>
              </div>
            </div>
          </div>
                  
          <a href={data.html_url}>
            <button class="flex mx-auto -my-10 text-black bg-slate-400 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">GitHub</button>
          </a>
        </div>
      </section>
    </>
  )
}

export default GitHub;