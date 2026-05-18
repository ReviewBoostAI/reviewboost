"use client";

import Sidebar from "@/components/Sidebar";
import { motion } from "framer-motion";

export default function FeedbackIntelligencePage() {

  const feedbacks = [
    {
      sentiment: "Neutral",
      issue: "Waiting Time",
      urgency: "Medium",
      feedback:
        "The food was good but we waited too long before getting our table.",
    },
    {
      sentiment: "Negative",
      issue: "Service Quality",
      urgency: "High",
      feedback:
        "Staff seemed overwhelmed and service was very slow during dinner.",
    },
    {
      sentiment: "Positive",
      issue: "Food Quality",
      urgency: "Low",
      feedback:
        "Amazing gluten-free pizza and very friendly staff.",
    },
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
              Feedback Intelligence
            </h1>

            <p className="text-gray-400 text-base lg:text-xl">
              Real-time private customer feedback analysis.
            </p>

          </motion.div>

          {/* TOP METRICS */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-10"
          >

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-br from-blue-500/20 to-blue-900/20 border border-blue-500/20 rounded-3xl p-5 lg:p-7"
            >

              <p className="text-gray-300 mb-4 text-sm lg:text-base">
                Feedback Collected
              </p>

              <h2 className="text-4xl lg:text-6xl font-bold mb-3">
                148
              </h2>

              <p className="text-blue-400 text-sm lg:text-base">
                Real-time QR submissions
              </p>

            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-br from-red-500/20 to-red-900/20 border border-red-500/20 rounded-3xl p-5 lg:p-7"
            >

              <p className="text-gray-300 mb-4 text-sm lg:text-base">
                High Risk Feedback
              </p>

              <h2 className="text-4xl lg:text-6xl font-bold mb-3">
                12
              </h2>

              <p className="text-red-400 text-sm lg:text-base">
                Requires immediate attention
              </p>

            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-5 lg:p-7"
            >

              <p className="text-gray-300 mb-4 text-sm lg:text-base">
                Neutral Feedback
              </p>

              <h2 className="text-4xl lg:text-6xl font-bold mb-3">
                27%
              </h2>

              <p className="text-yellow-400 text-sm lg:text-base">
                Improvement opportunities
              </p>

            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-br from-green-500/20 to-green-900/20 border border-green-500/20 rounded-3xl p-5 lg:p-7"
            >

              <p className="text-gray-300 mb-4 text-sm lg:text-base">
                Positive Feedback
              </p>

              <h2 className="text-4xl lg:text-6xl font-bold mb-3">
                55%
              </h2>

              <p className="text-green-400 text-sm lg:text-base">
                Strong customer satisfaction
              </p>

            </motion.div>

          </motion.div>

          {/* MAIN GRID */}
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">

            {/* LIVE FEEDBACK */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-5 lg:p-8"
            >

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

                <h3 className="text-2xl lg:text-3xl font-bold">
                  Live Customer Feedback
                </h3>

                <span className="text-green-400 text-sm lg:text-base">
                  Live AI monitoring
                </span>

              </div>

              <div className="space-y-6">

                {feedbacks.map((feedback, index) => (

                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                    }}
                    whileHover={{ scale: 1.01 }}
                    className="bg-[#111827] border border-white/10 rounded-2xl p-5 lg:p-6"
                  >

                    <div className="flex flex-wrap gap-3 mb-5">

                      <div className="bg-white/10 px-4 py-2 rounded-xl text-sm">
                        {feedback.sentiment}
                      </div>

                      <div className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-xl text-sm">
                        {feedback.issue}
                      </div>

                      <div
                        className={`px-4 py-2 rounded-xl text-sm ${
                          feedback.urgency === "High"
                            ? "bg-red-500/20 text-red-400"
                            : feedback.urgency === "Medium"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-green-500/20 text-green-400"
                        }`}
                      >
                        Urgency: {feedback.urgency}
                      </div>

                    </div>

                    <p className="text-gray-300 text-base lg:text-xl leading-relaxed">

                      "{feedback.feedback}"

                    </p>

                  </motion.div>

                ))}

              </div>

            </motion.div>

            {/* AI RISK ANALYSIS */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-blue-500/20 rounded-3xl p-5 lg:p-8"
            >

              <h3 className="text-2xl lg:text-3xl font-bold mb-8">
                AI Risk Analysis
              </h3>

              <div className="space-y-5">

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5"
                >

                  <h4 className="text-lg lg:text-xl font-semibold mb-2 text-red-400">
                    Waiting Time Risk
                  </h4>

                  <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                    Negative feedback related to waiting time increased this week.
                  </p>

                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5"
                >

                  <h4 className="text-lg lg:text-xl font-semibold mb-2 text-yellow-400">
                    Service Stress Detection
                  </h4>

                  <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                    AI detected recurring complaints during busy service periods.
                  </p>

                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5"
                >

                  <h4 className="text-lg lg:text-xl font-semibold mb-2 text-green-400">
                    Customer Satisfaction
                  </h4>

                  <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                    Positive feedback remains stable for food quality.
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