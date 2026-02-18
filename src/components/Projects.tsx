import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ExternalLink, Github } from "lucide-react";
import projectLoan from "@/assets/project-ai-analysis.jpg";
import projectStock from "@/assets/project-stock.jpg";
import projectSpeech from "@/assets/project-speech.jpg";
import projectTraffic from "@/assets/project-traffic.jpg";
import projectReID from "@/assets/project-reid.jpg";
import projectAgroAI from "@/assets/project-agroai.jpg";

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  technologies: string[];
  role: string;
  summary: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Multi-Camera People Re-ID for Smart Surveillance",
    image: projectReID,
    description:
      "A Re-ID system capable of tracking people across multiple CCTV feeds under varying lighting, angles, and environmental conditions.",
    technologies: ["YOLOv8", "OSNet", "DeepSORT", "PyTorch", "OpenCV", "NumPy"],
    role: "Computer Vision Engineer",
    summary:
      "Leveraged YOLOv8 for person detection, OSNet for deep appearance feature extraction, and DeepSORT + cosine matching for cross-camera identity association, enabling seamless tracking across distributed surveillance networks.",
  },
  {
    id: 2,
    title: "Loan Default Prediction Web App",
    image: projectLoan,
    description:
      "A machine learning-powered web application that predicts the likelihood of loan defaults based on customer financial data and credit history.",
    technologies: ["Python", "Flask", "scikit-learn", "Pandas", "HTML/CSS"],
    role: "Full-Stack Developer & ML Engineer",
    summary:
      "Built an end-to-end loan default prediction system with data preprocessing, feature engineering, model training (Random Forest, XGBoost), and a web interface for real-time predictions.",
  },
  {
    id: 3,
    title: "Stock Market Price Prediction",
    image: projectStock,
    description:
      "A predictive analytics project using historical stock data and machine learning algorithms to forecast future price movements.",
    technologies: ["Python", "LSTM", "TensorFlow", "Pandas", "Matplotlib"],
    role: "Data Scientist",
    summary:
      "Developed time-series forecasting models using LSTM neural networks to predict stock prices, with comprehensive data visualization and backtesting capabilities.",
  },
  {
    id: 4,
    title: "AI-Powered Speech Analysis System",
    image: projectSpeech,
    description:
      "An NLP-based system that analyzes speech patterns, sentiment, and key topics from audio transcriptions.",
    technologies: ["Python", "NLP", "Transformers", "Speech Recognition", "Flask"],
    role: "NLP Engineer",
    summary:
      "Created a speech analysis pipeline that transcribes audio, performs sentiment analysis, extracts key phrases, and generates comprehensive reports for speech coaching.",
  },
  {
    id: 5,
    title: "Bengaluru Traffic Prediction System",
    image: projectTraffic,
    description:
      "A predictive system that forecasts traffic congestion levels in Bengaluru using historical traffic data and machine learning.",
    technologies: ["Python", "ML", "GeoPandas", "scikit-learn", "Folium"],
    role: "Data Analyst & ML Developer",
    summary:
      "Built a traffic prediction model using gradient boosting algorithms, integrated with geospatial visualization to display traffic hotspots and predicted congestion zones.",
    github: "https://github.com/JaswanthhKumar22/BANGLORE-TRAFFIC-.git",
  },
  {
    id: 6,
    title: "AgroAI – Intelligent Farming Decision Support System",
    image: projectAgroAI,
    description:
      "An AI-powered smart farming advisory system that provides crop recommendations, yield predictions, and plant disease detection — all in one farmer-friendly dashboard with multilingual support.",
    technologies: ["Python", "Flask", "TensorFlow", "CNN", "scikit-learn", "Pandas", "HTML/CSS/JS"],
    role: "ML Engineer & Full-Stack Developer",
    summary:
      "Built an end-to-end farming decision support system featuring a Random Forest-based crop recommender using soil & weather parameters, regression models (XGBoost, Random Forest) for yield prediction, and a CNN-based plant disease classifier for leaf image analysis. Integrated a rule-based advisory engine for pesticide, fertilizer, and irrigation recommendations, with multilingual support for regional farmers.",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Projects
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-foreground">
            Digital Product Showcases
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/20 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-card rounded-2xl border border-border shadow-2xl"
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full aspect-video object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-card/90 hover:bg-destructive/10 transition-colors border border-border"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {selectedProject.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
                    Role
                  </h4>
                  <p className="text-foreground">{selectedProject.role}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
                    Summary
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.summary}
                  </p>
                </div>

                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold shadow-md hover:shadow-lg transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live
                  </motion.button>
                  {selectedProject.github && (
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-2 px-6 py-3 rounded-lg bg-card border border-border font-semibold hover:bg-muted transition-all"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
