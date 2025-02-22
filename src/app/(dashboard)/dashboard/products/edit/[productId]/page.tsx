"use client";
import GetCategories from "@/api/categories/getCategories";
import deleteProductImage from "@/api/products/deleteProductImage";
import getProductById from "@/api/products/getProductById";
import updateProduct from "@/api/products/updateProduct";

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
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { Category } from "@/interfaces/category.schemas";
import { APIError, ImageFile } from "@/interfaces/common.schemas";
import { ProductFormData, productSchema } from "@/interfaces/product.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { LoaderCircle, PackagePlus, Trash2 } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const EditProductPage = () => {
    const [images, setImages] = useState<ImageFile[]>([]);
    //console.log("The images are form file:", images);
    const [initialData, setInitialData] = useState<ProductFormData | null>(null);
    const [isImageChanged, setIsImageChanged] = useState<boolean>(false);

    const queryClient = useQueryClient();
    const router = useRouter();

    const params = useParams(); // Get URL parameters

    const { productId } = params;

    // console.log("The productId is:", productId);

    const { data: product, isLoading: productIsLoading } = useQuery({
        queryKey: ["product", productId],
        queryFn: () => getProductById(productId as string),
        staleTime: 0, // Always fetch fresh data
        refetchOnMount: true,
    });

    // console.log("The product is:", product);

    const { data: categories } = useQuery<Category[]>({
        queryKey: ["categories"],
        queryFn: GetCategories,
    });
    // console.log("The categories are:", categories);

    const {
        control,
        register,
        handleSubmit,
        formState: { errors, isDirty },
        reset,
        setValue,
    } = useForm<ProductFormData>({ resolver: zodResolver(productSchema) });

    useEffect(() => {
        if (product) {
            setValue("name", product.name);
            setValue("description", product.description);
            setValue("price", product.price);
            setValue("quantity", product.quantity);
            setValue("category", product.category.id);

            setInitialData({
                name: product.name,
                description: product.description,
                price: product.price,
                quantity: product.quantity,
                category: product.category.id,
            });
        }
    }, [product, setValue]);

    const { mutate, isPending } = useMutation({
        mutationFn: updateProduct,
        onSuccess: (response) => {
            console.log("The Response was:", response);
            console.log("The Response.data was:", response.data);

            if (response.statusCode === 200) {
                toast.success("Product successfully created");
                reset();
                setImages([]);
                queryClient.invalidateQueries({ queryKey: ["products", "product", productId] });
                router.push("/dashboard/products");
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
        if (!initialData) {
            toast.warning("No changes detected.");
            return;
        }

        const updatedData: Partial<ProductFormData> = {};

        // Check which fields have changed
        Object.keys(data).forEach((key) => {
            if (data[key as keyof ProductFormData] !== initialData[key as keyof ProductFormData]) {
                updatedData[key as keyof ProductFormData] = data[key as keyof ProductFormData];
            }
        });

        // Create FormData
        const formData = new FormData();

        // Append only changed fields
        Object.keys(updatedData).forEach((key) => {
            if (updatedData[key as keyof typeof updatedData] !== null) {
                formData.append(key, updatedData[key as keyof typeof updatedData] as string);
            }
        });

        // Check if images changed
        if (isImageChanged) {
            images.forEach((image) => {
                if (image.file) {
                    formData.append("images", image.file);
                }
            });
        }

        if (Object.keys(updatedData).length === 0 && !isImageChanged) {
            toast.info("No changes detected.");
            return;
        }

        mutate({ productId: productId as string, data: formData });
    };

    const handleProductImageDelete = async (imageUrl: string) => {
        const deleteResult = await deleteProductImage({ productId: productId as string, imageUrl });
        console.log("deleteResult is:", deleteResult);
        if (deleteResult.statusCode === 200) {
            toast.success("Image successfully Deleted");
            queryClient.invalidateQueries({ queryKey: ["product", productId] });
        }
    };

    return (
        <div className="px-4 py-5 sm:px-5 md:px-7 lg:px-12">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-5 flex flex-col items-start justify-between gap-3 lg:flex-row">
                    <div>
                        <h2 className="flex gap-2 text-center text-lg font-semibold text-primary sm:text-left">
                            <PackagePlus />
                            Edit Product
                        </h2>
                        <p className="text-start text-sm sm:text-left">
                            Select your image and suitable name for product and click create button.
                        </p>
                    </div>
                    <Button
                        type="submit"
                        size="lg"
                        disabled={(!isDirty && !isImageChanged) || isPending}>
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
                    <section className="col-span-7 rounded-lg border-2 bg-gray-100 pb-5 lg:w-[80%]">
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
                                    defaultValue={product?.category.value || "ok"}
                                    render={({ field: { onChange, value } }) => (
                                        <Select
                                            onValueChange={(e) => {
                                                onChange(e);
                                            }}
                                            value={value}
                                            defaultValue={value}>
                                            <SelectTrigger className="mt-2 h-11 capitalize focus:ring-primary">
                                                <SelectValue placeholder="Select Product Category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {categories &&
                                                    categories.length > 0 &&
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
                            <Label htmlFor="picture" className="block py-2 text-base font-semibold">
                                Product Images
                            </Label>
                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                                {productIsLoading ? (
                                    <>
                                        <Skeleton className="h-32 w-full rounded-lg" />
                                        <Skeleton className="h-32 w-full rounded-lg" />
                                        <Skeleton className="h-32 w-full rounded-lg" />
                                        <Skeleton className="h-32 w-full rounded-lg" />
                                    </>
                                ) : (
                                    product?.images.map((image: string, index: number) => (
                                        <div key={index} className="group relative">
                                            <Image
                                                src={image || "/placeholder.svg"}
                                                alt="Product preview"
                                                width={100}
                                                height={100}
                                                className="h-32 w-full rounded-lg object-cover"
                                            />
                                            <div className="absolute top-1/2 left-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg bg-red-700/30 opacity-0 backdrop-blur-sm backdrop-opacity-10 transition-opacity duration-200 ease-in-out hover:opacity-100">
                                                <button
                                                    type="button"
                                                    onClick={() => handleProductImageDelete(image)}
                                                    className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-sm bg-red-200 p-1 text-red-700 opacity-0 shadow-md transition-opacity group-hover:opacity-100"
                                                    aria-label="Remove image">
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                        <div className="px-5">
                            <Label htmlFor="picture" className="block py-2 text-base font-semibold">
                                Selected Pictures <span className="text-red-600">*</span>
                            </Label>

                            <ProductImageSelector
                                images={images}
                                setImages={setImages}
                                setIsImageChanged={setIsImageChanged}
                            />

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

export default EditProductPage;
