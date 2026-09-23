import SpotlightCard from "./SpotlightCard";

const quotes = [
  {
    name: "Adam Ricanda Dass",
    role: "AI & Python Learner",
    quote: "Loved it! I have learned a lot and want to keep building on this foundation. The live projects and real-time guidance were exceptional.",
  },
  {
    name: "Surya Kireeti",
    role: "Web Development Student",
    quote: "Excellent course structure. I learnt a lot about AI technology, how modern web apps are structured, and how to build solutions that actually work.",
  },
  {
    name: "Sangamesh Vadagave",
    role: "Cloud & DevOps Aspirant",
    quote: "I learnt a ton and met some fantastic people. The trainers don't just teach code; they build your confidence to present and speak like an engineer.",
  },
  {
    name: "Mr John Parkash",
    role: "Working Professional",
    quote: "A well-structured course that delivered exactly what it promised. Clear demonstrations, zero fluff, and great doubt-clearing support.",
  },
  {
    name: "ARMIN",
    role: "Full-Stack Trainee",
    quote: "The curriculum was intense, but I've learned more in a few weeks than in months of self-study, thanks to the continuous mentor support.",
  },
  {
    name: "Mohammed Hasan",
    role: "Career Switcher",
    quote: "A genuinely supportive learning environment that pushed me to grow faster than I ever thought possible. Highly recommended for anyone starting out!",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-4" aria-label="5 stars rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="w-4 h-4 fill-[#A855F7] shadow-sm">
          <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#0B0A12] px-4 sm:px-6 md:px-10 py-20 sm:py-24 md:py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mb-12 sm:mb-14">
          <span className="block text-xs font-bold tracking-[2.5px] text-[#C4B5FD] uppercase mb-3">
            TESTIMONIALS
          </span>
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl md:text-[40px] leading-[1.15] text-[#F8F7FC] break-words">
            What Our Learners Say
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#A6A3B0] mt-3 leading-relaxed">
            Hear directly from students and professionals who accelerated their tech careers with Master Academy.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {quotes.map((t) => (
            <SpotlightCard
              key={t.name}
              className="rounded-2xl bg-[#15141F] border border-white/10 p-5 sm:p-7 flex flex-col justify-between hover:border-[#8B5CF6]/50 transition-all duration-300"
            >
              <div>
                <Stars />
                <p className="text-sm text-[#D5D3DC] leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#8B5CF6] to-[#C4B5FD] flex items-center justify-center font-bold text-white text-xs">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm text-[#F8F7FC] font-semibold">{t.name}</div>
                  <div className="text-[11px] text-[#A6A3B0]">{t.role}</div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
