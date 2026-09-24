import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";

const links = [
  { label: "Home", to: "#home" },
  { label: "About", to: "#about" },
  { label: "Programs", to: "#programs" },
  { label: "Courses", to: "#courses", badge: "HOT" },
  { label: "Masterclasses", to: "#masterclasses" },
  { label: "Mentors", to: "#trainers" },
  { label: "Reviews", to: "#success" },
  { label: "FAQ", to: "#faq" },
  { label: "Contact", to: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const tickingRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40);

        const scrollPos = window.scrollY + 120;
        for (let i = links.length - 1; i >= 0; i--) {
          const sec = document.querySelector(links[i].to);
          if (sec && sec.offsetTop <= scrollPos) {
            setActiveSection(links[i].to);
            break;
          }
        }
        tickingRef.current = false;
      });
    };

    window.addEventListener("scroll", onScroll);
    const t = setTimeout(() => setLoaded(true), 200);

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (e, to) => {
    e.preventDefault();
    setMenuOpen(false);
    setActiveSection(to);
    const el = document.querySelector(to);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const solid = scrolled || menuOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between
      h-20 px-4 sm:px-6 md:px-12 border-b transition-all duration-300
      ${solid
          ? "bg-[#0B0A12]/92 backdrop-blur-md border-white/10 shadow-lg shadow-black/40"
          : "bg-[#0B0A12]/40 backdrop-blur-sm border-transparent"
        }`}
    >
      {/* Left: Hamburger (below 2xl) + Logo + Hairline + Navlinks (2xl+ only) */}
      <div className="flex items-center gap-4 md:gap-8 min-w-0">
        <button
          type="button"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="2xl:hidden flex flex-col justify-center items-center gap-1.5 w-9 h-9 rounded-lg bg-white/5 border border-white/10 shrink-0"
        >
          <span className={`block h-0.5 w-5 rounded-full bg-[#F8F7FC] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`block h-0.5 w-5 rounded-full bg-[#F8F7FC] transition-all duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`block h-0.5 w-5 rounded-full bg-[#F8F7FC] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </button>

        <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center focus:outline-none shrink-0">
          <Logo className="h-8 sm:h-9 md:h-10 w-auto" />
        </a>

        <div
          className={`hidden 2xl:block w-px bg-gradient-to-b from-transparent via-[#8B5CF6]/50 to-transparent
          transition-all duration-700 ease-out
          ${loaded ? "h-8 opacity-100" : "h-0 opacity-0"}`}
        />

        <ul className="hidden 2xl:flex items-center gap-5 list-none">
          {links.map(({ label, to, badge }) => {
            const active = activeSection === to;
            return (
              <li key={label}>
                <a
                  href={to}
                  onClick={(e) => handleNavClick(e, to)}
                  aria-current={active ? "page" : undefined}
                  className={`group inline-flex items-center text-[13px] font-medium tracking-wide py-2 whitespace-nowrap transition-colors duration-200
                    ${active ? "text-[#F8F7FC]" : "text-[#A6A3B0] hover:text-[#F8F7FC]"}`}
                >
                  <span
                    className={`h-1.5 rounded-full bg-[#8B5CF6] shadow-[0_0_8px_#8B5CF6] transition-all duration-300 ease-out
                      ${active ? "w-1.5 opacity-100 mr-2" : "w-0 opacity-0 mr-0 group-hover:w-1.5 group-hover:opacity-100 group-hover:mr-2"}`}
                  />
                  <span>{label}</span>
                  {badge && (
                    <span className="ml-2 inline-block align-middle text-[9px] font-bold tracking-wider text-white px-2 py-0.5 rounded-full bg-gradient-to-r from-[#A855F7] to-[#7C3AED] shadow-sm">
                      {badge}
                    </span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Right: CTA — shrink-0 so it can never get squeezed by the links */}
      <div className="flex items-center gap-4 shrink-0">
        <a
          href="#courses"
          onClick={(e) => handleNavClick(e, "#courses")}
          className="hidden sm:inline-flex items-center text-xs md:text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-[#A855F7] to-[#7C3AED] hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] rounded-full px-6 py-2.5 transition-all duration-300 shadow-[0_8px_24px_rgba(139,92,246,0.35)] whitespace-nowrap"
        >
          Explore Courses
        </a>
      </div>

      {/* Mobile / tablet / laptop nav panel — shown below 2xl */}
      <div
        aria-hidden={!menuOpen}
        className={`2xl:hidden fixed top-20 left-0 right-0 bg-[#0B0A12]/98 backdrop-blur-xl
        border-b border-white/10 overflow-y-auto transition-all duration-300 ease-in-out
        ${menuOpen ? "max-h-[calc(100vh-5rem)] opacity-100 py-6" : "max-h-0 opacity-0 py-0 pointer-events-none"}`}
      >
        <ul className="flex flex-col px-6 space-y-1 list-none">
          {links.map(({ label, to, badge }) => {
            const active = activeSection === to;
            return (
              <li key={label} className="border-b border-white/5 last:border-b-0">
                <a
                  href={to}
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={(e) => handleNavClick(e, to)}
                  className={`flex items-center justify-between py-3 text-sm font-medium transition-colors
                    ${active ? "text-[#C4B5FD]" : "text-[#A6A3B0] hover:text-[#F8F7FC]"}`}
                >
                  <div className="flex items-center">
                    <span className={`h-1.5 rounded-full bg-[#8B5CF6] transition-all duration-300 ${active ? "w-1.5 opacity-100 mr-2" : "w-0 opacity-0 mr-0"}`} />
                    <span>{label}</span>
                    {badge && (
                      <span className="ml-2 text-[9px] font-bold text-white px-2 py-0.5 rounded-full bg-[#8B5CF6]">
                        {badge}
                      </span>
                    )}
                  </div>
                  <span className="text-[#8B5CF6]">→</span>
                </a>
              </li>
            );
          })}
          <li className="pt-4">
            <a
              href="#courses"
              onClick={(e) => handleNavClick(e, "#courses")}
              className="inline-flex w-full items-center justify-center text-sm font-semibold text-white bg-gradient-to-r from-[#A855F7] to-[#7C3AED] rounded-full py-3 shadow-[0_8px_24px_rgba(139,92,246,0.35)]"
            >
              Start Learning
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}