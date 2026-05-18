"use client";

import { useState } from "react";
import {
  Star,
  MessageSquare,
  CheckCircle,
  Heart,
} from "lucide-react";

export default function QRFlowPage() {
  const [step, setStep] = useState(1);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleRating = (value: number) => {
    setRating(value);

    setTimeout(() => {
      setStep(2);
    }, 400);
  };

  const handleSubmit = () => {
    setStep(3);
  };

  return (
    <main className="min-h-screen bg-[#071120] flex items-center justify-center px-4 py-10 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />

      {/* MOBILE CARD */}
      <div className="relative z-10 w-full max-w-md bg-gradient-to-b from-[#111827] to-[#0f172a] border border-white/10 rounded-[34px] shadow-2xl p-6 sm:p-8">

        {/* PROGRESS */}
        <div className="mb-10">

          <div className="flex justify-between text-xs text-gray-500 mb-3">

            <span>
              Step {step} of 3
            </span>

            <span>
              ReviewBoost
            </span>

          </div>

          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">

            <div
              className={`h-full bg-blue-500 rounded-full transition-all duration-500 ${
                step === 1
                  ? "w-1/3"
                  : step === 2
                  ? "w-2/3"
                  : "w-full"
              }`}
            />

          </div>

        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="text-center">

            {/* ICON */}
            <div className="w-20 h-20 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-8">

              <Star className="text-blue-400" size={34} />

            </div>

            {/* TITLE */}
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">

              How was your
              <br />
              experience?

            </h1>

            {/* SUBTITLE */}
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10">

              Your feedback helps restaurants improve service quality and customer experience.

            </p>

            {/* STARS CONTAINER */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-5 mb-8">

              <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">

                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleRating(star)}
                    className="transition-transform duration-200 hover:scale-110"
                  >

                    <Star
                      size={42}
                      className={`${
                        rating >= star
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-500"
                      } transition`}
                    />

                  </button>
                ))}

              </div>

              <p className="text-gray-500 text-sm mt-5">
                Tap a star to rate
              </p>

            </div>

            {/* FOOTER */}
            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">

              <Heart size={15} />

              <span>
                Private & anonymous feedback
              </span>

            </div>

          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="text-center">

            {/* ICON */}
            <div className="w-20 h-20 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-8">

              <MessageSquare className="text-blue-400" size={34} />

            </div>

            {/* TITLE */}
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">

              Tell us more

            </h1>

            {/* SUBTITLE */}
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8">

              What could have been improved during your experience?

            </p>

            {/* TEXTAREA */}
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Write your feedback..."
              className="w-full h-40 bg-white/5 border border-white/10 rounded-3xl p-5 text-white placeholder:text-gray-500 outline-none resize-none mb-8 text-base"
            />

            {/* BUTTON */}
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-2xl py-4 text-lg font-semibold text-white shadow-[0_0_30px_rgba(59,130,246,0.35)]"
            >
              Submit Feedback
            </button>

          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="text-center">

            {/* ICON */}
            <div className="w-24 h-24 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-8">

              <CheckCircle className="text-green-400" size={42} />

            </div>

            {/* TITLE */}
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5">

              <span className="text-white">
                Thank you!
              </span>

              <br />

              <span className="text-blue-400">
                Feedback submitted
              </span>

            </h1>

            {/* DESCRIPTION */}
            <p className="text-gray-400 text-lg leading-relaxed mb-10">

              We received your feedback successfully.
              Your opinion helps improve the restaurant experience.

            </p>

            {/* THANK YOU CARD */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-5 flex items-start gap-4 text-left">

              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0">

                <Heart className="text-blue-400" size={22} />

              </div>

              <div>

                <p className="text-white text-base font-medium mb-1">
                  Your feedback matters
                </p>

                <p className="text-gray-400 text-sm leading-relaxed">
                  Restaurants use private feedback to improve service quality and customer satisfaction.
                </p>

              </div>

            </div>

          </div>
        )}

      </div>

    </main>
  );
}