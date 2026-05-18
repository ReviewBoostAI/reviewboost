import Link from "next/link";

export default function HomePage() {

  return (
    <main className="min-h-screen bg-[#081120] text-white overflow-hidden">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-28 pb-24 text-center">

        <div className="inline-block border border-blue-500/30 bg-blue-500/10 text-blue-400 px-5 py-2 rounded-full text-sm mb-8">

          AI-powered reputation management for restaurants & hospitality

        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">

          Scopri cosa sta
          <br />

          danneggiando la reputazione
          <br />

          <span className="text-blue-500">
            del tuo ristorante.
          </span>

        </h1>

        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">

          ReviewBoost analizza il feedback dei clienti e mette in evidenza
          i problemi che stanno influenzando davvero la reputazione del tuo locale.

        </p>

        {/* BUTTONS */}
        <div className="flex items-center justify-center gap-5 mb-24">

          <Link
            href="/dashboard"
            className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-2xl text-lg font-semibold"
          >
            Inizia la prova gratuita
          </Link>

          <Link
            href="/leave-review"
            className="bg-white/10 hover:bg-white/20 transition px-8 py-4 rounded-2xl text-lg font-semibold"
          >
            Live Demo
          </Link>

        </div>

        {/* DASHBOARD PREVIEW */}
        <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 max-w-6xl mx-auto shadow-2xl">

          {/* TOP STATS */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">

            <div className="bg-[#111827] border border-white/10 rounded-3xl p-6 text-left">

              <p className="text-gray-400 mb-3">
                Reputation Score
              </p>

              <h3 className="text-6xl font-bold">
                4.6 ⭐
              </h3>

            </div>

            <div className="bg-[#111827] border border-white/10 rounded-3xl p-6 text-left">

              <p className="text-gray-400 mb-3">
                Reviews Analyzed
              </p>

              <h3 className="text-6xl font-bold">
                248
              </h3>

            </div>

            <div className="bg-[#111827] border border-white/10 rounded-3xl p-6 text-left">

              <p className="text-gray-400 mb-3">
                Main Issue
              </p>

              <h3 className="text-4xl font-bold text-red-400">
                Waiting Time
              </h3>

            </div>

          </div>

          {/* AI INSIGHTS */}
          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-[#111827] border border-white/10 rounded-3xl p-6 text-left">

              <h3 className="text-2xl font-bold mb-6">
                AI Insights
              </h3>

              <div className="space-y-4">

                <div className="bg-red-500/10 border border-red-500/20 text-red-300 rounded-2xl p-4">
                  Waiting time complaints increased by 21% this week.
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 rounded-2xl p-4">
                  Customers mention inconsistent service during weekends.
                </div>

                <div className="bg-green-500/10 border border-green-500/20 text-green-300 rounded-2xl p-4">
                  Gluten-free pizza receives highly positive feedback.
                </div>

              </div>

            </div>

            {/* ACTIONS */}
            <div className="bg-[#111827] border border-white/10 rounded-3xl p-6 text-left">

              <h3 className="text-2xl font-bold mb-6">
                Recommended Actions
              </h3>

              <div className="space-y-4">

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  Increase staff during peak evening hours.
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  Respond to recent negative reviews.
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  Promote your best-rated dishes more aggressively.
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}