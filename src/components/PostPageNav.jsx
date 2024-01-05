import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./Header";

const PostPageNav = () => {
  return  (  <>
  <nav className="bg-gray-700 p-5 text-white ">
   <ul className="flex gap-3 md:justify-center items-center ">
       <li><Link to="/post">PostPage</Link></li>
       <li><Link to="/post/newpost">NewPost</Link></li>
       {/* <li><Link to="/about">About</Link></li> */}
   </ul>

</nav>
<Outlet/>
</>)
};

export default PostPageNav;
