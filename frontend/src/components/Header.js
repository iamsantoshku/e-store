







// import React, { useContext, useState, useEffect, useRef } from 'react';
// import Logo from './Logo';
// import { GrSearch } from "react-icons/gr";
// import { FaRegCircleUser } from "react-icons/fa6";
// import { FaShoppingCart, FaHeart } from "react-icons/fa";
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import SummaryApi from '../common';
// import { toast } from 'react-toastify';
// import { setUserDetails } from '../store/userSlice';
// import ROLE from '../common/role';
// import Context from '../context';

// const Header = () => {
//   const user = useSelector(state => state?.user?.user);
//   const dispatch = useDispatch();
//   const [menuDisplay, setMenuDisplay] = useState(false);
//   const context = useContext(Context);
//   const navigate = useNavigate();
//   const searchInput = useLocation();
//   const URLSearch = new URLSearchParams(searchInput?.search);
//   const searchQuery = URLSearch.getAll("q");
//   const [search, setSearch] = useState(searchQuery);
//   const menuRef = useRef();

//   const userDropdownMenus = [
//     { label: "Dashboard", path: "/user-dashboard" },
//     { label: "Profile", path: "/user-dashboard/profile" },
//     { label: "Payments", path: "user-dashboard/payments" },
//     { label: "Orders", path: "/user-dashboard/orders" },
//   ];

//   const adminDropdownMenus = [
//     { label: "Admin Panel", path: "/admin-panel/all-products" },
//     ...userDropdownMenus,
//   ];

//   const dropdownMenus = user?.role === ROLE.ADMIN ? adminDropdownMenus : userDropdownMenus;

//   const handleLogout = async () => {
//     const fetchData = await fetch(SummaryApi.logout_user.url, {
//       method: SummaryApi.logout_user.method,
//       credentials: 'include'
//     });

//     const data = await fetchData.json();

//     if (data.success) {
//       toast.success(data.message);
//       dispatch(setUserDetails(null));
//       navigate("/");
//     }

//     if (data.error) {
//       toast.error(data.message);
//     }
//   };

//   const handleSearch = (e) => {
//     const { value } = e.target;
//     setSearch(value);

//     if (value) {
//       navigate(`/search?q=${value}`);
//     } else {
//       navigate("/search");
//     }
//   };

//   // Close menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setMenuDisplay(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <header className='h-16 shadow-md bg-white fixed w-full z-40'>
//       <div className='h-full container mx-auto flex items-center px-4 justify-between'>
//         <div className='logoname'>
//           <Link to={"/"}>
//             <h2>WebReak Global</h2>
//           </Link>
//         </div>

//         <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
//           <input
//             type='text'
//             placeholder='search product here...'
//             className='w-full outline-none'
//             onChange={handleSearch}
//             value={search}
//           />
//           <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
//             <GrSearch />
//           </div>
//         </div>

//         <div className='flex items-center gap-4 lg:gap-7'>
//           <div className='relative flex justify-center' ref={menuRef}>
//             {user?._id && (
//               <div
//                 className='text-3xl cursor-pointer relative flex justify-center'
//                 onClick={() => setMenuDisplay(prev => !prev)}
//               >
//                 {user?.profilePic ? (
//                   <img src={user?.profilePic} className='w-10 h-10 rounded-full' alt={user?.name} />
//                 ) : (
//                   <FaRegCircleUser />
//                 )}
//               </div>
//             )}

//             {menuDisplay && (
//               <div className='absolute bg-white right-0 top-12 w-40 md:w-48 shadow-lg rounded p-2'>
//                 <nav>
//                   {dropdownMenus.map((menu, index) => (
//                     <Link
//                       key={index}
//                       to={menu.path}
//                       className='block p-2 hover:bg-slate-100'
//                       onClick={() => setMenuDisplay(false)}
//                     >
//                       {menu.label}
//                     </Link>
//                   ))}
//                 </nav>
//               </div>
//             )}
//           </div>

//           <Link to={"/wishlist"} className='text-2xl relative'>
//             <span>
//               <FaHeart />
//             </span>
//             {context?.wishlistProductCount > 0 && (
//               <span className='absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full'></span>
//             )}
//           </Link>

//           {user?._id && (
//             <Link to={"/cart"} className='text-2xl relative'>
//               <span><FaShoppingCart /></span>
//               <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
//                 <p className='text-sm'>{context?.cartProductCount}</p>
//               </div>
//             </Link>
//           )}

//           <div>
//             {user?._id ? (
//               <button onClick={handleLogout} className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'>Logout</button>
//             ) : (
//               <Link to={"/login"} className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'>Login</Link>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;





