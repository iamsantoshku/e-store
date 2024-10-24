
import React from "react";
import cancell from '../assest/cancell-7033330.mp4'
import { NavLink } from "react-router-dom";

const Cancell = ()=>{
    return(
        <div className="bg-slate-200 w-full max-w-md mx-auto flex justify-center items-center flex-col p-4 m-3">
            <video src={cancell} loop autoPlay muted width={300} height={300}></video>
            <p className="text-red-600 font-bold text-xl">Payment Cancelled</p>
            <NavLink to={"/cart"} className='p-2 px-3 mt-5 border-2 border-red-600 rounded font-semibold text-green'>
                go to cart
            </NavLink>
        </div>
    )
}

export default Cancell;
