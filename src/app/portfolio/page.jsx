"use client";
import React from "react";

function MainComponent() {
  const [activeSection, setActiveSection] = React.useState("home");
  const [selectedProject, setSelectedProject] = React.useState(null);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = [
    {
      id: 1,
      title: "Wild Wheels Event",
      description:
        "Dynamic automotive event coverage with cinematic flair and professional editing techniques.",
      category: "Event Coverage",
      youtubeUrl: "https://youtu.be/UgHkxsK5aLI?si=xwvRAyyMykv1ckrb",
      thumbnail: "https://img.youtube.com/vi/UgHkxsK5aLI/maxresdefault.jpg",
      tags: ["Event", "Automotive", "Cinematic"],
    },
    {
      id: 2,
      title: "Charity Work Documentation",
      description:
        "Heartwarming documentation of community charity work, capturing genuine emotions and impactful moments.",
      category: "Documentary",
      youtubeUrl: "https://youtu.be/IyND0Df5Fis?si=aIm9HqGVeffQuBaw",
      thumbnail: "https://img.youtube.com/vi/IyND0Df5Fis/maxresdefault.jpg",
      tags: ["Documentary", "Social Impact", "Community"],
    },
    {
      id: 3,
      title: "Cinematic Style Showcase",
      description:
        "Artistic video production demonstrating advanced color grading and atmospheric storytelling.",
      category: "Cinematic",
      youtubeUrl: "https://youtu.be/CB_b_xqD6Mg?si=qxX02cMpf-9qCvWx",
      thumbnail: "https://img.youtube.com/vi/CB_b_xqD6Mg/maxresdefault.jpg",
      tags: ["Cinematic", "Color Grading", "Artistic"],
    },
    {
      id: 4,
      title: "DASH Restaurant Campaign",
      description:
        "Commercial food advertisement for the first cloud kitchen in Upper Egypt - a groundbreaking project.",
      category: "Commercial",
      youtubeUrl: "https://youtu.be/MadX23f6mGM?si=1mmNQ-T5pypDy5KB",
      thumbnail: "https://img.youtube.com/vi/MadX23f6mGM/maxresdefault.jpg",
      tags: ["Commercial", "Food", "Advertisement"],
    },
    {
      id: 5,
      title: "Auto Mokka Promo #1",
      description:
        "Dynamic automotive promotional content with engaging storytelling and smooth transitions.",
      category: "Automotive",
      youtubeUrl: "https://youtube.com/shorts/q2Xy5oA6TWQ?si=qtQAxIr5T__ZhQ30",
      thumbnail: "https://img.youtube.com/vi/q2Xy5oA6TWQ/maxresdefault.jpg",
      tags: ["Automotive", "Promo", "Short-form"],
    },
    {
      id: 6,
      title: "Auto Mokka Showcase",
      description:
        "Professional automotive showcase highlighting vehicle features with cinematic presentation.",
      category: "Automotive",
      youtubeUrl: "https://youtube.com/shorts/IvCPlOZbq8M?si=bmwYfDxPjwzVx2TI",
      thumbnail: "https://img.youtube.com/vi/IvCPlOZbq8M/maxresdefault.jpg",
      tags: ["Automotive", "Showcase", "Professional"],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans animate-fade-in">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50 animate-fade-in">
        <div className="max-w-6xl mx-auto px-6 sm:px-6">
          <div className="flex justify-between items-center py-5 sm:py-4">
            <div className="text-2xl sm:text-2xl font-bold">
              <span className="text-white">EYAD</span>
              <span className="text-yellow-400 ml-1">KHAIRY</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-300 hover:text-yellow-400 transition-colors uppercase tracking-wide text-sm"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-yellow-400 transition-colors uppercase tracking-wide text-sm"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-gray-300 hover:text-yellow-400 transition-colors uppercase tracking-wide text-sm"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-300 hover:text-yellow-400 transition-colors uppercase tracking-wide text-sm"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-300 hover:text-yellow-400 transition-colors uppercase tracking-wide text-sm"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-yellow-400 transition-colors uppercase tracking-wide text-sm"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-24 relative overflow-hidden animate-fade-in"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80"></div>
        <div className="max-w-6xl mx-auto px-6 sm:px-6 text-center relative z-10">
          <div className="mb-16">
            <div className="w-36 h-36 sm:w-40 sm:h-40 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mx-auto mb-8 sm:mb-8 flex items-center justify-center overflow-hidden shadow-2xl shadow-yellow-400/30 animate-pulse">
              <img
                src="https://i.ibb.co/99Fq3QM1/IMG-20250729-012538-121.jpg"
                alt="Eyad Khairy"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 sm:mb-6 animate-fade-in leading-tight">
              <span className="text-white">EYAD</span>
              <br />
              <span className="text-green-400 animate-glow">KHAIRY</span>
            </h1>
            <p className="text-2xl sm:text-2xl md:text-3xl text-gray-300 mb-4 sm:mb-2 animate-slide-up">
              VIDEO EDITOR
            </p>
            <p className="text-lg sm:text-lg text-gray-400 mb-10 sm:mb-8 animate-slide-up px-4 sm:px-0 leading-relaxed">
              Based in Egypt • 2+ Years Experience • 18 Years Old
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-5 sm:space-y-0 sm:space-x-6 animate-bounce-in px-6 sm:px-0">
              <button
                onClick={() => scrollToSection("projects")}
                className="bg-green-400 text-black px-8 sm:px-8 py-4 rounded-none font-bold hover:bg-green-300 transition-all duration-300 uppercase tracking-wide transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/50 text-base sm:text-base"
              >
                View Portfolio
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border border-yellow-400 text-yellow-400 px-8 sm:px-8 py-4 rounded-none font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300 uppercase tracking-wide transform hover:scale-105 text-base sm:text-base"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 sm:py-20 bg-gray-900 relative overflow-hidden animate-fade-in"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-transparent"></div>
        <div className="max-w-6xl mx-auto px-6 sm:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 sm:gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 sm:mb-8 leading-tight">
                <span className="text-white">ABOUT</span>
                <span className="text-green-400 ml-2 animate-glow">ME</span>
              </h2>
              <p className="text-gray-300 text-lg sm:text-lg leading-relaxed mb-6 sm:mb-6">
                I'm a passionate and skilled video editor based in Egypt, with
                over 2 years of experience in the industry. Despite being just
                18 years old, I've already worked with top companies and built a
                strong portfolio.
              </p>
              <p className="text-gray-300 text-lg sm:text-lg leading-relaxed mb-8 sm:mb-8">
                Driven by a passion for visual storytelling, I'm committed to
                creating content that stands out. I specialize in creating
                engaging video content while maintaining the highest
                professional standards.
              </p>
              <div className="bg-gray-800 p-6 sm:p-6 rounded-lg border-l-4 border-yellow-400 transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-yellow-400/20">
                <p className="text-gray-300 italic text-base sm:text-base leading-relaxed">
                  "As part of my religion, I do not incorporate music into my
                  edits. However, I'm adept at using alternative audio elements
                  (ambient sounds, voiceovers, and SFX) to maintain energy and
                  impact."
                </p>
              </div>
            </div>
            <div className="text-center animate-slide-in-right mt-12 md:mt-0">
              <div className="w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg mx-auto flex items-center justify-center mb-6 overflow-hidden shadow-2xl shadow-green-400/20 transform hover:scale-105 transition-all duration-500 hover:shadow-green-400/40">
                <img
                  src="https://i.ibb.co/99Fq3QM1/IMG-20250729-012538-121.jpg"
                  alt="Eyad Khairy - Professional Portrait"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-400 animate-fade-in text-base sm:text-base">
                Video Editor & Creative Storyteller
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 sm:py-20 bg-black relative overflow-hidden animate-fade-in"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-400/10 via-transparent to-green-400/5"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 sm:px-6 relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 sm:mb-16 animate-fade-in leading-tight">
            <span className="text-white">EXPERIENCE</span>
            <span className="text-green-400 ml-2">&</span>
            <span className="text-white ml-2">LEADERSHIP</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 sm:gap-8">
            <div className="bg-gray-900 p-8 sm:p-8 rounded-lg hover:bg-gray-800 transition-all duration-500 hover:shadow-2xl hover:shadow-green-400/20 animate-slide-up">
              <div className="w-16 h-16 bg-green-400 rounded-lg flex items-center justify-center mb-6 sm:mb-6 hover:shadow-lg hover:shadow-green-400/30 transition-all duration-300">
                <i className="fas fa-building text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl sm:text-2xl font-bold text-white mb-4 sm:mb-4 hover:scale-110 transition-transform duration-300 cursor-default">
                DTAG
              </h3>
              <p className="text-gray-300 mb-4 sm:mb-4 text-base sm:text-base">
                Video Editor
              </p>
              <p className="text-gray-400 text-base sm:text-base leading-relaxed">
                Delivered high-quality video content for corporate
                communications and marketing campaigns.
              </p>
            </div>
            <div
              className="bg-gray-900 p-8 sm:p-8 rounded-lg hover:bg-gray-800 transition-all duration-500 hover:shadow-2xl hover:shadow-green-400/20 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-16 h-16 bg-green-400 rounded-lg flex items-center justify-center mb-6 sm:mb-6 hover:shadow-lg hover:shadow-green-400/30 transition-all duration-300">
                <i className="fas fa-play-circle text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl sm:text-2xl font-bold text-white mb-4 sm:mb-4 hover:scale-110 transition-transform duration-300 cursor-default">
                OMEDIA
              </h3>
              <p className="text-gray-300 mb-4 sm:mb-4 text-base sm:text-base">
                Video Editor
              </p>
              <p className="text-gray-400 text-base sm:text-base leading-relaxed">
                Created engaging video content for digital media platforms and
                social campaigns.
              </p>
            </div>
            <div
              className="bg-gray-900 p-8 sm:p-8 rounded-lg hover:bg-gray-800 transition-all duration-500 hover:shadow-2xl hover:shadow-green-400/20 animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="w-16 h-16 bg-green-400 rounded-lg flex items-center justify-center mb-6 sm:mb-6 hover:shadow-lg hover:shadow-green-400/30 transition-all duration-300">
                <i className="fas fa-users text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl sm:text-2xl font-bold text-white mb-4 sm:mb-4 hover:scale-110 transition-transform duration-300 cursor-default">
                YOUTH MEDIA
              </h3>
              <p className="text-gray-300 mb-4 sm:mb-4 text-base sm:text-base">
                Founder & Team Leader
              </p>
              <p className="text-gray-400 text-base sm:text-base leading-relaxed">
                Managing a creative team to produce engaging visual stories and
                innovative content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 sm:py-20 bg-gray-900 relative overflow-hidden animate-fade-in"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/5 to-transparent"></div>
        <div className="max-w-6xl mx-auto px-6 sm:px-6 relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 sm:mb-16 animate-fade-in leading-tight">
            <span className="text-white">MY</span>
            <span className="text-green-400 ml-2 animate-glow">SKILLS</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 sm:gap-12">
            <div className="animate-slide-in-left">
              <h3 className="text-3xl sm:text-3xl font-bold text-white mb-8 sm:mb-8">
                Technical Skills
              </h3>
              <div className="space-y-6 sm:space-y-6">
                {[
                  { name: "Adobe Premiere Pro", level: 95 },
                  { name: "Adobe After Effects", level: 90 },
                  { name: "Video Editing", level: 95 },
                  { name: "Motion Graphics", level: 85 },
                  { name: "Color Grading", level: 80 },
                  { name: "Audio Editing (SFX/Voiceover)", level: 90 },
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-white font-semibold text-base sm:text-base">
                        {skill.name}
                      </span>
                      <span className="text-yellow-400 animate-pulse text-base sm:text-base">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-green-400 to-green-500 h-3 rounded-full transition-all duration-2000 animate-grow-width shadow-lg shadow-green-400/30"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${index * 0.2}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slide-in-right mt-12 md:mt-0">
              <h3 className="text-3xl sm:text-3xl font-bold text-white mb-8 sm:mb-8">
                Soft Skills
              </h3>
              <div className="grid grid-cols-2 gap-6 sm:gap-6">
                {[
                  { name: "Leadership", icon: "fas fa-crown" },
                  { name: "Communication", icon: "fas fa-comments" },
                  { name: "Teamwork", icon: "fas fa-handshake" },
                  { name: "Adaptability", icon: "fas fa-sync-alt" },
                  { name: "Creativity", icon: "fas fa-lightbulb" },
                  { name: "Problem Solving", icon: "fas fa-puzzle-piece" },
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 p-6 sm:p-6 rounded-lg text-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/20 animate-bounce-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <i
                      className={`${skill.icon} text-3xl sm:text-3xl text-green-400 mb-4 sm:mb-4 animate-pulse`}
                    ></i>
                    <h4 className="text-white font-semibold text-sm sm:text-sm">
                      {skill.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - SPECTACULAR PORTFOLIO */}
      <section
        id="projects"
        className="py-20 sm:py-20 bg-black relative overflow-hidden animate-fade-in"
      >
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-400/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 sm:px-6 relative z-10">
          <h2 className="text-5xl sm:text-6xl font-bold text-center mb-6 animate-fade-in leading-tight">
            <span className="text-white">MY</span>
            <span className="text-green-400 ml-2 animate-glow">PORTFOLIO</span>
          </h2>
          <p className="text-gray-400 text-center text-xl sm:text-xl mb-16 sm:mb-16 animate-slide-up px-4 sm:px-0 leading-relaxed">
            Crafting Visual Stories That Captivate & Inspire
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-green-400/30 animate-slide-up transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700 filter group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <button
                      onClick={() => window.open(project.youtubeUrl, "_blank")}
                      className="bg-green-400 text-black px-6 sm:px-6 py-3 sm:py-3 rounded-full font-bold hover:bg-green-300 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-green-400/50 animate-bounce-in text-base sm:text-base"
                    >
                      <i className="fab fa-youtube mr-2 animate-pulse"></i>
                      Watch Now
                    </button>
                  </div>
                  <div className="absolute top-4 left-4 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500">
                    <span className="bg-amber-200 text-black px-3 sm:px-3 py-1 rounded-full text-xs font-bold uppercase shadow-lg animate-pulse">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500">
                    <div className="w-8 h-8 bg-green-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <i className="fas fa-play text-green-400 text-sm animate-pulse"></i>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-6">
                  <h3 className="text-xl sm:text-xl font-bold text-white mb-3 sm:mb-3 group-hover:text-green-400 transition-colors duration-300 animate-fade-in leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 sm:mb-4 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 text-base sm:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-800 text-green-400 px-3 py-1 rounded text-xs font-medium hover:bg-green-400 hover:text-black transition-all duration-300 transform hover:scale-105 animate-bounce-in"
                        style={{ animationDelay: `${tagIndex * 0.1}s` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => window.open(project.youtubeUrl, "_blank")}
                    className="w-full bg-transparent border border-green-400 text-green-400 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-black transition-all duration-300 group-hover:border-green-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/30 text-base sm:text-base"
                  >
                    <i className="fas fa-external-link-alt mr-2 animate-pulse"></i>
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Portfolio Stats */}
          <div className="mt-16 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { number: "6+", label: "Featured Projects" },
              { number: "3+", label: "Companies Worked" },
              { number: "2+", label: "Years Experience" },
              { number: "100+", label: "Hours Edited" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 sm:p-6 rounded-lg hover:bg-gray-800 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-green-400/20 animate-bounce-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-3xl sm:text-3xl font-bold text-amber-200 mb-3 animate-pulse">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 sm:py-20 bg-gray-900 relative overflow-hidden animate-fade-in"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent"></div>
        <div className="max-w-6xl mx-auto px-6 sm:px-6 relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 sm:mb-16 animate-fade-in leading-tight">
            <span className="text-white">GET IN</span>
            <span className="text-green-400 ml-2 animate-glow">TOUCH</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-16 sm:gap-16">
            <div className="animate-slide-in-left">
              <h3 className="text-3xl sm:text-3xl font-bold text-amber-200 mb-8 sm:mb-8">
                Let's Work Together
              </h3>
              <p className="text-gray-300 text-lg sm:text-lg mb-8 sm:mb-8 leading-relaxed">
                Ready to bring your vision to life? I'm always excited to work
                on new projects and collaborate with creative minds.
              </p>
              <div className="space-y-6 sm:space-y-6">
                <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                  <div className="w-14 h-14 bg-green-400 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-green-400/50 animate-pulse">
                    <i className="fas fa-map-marker-alt text-black text-lg"></i>
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors text-base sm:text-base">
                    Egypt
                  </span>
                </div>
                <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                  <div className="w-14 h-14 bg-green-400 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-green-400/50 animate-pulse">
                    <i className="fas fa-envelope text-black text-lg"></i>
                  </div>
                  <a
                    href="mailto:eydookhairy@gmail.com"
                    className="text-gray-300 group-hover:text-green-400 transition-colors text-base sm:text-base break-all"
                  >
                    eydookhairy@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                  <div className="w-14 h-14 bg-green-400 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-green-400/50 animate-pulse">
                    <i className="fas fa-phone text-black text-lg"></i>
                  </div>
                  <a
                    href="tel:+2001004567328"
                    className="text-gray-300 group-hover:text-green-400 transition-colors text-base sm:text-base"
                  >
                    +20 010 0456 7328
                  </a>
                </div>
                <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                  <div className="w-14 h-14 bg-green-400 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-green-400/50 animate-pulse">
                    <i className="fab fa-instagram text-black text-lg"></i>
                  </div>
                  <a
                    href="https://www.instagram.com/khairy_ve?igsh=aXMzZW9kajIzMDgx"
                    target="_blank"
                    className="text-gray-300 group-hover:text-green-400 transition-colors text-base sm:text-base"
                  >
                    @khairy_ve
                  </a>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right mt-12 md:mt-0">
              <form className="space-y-6 sm:space-y-6">
                <div className="animate-slide-up">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-6 sm:px-6 py-4 sm:py-4 bg-gray-800 border border-gray-700 rounded-none text-white placeholder-gray-400 focus:outline-none focus:border-amber-200 focus:shadow-lg focus:shadow-amber-200/20 transition-all duration-300 hover:border-gray-600 text-base sm:text-base"
                  />
                </div>
                <div
                  className="animate-slide-up"
                  style={{ animationDelay: "0.1s" }}
                >
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-6 sm:px-6 py-4 sm:py-4 bg-gray-800 border border-gray-700 rounded-none text-white placeholder-gray-400 focus:outline-none focus:border-amber-200 focus:shadow-lg focus:shadow-amber-200/20 transition-all duration-300 hover:border-gray-600 text-base sm:text-base"
                  />
                </div>
                <div
                  className="animate-slide-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  <input
                    type="text"
                    placeholder="Project Type"
                    className="w-full px-6 sm:px-6 py-4 sm:py-4 bg-gray-800 border border-gray-700 rounded-none text-white placeholder-gray-400 focus:outline-none focus:border-amber-200 focus:shadow-lg focus:shadow-amber-200/20 transition-all duration-300 hover:border-gray-600 text-base sm:text-base"
                  />
                </div>
                <div
                  className="animate-slide-up"
                  style={{ animationDelay: "0.3s" }}
                >
                  <textarea
                    placeholder="Tell me about your project..."
                    rows="6"
                    className="w-full px-6 sm:px-6 py-4 sm:py-4 bg-gray-800 border border-gray-700 rounded-none text-white placeholder-gray-400 focus:outline-none focus:border-amber-200 focus:shadow-lg focus:shadow-amber-200/20 transition-all duration-300 hover:border-gray-600 text-base sm:text-base"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-400 text-black py-4 sm:py-4 rounded-none font-bold hover:bg-green-300 transition-all duration-300 uppercase tracking-wide transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/50 animate-bounce-in text-base sm:text-base"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8 sm:py-8 relative overflow-hidden animate-fade-in">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 via-transparent to-green-400/5"></div>
        <div className="max-w-6xl mx-auto px-6 sm:px-6 relative z-10">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0">
            <div className="text-2xl sm:text-2xl font-bold animate-fade-in">
              <span className="text-white">EYAD</span>
              <span className="text-yellow-400 ml-1 animate-glow">KHAIRY</span>
            </div>
          </div>
          <div className="text-center mt-8 sm:mt-8 pt-8 sm:pt-8 border-t border-gray-800">
            <p className="text-gray-400 animate-fade-in text-base sm:text-base">
              All rights reserved by{" "}
              <a
                href="https://www.instagram.com/webbiix?igsh=MXRpZ2UyYXoyd3d1YQ=="
                target="_blank"
                className="text-yellow-400 font-bold hover:text-yellow-300 transition-all duration-300 transform hover:scale-110 inline-block hover:shadow-lg hover:shadow-yellow-400/50 animate-glow cursor-pointer relative group"
              >
                webbiix
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-300 group-hover:w-full transition-all duration-300"></span>
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Font Awesome CDN */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/js/all.min.js"></script>

      {/* Advanced Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 20px #4ade80, 0 0 30px #4ade80, 0 0 40px #4ade80; }
          50% { text-shadow: 0 0 10px #4ade80, 0 0 20px #4ade80, 0 0 30px #4ade80; }
        }
        @keyframes growWidth {
          from { width: 0; }
          to { width: var(--target-width); }
        }
        
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .animate-slide-up { animation: slideUp 0.8s ease-out forwards; }
        .animate-slide-in-left { animation: slideInLeft 1s ease-out forwards; }
        .animate-slide-in-right { animation: slideInRight 1s ease-out forwards; }
        .animate-bounce-in { animation: bounceIn 0.8s ease-out forwards; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .animate-grow-width { animation: growWidth 2s ease-out forwards; }
        
        /* Smooth scrolling */
        html { scroll-behavior: smooth; }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #1f2937; }
        ::-webkit-scrollbar-thumb { 
          background: linear-gradient(to bottom, #4ade80, #22c55e); 
          border-radius: 4px; 
        }
        ::-webkit-scrollbar-thumb:hover { background: linear-gradient(to bottom, #22c55e, #16a34a); }
      `}</style>
    </div>
  );
}

export default MainComponent;