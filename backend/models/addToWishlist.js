const mongoose = require('mongoose');

const addToWishlist = mongoose.Schema(
    {
        productId: {
            ref: 'product',
            type: String,
        },
        userId: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const addToWishlistModel = mongoose.model('addToWishlist', addToWishlist);

module.exports = addToWishlistModel;
