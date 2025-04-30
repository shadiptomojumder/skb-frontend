"use client";
import getProducts from "@/api/products/getProducts";
import ProductLoading from "@/components/loading/ProductLoading";
import ProductCard from "@/components/shared/ProductCard";
import { Carousel, CarouselContent, CarouselItem, Next, Previous } from "@/components/ui/carousel";
import { APIResponse } from "@/interfaces/common.schemas";
import { Product } from "@/interfaces/product.schemas";
import { useQuery } from "@tanstack/react-query";

const SimilarProducts = ({ currentProductId }: { currentProductId: string }) => {
    const { data, isLoading } = useQuery<APIResponse<Product[]>>({
        queryKey: ["products"],
        queryFn: () => getProducts(),
    });
    // const products = data?.data;

    // Filter out the current product
    const products = data?.data?.filter((product) => product.id !== currentProductId);

    return (
        <div className="overflow-hidden py-12">
            {/* <Image src={weekend} alt="oppo" height={320} width={320}/> */}
            <div className="container mx-auto px-3 sm:px-0">
                <h2 className="mb-5 text-center font-rubik text-xl font-semibold text-black uppercase md:text-lg lg:text-2xl">
                    Similar Products ✨
                </h2>

                <Carousel
                    opts={{
                        dragFree: true,
                    }}>
                    <CarouselContent className="-ml-8">
                        {isLoading ? (
                            <>
                                {Array.from({ length: 6 }, (_, index) => (
                                    <CarouselItem
                                        key={index}
                                        className="w-full basis-1/2 pl-8 min-[450px]:basis-1/3 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                                        <ProductLoading />
                                    </CarouselItem>
                                ))}
                            </>
                        ) : (
                            <>
                                {products &&
                                    products.length > 0 &&
                                    products.map((product: Product, index: number) => (
                                        <CarouselItem
                                            key={index}
                                            className="w-full basis-1/2 pl-8 md:basis-1/3 lg:basis-1/4">
                                            <ProductCard product={product} />
                                        </CarouselItem>
                                    ))}
                            </>
                        )}
                    </CarouselContent>
                    <Previous className="-left-3.5 bg-accent text-black drop-shadow-lg" />
                    <Next className="-right-3.5 bg-accent text-black drop-shadow-lg" />
                </Carousel>
            </div>
        </div>
    );
};

export default SimilarProducts;
