import React from "react";
import { useGlobalContext } from "../context";
import Post from "./Post";

const NewPost = () => {
    const {state} =useGlobalContext()
    const {newpost} = state
 
  return(<> {
   newpost.length?( newpost.map(post=>
    <Post key={post.id} {...post}/>
   )).reverse():<p className="text-center text2xl font-bold">No new post is avaliable</p>
  }
  </>
  )
};

export default NewPost;
