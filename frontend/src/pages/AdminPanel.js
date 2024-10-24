// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { NavLink, Outlet, useNavigate } from 'react-router-dom';
// import ROLE from '../common/role';
// import { Layout, Menu } from 'antd';
// import { ShopOutlined, OrderedListOutlined, UserOutlined, DashboardOutlined, FileDoneOutlined } from '@ant-design/icons';
// import UploadProduct from '../components/UploadProduct';
// import SummaryApi from '../common';
// // import {} from '../assest/download.jpg'
// import companylogo from '../assest/download.jpeg'
// import Dasboard from './Dasboard';
// // import CategoryList1 from '../components/CategoryList1';

// // Import the company logo
// // import companyLogo from '../assets/companyLogo.png';  // Make sure to adjust the path to your logo

// const { Sider, Content } = Layout;
// const { SubMenu } = Menu;

// const AdminPanel = () => {
//   const user = useSelector(state => state?.user?.user);
//   const navigate = useNavigate();
  
//   // State for handling product upload
//   const [openUploadProduct, setOpenUploadProduct] = useState(false);
//   const [allProduct, setAllProduct] = useState([]);

//   useEffect(() => {
//     if (user?.role !== ROLE.ADMIN) {
//       navigate("/");
//     }
//     fetchAllProduct(); // Fetch all products when the component mounts
//   }, [user]);

//   // Fetch all products
//   const fetchAllProduct = async () => {
//     const response = await fetch(SummaryApi.allProduct.url);
//     const dataResponse = await response.json();
//     console.log("product data", dataResponse);
//     setAllProduct(dataResponse?.data || []);
//   };

//   return (
//     <div className='min-h-[calc(100vh-120px)] md:flex hidden'>
//       <Layout style={{ minHeight: '100vh' }}>
//         <Sider collapsible className='bg-red' width={220}>
          
//           {/* Company logo and name section */}
//           <div className='h-32 flex justify-center items-center flex-col p-4'>
//             <div className='w-20 h-20 flex justify-center items-center mb-2'>
//               {/* Display the company logo */}
//               <img src={companylogo} alt="Company Logo" className='w-full h-full object-cover rounded-full' />
//             </div>
//             {/* Company name */}
//             <NavLink to='/'>
//             <p className=' color rounded-lg bg-white capitalize text-lg font-semibold'>Company Name</p>
//             </NavLink>
//           </div>

//           {/*** navigation ***/}
//           <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} className='p-2'>
//             <SubMenu key="dashboard" icon={<DashboardOutlined />} title="Dashboard">
//               <Menu.Item key="1">
//                 <NavLink to="/admin-panel/home1">Home 01</NavLink>
//               </Menu.Item>
//               <Menu.Item key="2">
//                 <NavLink to="/admin-panel/home2">Home 02</NavLink>
//               </Menu.Item>
//               <Menu.Item key="3">
//                 <NavLink to="/home-03">Home 03</NavLink>
//               </Menu.Item>
//             </SubMenu>

//             <SubMenu key="sub1" icon={<ShopOutlined />} title="E-commerce">
//               <Menu.Item key="4">
//                 <NavLink to="all-products">All Products</NavLink>
//               </Menu.Item>
//               <Menu.Item key="5" onClick={() => setOpenUploadProduct(true)}>
//                 Add Product
//               </Menu.Item>
//             </SubMenu>

//             <SubMenu key="sub2" icon={<OrderedListOutlined />} title="Orders">
//               <Menu.Item key="6">
//                 <NavLink to="order-list">Order List</NavLink>
//               </Menu.Item>
//               <Menu.Item key="7">
//                 <NavLink to="order-detail">Order Detail</NavLink>
//               </Menu.Item>
//             </SubMenu>

//             <SubMenu key="category" icon={<FileDoneOutlined />} title="Category">
//               <Menu.Item key="8">
//                 <NavLink to="/admin-panel/product-list">Category List</NavLink>
//               </Menu.Item>
//               <Menu.Item key="9">
//                 <NavLink to="/products">New Category</NavLink>
//               </Menu.Item>
//             </SubMenu>

            

//             <SubMenu key="sub3" icon={<UserOutlined />} title="Users">
//               <Menu.Item key="11">
//                 <NavLink to="all-users">All Users</NavLink>
//               </Menu.Item>
//             </SubMenu>
//             <Menu.Item key="10" icon={<FileDoneOutlined />}>
//               <NavLink to="reports">Reports</NavLink>
//             </Menu.Item>
//           </Menu>
//         </Sider>

//         <Layout className='site-layout'>
//           <Content className='w-full h-full p-2'>
//             <Outlet />
//             {/** Upload product modal */}
//             {openUploadProduct && (
//               <UploadProduct 
//                 onClose={() => setOpenUploadProduct(false)} 
//                 fetchData={fetchAllProduct} 
//               />
//             )}
//           </Content>
//         </Layout>
//       </Layout>
//     </div>
//   );
// };

// export default AdminPanel;







import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import ROLE from '../common/role';
import { Layout, Menu } from 'antd';
import { ShopOutlined, OrderedListOutlined, UserOutlined, DashboardOutlined, FileDoneOutlined } from '@ant-design/icons';
import UploadProduct from '../components/UploadProduct';
import SummaryApi from '../common';
import companylogo from '../assest/download.jpeg';

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

