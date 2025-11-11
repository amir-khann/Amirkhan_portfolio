import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "amiraup17@gmail.com",
      href: "mailto:amiraup17@gmail.com",
      color: "primary",
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: "+966 55 214 9644",
      href: "tel:+966552149644",
      color: "secondary",
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Riyadh, Saudi Arabia",
      href: null,
      color: "accent",
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-12 sm:mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="text-primary font-mono text-lg sm:text-xl mr-2">05.</span>
                Get In Touch
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                I'm currently open to new opportunities and interesting projects. 
                Whether you have a question or just want to say hi, I'll get back to you!
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="relative group"
              >
                <div className={`absolute -inset-2 bg-gradient-to-r from-${info.color}/20 to-${info.color}/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                {info.href ? (
                  <a
                    href={info.href}
                    className="relative block bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all"
                  >
                    <div className={`inline-flex p-4 rounded-full bg-${info.color}/10 border border-${info.color}/20 mb-4`}>
                      <info.icon className={`w-6 h-6 text-${info.color}`} />
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{info.label}</p>
                    <p className="font-semibold text-foreground break-all">{info.value}</p>
                  </a>
                ) : (
                  <div className="relative bg-card border border-border rounded-2xl p-6 text-center">
                    <div className={`inline-flex p-4 rounded-full bg-${info.color}/10 border border-${info.color}/20 mb-4`}>
                      <info.icon className={`w-6 h-6 text-${info.color}`} />
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{info.label}</p>
                    <p className="font-semibold text-foreground">{info.value}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-xl opacity-30"></div>
              <a
                href="mailto:amiraup17@gmail.com"
                className="relative inline-block group px-8 sm:px-12 py-4 sm:py-6 bg-primary text-primary-foreground rounded-xl font-semibold text-lg sm:text-xl overflow-hidden transition-all hover:shadow-2xl hover:shadow-primary/50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FiMail />
                  Send Me An Email
                </span>
                <div className="absolute inset-0 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </a>
            </div>

            <div className="mt-12 sm:mt-16 flex items-center justify-center gap-6">
              <a
                href="https://github.com/amir-khann"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border-2 border-border hover:border-primary text-foreground hover:text-primary transition-all rounded-xl hover:shadow-lg hover:shadow-primary/20 group"
              >
                <FiGithub size={28} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://linkedin.com/in/amir-khan-babb22204"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border-2 border-border hover:border-primary text-foreground hover:text-primary transition-all rounded-xl hover:shadow-lg hover:shadow-primary/20 group"
              >
                <FiLinkedin size={28} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
