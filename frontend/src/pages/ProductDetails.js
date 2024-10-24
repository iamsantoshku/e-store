
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SummaryApi from '../common';
import { FaStar, FaStarHalf } from "react-icons/fa";
import displayINRCurrency from '../helpers/displayCurrency';
import VerticalCardProduct from '../components/VerticalCardProduct';
import CategroyWiseProductDisplay from '../components/CategoryWiseProductDisplay';
import addToCart from '../helpers/addToCart';
import Context from '../context';
import SizeSelector from '../components/SizeSelector';  // Import SizeSelector component
import addToWishlist from '../helpers/addToWishlist';
import { toast } from 'react-toastify';
import { Colors } from 'chart.js';

const ProductDetails = () => {
  const [data, setData] = useState({
    productName: "",
    brandName: "",
    category: "",
    productImage: [],
    description: "",
    price: "",
    sellingPrice: "",
    availableSizes: [],  
    stock: '',   
    colors: '',
  });
  const [selectedSize, setSelectedSize] = useState("");  // To keep track of selected size
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const productImageListLoading = new Array(4).fill(null);
  const [activeImage, setActiveImage] = useState("");
  const [zoomImageCoordinate, setZoomImageCoordinate] = useState({ x: 0, y: 0 });
  const [zoomImage, setZoomImage] = useState(false);
  const { fetchUserAddToCart } = useContext(Context);
  const [selectedColor, setSelectedColor] = useState("");
  const navigate = useNavigate();

  const fetchProductDetails = async () => {
    setLoading(true);
    const response = await fetch(SummaryApi.productDetails.url, {
      method: SummaryApi.productDetails.method,
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        productId: params?.id
      })
    });
    setLoading(false);
    const dataReponse = await response.json();
    setData(dataReponse?.data);
    setActiveImage(dataReponse?.data?.productImage[0]);
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

// const handle = async(req, res)=>{

// }

  useEffect(() => {
    fetchProductDetails();
  }, [params]);

  const handleMouseEnterProduct = (imageURL) => {
    setActiveImage(imageURL);
  };

  const handleZoomImage = useCallback((e) => {
    setZoomImage(true);
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    setZoomImageCoordinate({ x, y });
  }, [zoomImageCoordinate]);

  const handleLeaveImageZoom = () => {
    setZoomImage(false);
  };

  const handleAddToCart = async (e, id) => {
    await addToCart(e, id);
    fetchUserAddToCart();
  };

  const handleBuyProduct = async (e, id) => {
    await addToCart(e, id);
    fetchUserAddToCart();
    navigate("/cart");
  };

  return (
    <div className='container mx-auto p-4'>
      <div className='min-h-[200px] flex flex-col lg:flex-row gap-4'>
        {/* Product Image */}
        <div className='h-96 flex flex-col lg:flex-row-reverse gap-4'>
          {/* <div className='h-[350px] w-[300px] lg:h-96 lg:w-96 bg-slate-200 relative p-2'> */}
          <div className='h-[450px] w-[400px] lg:h-[500px] lg:w-[450px] bg-slate-200 relative p-2'>
            <img src={activeImage} className='h-full w-full object-scale-down mix-blend-multiply' onMouseMove={handleZoomImage} onMouseLeave={handleLeaveImageZoom} />
            {/* Product zoom */}
            {zoomImage && (
              <div className='hidden lg:block absolute min-w-[500px] overflow-hidden min-h-[450px] bg-slate-200 p-1 -right-[510px] top-0'>
                <div
                  className='w-full h-full min-h-[400px] min-w-[500px] mix-blend-multiply scale-150'
                  style={{
                    background: `url(${activeImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: `${zoomImageCoordinate.x * 100}% ${zoomImageCoordinate.y * 100}% `
                  }}>
                </div>
              </div>
            )}
          </div>

          <div className='h-full'>
            {loading ? (
              <div className='flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full'>
                {productImageListLoading.map((el, index) => (
                  <div className='h-20 w-20 bg-slate-200 rounded animate-pulse' key={"loadingImage" + index}></div>
                ))}
              </div>
            ) : (
              <div className='flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full'>
                {data?.productImage?.map((imgURL, index) => (
                  <div className='h-20 w-20 bg-slate-200 rounded p-1' key={imgURL}>
                    <img src={imgURL} className='w-full h-full object-scale-down mix-blend-multiply cursor-pointer' onMouseEnter={() => handleMouseEnterProduct(imgURL)} onClick={() => handleMouseEnterProduct(imgURL)} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Product details */}
        {loading ? (
          <div className='grid gap-7 w-full'>
           
          </div>
        ) : (
          <div className='flex flex-col gap-1 img'>
            <p className='bg-red-200 text-red-600 px-2 rounded-full inline-block w-fit'>{data?.brandName}</p>
            <h2 className='text-2xl lg:text-4xl font-medium'>{data?.productName}</h2>
            <p className='capitalize text-slate-400'>{data?.category}</p>

            <div className='text-red-600 flex items-center gap-1'>
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf />
            </div>

            <div className='flex items-center gap-2 text-2xl lg:text-3xl font-medium my-1'>
              <p className='text-red-600'>{displayINRCurrency(data.sellingPrice)}</p>
              <p className='text-slate-400 line-through'>{displayINRCurrency(data.price)}</p>
            </div>




           

{Array.isArray(data.colors) && (
      <div className="colors my-2">
        <p className="font-medium">Available Colors:</p>
        <div className="flex space-x-2">
          {data.colors.map((colr, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded focus:outline-none ${
                selectedColor === colr.trim()
                  ? "border-2 border-blue-500"  // Highlight the selected color button
                  : "border"
              }`}
              style={{ backgroundColor: colr.trim() }}
              onClick={() => setSelectedColor(colr.trim())}
            >
              {colr.trim()}
            </button>
          ))}
        </div>
        {selectedColor && (
          <p className="mt-2">Selected Color: <span className="font-semibold">{selectedColor}</span></p>
        )}
      </div>
    )}






            {/* Size Selector Component */}
            
            {/* Size Selector */}

             {data.availableSizes.length > 0 && (
              <SizeSelector 
                availableSizes={data.availableSizes} 
                selectedSize={selectedSize} 
                setSelectedSize={setSelectedSize} 
              />
            )}
            <p className='text-lg'>Stock: {data.stock}</p>

            <div className='flex items-center gap-3 my-2'>
              <button className='border-2 border-red-600 rounded px-3 py-1 min-w-[120px] text-red-600 font-medium hover:bg-red-600 hover:text-white' onClick={(e) => handleBuyProduct(e, data?._id)}>Buy</button>
              <button className='border-2 border-red-600 rounded px-3 py-1 min-w-[120px] text-red-600 font-medium hover:bg-red-600 hover:text-white' onClick={(e) => handleAddToWishlist(e, data?._id)}>Add TO wishList</button>
              <button className='border-2 border-red-600 rounded px-3 py-1 min-w-[120px] font-medium text-white bg-red-600 hover:text-red-600 hover:bg-white' onClick={(e) => handleAddToCart(e, data?._id)}>Add To Cart</button>
            </div>

            <div>
              <p className='text-slate-600 font-medium my-1'>Description: </p>
              <p>{data?.description}</p>
            </div>
          </div>
        )}
      </div>

      {/* Category-wise product display */}
      {/* {  data.category && <CategroyWiseProductDisplay category={data?.category} heading={"Recommended Products"} />} */}

      {data.category && (
  <div className="mt-[9vw]">
    <CategroyWiseProductDisplay category={data?.category} heading={"Recommended Products"} />
  </div>
)}

    </div>
  );
};

export default ProductDetails;








