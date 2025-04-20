import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "../../../Components/Header";

function Hero() {
  const targetDate = new Date("2025-05-02T00:00:00");

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const [scrambledText, setScrambledText] = useState("Rang-E-Chinar 2.0");
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const originalText = "Rang-E-Chinar 2.0";

  const scrambleText = useCallback(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setScrambledText(
        originalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );
      if (iteration >= originalText.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 50);
  }, []);

  useEffect(() => {
    scrambleText();
    const intervalId = setInterval(scrambleText, 8000);
    return () => clearInterval(intervalId);
  }, [scrambleText]);

  useEffect(() => {
    Aos.init({ duration: 1000, anchorPlacement: "top-center", mirror: true });
  }, []);

  // Handle video error
  const handleVideoError = () => {
    console.error("Video failed to load");
    setVideoError(true);
  };

  return (
    <div className="relative min-h-screen overflow-hidden font-playfair">
      {/* Background with gradient matching image 2 */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-00 to-green-700 z-0"></div>
      
      {/* Background Video with higher opacity */}
      {!videoError ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-1 opacity-30"
          onError={handleVideoError}
        >
          <source src="/common/videoplayback.mp4" type="video/mp4" />
          <source src="/common/videoplayback.mp4" type="video/webm" />
        </video>
      ) : (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-800 to-green-700"></div>
      )}
      
      {/* Additional decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full z-2 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 opacity-60">
          <div className="w-full h-full bg-[url('/common/cherry-blossom.png')] bg-contain bg-no-repeat"></div>
        </div>
        <div className="absolute bottom-0 right-0 w-64 h-64 opacity-60">
          <div className="w-full h-full bg-[url('/common/cherry-blossom.png')] bg-contain bg-no-repeat transform rotate-180"></div>
        </div>
      </div>
      
      {/* Overlay with pink accents */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-900/30 to-transparent z-2"></div>
      
      <div className="relative z-10">
        <Header />
        
        <div className="pt-8 md:pt-24 p-6 md:p-20 text-white text-center">
          {/* Date Display */}
          <div 
            data-aos="fade-down" 
            className="inline-block px-8 py-3 rounded-full bg-pink-900/40 backdrop-blur-sm border border-pink-300/30 text-xl ss:text-2xl md:text-3xl font-cormorant text-white"
          >
            <span>2</span>
            <sup className="text-lg">nd</sup>
            <span className="mx-2">&</span>
            <span>3</span>
            <sup className="text-lg">rd</sup>
            <span className="ml-3">May 2025</span>
          </div>

          {/* "The Rhythm Begins In" section */}
          <div 
            data-aos="fade-up" 
            className="my-12 md:my-16 w-full flex justify-center"
          >
            <p className=" bg-color:blue text-xl ss:text-3xl md:text-4xl font-cursive font-cursive text-white px-6 py-3 border border-pink-900">
              ROOTS AND RHYTHMS 
            </p>
          </div>
          
          {/* Main Event Title */}
          <div className="mt-16 mb-12 flex justify-center items-center w-full overflow-hidden">
  <h1
    data-aos="zoom-in"
    className="text-5xl ss:text-7xl sm:text-8xl md:text-9xl font-bold font-serif text-white tracking-wider overflow-visible"
    style={{ 
      letterSpacing: '0.05em', 
      lineHeight: '1.1',
      textShadow: '9px -1px 0 rgba(17, 19, 17, 0.5), 1px -1px 0 rgba(25, 29, 25, 0.5), -1px 1px 0 rgba(22, 24, 22, 0.5), 1px 1px 0 rgba(35, 40, 35, 0.5)'
    }}
  >
    Rang-E-Chinar <span className="text-green-300">2.0</span>
  </h1>
</div>

          {/* Decorative divider */}
          <div data-aos="fade" className="flex justify-center my-8">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
          </div>

          {/* "The Rhythm Begins In" section */}
          <div 
            data-aos="fade-up" 
            className="my-12 md:my-16 w-full flex justify-center"
          >
            <p className="text-2xl ss:text-5xl md:text-4xl font-serif font-normal text-white px-6 py-3 border-b border-pink-200/50">
              The Rythm Begins In...
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="mt-10 md:mt-16 flex justify-center">
            <div className="w-full min-w-150 px-8 lg:px-32 flex flex-wrap gap-6 justify-center">
              {Object.entries(timeLeft).map(([unit, value], index) => (
                <div 
                  key={unit} 
                  data-aos="fade-up" 
                  data-aos-delay={index * 150} 
                  className="text-center px-4 md:px-6 py-3 md:py-5 bg-green-800/50 backdrop-blur-sm rounded-lg border border-green-300/30 shadow-lg shadow-green-900/20"
                >
                  <div className="block text-4xl md:text-6xl font-semibold text-white font-serif pb-2 md:pb-3">
                    {value}
                  </div>
                  <div className="block text-sm md:text-lg text-green-100/90 font-sans uppercase tracking-wider">
                    {unit}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Register Button */}
          <div className="mt-12 py-6 flex justify-center">
            <button 
              data-aos="fade-up" 
              data-aos-delay="500"
              className="px-8 py-4 rounded-full text-lg md:text-xl font-medium bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 border border-green-300/30 hover:border-green-300/60 hover:shadow-lg hover:shadow-green-500/30 transform hover:scale-105 transition-all duration-300 font-sans tracking-wider"
              onClick={() => window.open("https://rangechinar-registration-from.vercel.app", "_blank")}
            >
              REGISTER NOW
            </button>
          </div>
          <div className="mt-12 py-6 flex justify-center">
        <button 
          data-aos="fade-up" 
          data-aos-delay="500"
          className="px-8 py-4 rounded-full text-lg md:text-xl font-medium bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 border border-green-300/30 hover:border-green-300/60 hover:shadow-lg hover:shadow-green-500/30 transform hover:scale-105 transition-all duration-300 font-sans tracking-wider"
          onClick={() => window.open("/mapss.pdf", "_blank")}
        >
          RANG-E-CHINAR MAP
        </button>
      </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;