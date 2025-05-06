"use client";
import getBlogById from "@/api/blogs/getBlogById";
import { Skeleton } from "@/components/ui/skeleton";
import { IBlog } from "@/interfaces/blog.schemas";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function BlogDetailPage() {
    const params = useParams(); // Get URL parameters

    const { blogId } = params;

    const { data: blog, isLoading } = useQuery<IBlog>({
        queryKey: ["blog", blogId],
        queryFn: () => getBlogById({ blogId: blogId as string }),
    });

    console.log("Blog details:", blog); // Log the blog data to the console

    // If no blog post is found, return a 404 page
    // if (!blog) {
    //     notFound();
    // }

    // Function to replace empty <p> tags with a placeholder
    function replaceEmptyPTags(html: string): string {
        return html.replace(/<p[^>]*>\s*<\/p>/g, "<p>&nbsp;</p>");
    }

    return (
        <section className="bg-slate-100">
            <article className="container mx-auto max-w-4xl px-4 py-12">
                <Link
                    href="/blogs"
                    className="mb-8 inline-flex items-center text-gray-800 hover:underline">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to all blogs
                </Link>
                {isLoading ? (
                    <>
                        <section className="flex w-full flex-col justify-between">
                            <Skeleton className="mx-auto mb-3 aspect-video h-full w-full bg-gray-300" />

                            <Skeleton className="mx-auto mb-3 h-[18px] w-full rounded-full bg-gray-300" />
                            <div className="mx-auto flex w-[60%] items-center justify-between gap-3">
                                <Skeleton className="mx-auto h-[12px] w-full bg-gray-300 md:h-[15px]" />
                                <Skeleton className="mx-auto h-[12px] w-full bg-gray-300 md:h-[15px]" />
                            </div>
                            <Skeleton className="mx-auto mt-3 h-[18px] w-full rounded-full bg-gray-300" />
                            <Skeleton className="mx-auto mt-2 h-[20px] w-full rounded-full bg-gray-300 md:mt-4 md:h-[32px]" />
                        </section>
                    </>
                ) : (
                    <>
                        <div className="relative mb-8 h-[400px] w-full overflow-hidden rounded-xl">
                            <Image
                                src={blog?.image || "/placeholder.svg"}
                                alt="Blog Image"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center text-muted-foreground">
                                <span className="mx-2">Published On :</span>
                                <p>{format(blog?.createdAt || "02/02/2002", "dd MMMM yy")}</p>
                            </div>

                            <h1 className="text-4xl font-bold capitalize">{blog?.title}</h1>

                            <div
                                className="prose prose-lg dark:prose-invert max-w-none"
                                dangerouslySetInnerHTML={{
                                    __html: replaceEmptyPTags(
                                        blog?.description || "<p>No description available.</p>",
                                    ),
                                }}
                            />

<div
                                className=""
                                dangerouslySetInnerHTML={{
                                    __html: replaceEmptyPTags(
                                        blog?.description || "<p>No description available.</p>"
                                    ),
                                }}
                            />
                        </div>
                    </>
                )}

                
            </article>
        </section>
    );
}
