






const stripe = require('../../config/stripe');
const userModel = require('../../models/userModel');

const paymentController = async (request, response) => {
    try {
        const { cartItems } = request.body;

        // Validate cart items
        if (!cartItems || cartItems.length === 0) {
            return response.status(400).json({
                message: 'Cart is empty',
                error: true,
                success: false
            });
        }

        // Retrieve user data
        const user = await userModel.findOne({ _id: request.userId });
        if (!user) {
            return response.status(404).json({
                message: 'User not found',
                error: true,
                success: false
            });
        }

        // Create session parameters
        const params = {
            submit_type: 'pay',
            mode: 'payment',
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            shipping_options: [
                {
                    shipping_rate: 'shr_1PwMvr07rudxqA9keb32ILKs'
                }
            ],
            customer_email: user.email,
            metadata: {
                userId: request.userId
            },
            line_items: cartItems.map((item) => ({
                price_data: {
                    currency: 'inr',
                    product_data: {
                        name: item.productId.productName,
                        images: Array.isArray(item.productId.productImage)
                            ? item.productId.productImage
                            : [item.productId.productImage],
                        metadata: {
                            productId: item.productId._id
                        }
                    },
                    unit_amount: item.productId.sellingPrice * 100
                },
                adjustable_quantity: {
                    enabled: true,
                    minimum: 1
                },
                quantity: item.quantity
            })),
            success_url: `${process.env.FRONTEND_URL}/success`,
            cancel_url: `${process.env.FRONTEND_URL}/cancel`
        };

        // Create a new Stripe session
        const session = await stripe.checkout.sessions.create(params);
        
        response.status(200).json(session);

    } catch (err) {
        response.status(500).json({
            message: err?.message || 'Internal Server Error',
            error: true,
            success: false
        });
    }
};

module.exports = paymentController;
