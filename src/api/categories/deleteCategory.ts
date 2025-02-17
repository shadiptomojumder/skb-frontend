import { api } from "../api"



const DeleteCategory = async ( categoryId:string ) => {
    try {
        const response = await api.delete(`/categories/${categoryId}`,);
        console.log("Response from DeleteCategory API:", response);
        
        return response.data
    } catch (error) {
        console.log("Error in DeleteCategory API:",error);
        throw error
    }
}

export default DeleteCategory;