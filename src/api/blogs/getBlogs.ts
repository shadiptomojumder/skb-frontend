
import { APIResponse } from "@/interfaces/common.schemas";
import { AxiosError } from "axios";
import { api } from "../api";
import { IBlog } from "@/interfaces/blog.schemas";

/**
 * Interface for blog query parameters
 */
interface BlogQueryParams {
    sortBy?: string;
    sortOrder?: "asc" | "desc";
    limit?: number;
    page?: number;
    title?: string; // Optional: Fetch by blog title
}

const getBlogs = async (queryParams: BlogQueryParams = {}): Promise<IBlog[]> => {
    try {
        // Build query string dynamically
        const buildQueryString = (queryParams: BlogQueryParams) => {
            return Object.entries(queryParams)
                .filter(([, value]) => value !== undefined && value !== null)
                .map(
                    ([key, value]) =>
                        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
                )
                .join("&");
        };

        const queryString = buildQueryString(queryParams);
        const url = queryString ? `/blogs?${queryString}` : "/blogs";

        const response = await api.get<APIResponse<IBlog[]>>(url);
        // console.log("The Get Blogs API Response is:", response);

        return response.data?.data ?? [];
    } catch (error) {
        console.log("The Get Blogs API Error is:", error);

        if (error instanceof AxiosError && error.response) {
            console.log("Server Error:", error.response.data);
            throw error.response.data; // Throwing the actual API error response
        }

        throw new Error("An unknown error occurred");
    }
};

export default getBlogs;