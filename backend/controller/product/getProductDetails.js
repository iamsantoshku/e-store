const productModel = require("../../models/productModel")

const getProductDetails = async(req,res)=>{
    try{
        // productId ,
        const { productId , productName } = req.body

        // by product name
        // const {  productName } = req.body

        const product = await productModel.findById( productId)
        // const product = await productModel.findOne({ productName });

        res.json({
            data : product,
            message : "Ok",
            success : true,
            error : false
        }) 

        
    }catch(err){
        res.json({
            message : err?.message  || err,
            error : true,
            success : false
        })
    }
}

module.exports = getProductDetails







// const productModel = require("../../models/productModel");

// const getProductDetails = async (req, res) => {
//     try {
//         const { id, productName } = req.params;

//         // Fetch product by ID.
//         const product = await productModel.findById(id);

//         // If you want to ensure the product name matches (optional):
//         if (product) {
//             const formattedName = product.name.replace(/\s+/g, '-').toLowerCase();
//             if (formattedName !== productName) {
//                 return res.status(400).json({
//                     message: "Product name does not match",
//                     success: false,
//                     error: true,
//                 });
//             }
//         }

//         res.json({
//             data: product,
//             message: "Ok",
//             success: true,
//             error: false,
//         });
//     } catch (err) {
//         res.status(500).json({
//             message: err.message || err,
//             success: false,
//             error: true,
//         });
//     }
// };

// module.exports = getProductDetails;
