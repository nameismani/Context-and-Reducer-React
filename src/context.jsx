import { createContext, useContext, useReducer, useState } from "react";
import useCoustomHook from "./hook/useCoustomHook";

export const useGlobalContext = ()=> useContext(GlobalContext)

const GlobalContext = createContext()

const AppContext = ({children})=>{
  let ADD_POST = "add_post"
  let DELETE_POST = "delete_post"
  let EDIT_POST = "edit_post"
//   let Navigate = useNavigate()
  let initalState = {
    posts: [
      {
        "id": 1,
        "title": "1st post",
        "datetime": "July 16, 2021 11:47:39 AM",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        "id": 2,
        "title": "Second post",
        "datetime": "July 16, 2021 11:47:48 AM",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. two"
      },
      {
        "id": 3,
        "title": "Number Three",
        "datetime": "July 16, 2021 11:48:01 AM",
        "body": "Third post... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        "id": 4,
        "title": "Testing a 4th post",
        "datetime": "August 09, 2021 4:44:22 PM",
        "body": "Some more testing words"
      }
    ],
    newpost :[]
  }

  
    // const [posts,setPosts] = useState(
    //     
    //         {
    //           "id": 1,
    //           "title": "1st post",
    //           "datetime": "July 16, 2021 11:47:39 AM",
    //           "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    //         },
    //         {
    //           "id": 2,
    //           "title": "Second post",
    //           "datetime": "July 16, 2021 11:47:48 AM",
    //           "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. two"
    //         },
    //         {
    //           "id": 3,
    //           "title": "Number Three",
    //           "datetime": "July 16, 2021 11:48:01 AM",
    //           "body": "Third post... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    //         },
    //         {
    //           "id": 4,
    //           "title": "Testing a 4th post",
    //           "datetime": "August 09, 2021 4:44:22 PM",
    //           "body": "Some more testing words"
    //         }
    //       ]
    // )
    let reducer = (state,action)=>{
      const {posts,newpost} = state

      if(action.type === ADD_POST){
         console.log(state,action)
         return {...state,posts:[...state.posts,action.payload],newpost:[...state.newpost,action.payload]}
      }else if(action.type === DELETE_POST){
     const newData = posts.filter(post=> post.id!== action.payload)
     const newPostData = newpost.filter(post=> post.id!== action.payload)
       return{...state,posts:newData,newpost:newPostData}
      }else if(action.type === EDIT_POST){
        console.log(action.payload)
        const isNewPost = newpost.find(post => post.id == action.payload.id)
        var payload = action.paylaod
        // console.log(isNewPost,"asfd")
        if(isNewPost){
            let{title,body}= action.payload
          const editedData = posts.map(post=> post.id == action.payload.id ? {...post,title:title,body:body}: post)
          const editedNewData = newpost.map(post=>post.id == action.payload.id ? {...post,title:title,body:body}:post)
        console.log(editedData,editedNewData)
          return{...state,posts:editedData,newpost:editedNewData}
        }else{
          const editedData = posts.map(post=> post.id == action.payload.id ? {...post,title:action.payload.title,body:action.payload.body}: post)
          // console.log(editedData)
          return{...state,posts:editedData}
        }

       
      }
    }
 
    let [state,dispatch] =  useReducer(reducer,initalState)
    const {search,editPost,addPost,setEditPost,handlePostEdit,handleAddPostData,handleSearch,handlePostDelete,handlePostSubmit} = useCoustomHook(initalState,ADD_POST,DELETE_POST,EDIT_POST,state,dispatch)
    return <GlobalContext.Provider value={{search,editPost,setEditPost,handlePostDelete,handleSearch,state,dispatch,handlePostSubmit,ADD_POST,addPost,handleAddPostData,handlePostEdit}}>

     {children}
    </GlobalContext.Provider>
}

export default AppContext