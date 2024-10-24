const uploadProductPermission = require("../../helpers/permission")
const productModel = require("../../models/productModel")

async function UploadProductController(req,res){
    try{
        const sessionUserId = req.userId

        if(!uploadProductPermission(sessionUserId)){
            throw new Error("Permission denied")
        }
    
        const uploadProduct = new productModel(req.body)
        const saveProduct = await uploadProduct.save()

        res.status(201).json({
            message : "Product upload successfully",
            error : false,
            success : true,
            data : saveProduct
        })

    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = UploadProductController






// const uploadProductPermission = require("../../helpers/permission");
// const productModel = require("../../models/productModel");

// async function UploadProductController(req, res) {
//     try {
//         // Get the user ID from the session
//         const sessionUserId = req.userId;

//         // Check if the user has permission to upload the product
//         if (!uploadProductPermission(sessionUserId)) {
//             return res.status(403).json({
//                 message: "Permission denied",
//                 error: true,
//                 success: false,
//             });
//         }

//         // Extract product details from the request body
//         const {
//             productName,
//             brandName,
//             category,
//             description,
//             price,
//             sellingPrice,
//             stock,
//             availableSizes,
//             colors,
//             discount,
//             isFeatured
//         } = req.body;

//         // Handle image uploads (if you're using multer for image handling)
//         const productImage = req.files ? req.files.map(file => file.path) : [];

//         // Create a new product object
//         const newProduct = new productModel({
//             productName,
//             brandName,
//             category,
//             description,
//             price,
//             sellingPrice,
//             stock,
//             productImage,
//             // availableSizes: availableSizes.split(','), // Convert sizes to an array
//             availableSizes: availableSizes.join(','),
//             colors: colors ? colors.split(',') : [], // Convert colors to an array if provided
//             discount,
//             isFeatured
//         });

//         // Save the new product to the database
//         const saveProduct = await newProduct.save();

//         // Respond with a success message and the saved product data
//         res.status(201).json({
//             message: "Product uploaded successfully",
//             error: false,
//             success: true,
//             data: saveProduct
//         });
//     } catch (err) {
//         res.status(400).json({
//             message: err.message || "Failed to upload product",
//             error: true,
//             success: false
//         });
//     }
// }

// module.exports = UploadProductController;
