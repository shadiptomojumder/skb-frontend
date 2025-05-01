"use client";
import getBanners from "@/api/banners/getBanners";
import { IBanner } from "@/interfaces/banner.schemas";
import { useQuery } from "@tanstack/react-query";
import { GalleryVertical, PlusCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import CnangeSwitch from "./components/change-switch";
import { format } from "date-fns";

const BannerPage = () => {
    const { data: banners, isLoading } = useQuery({
        queryKey: ["bannerImages"],
        queryFn: getBanners,
    });

    console.log("banners are:", banners);
    return (
        <section className="px-4 py-5 sm:px-5 md:px-7 lg:px-12">
            <div className="mb-5 flex flex-col items-start justify-between gap-3 lg:flex-row">
                <div>
                    <h2 className="flex gap-2 text-center text-lg font-semibold text-primary sm:text-left">
                        <GalleryVertical />
                        Create New Banners
                    </h2>
                    <p className="text-start text-sm sm:text-left">
                        This is Banner Page here you can upload a new banner , update an existing
                        banner or delete a banner.
                    </p>
                </div>
            </div>
            <section>
                <div className="container mx-auto py-10">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle>Banners</CardTitle>
                                <CardDescription>
                                    Manage your website banners here. You can add, edit, or delete
                                    banners.
                                </CardDescription>
                            </div>
                            <Button asChild>
                                <Link href="/dashboard/banners/create">
                                    <PlusCircle className="mr-2 h-4 w-4" />
                                    Add Banner
                                </Link>
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[80px]">Index</TableHead>
                                        <TableHead>Title</TableHead>
                                        <TableHead>Image</TableHead>
                                        <TableHead>Active Status</TableHead>
                                        <TableHead>Created</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {banners && banners.length > 0 ?(banners.map((banner: IBanner, index: number) => (
                                        <TableRow key={banner.id}>
                                            <TableCell className="font-medium">
                                                #{index + 1}
                                            </TableCell>
                                            <TableCell className="font-medium">
                                                {banner.title}
                                            </TableCell>
                                            <TableCell>
                                                <Image
                                                    src={banner.image || "/placeholder.svg"}
                                                    alt={banner.title}
                                                    width={100}
                                                    height={50}
                                                    className="rounded-md aspect-video w-[150px] object-cover"
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <CnangeSwitch bannerId={banner.id} fieldName="isActive" initialValue={banner.isActive}/>
                                            </TableCell>

                                            <TableCell>
                                            {banner.createdAt ? format(new Date(banner.createdAt), "dd/MM/yyyy") : "N/A"}
                                            </TableCell>
                                            <TableCell className="text-right">
                                                {/* <BannerActions banner={banner} /> */}
                                            </TableCell>
                                        </TableRow>
                                    ))):<></>}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <>
                        {banners && banners.length > 0 ? (
                            banners.map((banner: IBanner, index: number) => (
                                <div
                                    key={index}
                                    className="flex flex-col justify-center gap-3 lg:flex-row lg:justify-start lg:gap-5">
                                    <p className="text-center text-lg font-semibold text-nowrap text-slate-700 lg:text-start">
                                        #{index + 1} Banner
                                    </p>
                                    <Image
                                        src={banner.image}
                                        alt="banner"
                                        width={100}
                                        height={100}
                                        className="aspect-[1600/600] h-[150px] w-full p-2 min-[449px]:h-[300px] lg:w-[800px]"
                                    />
                                </div>
                            ))
                        ) : (
                            <div>No banner images found.</div>
                        )}
                    </>
                )}
            </section>
        </section>
    );
};

export default BannerPage;
