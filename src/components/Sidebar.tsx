"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {

  const pathname = usePathname();

  return (
    <aside className="w-72 border-r border-white/10 bg-[#0B1020] p-6 min-h-screen">

      <h1 className="text-3xl font-bold mb-10 text-white">
        Review<span className="text-blue-500">Boost</span>
      </h1>

      <nav className="space-y-3">

        <Link
          href="/dashboard"
          className={`block rounded-xl px-4 py-3 transition ${
            pathname === "/dashboard"
              ? "bg-blue-600 text-white"
              : "hover:bg-white/5 text-gray-300"
          }`}
        >
          Dashboard
        </Link>

        <Link
          href="/reviews"
          className={`block rounded-xl px-4 py-3 transition ${
            pathname === "/reviews"
              ? "bg-blue-600 text-white"
              : "hover:bg-white/5 text-gray-300"
          }`}
        >
          Reviews
        </Link>

        <Link
          href="/analytics"
          className={`block rounded-xl px-4 py-3 transition ${
            pathname === "/analytics"
              ? "bg-blue-600 text-white"
              : "hover:bg-white/5 text-gray-300"
          }`}
        >
          Analytics
        </Link>

      </nav>

    </aside>
  );
}