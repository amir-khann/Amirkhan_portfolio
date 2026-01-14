import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiDownload } from "react-icons/fi";
import heroBg from "@/assets/hero-bg.jpg";
import cvFile from "@/assets/Amir_Khan_FS.pdf";
import profileImage from "@/assets/amir-profile.jpg";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Senior Full Stack Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90 z-10"></div>
        <img
          src={heroBg}
          alt="Technology background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow-pulse"></div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">

          {/* Left Column: Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 sm:mb-6 mt-4 sm:mt-0"
            >
              <span className="text-primary font-mono text-sm sm:text-base md:text-lg">Hi, my name is</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-6xl md:text-7xl font-bold mb-2 sm:mb-4"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x bg-[length:200%_auto]">
                Amir Khan
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-6 sm:mb-8 h-8 sm:h-10 md:h-12"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-muted-foreground font-mono">
                {displayedText}
                <span className="animate-pulse">|</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground w-full max-w-2xl mx-auto lg:mx-0 mb-8 sm:mb-12 leading-relaxed"
            >
              Experienced MERN Stack Developer with <span className="text-primary font-semibold">5+ years</span> of expertise in building
              responsive, user-friendly web applications. Passionate about delivering seamless digital experiences through
              thoughtful design, clean code, and thorough testing.
              <span className="sr-only">Looking for the best frontend developer in KSA? Experineced in React and Modern Web Tech.</span>
            </motion.p>



            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6"
            >
              <a
                href="#contact"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-lg font-medium text-base sm:text-lg overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/50 w-full sm:w-auto"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </a>

              <a
                href={cvFile}
                download="Amir_Khan_CV.pdf"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-background border border-primary text-primary rounded-lg font-medium text-base sm:text-lg overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/20 w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FiDownload />
                  Download CV
                </span>
                <div className="absolute inset-0 bg-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </a>


            </motion.div>
          </div>

          {/* Right Column: Image */}
          <div className="hidden lg:flex w-full lg:w-1/2 justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
            >
              {/* Decorative Circle Behind */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent blur-2xl"></div>

              {/* Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background ring-4 ring-primary/20 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Amir Khan Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge (optional for extra flair) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-4 -left-4 bg-card/80 backdrop-blur-md border border-primary/50 text-foreground py-2 px-4 rounded-lg shadow-lg hidden sm:block"
              >
                <span className="text-2xl">💻</span>
                <span className="font-mono text-sm font-bold ml-2">Open for Work</span>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
