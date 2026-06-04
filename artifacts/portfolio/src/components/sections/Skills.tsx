import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "TypeScript", "HTML", "CSS", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "Python Flask"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["Supervised Learning", "Classification", "Computer Vision"],
  },
  {
    title: "Design & UX",
    skills: ["Figma", "Adobe Photoshop", "Wireframing", "Prototyping", "Responsive Web Design"],
  },
  {
    title: "Developer Tools",
    skills: ["Git", "GitHub", "VS Code", "REST APIs", "Agile Teamwork"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 tracking-tight">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A comprehensive toolkit spanning frontend architecture, backend services, machine learning, and interface design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2 inline-block">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="px-4 py-2 text-sm font-medium bg-secondary hover:bg-primary/20 hover:text-primary transition-colors cursor-default border border-transparent hover:border-primary/30"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
