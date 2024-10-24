import SummaryApi from "../common";

const fetchWishlistProducts = async () => {
    try {
        const response = await fetch(SummaryApi.addToWishlistview.url, {
            method: SummaryApi.addToWishlistview.method,
            credentials: 'include',
            headers: {
                "content-type": "application/json",
            },
        });

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        return {
            success: false,
            message: error.message,
        };
    }
};

export default fetchWishlistProducts;
