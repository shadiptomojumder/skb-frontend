import { APIResponse } from "@/interfaces/common.schemas";
import { AxiosError, AxiosResponse } from "axios";
import { api } from "../api";
import { IBanner } from "@/interfaces/banner.schemas";

// Interface for updating a banner
interface UpdateBannerProps {
    bannerId: string;
    data: FormData | Partial<IBanner>;
}

const updateBanners = async ({
    bannerId,
    data,
}: UpdateBannerProps): Promise<APIResponse<IBanner>> => {
    try {
        const isFormData = data instanceof FormData;
        const headers = isFormData
            ? { "Content-Type": "multipart/form-data" }
            : { "Content-Type": "application/json" };

        const response: AxiosResponse<APIResponse<IBanner>> = await api.patch<APIResponse<IBanner>>(
            `/banners/${bannerId}`,
            data,
            {
                headers,
            },
        );

        // Ensure response.data exists and has a `data` property
        if (!response.data || !response.data.data) {
            throw new Error("Invalid API response: Missing data field");
        }

        return response.data;
    } catch (error) {
        console.log("The Update Banner API Error is:", error);

        if (error instanceof AxiosError && error.response) {
            console.log("Server Error:", error.response.data);
            throw error.response.data; // Throwing the actual API error response
        }

        throw new Error("An unknown error occurred");
    }
};

export default updateBanners;