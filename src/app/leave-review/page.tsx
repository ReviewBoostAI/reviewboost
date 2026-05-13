"use client";

import { useState } from "react";

export default function LeaveReviewPage() {

  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  function handleRating(value: number) {

    setRating(value);

    if (value >= 4) {

      window.location.href =
        "https://google.com";

    }
  }

  return (
    <main className="min-h-screen bg-[#081120] text-white flex items-center justify-center px-6">

      <div className="max-w-2xl w-full bg-white/5 border border-white/10 rounded-3xl p-10 text-center">

        {!submitted ? (

          <>

            <h1 className="text-5xl font-bold mb-5">
              Come è stata la tua esperienza?
            </h1>

            <p className="text-gray-400 text-lg mb-10">
              Il tuo feedback aiuta il nostro ristorante a migliorare.
            </p>

            {/* STARS */}
            <div className="flex justify-center gap-4 text-6xl mb-10">

              {[1, 2, 3, 4, 5].map((star) => (

                <button
                  key={star}
                  onClick={() => handleRating(star)}
                  className={`transition hover:scale-110 ${
                    rating >= star
                      ? "text-yellow-400"
                      : "text-gray-500"
                  }`}
                >
                  ★
                </button>

              ))}

            </div>

            {/* LOW RATING */}
            {rating > 0 && rating <= 3 && (

              <div className="mt-8">

                <textarea
                  placeholder="Raccontaci cosa possiamo migliorare..."
                  className="w-full h-40 bg-[#111827] border border-white/10 rounded-2xl p-5 outline-none resize-none"
                />

                <button
                  onClick={() => setSubmitted(true)}
                  className="mt-6 bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-2xl text-lg font-semibold"
                >
                  Invia feedback
                </button>

              </div>

            )}

          </>

        ) : (

          <div>

            <h2 className="text-4xl font-bold mb-5">
              Grazie per il feedback ❤️
            </h2>

            <p className="text-gray-400 text-lg">
              Il tuo messaggio ci aiuterà a migliorare il servizio.
            </p>

          </div>

        )}

      </div>

    </main>
  );
}