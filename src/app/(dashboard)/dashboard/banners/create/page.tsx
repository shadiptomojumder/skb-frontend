"use client";
import createBanner from "@/api/banners/createBanner";
import BannerImageSelector from "@/components/dashboardComponents/banner-image-selector";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BannerFormData, bannerSchema } from "@/interfaces/banner.schemas";
import { ImageFile } from "@/interfaces/common.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { GalleryVertical, LoaderCircle } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const CategoryCreatePage = () => {
    const [bannerImage, setBannerImage] = useState<ImageFile | null>(null);

    const queryClient = useQueryClient();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<BannerFormData>({ resolver: zodResolver(bannerSchema) });

    const { mutate, isPending } = useMutation({
        mutationFn: createBanner,
        onSuccess: (response) => {
            console.log("The Response was:", response);
            console.log("The Response.data was:", response.data);

            if (response.statusCode === 200) {
                toast.success("Category successfully created");
                queryClient.invalidateQueries({ queryKey: ["categories"] });
                reset();
                setBannerImage(null);
            }
        },
        onError: (error: AxiosError) => {
            console.log("The Create Category Error is: ", error);

            if (error?.response?.status == 409) {
                toast.warning("Category already created!!");
            } else if (error?.response?.status == 400) {
                toast.warning("Please fill all the required fields!");
            } else if (error.request) {
                toast.error("No response received from the server!!");
            } else {
                console.log("Error while sending the request:", error.message);
            }
        },
    });

    const onSubmit: SubmitHandler<BannerFormData> = async (data) => {
        const formData = new FormData();

        // Append text fields
        Object.keys(data).forEach((key) => {
            formData.append(key, data[key as keyof typeof data]);
        });

        // Append banner image file if provided
        if (bannerImage) {
            formData.append("image", bannerImage.file);
        }

        mutate(formData);
    };

    return (
        <div className="px-4 py-5 sm:px-5 md:px-7 lg:px-12">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-5 flex flex-col items-start justify-between gap-3 lg:flex-row">
                    <div className="mb-5 flex flex-col items-start justify-between gap-3 lg:flex-row">
                        <div>
                            <h2 className="flex gap-2 text-center text-lg font-semibold text-primary sm:text-left">
                                <GalleryVertical />
                                Create New Banners
                            </h2>
                            <p className="text-start text-sm sm:text-left">
                                Select your image and title for create new banner and click create
                                button.
                            </p>
                        </div>
                    </div>

                    <Button
                        type="submit"
                        size="lg"
                        disabled={isPending}
                        className="hidden lg:block">
                        {isPending ? (
                            <span className="flex items-center gap-2">
                                <LoaderCircle className="animate-spin" /> Submiting
                            </span>
                        ) : (
                            <>Save & Publish</>
                        )}
                    </Button>
                </div>

                <section className="mb-5 flex flex-col justify-between gap-5 lg:flex-row">
                    {/* First Element */}
                    <section className="w-full rounded-lg border-2 bg-gray-100 pb-5">
                        <h2 className="mb-3 border-b-2 border-primary px-5 py-2 text-lg font-semibold text-primary">
                            General information
                        </h2>
                        <div className="px-5">
                            <Label htmlFor="title" className="text-base font-semibold">
                                Category Title <span className="text-red-600">*</span>
                            </Label>
                            <Input
                                {...register("title")}
                                id="title"
                                name="title"
                                type="text"
                                placeholder="Enter Product Name"
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

                        <BannerImageSelector image={bannerImage} setImage={setBannerImage} />
                    </section>
                </section>

                <Button
                    type="submit"
                    size="lg"
                    disabled={isPending}
                    className="mt-5 w-full lg:hidden">
                    {isPending ? (
                        <>
                            <LoaderCircle className="animate-spin" /> Submiting
                        </>
                    ) : (
                        <>Save & Publish</>
                    )}
                </Button>
            </form>
        </div>
    );
};

export default CategoryCreatePage;