const AdminPanel = () => {
  const user = useSelector(state => state?.user?.user);
  const navigate = useNavigate();
  
  const [openUploadProduct, setOpenUploadProduct] = useState(false);
  const [allProduct, setAllProduct] = useState([]);

  useEffect(() => {
    if (user?.role !== ROLE.ADMIN) {
      navigate("/");
    }
    fetchAllProduct(); 
  }, [user]);

  const fetchAllProduct = async () => {
    const response = await fetch(SummaryApi.allProduct.url);
    const dataResponse = await response.json();
    console.log("product data", dataResponse);
    setAllProduct(dataResponse?.data || []);
  };

  return (
    <div className='min-h-[calc(100vh-120px)] flex flex-col md:flex-row'>
      <Layout style={{ minHeight: '100vh' }}>
        {/* Sidebar for larger screens */}
        <Sider collapsible className='bg-red md:block hidden' width={220}>
          <div className='h-32 flex justify-center items-center flex-col p-4'>
            <div className='w-20 h-20 flex justify-center items-center mb-2'>
              <img src={companylogo} alt="Company Logo" className='w-full h-full object-cover rounded-full' />
            </div>
            <NavLink to='/'>
              <p className='color rounded-lg bg-white capitalize text-lg font-semibold'>Company Name</p>
            </NavLink>
          </div>

          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} className='p-2'>
            <SubMenu key="dashboard" icon={<DashboardOutlined />} title="Dashboard">
              <Menu.Item key="1"><NavLink to="/admin-panel/home1">Home 01</NavLink></Menu.Item>
              <Menu.Item key="2"><NavLink to="/admin-panel/home2">Home 02</NavLink></Menu.Item>
              <Menu.Item key="3"><NavLink to="/home-03">Home 03</NavLink></Menu.Item>
            </SubMenu>

            <SubMenu key="sub1" icon={<ShopOutlined />} title="E-commerce">
              <Menu.Item key="4"><NavLink to="all-products">All Products</NavLink></Menu.Item>
              <Menu.Item key="5" onClick={() => setOpenUploadProduct(true)}>Add Product</Menu.Item>
            </SubMenu>

            <SubMenu key="sub2" icon={<OrderedListOutlined />} title="Orders">
              <Menu.Item key="6"><NavLink to="order-list">Order List</NavLink></Menu.Item>
              <Menu.Item key="7"><NavLink to="order-detail">Order Detail</NavLink></Menu.Item>
            </SubMenu>

            <SubMenu key="category" icon={<FileDoneOutlined />} title="Category">
              <Menu.Item key="8"><NavLink to="/admin-panel/product-list">Category List</NavLink></Menu.Item>
              <Menu.Item key="9"><NavLink to="/products">New Category</NavLink></Menu.Item>
            </SubMenu>

            <SubMenu key="sub3" icon={<UserOutlined />} title="Users">
              <Menu.Item key="11"><NavLink to="all-users">All Users</NavLink></Menu.Item>
            </SubMenu>
            <Menu.Item key="10" icon={<FileDoneOutlined />}><NavLink to="reports">Reports</NavLink></Menu.Item>
          </Menu>
        </Sider>

        {/* Responsive Sidebar for mobile and small screens */}
        <Sider className='bg-red md:hidden block' width={220}>
          <div className='h-32 flex justify-center items-center flex-col p-4'>
            <div className='w-20 h-20 flex justify-center items-center mb-2'>
              <img src={companylogo} alt="Company Logo" className='w-full h-full object-cover rounded-full' />
            </div>
            <NavLink to='/'>
              <p className='color rounded-lg bg-white capitalize text-lg font-semibold'>Company Name</p>
            </NavLink>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} className='p-2'>
            <SubMenu key="dashboard" icon={<DashboardOutlined />} title="Dashboard">
              <Menu.Item key="1"><NavLink to="/admin-panel/home1">Home 01</NavLink></Menu.Item>
              <Menu.Item key="2"><NavLink to="/admin-panel/home2">Home 02</NavLink></Menu.Item>
              <Menu.Item key="3"><NavLink to="/home-03">Home 03</NavLink></Menu.Item>
            </SubMenu>

            <SubMenu key="sub1" icon={<ShopOutlined />} title="E-commerce">
              <Menu.Item key="4"><NavLink to="all-products">All Products</NavLink></Menu.Item>
              <Menu.Item key="5" onClick={() => setOpenUploadProduct(true)}>Add Product</Menu.Item>
            </SubMenu>

            <SubMenu key="sub2" icon={<OrderedListOutlined />} title="Orders">
              <Menu.Item key="6"><NavLink to="order-list">Order List</NavLink></Menu.Item>
              <Menu.Item key="7"><NavLink to="order-detail">Order Detail</NavLink></Menu.Item>
            </SubMenu>

            <SubMenu key="category" icon={<FileDoneOutlined />} title="Category">
              <Menu.Item key="8"><NavLink to="/admin-panel/product-list">Category List</NavLink></Menu.Item>
              <Menu.Item key="9"><NavLink to="/products">New Category</NavLink></Menu.Item>
            </SubMenu>

            <SubMenu key="sub3" icon={<UserOutlined />} title="Users">
              <Menu.Item key="11"><NavLink to="all-users">All Users</NavLink></Menu.Item>
            </SubMenu>
            <Menu.Item key="10" icon={<FileDoneOutlined />}><NavLink to="reports">Reports</NavLink></Menu.Item>
          </Menu>
        </Sider>

        <Layout className='site-layout'>
          <Content className='w-full h-full p-2'>
            <Outlet />
            {openUploadProduct && (
              <UploadProduct 
                onClose={() => setOpenUploadProduct(false)} 
                fetchData={fetchAllProduct} 
              />
            )}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default AdminPanel;





