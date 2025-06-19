"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Warehouse() {
    const router = useRouter();
    const [selectedRow, setSelectedRow] = useState(null);

    // ตัวอย่างข้อมูล
    const rows = [
        {
            id: 1,
            name: "คลังสินค้าหลัก",
            owner: "บริษัท A",
            status: "พร้อมใช้งาน",
            date: "2024-01-01"
        },
        {
            id: 2,
            name: "คลังสินค้าสำรอง",
            owner: "บริษัท B",
            status: "ระงับใช้งาน",
            date: "2024-06-20"
        },
        {
            id: 3,
            name: "คลังสินค้าสำรอง",
            owner: "บริษัท B",
            status: "ระงับใช้งาน",
            date: "2024-06-20"
        },
        {
            id: 4,
            name: "คลังสินค้าสำรอง",
            owner: "บริษัท B",
            status: "ระงับใช้งาน",
            date: "2024-06-20"
        },
        {
            id: 5,
            name: "คลังสินค้าสำรอง",
            owner: "บริษัท B",
            status: "ระงับใช้งาน",
            date: "2024-06-20"
        },
        {
            id: 6,
            name: "คลังสินค้าสำรอง",
            owner: "บริษัท B",
            status: "ระงับใช้งาน",
            date: "2024-06-20"
        }
    ];
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-[#21a6ff] via-[#38c8fa] to-[#c6efff] flex flex-col">
            {/* HEADER */}
            <div className="flex items-start justify-between p-6 pb-2">
                {/* Logo + Title */}
                <div className="flex items-center gap-3">
                    <Image src="/cube.png" alt="Logo" width={44} height={44} />
                    <span className="text-white text-2xl font-bold tracking-wide drop-shadow-lg">STOCKNIZE AI</span>
                </div>
                {/* Language */}
                <div className="flex items-center gap-3 pr-2">
                    <Image src="/th.png" alt="TH" width={34} height={34} className="rounded-full shadow" />
                    <Image src="/en.png" alt="EN" width={34} height={34} className="rounded-full shadow" />
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="flex flex-1 justify-center items-center min-h-0">
                <div className="w-full max-w-5xl flex flex-col items-center justify-center bg-white/90 rounded-2xl shadow-2xl p-8 md:p-12">
                    {/* หัวข้อ */}
                    <div className="mb-8 flex items-center gap-4">
                        <span className="text-4xl text-blue-400 drop-shadow-lg">•</span>
                        <span className="text-2xl md:text-3xl font-extrabold text-blue-900 drop-shadow-md">
                            รายชื่อคลังสินค้าทั้งหมด
                        </span>
                    </div>
                    {/* Table */}
                    <div className="overflow-x-auto w-full rounded-xl bg-white shadow-md mb-10">
                        <table className="min-w-full border-separate border-spacing-0 text-xs md:text-sm lg:text-base">
                            <thead>
                                <tr className="bg-blue-100">
                                    <th className="border px-2 md:px-4 py-2 md:py-3 font-bold text-xs md:text-base text-blue-700 rounded-tl-xl">
                                        ลำดับ
                                    </th>
                                    <th className="border px-2 md:px-4 py-2 md:py-3 font-bold text-xs md:text-base text-blue-700">
                                        ชื่อคลังสินค้า
                                    </th>
                                    <th className="border px-2 md:px-4 py-2 md:py-3 font-bold text-xs md:text-base text-blue-700">
                                        เจ้าของคลังสินค้า
                                    </th>
                                    <th className="border px-2 md:px-4 py-2 md:py-3 font-bold text-xs md:text-base text-blue-700">
                                        สถานะ
                                    </th>
                                    <th className="border px-2 md:px-4 py-2 md:py-3 font-bold text-xs md:text-base text-blue-700 rounded-tr-xl">
                                        วันที่สร้าง / วันที่เข้าร่วม
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row, idx) => (
                                    <tr
                                        key={row.id}
                                        onClick={() => setSelectedRow(idx)}
                                        className={`cursor-pointer transition ${selectedRow === idx
                                            ? "bg-blue-400/70 ring-2 ring-blue-400"
                                            : "hover:bg-blue-50"
                                            }`}
                                    >
                                        <td className="border px-2 md:px-4 py-2 text-center">{idx + 1}</td>
                                        <td className="border px-2 md:px-4 py-2">{row.name}</td>
                                        <td className="border px-2 md:px-4 py-2">{row.owner}</td>
                                        <td
                                            className={`border px-2 md:px-4 py-2 ${row.status === "พร้อมใช้งาน"
                                                ? "text-black"
                                                : "text-black"
                                                }`}
                                        >
                                            {row.status}
                                        </td>
                                        <td className="border px-2 md:px-4 py-2">{row.date}</td>
                                    </tr>
                                ))}
                                {/* หากไม่มีข้อมูล */}
                                {rows.length === 0 && (
                                    <tr>
                                        <td colSpan={5} className="py-20 text-center text-blue-200 text-lg font-medium border">
                                            <span className="text-5xl drop-shadow-sm">📦</span>
                                            <div>ยังไม่มีข้อมูลคลังสินค้า</div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    {/* ปุ่มด้านล่าง */}
                    <div className="w-full flex flex-col md:flex-row gap-3 justify-center mt-2">
                        <button
                            className="w-full md:w-auto px-6 py-3 rounded-xl bg-blue-400 text-white font-semibold text-base md:text-lg shadow-md hover:scale-105 hover:bg-blue-500 transition-all"
                            onClick={() => router.push("/home")}
                        >
                            เข้าสู่คลังสินค้า
                        </button>
                        <button
                            className="w-full md:w-auto px-6 py-3 rounded-xl bg-sky-300 text-white font-semibold text-base md:text-lg shadow-md hover:scale-105 hover:bg-sky-400 transition-all"
                            onClick={() => alert("สร้างคลังสินค้า (ตัวอย่าง)")}
                        >
                            สร้างคลังสินค้า
                        </button>
                        <button
                            className="w-full md:w-auto px-6 py-3 rounded-xl bg-gray-200 text-blue-900 font-semibold text-base md:text-lg shadow-md hover:scale-105 hover:bg-gray-300 transition-all"
                            onClick={() => alert("ยกเลิกการเชื่อมต่อ (ตัวอย่าง)")}
                        >
                            ยกเลิกการเชื่อมต่อ
                        </button>
                        <button
                            className="w-full md:w-auto px-6 py-3 rounded-xl bg-white text-blue-400 border border-blue-200 font-semibold text-base md:text-lg shadow-md hover:scale-105 hover:bg-blue-50 transition-all"
                            onClick={() => router.push("/")}
                        >
                            กลับสู่หน้าล็อกอิน
                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
}
