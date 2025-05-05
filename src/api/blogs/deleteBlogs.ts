import { api } from "../api";

interface DeleteBlogProps {
    blogId?: string; // For single blog deletion
    ids?: string[];  // For multiple blog deletions
}

const deleteBlogs = async ({ blogId, ids }: DeleteBlogProps) => {
    try {
        let response;

        if (blogId) {
            // Single blog deletion
            response = await api.delete(`/blogs/${blogId}`);
        } else if (ids && ids.length > 0) {
            // Multiple blog deletion
            response = await api.delete(`/blogs`, {
                data: { ids }, // Sending array of IDs in request body
            });
        } else {
            throw new Error("Either 'blogId' or 'ids' must be provided.");
        }

        console.log("Response from deleteBlogs API:", response);
        return response.data;
    } catch (error) {
        console.error("Error in deleteBlogs API:", error);
        throw error;
    }
};

export default deleteBlogs;