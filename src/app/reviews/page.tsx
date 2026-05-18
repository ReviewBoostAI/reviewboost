"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { motion } from "framer-motion";

type Review = {
  id: number;
  customer: string;
  platform: string;
  category: string;
  review: string;
  rating: number;
  sentiment: "positive" | "negative";
  aiReply?: string;
};

export default function ReviewsPage() {

  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      customer: "Margherita T.",
      platform: "Google",
      category: "Service",
      review:
        "Excellent vegan pizza and extremely kind staff. Quiet atmosphere and fast service.",
      rating: 5,
      sentiment: "positive",
    },
    {
      id: 2,
      customer: "Jessica",
      platform: "Google",
      category: "Food Quality",
      review:
        "Very disappointing experience. Food quality was terrible and the atmosphere was chaotic.",
      rating: 1,
      sentiment: "negative",
    },
    {
      id: 3,
      customer: "Michael",
      platform: "Tripadvisor",
      category: "Waiting Time",
      review:
        "The food was great but we waited almost 40 minutes before getting a table.",
      rating: 2,
      sentiment: "negative",
    },
  ]);

  const [loadingId, setLoadingId] = useState<number | null>(null);

  const generateReply = (
    review: string,
    sentiment: string
  ) => {

    const lowerReview = review.toLowerCase();

    if (sentiment === "positive") {

      let response =
        "Thank you so much for your kind review. ";

      if (
        lowerReview.includes("pizza") ||
        lowerReview.includes("food")
      ) {
        response +=
          "We’re delighted you enjoyed the food. ";
      }

      if (
        lowerReview.includes("staff") ||
        lowerReview.includes("service")
      ) {
        response +=
          "Our team truly appreciates your compliments about the service. ";
      }

      response +=
        "We hope to welcome you again very soon!";

      return response;
    }

    let response =
      "We are truly sorry for your experience. ";

    if (
      lowerReview.includes("slow") ||
      lowerReview.includes("wait")
    ) {
      response +=
        "We are actively working to improve waiting times. ";
    }

    if (
      lowerReview.includes("food") ||
      lowerReview.includes("pizza")
    ) {
      response +=
        "We will carefully review the food quality issues you mentioned. ";
    }

    response +=
      "Thank you for helping us improve.";

    return response;
  };

  const handleAIReply = async (id: number) => {

    setLoadingId(id);

    setTimeout(() => {

      setReviews((prev) =>
        prev.map((review) => {

          if (review.id === id) {

            return {
              ...review,
              aiReply: generateReply(
                review.review,
                review.sentiment
              ),
            };
          }

          return review;
        })
      );

      setLoadingId(null);

    }, 1200);
  };

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
              AI Review Management
            </p>

            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              Public Reviews
            </h1>

            <p className="text-gray-400 text-base lg:text-xl">
              Monitor public customer reviews and generate AI-powered replies.
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
                Reviews Monitored
              </p>

              <h2 className="text-4xl lg:text-6xl font-bold mb-3">
                248
              </h2>

              <p className="text-blue-400 text-sm lg:text-base">
                Google & Tripadvisor
              </p>

            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-br from-green-500/20 to-green-900/20 border border-green-500/20 rounded-3xl p-5 lg:p-7"
            >

              <p className="text-gray-300 mb-4 text-sm lg:text-base">
                Positive Reviews
              </p>

              <h2 className="text-4xl lg:text-6xl font-bold mb-3">
                82%
              </h2>

              <p className="text-green-400 text-sm lg:text-base">
                Strong customer sentiment
              </p>

            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-br from-red-500/20 to-red-900/20 border border-red-500/20 rounded-3xl p-5 lg:p-7"
            >

              <p className="text-gray-300 mb-4 text-sm lg:text-base">
                Negative Reviews
              </p>

              <h2 className="text-4xl lg:text-6xl font-bold mb-3">
                18%
              </h2>

              <p className="text-red-400 text-sm lg:text-base">
                Requires management attention
              </p>

            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-5 lg:p-7"
            >

              <p className="text-gray-300 mb-4 text-sm lg:text-base">
                Pending AI Replies
              </p>

              <h2 className="text-4xl lg:text-6xl font-bold mb-3">
                12
              </h2>

              <p className="text-yellow-400 text-sm lg:text-base">
                Awaiting response
              </p>

            </motion.div>

          </motion.div>

          {/* REVIEWS */}
          <div className="space-y-8">

            {reviews.map((review, index) => (

              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                whileHover={{ scale: 1.01 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 lg:p-8"
              >

                {/* TOP */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 mb-6">

                  <div>

                    <div className="flex flex-wrap items-center gap-3 mb-4">

                      <h2 className="text-2xl lg:text-3xl font-bold">
                        {review.customer}
                      </h2>

                      <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-xl text-sm">
                        {review.platform}
                      </span>

                      <span className="bg-white/10 px-3 py-1 rounded-xl text-sm">
                        {review.category}
                      </span>

                    </div>

                    <p className="text-gray-300 text-base lg:text-xl leading-relaxed max-w-4xl">
                      {review.review}
                    </p>

                  </div>

                  <div className="text-yellow-400 text-2xl lg:text-3xl">
                    {"★".repeat(review.rating)}
                  </div>

                </div>

                {/* PRIORITY */}
                <div className="mb-6">

                  <span
                    className={`px-4 py-2 rounded-xl text-sm ${
                      review.sentiment === "negative"
                        ? "bg-red-500/20 text-red-400"
                        : "bg-green-500/20 text-green-400"
                    }`}
                  >
                    {review.sentiment === "negative"
                      ? "High Priority"
                      : "Positive Review"}
                  </span>

                </div>

                {/* BUTTON */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() =>
                    handleAIReply(review.id)
                  }
                  className="bg-blue-600 hover:bg-blue-700 transition px-6 py-4 rounded-2xl text-base lg:text-lg font-semibold mb-6"
                >

                  {loadingId === review.id
                    ? "Generating AI Reply..."
                    : "Generate AI Reply"}

                </motion.button>

                {/* AI REPLY */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#111827] border border-white/10 rounded-2xl p-5 lg:p-6"
                >

                  <div className="flex items-center justify-between mb-4">

                    <h3 className="text-xl lg:text-2xl font-bold">
                      AI Suggested Reply
                    </h3>

                    <span className="text-blue-400 text-sm">
                      AI generated
                    </span>

                  </div>

                  <p className="text-gray-300 text-sm lg:text-lg leading-relaxed">

                    {review.aiReply ||
                      "No AI reply generated yet."}

                  </p>

                </motion.div>

              </motion.div>

            ))}

          </div>

        </div>

      </main>

    </div>
  );
}