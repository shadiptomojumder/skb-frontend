import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CircleUser, Search, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <main className="grid grid-cols-3 bg-primary px-40 py-3">
            <section>
                <p className="text-2xl font-bold italic">SKB BEST</p>
            </section>
            <section className="w-full px-5">
                <div className="relative bg-transparent">
                    <Label
                        htmlFor="search"
                        className="absolute py-2 top-1/2 right-0 flex -translate-y-1/2 items-center justify-center rounded-r-full bg-[#2992F21C] h-full px-4 text-primary cursor-pointer">
                        <Search />
                    </Label>
                    <Input
                        id="search"
                        placeholder="Search by keyword "
                        className="rounded-full ring-[#2992F233] bg-accent"
                    />
                </div>
            </section>
            <section className="flex items-center gap-2 place-self-end">
                <Link href="#" className="rounded-md bg-accent p-2 text-primary">
                    <ShoppingCart size={19} />
                </Link>

                <Link
                    href="#"
                    className="flex items-center gap-1.5 rounded-md bg-accent p-2 text-sm font-semibold text-primary hover:bg-primary/90">
                    <CircleUser size={19} /> Pitu
                </Link>

                <Link
                    href="#"
                    className="flex items-center gap-1.5 rounded-md bg-accent p-2 text-sm font-semibold text-primary">
                    <CircleUser size={19} /> Sign in / Sign up
                </Link>
            </section>
        </main>
    );
};

export default Header;