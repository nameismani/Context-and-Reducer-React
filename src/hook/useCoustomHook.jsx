import React from "react";
import { createContext, useContext, useReducer, useState } from "react";
import { format } from 'date-fns';

import { useNavigate } from "react-router-dom";

const useCoustomHook = (initalState,ADD_POST,DELETE_POST,EDIT_POST,state,dispatch) => {
   
    let Navigate = useNavigate()
    let [addPost,setAddPost] = useState({
     title:'',
     body:''
    })
    
    let [editPost,setEditPost] = useState({
     title:'',
     body:''
    })
     const [search,setSearch] = useState('');
     const handleSearch = (e)=>{
         setSearch(e.target.value)
     }
 
     const handleAddPostData = (e)=>{
      const {name,value} = e.target
      setAddPost(preval=>{
       return{...preval,[name]: value}
      })
     }
     const handlePostSubmit = (e)=>{
      e.preventDefault()
     
      const {posts} = state
      console.log(state)
      const id = posts.length ? posts[posts.length-1].id +1:1
      const datetime = format(new Date(), 'MMMM dd, yyyy pp');
      const {title,body}= addPost
     const newPost = {id,datetime,title,body}
      if(title != "" && body!=""){
      dispatch({type:ADD_POST,payload:newPost})
      setAddPost({
       title:'',
       body:''
      });
      }
      else{
       alert('please enter both body title and body field')
      }
     }
 
     const handlePostDelete = (id)=>{
       // console.log("delete",id);
       dispatch({type:DELETE_POST, payload:id});
     }
 
     const handlePostEdit= (id)=>{
     
     // console.log(id,editPost)
      let payload = {id,...editPost}
      console.log(payload)
      dispatch({type:EDIT_POST,payload})
      Navigate('/')
     // setTimeout(()=> Navigate('/'),1000)
     }
 
  return {search,editPost,addPost,setEditPost,handleAddPostData,handlePostEdit,handleSearch,handlePostDelete,handlePostSubmit};
};

export default useCoustomHook;
