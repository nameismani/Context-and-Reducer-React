import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const About = () => {
  return (
  <>
    
   <div className=" w-full md:w-3/5 mx-auto my-5 md:my-10">

   <p className="my-3 md:my-5 text-justify">👋 Enthusiastic Mechanical Engineering graduate turned Web Developer | 6 months of hands-on experience | Passionate about creating user-friendly applications | Proficient in HTML5, CSS3 Taiwlind Css, JavaScript (DOM), React JS, Node.js, Express, EJS, MySQL, MongoDB, Socket.IO | Actively seeking opportunities to apply and expand my tech skills | Explore my projects on GitHub: GitHub/nameismani. Let's connect! 🚀</p>

   <p className="md:mb-5 text-justify">Here is a link to my github and linekdin profile <Link to="https://www.linkedin.com/in/manikandan-b-517936171/" className="text-violet-500 font-semibold">linkedin</Link> & <Link to="https://github.com/nameismani" className="text-violet-500 font-semibold">github</Link></p>
   </div>
  </>
  )
};

export default About;
