"use client";

import { useState } from "react";

import Sidebar from "@/components/Sidebar";

import { reviews } from "@/data/reviews";
import { analytics } from "@/data/analytics";
import { aiReplies } from "@/data/replies";
import { priorityData } from "@/data/priority";
import { weeklyReport } from "@/data/weeklyReport";
import { chartData } from "@/data/chartData";
import { alerts } from "@/data/alerts";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function DashboardPage() {

  const [generatedReplies, setGeneratedReplies] = useState<
    Record<number, string>
  >({});

  return (
    <main className="min-h-screen bg-[#081120] text-white flex">

      <Sidebar />

      {/* Main Content */}
      <section className="flex-1 p-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-4xl font-bold mb-2">
              Mazzini Ristorante-Pizzeria 
            </h1>

            <p className="text-gray-400">
              Jesolo Lido • AI reputation management
            </p>

          </div>

          <button className="bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded-xl">
            Export Report
          </button>

        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

          <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">

            <p className="text-gray-400 mb-2">
              Reputation Score
            </p>

            <h2 className="text-5xl font-bold">
              {analytics.reputationScore}⭐
            </h2>

          </div>

          <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">

            <p className="text-gray-400 mb-2">
              Reviews Analyzed
            </p>

            <h2 className="text-5xl font-bold">
              {analytics.totalReviews}
            </h2>

          </div>

          <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">

            <p className="text-gray-400 mb-2">
              Positive Sentiment
            </p>

            <h2 className="text-5xl font-bold text-green-400">
              {analytics.positivePercentage}%
            </h2>

          </div>

          <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">

            <p className="text-gray-400 mb-2">
              Main Issue
            </p>

            <h2 className="text-3xl font-bold text-red-400">
              {analytics.mainIssue}
            </h2>

          </div>

        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* AI Insights */}
          <div className="lg:col-span-2 bg-[#111827] border border-white/10 rounded-2xl p-6">

            <h3 className="text-2xl font-semibold mb-8">
              AI Insights
            </h3>

            <div className="space-y-5">

              {/* Priority Detection */}
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-5">

                <p className="text-blue-300 font-medium mb-2">
                  Priority Detection
                </p>

                <p>
                  Main operational issue detected:
                  <span className="font-semibold">
                    {" "}{priorityData.issue}
                  </span>
                </p>

                <p className="mt-2 text-sm text-gray-400">
                  Severity level:
                  {" "}
                  <span className="text-white">
                    {priorityData.severity}
                  </span>
                </p>

              </div>

              {/* Dynamic Alerts */}
              {alerts.map((alert) => (

                <div
                  key={alert.title}
                  className={`rounded-xl p-5 border ${
                    alert.type === "critical"
                      ? "bg-red-500/10 border-red-500/20"
                      : alert.type === "warning"
                      ? "bg-yellow-500/10 border-yellow-500/20"
                      : "bg-blue-500/10 border-blue-500/20"
                  }`}
                >

                  <p
                    className={`font-medium mb-2 ${
                      alert.type === "critical"
                        ? "text-red-300"
                        : alert.type === "warning"
                        ? "text-yellow-300"
                        : "text-blue-300"
                    }`}
                  >
                    {alert.title}
                  </p>

                  <p>
                    {alert.message}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* Recommended Actions */}
          <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">

            <h3 className="text-2xl font-semibold mb-8">
              Recommended Actions
            </h3>

            <div className="space-y-4">

              <div className="border border-white/10 rounded-xl p-4">
                Increase staff during peak evening hours.
              </div>

              <div className="border border-white/10 rounded-xl p-4">
                Respond to recent negative reviews.
              </div>

              <div className="border border-white/10 rounded-xl p-4">
                Improve kitchen speed consistency.
              </div>

            </div>

          </div>

        </div>

        {/* Recent Reviews */}
        <div className="mt-10 bg-[#111827] border border-white/10 rounded-2xl p-6">

          <h3 className="text-2xl font-semibold mb-6">
            Recent Reviews
          </h3>

          <div className="space-y-4">

            {reviews.map((review) => (

              <div
                key={review.id}
                className="border border-white/10 rounded-xl p-4"
              >

                <div className="flex items-center justify-between mb-2">

                  <span className="font-medium">
                    {review.name}
                  </span>

                  <span className="text-yellow-400">
                    {"★".repeat(review.rating)}
                  </span>

                </div>

                <p className="text-gray-400 mb-4">
                  {review.review}
                </p>

                <div className="flex items-center justify-between">

                  <span
                    className={`text-sm px-3 py-1 rounded-full ${
                      review.sentiment === "positive"
                        ? "bg-green-500/10 text-green-400"
                        : "bg-red-500/10 text-red-400"
                    }`}
                  >
                    {review.issue}
                  </span>

                  <button
                    onClick={() =>
                      setGeneratedReplies({
                        ...generatedReplies,
                        [review.id]:
                          aiReplies[review.issue] ||
                          "Thank you for your feedback.",
                      })
                    }
                    className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg text-sm"
                  >
                    Generate AI Reply
                  </button>

                </div>

                {generatedReplies[review.id] && (

                  <div className="mt-4 bg-white/5 border border-white/10 rounded-xl p-4">

                    <p className="text-sm text-gray-300 mb-2">
                      AI Reply
                    </p>

                    <p className="text-white">
                      {generatedReplies[review.id]}
                    </p>

                  </div>

                )}

              </div>

            ))}

          </div>

        </div>

        {/* Weekly Report */}
        <div className="mt-10 bg-[#111827] border border-white/10 rounded-2xl p-6">

          <div className="flex items-center justify-between mb-8">

            <div>

              <h3 className="text-2xl font-semibold">
                {weeklyReport.title}
              </h3>

              <p className="text-gray-400 mt-2">
                AI-generated weekly reputation analysis
              </p>

            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-xl">
              Updated today
            </div>

          </div>

          {/* Summary */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-8">

            <p className="text-lg leading-relaxed">
              {weeklyReport.summary}
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Problems */}
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-5">

              <h4 className="text-red-300 font-semibold mb-4">
                Top Problems
              </h4>

              <div className="space-y-3">

                {weeklyReport.topProblems.map((problem) => (

                  <div
                    key={problem}
                    className="bg-black/20 rounded-lg px-3 py-2"
                  >
                    {problem}
                  </div>

                ))}

              </div>

            </div>

            {/* Positive */}
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-5">

              <h4 className="text-green-300 font-semibold mb-4">
                Positive Highlights
              </h4>

              <div className="space-y-3">

                {weeklyReport.positiveHighlights.map((highlight) => (

                  <div
                    key={highlight}
                    className="bg-black/20 rounded-lg px-3 py-2"
                  >
                    {highlight}
                  </div>

                ))}

              </div>

            </div>

            {/* Recommendations */}
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-5">

              <h4 className="text-blue-300 font-semibold mb-4">
                Recommended Actions
              </h4>

              <div className="space-y-3">

                {weeklyReport.recommendations.map((recommendation) => (

                  <div
                    key={recommendation}
                    className="bg-black/20 rounded-lg px-3 py-2"
                  >
                    {recommendation}
                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

        {/* Analytics Chart */}
        <div className="mt-10 bg-[#111827] border border-white/10 rounded-2xl p-6">

          <div className="mb-8">

            <h3 className="text-2xl font-semibold mb-2">
              Review Activity
            </h3>

            <p className="text-gray-400">
              Customer review volume during the week
            </p>

          </div>

          <div className="h-[350px]">

            <ResponsiveContainer width="100%" height="100%">

              <LineChart data={chartData}>

                <XAxis
                  dataKey="name"
                  stroke="#9CA3AF"
                />

                <YAxis
                  stroke="#9CA3AF"
                />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="reviews"
                  stroke="#3B82F6"
                  strokeWidth={4}
                  dot={{ r: 5 }}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

        </div>

      </section>

    </main>
  );
}