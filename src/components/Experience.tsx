import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Full Stack Web Developer",
      company: "Technology Rivers",
      location: "Islamabad",
      period: "03/2022 - 10/2025",
      color: "primary",
      responsibilities: [
        "Designed and implemented intuitive, responsive user interfaces using React.js to enhance user experience across web and mobile platforms",
        "Collaborated with cross-functional teams to troubleshoot issues, apply best development practices, and deliver scalable full-stack solutions using the MERN stack",
        "Planned and developed UI components and admin dashboards that streamlined application management and improved usability for end-users",
        "Developed and maintained software for both desktop and mobile platforms, ensuring cross-device compatibility and performance",
        "Maintained deep expertise in React state management (Context API, Redux) and optimized rendering performance across complex component trees",
        "Refactored and modernized legacy codebase to align with current development standards",
        "Built reusable components and utility functions to accelerate development cycles",
        "Conducted manual and automated QA testing, including functional, regression, and performance tests",
        "Integrated testing frameworks (Jest) to validate frontend and backend logic",
      ],
    },
    {
      title: "Front End Developer",
      company: "AppLab",
      location: "Doha, Qatar",
      period: "02/2020 - 03/2022",
      color: "secondary",
      responsibilities: [
        "Provided Front End Website Development Using React.js, Material UI, Tailwind CSS and other CSS Frameworks",
        "Utilized HTML, CSS, and JavaScript to create visually appealing and responsive web pages that met client requirements",
        "Coded using HTML, CSS, and JavaScript to develop features for both mobile and desktop platforms",
        "Optimized site content for mobile devices using responsive design techniques",
        "Designed and updated layouts to meet usability and performance requirements",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary font-mono text-lg sm:text-xl mr-2">03.</span>
              Work Experience
              <div className="h-px bg-border mt-4 ml-0 sm:ml-8"></div>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent"></div>

              <div className="space-y-12 sm:space-y-16">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 * index }}
                    className="relative md:pl-12"
                  >
                    {/* Timeline Dot */}
                    <div className="hidden md:flex absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-card border-2 border-primary items-center justify-center">
                      <div className={`w-2 h-2 rounded-full bg-${exp.color} animate-pulse`}></div>
                    </div>

                    <div className="group relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative bg-card border border-border rounded-2xl p-6 sm:p-8 hover:border-primary/50 transition-all">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                          <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                              <FiBriefcase className={`text-${exp.color} w-5 h-5`} />
                              {exp.title}
                            </h3>
                            <p className="text-lg sm:text-xl font-semibold text-primary">
                              {exp.company}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <FiCalendar className={`text-${exp.color}`} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FiMapPin className={`text-${exp.color}`} />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        <ul className="space-y-3">
                          {exp.responsibilities.map((resp, respIndex) => (
                            <motion.li
                              key={respIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.4, delay: 0.2 * index + 0.05 * respIndex }}
                              className="flex items-start gap-3 text-muted-foreground text-sm sm:text-base"
                            >
                              <span className={`text-${exp.color} mt-1`}>▹</span>
                              <span>{resp}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 sm:mt-20 max-w-4xl mx-auto"
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-accent/20 via-primary/20 to-secondary/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-card border border-border rounded-2xl p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-2">
                  <span className="text-accent">🎓</span>
                  Education
                </h3>
                <div className="space-y-2">
                  <p className="text-lg sm:text-xl font-semibold text-foreground">
                    BS Computer Science
                  </p>
                  <p className="text-base sm:text-lg text-primary font-medium">
                    The University of Agriculture, Peshawar
                  </p>
                  <div className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground">
                    <FiCalendar className="text-accent" />
                    <span>09/2017 - 09/2021</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
