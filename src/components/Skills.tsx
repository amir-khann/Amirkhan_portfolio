import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCode, FiDatabase, FiLayers, FiTool } from "react-icons/fi";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      icon: FiCode,
      title: "Frontend",
      color: "primary",
      skills: [
        "React.js & Next.js",
        "JavaScript, TypeScript, ES6",
        "HTML & CSS",
        "Bootstrap, Material UI & Tailwind",
        "Ant Design & SASS",
        "React Hooks, Context API, Redux/Zustand",
      ],
    },
    {
      icon: FiDatabase,
      title: "Backend & Database",
      color: "secondary",
      skills: [
        "Node.js & Express.js",
        "MongoDB Atlas",
        "MySQL & PostgreSQL",
        "RESTful API creation",
        "Authentication & Authorization (JWT)",
        "Error handling & validation (Joi)",
      ],
    },
    {
      icon: FiLayers,
      title: "Development Tools",
      color: "accent",
      skills: [
        "Git for version control",
        "Visual Studio Code",
        "GitHub/GitLab",
        "npm & Docker",
        "MongoDB Compass",
        "React Developer Tools",
      ],
    },
    {
      icon: FiTool,
      title: "Testing & Optimization",
      color: "primary",
      skills: [
        "Jest & Playwright",
        "Unit Testing",
        "Postman",
        "Performance optimization",
        "Caching (Redis)",
        "Agile & CI/CD",
      ],
    },
  ];

  const softSkills = [
    "Communication",
    "Teamwork",
    "Problem Solving",
    "Debugging",
    "Mentor",
    "Agile",
  ];

  return (
    <section id="skills" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary font-mono text-lg sm:text-xl mr-2">02.</span>
              Skills & Expertise
              <div className="h-px bg-border mt-4 ml-0 sm:ml-8"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group relative"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-card border border-border rounded-2xl p-6 sm:p-8 h-full hover:border-primary/50 transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-lg bg-${category.color}/10 border border-${category.color}/20`}>
                      <category.icon className={`text-${category.color} w-6 h-6`} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold">{category.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.li
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.1 * index + 0.05 * skillIndex }}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className={`text-${category.color} mt-1`}>▹</span>
                        <span>{skill}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-xl opacity-20"></div>
            <div className="relative bg-card border border-border rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">Soft Skills</h3>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                {softSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + 0.1 * index }}
                    className="px-4 sm:px-6 py-2 sm:py-3 bg-muted border border-border rounded-full text-sm sm:text-base font-medium hover:border-primary hover:text-primary transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
