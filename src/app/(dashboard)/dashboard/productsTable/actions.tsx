import DeleteCategory from "@/api/categories/deleteCategory";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Eye, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

const Actions = ({ categoryId }: { categoryId: string }) => {
    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationKey: [],
        mutationFn: DeleteCategory,
        onSuccess: (response) => {
            console.log("the res is ", response);

            if (response.statusCode === 200) {
                toast.success("Category deleted successfully");
                queryClient.invalidateQueries({ queryKey: ["categories"] });
            }
        },
        onError: (error: {
            response?: { status: number };
            request?: XMLHttpRequest;
            message?: string;
        }) => {
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
        mutate(categoryId);
    };

    return (
        <div className="flex items-center gap-2">
            <Link
                href={`/dashboard/categories/edit/${categoryId}`}
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
