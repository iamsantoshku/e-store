import SummaryApi from "../common";
import { toast } from 'react-toastify';

const removeFromWishlist = async (e, id) => {
    e?.stopPropagation();
    e?.preventDefault();

    const response = await fetch(`${SummaryApi.removetowishlist.url}/${id}`, {
        method: SummaryApi.removetowishlist.method,
        credentials: 'include',
        headers: {
            "content-type": 'application/json'
        }
    });

    const responseData = await response.json();

    if (responseData.success) {
        toast.success(responseData.message);
    } else {
        toast.error(responseData.message || 'An error occurred');
    }

    return responseData;
};


export default removeFromWishlist;
