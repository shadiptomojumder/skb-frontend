"use client";
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
import { PackagePlus } from "lucide-react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

type FormData = z.infer<typeof productSchema>;
// Mock categories data
const CategoryList = [
    { value: "electronics", label: "Electronics" },
    { value: "clothing", label: "Clothing" },
    { value: "books", label: "Books" },
    { value: "home", label: "Home & Garden" },
    { value: "sports", label: "Sports & Outdoors" },
];


const CreateNewProductPage = () => {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({ resolver: zodResolver(productSchema) });

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        console.log("The form data is: ", data);
    };
    return (
        <div className="px-12">
            <div>
                <div className="py-5">
                    <h2 className="flex gap-2 text-center text-lg font-semibold text-primary sm:text-left">
                        <PackagePlus />
                        Create Product
                    </h2>
                    <p className="text-center text-sm sm:text-left">
                        Select your image and suitable name for product and click create button.
                    </p>
                </div>
                <section className="">
                    <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
                        <section className="rounded-lg border-2 bg-gray-100">
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
                                    className="mt-2 h-11 focus-visible:ring-primary"
                                />

                                <div className="h-5">
                                    {errors.description && (
                                        <span className="text-xs text-red-500">
                                            {errors.description.message}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <section className="flex flex-col items-center justify-between px-5 sm:flex-row sm:gap-5">
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
                                    <Label htmlFor="price" className="text-base font-semibold">
                                        Product Sale Price <span className="text-red-600">*</span>
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
                            </section>
                        </section>

                        <section className="rounded-lg border-2 bg-gray-100">
                            <h2 className="mb-3 border-b-2 border-primary px-5 py-2 text-lg font-semibold text-primary">
                                Product Media
                            </h2>
                            <div className="px-5">
                                <Label htmlFor="name" className="text-base font-semibold">
                                    Product Picture <span className="text-red-600">*</span>
                                </Label>
                                <Input
                                    {...register("name")}
                                    id="name"
                                    name="name"
                                    type="file"
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
                        </section>

                        <div>
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
                        </section>

                        <div>
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
                        </div>

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
                        <Button type="submit">Submit</Button>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default CreateNewProductPage;
