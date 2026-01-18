import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "C++", level: 85 },
      { name: "JavaScript", level: 88 },
      { name: "HTML/CSS", level: 92 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React.js", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Pandas", level: 85 },
      { name: "NumPy", level: 82 },
      { name: "Scikit-learn", level: 78 },
      { name: "PyGame", level: 88 },
      { name: "Tkinter", level: 85 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "VS Code", level: 95 },
      { name: "Jupyter Notebooks", level: 85 },
      { name: "Google Colab", level: 85 },
      { name: "Tableau", level: 75 },
      { name: "LaTeX", level: 70 },
    ],
  },
  {
    title: "Coursework",
    skills: [
      { name: "Data Structures & Algorithms", level: 90 },
      { name: "Object-Oriented Programming", level: 88 },
      { name: "Operating Systems", level: 82 },
      { name: "Database Management", level: 85 },
      { name: "AI/ML & NLP", level: 80 },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2">What I work with</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            My <span className="text-gradient">Skills</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
              className="glass rounded-xl p-6"
            >
              <h3 className="text-xl font-display font-semibold mb-6 text-gradient">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground font-medium">
                        {skill.name}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.15 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        className="h-full bg-gradient-primary rounded-full"
                      />
                    </div>
                  </div>
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
