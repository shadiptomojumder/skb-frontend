import { Product } from "@/interfaces/product.schemas";
import { AxiosError, AxiosResponse } from "axios";
import { api } from "../api";

// Define the expected response type
interface CreateProductResponse {
    success: boolean;
    data: Product;
    message: string;
    statusCode: number;
}

const CreateProduct = async (data: FormData): Promise<CreateProductResponse> => {
    console.log("The Data in CreateProduct API is:", data);

    try {
        const response: AxiosResponse<CreateProductResponse> =
            await api.post<CreateProductResponse>(`/products`, data, {
                headers: { "Content-Type": "multipart/form-data" },
            });
        console.log("Response in CreateProduct.ts file: ", response);

        return response.data;
    } catch (error) {
         // Ensure error is typed correctly as AxiosError
         if (error instanceof AxiosError) {
            if (error.response) {
                console.error("Server Error:", error.response.data);
                throw new Error(error.response.data.message || "Server Error");
            } else if (error.request) {
                console.error("Network Error:", error.request);
                throw new Error("Network Error: No response received from the server");
            }
        }
        
        console.error("Unexpected Error:", (error as Error).message);
        throw new Error((error as Error).message || "An unknown error occurred");
    }
};

export default CreateProduct;
