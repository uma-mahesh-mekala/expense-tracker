// app/components/Header.tsx
"use client";

import supabaseClient from "@/lib/supabaseClient";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const isAuthPage = pathname === "/login" || pathname === "/";

  const handleSignOut = async () => {
    await supabaseClient.auth.signOut();
    router.push("/login");
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Left: Logo + Title */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={36}
            height={36}
            className="object-contain"
          />
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
            <span className="text-blue-600">Expense</span> Tracker
          </h1>
        </div>

        {/* Right: User dropdown (only if not on login) */}
        {!isAuthPage && (
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 rounded px-2 py-1 transition"
            >
              <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full font-medium">
                U
              </div>
              <span className="text-gray-700 font-medium hidden sm:inline">
                My Account
              </span>
              <ChevronDownIcon className="w-5 h-5 text-gray-500" />
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg py-2 z-50">
                <button
                  onClick={handleSignOut}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
