import { Product } from "@/interfaces/product.schemas";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "../../utils/fomatPrice";

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <Link href={`/products/${product?.id}`} passHref>
            <section className="group relative z-50 flex h-full w-full flex-col justify-between rounded-md border bg-white p-2 shadow-lg transition-all duration-300 disabled:bg-red-400 sm:p-5">
                <div className="relative">
                    <Image
                        src={product?.images[0]}
                        alt="product"
                        width={415}
                        height={332}
                        className="mx-auto aspect-[800/800] h-full w-full object-cover object-center"
                    />

                    {/* ADD TO CART BUTTON FOR MOBILE DEVICES */}
                    {/* <AddToCartButtonMobile product={product} /> */}
                </div>
                <section className="mt-3 flex h-full flex-col justify-between gap-1 min-[424px]:mt-1">
                    <h2 className="line-clamp-2 text-base font-semibold text-ellipsis text-[#1A1A1A] capitalize hover:underline sm:text-lg">
                        {product?.name}
                    </h2>
                    <p className="text-base font-medium text-[#1a1a1ab3]">
                        TK {formatPrice(product?.price)}
                    </p>

                    {/* <div className="space-y-1 text-center sm:space-y-2">
                    <p className="text-base font-bold text-[#1A1A1A]">৳{product?.price}</p>

                    <AddToCartButton product={product} />
                </div> */}
                </section>
                
            </section>
        </Link>
    );
};

export default ProductCard;
