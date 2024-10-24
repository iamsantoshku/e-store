


// import React, { useEffect, useState, useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { FaHeart } from 'react-icons/fa';
// import fetchWishlistProducts from '../helpers/fetchWishlistProducts'; // Helper to fetch wishlist products
// import displayINRCurrency from '../helpers/displayCurrency';
// import Context from '../context';
// import { toast } from 'react-toastify';

// const Wish = () => {
//     const [wishlistData, setWishlistData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const loadingList = new Array(13).fill(null);
//     const { fetchUserWishlist } = useContext(Context);

//     const fetchWishlistData = async () => {
//         setLoading(true);
//         const response = await fetchWishlistProducts();
//         setLoading(false);
//         if (response.success) {
//             setWishlistData(response.data);
//         } else {
//             toast.error('Failed to load wishlist');
//         }
//     };

//     useEffect(() => {
//         fetchWishlistData();
//     }, []);

//     return (
//         <div className='container mx-auto px-4 my-6'>
//             <h2 className='text-2xl font-semibold py-4'>My Wishlist</h2>

//             <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
//                 {loading ? (
//                     loadingList.map((_, index) => (
//                         <div key={index} className='bg-white shadow rounded p-4 animate-pulse'>
//                             <div className='bg-slate-200 h-72 rounded mb-4'></div>
//                             <div className='h-4 bg-slate-200 rounded mb-2'></div>
//                             <div className='h-4 bg-slate-200 rounded mb-2'></div>
//                             <div className='h-4 bg-slate-200 rounded'></div>
//                         </div>
//                     ))
//                 ) : wishlistData.length > 0 ? (
//                     wishlistData.map((product, index) => (
//                         <div key={index} className='bg-white shadow rounded-sm'>
//                             <Link to={`/product/${product?.productId?._id}`} className='block'>
//                                 <img
//                                     src={product?.productId?.productImage[0]}
//                                     alt={product?.productId?.productName}
//                                     className='w-full h-72 object-cover rounded-t-sm'
//                                 />
//                             </Link>
//                             <div className='p-4'>
//                                 <h3 className='text-lg font-medium'>{product?.productId?.productName}</h3>
//                                 <p className='text-slate-500'>{product?.productId?.category}</p>
//                                 <div className='flex justify-between items-center mt-2'>
//                                     <p className='text-red-600 font-medium'>
//                                         {displayINRCurrency(product?.productId?.sellingPrice)}
//                                     </p>
//                                     <p className='line-through text-slate-500'>
//                                         {displayINRCurrency(product?.productId?.price)}
//                                     </p>
//                                 </div>
//                                 <button
//                                     className='mt-4 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-full flex items-center'
//                                     onClick={() => toast.info('Remove from wishlist feature coming soon!')}
//                                 >
//                                     <FaHeart className='mr-2 text-white' />
//                                     Remove from Wishlist
//                                 </button>
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     <p className='text-center col-span-full text-slate-500'>
//                         Your wishlist is empty. Start adding some products!
//                     </p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Wish;







import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import fetchWishlistProducts from '../helpers/fetchWishlistProducts'; // Helper to fetch wishlist products
import displayINRCurrency from '../helpers/displayCurrency';
import Context from '../context';
import { toast } from 'react-toastify';
import SummaryApi from '../common';
// import addToCart from '../helpers/addToCart';

// import fetchWishlistProducts from '../helpers/fetchWishlistProducts';
// import removeFromWishlist from '../helpers/removeFromWishlist'; // Import the removeFromWishlist function

const Wish = () => {
    const [wishlistData, setWishlistData] = useState([]);
    const [loading, setLoading] = useState(true);
    const loadingList = new Array(13).fill(null);
    const { fetchUserWishlist } = useContext(Context);
    // const { fetchUserAddToCart, fetchUserAddToWishlist, user } = useContext(Context);

    const fetchWishlistData = async () => {
        setLoading(true);
        const response = await fetchWishlistProducts();
        setLoading(false);
        if (response.success) {
            setWishlistData(response.data);
        } else {
            toast.error('Failed to load wishlist');
        }
    };

    useEffect(() => {
        fetchWishlistData();
    }, []);

    

    // const handleAddToCart = async (e, id) => {
    //     e.stopPropagation();
    //     await addToCart(e, id);
    //     fetchUserAddToCart();
    // };

    const deleteFromWishlist = async (id) => {
        try {
            const response = await fetch(SummaryApi.removetowish.url, {
                method: SummaryApi.removetowish.method,
                credentials: 'include',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    _id: id,
                }),
            });
    
            const responseData = await response.json();
            if (responseData.success) {
                // fetchWishlistProducts();
                fetchWishlistData();
                
                // Context.fetchUserWishlist(); // Replace with your context method to refresh wishlist data
            }
        } catch (error) {
            console.error('Error deleting wishlist product:', error);
        }
    };
    

    return (
        <div className='container mx-auto px-4 my-6'>
            <h2 className='text-2xl font-semibold py-4'>My Wishlist</h2>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
                {loading ? (
                    loadingList.map((_, index) => (
                        <div key={index} className='bg-white shadow rounded p-4 animate-pulse'>
                            <div className='bg-slate-200 h-72 rounded mb-4'></div>
                            <div className='h-4 bg-slate-200 rounded mb-2'></div>
                            <div className='h-4 bg-slate-200 rounded mb-2'></div>
                            <div className='h-4 bg-slate-200 rounded'></div>
                        </div>
                    ))
                ) : wishlistData.length > 0 ? (
                    wishlistData.map((product, index) => (
                        <div key={index} className='bg-white shadow rounded-sm'>
                            <Link to={`/product/${product?.productId?._id}`} className='block'>
                                <img
                                    src={product?.productId?.productImage[0]}
                                    alt={product?.productId?.productName}
                                    className='w-full h-72 object-cover rounded-t-sm'
                                />
                            </Link>
                            <div className='p-4'>
                                <h3 className='text-lg font-medium'>{product?.productId?.productName}</h3>
                                <p className='text-slate-500'>{product?.productId?.category}</p>
                                <div className='flex justify-between items-center mt-2'>
                                    <p className='text-red-600 font-medium'>
                                        {displayINRCurrency(product?.productId?.sellingPrice)}
                                    </p>
                                    <p className='line-through text-slate-500'>
                                        {displayINRCurrency(product?.productId?.price)}
                                    </p>
                                </div>
                                <button
                                    className='mt-4 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-full flex items-center'
                                    onClick={(e) => deleteFromWishlist(product?._id)} // Use the handler to remove the product
                                >
                                    <FaHeart className='mr-2 text-white' />
                                    Remove from Wishlist
                                </button>
                                {/* <button 
                                        className='text-sm md:px-16 px-3 md:py-0.5 py-1 bg-red-600 hover:bg-red-700 text-white rounded-full w-full md:w-auto' 
                                        onClick={(e) => handleAddToCart(e, product?._id)}
                                    >
                                        Add to Cart
                                    </button> */}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='text-center col-span-full text-slate-500'>
                        Your wishlist is empty. Start adding some products!
                    </p>
                )}
            </div>
        </div>
    );
};

export default Wish;
