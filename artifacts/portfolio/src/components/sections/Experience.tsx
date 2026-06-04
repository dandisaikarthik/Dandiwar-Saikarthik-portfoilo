import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experience = [
  {
    company: "Vortexsoft Innovation Pvt. Ltd.",
    location: "Hyderabad",
    role: "Software Engineer Intern",
    period: "May 2025 – September 2025",
    bullets: [
      "Developed a full-fledged HRMS (Human Resource Management System) web application from concept to deployment.",
      "Built interactive, responsive frontend interfaces using React.js and TypeScript following component-based architecture.",
      "Designed and integrated backend REST APIs using Python Flask to support core HRMS functionalities.",
      "Contributed to end-to-end UI/UX design including wireframing and prototyping in Figma for an intuitive user experience.",
      "Collaborated with cross-functional team members to deliver features on schedule in an agile environment."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-background relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 tracking-tight">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Real-world impact shipping production-grade software.
          </p>
        </motion.div>

        <div className="relative border-l border-border pl-8 ml-4 md:ml-8 space-y-12">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                    {exp.role}
                  </h3>
                  <div className="text-lg text-primary font-medium mt-1 flex items-center gap-2">
                    <Briefcase size={16} />
                    {exp.company} <span className="text-muted-foreground text-sm">| {exp.location}</span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-sm font-medium text-muted-foreground h-fit">
                  <Calendar size={14} />
                  {exp.period}
                </div>
              </div>

              <ul className="space-y-3 text-muted-foreground mt-6">
                {exp.bullets.map((bullet, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (index * 0.2) + (i * 0.1) }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0" />
                    <span className="leading-relaxed">{bullet}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
