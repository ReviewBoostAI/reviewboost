"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {

  const pathname = usePathname();

  const links = [
    {
      name: "Dashboard",
      href: "/dashboard",
    },
    {
      name: "Analytics",
      href: "/analytics",
    },
    {
      name: "Reviews",
      href: "/reviews",
    },
    {
      name: "Feedback AI",
      href: "/feedback-intelligence",
    },
    {
      name: "QR Flow",
      href: "/qr-flow",
    },
  ];

  return (
    <>
      {/* MOBILE TOPBAR */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#081120] border-b border-white/10 px-5 py-4">

        <div className="flex items-center justify-between">

          <h1 className="text-2xl font-bold text-white">
            ReviewBoost
          </h1>

        </div>

        {/* MOBILE NAV */}
        <div className="flex gap-3 overflow-x-auto mt-4 pb-1">

          {links.map((link) => {

            const active = pathname === link.href;

            return (

              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm transition ${
                  active
                    ? "bg-blue-600 text-white"
                    : "bg-white/5 text-gray-300"
                }`}
              >
                {link.name}
              </Link>

            );
          })}

        </div>

      </div>

      {/* DESKTOP SIDEBAR */}
      <aside className="hidden lg:flex w-72 min-h-screen bg-[#0B1628] border-r border-white/10 p-8 flex-col">

        {/* LOGO */}
        <div className="mb-14">

          <Link href="/dashboard">

            <h1 className="text-4xl font-bold text-white">
              ReviewBoost
            </h1>

          </Link>

          <p className="text-gray-400 mt-3 leading-relaxed">
            Reputation management platform
          </p>

        </div>

        {/* NAVIGATION */}
        <nav className="space-y-4">

          {links.map((link) => {

            const active = pathname === link.href;

            return (

              <Link
                key={link.href}
                href={link.href}
                className={`block px-5 py-4 rounded-2xl transition text-lg font-medium ${
                  active
                    ? "bg-blue-600 text-white"
                    : "bg-white/5 text-gray-300 hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>

            );
          })}

        </nav>

      </aside>
    </>
  );
}