import { api } from "../api";

const Uploads = async (data) => {
    console.log("The Data in upload api is:", data);

    try {
        const response = await api.post(`/uploads`, data, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        console.log("response in upload.ts file: ", response);

        return response.data;
    } catch (error) {
        console.log("The Error in Appointment api is:", error);

        throw error;
    }
};

export default Uploads;
