import type { Metadata } from "next";
import "@/style.css";

export const metadata: Metadata = {
    title: "Satoru | Visual Storyteller & Graphic Designer",
    description: "Portfolio of Satoru, a graphic designer specializing in 3D visuals and futuristic brand identities.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased overflow-x-hidden">
                {children}
            </body>
        </html>
    );
}
