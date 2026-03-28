import { motion } from "framer-motion";
import {
  BarChart3,
  Brain,
  MessageSquare,
  Globe,
  Database,
} from "lucide-react";

const services = [
  {
    title: "Data Analysis & Insights",
    description:
      "Transform raw data into actionable insights through exploratory analysis and visualization.",
    icon: BarChart3,
    color: "primary",
  },
  {
    title: "ML Model Development",
    description:
      "Build and deploy machine learning models tailored to solve specific business problems.",
    icon: Brain,
    color: "secondary",
  },
  {
    title: "NLP & LLM Solutions",
    description:
      "Develop natural language processing systems and integrate large language models.",
    icon: MessageSquare,
    color: "primary",
  },
  {
    title: "Web App & API Development",
    description:
      "Create full-stack prototypes and RESTful APIs for AI/ML applications.",
    icon: Globe,
    color: "secondary",
  },
  {
    title: "Database Design & Integration",
    description:
      "Design efficient database schemas and optimize queries for performance.",
    icon: Database,
    color: "primary",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-foreground">
            Expertise Services! Let's check it out
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  service.color === "primary"
                    ? "bg-primary/10"
                    : "bg-secondary/10"
                }`}
              >
                <service.icon
                  className={`w-7 h-7 ${
                    service.color === "primary"
                      ? "text-primary"
                      : "text-secondary"
                  }`}
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
