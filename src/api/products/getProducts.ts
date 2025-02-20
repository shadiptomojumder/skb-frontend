import { api } from "../api";

interface ProductQueryParams {
    sortBy?: string;
    sortOrder?: "asc" | "desc";
    limit?: number;
    page?: number;
    name?: string;
    price?: number;
    sku?: string;
}

const GetProducts = async (queryParams: ProductQueryParams) => {
    try {
        // Build query string dynamically
        const buildQueryString = (queryParams: ProductQueryParams) => {
            return Object.entries(queryParams)
                .filter(([, value]) => value !== undefined && value !== null)
                .map(
                    ([key, value]) =>
                        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`,
                )
                .join("&");
        };

        const queryString = buildQueryString(queryParams);

        const url = queryString ? `/products?${queryString}` : "/products";

        const response = await api.get(url);

        return response.data?.data ?? [];
    } catch (error) {
        console.log("Error in DeleteCategory API:", error);
        throw error;
    }
};

export default GetProducts;
