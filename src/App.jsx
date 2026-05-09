import React, { useState, useEffect } from 'react';
import { MdMenu, MdClose, MdMail, MdOpenInNew } from 'react-icons/md';
import { 
  FaLinkedin, FaBookOpen, FaGraduationCap, FaBriefcase, 
  FaCode, FaBrain, FaCar, FaAward, FaGlobe, FaDatabase, FaArrowRight 
} from 'react-icons/fa';
import './App.css';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Smooth scroll & Entrance Animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="portfolio-container">
      {/* Navbar - Fixed with Glassmorphism */}
      <nav className="navbar">
        <div className="navbar-inner">
          <div className="logo">
            <span className="logo-mobile">mohammad shakeel portfolio</span>
            <span className="logo-desktop">Mohammad Shakeel</span>
          </div>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            <a href="#about" className="nav-link">About</a>
            <a href="#research" className="nav-link">Research</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#contact" className="nav-btn-contact hover-lift">Contact</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="mobile-menu-toggle" onClick={toggleSidebar}>
            {isSidebarOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div className={`mobile-dropdown ${isSidebarOpen ? 'open' : ''}`}>
        <div className="mobile-dropdown-inner">
          <a href="#about" className="mobile-nav-link" onClick={toggleSidebar}>About</a>
          <a href="#research" className="mobile-nav-link" onClick={toggleSidebar}>Research</a>
          <a href="#experience" className="mobile-nav-link" onClick={toggleSidebar}>Experience</a>
          <a href="#skills" className="mobile-nav-link" onClick={toggleSidebar}>Skills</a>
          <a href="#contact" className="mobile-contact-btn" onClick={toggleSidebar}>Contact</a>
        </div>
      </div>

      <main className="main-content">

        {/* Hero Section */}
        <section className="hero-section reveal-on-scroll">
          {/* Animated Square Matrix Background */}
          <div className="hero-matrix-bg"></div>

          <div className="hero-inner">
            <div className="hero-badge-pill">
              <span className="orange-dot"></span>
              AI RESEARCH SCHOLAR · ASSISTANT PROFESSOR
            </div>

            <h1 className="hero-title">
              Mohammad<br />Shakeel
            </h1>

            {/* Profile Image with Floating Badges */}
            <div className="hero-image-wrapper reveal-on-scroll delay-1">
              <img 
                src="https://res.cloudinary.com/dppiuypop/image/upload/v1778302345/uploads/bf6majpkpcgculmz1pyf.jpg" 
                alt="Mohammad Shakeel" 
                className="hero-profile-image hover-lift"
              />
              
              {/* Top Right Blue Badge */}
              <div className="floating-badge badge-top-right">
                <span className="badge-label">Pursuing</span>
                <span className="badge-value">PhD - AI & ML</span>
              </div>

              {/* Bottom Left White Badge */}
              <div className="floating-badge badge-bottom-left">
                <span className="badge-label">Current Position</span>
                <span className="badge-value">Asst. Professor</span>
              </div>
            </div>

            <p className="hero-subtitle">
              Dedicated to advancing computer science education and pioneering research in <strong>Intelligent Transportation Systems.</strong> Currently pursuing a <span className="text-premium-highlight">Ph.D. at SR University</span> under the guidance of <span className="text-premium-highlight">Dr. V. Sudha Rani</span>, backed by a decade of academic experience and a commitment to shaping the next generation of engineers.
            </p>

            <div className="hero-actions reveal-on-scroll delay-1">
              <div className="hero-buttons-group">
                <a href="#contact" className="btn-orange">
                  Contact Me <FaArrowRight size={12} />
                </a>
                <a href="https://scholar.google.com/citations?user=g1MdrbIAAAAJ&hl=en" target="_blank" rel="noreferrer" className="btn-outline">
                  <FaBookOpen size={14} /> Publications
                </a>
                <a href="https://www.linkedin.com/in/mohammad-shakeel-470a6b372" target="_blank" rel="noreferrer" className="btn-outline">
                  <FaLinkedin size={14} /> LinkedIn
                </a>
                <a href="https://orcid.org/0009-0004-2330-1284" target="_blank" rel="noreferrer" className="btn-outline">
                  <MdOpenInNew size={14} /> ORCID
                </a>
              </div>
            </div>

            <div className="hero-stats">
              <div className="stat-box reveal-on-scroll delay-1">
                <h3>10+</h3>
                <p>YEARS TEACHING</p>
              </div>
              <div className="stat-box reveal-on-scroll delay-2">
                <h3>Ph.D.</h3>
                <p>IN PROGRESS</p>
              </div>
              <div className="stat-box reveal-on-scroll delay-3">
                <h3>AI/ML</h3>
                <p>RESEARCH</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section reveal-on-scroll">
          <div className="about-content-wrapper">
            <div className="about-text">
              <span className="section-badge">ABOUT ME</span>
              <h2>Bridging foundational CS with cutting-edge AI.</h2>
              <p>
                I am an experienced educator and researcher currently pursuing my <span className="text-premium-highlight">Ph.D. at SR University</span>. With a decade of teaching experience in higher education, I focus on bridging the gap between foundational computer science principles and cutting-edge technological advancements. My academic journey is driven by a deep curiosity for how data and algorithms can solve real-world problems.
              </p>
            </div>
          </div>
        </section>

        {/* Research Focus */}
        <section id="research" className="research-section reveal-on-scroll">
          <span className="section-badge">RESEARCH & ACADEMIC FOCUS</span>
          <h2 className="research-title">Where intelligent algorithms meet modern infrastructure.</h2>

          <div className="research-grid">
            <div className="research-card hover-lift reveal-on-scroll delay-1">
              <div className="icon-circle icon-green-bg">
                <FaGraduationCap size={20} className="icon-dark-green" />
              </div>
              <div className="research-info">
                <h3>Current Pursuit</h3>
                <p><span className="text-premium-highlight">Ph.D. in Computer Science and Engineering</span> at <span className="text-premium-highlight">SR University</span>, Warangal.</p>
                <p style={{ marginTop: '0.4rem' }}><strong>Research Area:</strong> Artificial Intelligence and Machine Learning.</p>
              </div>
            </div>

            <div className="research-card hover-lift reveal-on-scroll delay-2">
              <div className="icon-circle icon-green-bg">
                <FaBookOpen size={20} className="icon-dark-green" />
              </div>
              <div className="research-info">
                <h3>Academic Background</h3>
                <p>M.Tech in Computer Science with a focus on advanced algorithms and systems.</p>
              </div>
            </div>

            <div className="research-card hover-lift reveal-on-scroll delay-3">
              <div className="icon-circle icon-green-bg">
                <FaBrain size={20} className="icon-dark-green" />
              </div>
              <div className="research-info">
                <h3>Research Title</h3>
                <p>Intelligent Transportation System — leveraging AI for safer, smarter mobility.</p>
              </div>
            </div>

            <div className="research-card hover-lift reveal-on-scroll delay-4">
              <div className="icon-circle icon-green-bg">
                <FaCar size={20} className="icon-dark-green" />
              </div>
              <div className="research-info">
                <h3>Domain Focus</h3>
                <p>AI & ML applied to optimize traffic flow, vehicular safety, and urban transit networks.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="experience-wrapper reveal-on-scroll">
          <div className="experience-dark-card hover-lift">

            <div className="exp-badge">
              <FaBriefcase size={12} />
              PROFESSIONAL EXPERIENCE
            </div>

            <h2 className="exp-title">Assistant Professor</h2>
            <p className="exp-subtitle">TKR College of Engineering · 10 Years</p>

            <p className="exp-desc">
              For the past decade, I have been deeply invested in academic instruction and student mentorship. I deliver comprehensive lectures on core computer science subjects, guide students through complex technical projects, and help them build practical, industry-ready skills.
            </p>

            <div className="exp-highlights-list">

              <div className="exp-highlight-card reveal-on-scroll delay-1">
                <FaAward className="highlight-icon" size={22} />
                <div className="highlight-text">
                  <strong>Mentorship</strong>
                  <p>Guiding student capstone & research projects</p>
                </div>
              </div>

              <div className="exp-highlight-card reveal-on-scroll delay-2">
                <FaBookOpen className="highlight-icon" size={22} />
                <div className="highlight-text">
                  <strong>Curriculum</strong>
                  <p>Core CS subjects & emerging technologies</p>
                </div>
              </div>

              <div className="exp-highlight-card reveal-on-scroll delay-3">
                <FaBrain className="highlight-icon" size={22} />
                <div className="highlight-text">
                  <strong>Industry-Ready</strong>
                  <p>Bridging theory with practical skills</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Skills & Core Subjects Section */}
        <section id="skills" className="skills-section reveal-on-scroll">
          <span className="section-badge">TECHNICAL SKILLS & CORE SUBJECTS</span>
          <h2 className="skills-title">Instructional expertise across core computer science subjects.</h2>

          <div className="skills-card-grid">

            <div className="skill-card-light hover-lift reveal-on-scroll delay-1">
              <FaCode className="skill-icon-orange" size={24} />
              <h3>Programming Languages</h3>
              <div className="skill-tags-light">
                <span>C</span>
                <span>C++</span>
                <span>Java</span>
                <span>Python</span>
              </div>
            </div>

            <div className="skill-card-light hover-lift reveal-on-scroll delay-2">
              <FaGlobe className="skill-icon-orange" size={24} />
              <h3>Web Technologies</h3>
              <div className="skill-tags-light">
                <span>HTML</span>
                <span>JavaScript</span>
              </div>
            </div>

            <div className="skill-card-light hover-lift reveal-on-scroll delay-3">
              <FaDatabase className="skill-icon-orange" size={24} />
              <h3>Database & Systems</h3>
              <div className="skill-tags-light">
                <span>DBMS</span>
                <span>SQL</span>
                <span>Data Modeling</span>
              </div>
            </div>

          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="contact-section-mint reveal-on-scroll">
          <span className="section-badge bg-white">CONTACT & CONNECT</span>
          <h2>Let's collaborate on research or academia.</h2>
          <p className="contact-subtitle">
            Always open to academic collaborations, research discussions, and professional networking.
          </p>

          <div className="contact-actions-grid">
            <a href="mailto:2503c50089@sru.edu.in" className="btn-contact-email hover-lift reveal-on-scroll delay-1">
              <MdMail size={20} /> 2503c50089@sru.edu.in
            </a>

            <div className="contact-socials-row">
              <a href="https://www.linkedin.com/in/mohammad-shakeel-470a6b372" target="_blank" rel="noreferrer" className="btn-contact-social hover-lift reveal-on-scroll delay-2">
                <FaLinkedin size={18} /> LinkedIn
              </a>
              <a href="https://orcid.org/0009-0004-2330-1284" target="_blank" rel="noreferrer" className="btn-contact-social hover-lift reveal-on-scroll delay-3">
                <MdOpenInNew size={18} /> ORCID
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="footer reveal-on-scroll">
        <div className="footer-content">
          <p>© 2026 Mohammad Shakeel. All rights reserved.</p>
          <p className="footer-role">AI Research Scholar · SR UNIVERSITY</p>
        </div>
      </footer>
    </div>
  );
}
