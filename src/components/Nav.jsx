import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  
  return (
   <>
           <nav className="Nav">
            <ul className="flex gap-3 text-white">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/post">Post</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
   </>
  )
};

export default Nav;
