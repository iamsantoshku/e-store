
import React, { useEffect, useState } from 'react';
import SummaryApi from '../common';
import { Link } from 'react-router-dom';

const CategoryList1 = () => {
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const categoryLoading = new Array(16).fill(null);

  const fetchCategoryProduct = async () => {
    setLoading(true);
    const response = await fetch(SummaryApi.categoryProduct.url);
    const dataResponse = await response.json();
    setLoading(false);
    setCategoryProduct(dataResponse.data);
  };

  useEffect(() => {
    fetchCategoryProduct();
  }, []);

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-6'>Product Categories</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6'>
        {loading ? (
          categoryLoading.map((_, index) => (
            <div
              className='h-24 w-full bg-gray-300 rounded-lg animate-pulse'
              key={"categoryLoading" + index}
            ></div>
          ))
        ) : (
          categoryProduct.map((product) => (
            <Link
              to={`/product-category?category=${product?.category}`}
              className='cursor-pointer'
              key={product?.category}
            >
              <div className='bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-all'>
                <div className='w-full h-24 mb-4 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center'>
                  <img
                    src={product?.productImage[0]}
                    alt={product?.category}
                    className='h-full object-contain'
                  />
                </div>
                <div className='text-center'>
                  <p className='text-lg font-semibold capitalize'>{product?.category}</p>
                  <p className='text-sm text-gray-500'>{product?.productCount } products</p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default CategoryList1;
