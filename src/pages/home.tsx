import { useState, useEffect } from "react";
import { PortfolioSections } from "@/components/portfolio-sections";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const updateActiveNavLink = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 200) {
          current = section.getAttribute('id') || '';
        }
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', updateActiveNavLink);
    return () => window.removeEventListener('scroll', updateActiveNavLink);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Wild Wheels Event",
      description: "Dynamic automotive event coverage with cinematic flair and professional editing techniques.",
      category: "Event Coverage",
      youtubeUrl: "https://youtu.be/UgHkxsK5aLI?si=xwvRAyyMykv1ckrb",
      thumbnail: "https://img.youtube.com/vi/UgHkxsK5aLI/maxresdefault.jpg",
      tags: ["Event", "Automotive", "Cinematic"],
    },
    {
      id: 2,
      title: "Charity Work Documentation",
      description: "Heartwarming documentation of community charity work, capturing genuine emotions and impactful moments.",
      category: "Documentary",
      youtubeUrl: "https://youtu.be/IyND0Df5Fis?si=aIm9HqGVeffQuBaw",
      thumbnail: "https://img.youtube.com/vi/IyND0Df5Fis/maxresdefault.jpg",
      tags: ["Documentary", "Social Impact", "Community"],
    },
    {
      id: 3,
      title: "Cinematic Style Showcase",
      description: "Artistic video production demonstrating advanced color grading and atmospheric storytelling.",
      category: "Cinematic",
      youtubeUrl: "https://youtu.be/CB_b_xqD6Mg?si=qxX02cMpf-9qCvWx",
      thumbnail: "https://img.youtube.com/vi/CB_b_xqD6Mg/maxresdefault.jpg",
      tags: ["Cinematic", "Color Grading", "Artistic"],
    },
    {
      id: 4,
      title: "DASH Restaurant Campaign",
      description: "Commercial food advertisement for the first cloud kitchen in Upper Egypt - a groundbreaking project.",
      category: "Commercial",
      youtubeUrl: "https://youtu.be/MadX23f6mGM?si=1mmNQ-T5pypDy5KB",
      thumbnail: "https://img.youtube.com/vi/MadX23f6mGM/maxresdefault.jpg",
      tags: ["Commercial", "Food", "Advertisement"],
    },
    {
      id: 5,
      title: "Auto Mokka Promo #1",
      description: "Dynamic automotive promotional content with engaging storytelling and smooth transitions.",
      category: "Automotive",
      youtubeUrl: "https://youtube.com/shorts/q2Xy5oA6TWQ?si=qtQAxIr5T__ZhQ30",
      thumbnail: "https://img.youtube.com/vi/q2Xy5oA6TWQ/maxresdefault.jpg",
      tags: ["Automotive", "Promo", "Short-form"],
    },
    {
      id: 6,
      title: "Auto Mokka Showcase",
      description: "Professional automotive showcase highlighting vehicle features with cinematic presentation.",
      category: "Automotive",
      youtubeUrl: "https://youtube.com/shorts/IvCPlOZbq8M?si=bmwYfDxPjwzVx2TI",
      thumbnail: "https://img.youtube.com/vi/IvCPlOZbq8M/maxresdefault.jpg",
      tags: ["Automotive", "Showcase", "Professional"],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold">
              <span className="text-white">EYAD</span>
              <span className="text-yellow-400 ml-1">KHAIRY</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "experience", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`transition-colors uppercase tracking-wide text-sm ${
                    activeSection === section 
                      ? "text-yellow-400" 
                      : "text-gray-300 hover:text-yellow-400"
                  }`}
                >
                  {section === "projects" ? "Portfolio" : section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800">
            <div className="px-6 py-4 space-y-4">
              {["home", "about", "experience", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block text-gray-300 hover:text-yellow-400 transition-colors uppercase tracking-wide text-sm"
                >
                  {section === "projects" ? "Portfolio" : section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <PortfolioSections 
        projects={projects}
        scrollToSection={scrollToSection}
      />
    </div>
  );
}
