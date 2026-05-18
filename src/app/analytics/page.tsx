"use client";

import Sidebar from "@/components/Sidebar";
import { motion } from "framer-motion";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
} from "recharts";

export default function AnalyticsPage() {

  const sentimentData = [
    { day: "Mon", positive: 52 },
    { day: "Tue", positive: 58 },
    { day: "Wed", positive: 61 },
    { day: "Thu", positive: 66 },
    { day: "Fri", positive: 72 },
    { day: "Sat", positive: 78 },
    { day: "Sun", positive: 82 },
  ];

  return (
    <div className="flex">

      <Sidebar />

      <main className="flex-1 min-h-screen bg-[#081120] text-white px-4 lg:px-8 py-24 lg:py-10">

        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >

            <p className="text-blue-400 mb-3 text-sm lg:text-base">
              AI Intelligence System
            </p>

            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              Reputation Analytics
            </h1>

            <p className="text-gray-400 text-base lg:text-xl leading-relaxed">
              Advanced customer sentiment & operational intelligence.
            </p>

          </motion.div>

          {/* TOP CARDS */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-10"
          >

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-br from-green-500/20 to-green-900/20 border border-green-500/20 rounded-3xl p-5 lg:p-7"
            >

              <p className="text-gray-300 mb-4 text-sm lg:text-base">
                Positive Sentiment
              </p>

              <h2 className="text-4xl lg:text-6xl font-bold mb-3">
                82%
              </h2>

              <p className="text-green-400 text-sm lg:text-base">
                +8% this week
              </p>

            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-br from-red-500/20 to-red-900/20 border border-red-500/20 rounded-3xl p-5 lg:p-7"
            >

              <p className="text-gray-300 mb-4 text-sm lg:text-base">
                Complaint Rate
              </p>

              <h2 className="text-4xl lg:text-6xl font-bold mb-3">
                18%
              </h2>

              <p className="text-red-400 text-sm lg:text-base">
                Waiting time issue
              </p>

            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-5 lg:p-7"
            >

              <p className="text-gray-300 mb-4 text-sm lg:text-base">
                Reviews Analyzed
              </p>

              <h2 className="text-4xl lg:text-6xl font-bold mb-3">
                248
              </h2>

              <p className="text-blue-400 text-sm lg:text-base">
                AI monitored
              </p>

            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-br from-yellow-500/20 to-yellow-900/20 border border-yellow-500/20 rounded-3xl p-5 lg:p-7"
            >

              <p className="text-gray-300 mb-4 text-sm lg:text-base">
                Risk Level
              </p>

              <h2 className="text-4xl lg:text-6xl font-bold mb-3">
                Medium
              </h2>

              <p className="text-yellow-400 text-sm lg:text-base">
                Weekend overload
              </p>

            </motion.div>

          </motion.div>

          {/* MAIN GRID */}
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-8">

            {/* SENTIMENT TREND */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-5 lg:p-8"
            >

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

                <h3 className="text-2xl lg:text-3xl font-bold">
                  Sentiment Trend
                </h3>

                <span className="text-gray-400 text-sm lg:text-base">
                  Last 7 days
                </span>

              </div>

              <div className="h-64 lg:h-72">

                <ResponsiveContainer width="100%" height="100%">

                  <LineChart data={sentimentData}>

                    <XAxis
                      dataKey="day"
                      stroke="#9CA3AF"
                    />

                    <Tooltip />

                    <Line
                      type="monotone"
                      dataKey="positive"
                      stroke="#22C55E"
                      strokeWidth={4}
                    />

                  </LineChart>

                </ResponsiveContainer>

              </div>

            </motion.div>

            {/* AI RECOMMENDATIONS */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-3xl p-5 lg:p-8"
            >

              <h3 className="text-2xl lg:text-3xl font-bold mb-8">
                AI Recommendations
              </h3>

              <div className="space-y-5">

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5"
                >

                  <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                    Increase staff during peak weekend hours.
                  </p>

                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5"
                >

                  <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                    Promote gluten-free menu options in marketing campaigns.
                  </p>

                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5"
                >

                  <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                    Improve table management to reduce waiting times.
                  </p>

                </motion.div>

              </div>

            </motion.div>

          </div>

        </div>

      </main>

    </div>
  );
}