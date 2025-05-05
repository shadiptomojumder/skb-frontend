import { Checkbox } from "@/components/ui/checkbox";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { IBlog } from "@/interfaces/blog.schemas";
import { ColumnDef } from "@tanstack/react-table";
import { FileImage } from "lucide-react";
import Image from "next/image";
import Actions from "./actions";
import CnangeSwitch from "./change-switch";
import { DataTableColumnHeader } from "./data-table-column-header";

export const columns: ColumnDef<IBlog>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        id: "image",
        accessorKey: "image",
        header: () => <div className="text-nowrap"> Image</div>,
        cell: ({ row }) => {
            const image = row.getValue("image");

            return (
                <div className="">
                    {image ? (
                        <Image
                            src={(image as string) || ""}
                            alt="thumbnail"
                            width={70}
                            height={70}
                            className="aspect-video w-[200px] min-w-[100px] rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                    ) : (
                        <div className="flex aspect-[800/800] w-[84px] max-w-[84px] items-center justify-center rounded-md bg-slate-200">
                            <FileImage />
                        </div>
                    )}
                </div>
            );
        },
    },
    {
        id: "title",
        accessorKey: "title",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Title" />,
        cell: ({ row }) => {
            return (
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div className="line-clamp-2 w-fit max-w-[450px] min-w-[200px] text-sm capitalize">
                                {row.getValue("title")}
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>{row.getValue("title")}</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            );
        },
    },
    {
        id: "description",
        accessorKey: "description",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Description" />,
        cell: ({ row }) => {
            const description = row.getValue<string>("description");
            return (
                <div
                    className="line-clamp-2 w-fit max-w-[450px] min-w-[200px] text-sm capitalize"
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            );
        },
    },

    {
        id: "isActive",
        accessorKey: "isActive",
        header: () => <div>Active Status</div>,
        cell: ({ row }) => {
            const blogId = row.getValue("id");
            const initialValue = row.getValue<boolean>("isActive");
            //console.log("isActive", isActive);

            return (
                <CnangeSwitch
                    fieldName={"isActive"}
                    initialValue={initialValue}
                    blogId={blogId as string}
                />
            );
        },
    },
    {
        id: "id",
        accessorKey: "id",
        header: () => <div className="text-center">Actions</div>,
        cell: ({ row }) => {
            const blogId = row.getValue("id");
            //console.log("productId", productId);

            return <Actions blogId={blogId as string} />;
        },
    },
];
