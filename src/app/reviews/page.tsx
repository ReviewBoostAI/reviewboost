"use client";

import Sidebar from "@/components/Sidebar";
import { useState } from "react";

import { reviews } from "@/data/reviews";

export default function ReviewsPage() {

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const [generatedReplies, setGeneratedReplies] = useState<
    Record<number, string>
  >({});

  const [loadingId, setLoadingId] = useState<number | null>(null);

  async function generateAIReply(
    reviewId: number,
    reviewText: string
  ) {

    setLoadingId(reviewId);

    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    );

    let reply = "";

    if (
      reviewText.toLowerCase().includes("terrible") ||
      reviewText.toLowerCase().includes("bad") ||
      reviewText.toLowerCase().includes("disappointing") ||
      reviewText.toLowerCase().includes("awful")
    ) {

      reply =
        "We are truly sorry for your experience. Your feedback helps us improve and we hope to serve you better in the future.";

    } else {

      reply =
        "Thank you so much for your kind review. We are happy you enjoyed your experience and hope to see you again soon!";
    }

    setGeneratedReplies((prev) => ({
      ...prev,
      [reviewId]: reply,
    }));

    setLoadingId(null);
  }

  const filteredReviews = reviews.filter((review) => {

    const matchesSearch =
      review.review.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "all"
        ? true
        : review.sentiment === filter;

    return matchesSearch && matchesFilter;

  });

  return (
    <main className="min-h-screen bg-[#081120] text-white flex">

      <Sidebar />

      <section className="flex-1 p-8">

        {/* Header */}
        <div className="mb-10">

          <h1 className="text-5xl font-bold mb-3">
            Reviews
          </h1>

          <p className="text-gray-400 text-lg">
            Analyze customer feedback and sentiment
          </p>

        </div>

        {/* Search */}
        <div className="mb-6">

          <input
            type="text"
            placeholder="Search reviews..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#111827] border border-white/10 rounded-2xl px-5 py-4 outline-none"
          />

        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-8">

          <button
            onClick={() => setFilter("all")}
            className={`px-5 py-2 rounded-xl transition ${
              filter === "all"
                ? "bg-blue-600"
                : "bg-[#111827] border border-white/10"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setFilter("positive")}
            className={`px-5 py-2 rounded-xl transition ${
              filter === "positive"
                ? "bg-green-600"
                : "bg-[#111827] border border-white/10"
            }`}
          >
            Positive
          </button>

          <button
            onClick={() => setFilter("negative")}
            className={`px-5 py-2 rounded-xl transition ${
              filter === "negative"
                ? "bg-red-600"
                : "bg-[#111827] border border-white/10"
            }`}
          >
            Negative
          </button>

        </div>

        {/* Reviews */}
        <div className="space-y-5">

          {filteredReviews.map((review) => (

            <div
              key={review.id}
              className="bg-[#111827] border border-white/10 rounded-2xl p-6"
            >

              <div className="flex items-center justify-between mb-4">

                <div>

                  <h3 className="text-xl font-semibold">
                    {review.name}
                  </h3>

                  <div className="flex items-center gap-3 mt-1">

                    <p className="text-gray-400 text-sm">
                      {review.issue}
                    </p>

                    <span className="text-xs bg-blue-500/10 text-blue-300 px-2 py-1 rounded-lg">
                      {review.platform}
                    </span>

                  </div>

                </div>

                <div className="text-yellow-400 text-lg">
                  {"★".repeat(review.rating)}
                </div>

              </div>

              <p className="text-gray-300 leading-relaxed mb-5">
                {review.review}
              </p>

              <div className="flex items-center justify-between">

                <span
                  className={`px-4 py-2 rounded-full text-sm ${
                    review.sentiment === "positive"
                      ? "bg-green-500/10 text-green-400"
                      : review.sentiment === "negative"
                      ? "bg-red-500/10 text-red-400"
                      : "bg-yellow-500/10 text-yellow-400"
                  }`}
                >
                  {review.sentiment}
                </span>

                <div className="flex gap-3">

                  <button
                    onClick={() =>
                      generateAIReply(
                        review.id,
                        review.review
                      )
                    }
                    className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-xl"
                  >

                    {loadingId === review.id
                      ? "Generating..."
                      : "AI Reply"}

                  </button>

                  <a
                    href={review.link}
                    target="_blank"
                    className="bg-white/10 hover:bg-white/20 transition px-5 py-2 rounded-xl"
                  >
                    Open Review
                  </a>

                </div>

              </div>

              {/* AI Reply Box */}
              <div className="mt-5 bg-white/5 border border-white/10 rounded-xl p-4">

                <p className="text-sm text-gray-400 mb-2">
                  AI Reply
                </p>

                <p className="text-gray-200 whitespace-pre-wrap">

                  {generatedReplies[review.id]
                    ? generatedReplies[review.id]
                    : "No reply generated yet."}

                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}