import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import { useGlobalContext } from "../context";
// import { useGlobalContext } from "../context";
import Post from "./Post";

const Home = () => {
 const {search,handleSearch,state,dispatch,addPost,handleAddPostData,handlePostSubmit}= useGlobalContext()
 const filterdPosts = state.posts.filter(post=> (post.title.toLowerCase()).includes(search.toLowerCase()))

  return(
    <>

    <form className="container mx-auto text-center" >
              <div className="flex w-4/5 md:w-1/2  mx-auto my-5 items-center">
              <label htmlFor="search" className="hidden md:block mb-2 text-sm text-nowrap font-medium text-gray-900  me-5">Search Posts</label>
                <input
                    id="search"
                    type="text"
                    placeholder="Search Posts"
                   className="border-gray-300 bg-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mx-auto"
                   value={search}
                   onChange={handleSearch}
                />
              </div>
            </form>

       <section className="container mx-auto ">
       <form className="flex justify-center w-4/5 md:w-1/2 mx-auto items-center" onSubmit={handlePostSubmit}>
        <div className=" w-full">
      <label htmlFor="post" className="inline-block w-full text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400 mb-2 ps-2">Title</label>
      <div className="relative flex items-center mb-7">
        <input id="post" type="text" className="peer relative h-10 w-full rounded-md bg-gray-50 pl-4 pr-20 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg" name="title"
        value ={addPost.title}
        onChange={handleAddPostData} />
       
      </div>

      <div className="box border rounded flex flex-col shadow bg-white">
        <div className="box__title bg-gray-500 text-white px-3 py-2 border-b"><h3 className="text-sm text-grey-darker font-medium">Body</h3></div>
        <textarea placeholder="Type post" className="text-grey-darkest flex-1 p-2 m-1 bg-transparent outline-none resize-none" name="body"
        value ={addPost.body}
        onChange={handleAddPostData}></textarea>
      </div>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 my-5 w-full md:w-1/2  dark:bg-blue-600  block  mx-auto dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
    </div>

        </form>
       </section>
      { filterdPosts.length ? (
        filterdPosts.reverse().map(post=>
            <Post  key={post.id} {...post}/>
        )
      )
      :<p className="text-center text2xl font-bold">No posts to display</p>}

    </>
  )
};

export default Home;
