"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {

  return (
    <main className="min-h-screen bg-[#081120] text-white overflow-hidden">

      {/* HERO PREMIUM */}
      <section className="relative px-6 lg:px-10 pt-32 lg:pt-40 pb-24 overflow-hidden">

        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-500/20 blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl"
          >

            {/* TOP BADGE */}
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full px-5 py-3 mb-10">

              <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />

              <p className="text-sm lg:text-base text-gray-300">
                Reputation management for modern restaurants
              </p>

            </div>

            {/* TITLE */}
            <h1 className="text-6xl lg:text-[110px] font-bold leading-[0.95] tracking-[-4px] mb-10">

              Protect your
              <br />

              <span className="bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                restaurant reputation
              </span>

            </h1>

            {/* SUBTITLE */}
            <p className="text-gray-400 text-xl lg:text-3xl leading-relaxed max-w-3xl mb-14">

              Collect private customer feedback,
              detect operational issues early
              and prevent negative public reviews.

            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-5 mb-20">

              <Link
                href="/dashboard"
                className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-[1.02] px-9 py-5 rounded-2xl text-lg font-semibold text-center shadow-[0_0_40px_rgba(59,130,246,0.35)]"
              >
                Start Free Trial
              </Link>

              <Link
                href="/qr-flow"
                className="bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] px-9 py-5 rounded-2xl text-lg font-semibold text-center"
              >
                Live Demo
              </Link>

            </div>

            {/* MINI PREVIEW */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ scale: 1.01 }}
              className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[36px] p-8 lg:p-10 max-w-5xl shadow-2xl"
            >

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-10">

                <div>

                  <p className="text-gray-400 mb-3">
                    Reputation Score
                  </p>

                  <h2 className="text-6xl lg:text-8xl font-bold">
                    4.6
                  </h2>

                </div>

                <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-6 py-4 rounded-2xl w-fit">

                  +12% this month

                </div>

              </div>

              {/* GRAPH */}
              <div className="flex items-end gap-3 h-48 mb-10">

                <div className="bg-blue-500/60 rounded-t-3xl w-full h-[38%]" />
                <div className="bg-blue-500/60 rounded-t-3xl w-full h-[50%]" />
                <div className="bg-blue-500/60 rounded-t-3xl w-full h-[58%]" />
                <div className="bg-blue-500/60 rounded-t-3xl w-full h-[74%]" />
                <div className="bg-green-400 rounded-t-3xl w-full h-[88%]" />

              </div>

              {/* METRICS */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

                <div className="bg-[#111827] rounded-2xl p-5">

                  <p className="text-gray-400 mb-2 text-sm">
                    Positive Reviews
                  </p>

                  <h3 className="text-3xl font-bold">
                    82%
                  </h3>

                </div>

                <div className="bg-[#111827] rounded-2xl p-5">

                  <p className="text-gray-400 mb-2 text-sm">
                    Private Feedback
                  </p>

                  <h3 className="text-3xl font-bold">
                    148
                  </h3>

                </div>

                <div className="bg-[#111827] rounded-2xl p-5">

                  <p className="text-gray-400 mb-2 text-sm">
                    Reviews Prevented
                  </p>

                  <h3 className="text-3xl font-bold">
                    40%
                  </h3>

                </div>

                <div className="bg-[#111827] rounded-2xl p-5">

                  <p className="text-gray-400 mb-2 text-sm">
                    Active Monitoring
                  </p>

                  <h3 className="text-3xl font-bold">
                    24/7
                  </h3>

                </div>

              </div>

            </motion.div>

          </motion.div>

        </div>

      </section>

      {/* STATS */}
      <section className="px-6 lg:px-10 pb-20">

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 lg:p-8"
            >

              <h2 className="text-5xl lg:text-6xl font-bold mb-3">
                82%
              </h2>

              <p className="text-gray-400 text-sm lg:text-lg">
                Positive customer sentiment
              </p>

            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 lg:p-8"
            >

              <h2 className="text-5xl lg:text-6xl font-bold mb-3">
                248
              </h2>

              <p className="text-gray-400 text-sm lg:text-lg">
                Reviews analyzed
              </p>

            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 lg:p-8"
            >

              <h2 className="text-5xl lg:text-6xl font-bold mb-3">
                40%
              </h2>

              <p className="text-gray-400 text-sm lg:text-lg">
                Reduction in negative reviews
              </p>

            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 lg:p-8"
            >

              <h2 className="text-5xl lg:text-6xl font-bold mb-3">
                24/7
              </h2>

              <p className="text-gray-400 text-sm lg:text-lg">
                Reputation monitoring
              </p>

            </motion.div>

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 lg:px-10 py-24">

        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >

            <p className="text-blue-400 mb-4">
              How it works
            </p>

            <h2 className="text-4xl lg:text-7xl font-bold mb-6">
              Customer recovery system
            </h2>

            <p className="text-gray-400 text-xl max-w-3xl">
              ReviewBoost helps restaurants detect unhappy customers
              before they leave public reviews.
            </p>

          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >

              <div className="text-blue-500 text-6xl font-bold mb-8">
                01
              </div>

              <h3 className="text-3xl font-bold mb-5">
                QR Feedback
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed">
                Customers scan a QR code and leave private feedback directly from their phone.
              </p>

            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >

              <div className="text-blue-500 text-6xl font-bold mb-8">
                02
              </div>

              <h3 className="text-3xl font-bold mb-5">
                Sentiment Detection
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed">
                Operational issues and customer frustration are automatically detected.
              </p>

            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >

              <div className="text-blue-500 text-6xl font-bold mb-8">
                03
              </div>

              <h3 className="text-3xl font-bold mb-5">
                Reputation Protection
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed">
                Restaurants solve customer issues before negative reviews reach Google.
              </p>

            </motion.div>

          </div>

        </div>

      </section>

      {/* DASHBOARD PREVIEW */}
      <section className="px-6 lg:px-10 py-24">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >

              <p className="text-blue-400 mb-4">
                Dashboard
              </p>

              <h2 className="text-4xl lg:text-7xl font-bold mb-8">
                Real-time restaurant intelligence
              </h2>

              <p className="text-gray-400 text-xl leading-relaxed mb-10">

                Monitor reputation trends, customer sentiment,
                operational issues and service quality in real time.

              </p>

              <Link
                href="/dashboard"
                className="inline-block bg-blue-600 hover:bg-blue-700 transition px-8 py-5 rounded-2xl text-lg font-semibold"
              >
                Open Dashboard
              </Link>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 rounded-[40px] p-8"
            >

              <div className="bg-[#111827] rounded-3xl p-6 mb-6">

                <div className="flex justify-between mb-6">

                  <div>

                    <p className="text-gray-400 mb-2">
                      Reputation Score
                    </p>

                    <h3 className="text-6xl font-bold">
                      4.6
                    </h3>

                  </div>

                  <div className="text-green-400">
                    +12%
                  </div>

                </div>

                <div className="flex items-end gap-3 h-44">

                  <div className="bg-blue-500 rounded-t-2xl w-full h-[35%]" />
                  <div className="bg-blue-500 rounded-t-2xl w-full h-[48%]" />
                  <div className="bg-blue-500 rounded-t-2xl w-full h-[58%]" />
                  <div className="bg-blue-500 rounded-t-2xl w-full h-[72%]" />
                  <div className="bg-green-400 rounded-t-2xl w-full h-[86%]" />

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* PRICING */}
      <section className="px-6 lg:px-10 py-24">

        <div className="max-w-5xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <p className="text-blue-400 mb-4">
              Pricing
            </p>

            <h2 className="text-4xl lg:text-7xl font-bold mb-8">
              Simple pricing
            </h2>

            <p className="text-gray-400 text-xl mb-16">
              Start free and protect your online reputation.
            </p>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-[40px] p-10 lg:p-14"
          >

            <div className="inline-flex bg-blue-500/20 text-blue-400 px-5 py-2 rounded-full mb-8">
              Most Popular
            </div>

            <h3 className="text-5xl lg:text-7xl font-bold mb-5">
              €49
            </h3>

            <p className="text-gray-400 text-xl mb-12">
              per month
            </p>

            <div className="space-y-5 text-lg lg:text-xl mb-14">

              <p>✓ Feedback monitoring</p>
              <p>✓ Review management</p>
              <p>✓ Personalized replies</p>
              <p>✓ Reputation analytics</p>
              <p>✓ Unlimited QR scans</p>

            </div>

            <Link
              href="/dashboard"
              className="inline-block bg-blue-600 hover:bg-blue-700 transition px-10 py-5 rounded-2xl text-xl font-semibold"
            >
              Start Free Trial
            </Link>

          </motion.div>

        </div>

      </section>

      {/* FAQ */}
      <section className="px-6 lg:px-10 py-24">

        <div className="max-w-5xl mx-auto">

          <div className="mb-16">

            <p className="text-blue-400 mb-4">
              FAQ
            </p>

            <h2 className="text-4xl lg:text-7xl font-bold">
              Frequently asked questions
            </h2>

          </div>

          <div className="space-y-6">

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >

              <h3 className="text-2xl font-bold mb-4">
                How does ReviewBoost work?
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed">
                Customers scan a QR code and leave private feedback before posting public reviews.
              </p>

            </motion.div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >

              <h3 className="text-2xl font-bold mb-4">
                Can restaurants reply to reviews?
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed">
                Yes. ReviewBoost helps restaurants manage and respond to customer reviews.
              </p>

            </motion.div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >

              <h3 className="text-2xl font-bold mb-4">
                Is the platform mobile friendly?
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed">
                Absolutely. ReviewBoost is optimized for mobile, tablet and desktop devices.
              </p>

            </motion.div>

          </div>

        </div>

      </section>

    </main>
  );
}