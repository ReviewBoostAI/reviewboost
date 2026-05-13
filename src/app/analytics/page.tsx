"use client";

import Sidebar from "@/components/Sidebar";

import { calculateAnalytics } from "@/lib/analytics";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";

export default function AnalyticsPage() {

  const stats = calculateAnalytics();

  const sentimentData = [
    {
      name: "Positive",
      value: stats.positivePercentage,
    },
    {
      name: "Negative",
      value: stats.negativePercentage,
    },
  ];

  const issueData = [
    { issue: "Waiting Time", value: 12 },
    { issue: "Service", value: 8 },
    { issue: "Cleanliness", value: 3 },
    { issue: "Food Quality", value: 5 },
  ];

  const COLORS = ["#22c55e", "#ef4444"];

  return (
    <main className="min-h-screen bg-[#081120] text-white flex">

      <Sidebar />

      <section className="flex-1 p-8">

        {/* Header */}
        <div className="mb-10">

          <h1 className="text-5xl font-bold mb-3">
            Analytics
          </h1>

          <p className="text-gray-400 text-lg">
            AI-powered reputation intelligence
          </p>

        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

          <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">

            <p className="text-gray-400 mb-2">
              Reputation Score
            </p>

            <h2 className="text-5xl font-bold">
              {stats.averageRating}⭐
            </h2>

          </div>

          <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">

            <p className="text-gray-400 mb-2">
              Positive Reviews
            </p>

            <h2 className="text-5xl font-bold text-green-400">
              {stats.positivePercentage}%
            </h2>

          </div>

          <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">

            <p className="text-gray-400 mb-2">
              Negative Reviews
            </p>

            <h2 className="text-5xl font-bold text-red-400">
              {stats.negativePercentage}%
            </h2>

          </div>

          <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">

            <p className="text-gray-400 mb-2">
              AI Prediction
            </p>

            <h2 className="text-2xl font-bold text-yellow-400">
              Stable Growth
            </h2>

          </div>

        </div>

        {/* AI Insights */}
        <div className="bg-[#111827] border border-white/10 rounded-2xl p-6 mb-10">

          <h3 className="text-2xl font-semibold mb-6">
            AI Insights
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-5">

              <p className="text-red-300 font-medium mb-2">
                Most Common Issue
              </p>

              <p className="text-xl">
                {stats.topIssue}
              </p>

            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-5">

              <p className="text-blue-300 font-medium mb-2">
                Total Reviews Analyzed
              </p>

              <p className="text-xl">
                {stats.totalReviews}
              </p>

            </div>

          </div>

        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Sentiment Pie */}
          <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">

            <h3 className="text-2xl font-semibold mb-8">
              Sentiment Distribution
            </h3>

            <div className="h-[350px]">

              <ResponsiveContainer width="100%" height="100%">

                <PieChart>

                  <Pie
                    data={sentimentData}
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    dataKey="value"
                  >

                    {sentimentData.map((entry, index) => (

                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />

                    ))}

                  </Pie>

                  <Tooltip />

                </PieChart>

              </ResponsiveContainer>

            </div>

          </div>

          {/* Issues Chart */}
          <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">

            <h3 className="text-2xl font-semibold mb-8">
              Issue Analysis
            </h3>

            <div className="h-[350px]">

              <ResponsiveContainer width="100%" height="100%">

                <BarChart data={issueData}>

                  <XAxis
                    dataKey="issue"
                    stroke="#9CA3AF"
                  />

                  <YAxis
                    stroke="#9CA3AF"
                  />

                  <Tooltip />

                  <Bar
                    dataKey="value"
                    fill="#3B82F6"
                    radius={[10, 10, 0, 0]}
                  />

                </BarChart>

              </ResponsiveContainer>

            </div>

          </div>

        </div>

        {/* AI Summary */}
        <div className="mt-10 bg-[#111827] border border-white/10 rounded-2xl p-6">

          <h3 className="text-2xl font-semibold mb-6">
            AI Strategic Summary
          </h3>

          <div className="space-y-5">

            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-5">

              <p className="text-red-300 font-medium mb-2">
                Operational Risk
              </p>

              <p>
                Waiting time complaints are increasing during weekends.
              </p>

            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-5">

              <p className="text-green-300 font-medium mb-2">
                Competitive Advantage
              </p>

              <p>
                Gluten-free menu receives exceptional customer feedback.
              </p>

            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-5">

              <p className="text-blue-300 font-medium mb-2">
                AI Recommendation
              </p>

              <p>
                Focus marketing campaigns on family-friendly dining experience.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}