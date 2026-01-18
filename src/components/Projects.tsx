import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Shield, Mic, Gamepad2, Dumbbell, Music, Coffee } from "lucide-react";

const projects = [
  {
  title: "Intelligent Document Chat with RAG",
  description:
    "An ongoing project focused on building an intelligent document-based conversational system using Retrieval-Augmented Generation (RAG). The system enables users to upload documents and interact with them through context-aware, accurate AI-powered chat, enhancing information retrieval and understanding.",
  tech: [
    "Python",
    "LangChain",
    "Vector Databases",
    "LLMs",
    "Embeddings",
    "Retrieval-Augmented Generation (RAG)"
  ],
  icon: Shield,
  github: "https://github.com/MEGHANA77777",
  date: "Ongoing",
},
  {
  title: "CapyLog",
  description:
    "An AI-powered journaling application focused on cognitive reframing to help users develop a more positive outlook on personal experiences. CapyLog encourages mindful reflection by transforming negative thoughts into healthier perspectives and offers a friendly capybara chatbot companion for emotional support and daily interaction.",
  tech: [
    "Next.js",
    "Tailwind CSS",
    "MongoDB",
    "Cohere AI",
    "Passage by OnePassword",
    "React"
  ],
  icon: Coffee,
  github: "https://github.com/MEGHANA77777/capylog",
  date: "Ongoing",
},
  {
    title: "Zero Day Attack Detection",
    description:
      "Developed a Streamlit-based application for Zero-Day Attack Detection that integrates Explainable AI (XAI) to provide real-time threat detection along with interpretable insights for enhanced cybersecurity decision-making.",
    tech: ["Python", "Streamlit", "XAI", "Machine Learning", "Cybersecurity"],
    icon: Shield,
    github: "https://github.com/MEGHANA77777",
    date: "July 2025",
    featured: true,
  },
  {
    title: "Audio Artistry",
    description:
      'Engineered a GenAI-based art generator that transformed voice inputs into visual imagery using Stability AI and transformer models, achieving real-time conversion with a seamless UI built in HTML, CSS, and JavaScript.',
    tech: ["JavaScript", "HTML/CSS", "Stability AI", "GenAI", "Transformers"],
    icon: Mic,
    github: "https://github.com/MEGHANA77777",
    date: "Feb 2025",
    featured: true,
  },
  {
    title: "ZippyGainz",
    description:
      "A modern fitness and workout tracking application built with JavaScript for health enthusiasts to monitor their progress and achieve fitness goals.",
    tech: ["JavaScript", "HTML", "CSS", "Web Development"],
    icon: Dumbbell,
    github: "https://github.com/MEGHANA77777/ZippyGainz",
    date: "2024",
  },
  {
    title: "LofiStudyBuddy",
    description:
      "A relaxing study companion application featuring lofi music integration to enhance focus and productivity during study sessions.",
    tech: ["JavaScript", "HTML", "CSS", "Audio API"],
    icon: Music,
    github: "https://github.com/MEGHANA77777/LofiStudyBuddy",
    date: "2024",
  },
  {
  title: "Color Lines Game",
  description:
    "A classic puzzle game implemented using Python and Tkinter where players align at least five balls of the same color horizontally, vertically, or diagonally. Features include dynamic grid sizes, intelligent pathfinding for valid moves, and a scoring system based on cleared lines.",
  tech: ["Python", "Tkinter", "Pathfinding Algorithms"],
  icon: Gamepad2,
  github: "https://github.com/MEGHANA77777/color-lines-game",
  date: "2024",
},
{
    title: "Space Invaders",
    description:
      "Secured 1st place among 100+ participants at Gameleon Expo by developing an advanced 'Space Invaders' game in Python using PyGame and Tkinter, showcasing real-time performance and visual precision.",
    tech: ["Python", "PyGame", "Tkinter", "Game Development"],
    icon: Gamepad2,
    github: "https://github.com/MEGHANA77777/PYTHON-PROJECT-SPACE-INVADERS",
    date: "Oct 2023",
    featured: true,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2">My recent work</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass rounded-xl overflow-hidden group hover:border-primary/50 transition-all duration-300 ${
                project.featured ? "lg:row-span-1" : ""
              }`}
            >
              {/* Header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                    <project.icon className="text-primary" size={24} />
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <p className="text-xs text-primary mb-2">{project.date}</p>
                <h3 className="text-xl font-display font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/MEGHANA77777"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass px-8 py-4 rounded-lg font-semibold hover:border-primary/50 transition-colors"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
