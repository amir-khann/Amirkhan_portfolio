import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      name: "Utirx",
      url: "https://utirx.com/",
      description: "Healthcare platform for prescription management and medication delivery",
      tags: ["React", "Node.js", "MongoDB", "Healthcare"],
      gradient: "from-primary to-secondary",
    },
    {
      name: "IdleBed Portal",
      url: "https://portal.idlebed.io/facility",
      description: "Facility management system for healthcare bed tracking and allocation",
      tags: ["React", "TypeScript", "Dashboard", "Real-time"],
      gradient: "from-secondary to-accent",
    },
    {
      name: "QSource",
      url: "https://www.qsource.org/",
      description: "Quality improvement organization platform for healthcare services",
      tags: ["Next.js", "CMS", "Healthcare", "Analytics"],
      gradient: "from-accent to-primary",
    },
    {
      name: "BrightUp",
      url: "https://www.getbrightup.com/",
      description: "Educational platform for student engagement and learning management",
      tags: ["React", "Education", "UI/UX", "Progressive Web App"],
      gradient: "from-primary via-secondary to-accent",
    },
    {
      name: "React Storybook",
      url: "https://amir-khann.github.io/React_Story_Book/",
      description: "Material-UI Component Storybook: A comprehensive React component library and design system management platform featuring 60+ interactive Material-UI components with enterprise theme customization capabilities.",
      tags: ["React", "Material-UI", "Storybook", "Enterprise"],
      gradient: "from-primary to-accent",
    },
    {
      name: "Khafif",
      url: "https://amir-khann.github.io/khafif/",
      description: "Restaurant app created in Next.js",
      tags: ["Next.js", "Restaurant", "App"],
      gradient: "from-secondary to-primary",
    },
  ];

  return (
    <section id="projects" className="py-20 sm:py-32 relative overflow-hidden">
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
              <span className="text-primary font-mono text-lg sm:text-xl mr-2">04.</span>
              Featured Projects
              <div className="h-px bg-border mt-4 ml-0 sm:ml-8"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group relative block"
              >
                <div className={`absolute -inset-2 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                <div className="relative bg-card border border-border rounded-2xl p-6 sm:p-8 h-full hover:border-primary/50 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${project.gradient} bg-opacity-10`}>
                      <div className="w-8 h-8 rounded border border-primary/20"></div>
                    </div>
                    <FiExternalLink className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-muted-foreground mb-6 text-sm sm:text-base">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs sm:text-sm font-mono bg-muted rounded-full border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 sm:mt-16 text-center"
          >
            <p className="text-muted-foreground text-base sm:text-lg mb-4">
              These are some of the projects I've worked on during my career
            </p>
            <div className="inline-block px-6 py-2 border border-border rounded-full text-sm font-mono text-muted-foreground">
              More projects available upon request
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
