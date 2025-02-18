"use client";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Category } from "@/interfaces/category.schemas";
import { Product } from "@/interfaces/product.schemas";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import Image from "next/image";
import Actions from "./actions";
import { DataTableColumnHeader } from "./data-table-column-header";

export const columns: ColumnDef<Product>[] = [
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
        id: "images",
        accessorKey: "images",
        header: () => <div className="text-nowrap"> Image</div>,
        cell: ({ row }) => {
            const images = row.getValue("images");
            const firstImage = Array.isArray(images) && images.length > 0 ? images[0] : null;
            return (
                <div className="">
                    {firstImage ? (
                        <Image src={firstImage} alt="thumbnail" width={60} height={60} className="min-w-[60px] min-h-[60px]" />
                    ) : (
                        <div>No Image</div>
                    )}
                </div>
            );
        },
    },
    {
        id: "name",
        accessorKey: "name",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
        cell: ({ row }) => {
            return (
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div className="line-clamp-2 w-fit min-w-[200px] max-w-[450px] text-sm capitalize">
                                {row.getValue("name")}
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>{row.getValue("name")}</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            );
        },
    },
    {
        id: "category",
        accessorKey: "category",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Category" />,
        cell: ({ row }) => {
            const category = row.getValue<Category>("category");
            return (
                <div className="w-fit text-base text-nowrap capitalize">
                    <Badge variant="primary" className="">
                        {category?.title}
                    </Badge>
                </div>
            );
        },
    },
    {
        id: "stock",
        accessorKey: "stock",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Stock" />,
        cell: ({ row }) => {
            const stock = row.getValue<number>("stock");
            return (
                <div className="text-base text-nowrap">
                    {stock === 0 ? (
                        <Badge variant="red">Out of Stock</Badge>
                    ) : (
                        <Badge variant="green" className="">
                            {stock} in Stock
                        </Badge>
                    )}
                </div>
            );
        },
    },
    {
        id: "createdAt",
        accessorKey: "createdAt",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Created At" />,
        cell: ({ row }) => {
            const date = new Date(row.getValue("createdAt"));
            return <div className="capitalize">{format(date, "dd MMMM yy")}</div>;
        },
    },
    {
        id: "id",
        accessorKey: "id",
        header: () => <div>Actions</div>,
        cell: ({ row }) => {
            const categoryId = row.getValue("id");
            //console.log("categoryId", categoryId);

            return <Actions categoryId={categoryId as string} />;
        },
    },

    // {
    //     id: "actions",
    //     enableHiding: false,
    //     cell: ({ row }) => {
    //         const product = row.original;
    //         // console.log("Apointment", apoointment);

    //         return <ActionButton product={product} />;
    //     },
    // },
];
