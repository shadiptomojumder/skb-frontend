"use client";
import CreateProduct from "@/api/product/createProduct";
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
import { productSchema } from "@/interfaces/product.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { LoaderCircle, PackagePlus } from "lucide-react";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

type FormData = z.infer<typeof productSchema>;
// Mock categories data
const CategoryList = [
    { value: "67a78d6b6e5fff7ea8b1bddc", label: "Electronics" },
    { value: "67a78d6b6e5fff7ea8b1bddc", label: "Clothing" },
    { value: "67a78d6b6e5fff7ea8b1bddc", label: "Books" },
    { value: "67a78d6b6e5fff7ea8b1bddc", label: "Home & Garden" },
    { value: "67a78d6b6e5fff7ea8b1bddc", label: "Sports & Outdoors" },
];

interface ImageFile {
    id: string;
    base64: string;
    preview: string;
    name: string;
    type: string;
}

const CreateNewProductPage = () => {
    const [images, setImages] = useState<ImageFile[]>([]);
    console.log("The images are form file:", images);

    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({ resolver: zodResolver(productSchema) });

    const { mutate, isPending } = useMutation({
        mutationFn: CreateProduct,
        onSuccess: (response) => {
            console.log("The Response was:", response);
            console.log("The Response.data was:", response.data);

            if (response.statusCode === 200) {
                toast.success("Product successfully created");
                reset();
            }
        },
        onError: (error: {
            response?: { status: number };
            request?: XMLHttpRequest;
            message?: string;
        }) => {
            if (error?.response?.status == 409) {
                toast.warning("Product already created!!");
            } else if (error?.response?.status == 400) {
                toast.warning("Please fill all the required fields!");
            } else if (error.request) {
                toast.error("No response received from the server!!");
            } else {
                console.error("Error while sending the request:", error.message);
            }
        },
    });

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        // Convert form data to an object
        const productData = {
            ...data,
            images: images,
        };

        mutate(productData);
        console.log("The productData data is: ", productData);
    };
    return (
        <div className="lg:px-12 md:px-7 sm:px-5 px-4 py-5">
            <div>
                <div className="flex flex-col lg:flex-row gap-3 items-start justify-between mb-5">
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
                <section className="">
                    <form
                        className="flex flex-col justify-between gap-5 lg:flex-row"
                        onSubmit={handleSubmit(onSubmit)}>
                        <section className="col-span-7 lg:w-[80%] rounded-lg border-2 bg-gray-100 pb-5">
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
                                    className="mt-2 h-11"
                                />

                                <div className="h-5">
                                    {errors.name && (
                                        <span className="text-xs text-red-500">
                                            {errors.name.message}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="px-5">
                                <Label htmlFor="description" className="text-base font-semibold">
                                    Product Description <span className="text-red-600">*</span>
                                </Label>
                                <Textarea
                                    {...register("description")}
                                    id="description"
                                    name="description"
                                    placeholder="Enter Product Description"
                                    className="mt-2 h-11 outline-primary"
                                />

                                <div className="h-5">
                                    {errors.description && (
                                        <span className="text-xs text-red-500">
                                            {errors.description.message}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <section className="flex flex-col items-center justify-between px-5 sm:gap-5 xl:flex-row">
                                <div className="w-full">
                                    <Label htmlFor="price" className="text-base font-semibold">
                                        Product Regular Price{" "}
                                        <span className="text-red-600">*</span>
                                    </Label>
                                    <Input
                                        {...register("price", {
                                            valueAsNumber: true,
                                        })}
                                        id="price"
                                        name="price"
                                        type="number"
                                        placeholder="Enter Product Price"
                                        className="mt-2 h-11"
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
                                            <Select onValueChange={field.onChange}>
                                                <SelectTrigger className="mt-2 h-11 focus:ring-primary">
                                                    <SelectValue placeholder="Select Product Category" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {CategoryList &&
                                                        CategoryList.length > 0 &&
                                                        CategoryList.map((category, i) => {
                                                            return (
                                                                <SelectItem
                                                                    value={category?.value}
                                                                    key={i}>
                                                                    {category.label}
                                                                </SelectItem>
                                                            );
                                                        })}
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

                            <section className="flex flex-col items-center justify-between px-5 sm:gap-5 xl:flex-row">
                                <div className="w-full">
                                    <Label htmlFor="quantity" className="text-base font-semibold">
                                        Product Quantity <span className="text-red-600">*</span>
                                    </Label>
                                    <Input
                                        {...register("quantity")}
                                        id="quantity"
                                        name="quantity"
                                        type="text"
                                        placeholder="Enter Product Quantity"
                                        className="mt-2 h-11"
                                    />

                                    <div className="h-5">
                                        {errors.quantity && (
                                            <span className="text-xs text-red-500">
                                                {errors.quantity.message}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="w-full">
                                    <Label htmlFor="color" className="text-base font-semibold">
                                        Product Color
                                        <span className="text-red-600">*</span>
                                    </Label>
                                    <Input
                                        
                                        id="color"
                                        name="color"
                                        type="text"
                                        placeholder="Enter Product color"
                                        className="mt-2 h-11"
                                    />
                                    <div className="h-5">
                                        {errors.quantity && (
                                            <span className="text-xs text-red-500">
                                                {errors.quantity.message}
                                            </span>
                                        )}
                                    </div>

                                </div>                             
                            </section>
                        </section>

                        <section className="col-span-4 h-fit rounded-lg border-2 bg-gray-100 lg:w-[600px] lg:max-w-[600px]">
                            <h2 className="mb-3 border-b-2 border-primary px-5 py-2 text-lg font-semibold text-primary">
                                Product Media
                            </h2>
                            <div className="px-5">
                                <Label htmlFor="picture" className="text-base font-semibold">
                                    Product Picture <span className="text-red-600">*</span>
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

                        {/* <div>
                            <Label htmlFor="name" className="text-base font-semibold">
                                Product Name <span className="text-red-600">*</span>
                            </Label>
                            <Input
                                {...register("name")}
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Enter Product Name"
                                className="mt-2 h-11"
                            />

                            <div className="h-5">
                                {errors.name && (
                                    <span className="text-xs text-red-500">
                                        {errors.name.message}
                                    </span>
                                )}
                            </div>
                        </div>

                        <section className="flex flex-col items-center justify-between sm:flex-row sm:gap-5">
                            <div className="w-full">
                                <Label htmlFor="price" className="text-base font-semibold">
                                    Product Price <span className="text-red-600">*</span>
                                </Label>
                                <Input
                                    {...register("price", {
                                        valueAsNumber: true,
                                    })}
                                    id="price"
                                    name="price"
                                    type="number"
                                    placeholder="Enter Product Price"
                                    className="mt-2 h-11"
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
                                <Label htmlFor="quantity" className="text-base font-semibold">
                                    Product Quantity <span className="text-red-600">*</span>
                                </Label>
                                <Input
                                    {...register("quantity")}
                                    id="quantity"
                                    name="quantity"
                                    type="text"
                                    placeholder="Enter Product Quantity"
                                    className="mt-2 h-11"
                                />

                                <div className="h-5">
                                    {errors.quantity && (
                                        <span className="text-xs text-red-500">
                                            {errors.quantity.message}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </section> */}

                        {/* <div>
                            <Label htmlFor="category" className="text-base font-semibold">
                                Product Category <span className="text-red-500">*</span>
                            </Label>
                            <Controller
                                name="category"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Select onValueChange={field.onChange}>
                                        <SelectTrigger className="mt-2 h-11 focus:ring-primary">
                                            <SelectValue placeholder="Select Product Category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {CategoryList &&
                                                CategoryList.length > 0 &&
                                                CategoryList.map((category, i) => {
                                                    return (
                                                        <SelectItem value={category?.value} key={i}>
                                                            {category.label}
                                                        </SelectItem>
                                                    );
                                                })}
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

                        <div>
                            <Label htmlFor="description" className="text-base font-semibold">
                                Product Description <span className="text-red-600">*</span>
                            </Label>
                            <Textarea
                                {...register("description")}
                                id="description"
                                name="description"
                                placeholder="Enter Product Description"
                                className="mt-2 h-11 focus-visible:ring-primary"
                            />

                            <div className="h-5">
                                {errors.description && (
                                    <span className="text-xs text-red-500">
                                        {errors.description.message}
                                    </span>
                                )}
                            </div>
                        </div> */}

                        {/* <Button
                            className="w-full justify-center gap-2 bg-primary font-bold text-white hover:bg-accent-foreground"
                            type="submit"
                            disabled={isPending}>
                            {isPending ? (
                                <>
                                    <Spinner /> Creating
                                </>
                            ) : (
                                "Create"
                            )}
                        </Button> */}

                        {/* <Button type="submit" size="lg" disabled={isPending}>
                            {isPending ? (
                                <>
                                    <LoaderCircle className="animate-spin" /> Submiting
                                </>
                            ) : (
                                <>Submit</>
                            )}
                        </Button> */}
                    </form>
                </section>
            </div>
        </div>
    );
};

export default CreateNewProductPage;
