import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech – Artificial Intelligence & Machine Learning",
    institution: "St. Martin's Engineering College, Secunderabad (JNTUH)",
    period: "Dec 2021 – May 2025",
    score: "CGPA: 6.58",
  },
  {
    degree: "Intermediate – MPC",
    institution: "Sri Chaitanya Junior College, Hyderabad",
    period: "2019 – 2021",
    score: "82.5%",
  },
  {
    degree: "SSC",
    institution: "SR Prime School, Nizamabad",
    period: "2018 – 2019",
    score: "GPA: 9.0",
  }
];

export function Education() {
  return (
    <section id="education" className="py-24 bg-background relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 tracking-tight">
            Academic <span className="text-primary">Background</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 md:p-8 rounded-2xl bg-card border border-border flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1 md:mt-0">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h3>
                  <p className="text-muted-foreground">{edu.institution}</p>
                </div>
              </div>
              
              <div className="flex flex-col md:items-end gap-1 ml-16 md:ml-0 border-t md:border-t-0 border-border/50 pt-4 md:pt-0">
                <span className="text-sm font-medium px-3 py-1 rounded-full bg-secondary text-foreground w-fit">
                  {edu.period}
                </span>
                <span className="text-primary font-bold mt-2 md:mt-1">
                  {edu.score}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
