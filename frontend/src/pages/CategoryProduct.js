






// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import productCategory from '../helpers/productCategory';
// import VerticalCard from '../components/VerticalCard';
// import SummaryApi from '../common';

// const CategoryProduct = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const urlSearch = new URLSearchParams(location.search);
//   const urlCategoryListinArray = urlSearch.getAll('category');

//   // Create an object to track selected categories based on URL.
//   const urlCategoryListObject = {};
//   urlCategoryListinArray.forEach((el) => {
//     urlCategoryListObject[el] = true;
//   });

//   const [selectCategory, setSelectCategory] = useState(urlCategoryListObject);
//   const [filterCategoryList, setFilterCategoryList] = useState([]);
//   const [sortBy, setSortBy] = useState('');

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(SummaryApi.filterProduct.url, {
//         method: SummaryApi.filterProduct.method,
//         headers: {
//           'content-type': 'application/json',
//         },
//         body: JSON.stringify({
//           category: filterCategoryList,
//         }),
//       });
//       const dataResponse = await response.json();
//       setData(dataResponse?.data || []);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSelectCategory = (e) => {
//     const { value, checked } = e.target;

//     setSelectCategory((prev) => ({
//       ...prev,
//       [value]: checked,
//     }));
//   };

//   // Update the filtered category list and navigate to the updated URL.
//   useEffect(() => {
//     const arrayOfCategory = Object.keys(selectCategory)
//       .filter((categoryKey) => selectCategory[categoryKey]);

//     setFilterCategoryList(arrayOfCategory);

//     // Format the query parameters for the URL.
//     const queryString = arrayOfCategory.map((el) => `category=${el}`).join('&');
//     navigate(`/product-category?${queryString}`);
//   }, [selectCategory]);

//   // Fetch data whenever the filtered category list updates.
//   useEffect(() => {
//     fetchData();
//   }, [filterCategoryList]);

//   const handleOnChangeSortBy = (e) => {
//     const { value } = e.target;
//     setSortBy(value);

//     if (value === 'asc') {
//       setData((prev) => [...prev].sort((a, b) => a.sellingPrice - b.sellingPrice));
//     }

//     if (value === 'dsc') {
//       setData((prev) => [...prev].sort((a, b) => b.sellingPrice - a.sellingPrice));
//     }
//   };

//   return (
//     <div className='container mx-auto p-4'>
//       {/* Desktop version */}
//       <div className='hidden lg:grid grid-cols-[200px,1fr]'>
//         {/* Left side */}
//         <div className='bg-white p-2 min-h-[calc(100vh-120px)] overflow-y-scroll'>
//           {/* Sort by */}
//           <div className=''>
//             <h3 className='text-base uppercase font-medium text-slate-500 border-b pb-1 border-slate-300'>
//               Sort by
//             </h3>
//             <form className='text-sm flex flex-col gap-2 py-2'>
//               <div className='flex items-center gap-3'>
//                 <input
//                   type='radio'
//                   name='sortBy'
//                   checked={sortBy === 'asc'}
//                   onChange={handleOnChangeSortBy}
//                   value='asc'
//                 />
//                 <label>Price - Low to High</label>
//               </div>
//               <div className='flex items-center gap-3'>
//                 <input
//                   type='radio'
//                   name='sortBy'
//                   checked={sortBy === 'dsc'}
//                   onChange={handleOnChangeSortBy}
//                   value='dsc'
//                 />
//                 <label>Price - High to Low</label>
//               </div>
//             </form>
//           </div>

//           {/* Filter by */}
//           <div className=''>
//             <h3 className='text-base uppercase font-medium text-slate-500 border-b pb-1 border-slate-300'>
//               Category
//             </h3>
//             <form className='text-sm flex flex-col gap-2 py-2'>
//               {productCategory.map((categoryName, index) => (
//                 <div className='flex items-center gap-3' key={index}>
//                   <input
//                     type='checkbox'
//                     name='category'
//                     checked={selectCategory[categoryName?.value] || false}
//                     value={categoryName?.value}
//                     id={categoryName?.value}
//                     onChange={handleSelectCategory}
//                   />
//                   <label htmlFor={categoryName?.value}>{categoryName?.label}</label>
//                 </div>
//               ))}
//             </form>
//           </div>
//         </div>

//         {/* Right side (product display) */}
//         <div className='px-4'>
//           <p className='font-medium text-slate-800 text-lg my-2'>
//             Search Results: {data.length}
//           </p>
//           <div className='min-h-[calc(100vh-120px)] overflow-y-scroll max-h-[calc(100vh-120px)]'>
//             {data.length !== 0 && !loading ? (
//               <VerticalCard data={data} loading={loading} />
//             ) : (
//               <p>No products found.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryProduct;





// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import productCategory from '../helpers/productCategory';
// import VerticalCard from '../components/VerticalCard';
// import SummaryApi from '../common';

// const CategoryProduct = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const urlSearch = new URLSearchParams(location.search);
//   const urlCategoryListinArray = urlSearch.getAll('category');

//   // Create an object to track selected categories based on URL.
//   const urlCategoryListObject = {};
//   urlCategoryListinArray.forEach((el) => {
//     urlCategoryListObject[el] = true;
//   });

//   const [selectCategory, setSelectCategory] = useState(urlCategoryListObject);
//   const [filterCategoryList, setFilterCategoryList] = useState([]);
//   const [sortBy, setSortBy] = useState('');

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(SummaryApi.filterProduct.url, {
//         method: SummaryApi.filterProduct.method,
//         headers: {
//           'content-type': 'application/json',
//         },
//         body: JSON.stringify({
//           category: filterCategoryList,
//         }),
//       });
//       const dataResponse = await response.json();
//       setData(dataResponse?.data || []);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSelectCategory = (e) => {
//     const { value, checked } = e.target;
//     setSelectCategory((prev) => ({
//       ...prev,
//       [value]: checked,
//     }));
//   };

//   // Update the filtered category list and navigate to the updated URL.
//   useEffect(() => {
//     const arrayOfCategory = Object.keys(selectCategory)
//       .filter((categoryKey) => selectCategory[categoryKey]);

//     setFilterCategoryList(arrayOfCategory);

//     // Format the query parameters for the URL.
//     const queryString = arrayOfCategory.map((el) => `category=${el}`).join('&');
//     navigate(`/product-category?${queryString}`);
//   }, [selectCategory]);

//   // Fetch data whenever the filtered category list updates.
//   useEffect(() => {
//     fetchData();
//   }, [filterCategoryList]);

//   const handleOnChangeSortBy = (e) => {
//     const { value } = e.target;
//     setSortBy(value);

//     if (value === 'asc') {
//       setData((prev) => [...prev].sort((a, b) => a.sellingPrice - b.sellingPrice));
//     }

//     if (value === 'dsc') {
//       setData((prev) => [...prev].sort((a, b) => b.sellingPrice - a.sellingPrice));
//     }
//   };

//   return (
//     <div className='container mx-auto p-4'>
//       {/* Mobile version */}
//       <div className='lg:hidden'>
//         <button
//           className='bg-blue-600 text-white px-4 py-2 rounded mb-4'
//           onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
//         >
//           {isMobileFilterOpen ? 'Hide Filters' : 'Show Filters'}
//         </button>
//         {isMobileFilterOpen && (
//           <div className='bg-white p-2 border rounded mb-4'>
//             {/* Sort by */}
//             <div>
//               <h3 className='text-base uppercase font-medium text-slate-500 border-b pb-1 border-slate-300'>
//                 Sort by
//               </h3>
//               <form className='text-sm flex flex-col gap-2 py-2'>
//                 <div className='flex items-center gap-3'>
//                   <input
//                     type='radio'
//                     name='sortBy'
//                     checked={sortBy === 'asc'}
//                     onChange={handleOnChangeSortBy}
//                     value='asc'
//                   />
//                   <label>Price - Low to High</label>
//                 </div>
//                 <div className='flex items-center gap-3'>
//                   <input
//                     type='radio'
//                     name='sortBy'
//                     checked={sortBy === 'dsc'}
//                     onChange={handleOnChangeSortBy}
//                     value='dsc'
//                   />
//                   <label>Price - High to Low</label>
//                 </div>
//               </form>
//             </div>

//             {/* Filter by */}
//             <div>
//               <h3 className='text-base uppercase font-medium text-slate-500 border-b pb-1 border-slate-300'>
//                 Category
//               </h3>
//               <form className='text-sm flex flex-col gap-2 py-2'>
//                 {productCategory.map((categoryName, index) => (
//                   <div className='flex items-center gap-3' key={index}>
//                     <input
//                       type='checkbox'
//                       name='category'
//                       checked={selectCategory[categoryName?.value] || false}
//                       value={categoryName?.value}
//                       id={categoryName?.value}
//                       onChange={handleSelectCategory}
//                     />
//                     <label htmlFor={categoryName?.value}>{categoryName?.label}</label>
//                   </div>
//                 ))}
//               </form>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Desktop version */}
//       <div className='hidden lg:grid grid-cols-[200px,1fr]'>
//         {/* Left side */}
//         <div className='bg-white p-2 min-h-[calc(100vh-120px)] overflow-y-scroll'>
//           {/* Sort by */}
//           <div>
//             <h3 className='text-base uppercase font-medium text-slate-500 border-b pb-1 border-slate-300'>
//               Sort by
//             </h3>
//             <form className='text-sm flex flex-col gap-2 py-2'>
//               <div className='flex items-center gap-3'>
//                 <input
//                   type='radio'
//                   name='sortBy'
//                   checked={sortBy === 'asc'}
//                   onChange={handleOnChangeSortBy}
//                   value='asc'
//                 />
//                 <label>Price - Low to High</label>
//               </div>
//               <div className='flex items-center gap-3'>
//                 <input
//                   type='radio'
//                   name='sortBy'
//                   checked={sortBy === 'dsc'}
//                   onChange={handleOnChangeSortBy}
//                   value='dsc'
//                 />
//                 <label>Price - High to Low</label>
//               </div>
//             </form>
//           </div>

//           {/* Filter by */}
//           <div>
//             <h3 className='text-base uppercase font-medium text-slate-500 border-b pb-1 border-slate-300'>
//               Category
//             </h3>
//             <form className='text-sm flex flex-col gap-2 py-2'>
//               {productCategory.map((categoryName, index) => (
//                 <div className='flex items-center gap-3' key={index}>
//                   <input
//                     type='checkbox'
//                     name='category'
//                     checked={selectCategory[categoryName?.value] || false}
//                     value={categoryName?.value}
//                     id={categoryName?.value}
//                     onChange={handleSelectCategory}
//                   />
//                   <label htmlFor={categoryName?.value}>{categoryName?.label}</label>
//                 </div>
//               ))}
//             </form>
//           </div>
//         </div>

//         {/* Right side (product display) */}
//         <div className='px-4'>
//           <p className='font-medium text-slate-800 text-lg my-2'>
//             Search Results: {data.length}
//           </p>
//           <div className='min-h-[calc(100vh-120px)] overflow-y-scroll max-h-[calc(100vh-120px)]'>
//             {data.length !== 0 && !loading ? (
//               <VerticalCard data={data} loading={loading} />
//             ) : (
//               <p>No products found.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryProduct;





import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import productCategory from '../helpers/productCategory';
import VerticalCard from '../components/VerticalCard';
import SummaryApi from '../common';

const CategoryProduct = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const urlSearch = new URLSearchParams(location.search);
  const urlCategoryListinArray = urlSearch.getAll('category');

  // Create an object to track selected categories based on URL.
  const urlCategoryListObject = {};
  urlCategoryListinArray.forEach((el) => {
    urlCategoryListObject[el] = true;
  });

  const [selectCategory, setSelectCategory] = useState(urlCategoryListObject);
  const [filterCategoryList, setFilterCategoryList] = useState([]);
  const [sortBy, setSortBy] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(SummaryApi.filterProduct.url, {
        method: SummaryApi.filterProduct.method,
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          category: filterCategoryList,
        }),
      });
      const dataResponse = await response.json();
      setData(dataResponse?.data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectCategory = (e) => {
    const { value, checked } = e.target;

    setSelectCategory((prev) => ({
      ...prev,
      [value]: checked,
    }));
  };

  // Update the filtered category list and navigate to the updated URL.
  useEffect(() => {
    const arrayOfCategory = Object.keys(selectCategory)
      .filter((categoryKey) => selectCategory[categoryKey]);

    setFilterCategoryList(arrayOfCategory);

    // Format the query parameters for the URL.
    const queryString = arrayOfCategory.map((el) => `category=${el}`).join('&');
    navigate(`/product-category?${queryString}`);
  }, [selectCategory]);

  // Fetch data whenever the filtered category list updates.
  useEffect(() => {
    fetchData();
  }, [filterCategoryList]);

  const handleOnChangeSortBy = (e) => {
    const { value } = e.target;
    setSortBy(value);

    if (value === 'asc') {
      setData((prev) => [...prev].sort((a, b) => a.sellingPrice - b.sellingPrice));
    }

    if (value === 'dsc') {
      setData((prev) => [...prev].sort((a, b) => b.sellingPrice - a.sellingPrice));
    }
  };

  return (
    <div className='container mx-auto p-4'>
      {/* Mobile and Desktop version */}
      <div className='grid grid-cols-1 lg:grid-cols-[200px,1fr] gap-4'>
        {/* Left side (Filters) */}
        <div className='bg-white p-2 lg:min-h-[calc(100vh-120px)] overflow-y-scroll'>
          {/* Sort by */}
          <div className=''>
            <h3 className='text-base uppercase font-medium text-slate-500 border-b pb-1 border-slate-300'>
              Sort by
            </h3>
            <form className='text-sm flex flex-col gap-2 py-2'>
              <div className='flex items-center gap-3'>
                <input
                  type='radio'
                  name='sortBy'
                  checked={sortBy === 'asc'}
                  onChange={handleOnChangeSortBy}
                  value='asc'
                />
                <label>Price - Low to High</label>
              </div>
              <div className='flex items-center gap-3'>
                <input
                  type='radio'
                  name='sortBy'
                  checked={sortBy === 'dsc'}
                  onChange={handleOnChangeSortBy}
                  value='dsc'
                />
                <label>Price - High to Low</label>
              </div>
            </form>
          </div>

          {/* Filter by */}
          <div className=''>
            <h3 className='text-base uppercase font-medium text-slate-500 border-b pb-1 border-slate-300'>
              Category
            </h3>
            <form className='text-sm flex flex-col gap-2 py-2'>
              {productCategory.map((categoryName, index) => (
                <div className='flex items-center gap-3' key={index}>
                  <input
                    type='checkbox'
                    name='category'
                    checked={selectCategory[categoryName?.value] || false}
                    value={categoryName?.value}
                    id={categoryName?.value}
                    onChange={handleSelectCategory}
                  />
                  <label htmlFor={categoryName?.value}>{categoryName?.label}</label>
                </div>
              ))}
            </form>
          </div>
        </div>

        {/* Right side (Product display) */}
        <div className='px-4'>
          <p className='font-medium text-slate-800 text-lg my-2'>
            Search Results: {data.length}
          </p>
          <div className='min-h-[calc(100vh-120px)] overflow-y-scroll max-h-[calc(100vh-120px)]'>
            {data.length !== 0 && !loading ? (
              <VerticalCard data={data} loading={loading} />
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
