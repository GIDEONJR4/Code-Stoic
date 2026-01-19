import React, { useEffect, useRef } from "react";

export default function Hero2() {
  const boxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // When it enters the screen: Grow and Rise
          entry.target.classList.remove(
            "opacity-0",
            "translate-y-20",
            "scale-90",
          );
          entry.target.classList.add(
            "opacity-100",
            "translate-y-0",
            "scale-100",
          );
        } else {
          // When it leaves the screen: Reset to "hidden" state
          entry.target.classList.add("opacity-0", "translate-y-20", "scale-90");
          entry.target.classList.remove(
            "opacity-100",
            "translate-y-0",
            "scale-100",
          );
        }
      },
      {
        threshold: 0.1, // Trigger as soon as 10% is visible
        rootMargin: "0px 0px -50px 0px", // Optional: offsets the trigger slightly for better feel
      },
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        .poppins-font { font-family: 'Poppins', sans-serif; }
      `}</style>

      <div className="bg-white w-full py-20 poppins-font scroll-mt-96">
        <div
          ref={boxRef}
          /* TRANSITION SETTINGS:
             - Initial state: scale-90 and translate-y-20 (more dramatic rise)
             - duration-1000: keeps it smooth
          */
          className="max-w-5xl py-16 md:pl-24 md:w-full mx-4 md:mx-auto flex flex-col items-start justify-center text-left 
                     bg-gray-600 rounded-3xl p-10 text-white shadow-2xl
                     opacity-0 translate-y-20 scale-90 transition-all duration-1000 ease-out"
        >
          <h1 className="text-4xl md:text-[46px] md:leading-[60px] font-semibold max-w-xl">
            We are Enabling AI for Africa to Build the Future
          </h1>

          <p className=" mt-4 max-w-lg leading-relaxed text-lg">
            Empowering the next generation of African professionals. Connect
            with cutting-edge AI tools, resources, and a vibrant community to
            drive innovation and growth across the continent.
          </p>

          <button className="px-12 py-3 text-white  bg-red-700 hover:bg-red-600 transition-all rounded-full text-sm mt-8 font-medium shadow-lg hover:shadow-purple-500/20 active:scale-95">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}
