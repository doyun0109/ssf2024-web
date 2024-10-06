import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import {ReactNode} from "react";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const pretendard = localFont({
    src: "./fonts/PretendardVariable.woff2",
    display: 'swap',
    weight: '45 920',
    variable: '--font-pretendard',
});

export const metadata: Metadata = {
    title: "2024 소프트웨어 나눔축제",
    description: "2024 선린인터넷고등학교 소프트웨어 나눔축제",
    openGraph: {
        title: '2024 소프트웨어 나눔축제',
        description: '2024년 선린인터넷고등학교 소프트웨어 나눔축제',
    },
    twitter: {
        title: '2024 소프트웨어 나눔축제',
        description: '2024년 선린인터넷고등학교 소프트웨어 나눔축제',
    }
};


export default function RootLayout({children,}: Readonly<{ children: ReactNode; }>) {
    return (
        <html lang="ko">
        <body className={`${pretendard.variable} ${pretendard.className}`}>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
