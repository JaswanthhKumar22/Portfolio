import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-foreground">
            Designing Solutions, Not Just Visuals
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hey! I'm Jaswanth (you can call me{" "}
              <span className="text-primary font-semibold">Jassuuuu</span>), a
              Data Science student who loves turning data, code, and ideas into
              cool projects.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I work with AI/ML models, full-stack apps, and data analytics—
              basically anything that helps extract insights or build useful
              tools. I've explored areas like stock markets and finance, but
              recently shifted my focus more toward real-world AI and data
              projects that create practical impact.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm passionate about tech, curious about everything, and always
              learning something new.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Education Card */}
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Education
                  </h3>
                  <p className="text-foreground font-semibold">
                    B.Tech in Data Science
                  </p>
                  <p className="text-muted-foreground">
                    Manipal Institute of Technology
                  </p>
                  <p className="text-primary font-medium text-sm mt-2">
                    Expected Graduation: 2027
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Card */}
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <Briefcase className="w-6 h-6 text-secondary" />
                </div>
                <div className="space-y-5">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Experience
                  </h3>

                  {/* Suvidha Foundation */}
                  <div>
                    <p className="text-foreground font-semibold">
                      Machine Learning Intern
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Suvidha Foundation
                    </p>
                    <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                      Contributed to predictive models and data-driven solutions across the ML pipeline — data preprocessing, model training, evaluation, and optimization. Worked with NLP techniques and assisted in fine-tuning Transformer-based LLMs.
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {["Python", "Pandas", "NumPy", "scikit-learn", "NLP", "LLMs", "Transformers"].map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Zetheta */}
                  <div>
                    <p className="text-foreground font-semibold">
                      Cybersecurity Intern
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Zetheta
                    </p>
                    <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                      Gained hands-on experience in security analysis, vulnerability assessment, and risk identification. Assisted in implementing cybersecurity measures to protect digital assets.
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {["Cybersecurity", "Vulnerability Analysis", "Risk Assessment", "Security Best Practices"].map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded-full text-xs font-medium bg-secondary/10 text-secondary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
