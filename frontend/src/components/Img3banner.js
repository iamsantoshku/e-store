import React from "react";
import img1 from "../assest/banner/2.avif";
import img2 from "../assest/banner/7e6c8800-9a28-4d03-a159-c6a678c5f226.avif";
import img3 from "../assest/banner/man babber.avif";
import { NavLink } from "react-router-dom";
import SummaryApi from "../common";

const Img3banner = () => {
    return (
        <div className="flex  justify-between">
            <div className="ml-8 w-[29vw] h-[37vw]">
                <NavLink to={SummaryApi.front.url2 + "product-category?category=women"}><img src={img1} alt="" className="w-full h-full object-cover" /></NavLink>
            </div>
            <div className="w-[29vw] h-[37vw]">
                <NavLink to={SummaryApi.front.url2 + "product-category?category=women"}><img src={img2} alt="" className="w-full h-full object-cover" /></NavLink>
            </div>
            <div className="mr-8 w-[29vw] h-[37vw]">
                <NavLink to={SummaryApi.front.url2 + "product-category?category=men"}><img src={img3} alt="" className="w-full h-full object-cover" /></NavLink>
            </div>
        </div>
    );
};

export default Img3banner;
