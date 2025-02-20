import DeleteProducts from "@/api/products/deleteProducts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Eye, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

const Actions = ({ productId }: { productId: string }) => {
    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationKey: [],
        mutationFn: DeleteProducts,
        onSuccess: (response) => {
            console.log("the res is ", response);

            if (response.statusCode === 200) {
                toast.success("Product successfully deleted");
                queryClient.invalidateQueries({ queryKey: ["products"] });
            }
        },
        onError: (error: AxiosError) => {
            if (error?.response?.status == 400) {
                toast.warning("Missing product Id");
            } else if (error?.response?.status == 500) {
                toast.error("Something went wrong during an appointment");
            } else if (error.request) {
                toast.error("No response received from the server!!");
            } else {
                console.error("Error while sending the request:", error.message);
            }
        },
    });

    const handleDelete = () => {
        mutate({ productId });
    };

    return (
        <div className="flex items-center gap-2">
            <Link
                href={`/dashboard/products/edit/${productId}`}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2992F21C] text-primary">
                <Pencil size={18} />
            </Link>
            <button
                onClick={() => handleDelete()}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-red-200 text-red-700">
                <Trash2 size={18} />
            </button>
            <button
                onClick={() => handleDelete()}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-green-200 text-green-700">
                <Eye size={18} />
            </button>
        </div>
    );
};

export default Actions;
