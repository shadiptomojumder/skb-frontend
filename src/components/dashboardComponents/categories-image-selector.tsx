"use client";
import { X } from "lucide-react";
import Image from "next/image";
import type React from "react";
import { useRef, useState, type ChangeEvent } from "react";
import gallery from "../../../public/icons/gallery_add.png";

interface ImageFile {
    id: string;
    base64: string;
    preview: string;
    name: string;
    type: string;
}

interface CategoryImageSelectorProps {
    image: ImageFile | null;
    setImage: React.Dispatch<React.SetStateAction<ImageFile | null>>;
}

export default function CategoriesImageSelector({ image, setImage }: CategoryImageSelectorProps) {
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
        const file = event.target.files?.[0];
        if (file) {
            setIsLoading(true);
            const newImage: ImageFile = {
                id: URL.createObjectURL(file),
                base64: await convertToBase64(file),
                preview: URL.createObjectURL(file),
                name: file.name,
                type: file.type,
            };
            setImage(newImage);
            setIsLoading(false);
        }
    };

    const removeImage = () => {
        if (image) {
            URL.revokeObjectURL(image.id);
            setImage(null);
        }
    };

    return (
        <div className="mx-auto w-full">
            {isLoading && <p className="mt-2 text-center">Loading image...</p>}
            {image ? (
                <div className="relative mx-auto mt-4 w-fit">
                    <Image
                        src={image.preview || "/placeholder.svg"}
                        alt="Product preview"
                        width={100}
                        height={100}
                        className="h-32 w-fit rounded-lg object-cover"
                    />
                    <button
                        type="button"
                        onClick={removeImage}
                        className="absolute top-1 right-1 rounded-full bg-white p-1 shadow-md"
                        aria-label="Remove image">
                        <X className="h-4 w-4 text-gray-600" />
                    </button>
                </div>
            ) : (
                <div className="relative mx-auto mt-4 w-fit">
                    <Image
                        src={gallery}
                        alt="Gallery"
                        width={100}
                        height={100}
                        className="mx-auto h-32 w-fit"
                    />
                </div>
            )}

            <div
                className="mt-3 cursor-pointer rounded-lg border-2 border-dashed border-gray-300 p-4 text-center transition-colors hover:border-gray-400"
                onClick={() => fileInputRef.current?.click()}>
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                    aria-label="Select product image"
                />
                <p className="text-gray-600">
                    Click to select or drag and drop a product image here
                </p>
            </div>
        </div>
    );
}
