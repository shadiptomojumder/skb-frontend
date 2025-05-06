import { api } from "../api";

const createBlog = async (data: FormData) => {
    try {
        const response = await api.post(`/blogs`, data, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        console.log("The createBlog API response is: ", response);

        return response.data;
    } catch (error) {
        console.log("The createBlog API Error is:", error);

        throw error;
    }
};

export default createBlog;
