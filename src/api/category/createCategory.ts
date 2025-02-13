import { Category } from "@/interfaces/category.schemas";
import { api } from "../api"


const CreateCategory = async (data:Category) => {
    console.log("The Data in CreateCategory api is:",data)
    
    try {
        const response = await api.post(`/categories`, data);
        console.log("response in CreateCategory.ts file: ", response);
        
        return response.data
    } catch (error) {
        console.log("The Error in Appointment api is:",error);
        
        throw error
    }
}

export default CreateCategory;