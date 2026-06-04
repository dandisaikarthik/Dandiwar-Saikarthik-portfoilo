import { motion } from "framer-motion";
import { Lightbulb, Zap, Users, Brain, MessageSquare } from "lucide-react";

const strengths = [
  { name: "Creative Thinking", icon: Lightbulb, desc: "Finding innovative solutions to complex architectural challenges." },
  { name: "Quick Learner", icon: Zap, desc: "Rapidly adapting to new frameworks, languages, and paradigms." },
  { name: "Team Collaboration", icon: Users, desc: "Working seamlessly across disciplines to ship products." },
  { name: "Problem Solving", icon: Brain, desc: "Breaking down systemic issues into actionable engineering tasks." },
  { name: "Strong Communication", icon: MessageSquare, desc: "Translating technical constraints to business stakeholders." },
];

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 tracking-tight">
            About <span className="text-primary">Me</span>
          </h2>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Recent B.Tech graduate in Artificial Intelligence and Machine Learning with hands-on internship experience in full-stack web development and UI/UX design. Proficient in React.js, TypeScript, Python, and Python Flask. 
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-4">
              I have successfully built and delivered a production-grade HRMS web application end-to-end. I am deeply passionate about creating scalable, user-friendly software solutions with a strong eye for clean design and quality code.
            </p>
          </div>
        </motion.div>

        <div className="mt-20">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold font-display mb-8"
          >
            Why Hire Me?
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-[0_0_30px_rgba(var(--primary),0.1)] transition-all group"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-transform">
                  <strength.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-foreground">{strength.name}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{strength.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
