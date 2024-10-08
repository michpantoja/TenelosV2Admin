import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Players | Tenelos",
    description: "Generated by create next app",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full flex flex-col gap-2">
            <Navbar />
            <div className="flex justify-between">
                <div className="w-1/5 px-6">
                    <Sidebar />
                </div>
                <div className="w-4/5 bg-lightGray rounded-tl-[50px] flex flex-col px-8 py-6">
                    {children}
                </div>
            </div>
        </div>
    );
}
