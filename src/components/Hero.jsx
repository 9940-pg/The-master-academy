const chips = [
  { label: "Python", className: "top-[18%] left-6", duration: "4.5s", delay: "0s" },
  { label: "AI & ML", className: "top-[64%] left-3", duration: "5.8s", delay: "1s" },
  { label: "Web Dev", className: "top-[16%] right-6", duration: "4.8s", delay: "0.5s" },
  { label: "AWS", className: "top-[44%] right-3", duration: "5.2s", delay: "1.5s" },
  { label: "DevOps", className: "top-[72%] right-10", duration: "6.0s", delay: "0.8s" },
];

const stats = [
  { value: "500+", label: "Learners Trained" },
  { value: "3+", label: "Flagship Programs" },
  { value: "100%", label: "Hands-on Projects" },
  { value: "4.9/5", label: "Student Rating" },
];

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[88vh] bg-[#0B0A12] overflow-hidden flex items-center pt-24 pb-16">
      {/* Background radial glows and grid pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -right-32 top-1/4 w-[560px] h-[560px] rounded-full bg-[#8B5CF6]/20 blur-[140px]"
          style={{ animation: "heroPulse 9s ease-in-out infinite" }}
        />
        <div
          className="absolute left-1/4 -bottom-40 w-[420px] h-[420px] rounded-full bg-[#7C3AED]/15 blur-[120px]"
          style={{ animation: "heroPulse 11s ease-in-out infinite 1.5s" }}
        />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(#FFFFFF 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* Floating skill chips — xl+ only: below that there isn't enough
          side margin around the centered content to fit these without overlap */}
      <div className="absolute inset-0 pointer-events-none hidden xl:block">
        {chips.map((c) => (
          <span
            key={c.label}
            className={`absolute ${c.className} inline-flex items-center gap-2 text-xs font-semibold text-[#D5D3DC] bg-[#15141F]/85 border border-[#8B5CF6]/30 backdrop-blur-md rounded-full px-4 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.5)] z-20`}
            style={{ animation: `floatUp ${c.duration} ease-in-out ${c.delay} infinite` }}
          >
            <span className="w-2 h-2 rounded-full bg-[#8B5CF6] shadow-[0_0_8px_#8B5CF6]" />
            {c.label}
          </span>
        ))}
      </div>

      {/* Hero content container */}
      <div className="relative z-10 px-4 sm:px-6 md:px-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-wide text-[#C4B5FD] bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 rounded-full px-3.5 sm:px-4 py-1.5 mb-6 sm:mb-7 backdrop-blur-sm">
          <span className="inline-block w-2 h-2 rounded-full bg-[#A855F7] animate-pulse" />
          🎓 Live Instructor-Led Tech Academy
        </div>

        <h1 className="font-[Manrope] font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-[64px] leading-[1.14] text-[#F8F7FC] mb-5 sm:mb-6">
          Master Future Skills.{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C4B5FD] via-[#A855F7] to-[#8B5CF6]">
            Build Real Projects.
          </span>{" "}
          Learn from Anywhere.
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-[#A6A3B0] max-w-2xl mb-8 sm:mb-10 leading-relaxed font-normal">
          Live online, instructor-led technology training designed to help learners
          build practical skills, real-world portfolio projects, and industry-ready confidence
          from anywhere in the world.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14 w-full sm:w-auto">
          <a
            href="#courses"
            className="group inline-flex items-center justify-center gap-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#A855F7] to-[#7C3AED] hover:opacity-95 hover:shadow-[0_12px_32px_rgba(139,92,246,0.45)] hover:-translate-y-0.5 rounded-full px-7 sm:px-8 py-3.5 sm:py-4 transition-all duration-300 w-full sm:w-auto text-center"
          >
            <span>Explore Programs</span>
            <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none stroke-[2] transition-transform duration-300 group-hover:translate-x-1">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#F8F7FC] bg-[#15141F] border border-white/15 hover:border-[#8B5CF6]/50 hover:bg-[#1C1B2A] hover:-translate-y-0.5 rounded-full px-7 sm:px-8 py-3.5 sm:py-4 transition-all duration-300 w-full sm:w-auto text-center"
          >
            <span>Free Consultation</span>
          </a>
        </div>

        {/* Trust Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 xs:gap-4 sm:gap-8 py-5 sm:py-6 px-3 xs:px-4 sm:px-8 rounded-2xl bg-[#15141F]/60 border border-white/10 backdrop-blur-md w-full max-w-3xl">
          {stats.map((s) => (
            <div key={s.label} className="text-center relative">
              <div className="font-[Manrope] font-extrabold text-xl sm:text-3xl text-[#F8F7FC] bg-clip-text text-transparent bg-gradient-to-b from-white to-[#D5D3DC]">
                {s.value}
              </div>
              <div className="text-[10px] sm:text-xs text-[#8E8B9D] font-medium tracking-wide mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes floatUp {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes heroPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.12); opacity: 0.7; }
        }
      `}</style>
    </section>
  );
}