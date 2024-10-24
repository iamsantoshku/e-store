







import React, { useContext } from 'react';
import scrollTop from '../helpers/scrollTop';
import displayINRCurrency from '../helpers/displayCurrency';
import Context from '../context';
import addToCart from '../helpers/addToCart';
import addToWishlist from '../helpers/addToWishlist'; // Assuming you have a helper function for wishlist
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const VerticalCard = ({ loading, data = [] }) => {
    const loadingList = new Array(13).fill(null);
    const { fetchUserAddToCart, fetchUserAddToWishlist, user } = useContext(Context); // Assuming 'user' is available in Context

    const handleAddToCart = async (e, id) => {
        if (user) {
            // If the user is logged in, use the existing logic to add to cart via API
            await addToCart(e, id);
            fetchUserAddToCart();
        } else {
            // If the user is not logged in, store cart in local storage
            const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
            const existingProduct = cartItems.find(item => item.productId === id);

            if (existingProduct) {
                // Update the quantity if the product is already in the cart
                existingProduct.quantity += 1;
            } else {
                // Add new product to cart
                cartItems.push({ productId: id, quantity: 1 });
            }

            // Save updated cart to local storage
            localStorage.setItem('cart', JSON.stringify(cartItems));
            console.log('Product added to cart for guest user');
        }
    };

   

    const handleAddToWishlist = async (e, id) => {
        e.stopPropagation(); // Prevent the click from affecting the Link
        const response = await addToWishlist(e, id);
        if (response.success) {
            toast.success("Product added to wishlist");
        } else {
            toast.error(response.message || "Failed to add to wishlist");
        }
    };

    return (
        <div className='grid grid-cols-[repeat(auto-fit,minmax(260px,300px))] justify-center md:justify-between md:gap-4 overflow-x-scroll scrollbar-none transition-all'>
            {
                loading ? (
                    loadingList.map((product, index) => (
                        <div key={index} className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] bg-white rounded-sm shadow'>
                            <div className='bg-slate-200 h-48 p-4 min-w-[280px] md:min-w-[145px] flex justify-center items-center animate-pulse'>
                            </div>
                            <div className='p-4 grid gap-3'>
                                <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black p-1 py-2 animate-pulse rounded-full bg-slate-200'></h2>
                                <p className='capitalize text-slate-500 p-1 animate-pulse rounded-full bg-slate-200 py-2'></p>
                                <div className='flex gap-3'>
                                    <p className='text-red-600 font-medium p-1 animate-pulse rounded-full bg-slate-200 w-full py-2'></p>
                                    <p className='text-slate-500 line-through p-1 animate-pulse rounded-full bg-slate-200 w-full py-2'></p>
                                </div>
                                <button className='text-sm text-white px-3 rounded-full bg-slate-200 py-2 animate-pulse'></button>
                            </div>
                        </div>
                    ))
                ) : (
                    data.map((product, index) => (
                        <Link key={index} to={"/product/" + product?._id} className='w-full min-w-[280px] md:min-w-[300px] max-w-[280px] md:max-w-[300px] bg-white rounded-sm shadow' onClick={scrollTop}>
                            <div className='bg-slate-200 h-48 p-4 min-w-[280px] md:min-w-[145px] flex justify-center items-center'>
                                <img src={product?.productImage[0]} className='object-scale-down h-full hover:scale-110 transition-all mix-blend-multiply' alt={product?.productName} />
                            </div>
                            <div className='p-4 grid gap-3'>
                                <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black'>{product?.productName}</h2>
                                <p className='capitalize text-slate-500'>{product?.category}</p>
                                <div className='flex gap-3'>
                                    <p className='text-red-600 font-medium'>{displayINRCurrency(product?.sellingPrice)}</p>
                                    <p className='text-slate-500 line-through'>{displayINRCurrency(product?.price)}</p>
                                </div>
                                <div className='flex gap-2'>
                                    <button className='text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-0.5 rounded-full' onClick={(e) => handleAddToCart(e, product?._id)}>Add to Cart</button>
                                    <button className='text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-0.5 rounded-full' onClick={(e) => handleAddToWishlist(e, product?._id)}>Add to Wishlist</button>
                                </div>
                            </div>
                        </Link>

                    ))
                )
            }
        </div>
    );
}

export default VerticalCard;



//  fetch by productname 

