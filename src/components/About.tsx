import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code2, Award, Users } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: "9.63", label: "CGPA" },
  { icon: Code2, value: "5+", label: "Projects" },
  { icon: Award, value: "6+", label: "Achievements" },
  { icon: Users, value: "GSSoC", label: "Open Source" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2">Get to know me</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-display font-semibold mb-6">
              A passionate developer & tech enthusiast
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hi! I'm Meghana Yenumula, a B.Tech Information Technology
                student at BVRIT Hyderabad College of Engineering for Women
                (2023-2027). I'm passionate about building innovative solutions
                that make a real impact.
              </p>
              <p>
                My journey spans Full Stack Development, AI/ML, and competitive
                programming. I've contributed to open source through GSSoC,
                achieved top rankings in coding contests, and built projects
                ranging from Zero-Day Attack Detection systems to GenAI art
                generators.
              </p>
              <p>
                Beyond coding, I'm an Amazon Future Engineer scholarship
                recipient and a Grace Hopper Celebration scholarship awardee. I
                believe in continuous learning and sharing knowledge with the
                community.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="font-display font-semibold mb-4 text-foreground">
                Education
              </h4>
              <div className="glass rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground">
                      B.Tech - Information Technology
                    </h5>
                    <p className="text-muted-foreground">
                      BVRIT Hyderabad College of Engineering for Women
                    </p>
                    <p className="text-sm text-primary mt-1">
                      2023-2027 • CGPA: 9.63/10.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="glass rounded-xl p-6 text-center hover:border-primary/50 transition-colors group"
              >
                <stat.icon
                  className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform"
                  size={32}
                />
                <p className="text-3xl font-display font-bold text-gradient">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
