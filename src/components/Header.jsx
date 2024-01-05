import React, { memo } from "react";
import Nav from "./Nav";

const Header = ({title}) => {
  return (
    <>
   <header className="flex justify-between  bg-amber-500 p-5">
   <h1 className="text-center text-2xl text-white">{title}</h1>
    <Nav/>
   </header>
    </>
  );
};
Header.defaultProps={
  title:"Social Media"
}
export default memo(Header) ;
