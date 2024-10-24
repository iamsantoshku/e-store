import React from "react";
import { Line } from "react-chartjs-2";

const RecentOrders = () => {
  const data = {
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

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
      <Line data={data} />
    </div>
  );
};

export default RecentOrders;
