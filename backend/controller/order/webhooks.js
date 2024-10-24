




const stripe = require('../../config/stripe');
const OrderModel = require('../../models/orderProductModel');
const endpointSecret = process.env.STRIPE_ENDPOINT_WEBHOOKS_SECRET_KEY;

async function getLineItems(lineItems) {
    let productItems = [];
    if (lineItems?.data?.length) {
        for (const item of lineItems.data) {
            const product = await stripe.products.retrieve(item.price.product);
            const productId = product.metadata.productId;

            const productData = {
                productId: productId,
                name: product.name,
                price: item.price.unit_amount / 100,
                quantity: item.quantity,
                image: product.image
            };
            productItems.push(productData);
        }
    }
    return productItems;
}

const webhooks = async (request, response) => {
    const sig = request.headers['stripe-signature'];
    const payloadString = JSON.stringify(request.body);

    const header = stripe.webhooks.generateTestHeaderString({
        payload: payloadString,
        secret: endpointSecret,
        sig: sig
    });

    let event;

    try {
        event = stripe.webhooks.constructEvent(payloadString, header, endpointSecret);
    } catch (err) {
        console.error(`Webhook signature verification failed: ${err.message}`);
        return response.status(400).send(`Webhook Error: ${err.message}`);
    }

    console.log('Event received:', event);

    switch (event.type) {
        case 'payment_intent.succeeded':
            const session = event.data.object;
            console.log('Payment Intent Succeeded:', session);

            try {
            const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
            console.log('Line items:', lineItems);

            const productDetails = await getLineItems(lineItems);
            console.log('Product Details:', productDetails);

            const orderDetails = {
                productDetails: productDetails,
                email: session.customer_email,
                userId: session.metadata.userId,
                paymentDetails: {
                    paymentId: session.payment_intent,
                    payment_method_type: session.payment_method_types,
                    payment_status: session.payment_status,
                },
                shipping_options: session.shipping_options,
                totalAmount: session.amount_total / 100,
            };
            const order = new OrderModel(orderDetails)
            const saveOrder = await order.save();

            // await new OrderModel(orderDetails).save();
            console.log('Order saved successfully', saveOrder);
    } catch (error) {
        console.error('Error processing order:', error.message);
        return response.status(500).send('Internal Server Error');
    }
    break;
            default:
console.log(`Unhandled event type ${event.type}`);
    }

response.status(200).send();
};

module.exports = webhooks;







// const stripe = require('../../config/stripe');
// const OrderModel = require('../../models/orderProductModel');
// const endpointSecret = process.env.STRIPE_ENDPOINT_WEBHOOKS_SECRET_KEY;

// // Middleware to use raw body parsing for Stripe webhooks
// const bodyParser = require('body-parser');

// async function getLineItems(lineItems) {
//     let productItems = [];
//     if (lineItems?.data?.length) {
//         for (const item of lineItems.data) {
//             const product = await stripe.products.retrieve(item.price.product);
//             const productId = product.metadata.productId;

//             const productData = {
//                 productId: productId,
//                 name: product.name,
//                 price: item.price.unit_amount / 100,
//                 quantity: item.quantity,
//                 image: product.image
//             };
//             productItems.push(productData);
//         }
//     }
//     return productItems;
// }

// const webhooks = async (request, response) => {
//     const sig = request.headers['stripe-signature'];

//     let event;
//     try {
//         event = stripe.webhooks.constructEvent(
//             request.body, // Use the raw body instead of a stringified version
//             sig,
//             endpointSecret
//         );
//     } catch (err) {
//         console.error(`Webhook signature verification failed: ${err.message}`);
//         return response.status(400).send(`Webhook Error: ${err.message}`);
//     }

//     console.log('Event received:', event);

//     switch (event.type) {
//         case 'payment_intent.succeeded':
//             const session = event.data.object;
//             console.log('Payment Intent Succeeded:', session);

//             try {
//                 const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
//                 console.log('Line items:', lineItems);

//                 const productDetails = await getLineItems(lineItems);
//                 console.log('Product Details:', productDetails);

//                 const orderDetails = {
//                     productDetails: productDetails,
//                     email: session.customer_email,
//                     userId: session.metadata.userId,
//                     paymentDetails: {
//                         paymentId: session.payment_intent,
//                         payment_method_type: session.payment_method_types,
//                         payment_status: session.payment_status,
//                     },
//                     shipping_options: session.shipping_options,
//                     totalAmount: session.amount_total / 100,
//                 };

//                 const order = new OrderModel(orderDetails);
//                 const saveOrder = await order.save();
//                 console.log('Order saved successfully', saveOrder);
//             } catch (error) {
//                 console.error('Error processing order:', error.message);
//                 return response.status(500).send('Internal Server Error');
//             }
//             break;

//         default:
//             console.log(`Unhandled event type ${event.type}`);
//     }

//     response.status(200).send();
// };

// module.exports = webhooks;
