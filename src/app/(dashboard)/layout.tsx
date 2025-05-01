import { AppSidebar } from "@/components/dashboardComponents/app-sidebar";
import { TopNavbar } from "@/components/dashboardComponents/top-navbar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import AdminContext from "@/context/admin-context";
import TokenExpirationContext from "@/context/TokenExpirationContext";
import TanstackProvider from "@/TanstackProvider/TanstackProvider";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/tiptap/styles.css";
import type { Metadata } from "next";
import { Montserrat, Roboto, Rubik } from "next/font/google";
import StoreProvider from "../(pages)/StoreProvider";
import "../globals.css";

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
    weight: ["300", "400", "500", "700", "900"],
});

const rubik = Rubik({
    variable: "--font-rubik",
    subsets: ["latin"],
});

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
    weight: ["300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "DASHBOARD SKB BEST",
    description: "Get the best",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${roboto.className} ${roboto.variable} ${rubik.variable} ${montserrat.variable} antialiased`}
                cz-shortcut-listen="true"
                suppressHydrationWarning>
                <StoreProvider>
                    <TanstackProvider>
                        <TokenExpirationContext>
                            <AdminContext role="ADMIN">
                                <SidebarProvider>
                                    <AppSidebar />
                                    <SidebarInset>
                                        <MantineProvider>
                                            <TopNavbar />
                                            {children}
                                        </MantineProvider>
                                    </SidebarInset>
                                </SidebarProvider>
                            </AdminContext>
                        </TokenExpirationContext>
                    </TanstackProvider>
                    <Toaster richColors />
                </StoreProvider>
            </body>
        </html>
    );
}
