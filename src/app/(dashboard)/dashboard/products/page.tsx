"use client";
import GetProducts from "@/api/products/getProducts";
import { Product } from "@/interfaces/product.schemas";
import { useQuery } from "@tanstack/react-query";
import { Boxes } from "lucide-react";
import { columns } from "../productsTable/columns";
import { DataTable } from "../productsTable/data-table";

const AllProductPage = () => {
    const { data: products } = useQuery<Product[]>({
        queryKey: ["products"],
        queryFn: ()=> GetProducts({"limit":0}),
    });

    console.log("The products are:", products);

    return (
        <section className="px-4 py-5 sm:px-5 md:px-7 lg:px-12">
            <div className="mb-5">
                <h2 className="flex gap-2 text-center text-lg font-semibold text-primary sm:text-left">
                    <Boxes />
                    All Products
                </h2>
                <p className="text-start text-sm sm:text-left">
                    Select your image and suitable name for product and click create button.
                </p>
            </div>
            <div className="">
                <DataTable columns={columns} data={products || []} />
            </div>
        </section>
    );
};

export default AllProductPage;
