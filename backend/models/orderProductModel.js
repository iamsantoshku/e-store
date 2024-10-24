

const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    productDetails: {
        type: Array,
        default: []
    },
    email: {
        type: String,
        default: ""
    },
    userId: {
        type: String,
        default: ""
    },
    paymentDetails: {
        paymentId: {
            type: String,
            default: ""
        },
        payment_method_type: {
            type: Array,
            default: []
        },
        payment_status: {
            type: String,
            default: ""
        }
    },
    shipping_options: {
        type: Array,
        default: []
    },
    totalAmount: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

const OrderModel = mongoose.model('ord', OrderSchema);

module.exports = OrderModel;





// const mongoose = require("mongoose");

// const OrderSchema = new mongoose.Schema(
//   {
//     orderId: String,
//     products: [
//       {
//         productId: { type: String, required: true },
//         quantity: { type: Number, required: true },
//       },
//     ],
//     amount: Number,
//     email: { type: String, required: true },
//     status: {
//       type: String,
//       enum: ["pending", "processing", "shipped", "completed",],
//       default: "pending",
//     },
//   },
//   { timestamps: true }
// );
// const Order = mongoose.model("Ordershc", OrderSchema);
// module.exports = Order;




//  second 
// const mongoose = require("mongoose");

// const OrderSchema = new mongoose.Schema(
//   {
//     orderId: { type: String, unique: true },
//     products: [
//       {
//         productId: { type: String, required: true },
//         name: { type: String },
//         price: { type: Number },
//         quantity: { type: Number, required: true },
//       },
//     ],
//     amount: { type: Number, required: true },
//     email: { type: String, required: true },
//     status: {
//       type: String,
//       enum: ["pending", "processing", "shipped", "completed"],
//       default: "pending",
//     },
//   },
//   { timestamps: true }
// );

// const Order = mongoose.model("Order", OrderSchema);
// module.exports = Order;
