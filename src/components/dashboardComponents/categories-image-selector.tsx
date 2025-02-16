"use client";

import { X } from "lucide-react";
import Image from "next/image";
import type React from "react";
import { useRef, type ChangeEvent } from "react";
import gallery from "../../../public/icons/gallery_add.png";

interface ProductImageSelectorProps {
    image: ImageFile | null;
    setImage: React.Dispatch<React.SetStateAction<ImageFile | null>>;
}

interface ImageFile {
    id: string;
    file: File;
    preview: string;
}

export default function CategoriesImageSelector({ image, setImage }: ProductImageSelectorProps) {
    // const [image, setImage] = useState<ImageFile | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const newImage = {
                id: URL.createObjectURL(file),
                file: file,
                preview: URL.createObjectURL(file),
            };
            setImage(newImage);
        }
    };

    const removeImage = () => {
        if (image) {
            URL.revokeObjectURL(image.id);
        }
        setImage(null);
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.currentTarget.classList.add("border-primary");
    };

    const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
        event.currentTarget.classList.remove("border-primary");
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.currentTarget.classList.remove("border-primary");
        const file = event.dataTransfer.files?.[0];
        if (file && file.type.startsWith("image/")) {
            const newImage = {
                id: URL.createObjectURL(file),
                file: file,
                preview: URL.createObjectURL(file),
            };
            setImage(newImage);
        }
    };

    return (
        <div className="mx-auto w-full max-w-2xl">
            {image ? (
                <div className="relative mx-auto w-fit">
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
                <div className="relative mx-auto w-fit">
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
                className="cursor-pointer rounded-lg border-2 mt-3 border-dashed border-gray-300 p-16 text-center transition-colors hover:border-gray-400 duration-200"
                onClick={() => fileInputRef.current?.click()}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}>
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
