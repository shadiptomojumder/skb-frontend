"use client";
import { ImageFile } from "@/interfaces/common.schemas";
import { X } from "lucide-react";
import Image from "next/image";
import type React from "react";
import { useRef, type ChangeEvent } from "react";

interface BlogImageSelectorProps {
    image: ImageFile | null;
    setImage: React.Dispatch<React.SetStateAction<ImageFile | null>>;
    setIsImageChanged?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BlogImageSelector({
    image,
    setImage,
    setIsImageChanged,
}: BlogImageSelectorProps) {
    const bannerInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const newImage = {
                id: URL.createObjectURL(file),
                file: file,
                preview: URL.createObjectURL(file),
                name: file.name,
                type: file.type,
            };

            setImage(newImage);

            if (setIsImageChanged) {
                setIsImageChanged(true);
            }
        }
    };

    const removeImage = () => {
        if (image) {
            URL.revokeObjectURL(image.id);
        }
        setImage(null);
    
        // Reset input value to allow reselecting the same file
        if (bannerInputRef.current) {
            bannerInputRef.current.value = ""; // <--- key line
        }
    
        if (setIsImageChanged) {
            setIsImageChanged(true); // optional
        }
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
                name: file.name,
                type: file.type,
            };
            setImage(newImage);
            if (setIsImageChanged) {
                setIsImageChanged(true);
            }
        }
    };

    return (
        <div className="mx-auto w-full max-w-2xl">
            {/* Banner Image */}
            <div className="mb-5">
                <p className="py-2 text-base font-semibold">
                    Select Banner Image <span className="text-red-600">*</span>
                </p>
                {image ? (
                    <div className="relative mx-auto w-fit">
                        <Image
                            src={image.preview || "/placeholder.svg"}
                            alt="Banner preview"
                            width={600}
                            height={300}
                            className="aspect-[2000/715] rounded-lg object-cover"
                        />
                        <button
                            type="button"
                            onClick={removeImage}
                            className="absolute top-1 right-1 rounded-full bg-white p-1 drop-shadow-lg cursor-pointer"
                            aria-label="Remove image">
                            <X className="h-4 w-4 text-gray-600" />
                        </button>
                    </div>
                ) : (
                    <div className="col-span-4 flex h-32 w-full items-center justify-center rounded-lg bg-white font-semibold text-primary">
                        No image selected
                    </div>
                )}
                <div
                    className="mt-3 cursor-pointer rounded-lg border-2 border-dashed border-gray-300 bg-[#d7f2dc] px-4 py-6 text-center transition-colors duration-200 hover:border-primary h-32 flex items-center justify-center"
                    onClick={() => bannerInputRef.current?.click()}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}>
                    <input
                        type="file"
                        ref={bannerInputRef}
                        onChange={handleFileChange}
                        accept="image/*"
                        className="hidden"
                        aria-label="Select banner image"
                    />
                    <p className="font-semibold text-gray-600">
                        Click to select or drag and drop a banner image here (recommended size:
                        2000x715 pixels)
                    </p>
                </div>
            </div>
        </div>
    );
}
