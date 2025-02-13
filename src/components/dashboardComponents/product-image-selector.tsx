"use client";
import { X } from "lucide-react";
import Image from "next/image";
import type React from "react";
import { useRef, useState, type ChangeEvent } from "react";
import gallery from "../../../public/icons/gallery_add.png"

interface ImageFile {
    id: string;
    base64: string;
    preview: string;
    name: string;
    type: string;
}

interface ProductImageSelectorProps {
    images: ImageFile[];
    setImages: React.Dispatch<React.SetStateAction<ImageFile[]>>;
}

export default function ProductImageSelector({ images, setImages }: ProductImageSelectorProps) {
    //const [images, setImages] = useState<ImageFile[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const convertToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        });
    };

    const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            setIsLoading(true);
            const newImages = await Promise.all(
                Array.from(files).map(async (file) => ({
                    id: URL.createObjectURL(file),
                    base64: await convertToBase64(file),
                    preview: URL.createObjectURL(file),
                    name: file.name,
                    type: file.type,
                })),
            );
            setImages((prevImages) => [...prevImages, ...newImages]);
            setIsLoading(false);
        }
    };

    const removeImage = (id: string) => {
        setImages((prevImages) => {
            const updatedImages = prevImages.filter((image) => image.id !== id);
            URL.revokeObjectURL(id);
            return updatedImages;
        });
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.currentTarget.classList.add("border-primary");
    };

    const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
        event.currentTarget.classList.remove("border-primary");
    };

    const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.currentTarget.classList.remove("border-primary");
        const files = event.dataTransfer.files;
        if (files) {
            setIsLoading(true);
            const newImages = await Promise.all(
                Array.from(files)
                    .filter((file) => file.type.startsWith("image/"))
                    .map(async (file) => ({
                        id: URL.createObjectURL(file),
                        base64: await convertToBase64(file),
                        preview: URL.createObjectURL(file),
                        name: file.name,
                        type: file.type,
                    })),
            );
            setImages((prevImages) => [...prevImages, ...newImages]);
            setIsLoading(false);
        }
    };

    return (
        <div className="mx-auto w-full">
            {
                images.length <= 0 && (
                    <Image src={gallery} alt="Gallery" width={100} height={100} className="mx-auto"/>
                )
            }

           
            {isLoading && <p className="mt-2 text-center">Loading images...</p>}
            {images.length > 0 && (
                <div className="mt-4">
                    {/* <h2 className="mb-2 text-lg font-semibold">Selected Images:</h2> */}
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                        {images.map((image) => (
                            <div key={image.id} className="group relative">
                                <Image
                                    src={image.preview || "/placeholder.svg"}
                                    alt="Product preview"
                                    width={100}
                                    height={100}
                                    className="h-32 w-full rounded-lg object-cover"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeImage(image.id)}
                                    className="absolute top-1 right-1 rounded-full bg-white p-1 opacity-0 shadow-md transition-opacity group-hover:opacity-100"
                                    aria-label="Remove image">
                                    <X className="h-4 w-4 text-gray-600" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div
                className="cursor-pointer rounded-lg mt-3 border-2 border-dashed border-gray-300 p-4 text-center transition-colors hover:border-gray-400"
                onClick={() => fileInputRef.current?.click()}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}>
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    multiple
                    accept="image/*"
                    className="hidden"
                    aria-label="Select product images"
                />
                <p className="text-gray-600">
                    Click to select or drag and drop product images here
                </p>
            </div>
        </div>
    );
}
