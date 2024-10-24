
// import React from "react";
// import { Line } from "react-chartjs-2";
// import { FaDollarSign, FaShoppingCart, FaUsers } from "react-icons/fa";

// // Import necessary components from Chart.js
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// // Register the required components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const Dasboard = () => {
//   // Chart Data for Recent Orders
//   const recentOrdersData = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
//     datasets: [
//       {
//         label: "Orders",
//         data: [30, 45, 50, 60, 55, 70, 65, 75, 90, 85, 100, 95],
//         fill: true,
//         backgroundColor: "rgba(75,192,192,0.4)",
//         borderColor: "rgba(75,192,192,1)",
//       },
//     ],
//   };

//   // Data for Top Products
//   const topProducts = [
//     { name: "Patimax Fragrance", items: 100 },
//     { name: "Nulo MedalSeries Cat Food", items: 100 },
//     { name: "Pedigree Puppy Dry Dog Food", items: 100 },
//     { name: "Biscoito Premier Cookies", items: 100 },
//     { name: "Pedigree Adult Dog Food", items: 100 },
//   ];

//   // Data for Top Countries by Sales
//   const topCountries = [
//     { name: "Turkey", sales: 6972 },
//     { name: "Belgium", sales: 6972 },
//     { name: "Sweden", sales: 6972 },
//     { name: "Vietnam", sales: 6972 },
//     { name: "Australia", sales: 6972 },
//   ];

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Dashboard Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//         <div className="bg-white shadow-md rounded-lg p-4">
//           <div className="flex items-center">
//             <FaShoppingCart className="text-3xl text-green-500 mr-3" />
//             <div>
//               <h2 className="text-lg font-semibold">Total Sales</h2>
//               <p className="text-3xl font-bold">34,945</p>
//               <p className="text-green-500">+1.56%</p>
//             </div>
//           </div>
//         </div>
//         <div className="bg-white shadow-md rounded-lg p-4">
//           <div className="flex items-center">
//             <FaDollarSign className="text-3xl text-red-500 mr-3" />
//             <div>
//               <h2 className="text-lg font-semibold">Total Income</h2>
//               <p className="text-3xl font-bold">$37,802</p>
//               <p className="text-red-500">-1.56%</p>
//             </div>
//           </div>
//         </div>
//         <div className="bg-white shadow-md rounded-lg p-4">
//           <div className="flex items-center">
//             <FaShoppingCart className="text-3xl text-gray-500 mr-3" />
//             <div>
//               <h2 className="text-lg font-semibold">Orders Paid</h2>
//               <p className="text-3xl font-bold">34,945</p>
//               <p className="text-gray-500">0.00%</p>
//             </div>
//           </div>
//         </div>
//         <div className="bg-white shadow-md rounded-lg p-4">
//           <div className="flex items-center">
//             <FaUsers className="text-3xl text-blue-500 mr-3" />
//             <div>
//               <h2 className="text-lg font-semibold">Total Visitors</h2>
//               <p className="text-3xl font-bold">34,945</p>
//               <p className="text-blue-500">+1.56%</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Recent Orders, Top Products, and Top Countries */}
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
//         {/* Recent Orders */}
//         <div className="bg-white shadow-md rounded-lg p-6">
//           <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
//           <Line data={recentOrdersData} />
//         </div>

//         {/* Top Products */}
//         <div className="bg-white shadow-md rounded-lg p-6">
//           <h2 className="text-lg font-semibold mb-4">Top Products</h2>
//           <ul className="list-none">
//             {topProducts.map((product, index) => (
//               <li key={index} className="mb-2 flex justify-between">
//                 <span>{product.name}</span>
//                 <span>{product.items} Items</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Top Countries by Sales */}
//         <div className="bg-white shadow-md rounded-lg p-6">
//           <h2 className="text-lg font-semibold mb-4">Top Countries by Sales</h2>
//           <ul className="list-none">
//             {topCountries.map((country, index) => (
//               <li key={index} className="mb-2 flex justify-between">
//                 <span>{country.name}</span>
//                 <span>${country.sales}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dasboard;






import React from "react";
import { Line } from "react-chartjs-2";
import { FaDollarSign, FaShoppingCart, FaUsers } from "react-icons/fa";

