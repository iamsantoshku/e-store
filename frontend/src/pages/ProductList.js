// import React, { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import SummaryApi from '../common';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchParams] = useSearchParams();
//   const category = searchParams.get('category');

//   const fetchProductsByCategory = async () => {
//     setLoading(true);
//     const response = await fetch(`${SummaryApi.products.url}?category=${category}`);
//     const dataResponse = await response.json();
//     setLoading(false);
//     setProducts(dataResponse.data);
//   };

//   useEffect(() => {
//     if (category) {
//       fetchProductsByCategory();
//     }
//   }, [category]);

//   return (
//     <div className='container mx-auto p-4'>
//       <h1 className='text-2xl font-bold capitalize mb-4'>{category} Products</h1>
//       {loading ? (
//         <div>Loading...</div>
//       ) : products.length ? (
//         <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
//           {products.map((product) => (
//             <div key={product.id} className='border p-4'>
//               <img
//                 src={product.productImage[0]}
//                 alt={product.name}
//                 className='h-40 w-full object-cover'
//               />
//               <h2 className='text-lg font-bold'>{product.name}</h2>
//               <p className='text-sm'>{product.description}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div>No products found in this category</div>
//       )}
//     </div>
//   );
// };

// export default ProductList;
