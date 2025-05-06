"use client";
import getBlogs from "@/api/blogs/getBlogs";
import { Skeleton } from "@/components/ui/skeleton";
import { IBlog } from "@/interfaces/blog.schemas";
import { stripHtmlTags } from "@/utils/stripHtmlTags";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

export default function BlogsPage() {
    const { data: blogs, isLoading } = useQuery<IBlog[]>({
        queryKey: ["blogs"],
        queryFn: () => getBlogs(),
    });

    console.log("Blogs List is:", blogs); // Log the blogs data to the console

    return (
        <div className="bg-slate-100 px-2 py-12 sm:px-0">
            <div className="container mx-auto">
                <h1 className="mb-8 text-center text-4xl font-bold">Our Blogs</h1>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {isLoading ? (
                        <>
                            {/* Skeleton loading state for blogs */}
                            {Array.from({ length: 6 }, (_, index) => (
                                <section
                                    key={index}
                                    className="flex w-full flex-col justify-between rounded-md border bg-white p-3 shadow">
                                    <Skeleton className="mx-auto mb-3 aspect-video h-full w-full bg-gray-300" />

                                    <Skeleton className="mx-auto mb-3 h-[18px] w-full rounded-full bg-gray-300" />
                                    <div className="mx-auto flex w-[60%] items-center justify-between gap-3">
                                        <Skeleton className="mx-auto h-[12px] w-full bg-gray-300 md:h-[15px]" />
                                        <Skeleton className="mx-auto h-[12px] w-full bg-gray-300 md:h-[15px]" />
                                    </div>
                                    <Skeleton className="mx-auto mt-3 h-[18px] w-full rounded-full bg-gray-300" />
                                    <Skeleton className="mx-auto mt-2 h-[20px] w-full rounded-full bg-gray-300 md:mt-4 md:h-[32px]" />
                                </section>
                            ))}
                        </>
                    ) : (
                        <></>
                    )}
                    {blogs &&
                        blogs
                            .filter((blog) => blog.isActive) // Filter blogs with isActive === true
                            .map((blog) => (
                                <Link key={blog.id} href={`/blogs/${blog.id}`} className="group">
                                    <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
                                        <div className="relative h-48 w-full">
                                            <Image
                                                src={blog.image || "/placeholder.svg"}
                                                alt={blog?.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-1 flex-col p-6">
                                            <p className="mb-2 text-sm text-muted-foreground">
                                                {format(blog?.createdAt, "dd MMMM yy")}
                                            </p>
                                            <h2 className="mb-3 text-xl font-semibold capitalize transition-colors duration-300 group-hover:text-gray-900">
                                                {blog.title}
                                            </h2>
                                            <p className="line-clamp-3 text-gray-600 dark:text-gray-300">
                                                {stripHtmlTags(blog.description)}
                                            </p>
                                            <div className="mt-auto pt-4">
                                                <span className="inline-flex items-center font-medium text-gray-800 group-hover:underline">
                                                    Read more
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M9 5l7 7-7 7"
                                                        />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                </div>
            </div>
        </div>
    );
}
