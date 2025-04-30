import Image from "next/image";
import React, { useState } from "react";

interface ProductGalleryProps {
    images: string[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className="mx-auto flex max-w-4xl lg:min-w-xl gap-4 p-4">
            {/* Thumbnail List */}
            <div className="flex flex-col gap-2">
                {images.map((img, idx) => (
                    <Image
                        key={idx}
                        src={img}
                        height={800}
                        width={800}
                        alt={`Thumbnail ${idx}`}
                        onClick={() => setSelectedImage(img)}
                        className={`aspect-[800/800] h-16 w-16 cursor-pointer rounded border-2 object-cover ${
                            selectedImage === img ? "border-black" : "border-gray-300"
                        }`}
                    />
                ))}
            </div>

            {/* Main Image */}
            <div className="relative flex-1">
                <Image
                    src={selectedImage}
                    height={800}
                    width={800}
                    alt="Selected"
                    className="aspect-[800/800] h-auto w-full rounded-lg object-contain"
                />
            </div>
        </div>
    );
};

export default ProductGallery;
