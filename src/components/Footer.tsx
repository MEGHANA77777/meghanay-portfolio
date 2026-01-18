import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center md:text-left"
          >
            <a
              href="#home"
              className="text-2xl font-display font-bold text-gradient"
            >
              Meghana.
            </a>
            <p className="text-muted-foreground text-sm mt-2">
              Building the future, one line of code at a time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://github.com/MEGHANA77777"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-lg hover:border-primary/50 transition-colors group"
            >
              <Github
                className="text-muted-foreground group-hover:text-primary transition-colors"
                size={20}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/meghanayenumula"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-lg hover:border-primary/50 transition-colors group"
            >
              <Linkedin
                className="text-muted-foreground group-hover:text-primary transition-colors"
                size={20}
              />
            </a>
            <a
              href="mailto:yenumulam97@gmail.com"
              className="p-3 glass rounded-lg hover:border-primary/50 transition-colors group"
            >
              <Mail
                className="text-muted-foreground group-hover:text-primary transition-colors"
                size={20}
              />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-8 pt-8 border-t border-border text-center"
        >
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            © {currentYear} Meghana Yenumula. Made with
            <Heart className="text-primary fill-primary" size={16} />
            All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
