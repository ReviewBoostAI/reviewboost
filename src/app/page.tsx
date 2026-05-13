export default function Home() {
  return (
    <main className="min-h-screen bg-[#081120] text-white overflow-hidden">

      {/* Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600 opacity-20 blur-[120px] rounded-full"></div>

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/10">

        <h1 className="text-2xl font-bold">
          Review<span className="text-blue-500">Boost</span>
        </h1>

        <button className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-xl">
          Dashboard
        </button>

      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32">

        {/* Badge */}
        <div className="mb-6 border border-blue-500/20 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm">
          AI-powered restaurant reputation intelligence
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-7xl font-bold max-w-5xl leading-tight mb-6">
          Know what’s hurting your
          <span className="text-blue-500"> restaurant reputation</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-xl max-w-2xl mb-10">
          ReviewBoost analyzes customer feedback and shows the problems that truly impact your restaurant.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">

          <button className="bg-blue-600 hover:bg-blue-700 transition px-7 py-4 rounded-2xl text-lg font-medium">
            Start Free Trial
          </button>

          <button className="border border-white/10 hover:bg-white/5 transition px-7 py-4 rounded-2xl text-lg font-medium">
            Live Demo
          </button>

        </div>

      </section>

      {/* Dashboard Preview */}
      <section className="relative z-10 px-6 pb-32">

        <div className="max-w-6xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

          {/* Top Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

            <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">

              <p className="text-gray-400 mb-2">
                Reputation Score
              </p>

              <h2 className="text-5xl font-bold">
                4.6⭐
              </h2>

            </div>

            <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">

              <p className="text-gray-400 mb-2">
                Reviews Analyzed
              </p>

              <h2 className="text-5xl font-bold">
                248
              </h2>

            </div>

            <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">

              <p className="text-gray-400 mb-2">
                Main Issue
              </p>

              <h2 className="text-3xl font-bold text-red-400">
                Waiting Time
              </h2>

            </div>

          </div>

          {/* Insights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Left */}
            <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-6">
                AI Insights
              </h3>

              <div className="space-y-4">

                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                  <p className="text-red-300">
                    Waiting time complaints increased by 21% this week.
                  </p>
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4">
                  <p className="text-yellow-300">
                    Customers mention inconsistent service during weekends.
                  </p>
                </div>

                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                  <p className="text-green-300">
                    Gluten-free pizza receives highly positive feedback.
                  </p>
                </div>

              </div>

            </div>

            {/* Right */}
            <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-6">
                Recommended Actions
              </h3>

              <div className="space-y-4">

                <div className="border border-white/10 rounded-xl p-4">
                  <p>
                    Increase staff during peak evening hours.
                  </p>
                </div>

                <div className="border border-white/10 rounded-xl p-4">
                  <p>
                    Respond to recent negative reviews.
                  </p>
                </div>

                <div className="border border-white/10 rounded-xl p-4">
                  <p>
                    Promote gluten-free pizza more aggressively.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}