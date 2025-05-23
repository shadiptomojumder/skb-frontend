"use client";
import getCategoryById from "@/api/categories/getCategoryById";
import getProducts from "@/api/products/getProducts";
import ProductLoading from "@/components/loading/ProductLoading";
import ProductCard from "@/components/shared/ProductCard";
import ProductFilterBar from "@/components/shared/ProductFilterBar";
import { Skeleton } from "@/components/ui/skeleton";
import { APIResponse } from "@/interfaces/common.schemas";
import { Product } from "@/interfaces/product.schemas";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import ProductPagination from "../component/Pagination";

const ProductPage = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    // Extract the "category" parameter from searchParams
    const categoryId = searchParams.get("category");
    const { data: category, isLoading: categoryIsLoading } = useQuery({
        queryKey: ["category", categoryId],
        queryFn: () => getCategoryById({ categoryId: categoryId as string }),
        enabled: !!categoryId, // Only run this query if categoryId exists
    });

    const filters: { [key: string]: string } = {};
    for (const [key, value] of searchParams.entries()) {
        filters[key] = value;
    }
    // filters.page = currentPage.toString();
    useEffect(() => {
        const page = searchParams.get("page");
        if (page) {
            setCurrentPage(Number(page));
        }
    }, [searchParams]);

    const { data, isLoading } = useQuery<APIResponse<Product[]>>({
        queryKey: ["products", filters, currentPage],
        queryFn: () => getProducts({ ...filters, page: currentPage }),
        staleTime: 5 * 60 * 1000, // 5 minutes
    });

    const products = data?.data;
    useEffect(() => {
        if (data) {
            const totalProducts = data?.meta?.total ?? 1;
            const productsPerPage = Number(filters.limit) || 10; // Use the limit from filters or default to 10
            setTotalPages(Math.ceil(totalProducts / productsPerPage));
        }
    }, [data, filters.limit]);

    console.log("The products are:", products);
    // console.log("The category is:", category);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        const newSearchParams = new URLSearchParams(filters);
        newSearchParams.set("page", page.toString());
        router.replace(`${pathname}?${newSearchParams.toString()}`);
    };

    return (
        <div className="bg-slate-100 px-2 py-6 sm:px-0 sm:py-10">
            <div className="container mx-auto">
                {categoryId && (
                    <>
                        {categoryIsLoading ? (
                            <Skeleton className="aspect-[5.88] h-full w-full bg-gray-300"></Skeleton>
                        ) : (
                            <>
                                {category && (
                                    <div className="relative mb-10 h-[400px] w-full rounded-md bg-green-300">
                                        {/* Gray Overlay */}
                                        <div className="absolute inset-0 z-10 rounded-lg bg-black/20 transition-opacity duration-300" />
                                        <Image
                                            src={category?.thumbnail}
                                            alt={category?.title}
                                            height={50}
                                            width={50}
                                            className="aspect-[16/9] h-full w-full object-cover"
                                        />
                                        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-7xl font-bold text-white text-shadow-lg">
                                            {category?.title}
                                        </p>
                                    </div>
                                )}
                            </>
                        )}
                    </>
                )}
                <Suspense fallback={<div>Loading search...</div>}>
                    <ProductFilterBar filters={filters} pathname={pathname} router={router} />
                </Suspense>

                <div className="py-20">
                    {isLoading ? (
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                            {Array.from({ length: 5 }, (_, index) => (
                                <ProductLoading key={index} />
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                            {products?.map((product: Product) => {
                                return <ProductCard key={product?.id} product={product} />;
                            })}
                        </div>
                    )}

                    {/* Product Not Found */}
                    {products?.length === 0 ? (
                        <div className="flex h-[45dvh] items-center justify-center">
                            <p className="text-center text-lg font-semibold text-gray-500">
                                No products found here.
                            </p>
                        </div>
                    ) : null}
                </div>

                {products && products.length > 15 && (
                    <ProductPagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                )}
            </div>
        </div>
    );
};

export default ProductPage;
