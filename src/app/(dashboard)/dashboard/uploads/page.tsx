"use client";

import Uploads from "@/api/uploads/uploads";
import axios from "axios";
import { X } from "lucide-react";
import Image from "next/image";
import type React from "react";
import { useRef, useState, type ChangeEvent } from "react";

interface ImageFile {
    id: string;
    file: File;
    preview: string;
}

interface ProductImageSelectorProps {
    onSubmit: (formData: FormData) => void;
}

export default function ProductImageSelector() {
    const [images, setImages] = useState<ImageFile[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const newImages = Array.from(files).map((file) => ({
                id: URL.createObjectURL(file),
                file: file,
                preview: URL.createObjectURL(file),
            }));
            setImages((prevImages) => [...prevImages, ...newImages]);
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

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.currentTarget.classList.remove("border-primary");
        const files = event.dataTransfer.files;
        if (files) {
            const newImages = Array.from(files)
                .filter((file) => file.type.startsWith("image/"))
                .map((file) => ({
                    id: URL.createObjectURL(file),
                    file: file,
                    preview: URL.createObjectURL(file),
                }));
            setImages((prevImages) => [...prevImages, ...newImages]);
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData();


        // Append image files
        images.forEach((image) => {
            formData.append(`images`, image.file);
        });

        await Uploads(formData)
    };

    return (
        <form onSubmit={handleSubmit} className="mx-auto w-full max-w-2xl p-4">
            <div
                className="cursor-pointer rounded-lg border-2 border-dashed border-gray-300 p-16 text-center transition-colors hover:border-gray-400"
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
            {images.length > 0 && (
                <div className="mt-4">
                    <h2 className="mb-2 text-lg font-semibold">Selected Images:</h2>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                        {images.map((image) => (
                            <div key={image.id} className="group relative">
                                <Image
                                    src={image.preview || "/placeholder.svg"}
                                    alt="Product preview"
                                    className="h-32 w-full rounded-lg object-cover"
                                    width={100}
                                    height={100}
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
            <button
                type="submit"
                className="hover:bg-primary-dark mt-4 rounded bg-primary px-4 py-2 text-white transition-colors">
                Upload Images
            </button>
        </form>
    );
}
