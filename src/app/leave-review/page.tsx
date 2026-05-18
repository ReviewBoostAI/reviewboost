"use client";

import { useState } from "react";

export default function LeaveReviewPage() {

  const [step, setStep] = useState(1);

  const [rating, setRating] = useState<number | null>(null);

  const [feedback, setFeedback] = useState("");

  const [loading, setLoading] = useState(false);

  const handleRating = (value: number) => {

    setRating(value);

    setStep(2);

  };

  const handleSubmit = async () => {

    if (!rating) return;

    // ANTI SPAM
    const alreadySubmitted =
      localStorage.getItem("review_submitted");

    if (alreadySubmitted) {

      setStep(5);

      return;
    }

    setLoading(true);

    setTimeout(() => {

      localStorage.setItem(
        "review_submitted",
        "true"
      );

      setLoading(false);

      // POSITIVE → GOOGLE
      if (rating >= 4) {

        window.location.href =
          "https://search.google.com/local/writereview?placeid=YOUR_GOOGLE_PLACE_ID";

        return;
      }

      // NEUTRAL
      if (rating === 3) {

        setStep(3);

        return;
      }

      // NEGATIVE
      if (rating <= 2) {

        setStep(4);

      }

    }, 1800);
  };

  return (
    <main className="min-h-screen bg-[#081120] text-white flex items-center justify-center px-6 py-10">

      <div className="w-full max-w-2xl bg-white/5 border border-white/10 rounded-[32px] p-10">

        {/* PROGRESS */}
        <div className="flex gap-3 mb-10">

          <div
            className={`h-2 flex-1 rounded-full ${
              step >= 1
                ? "bg-blue-500"
                : "bg-white/10"
            }`}
          />

          <div
            className={`h-2 flex-1 rounded-full ${
              step >= 2
                ? "bg-blue-500"
                : "bg-white/10"
            }`}
          />

          <div
            className={`h-2 flex-1 rounded-full ${
              step >= 3
                ? "bg-blue-500"
                : "bg-white/10"
            }`}
          />

        </div>

        {/* HEADER */}
        <div className="text-center mb-10">

          <h1 className="text-5xl font-bold mb-4">
            ReviewBoost
          </h1>

          <p className="text-gray-400 text-lg">
            Help us improve your experience.
          </p>

        </div>

        {/* STEP 1 */}
        {step === 1 && (

          <div>

            <h2 className="text-4xl font-bold text-center mb-10">

              How was your experience?

            </h2>

            <div className="flex justify-center gap-4 mb-10">

              {[1, 2, 3, 4, 5].map((star) => (

                <button
                  key={star}
                  onClick={() =>
                    handleRating(star)
                  }
                  className={`text-7xl transition duration-200 hover:scale-110 ${
                    rating && star <= rating
                      ? "text-yellow-400"
                      : "text-gray-500 hover:text-yellow-300"
                  }`}
                >
                  ★
                </button>

              ))}

            </div>

            <p className="text-center text-gray-500">

              Your feedback helps improve the restaurant experience.

            </p>

          </div>

        )}

        {/* STEP 2 */}
        {step === 2 && (

          <div>

            <h2 className="text-4xl font-bold mb-8 text-center">

              Tell us more

            </h2>

            <textarea
              value={feedback}
              onChange={(e) =>
                setFeedback(e.target.value)
              }
              placeholder="Write your feedback..."
              className="w-full h-44 bg-[#111827] border border-white/10 rounded-2xl p-5 text-white outline-none resize-none mb-8 text-lg"
            />

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 transition py-5 rounded-2xl text-xl font-semibold"
            >
              {loading
                ? "Analyzing feedback..."
                : "Submit Feedback"}
            </button>

          </div>

        )}

        {/* STEP 3 */}
        {step === 3 && (

          <div className="text-center py-10">

            <h2 className="text-5xl font-bold mb-6 text-yellow-400">

              Thank You 🙌

            </h2>

            <p className="text-2xl text-gray-300 leading-relaxed">

              Your feedback helps us improve the customer experience.

            </p>

          </div>

        )}

        {/* STEP 4 */}
        {step === 4 && (

          <div className="text-center py-10">

            <h2 className="text-5xl font-bold mb-6 text-red-400">

              We Appreciate Your Feedback ❤️

            </h2>

            <p className="text-2xl text-gray-300 leading-relaxed">

              Your feedback has been shared privately with management
              so we can improve your next experience.

            </p>

          </div>

        )}

        {/* STEP 5 */}
        {step === 5 && (

          <div className="text-center py-10">

            <h2 className="text-5xl font-bold mb-6 text-blue-400">

              Feedback Already Submitted
            </h2>

            <p className="text-2xl text-gray-300 leading-relaxed">

              We already received your feedback recently.
              Thank you for helping us improve.

            </p>

          </div>

        )}

      </div>

    </main>
  );
}