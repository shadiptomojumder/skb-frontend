"use client";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type * as React from "react";
import { SearchForm } from "./search-form";

// This is sample data.
const data = {
    navMain: [
        {
            title: "Building Your Products",
            url: "#",
            items: [
                {
                    title: "Add New Product",
                    url: "/dashboard/products/create",
                },
                {
                    title: "All Products",
                    url: "#",
                    isActive: true,
                },
                {
                    title: "Add New Category",
                    url: "/dashboard/categories/create",
                },
                {
                    title: "All Categories",
                    url: "#",
                },
                {
                    title: "Styling",
                    url: "#",
                },
            ],
        },
        {
            title: "API Reference",
            url: "#",
            items: [
                {
                    title: "Components",
                    url: "#",
                },
                {
                    title: "File Conventions",
                    url: "#",
                },
                {
                    title: "Functions",
                    url: "#",
                },
                {
                    title: "next.config.js Options",
                    url: "#",
                },
                {
                    title: "CLI",
                    url: "#",
                },
                {
                    title: "Edge Runtime",
                    url: "#",
                },
            ],
        },
        {
            title: "Architecture",
            url: "#",
            items: [
                {
                    title: "Accessibility",
                    url: "#",
                },
                {
                    title: "Fast Refresh",
                    url: "#",
                },
                {
                    title: "Next.js Compiler",
                    url: "#",
                },
                {
                    title: "Supported Browsers",
                    url: "#",
                },
                {
                    title: "Turbopack",
                    url: "#",
                },
            ],
        },
        {
            title: "Community",
            url: "#",
            items: [
                {
                    title: "Contribution Guide",
                    url: "#",
                },
            ],
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const pathname = usePathname();
    console.log("the pathname is:", pathname);

    interface NavItem {
        title: string;
        url: string;
        isActive?: boolean;
        items?: NavItem[];
    }

    const isActive = (item: NavItem): boolean => {
        if (pathname === item.url) return true;
        if (item.items?.some((subItem) => pathname === subItem.url)) return true;
        return false;
    };
    return (
        <Sidebar {...props}>
            <SidebarHeader>
                <p className="text-center text-3xl font-bold text-black italic">SKB BEST</p>
                <SearchForm />
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        {data.navMain.map((item) => {
                            const active = isActive(item);
                            console.log("Active is:", active);

                            return (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton>
                                        <a
                                            href={item.url}
                                            className={`text-base font-semibold ${active ? "text-primary" : "text-black"}`}>
                                            {item.title}
                                        </a>
                                    </SidebarMenuButton>
                                    {item.items?.length ? (
                                        <SidebarMenuSub className="border-none">
                                            {item.items.map((item) => {
                                                const active = isActive(item);
                                                return (
                                                    <Link key={item.title} href={item.url}>
                                                    <SidebarMenuSubItem
                                                        
                                                        className={`cursor-pointer duration-150 ease-out hover:bg-[#cee3f6] hover:text-primary hover:border-primary border-l-2 py-2 ps-2 text-sm ${active ? "border-primary bg-[#cee3f6] font-medium text-primary" : "border-white bg-white text-black"}`}>
                                                        {item.title}
                                                    </SidebarMenuSubItem>
                                                    </Link>
                                                );
                                            })}
                                        </SidebarMenuSub>
                                    ) : null}
                                </SidebarMenuItem>
                            );
                        })}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    );
}
