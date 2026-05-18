"use client";

import Sidebar from "@/components/Sidebar";
import { QRCodeCanvas } from "qrcode.react";

export default function QRFlowPage() {

  return (
    <div className="flex">

      <Sidebar />

      <main className="flex-1 min-h-screen bg-[#081120] text-white px-8 py-10">

        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="mb-12">

            <p className="text-blue-400 mb-3">
              Customer Review Funnel
            </p>

            <h1 className="text-5xl font-bold mb-4">
              QR Review Flow
            </h1>

            <p className="text-gray-400 text-lg">
              Smart reputation management powered by AI.
            </p>

          </div>

          {/* MAIN GRID */}
          <div className="grid lg:grid-cols-2 gap-10">

            {/* LEFT SIDE */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10">

              <h2 className="text-3xl font-bold mb-8">
                How It Works
              </h2>

              <div className="space-y-6">

                {/* STEP 1 */}
                <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">

                  <h3 className="text-2xl font-semibold mb-2">
                    1. Customer scans QR
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    Customers scan the table QR code after their meal.
                  </p>

                </div>

                {/* STEP 2 */}
                <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">

                  <h3 className="text-2xl font-semibold mb-2">
                    2. AI filters feedback
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    Positive experiences are redirected to public reviews,
                    while negative experiences stay private.
                  </p>

                </div>

                {/* STEP 3 */}
                <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">

                  <h3 className="text-2xl font-semibold mb-2">
                    3. Reputation improves
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    Restaurants increase positive online reviews and detect
                    operational issues earlier.
                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 flex flex-col items-center justify-center">

              {/* QR CODE */}
              <div className="bg-white p-6 rounded-3xl mb-8">

                <QRCodeCanvas
                  value="http://localhost:3000/leave-review"
                  size={300}
                  bgColor="#ffffff"
                  fgColor="#000000"
                  level="H"
                  includeMargin={true}
                />

              </div>

              <h2 className="text-3xl font-bold mb-4">
                Scan Demo QR
              </h2>

              <p className="text-gray-400 text-center leading-relaxed max-w-md mb-8">

                Customers scan this QR code to leave private feedback
                or publish positive reviews.

              </p>

              <a
                href="/leave-review"
                className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-2xl text-xl font-semibold"
              >
                Open Review Experience
              </a>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}