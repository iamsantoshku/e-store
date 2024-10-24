// const mongoose = require('mongoose')

// const productSchema = mongoose.Schema({
//     productName : String,
//     brandName : String,
//     category : String,
//     productImage : [],
//     description : String,
//     price : Number,
//     sellingPrice : Number,
//     // size:String,
//     availableSizes: {
//         type: [String], 
//         // required: true
//     }
// },{
//     timestamps : true
// })


// const productModel = mongoose.model("product",productSchema)

// module.exports = productModel




const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    productName : String,
    brandName : String,
    category : String,
    productImage : [],
    description : String,
    price : Number,
    sellingPrice : Number,
    // size:String,
    colors: {
                type: [String],
                default: [],
            },
    availableSizes: {
        type: [String], 
                
    },
    stock: {
        type: Number,
                
        default: 0,
    },
    isAvailable: {
                type: Boolean,
                default: true,
            },
    
},{
    timestamps : true
})


const productModel = mongoose.model("product",productSchema)

module.exports = productModel




// const mongoose = require('mongoose');

// const productSchema = mongoose.Schema({
//     productName: {
//         type: String,
//         required: true,
//         trim: true,
//     },
//     brandName: {
//         type: String,
//         required: true,
//         trim: true,
//     },
//     category: {
//         type: String,
//         required: true,
//         trim: true,
//     },
//     productImage: {
//         type: [String],
//         required: true,
//     },
//     description: {
//         type: String,
//         required: true,
//     },
//     price: {
//         type: Number,
//         required: true,
//     },
//     sellingPrice: {
//         type: Number,
//         required: true,
//     },
//     stock: {
//         type: Number,
//         required: true,
//         default: 0,
//     },
//     availableSizes: {
//         type: [String], 
//         required: true,
//     },
//     colors: {
//         type: [String],
//         default: [],
//     },
//     ratings: {
//         averageRating: {
//             type: Number,
//             default: 0,
//         },
//         reviewsCount: {
//             type: Number,
//             default: 0,
//         }
//     },
//     reviews: [
//         {
//             userId: {
//                 type: mongoose.Schema.Types.ObjectId,
//                 ref: 'user',
//                 required: true,
//             },
//             reviewText: String,
//             rating: {
//                 type: Number,
//                 min: 1,
//                 max: 5,
               
//             },
//             createdAt: {
//                 type: Date,
//                 default: Date.now,
//             }
//         }
//     ],
//     discount: {
//         type: Number,
//         default: 0,
//     },
//     isFeatured: {
//         type: Boolean,
//         default: false,
//     },
//     isAvailable: {
//         type: Boolean,
//         default: true,
//     },
// }, {
//     timestamps: true
// });

// const productModel = mongoose.model("product", productSchema);

// module.exports = productModel;
