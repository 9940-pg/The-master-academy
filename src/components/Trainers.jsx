import SpotlightCard from "./SpotlightCard";

const mentors = [
  {
    name: "Ashwini",
    title: "Senior AI & Python Lead",
    experience: "6+ Years Experience",
    bio: "Specializes in Python programming, machine learning, and AI workflow automation. Dedicated to helping absolute beginners write clean code and build practical AI tools.",
    skills: ["Python", "OpenAI APIs", "Pandas", "Automation", "Canva AI"],
    initials: "A",
  },
  {
    name: "Ambreen",
    title: "Lead Full-Stack Web Architect",
    experience: "5+ Years Experience",
    bio: "Passionate about modern web technologies and component-driven architecture. Teaches how to take web ideas from design to live cloud deployment effortlessly.",
    skills: ["React.js", "JavaScript ES6+", "Tailwind CSS", "REST APIs", "Git"],
    initials: "AM",
  },
  {
    name: "Cloud & DevOps Mentors",
    title: "AWS Certified Solutions Architects",
    experience: "Industry Practitioners",
    bio: "Hands-on cloud engineers managing enterprise infrastructure. Guides students through AWS VPCs, Docker containerization, and modern CI/CD automation pipelines.",
    skills: ["AWS EC2 & S3", "Docker", "Linux Administration", "CI/CD Pipelines", "DevOps"],
    initials: "MA",
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className="bg-[#0B0A12] px-4 sm:px-6 md:px-10 py-20 sm:py-24 md:py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-12 sm:mb-14">
          <span className="block text-xs font-bold tracking-[2.5px] text-[#C4B5FD] uppercase mb-3">
            EXPERT MENTORSHIP
          </span>
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl md:text-[40px] leading-[1.15] text-[#F8F7FC] break-words">
            Learn Directly From Industry Practitioners
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#A6A3B0] mt-3 leading-relaxed">
            Our trainers are experienced engineers and passionate educators who mentor you every step of the way with live code reviews and career guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((m) => (
            <SpotlightCard
              key={m.name}
              className="rounded-2xl bg-[#15141F] border border-white/10 p-5 sm:p-7 flex flex-col justify-between hover:border-[#8B5CF6]/50 transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#A855F7] to-[#6D28D9] flex items-center justify-center text-white font-extrabold text-lg shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                    {m.initials}
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-lg text-[#F8F7FC]">{m.name}</h3>
                    <p className="text-xs text-[#C4B5FD] font-medium">{m.title}</p>
                    <span className="inline-block text-[10px] text-[#7A7788] bg-white/5 px-2 py-0.5 rounded-full mt-1">
                      {m.experience}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#A6A3B0] leading-relaxed mb-6">
                  "{m.bio}"
                </p>
              </div>

              <div>
                <div className="text-[11px] font-semibold text-[#C4B5FD] uppercase tracking-wider mb-2">
                  Specialties:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {m.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] text-[#D5D3DC] bg-white/[0.04] border border-white/5 px-2.5 py-1 rounded-md"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
