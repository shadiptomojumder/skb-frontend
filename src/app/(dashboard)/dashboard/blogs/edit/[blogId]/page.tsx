"use client";
import getBlogById from "@/api/blogs/getBlogById";
import updateBlog from "@/api/blogs/updateBlog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BlogFormData, blogSchema } from "@/interfaces/blog.schemas";
import { ImageFile } from "@/interfaces/common.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Edit, LoaderCircle } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import TextEditor from "../../components/TextEditor";
import BlogImageSelector from "../../components/blog-image-selector";

const BlogEditPage = () => {
    const [bannerImage, setBannerImage] = useState<ImageFile | null>(null);
    const [initialBannerImage, setInitialBannerImage] = useState<string | null>(null);
    const [isImageChanged, setIsImageChanged] = useState(false);
    const [content, setContent] = useState("");
    const [initialContent, setInitialContent] = useState("");
    const queryClient = useQueryClient();
    const router = useRouter();
    const { blogId } = useParams();

    const { data: blog } = useQuery({
        queryKey: ["blog", blogId],
        queryFn: () => getBlogById({ blogId: blogId as string }),
    });

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty },
        reset,
        setValue,
    } = useForm<BlogFormData>({
        resolver: zodResolver(blogSchema),
        defaultValues: {
            title: blog?.title || "",
            description: blog?.description || "",
        },
    });

    console.log("Form errors:", errors);

    useEffect(() => {
        if (blog) {
            setValue("title", blog.title);
            setValue("description", blog.description || "");
            setContent(blog.description || "");
            setInitialContent(blog.description || "");

            if (blog.image) {
                setBannerImage({
                    id: blog.image,
                    file: new File([], blog.image),
                    preview: blog.image,
                    name: blog.image,
                    type: "image/png",
                });
                setInitialBannerImage(blog.image);
            }
        }
    }, [blog, setValue]);

    const { mutate, isPending } = useMutation({
        mutationFn: updateBlog,
        onSuccess: (response) => {
            if (response.statusCode === 200) {
                toast.success("Blog successfully updated");
                queryClient.invalidateQueries({ queryKey: ["blogs"] });
                reset();
                setBannerImage(null);
                setContent("");
                router.push("/dashboard/blogs");
            }
        },
        onError: (error: {
            response?: { status: number };
            request?: XMLHttpRequest;
            message?: string;
        }) => {
            if (error?.response?.status === 409) {
                toast.warning("Blog already exists!");
            } else if (error?.response?.status === 400) {
                toast.warning("Please fill all the required fields!");
            } else if (error.request) {
                toast.error("No response received from the server!");
            } else {
                console.log("Error while sending the request:", error.message);
            }
        },
    });

    const onSubmit: SubmitHandler<BlogFormData> = async (data) => {
        console.log("Form submitted with data:", data); // Debugging log
        const formData = new FormData();

        // Append text fields
        if (data.title !== blog?.title) {
            formData.append("title", data.title);
        }

        if (content !== initialContent) {
            formData.append("description", content);
        }

        // Append banner image file only if it has changed
        if (bannerImage?.file && isImageChanged) {
            formData.append("image", bannerImage.file);
        }

        mutate({ blogId: blogId as string, data: formData });
    };

    return (
        <div className="px-4 py-5 sm:px-5 md:px-7 lg:px-12">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-5 flex flex-col items-start justify-between gap-3 lg:flex-row">
                    <div>
                        <h2 className="flex gap-2 text-center text-lg font-semibold text-primary sm:text-left">
                            <Edit />
                            Edit Blog
                        </h2>
                        <p className="text-start text-sm sm:text-left">
                            Update your blog details and click save to publish changes.
                        </p>
                    </div>
                    <Button
                        type="submit"
                        size="lg"
                        onClick={() => console.log("Save & Publish clicked")}
                        disabled={
                            (!isDirty &&
                                content === initialContent &&
                                bannerImage?.preview === initialBannerImage) ||
                            isPending
                        }
                        className="hidden lg:block">
                        {isPending ? (
                            <>
                                <LoaderCircle className="animate-spin" /> Submitting
                            </>
                        ) : (
                            <>Save & Publish</>
                        )}
                    </Button>
                </div>

                <section className="mb-5 flex flex-col justify-between gap-5 lg:flex-row">
                    <section className="w-full rounded-lg border-2 bg-gray-100 pb-5">
                        <h2 className="mb-3 border-b-2 border-primary px-5 py-2 text-lg font-semibold text-primary">
                            General Information
                        </h2>
                        <div className="px-5">
                            <Label htmlFor="title" className="text-base font-semibold">
                                Blog Title <span className="text-red-600">*</span>
                            </Label>
                            <Input
                                {...register("title")}
                                id="title"
                                name="title"
                                type="text"
                                placeholder="Enter Blog Title"
                                className="mt-2 h-11 bg-white"
                            />
                            <div className="h-5">
                                {errors.title && (
                                    <span className="text-xs text-red-500">
                                        {errors.title.message}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="px-5">
                            <Label htmlFor="description" className="text-base font-semibold">
                                Blog Description <span className="text-red-600">*</span>
                            </Label>
                            <TextEditor
                                content={content}
                                setContent={(value) => {
                                    setContent(value);
                                    setValue("description", value as string); // ✅ ensure value is a string
                                }}
                            />
                        </div>
                    </section>

                    <section className="h-fit rounded-lg border-2 bg-gray-100 lg:w-[700px] lg:max-w-[700px]">
                        <h2 className="mb-3 border-b-2 border-primary px-5 py-2 text-lg font-semibold text-primary">
                            Blog Media
                        </h2>
                        <div className="px-5">
                            <BlogImageSelector
                                image={bannerImage}
                                setImage={setBannerImage}
                                setIsImageChanged={setIsImageChanged}
                            />
                        </div>
                    </section>
                </section>

                <Button
                    type="submit"
                    size="lg"
                    disabled={
                        !isDirty &&
                        content === initialContent &&
                        bannerImage?.preview === initialBannerImage
                    }
                    className="mt-5 w-full lg:hidden">
                    {isPending ? (
                        <>
                            <LoaderCircle className="animate-spin" /> Submitting
                        </>
                    ) : (
                        <>Save & Publish</>
                    )}
                </Button>
            </form>
        </div>
    );
};

export default BlogEditPage;
