import { api } from "../api"

interface DeleteProductProps {
    productId?:string;
    ids?: string[];  
}



const DeleteProducts = async ( {productId,ids}:DeleteProductProps ) => {
    try {
        let response;

        if (productId) {
            // Single category deletion
            response = await api.delete(`/products/${productId}`);
        } else if (ids && ids.length > 0) {
            // Multiple category deletion
            response = await api.delete(`/products`, {
                data: { ids }, // Sending array of IDs in request body
            });
        } else {
            throw new Error("Either 'productId' or 'ids' must be provided.");
        }

        console.log("Response from DeleteProducts API:", response);
        return response.data;
    } catch (error) {
        console.log("Error in DeleteProducts API:",error);
        throw error
    }
}

export default DeleteProducts;