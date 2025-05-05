"use client";
import getBlogs from "@/api/blogs/getBlogs";
import { IBlog } from "@/interfaces/blog.schemas";
import { useQuery } from "@tanstack/react-query";
import { Boxes } from "lucide-react";
import { columns } from "./blogsTable/columns";
import { DataTable } from "./blogsTable/data-table";

const AllBlogsPage = () => {
    const { data } = useQuery<IBlog[]>({
        queryKey: ["blogs"],
        queryFn: () => getBlogs({ limit: 0 }),
    });
    const blogs = data;

    return (
        <section className="px-4 py-5 sm:px-5 md:px-7 lg:px-12">
            <div className="mb-5">
                <h2 className="flex gap-2 text-center text-lg font-semibold text-primary sm:text-left">
                    <Boxes />
                    All Blogs
                </h2>
                <p className="text-start text-sm sm:text-left">
                    Select your image and suitable name for product and click create button.
                </p>
            </div>
            <div>
                <DataTable columns={columns} data={blogs || []} />
            </div>
        </section>
    );
};

export default AllBlogsPage;
