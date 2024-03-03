import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Roboto as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
    weight: ["400", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "News letter",
    description:
        "Discover curated insights, expert analyses, and captivating stories delivered straight to your inbox. Stay informed, inspired, and ahead of the curve with our newsletter. Subscribe now for a fresh perspective on the topics that matter most to you.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    "min-h-screen font-sans antialiased",
                    fontSans.variable
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}
