// const wishlistProductModel = require("../../models/wishlistProduct");
const wishlistProductModel = require("../../models/addToWishlist")

const deleteToWishlistProduct = async (req, res) => {
    try {
        const currentUserId = req.userId;
        const wishlistProductId = req.body._id;

        const deleteProduct = await wishlistProductModel.deleteOne({ _id: wishlistProductId });

        res.json({
            message: "Product Deleted From Wishlist",
            error: false,
            success: true,
            data: deleteProduct
        });

    } catch (err) {
        res.json({
            message: err?.message || err,
            error: true,
            success: false
        });
    }
}

module.exports = deleteToWishlistProduct;
