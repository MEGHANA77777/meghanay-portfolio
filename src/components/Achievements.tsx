import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Award, Star, Rocket, Code, Users, Sparkles } from "lucide-react";

const achievements = [
  {
    title: "LeetCode Weekly Contest 480",
    organization: "LeetCode",
    date: "Ongoing",
    description:
      "Achieved Global Rank 4158 (rating: 1669) and Rank 531 in CodeChef IICPC Codefest 2025 (Top 2%).",
    icon: Code,
  },
  {
  title: "Codess Café Mentee",
  organization: "Codess Café",
  date: "May 2025",
  description:
    "Selected as a Codess Café Mentee from 2,500+ applicants. Participated in mentorship-driven learning focused on technical growth, career development, and community-driven collaboration in tech.",
  icon: Trophy,
  highlight: true,
  },
  {
  title: "Agentblazer Champion",
  organization: "Salesforce",
  date: "December 2025",
  description:
    "Recognized as a Salesforce Agentblazer Champion for 2025. Earned 27 Trailblazer badges by completing hands-on modules in CRM, automation, AI-powered agents, and cloud-based business solutions.",
  icon: Award,
  highlight: true,
},
  {
  title: "Semi-Finalist – CXO-Innofest 2025 Hackathon",
  organization: "Cywayz CXO (Non-Profit Cybersecurity Organization)",
  date: "June 2025",
  description:
    "Selected among the top 200 teams at a national-level hackathon. Built a Zero-Day Attack Detection system focused on identifying previously unknown cybersecurity threats and enhancing proactive defense mechanisms.",
  icon: Users,
  highlight: true,
},
  {
    title: "HCL Tech Career Development - AI Track",
    organization: "HCL Technologies",
    date: "June 2025",
    description:
      "Completed AI with Machine Learning and NLP modules with a 95% score; currently pursuing Deep Learning module.",
    icon: Sparkles,
  },
  {
    title: "Amazon Future Engineer Bootcamp",
    organization: "Amazon",
    date: "March 2025",
    description:
      "Selected among top 1,000 female engineers across India for Amazon's prestigious AFE Bootcamp.",
    icon: Rocket,
    highlight: true,
  },
  {
    title: "Grace Hopper Celebration Scholarship",
    organization: "AnitaB.org",
    date: "Oct 2024",
    description:
      "Awarded to 800 global recipients recognizing commitment to inclusive technology; networked with women leaders.",
    icon: Award,
    highlight: true,
  },
   {
    title: "Open Source Contributor",
    organization: "Girl Script Summer Of Code",
    date: "Oct 2024",
    description:
      "Contributed to multiple high-impact web development repositories, enhancing frontend functionality and fixing critical bugs.",
    icon: Users,
  },
  {
    title: "Gameleon Project Expo - 1st Place",
    organization: "IIC and Tech Blitz",
    date: "Oct 2023",
    description:
      "Outperformed 100+ teams to win 1st place in a high-pressure gamethon, recognized for innovative gameplay design.",
    icon: Trophy,
    highlight: true,
  }
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="section-padding relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2">Recognition & Awards</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            My <span className="text-gradient">Achievements</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/20 hidden md:block" />

          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? "" : "md:text-right"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-primary rounded-full -translate-x-1/2 hidden md:block glow" />

                {/* Content */}
                <div
                  className={`${
                    index % 2 === 0
                      ? "md:col-start-1"
                      : "md:col-start-2 md:text-left"
                  }`}
                >
                  <div
                    className={`glass rounded-xl p-6 hover:border-primary/50 transition-all duration-300 ${
                      achievement.highlight
                        ? "border-primary/30 shadow-[0_0_30px_hsl(186_100%_50%/0.1)]"
                        : ""
                    }`}
                  >
                    <div
                      className={`flex items-center gap-4 mb-4 ${
                        index % 2 !== 0 ? "md:flex-row" : ""
                      }`}
                    >
                      <div className="p-3 bg-primary/20 rounded-lg">
                        <achievement.icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <p className="text-xs text-primary mb-1">
                          {achievement.date}
                        </p>
                        <h3 className="text-lg font-display font-semibold">
                          {achievement.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {achievement.organization}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                    {achievement.highlight && (
                      <div className="mt-4 flex items-center gap-2">
                        <Star className="text-primary fill-primary" size={16} />
                        <span className="text-xs text-primary font-medium">
                          Featured Achievement
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
