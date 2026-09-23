import { useState } from "react";
import SpotlightOverlay from "./components/SpotlightOverlay";
import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechMarquee from "./components/TechMarquee";
import About from "./components/About";
import Programs from "./components/Programs";
import Courses from "./components/Courses";
import Masterclasses from "./components/Masterclasses";
import Trainers from "./components/Trainers";
import WhyUs from "./components/WhyUs";
import Audience from "./components/Audience";
import Testimonials from "./components/Testimonials";
import StudentSuccess from "./components/StudentSuccess";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Footer from "./components/Footer";

export default function App() {
  const [prefilledCourse, setPrefilledCourse] = useState("");

  return (
    <div className="relative min-h-screen bg-[#0B0A12] text-[#F8F7FC] selection:bg-[#8B5CF6]/30 selection:text-white overflow-x-hidden">
      {/* Interactive Cursor Spotlight & Ambient Glow */}
      <SpotlightOverlay />
      <CursorGlow />

      {/* Main Layout Sections */}
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Programs />
        <Courses onSelectCourse={setPrefilledCourse} />
        <Masterclasses />
        <Trainers />
        <WhyUs />
        <Audience />
        <Testimonials />
        <StudentSuccess />
        <FAQ />
        <Contact key={prefilledCourse || "default"} prefilledCourse={prefilledCourse} />
      </main>

      {/* Floating Action & Footer */}
      <WhatsAppFloat />
      <Footer />
    </div>
  );
}
