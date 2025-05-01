"use client";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useLogout from "@/hooks/useLogout ";
import { setLoading } from "@/lib/slices/userSlice";
import { RootState } from "@/lib/store";
import { CircleUser, LayoutDashboard, LogOut, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const AuthUser = () => {
    const { user, isLoading } = useSelector((state: RootState) => state.user);
    const { items } = useSelector((state: RootState) => state.cart);
    // console.log("Redux User is:", user);
    // console.log("Redux isLoading is:", isLoading);
    const handleLogout = useLogout();
    const dispatch = useDispatch();

    useEffect(() => {
        // Set loading state to false after initial check
        dispatch(setLoading(false));
    }, [dispatch]);

    return (
        <>
            <Link
                href="/checkout"
                className="relative rounded-md bg-accent p-2 text-black drop-shadow-lg">
                <ShoppingCart size={20} />
                {items && items.length > 0 ? (
                    <div className="absolute -top-2.5 -right-2 flex h-[20px] w-[20px] items-center justify-center rounded-full bg-blue-200 text-xs font-semibold">
                        {items?.length}
                    </div>
                ) : (
                    <></>
                )}
            </Link>
            {isLoading ? (
                <div>User Loading...</div>
            ) : (
                <>
                    {user ? (
                        <>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    {/* <div className="flex cursor-pointer items-center gap-1.5 rounded-md bg-accent p-2 text-sm font-semibold text-primary">
                                        <CircleUser size={20} /> <span className="hidden sm:block">Shadipto</span>
                                    </div> */}
                                    <div className="sm:flex hidden cursor-pointer items-center gap-1.5 rounded-full bg-accent p-0 text-sm font-semibold text-black drop-shadow-lg sm:rounded-md sm:p-2">
                                        <CircleUser className="h-[35px] w-[35px] sm:h-[20px] sm:w-[20px]" />{" "}
                                        <span className="capitalize">
                                            {user?.firstName}
                                        </span>
                                    </div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="z-[2255] grid w-56 gap-1.5 p-2">
                                    <DropdownMenuItem asChild className="focus:bg-[#F8FAFC]">
                                        <Link
                                            href="/my-profile"
                                            className="flex items-center gap-2 rounded-md border-2 border-gray-200 bg-white p-2 text-primary transition duration-300 ease-in-out hover:border-gray-400 hover:bg-[#F8FAFC]">
                                            <User size={20} className="text-black" />
                                            <p className="text-sm font-medium text-gray-800">
                                                My Profile
                                            </p>
                                        </Link>
                                    </DropdownMenuItem>

                                    {user && user.role === "ADMIN" && (
                                        <DropdownMenuItem asChild className="focus:bg-[#F8FAFC]">
                                            <Link
                                                href="/dashboard/products"
                                                className="flex items-center gap-2 rounded-md border-2 border-gray-200 bg-white p-2 text-primary transition duration-300 ease-in-out hover:border-gray-400 hover:bg-[#F8FAFC]">
                                                <LayoutDashboard size={20} className="text-black" />
                                                <p className="text-sm font-medium text-gray-800">
                                                    Dashboard
                                                </p>
                                            </Link>
                                        </DropdownMenuItem>
                                    )}

                                    <DropdownMenuItem asChild className="focus:bg-[#F8FAFC]">
                                        <button
                                            onClick={handleLogout}
                                            className="flex cursor-pointer items-center gap-2 rounded-md border-2 border-gray-200 bg-white p-2 text-primary transition duration-300 ease-in-out hover:border-gray-400 hover:bg-[#F8FAFC]">
                                            <LogOut size={20} className="text-black" />
                                            <p className="text-sm font-medium text-gray-800">
                                                Logout
                                            </p>
                                        </button>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="flex items-center gap-0.5 rounded-md bg-accent p-2 text-sm font-semibold text-nowrap text-black drop-shadow-lg sm:gap-1.5">
                                <CircleUser size={20} className="" />
                            </Link>
                        </>
                    )}
                </>
            )}
        </>
    );
};

export default AuthUser;
