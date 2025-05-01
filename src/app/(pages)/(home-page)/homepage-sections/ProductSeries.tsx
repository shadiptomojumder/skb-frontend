"use client";
import getCategories from "@/api/categories/getCategories";
import CategoryLoading from "@/components/loading/CategoryLoading";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Category } from "@/interfaces/category.schemas";
import { useQuery } from "@tanstack/react-query";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductSeries = () => {
    const { data: categories, isLoading } = useQuery({
        queryKey: ["categories"],
        queryFn: () => getCategories(),
    });
    return (
        <section className="bg-slate-100 py-20">
            <div className="container mx-auto px-2">
                <Carousel
                    opts={{
                        dragFree: true,
                    }}>
                    <div className="flex justify-between pb-8">
                        <h2 className="font-roboto text-2xl font-bold text-black md:text-4xl">
                            Product Series
                        </h2>
                        <div className="relative w-[80px]">
                            <CarouselPrevious
                                variant="default"
                                className="absolute top-1/2 left-0 z-50 border-2 border-black bg-white hover:bg-slate-100 text-black"
                            />
                            <CarouselNext
                                variant="default"
                                className="absolute top-1/2 right-0 z-50 border-2 border-black bg-white hover:bg-slate-100 text-black"
                            />
                        </div>
                    </div>
                    <CarouselContent className="-ml-8">
                        {isLoading ? (
                            <>
                                {Array.from({ length: 10 }, (_, index) => (
                                    <CarouselItem
                                        key={index}
                                        className="w-full basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                                        <CategoryLoading />
                                    </CarouselItem>
                                ))}
                            </>
                        ) : (
                            <>
                                {categories &&
                                    categories.length > 0 &&
                                    categories.map((category: Category, index: number) => (
                                        <CarouselItem
                                            key={index}
                                            className="w-full basis-1/2 pl-8 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                                            <Link
                                                href={`/products?category=${category?.id}`}
                                                className="group relative">
                                                <div className="h-full rounded-lg border bg-white p-2 shadow-md">
                                                    {/* Gray Overlay */}
                                                    <div className="absolute inset-0 z-10 rounded-lg bg-black/20 transition-opacity duration-300" />

                                                    <div className="flex items-center justify-center rounded-lg">
                                                        <Image
                                                            src={category?.logo}
                                                            alt="food"
                                                            width={200}
                                                            height={200}
                                                            className="aspect-[400/480] object-cover object-center transition-transform duration-300 group-hover:scale-115"
                                                        />
                                                    </div>
                                                    <div className="absolute top-[68%] left-1/2 z-30 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:top-1/2 group-hover:-translate-y-1/2 group-hover:opacity-100">
                                                        <ChevronRight />
                                                    </div>
                                                    <p className="mt-3 text-center text-base font-semibold capitalize sm:text-xl">
                                                        {category?.title}
                                                    </p>
                                                </div>
                                            </Link>
                                        </CarouselItem>
                                    ))}
                            </>
                        )}
                    </CarouselContent>
                    {/* <CarouselPrevious />
                <CarouselNext /> */}
                </Carousel>
            </div>
        </section>
    );
};

export default ProductSeries;
