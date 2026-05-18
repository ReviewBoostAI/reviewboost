"use client";

import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import { motion } from "framer-motion";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

export default function DashboardPage() {

  const data = [
    { day: "Mon", reputation: 3.8 },
    { day: "Tue", reputation: 4.1 },
    { day: "Wed", reputation: 4.0 },
    { day: "Thu", reputation: 4.3 },
    { day: "Fri", reputation: 4.5 },
    { day: "Sat", reputation: 4.4 },
    { day: "Sun", reputation: 4.6 },
  ];

  return (
    <div className="flex">

      <Sidebar />

      <main className="flex-1 min-h-screen bg-[#081120] text-white px-4 lg:px-8 py-24 lg:py-10">

        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">

            <div>

              <p className="text-blue-400 mb-3">
                AI Reputation Dashboard
              </p>

              <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                Nome Ristorante
              </h1>

              <p className="text-gray-400 text-base lg:text-xl">
                Real-time customer intelligence & operational insights.
              </p>

            </div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="bg-green-500/10 border border-green-500/20 text-green-400 px-6 py-4 rounded-2xl text-sm lg:text-lg w-fit"
            >
              Reputation improving ↗
            </motion.div>

          </div>

          {/* TOP METRICS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-10"
          >

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-br from-blue-500/20 to-blue-900/20 border border-blue-500/20 rounded-3xl p-5 lg:p-7"
            >

              <p className="text-gray-300 mb-4 text-sm lg:text-base">
                Reputation Score
              </p>

              <h2 className="text-4xl lg:text-6xl font-bold mb-3">
                4.6
              </h2>

              <p className="text-green-400 text-sm lg:text-base">
                +12% this month
              </p>

            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-5 lg:p-7"
            >

              <p className="text-gray-300 mb-4 text-sm lg:text-base">
                Reviews Collected
              </p>

              <h2 className="text-4xl lg:text-6xl font-bold mb-3">
                248
              </h2>

              <p className="text-blue-400 text-sm lg:text-base">
                18 today
              </p>

            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-5 lg:p-7"
            >

              <p className="text-gray-300 mb-4 text-sm lg:text-base">
                Customer Satisfaction
              </p>

              <h2 className="text-4xl lg:text-6xl font-bold mb-3">
                82%
              </h2>

              <p className="text-green-400 text-sm lg:text-base">
                Positive trend
              </p>

            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-br from-red-500/20 to-red-900/20 border border-red-500/20 rounded-3xl p-5 lg:p-7"
            >

              <p className="text-gray-300 mb-4 text-sm lg:text-base">
                Active Alerts
              </p>

              <h2 className="text-4xl lg:text-6xl font-bold mb-3">
                4
              </h2>

              <p className="text-red-400 text-sm lg:text-base">
                Needs attention
              </p>

            </motion.div>

          </motion.div>

          {/* MAIN GRID */}
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-8">

            {/* REPUTATION GRAPH */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-6 lg:p-8"
            >

              <div className="flex items-center justify-between mb-8">

                <h3 className="text-2xl lg:text-3xl font-bold">
                  Reputation Trend
                </h3>

                <span className="text-gray-400 text-sm lg:text-base">
                  Last 30 days
                </span>

              </div>

              <div className="h-56 lg:h-72">

                <ResponsiveContainer width="100%" height="100%">

                  <AreaChart data={data}>

                    <XAxis
                      dataKey="day"
                      stroke="#9CA3AF"
                    />

                    <Tooltip />

                    <Area
                      type="monotone"
                      dataKey="reputation"
                      stroke="#3B82F6"
                      fill="#3B82F6"
                      fillOpacity={0.25}
                      strokeWidth={4}
                    />

                  </AreaChart>

                </ResponsiveContainer>

              </div>

            </motion.div>

            {/* AI SUMMARY */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-3xl p-6 lg:p-8"
            >

              <h3 className="text-2xl lg:text-3xl font-bold mb-8">
                AI Summary
              </h3>

              <div className="space-y-5">

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5"
                >

                  <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                    Customer satisfaction increased after menu optimization.
                  </p>

                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5"
                >

                  <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                    Waiting time remains the primary operational issue.
                  </p>

                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5"
                >

                  <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                    Gluten-free options generate highly positive reviews.
                  </p>

                </motion.div>

              </div>

            </motion.div>

          </div>

          {/* LOWER GRID */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-8">

            {/* LIVE ACTIVITY */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 lg:p-8"
            >

              <div className="flex items-center justify-between mb-8">

                <h3 className="text-2xl lg:text-3xl font-bold">
                  Live Activity
                </h3>

                <span className="text-green-400 text-sm lg:text-base">
                  Live
                </span>

              </div>

              <div className="space-y-5">

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#111827] border border-white/10 rounded-2xl p-5"
                >

                  <p className="text-base lg:text-lg mb-2">
                    New 5-star review received
                  </p>

                  <p className="text-gray-400 text-sm lg:text-base">
                    2 minutes ago
                  </p>

                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#111827] border border-white/10 rounded-2xl p-5"
                >

                  <p className="text-base lg:text-lg mb-2">
                    AI detected increase in waiting time complaints
                  </p>

                  <p className="text-gray-400 text-sm lg:text-base">
                    18 minutes ago
                  </p>

                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#111827] border border-white/10 rounded-2xl p-5"
                >

                  <p className="text-base lg:text-lg mb-2">
                    3 reviews require responses
                  </p>

                  <p className="text-gray-400 text-sm lg:text-base">
                    35 minutes ago
                  </p>

                </motion.div>

              </div>

            </motion.div>

            {/* QUICK ACTIONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 lg:p-8"
            >

              <h3 className="text-2xl lg:text-3xl font-bold mb-8">
                Quick Actions
              </h3>

              <div className="space-y-5">

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >

                  <Link
                    href="/reviews"
                    className="block bg-[#111827] hover:bg-white/10 transition border border-white/10 rounded-2xl p-5"
                  >

                    <h4 className="text-xl lg:text-2xl font-semibold mb-2">
                      Reply to Reviews
                    </h4>

                    <p className="text-gray-400 text-sm lg:text-base">
                      12 reviews still require responses.
                    </p>

                  </Link>

                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >

                  <Link
                    href="/analytics"
                    className="block bg-[#111827] hover:bg-white/10 transition border border-white/10 rounded-2xl p-5"
                  >

                    <h4 className="text-xl lg:text-2xl font-semibold mb-2">
                      Open Analytics
                    </h4>

                    <p className="text-gray-400 text-sm lg:text-base">
                      Analyze customer sentiment and trends.
                    </p>

                  </Link>

                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >

                  <Link
                    href="/feedback-intelligence"
                    className="block bg-[#111827] hover:bg-white/10 transition border border-white/10 rounded-2xl p-5"
                  >

                    <h4 className="text-xl lg:text-2xl font-semibold mb-2">
                      View Private Feedback
                    </h4>

                    <p className="text-gray-400 text-sm lg:text-base">
                      Check unresolved customer frustrations.
                    </p>

                  </Link>

                </motion.div>

              </div>

            </motion.div>

          </div>

        </div>

      </main>

    </div>
  );
}