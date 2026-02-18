import { motion } from "framer-motion";
import {
  Brain,
  Code,
  Database,
  Server,
  Lightbulb,
} from "lucide-react";

const skillCategories = [
  {
    title: "Data Science & AI/ML",
    icon: Brain,
    skills: [
      "Machine Learning",
      "NLP",
      "LLM Integration",
      "Exploratory Data Analysis",
      "Model Development",
    ],
    color: "primary",
  },
  {
    title: "Programming & Libraries",
    icon: Code,
    skills: [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "scikit-learn",
      "Matplotlib",
      "Seaborn",
    ],
    color: "secondary",
  },
  {
    title: "Backend & Prototyping",
    icon: Server,
    skills: ["Flask", "REST APIs", "React (Basics)"],
    color: "primary",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["Oracle", "MySQL", "Schema Design", "Query Optimization"],
    color: "secondary",
  },
  {
    title: "Soft Skills",
    icon: Lightbulb,
    skills: ["Problem Solving", "Research-Driven Learning", "Product Thinking"],
    color: "primary",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            My Skills
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-foreground">
            Technical Expertise
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div
                className={`p-3 rounded-lg inline-block mb-4 ${
                  category.color === "primary"
                    ? "bg-primary/10"
                    : "bg-secondary/10"
                }`}
              >
                <category.icon
                  className={`w-6 h-6 ${
                    category.color === "primary"
                      ? "text-primary"
                      : "text-secondary"
                  }`}
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      category.color === "primary"
                        ? "bg-primary/10 text-primary"
                        : "bg-secondary/10 text-secondary"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
