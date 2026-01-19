import React, { useState, useEffect } from "react";

export default function Hero1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const fullText = "Experience The Future of AI in Africa";
  const typingSpeed = 80;
  const restartDelay = 10000;

  useEffect(() => {
    let i = 0;
    let timeoutId;
    const type = () => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i));
        i++;
        timeoutId = setTimeout(type, typingSpeed);
      } else {
        timeoutId = setTimeout(() => {
          i = 0;
          setDisplayText("");
          type();
        }, restartDelay);
      }
    };
    type();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section id="home" className="bg-white w-full font-sans">
      {/* Navigation Container */}
      <nav className="w-full bg-white/50 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-gray-100">
        <div className="flex items-center justify-between p-4 md:px-16 lg:px-24 xl:px-32 ">
          {/* Logo */}
          <a href="#">
            <img src="f1.png" alt="Company Logo" className="h-10 w-auto" />
          </a>

          {/* Desktop Links (Visible only on md and up) */}
          <div className="hidden md:flex items-center gap-10 font-medium text-black">
            <a href="#home" className="hover:opacity-70">
              Home
            </a>
            <a href="#what-we-do" className="hover:opacity-70">
              What we do
            </a>
            <a href="#pricing" className="hover:opacity-70">
              Pricing
            </a>
            <a href="#cta" className="hover:opacity-70">
              Partner with Us
            </a>
            <a href="#footer" className="hover:opacity-70">
              FAQs
            </a>
          </div>

          {/* Contact Button (Visible only on md and up) */}
          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition md:block hidden">
            Contact Us
          </button>

          {/* Hamburger Button (Mobile only) */}
          <button
            className="md:hidden p-2 text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown (Pushes content down) */}
        <div
          className={`${
            isMenuOpen ? "max-h-screen border-t" : "max-h-0"
          } overflow-hidden transition-all duration-300 ease-in-out md:hidden bg-white`}
        >
          <div className="flex flex-col p-6 gap-6 font-medium text-lg text-black">
            <a href="#" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
            <a href="#" onClick={() => setIsMenuOpen(false)}>
              What we do
            </a>
            <a href="#" onClick={() => setIsMenuOpen(false)}>
              Pricing
            </a>
            <button className="bg-black text-white w-full py-4 rounded-xl">
              Contact Us
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center text-center mt-12 md:mt-32 px-4">
        {/* ... (Your Announcement and Typing Headline code remains the same) ... */}
        <div className="flex items-center gap-2 border border-slate-300 rounded-full px-4 py-2 mb-8 bg-white text-black">
          <span>New announcement on your inbox</span>
          <button className="font-semibold">Read more</button>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-black max-w-4xl leading-tight min-h-[2.4em]">
          {displayText}
          <span className="inline-block w-1 h-8 md:h-12 ml-1 bg-black animate-pulse align-middle"></span>
        </h1>

        <p className="text-black text-base md:text-lg max-w-2xl mt-6">
          We’re pioneering locally trained AI models and data platforms.
        </p>

        <div className="flex items-center gap-4 mt-10">
          <button className="bg-black text-white px-8 py-4 rounded-full font-semibold">
            Get Started
          </button>
          <button className="border border-black px-8 py-4  bg-white rounded-full font-semibold text-black hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
