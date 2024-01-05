import React from "react";
import { useGlobalContext } from "../context";
import Post from "./Post";


const PostPage = () => {
    const {state}= useGlobalContext()
    const {posts} = state
  return (
    <>

         { posts.length ? (
        posts.map(post=>
            <Post  key={post.id} {...post}/>
        )
      ).reverse()
      :<p className="text-center text2xl font-bold">No posts to display</p>}
    </>
  )
};

export default PostPage;
