





import React, { useContext, useEffect, useRef, useState } from 'react';
import fetchCategoryWiseProduct from '../helpers/fetchCategoryWiseProduct';
import displayINRCurrency from '../helpers/displayCurrency';
import { FaAngleLeft, FaAngleRight, FaHeart, FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import addToCart from '../helpers/addToCart';
import addToWishlist from '../helpers/addToWishlist';
import { toast } from 'react-toastify';
import { FaRegHeart } from "react-icons/fa";

import Context from '../context';

const VerticalCardProduct = ({ category, heading }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const loadingList = new Array(13).fill(null);
    const scrollElement = useRef();
    const { fetchUserAddToCart } = useContext(Context);

    const handleAddToCart = async (e, id) => {
        e.stopPropagation();
        await addToCart(e, id);
        fetchUserAddToCart();
    };

    const handleAddToWishlist = async (e, id) => {
        e.stopPropagation();
        const response = await addToWishlist(e, id);
        if (response.success) {
            toast.success("Product added to wishlist");
        } else {
            toast.error(response.message || "Failed to add to wishlist");
        }
    };

    const fetchData = async () => {
        setLoading(true);
        const categoryProduct = await fetchCategoryWiseProduct(category);
        setLoading(false);
        setData(categoryProduct?.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const scrollRight = () => {
        scrollElement.current.scrollLeft += 300;
    };

    const scrollLeft = () => {
        scrollElement.current.scrollLeft -= 300;
    };

    return (
        <div className='container mx-auto px-4 my-6 relative'>
            <h2 className='text-2xl font-semibold py-4'>{heading}</h2>

            <div className='flex items-center gap-4 md:gap-6 overflow-x-scroll scrollbar-none transition-all' ref={scrollElement}>
                <button className='bg-white shadow-md rounded-full p-1 absolute left-0 text-lg hidden md:block' onClick={scrollLeft}>
                    <FaAngleLeft />
                </button>
                <button className='bg-white shadow-md rounded-full p-1 absolute right-0 text-lg hidden md:block' onClick={scrollRight}>
                    <FaAngleRight />
                </button>

                {loading ? (
                    loadingList.map((_, index) => (
                        <div key={index} className='w-full min-w-[200px] md:min-w-[240px] max-w-[200px] md:max-w-[240px] bg-white rounded-sm shadow'>
                            <div className='bg-slate-200 h-48 p-4 min-w-[200px] md:min-w-[145px] flex justify-center items-center animate-pulse'></div>
                            <div className='p-4 grid gap-1'>
                                <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black p-1 py-1 animate-pulse rounded-full bg-slate-200'></h2>
                                <p className='capitalize text-slate-500 p-1 animate-pulse rounded-full bg-slate-200 py-1'></p>
                                <div className='flex gap-3'>
                                    <p className='text-red-600 font-medium p-1 animate-pulse rounded-full bg-slate-200 w-full py-1'></p>
                                    <p className='text-slate-500 line-through p-1 animate-pulse rounded-full bg-slate-200 w-full py-1'></p>
                                </div>
                                <button className='text-sm text-white px-3 rounded-full bg-slate-200 py-1 animate-pulse'></button>
                            </div>
                        </div>
                    ))
                ) : (
                    data.map((product, index) => (
                        <div key={index} className='w-full min-w-[200px] md:min-w-[240px] max-w-[200px] md:max-w-[240px] bg-white rounded-sm shadow relative'> 
                            <Link to={`/product/${product?._id}`} className='block'>
                                <ImageHoverSlider images={product.productImage} productName={product?.productName} />
                            </Link>

                            {/* Wishlist and Cart buttons */}
                            <div className='absolute top-4 right-2 flex gap-2'>
                                <button onClick={(e) => handleAddToWishlist(e, product._id)} className='bg-white p-1 rounded-full shadow-md'>
                                    <FaRegHeart />
                                </button>
                            </div>

                            <div className='p-4 grid gap-1'>
                                <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black'>{product?.productName}</h2>
                                <p className='capitalize text-slate-500'>{product?.category}</p>
                                <div className='flex gap-3'>
                                    <p className='text-red-600 font-medium'>{displayINRCurrency(product?.sellingPrice)}</p>
                                    <p className='text-slate-500 line-through'>{displayINRCurrency(product?.price)}</p>
                                </div>
                                <div className='flex gap-2'>
                                    <button 
                                        className='text-sm md:px-16 px-3 md:py-0.5 py-1 bg-red-600 hover:bg-red-700 text-white rounded-full w-full md:w-auto' 
                                        onClick={(e) => handleAddToCart(e, product?._id)}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

const ImageHoverSlider = ({ images, productName }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const intervalRef = useRef(null);

    const startImageRotation = () => {
        intervalRef.current = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1500); // Change every 1.5 seconds
    };

    const stopImageRotation = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setCurrentImageIndex(0); // Reset to the first image when not hovered
    };

    useEffect(() => {
        return () => {
            clearInterval(intervalRef.current); // Clean up on component unmount
        };
    }, []);

    return (
        <div
            className='bg-slate-200 h-72 p-4 min-w-[200px] md:min-w-[145px] flex justify-center items-center'
            onMouseEnter={startImageRotation}
            onMouseLeave={stopImageRotation}
        >
            <img
                src={images[currentImageIndex]}
                className='object-cover h-full w-full hover:scale-110 transition-all'
                alt={productName}
            />
        </div>
    );
};

export default VerticalCardProduct;
