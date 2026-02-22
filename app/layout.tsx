import type { Metadata } from "next";
import { Poppins, Sorts_Mill_Goudy } from "next/font/google";
import "./globals.css";
import LenisScroll from "@/components/lenis";
import Script from "next/script"; // Script import karna zaroori hai

const poppins = Poppins({
    variable: "--font-sans",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const sortsMillGoudy = Sorts_Mill_Goudy({
    variable: "--font-mono",
    subsets: ["latin"],
    weight: ["400"],
});

export const metadata: Metadata = {
    title: "Abdullah Tahir | Full-Stack Developer & Designer",
    description: "Portfolio of Abdullah Tahir, a specialized Web Designer and Developer in React, Next.js, and PHP. Building scalable digital experiences.",
    keywords: ["Abdullah Tahir", "Web Designer", "Full Stack Developer", "Next.js Portfolio", "PHP Developer Pakistan"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/* Microsoft Clarity Tracking Script */}
                <Script id="microsoft-clarity" strategy="afterInteractive">
                    {`
                        (function(c,l,a,r,i,t,y){
                            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                        })(window, document, "clarity", "script", "vl905ultjp");
                    `}
                </Script>
            </head>
            <body className={`${poppins.variable} ${sortsMillGoudy.variable} antialiased`}>
                <LenisScroll />
                {children}
            </body>
        </html>
    );
}