import React, { useContext, useState, useEffect, useRef } from 'react';
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { setUserDetails } from '../store/userSlice';
import ROLE from '../common/role';
import Context from '../context';

const Header = () => {
  const user = useSelector(state => state?.user?.user);
  const dispatch = useDispatch();
  const [menuDisplay, setMenuDisplay] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const context = useContext(Context);
  const navigate = useNavigate();
  const searchInput = useLocation();
  const URLSearch = new URLSearchParams(searchInput?.search);
  const searchQuery = URLSearch.getAll("q");
  const [search, setSearch] = useState(searchQuery);
  const menuRef = useRef();

  const userDropdownMenus = [
    { label: "Dashboard", path: "/user-dashboard" },
    { label: "Profile", path: "/user-dashboard/profile" },
    { label: "Payments", path: "user-dashboard/payments" },
    { label: "Orders", path: "/user-dashboard/orders" },
    { label: "Cart", path: "/cart" },
  ];

  const adminDropdownMenus = [
    { label: "Admin Panel", path: "/admin-panel/all-products" },
    ...userDropdownMenus,
  ];

  const dropdownMenus = user?.role === ROLE.ADMIN ? adminDropdownMenus : userDropdownMenus;

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: 'include'
    });

    const data = await fetchData.json();

    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
      navigate("/");
    }

    if (data.error) {
      toast.error(data.message);
    }
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);

    if (value) {
      navigate(`/search?q=${value}`);
    } else {
      navigate("/search");
    }
  };

  const handleToggleMobileSearch = () => {
    setShowMobileSearch(prev => !prev);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuDisplay(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className='h-16 shadow-md bg-white fixed w-full z-40'>
      <div className='h-full container mx-auto flex items-center px-4 justify-between'>
        <div className='logoname'>
          <Link to={"/"}>
            <h2>WebReak</h2>
          </Link>
        </div>

        {/** Desktop search bar */}
        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
          <input
            type='text'
            placeholder='search product here...'
            className='w-full outline-none'
            onChange={handleSearch}
            value={search}
          />
          <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
            <GrSearch />
          </div>
        </div>

        {/** Mobile search bar */}
        <div className='lg:hidden'>
          {showMobileSearch ? (
            <div className='flex items-center w-full border rounded-full focus-within:shadow pl-2'>
              <input
                type='text'
                placeholder='Search...'
                className='w-full outline-none'
                onChange={handleSearch}
                value={search}
              />
              <button onClick={handleToggleMobileSearch} className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
                <GrSearch />
              </button>
            </div>
          ) : (
            <button onClick={handleToggleMobileSearch} className='text-2xl'>
              <GrSearch />
            </button>
          )}
        </div>

        <div className='flex items-center gap-4 lg:gap-7'>
          <div className='relative flex justify-center' ref={menuRef}>
            {user?._id && (
              <div
                className='text-3xl cursor-pointer relative flex justify-center'
                onClick={() => setMenuDisplay(prev => !prev)}
              >
                {user?.profilePic ? (
                  <img src={user?.profilePic} className='w-10 h-10 rounded-full' alt={user?.name} />
                ) : (
                  <FaRegCircleUser />
                )}
              </div>
            )}

            {menuDisplay && (
              <div className='absolute bg-white right-0 top-12 w-40 md:w-48 shadow-lg rounded p-2'>
                <nav>
                  {dropdownMenus.map((menu, index) => (
                    <Link
                      key={index}
                      to={menu.path}
                      className='block p-2 hover:bg-slate-100'
                      onClick={() => setMenuDisplay(false)}
                    >
                      {menu.label}
                    </Link>
                  ))}
                  {user?._id && (
                    <button
                      onClick={handleLogout}
                      className='block w-full text-left p-2 hover:bg-slate-100'
                    >
                      Logout
                    </button>
                  )}
                </nav>
              </div>
            )}
          </div>

          {/** Wishlist Icon */}
          <Link to={"/wishlist"} className='text-2xl relative border border-black rounded-full p-1 text-black bg-white'>
            <span>
              <FaHeart />
            </span>
            {context?.wishlistProductCount > 0 && (
              <span className='absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full'></span>
            )}
          </Link>

          {user?._id && (
            <Link to={"/cart"} className='text-2xl relative'>
              <span><FaShoppingCart /></span>
              <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                <p className='text-sm'>{context?.cartProductCount}</p>
              </div>
            </Link>
          )}

          <div>
            {!user?._id && (
              <Link to={"/login"} className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'>Login</Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;