// Import necessary components from Chart.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Chart Data for Recent Orders
  const recentOrdersData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Orders",
        data: [30, 45, 50, 60, 55, 70, 65, 75, 90, 85, 100, 95],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  // Data for Top Products
  const topProducts = [
    { name: "Patimax Fragrance", items: 100 },
    { name: "Nulo MedalSeries Cat Food", items: 100 },
    { name: "Pedigree Puppy Dry Dog Food", items: 100 },
    { name: "Biscoito Premier Cookies", items: 100 },
    { name: "Pedigree Adult Dog Food", items: 100 },
  ];

  // Data for Top Countries by Sales
  const topCountries = [
    { name: "Turkey", sales: 6972 },
    { name: "Belgium", sales: 6972 },
    { name: "Sweden", sales: 6972 },
    { name: "Vietnam", sales: 6972 },
    { name: "Australia", sales: 6972 },
  ];

  // Data for Best Shop Sellers
  const bestShopSellers = [
    { name: "Robert", purchases: 73, categories: "Kitchen, Pets", total: "$1,000", status: "100%" },
    { name: "Calvin", purchases: 66, categories: "Health, Grocery", total: "$4,000", status: "100%" },
    { name: "Dwight", purchases: 15890, categories: "Electronics", total: "$2,700", status: "100%" },
    { name: "Cody", purchases: 15, categories: "Movies, Music", total: "$2,100", status: "100%" },
    { name: "Bruce", purchases: 127, categories: "Sports, Fitness", total: "$4,400", status: "100%" },
    { name: "Jorge", purchases: 30, categories: "Toys, Baby", total: "$4,750", status: "100%" },
    { name: "Kristin Watson", purchases: 93, categories: "Gift Cards", total: "$1,000", status: "100%" },
  ];

  // Data for Product Overview
  const productOverview = [
    { name: "Soft Fluffy Cats", productId: "#327", price: "$11.70", quantity: 28, sale: "On sale", revenue: "$328.85", status: "Not Available" },
    { name: "Taste of the Wild Formula Finder", productId: "#380", price: "$8.99", quantity: 10, sale: "On sale", revenue: "$105.55", status: "Not Available" },
    { name: "Wellness Natural Food", productId: "#126", price: "$5.22", quantity: 578, sale: "--/--", revenue: "$202.87", status: "Not Available" },
    { name: "Dog Food Rachael Ray", productId: "#582", price: "$14.81", quantity: 36, sale: "--/--", revenue: "$475.22", status: "Available" },
    { name: "Best Buddy Bits Dog Treats", productId: "#293", price: "$6.48", quantity: 84, sale: "--/--", revenue: "$219.78", status: "Not Available" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="flex items-center">
            <FaShoppingCart className="text-3xl text-green-500 mr-3" />
            <div>
              <h2 className="text-lg font-semibold">Total Sales</h2>
              <p className="text-3xl font-bold">34,945</p>
              <p className="text-green-500">+1.56%</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="flex items-center">
            <FaDollarSign className="text-3xl text-red-500 mr-3" />
            <div>
              <h2 className="text-lg font-semibold">Total Income</h2>
              <p className="text-3xl font-bold">$37,802</p>
              <p className="text-red-500">-1.56%</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="flex items-center">
            <FaShoppingCart className="text-3xl text-gray-500 mr-3" />
            <div>
              <h2 className="text-lg font-semibold">Orders Paid</h2>
              <p className="text-3xl font-bold">34,945</p>
              <p className="text-gray-500">0.00%</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="flex items-center">
            <FaUsers className="text-3xl text-blue-500 mr-3" />
            <div>
              <h2 className="text-lg font-semibold">Total Visitors</h2>
              <p className="text-3xl font-bold">34,945</p>
              <p className="text-blue-500">+1.56%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders, Top Products, and Top Countries */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
          <Line data={recentOrdersData} />
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Top Products</h2>
          <ul className="list-none">
            {topProducts.map((product, index) => (
              <li key={index} className="mb-2 flex justify-between">
                <span>{product.name}</span>
                <span>{product.items} Items</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Top Countries by Sales</h2>
          <ul className="list-none">
            {topCountries.map((country, index) => (
              <li key={index} className="mb-2 flex justify-between">
                <span>{country.name}</span>
                <span>${country.sales}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Best Shop Sellers */}
      <div className="bg-white shadow-md rounded-lg p-6 mt-4">
        <h2 className="text-lg font-semibold mb-4">Best Shop Sellers</h2>
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th>Name</th>
              <th>Purchases</th>
              <th>Categories</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bestShopSellers.map((seller, index) => (
              <tr key={index} className="border-t">
                <td>{seller.name}</td>
                <td>{seller.purchases}</td>
                <td>{seller.categories}</td>
                <td>{seller.total}</td>
                <td>{seller.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Product Overview */}
      <div className="bg-white shadow-md rounded-lg p-6 mt-4">
        <h2 className="text-lg font-semibold mb-4">Product Overview</h2>
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th>Product</th>
              <th>Product ID</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Sale</th>
              <th>Revenue</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {productOverview.map((product, index) => (
              <tr key={index} className="border-t">
                <td>{product.name}</td>
                <td>{product.productId}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.sale}</td>
                <td>{product.revenue}</td>
                <td>{product.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
