import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiDownload } from "react-icons/fi";
import heroBg from "@/assets/hero-bg.jpg";
import cvFile from "@/assets/Amir_Khan_FS.pdf";

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 sm:mb-6"
          >
            <span className="text-primary font-mono text-sm sm:text-base md:text-lg">Hi, my name is</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-2 sm:mb-4"
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
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground font-mono">
              {displayedText}
              <span className="animate-pulse">|</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4"
          >
            Experienced MERN Stack Developer with <span className="text-primary font-semibold">5+ years</span> of expertise in building
            responsive, user-friendly web applications. Passionate about delivering seamless digital experiences through
            thoughtful design, clean code, and thorough testing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 text-sm sm:text-base"
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <FiMapPin className="text-primary" />
              <span>Riyadh, Saudi Arabia</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <FiPhone className="text-primary" />
              <a href="tel:+966570920737" className="font-mono hover:text-primary transition-colors">
                +966 57 092 0737
              </a>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <FiMail className="text-primary" />
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=amiraup17@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                amiraup17@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
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

            <div className="flex items-center gap-4 sm:gap-6">
              <a
                href="https://github.com/amir-khann"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border hover:border-primary text-foreground hover:text-primary transition-all rounded-lg hover:shadow-lg hover:shadow-primary/20"
              >
                <FiGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/amir-khan-babb22204"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border hover:border-primary text-foreground hover:text-primary transition-all rounded-lg hover:shadow-lg hover:shadow-primary/20"
              >
                <FiLinkedin size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-primary rounded-full"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
