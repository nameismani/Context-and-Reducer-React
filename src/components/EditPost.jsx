import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";


const EditPost = () => {
    let {id} = useParams()
    const {state,handlePostEdit,editPost,setEditPost} = useGlobalContext()
    const {posts} = state
    
    const filteredData = posts.find(post=> post.id == id)
    // console.log(filteredData,id)
useEffect(()=>{
    setEditPost({
        title:filteredData.title,
        body:filteredData.body
    })
},[])
  return <>
 <div className="w-4/5 mx-auto flex gap-2 flex-wrap">
 <input type="text" name="title" className="border-gray-700 mt-3 w-full border-dashed border-4 outline-none" value = {editPost.title} onChange={(e)=>{
    setEditPost(preval => ({...preval,[e.target.name]:e.target.value}))
}} />

<textarea name="body" className="border-gray-700 mt-3 w-full outline-none border-dashed border-4 md:grow"value = {editPost.body} onChange={(e)=>{
    setEditPost(preval => ({...preval,[e.target.name]:e.target.value}))
}}/>

<div className="flex justify-center items-center w-full mt-4">
<button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mr-3" onClick={()=>handlePostEdit(id,editPost)}>Submit</button>
<button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded" onClick = {()=> history.back()}>Cancle</button>
</div>
 </div>

  </>;
};

export default EditPost;
