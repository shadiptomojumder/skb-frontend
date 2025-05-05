import { IBlog } from "@/interfaces/blog.schemas";
import { AxiosError } from "axios";
import { api } from "../api";

interface UpdateBlogProps {
    blogId: string; // ID of the blog to update
    data: FormData | Partial<IBlog>; // Data to update the blog
}

const updateBlog = async ({ blogId, data }: UpdateBlogProps) => {
    try {
        if (!blogId) {
            throw new Error("Blog ID is required to update a blog.");
        }

        const isFormData = data instanceof FormData;
        const headers = isFormData
            ? { "Content-Type": "multipart/form-data" }
            : { "Content-Type": "application/json" };

        const response = await api.patch(`/blogs/${blogId}`, data, {
            headers,
        });

        // console.log("Response from updateBlog API:", response);
        return response.data;
    } catch (error) {
        console.error("Error in updateBlog API:", error);

        if (error instanceof AxiosError && error.response) {
            console.log("Server Error:", error.response.data);
            throw error.response.data; // Throwing the actual API error response
        }

        throw new Error("An unknown error occurred");
    }
};

export default updateBlog;
