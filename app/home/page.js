"use client";
import { useRef, useEffect, useState } from "react"; // เพิ่มบนสุด
import Image from "next/image";
import { useRouter } from "next/navigation";

const MENU = [
    "หน้าหลัก",
    "แดชบอร์ด",
    "รับสินค้าเข้า",
    "เบิก/จ่ายสินค้า",
    "คงคลัง",
    "รายงาน",
    "ผู้ใช้งาน",
    "ตั้งค่า",
];

const PRICINGS = [
    {
        name: "Trial",
        price: "FREE",
        duration: "30 วัน",
        features: ["1GB Storage", "1 Email", "1 Domain", "500MB Bandwidth"],
        color: "bg-gray-400",
        btnColor: "bg-gray-400 hover:bg-gray-500",
        buttonText: "เลือก"
    },
    {
        name: "Basic",
        price: "$9.99 / เดือน",
        duration: "30 วัน",
        features: ["10GB Storage", "10 Emails", "10 Domains", "1GB Bandwidth"],
        color: "bg-black",
        btnColor: "bg-emerald-500 hover:bg-emerald-600",
        buttonText: "เลือก"
    },
    {
        name: "Standard",
        price: "$19.99 / เดือน",
        duration: "30 วัน",
        features: ["20GB Storage", "20 Emails", "20 Domains", "2GB Bandwidth"],
        color: "bg-blue-500",
        btnColor: "bg-blue-500 hover:bg-blue-600",
        buttonText: "เลือก"
    },
    {
        name: "Professional",
        price: "$24.99 / เดือน",
        duration: "30 วัน",
        features: ["50GB Storage", "50 Emails", "50 Domains", "5GB Bandwidth"],
        color: "bg-green-500",
        btnColor: "bg-green-500 hover:bg-green-600",
        buttonText: "เลือก"
    },
    {
        name: "Enterprise",
        price: "$49.99 / เดือน",
        duration: "30 วัน",
        features: ["100GB Storage", "100 Emails", "100 Domains", "10GB Bandwidth"],
        color: "bg-yellow-500",
        btnColor: "bg-yellow-500 hover:bg-yellow-600",
        buttonText: "เลือก"
    }
];
export default function Home() {
    const [activeTab, setActiveTab] = useState(0);
    const [openMenu, setOpenMenu] = useState(false);
    const [openUserMenu, setOpenUserMenu] = useState(false);
    const userMenuRef = useRef();
    const [showPricing, setShowPricing] = useState(false);
    const [activePackage, setActivePackage] = useState({ name: "ทดลองใช้ฟรี", duration: "30 วัน" });

    // ฟังก์ชันเวลาคลิก sign up
    const handleChoosePackage = (pkg) => {
        setActivePackage({ name: pkg.name, duration: pkg.duration });
        setShowPricing(false);
    };
    const router = useRouter();


    useEffect(() => {
        const handler = (e) => {
            if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
                setOpenUserMenu(false);
            }
        };
        if (openUserMenu) document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [openUserMenu]);

    return (
        <div className="min-h-screen w-full flex flex-col bg-white">
            {/* HEADER NAV */}
            <div className="w-full flex items-center justify-between bg-[#21a6ff] h-[60px] px-3 md:px-8 shadow relative z-20">
                {/* LOGO + NAME */}
                <div
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() => setActiveTab(0)}
                >
                    <Image src="/cube.png" alt="Logo" width={38} height={38} />
                    <span className="hidden md:inline text-white text-xl md:text-2xl font-bold tracking-wide whitespace-nowrap">
                        STOCKNIZE AI
                    </span>

                </div>
                {/* Desktop MENU BAR */}
                <nav className="flex-1 hidden md:flex items-center justify-center gap-4 lg:gap-7">
                    {MENU.map((item, idx) => (
                        <div
                            key={item}
                            className="relative flex flex-col items-center cursor-pointer"
                            onClick={() => setActiveTab(idx)}
                        >
                            <span
                                className={`text-white text-[15px] lg:text-[17px] transition ${activeTab === idx
                                    ? "font-bold"
                                    : "font-normal opacity-90 hover:opacity-100 hover:font-bold"
                                    }`}
                            >
                                {item}
                            </span>
                            {activeTab === idx && (
                                <span className="block mt-1 w-7 h-[3px] rounded-full bg-white" />
                            )}
                        </div>
                    ))}
                </nav>

                {/* RIGHT CONTROL */}
                <div className="flex items-center gap-2 ml-2">
                    <div
                        className="bg-white/90 rounded-full px-3 md:px-5 py-1.5 flex items-center gap-1 text-blue-500 font-semibold text-xs md:text-base shadow-sm select-none cursor-pointer"
                        onClick={() => setShowPricing(true)} // <-- เปิด modal
                    >
                        {activePackage.name} : <span className="ml-1 text-blue-800">{activePackage.duration}</span>
                        <svg width={18} height={18} className="ml-1" fill="#21a6ff" viewBox="0 0 24 24">
                            <path d="M7 10l5 5 5-5z" />
                        </svg>
                    </div>
                    <Image src="/th.png" alt="TH" width={26} height={26} className="rounded-full shadow" />
                    <Image src="/en.png" alt="EN" width={26} height={26} className="rounded-full shadow" />
                    <div className="relative" ref={userMenuRef}>
                        <div
                            className="text-white text-base md:text-xl font-bold ml-2 select-none cursor-pointer"
                            onClick={() => setOpenUserMenu((v) => !v)}
                        >
                            NUT
                        </div>
                        {openUserMenu && (
                            <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl ring-1 ring-black/5 z-30 flex flex-col animate-fade-in">
                                <div className="p-5 pb-3">
                                    <button className="text-gray-500 text-[1.7rem] font-medium mb-2 block w-full text-left hover:bg-gray-100 rounded px-2 py-1 transition">
                                        คู่มือ
                                    </button>
                                    <button className="text-gray-500 text-[1.7rem] font-medium mb-2 block w-full text-left hover:bg-gray-100 rounded px-2 py-1 transition">
                                        เกี่ยวกับผู้ใช้งาน
                                    </button>
                                    <button className="text-gray-500 text-[1.7rem] font-medium block w-full text-left hover:bg-gray-100 rounded px-2 py-1 transition">
                                        เกี่ยวกับเรา
                                    </button>
                                </div>
                                <hr className="border-t" />
                                <button
                                    className="text-red-500 text-[2rem] font-bold px-5 py-4 block w-full text-left hover:bg-red-50 rounded-b-xl transition"
                                    onClick={() => {
                                        setOpenUserMenu(false);
                                        router.push("/"); // หรือ "/" ถ้า login อยู่หน้านี้
                                    }}
                                >
                                    ออกจากระบบ
                                </button>


                            </div>
                        )}
                    </div>

                </div>
                {/* Mobile hamburger */}
                <div className="md:hidden flex items-center">
                    <button
                        className="text-white focus:outline-none"
                        onClick={() => setOpenMenu((v) => !v)}
                        aria-label="เมนู"
                    >
                        <svg width="30" height="30" fill="none" viewBox="0 0 24 24">
                            <path
                                stroke="#fff"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
                {/* Mobile Dropdown Menu */}
                {openMenu && (
                    <div className="absolute left-0 top-[60px] w-full bg-white shadow-xl md:hidden animate-fade-in z-30">
                        <div className="flex flex-col">
                            {MENU.map((item, idx) => (
                                <button
                                    key={item}
                                    className={`py-3 px-6 text-[#21a6ff] text-base text-left border-b border-blue-50 ${activeTab === idx
                                        ? "font-bold bg-blue-50"
                                        : "font-normal hover:bg-blue-50"
                                        }`}
                                    onClick={() => {
                                        setActiveTab(idx);
                                        setOpenMenu(false);
                                    }}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            {/* CONTENT */}
            <div className="flex-1 bg-white p-4 sm:p-8">
                {activeTab === 0 && (
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">หน้าหลัก</h1>
                        <p>เนื้อหาสำหรับ หน้าหลัก</p>
                    </div>
                )}
                {activeTab === 1 && (
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">แดชบอร์ด</h1>
                        <p>เนื้อหาสำหรับ แดชบอร์ด</p>
                    </div>
                )}
                {/* ... (เหมือนเดิมสำหรับแต่ละ tab) */}
                {activeTab === 2 && (
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">รับสินค้าเข้า</h1>
                        <p>เนื้อหาสำหรับ รับสินค้าเข้า</p>
                    </div>
                )}
                {activeTab === 3 && (
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">เบิก/จ่ายสินค้า</h1>
                        <p>เนื้อหาสำหรับ เบิก/จ่ายสินค้า</p>
                    </div>
                )}
                {activeTab === 4 && (
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">คงคลัง</h1>
                        <p>เนื้อหาสำหรับ คงคลัง</p>
                    </div>
                )}
                {activeTab === 5 && (
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">รายงาน</h1>
                        <p>เนื้อหาสำหรับ รายงาน</p>
                    </div>
                )}
                {activeTab === 6 && (
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">ผู้ใช้งาน</h1>
                        <p>เนื้อหาสำหรับ ผู้ใช้งาน</p>
                    </div>
                )}
                {activeTab === 7 && (
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">ตั้งค่า</h1>
                        <p>เนื้อหาสำหรับ ตั้งค่า</p>
                    </div>
                )}
            </div>
            {/* MODAL */}
            {showPricing && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full mx-2 p-6 md:p-10 flex flex-col">
                        {/* Head */}
                        <div className="flex items-center justify-between mb-8">
                            <div className="text-2xl font-bold text-blue-700">เลือกแพ็คเกจ</div>
                            <button className="text-2xl text-gray-400 hover:text-red-400" onClick={() => setShowPricing(false)}>
                                ×
                            </button>
                        </div>
                        {/* Pricing Table */}
                        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-stretch">
                            {PRICINGS.map((pkg, idx) => (
                                <div
                                    key={pkg.name}
                                    className={`flex-1 flex flex-col bg-white rounded-xl shadow-lg border overflow-hidden min-w-[240px]`}
                                >
                                    {/* Head */}
                                    <div className={`${pkg.color} text-white py-5 text-center text-2xl font-bold`}>{pkg.name}</div>
                                    {/* Price */}
                                    <div className="bg-gray-100 py-5 text-center text-xl font-medium text-black">{pkg.price}</div>
                                    {/* Features */}
                                    <div className="flex-1 flex flex-col">
                                        {pkg.features.map((ft, i) => (
                                            <div
                                                key={i}
                                                className="text-black text-lg font-medium py-4 text-center border-b last:border-b-0"
                                            >
                                                {ft}
                                            </div>
                                        ))}
                                    </div>
                                    {/* Sign Up */}
                                    <div className="bg-gray-100 flex justify-center py-5">
                                        <button
                                            className={`${pkg.btnColor} text-white text-lg font-semibold px-8 py-2 rounded shadow transition-all`}
                                            onClick={() => handleChoosePackage(pkg)}
                                        >
                                            {pkg.buttonText}
                                        </button>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
