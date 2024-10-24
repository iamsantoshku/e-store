const addToWishlistModel = require("../../models/addToWishlist");

const addToWishlistController = async (req, res) => {
    try {
        const { productId } = req.body;
        const currentUser = req.userId;

        // Check if the product is already in the user's wishlist
        const isProductAvailable = await addToWishlistModel.findOne({ productId, userId: currentUser });

        console.log("isProductAvailable in Wishlist", isProductAvailable);

        if (isProductAvailable) {
            return res.json({
                message: "Already exists in Wishlist",
                success: false,
                error: true,
            });
        }

        // Prepare the payload for adding to the wishlist
        const payload = {
            productId: productId,
            userId: currentUser,
        };

        const newAddToWishlist = new addToWishlistModel(payload);
        const saveProduct = await newAddToWishlist.save();

        return res.json({
            data: saveProduct,
            message: "Product Added to Wishlist",
            success: true,
            error: false,
        });

    } catch (err) {
        res.json({
            message: err?.message || err,
            error: true,
            success: false,
        });
    }
};

module.exports = addToWishlistController;
