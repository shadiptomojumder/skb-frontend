import { IBlog } from "@/interfaces/blog.schemas";
import { APIResponse } from "@/interfaces/common.schemas";
import { AxiosError, AxiosResponse } from "axios";
import { api } from "../api";

const getBlogById = async ({ blogId }: { blogId: string }): Promise<IBlog> => {
    try {
        const response: AxiosResponse<APIResponse<IBlog>> = await api.get<APIResponse<IBlog>>(
            `/blogs/${blogId}`
        );

        // Ensure the API response contains valid data
        if (!response.data || !response.data.data) {
            throw new Error("Invalid API response: Missing blog data");
        }
        console.log("Blog details API Response is:", response.data); // Log the blog data to the console
        

        return response.data.data;
    } catch (error) {
        console.error("The Get Blog By ID API Error is:", error);

        if (error instanceof AxiosError && error.response) {
            console.error("Server Error:", error.response.data);
            throw error.response.data; // Throwing the actual API error response
        }

        throw new Error("An unknown error occurred");
    }
};

export default getBlogById;