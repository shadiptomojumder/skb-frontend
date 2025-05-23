"use client";
import getCategories from "@/api/categories/getCategories";
import createProduct from "@/api/products/createProduct";
import ProductImageSelector from "@/components/dashboardComponents/product-image-selector";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Category } from "@/interfaces/category.schemas";
import { APIError, ImageFile } from "@/interfaces/common.schemas";
import { ProductFormData, productSchema } from "@/interfaces/product.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { LoaderCircle, PackagePlus } from "lucide-react";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const CreateNewProductPage = () => {
    const [images, setImages] = useState<ImageFile[]>([]);
    //console.log("The images are form file:", images);

    const { data: categories } = useQuery<Category[]>({
        queryKey: ["categories"],
        queryFn: () => getCategories(),
    });
    // console.log("The categories are:", categories);

    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ProductFormData>({ resolver: zodResolver(productSchema) });

    const { mutate, isPending } = useMutation({
        mutationFn: createProduct,
        onSuccess: (response) => {
            console.log("The Response was:", response);
            console.log("The Response.data was:", response.data);

            if (response.statusCode === 200) {
                toast.success("Product successfully created");
                reset();
                setImages([]);
            }
        },
        onError: (error: APIError) => {
            console.log("The Create Product Page Error is: ", error);

            if (error.statusCode === 409) {
                toast.warning("Product already exist.");
            } else if (error.statusCode === 400) {
                toast.warning(error.message || "Please fill all the required fields!");
            } else {
                toast.error(error.message || "An unknown error occurred.");
            }
        },
    });

    const onSubmit: SubmitHandler<ProductFormData> = async (data) => {
        const formData = new FormData();

        // Append text fields
        Object.keys(data).forEach((key) => {
            formData.append(key, data[key as keyof typeof data]);
        });

        if (images.length === 0) {
            toast.warning("Please upload at least one product image.");
            return;
        }

        // Append image files
        images.forEach((image) => {
            formData.append("images", image.file);
        });

        mutate(formData);
    };
    return (
        <div className="px-4 py-5 sm:px-5 md:px-7 lg:px-12">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-5 flex flex-col items-start justify-between gap-3 lg:flex-row">
                    <div>
                        <h2 className="flex gap-2 text-center text-lg font-semibold text-primary sm:text-left">
                            <PackagePlus />
                            Create Product
                        </h2>
                        <p className="text-start text-sm sm:text-left">
                            Select your image and suitable name for product and click create button.
                        </p>
                    </div>
                    <Button type="submit" size="lg" disabled={isPending}>
                        {isPending ? (
                            <>
                                <LoaderCircle className="animate-spin" /> Submiting
                            </>
                        ) : (
                            <>Save & Publish</>
                        )}
                    </Button>
                </div>

                <section className="flex flex-col justify-between gap-5 lg:flex-row">
                    {/* First element */}
                    <section className="rounded-lg border-2 bg-gray-100 pb-5 lg:w-[80%]">
                        <h2 className="mb-3 border-b-2 border-primary px-5 py-2 text-lg font-semibold text-primary">
                            General information
                        </h2>
                        <div className="px-5">
                            <Label htmlFor="name" className="text-base font-semibold">
                                Product Name <span className="text-red-600">*</span>
                            </Label>
                            <Input
                                {...register("name")}
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Enter Product Name"
                                className="mt-2 h-11 bg-white"
                            />

                            <div className="h-5">
                                {errors.name && (
                                    <span className="text-xs text-red-500">
                                        {errors.name.message}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Product Price and Category */}
                        <section className="flex flex-col items-center justify-between px-5 sm:gap-5 xl:flex-row">
                            <div className="w-full">
                                <Label htmlFor="price" className="text-base font-semibold">
                                    Product Regular Price <span className="text-red-600">*</span>
                                </Label>
                                <Input
                                    {...register("price", {
                                        valueAsNumber: true,
                                    })}
                                    id="price"
                                    name="price"
                                    type="number"
                                    placeholder="Enter Product Price"
                                    className="mt-2 h-11 bg-white"
                                />

                                <div className="h-5">
                                    {errors.price && (
                                        <span className="text-xs text-red-500">
                                            {errors.price.message}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="w-full">
                                <Label htmlFor="category" className="text-base font-semibold">
                                    Product Category <span className="text-red-500">*</span>
                                </Label>
                                <Controller
                                    name="category"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger className="mt-2 h-11 bg-white capitalize focus:ring-primary">
                                                <SelectValue placeholder="Select Product Category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {categories && categories.length > 0 ? (
                                                    categories.map(
                                                        (category: Category, i: number) => {
                                                            return (
                                                                <SelectItem
                                                                    className="capitalize"
                                                                    value={category?.id}
                                                                    key={i}>
                                                                    {category.title}
                                                                </SelectItem>
                                                            );
                                                        },
                                                    )
                                                ) : (
                                                    <SelectItem
                                                        className="capitalize"
                                                        value="No Category Found">
                                                        No Category Found
                                                    </SelectItem>
                                                )}
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                                <div className="h-5">
                                    {errors.category && (
                                        <span className="text-sm text-red-500">
                                            {errors.category.message}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </section>

                        {/* Product Description */}
                        <div className="px-5">
                            <Label htmlFor="description" className="text-base font-semibold">
                                Product Description <span className="text-red-600">*</span>
                            </Label>
                            <Textarea
                                {...register("description")}
                                id="description"
                                name="description"
                                placeholder="Enter Product Description"
                                className="mt-2 h-38 bg-white outline-primary"
                            />

                            <div className="h-5">
                                {errors.description && (
                                    <span className="text-xs text-red-500">
                                        {errors.description.message}
                                    </span>
                                )}
                            </div>
                        </div>
                    </section>

                    {/* secoend element */}
                    <section className="rounded-lg border-2 bg-gray-100 lg:w-[600px] lg:max-w-[600px]">
                        <h2 className="mb-3 border-b-2 border-primary px-5 py-2 text-lg font-semibold text-primary">
                            Product Media
                        </h2>
                        <div className="px-5">
                            <Label htmlFor="picture" className="block py-2 text-base font-semibold">
                                Select Images <span className="text-red-600">*</span>
                            </Label>

                            <ProductImageSelector
                                images={images}
                                setImages={setImages}></ProductImageSelector>

                            <div className="h-5">
                                {errors.name && (
                                    <span className="text-xs text-red-500">
                                        {errors.name.message}
                                    </span>
                                )}
                            </div>
                        </div>
                    </section>
                </section>
            </form>
        </div>
    );
};

export default CreateNewProductPage;
