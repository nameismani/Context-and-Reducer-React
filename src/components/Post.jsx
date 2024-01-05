import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const Post = ({title,datetime,body,id}) => {
  const {handlePostDelete}= useGlobalContext()
  
  return (
    <>
    <section className="text-center my-5 border-b-2 border-solid font-bold ">
        <h2 className="text-2xl text-bold ">{title}</h2>
        <p>{datetime}</p>
        <p>{body.length <=25 ?body:`${body.slice(0,25)}...`}</p>
        <h4 onClick = {()=>handlePostDelete(id)}>Delete</h4>
        <h4><Link to={`/post/${id}`}>Edit</Link></h4>
    </section>
    </>
  )
};

export default Post;
