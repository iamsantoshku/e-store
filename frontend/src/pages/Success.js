// import React from "react";
// import SUCCESSIMAGE from '../assest/success.gif'
// import { NavLink } from "react-router-dom";

// const Success = ()=>{
//     return(
//         //  <h1>this is Success</h1>
//         <div className="bg-slate-200 w-full max-w-md mx-auto flex justify-center items-center flex-col p-4 m-3">
//             <img src={SUCCESSIMAGE} width={300} height={300} />
//             <p className="text-green-600 font-bold text-xl">payment succesfully</p>
//             <NavLink to={"/order"} className='p-2 px-3 mt-5 border-2 border-green-600 rounded font-semibold text-green'>See order</NavLink>
//         </div>
         

//     )
// }
// export default Success






import React from 'react';
import TimelineStep from '../components/userdasboard/TimelineStep';

const PaymentSuccess = () => {
  // Hardcoded order data for testing
  const order = {
    orderId: '1234567890',
    status: 'completed', // Change to simulate different statuses
  };

  const isCompleted = (status) => {
    const statuses = ['pending', 'processing', 'shipped', 'completed'];
    return statuses.indexOf(status) < statuses.indexOf(order.status);
  };

  const isCurrent = (status) => order.status === status;

  const steps = [
    {
      status: 'pending',
      label: 'Pending',
      description: 'Your order has been created and is awaiting processing.',
      icon: { iconName: 'time-line', bgColor: 'red-500', textColor: 'gray-800' },
    },
    {
      status: 'processing',
      label: 'Processing',
      description: 'Your order is currently being processed.',
      icon: { iconName: 'loader-line', bgColor: 'yellow-800', textColor: 'yellow-800' },
    },
    {
      status: 'shipped',
      label: 'Shipped',
      description: 'Your order has been shipped.',
      icon: { iconName: 'truck-line', bgColor: 'blue-800', textColor: 'blue-800' },
    },
    {
      status: 'completed',
      label: 'Completed',
      description: 'Your order has been successfully completed.',
      icon: { iconName: 'check-line', bgColor: 'green-800', textColor: 'green-900' },
    },
  ];

  return (
    <div className="section__container rounded p-6">
      <h2 className="text-2xl font-semibold mb-4">
        Payment {order.status}
      </h2>
      <p className="mb-4">Order ID: {order.orderId}</p>
      <p className="mb-8">Status: {order.status}</p>

      {/* Timeline */}
      <ol className="items-center sm:flex relative">
        {steps.map((step, index) => (
          <TimelineStep
            key={step.status}
            step={step}
            order={order}
            isCompleted={isCompleted(step.status)}
            isCurrent={isCurrent(step.status)}
            isLastStep={index === steps.length - 1}
            icon={step.icon}
            description={step.description}
          />
        ))}
      </ol>
    </div>
  );
};

export default PaymentSuccess;
