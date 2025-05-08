"use client";
import getProductById from "@/api/products/getProductById";
import ProductNotFound from "@/components/loading/ProductNotFound";
import SimilarProducts from "@/components/shared/SimilarProducts";
import { Skeleton } from "@/components/ui/skeleton";
import { formatPrice } from "@/utils/fomatPrice";
import { useQuery } from "@tanstack/react-query";
import { Image as ImageIcon } from "lucide-react";
import { useParams } from "next/navigation";
import ProductGallery from "../../component/ProductGallery";

const ProductDetailsPage = () => {
    const params = useParams(); // Get URL parameters

    const { productId } = params;

    // console.log("The productId is:", productId);
    const {
        data: product,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["product", productId],
        queryFn: () => getProductById({ productId: productId as string }),
    });


    // if (isLoading) {
    //     return <p>Loading...</p>;
    // }
    if (error) {
        return <ProductNotFound />;
    }

    return (
        <section className="bg-slate-100 px-2 sm:px-0 sm:py-20">
            <div className="container mx-auto">
                <section className="mb-15 flex flex-col items-start gap-10 sm:gap-15 md:gap-25 lg:flex-row">
                    <div className="mx-auto rounded-sm border border-gray-200 bg-white p-0 shadow-lg sm:mx-0">
                        {isLoading ? (
                            <>
                                <Skeleton className="flex h-[165px] w-[207px] items-center justify-center rounded-sm bg-gray-300 text-[230px] text-gray-400 sm:h-[332px] sm:w-[415px]">
                                    <ImageIcon className="h-[130px] w-[130px]" />
                                </Skeleton>
                            </>
                        ) : (
                            <>{product && <ProductGallery images={product?.images} />}</>
                        )}
                    </div>
                    {isLoading ? (
                        <div className="flex w-full flex-col gap-3 bg-white sm:w-[45%]">
                            <Skeleton className="h-[20px] w-full rounded-full bg-gray-300" />
                            <Skeleton className="h-[18px] w-full rounded-full bg-gray-300" />
                            <Skeleton className="hidden h-[18px] rounded-full bg-gray-300 sm:block sm:w-[85%] md:w-[45%]" />
                            <Skeleton className="h-[20px] w-full rounded-full bg-gray-300 sm:w-[75%] md:w-[40%]" />
                            <Skeleton className="mt-4 h-[40px] w-full rounded-full bg-gray-300 sm:mt-7 md:w-[45%]" />
                        </div>
                    ) : (
                        <div className="mx-auto rounded-lg text-center sm:mx-0 sm:text-start">
                            <p className="mb-5 text-4xl font-bold text-gray-900">{product?.name}</p>
                            <p className="border-b-2 border-gray-200 pb-4 text-base font-medium text-[#1a1a1ab3]">
                                TK {formatPrice(product?.price)} (Without shiping cost)
                            </p>
                            <p className="py-10 text-base whitespace-pre-wrap text-[#1a1a1ab3]">
                                {product?.description}
                            </p>

                            {/* <button className="hover:bg-gray-350 w-full cursor-pointer rounded-full bg-gray-800 py-3 text-center font-bold text-white">
                                Add to cart
                            </button> */}
                        </div>
                    )}
                </section>
                {/* <Description product={product} /> */}
            </div>
            <SimilarProducts currentProductId={product?.id || ""} />
        </section>
    );
};

export default ProductDetailsPage;
