import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary font-mono text-lg sm:text-xl mr-2">01.</span>
              About Me
              <div className="h-px bg-border mt-4 ml-0 sm:ml-8"></div>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 sm:space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed"
            >
              <p>
                Experienced <span className="text-primary font-semibold">MERN Stack Developer</span> with 5+ years 
                of expertise in building responsive, user-friendly web applications. Skilled in developing full-stack 
                solutions using MongoDB, ExpressJs, ReactJs, and NodeJs, with a strong focus on UI/UX best practices.
              </p>
              
              <p>
                Proven ability to deliver <span className="text-secondary font-semibold">optimised, scalable, and maintainable</span> code. 
                In addition to development, I bring hands-on experience in Quality Assurance, enabling me to ensure 
                robust performance and high-quality deliverables through both manual and automated testing.
              </p>
              
              <p>
                Passionate about delivering seamless digital experiences by combining 
                <span className="text-accent font-semibold"> thoughtful design</span>, 
                <span className="text-primary font-semibold"> clean code</span>, and 
                <span className="text-secondary font-semibold"> thorough testing</span>.
              </p>

              <p>
                Experienced working with teams to produce impactful, leading-edge websites that 
                engage customers and deliver business results. Well-versed in design standards and user preferences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-card border border-border rounded-2xl p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-primary">Quick Facts</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 animate-pulse"></div>
                      <div>
                        <p className="font-semibold text-foreground">5+ Years Experience</p>
                        <p className="text-sm text-muted-foreground">Full Stack Development</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                      <div>
                        <p className="font-semibold text-foreground">MERN Stack Expert</p>
                        <p className="text-sm text-muted-foreground">MongoDB, Express, React, Node</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                      <div>
                        <p className="font-semibold text-foreground">QA & Testing</p>
                        <p className="text-sm text-muted-foreground">Manual & Automated Testing</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 animate-pulse" style={{ animationDelay: "0.6s" }}></div>
                      <div>
                        <p className="font-semibold text-foreground">UI/UX Focused</p>
                        <p className="text-sm text-muted-foreground">Responsive & User-Friendly</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
