const addToWishlistModel = require("../../models/addToWishlist");

const addToWishlistViewProduct = async (req, res) => {
    try {
        const currentUser = req.userId;

        // Find all products in the wishlist for the current user and populate product details
        const allProduct = await addToWishlistModel.find({
            userId: currentUser,
        }).populate("productId");

        res.json({
            data: allProduct,
            success: true,
            error: false,
        });

    } catch (err) {
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        });
    }
};

module.exports = addToWishlistViewProduct;
