"use client";
import { Carousel, CarouselContent, CarouselItem, Next, Previous } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";
import Banner1 from "../../../../../public/banners/banner_1.webp";
import Banner2 from "../../../../../public/banners/banner_2.webp";
import Banner3 from "../../../../../public/banners/banner_3.webp";

const HeroSection = () => {
    const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));
    return (
        <section className="">
            <Carousel
                plugins={[plugin.current]}
                className="w-full max-w-full overflow-hidden"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}>
                <CarouselContent>
                    <CarouselItem>
                        <section className="bg-gray-200 p-0">
                            <Image
                                src={Banner1}
                                alt="banner"
                                className="aspect-[2000/714] sm:h-full h-[500px] w-full object-cover object-center"
                                priority
                            />
                        </section>
                    </CarouselItem>
                    <CarouselItem>
                        <section className="bg-gray-200 p-0">
                            <Image
                                src={Banner2}
                                alt="banner"
                                className="aspect-[2000/714] sm:h-full h-[500px] w-full object-cover object-center"
                                priority
                            />
                        </section>
                    </CarouselItem>
                    <CarouselItem>
                        <section className="bg-gray-200 p-0">
                            <Image
                                src={Banner3}
                                alt="banner"
                                className="aspect-[2000/714] sm:h-full h-[500px] w-full object-cover object-center"
                                priority
                            />
                        </section>
                    </CarouselItem>
                </CarouselContent>
                <Previous className="left-7.5 bg-accent text-black drop-shadow-lg" />
                <Next className="right-7.5 bg-accent text-black drop-shadow-lg" />
            </Carousel>
        </section>
    );
};

export default HeroSection;
