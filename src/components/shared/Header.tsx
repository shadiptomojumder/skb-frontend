"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AuthUser from "./AuthUser";

const Header = () => {
    // bg-[#F8FAFC]

    const pathname = usePathname();
    const isHome = pathname === "/";
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (!isHome) return;

        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHome]);

    const headerClass = isHome
        ? `${scrolled ? "sticky top-0 bg-white shadow-md py-4 md:py-5" : "absolute top-0 bg-transparent py-6 md:py-8"} transition-all duration-300 ease-in-out`
        : "sticky top-0 bg-white shadow-md py-4 md:py-6";
    return (
        <header className={`${headerClass} z-[1000] w-full px-2 sm:px-0`}>
            <section className="container mx-auto">
                <section className="flex w-full items-center justify-between">
                    <section className="flex items-center gap-0.5">
                        <Menu size={28} className="md:hidden" />
                        <Link
                            href="/"
                            className="hidden font-montserrat text-2xl font-bold text-nowrap italic md:block">
                            SKB BEST
                        </Link>
                    </section>
                    <Link
                        href="/"
                        className="font-montserrat text-2xl font-bold text-nowrap italic md:hidden">
                        SKB BEST
                    </Link>
                    <section className="hidden items-center gap-8 md:flex">
                        <Link href="/" className="font-montserrat text-lg font-semibold">
                            Home
                        </Link>
                        <Link href="/" className="font-montserrat text-lg font-semibold">
                            Catelog
                        </Link>
                        <Link href="/" className="font-montserrat text-lg font-semibold">
                            About Us
                        </Link>
                        <Link href="/" className="font-montserrat text-lg font-semibold">
                            Contact
                        </Link>
                    </section>
                    <section className="flex items-center gap-3 justify-self-end">
                        <AuthUser />
                    </section>
                </section>
            </section>
        </header>
    );
};

export default Header;
