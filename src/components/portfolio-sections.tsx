import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  youtubeUrl: string;
  thumbnail: string;
  tags: string[];
}

interface PortfolioSectionsProps {
  projects: Project[];
  scrollToSection: (sectionId: string) => void;
}
export function PortfolioSections({ projects, scrollToSection }: PortfolioSectionsProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", projectType: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-24 relative overflow-hidden animate-fade-in"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80"></div>
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="mb-16">
            <div className="w-36 h-36 sm:w-40 sm:h-40 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mx-auto mb-8 flex items-center justify-center overflow-hidden shadow-2xl shadow-yellow-400/30 animate-pulse">
              <img
                src="https://i.ibb.co/99Fq3QM1/IMG-20250729-012538-121.jpg"
                alt="Eyad Khairy - Video Editor"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 animate-fade-in leading-tight">
              <span className="text-white">EYAD</span>
              <br />
              <span className="text-green-400 animate-glow">KHAIRY</span>
            </h1>
            <p className="text-2xl sm:text-2xl md:text-3xl text-gray-300 mb-4 animate-slide-up">
              VIDEO EDITOR
            </p>
            <p className="text-lg text-gray-400 mb-10 animate-slide-up px-4 sm:px-0 leading-relaxed">
              Based in Egypt • 2+ Years Experience • 18 Years Old
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-5 sm:space-y-0 sm:space-x-6 animate-bounce-in px-6 sm:px-0">
              <button
                onClick={() => scrollToSection("projects")}
                className="bg-green-400 text-black px-8 py-4 rounded-none font-bold hover:bg-green-300 transition-all duration-300 uppercase tracking-wide transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/50"
              >
                View Portfolio
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border border-yellow-400 text-yellow-400 px-8 py-4 rounded-none font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300 uppercase tracking-wide transform hover:scale-105"
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
        className="py-20 bg-gray-900 relative overflow-hidden animate-fade-in"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-transparent"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight">
                <span className="text-white">ABOUT</span>
                <span className="text-green-400 ml-2 animate-glow">ME</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a passionate and skilled video editor based in Egypt, with
                over 2 years of experience in the industry. Despite being just
                18 years old, I've already worked with top companies and built a
                strong portfolio.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Driven by a passion for visual storytelling, I'm committed to
                creating content that stands out. I specialize in creating
                engaging video content while maintaining the highest
                professional standards.
              </p>
              <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-yellow-400 transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-yellow-400/20">
                <p className="text-gray-300 italic leading-relaxed">
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
              <p className="text-gray-400 animate-fade-in">
                Video Editor & Creative Storyteller
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 bg-black relative overflow-hidden animate-fade-in"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-400/10 via-transparent to-green-400/5"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 animate-fade-in leading-tight">
            <span className="text-white">EXPERIENCE</span>
            <span className="text-green-400 ml-2">&</span>
            <span className="text-white ml-2">LEADERSHIP</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-all duration-500 hover:shadow-2xl hover:shadow-green-400/20 animate-slide-up">
              <div className="w-16 h-16 bg-green-400 rounded-lg flex items-center justify-center mb-6 hover:shadow-lg hover:shadow-green-400/30 transition-all duration-300">
                <i className="fas fa-building text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 hover:scale-110 transition-transform duration-300 cursor-default">
                DTAG
              </h3>
              <p className="text-gray-300 mb-4">Video Editor</p>
              <p className="text-gray-400 leading-relaxed">
                Delivered high-quality video content for corporate
                communications and marketing campaigns.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-all duration-500 hover:shadow-2xl hover:shadow-green-400/20 animate-slide-up">
              <div className="w-16 h-16 bg-green-400 rounded-lg flex items-center justify-center mb-6 hover:shadow-lg hover:shadow-green-400/30 transition-all duration-300">
                <i className="fas fa-play-circle text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 hover:scale-110 transition-transform duration-300 cursor-default">
                OMEDIA
              </h3>
              <p className="text-gray-300 mb-4">Video Editor</p>
              <p className="text-gray-400 leading-relaxed">
                Created engaging video content for digital media platforms and
                social campaigns.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-all duration-500 hover:shadow-2xl hover:shadow-green-400/20 animate-slide-up">
              <div className="w-16 h-16 bg-green-400 rounded-lg flex items-center justify-center mb-6 hover:shadow-lg hover:shadow-green-400/30 transition-all duration-300">
                <i className="fas fa-users text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 hover:scale-110 transition-transform duration-300 cursor-default">
                YOUTH MEDIA
              </h3>
              <p className="text-gray-300 mb-4">Founder & Team Leader</p>
              <p className="text-gray-400 leading-relaxed">
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
        className="py-20 bg-gray-900 relative overflow-hidden animate-fade-in"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/5 to-transparent"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 animate-fade-in leading-tight">
            <span className="text-white">MY</span>
            <span className="text-green-400 ml-2 animate-glow">SKILLS</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <h3 className="text-3xl font-bold text-white mb-8">
                Technical Skills
              </h3>
              <div className="space-y-6">
                {[
                  { name: "Adobe Premiere Pro", level: 80 },
                  { name: "Adobe After Effects", level: 75 },
                  { name: "Color Grading", level: 70 },
                  { name: "SFX", level: 75 },
                ].map((skill, index) => (
                  <div key={index} className="animate-slide-up">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-white font-semibold">
                        {skill.name}
                      </span>
                      <span className="text-yellow-400 animate-pulse">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-green-400 to-green-500 h-3 rounded-full transition-all duration-2000 animate-grow-width shadow-lg shadow-green-400/30"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slide-in-right mt-12 md:mt-0">
              <h3 className="text-3xl font-bold text-white mb-8">
                Soft Skills
              </h3>
              <div className="grid grid-cols-2 gap-6">
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
                    className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/20 animate-bounce-in"
                  >
                    <i
                      className={`${skill.icon} text-3xl text-green-400 mb-4 animate-pulse`}
                    ></i>
                    <h4 className="text-white font-semibold text-sm">
                      {skill.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 bg-black relative overflow-hidden animate-fade-in"
      >
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl sm:text-6xl font-bold text-center mb-6 animate-fade-in leading-tight">
            <span className="text-white">MY</span>
            <span className="text-green-400 ml-2 animate-glow">PORTFOLIO</span>
          </h2>
          <p className="text-gray-400 text-center text-xl mb-16 animate-slide-up px-4 sm:px-0 leading-relaxed">
            Crafting Visual Stories That Captivate & Inspire
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-green-400/30 animate-slide-up transform hover:-translate-y-2"
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
                      className="bg-green-400 text-black px-6 py-3 rounded-full font-bold hover:bg-green-300 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-green-400/50 animate-bounce-in"
                    >
                      <i className="fab fa-youtube mr-2 animate-pulse"></i>
                      Watch Now
                    </button>
                  </div>
                  <div className="absolute top-4 left-4 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500">
                    <span className="bg-amber-200 text-black px-3 py-1 rounded-full text-xs font-bold uppercase shadow-lg animate-pulse">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500">
                    <div className="w-8 h-8 bg-green-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <i className="fas fa-play text-green-400 text-sm animate-pulse"></i>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300 animate-fade-in leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-800 text-green-400 px-3 py-1 rounded text-xs font-medium hover:bg-green-400 hover:text-black transition-all duration-300 transform hover:scale-105 animate-bounce-in"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => window.open(project.youtubeUrl, "_blank")}
                    className="w-full bg-transparent border border-green-400 text-green-400 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-black transition-all duration-300 group-hover:border-green-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/30"
                  >
                    <i className="fas fa-external-link-alt mr-2 animate-pulse"></i>
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Portfolio Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "6+", label: "Featured Projects" },
              { number: "3+", label: "Companies Worked" },
              { number: "2+", label: "Years Experience" },
              { number: "100+", label: "Hours Edited" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-green-400/20 animate-bounce-in"
              >
                <div className="text-3xl font-bold text-amber-200 mb-3 animate-pulse">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">
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
        className="py-20 bg-gray-900 relative overflow-hidden animate-fade-in"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 animate-fade-in leading-tight">
            <span className="text-white">GET IN</span>
            <span className="text-green-400 ml-2 animate-glow">TOUCH</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="animate-slide-in-left">
              <h3 className="text-3xl font-bold text-amber-200 mb-8">
                Let's Work Together
              </h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Ready to bring your vision to life? I'm always excited to work
                on new projects and collaborate with creative minds.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                  <div className="w-14 h-14 bg-green-400 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-green-400/50 animate-pulse">
                    <i className="fas fa-map-marker-alt text-black text-lg"></i>
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    Egypt
                  </span>
                </div>
                <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                  <div className="w-14 h-14 bg-green-400 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-green-400/50 animate-pulse">
                    <i className="fas fa-envelope text-black text-lg"></i>
                  </div>
                  <a
                    href="mailto:eydookhairy@gmail.com"
                    className="text-gray-300 group-hover:text-green-400 transition-colors break-all"
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
                    className="text-gray-300 group-hover:text-green-400 transition-colors"
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
                    rel="noopener noreferrer"
                    className="text-gray-300 group-hover:text-green-400 transition-colors"
                  >
                    @khairy_ve
                  </a>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right mt-12 md:mt-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="animate-slide-up">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-none text-white placeholder-gray-400 focus:outline-none focus:border-amber-200 focus:shadow-lg focus:shadow-amber-200/20 transition-all duration-300 hover:border-gray-600"
                  />
                </div>
                <div className="animate-slide-up">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-none text-white placeholder-gray-400 focus:outline-none focus:border-amber-200 focus:shadow-lg focus:shadow-amber-200/20 transition-all duration-300 hover:border-gray-600"
                  />
                </div>
                <div className="animate-slide-up">
                  <input
                    type="text"
                    name="projectType"
                    placeholder="Project Type"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-none text-white placeholder-gray-400 focus:outline-none focus:border-amber-200 focus:shadow-lg focus:shadow-amber-200/20 transition-all duration-300 hover:border-gray-600"
                  />
                </div>
                <div className="animate-slide-up">
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-none text-white placeholder-gray-400 focus:outline-none focus:border-amber-200 focus:shadow-lg focus:shadow-amber-200/20 transition-all duration-300 hover:border-gray-600"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-400 text-black py-4 rounded-none font-bold hover:bg-green-300 transition-all duration-300 uppercase tracking-wide transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/50 animate-bounce-in"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8 relative overflow-hidden animate-fade-in">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 via-transparent to-green-400/5"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0">
            <div className="text-2xl font-bold animate-fade-in">
              <span className="text-white">EYAD</span>
              <span className="text-yellow-400 ml-1">KHAIRY</span>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Eyad Khairy. All rights reserved. | Crafted with passion for visual storytelling.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
