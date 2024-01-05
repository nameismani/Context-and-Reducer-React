import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Missing = () => {
 const Navigate = useNavigate()
  return (
    <>

    <main className="h-[90vh] w-full flex flex-col justify-center items-center">
    <p className="text-center block text-5xl"><span className="text-7xl font-semibold">OOPS</span>Page is missing </p>
      <button className="my-10 p-4 bg-green-400 hover:bg-green-700 text-white rounded-xl" onClick={()=>Navigate("/")}>Go back to Home page</button>
    </main>
     </>
  )
};

export default Missing;
