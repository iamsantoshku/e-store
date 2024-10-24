import React from 'react';
import { FaShoppingCart, FaDollarSign, FaClipboardCheck, FaUsers } from 'react-icons/fa';
import { GiShoppingBag } from 'react-icons/gi';
import { MdOutlineCategory } from 'react-icons/md';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';

const Dashboard2 = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Add Attribute</h1>
      <div className="grid grid-cols-4 gap-4 mb-8">
        <Card title="Total Sales" value="34,945" percentage="1.56%" color="green" icon={<FaShoppingCart />} />
        <Card title="Total Income" value="$37,802" percentage="-1.56%" color="orange" icon={<FaDollarSign />} />
        <Card title="Orders Paid" value="34,945" percentage="0.00%" color="gray" icon={<FaClipboardCheck />} />
        <Card title="Total Visitor" value="34,945" percentage="1.56%" color="blue" icon={<FaUsers />} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <ProductList />
        <OrdersList />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <PotentialCustomers />
        <TopCountriesBySales />
      </div>
    </div>
  );
}

function Card({ title, value, percentage, color, icon }) {
  const isPositive = percentage.includes('+');
  return (
    <div className={`bg-white p-4 shadow rounded-lg flex items-center`}>
      <div className={`text-${color}-500 text-3xl mr-4`}>
        {icon}
      </div>
      <div>
        <h2 className="text-gray-700 text-lg font-semibold">{title}</h2>
        <div className="flex items-center">
          <p className="text-2xl font-semibold mr-2">{value}</p>
          <span className={`flex items-center text-${color}-500`}>
            {isPositive ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
            {percentage}
          </span>
        </div>
      </div>
    </div>
  );
}

function ProductList() {
  const products = [
    { name: 'Patimax Fragrance Long...', category: 'X1', totalSales: '$28,67' },
    { name: 'WholeHearted Grain Free Large...', category: 'X1', totalSales: '$28,67' },
    { name: 'Dog Food Rachael Ray Nutrish®', category: 'X1', totalSales: '$28,67' },
  ];

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="text-gray-700 text-lg font-semibold mb-4 flex items-center">
        <GiShoppingBag className="mr-2" />
        Top Selling Product
      </h2>
      <ul>
        {products.map((product, index) => (
          <li key={index} className="flex justify-between mb-2">
            <span>{product.name}</span>
            <span><MdOutlineCategory className="inline mr-1" />{product.category}</span>
            <span>{product.totalSales}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function OrdersList() {
  const orders = [
    { product: 'Sojos Crunchy Natural Grain Free...', customer: '20 Nov 2023', price: '$20.99' },
    { product: 'Kristin Watson', customer: '20 Nov 2023', price: '$35.00' },
    { product: 'Mega Pumpkin Bone', customer: '20 Nov 2023', price: '$12.50' },
  ];

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="text-gray-700 text-lg font-semibold mb-4 flex items-center">
        <FaClipboardCheck className="mr-2" />
        Orders
      </h2>
      <ul>
        {orders.map((order, index) => (
          <li key={index} className="flex justify-between mb-2">
            <span>{order.product}</span>
            <span>{order.customer}</span>
            <span>{order.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PotentialCustomers() {
  const customers = [
    { age: '18-22', category: 'Industrial', purchases: '130', country: 'India', amount: '$120 - $240' },
    { age: '23-27', category: 'Video Games', purchases: '583', country: 'Russia', amount: '$120 - $240' },
    { age: '28-34', category: 'Books', purchases: '426', country: 'China', amount: '$712 - $1,778' },
    { age: '35-44', category: "Men's Fashion", purchases: '561', country: 'UK', amount: '$573 - $940' },
    { age: '45-59', category: 'Home, Kitchen, Pets', purchases: '177', country: 'USA', amount: '$37,802' },
  ];

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="text-gray-700 text-lg font-semibold mb-4">Group of Potential Customers</h2>
      <ul>
        {customers.map((customer, index) => (
          <li key={index} className="flex justify-between mb-2">
            <span>{customer.age}</span>
            <span>{customer.category}</span>
            <span>{customer.purchases}</span>
            <span>{customer.country}</span>
            <span>{customer.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TopCountriesBySales() {
  const countries = [
    { name: 'Turkey', sales: '6,972' },
    { name: 'Belgium', sales: '6,972' },
    { name: 'Sweden', sales: '6,972' },
    { name: 'Vietnam', sales: '6,972' },
    { name: 'Australia', sales: '6,972' },
    { name: 'Saudi Arabia', sales: '6,972' },
  ];

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="text-gray-700 text-lg font-semibold mb-4">Top Countries by Sales</h2>
      <p className="text-gray-500 mb-2">$37,802 | 1.56% since last weekend</p>
      <ul>
        {countries.map((country, index) => (
          <li key={index} className="flex justify-between mb-2">
            <span>{country.name}</span>
            <span>{country.sales}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard2;



