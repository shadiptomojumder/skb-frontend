"use client";
import getBannerImages from "@/api/banners/getBannerImages";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const BannerImageSelector = () => {
    const [images, setImages] = useState<string[]>([]);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const { data: bannerImages, isLoading } = useQuery({
        queryKey: ["bannerImages"],
        queryFn: getBannerImages,
    });

    console.log("bannerImages are:", bannerImages);

    useEffect(() => {
        // Fetch images from backend
        axios
            .get("http://localhost:5000/api/v1/banners/images") // Adjust the API endpoint as needed
            .then((res) => setImages(res.data))
            .catch((err) => console.error("Error fetching images:", err));
    }, []);

    const handleSelectImage = (url: string) => {
        setSelectedImage(url);
        // onSelectImage(url); // Pass selected image to parent component or form
    };

    return (
        <div>
            <h2>Select a Banner Image</h2>
            <div className="flex justify-between flex-wrap gap-4">
                {isLoading ? (
                    <>
                        <p>Loading...</p>
                    </>
                ) : (
                    <>
                        {bannerImages.map((image, index) => {
                            console.log("image");
                            
                            return (
                                <Image
                                    src={image.imageURL}
                                    key={index}
                                    alt={`Banner ${index}`}
                                    width={100}
                                    height={100}
                                    className={`h-[319px] w-full max-w-[640px] cursor-pointer border-2 object-cover ${
                                        selectedImage === image.imageURL
                                            ? "border-blue-500"
                                            : "border-gray-300"
                                    }`}
                                    onClick={() => handleSelectImage(image.imageURL)}
                                />
                            );
                        })}
                    </>
                )}
            </div>
        </div>
    );
};

export default BannerImageSelector;
