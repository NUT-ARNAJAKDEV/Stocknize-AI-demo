"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // ตรวจสอบ email & password
    if (email === "root" && password === "root") {
      router.push("/warehouse"); // ไปหน้า warehouse
    } else {
      setError("Email or password is incorrect.");
    }
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* LEFT PANEL */}
      <div className="flex-1 flex flex-col justify-between bg-gradient-to-br from-[#2491fa] to-[#1dd1fa] p-8 md:p-12 text-white">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <span className="text-lg font-semibold">Stocknize AI</span>
        </div>
        {/* Centered Info */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">
            STOCKNIZE AI
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-2">
            Warehouse Management With AI
          </h2>
          <p className="text-sm md:text-base lg:text-lg opacity-90 mb-2">
            ซอฟต์แวร์คุณภาพด้านการจัดการคลังสินค้าด้วยระบบอัจฉริยะ
          </p>
        </div>
        {/* Footer */}
        <div className="text-xs opacity-70 flex items-center gap-2">
          <span>© 2015 - 2025 B.M.E. Solutions co.,ltd.</span>
        </div>

      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 flex items-center justify-center bg-gray-50 py-12">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 md:p-10">
          <h2 className="text-2xl font-bold mb-4 text-black">Sign in</h2>
          <p className="mb-6 text-sm text-gray-500">
            Do not have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline font-medium">Sign up</a>
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email"
              className=" w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 outline-none text-base"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
            />
            <input
              type="password"
              placeholder="Password"
              className=" w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 outline-none text-base"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="accent-blue-500 text-black-500" />
                Keep me logged in
              </label>
              <a href="#" className="text-blue-600 hover:underline text-sm">Forgot password</a>
            </div>
            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Log in now
            </button>
          </form>
          <div className="mt-8 text-center text-gray-400 text-sm">Or continue with</div>
          <div className="flex justify-center gap-4 mt-4">
            {/* Google */}
            <button className="border border-gray-200 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition">
              <Image src="/google.png" alt="Google" width={24} height={24} />
            </button>
            {/* Facebook */}
            <button className="border border-gray-200 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition">
              <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
            </button>
            {/* Apple */}
            <button className="border border-gray-200 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition">
              <Image src="/apple.png" alt="Apple" width={24} height={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
