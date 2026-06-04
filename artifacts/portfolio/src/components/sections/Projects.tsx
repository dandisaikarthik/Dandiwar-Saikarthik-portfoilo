import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const projects = [
  {
    title: "Automated Stroke Prediction",
    description: "Designed and trained ML classification models to predict stroke risk based on patient clinical health parameters. Achieved over 95% prediction accuracy using feature engineering, data preprocessing, and model tuning.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    github: "https://github.com/Dandikarthik",
    metric: "95%",
    metricLabel: "Accuracy"
  },
  {
    title: "Forest Wildfire Detection",
    description: "Built a real-time wildfire detection system using computer vision and image processing techniques. Achieved over 92% accuracy in detecting fire and smoke from live video streams.",
    tech: ["Python", "OpenCV", "Machine Vision"],
    github: "https://github.com/Dandikarthik",
    metric: "92%",
    metricLabel: "Accuracy"
  },
  {
    title: "Portfolio Website",
    description: "Designed and developed a fully responsive personal portfolio website to showcase projects and skills, featuring cinematic animations and a dark-first aesthetic.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Dandikarthik"
  },
  {
    title: "Hand Clap Counter",
    description: "Developed a real-time application that detects and counts hand claps using audio signal processing techniques and robust noise filtering.",
    tech: ["Python", "Audio Signal Processing"],
    github: "https://github.com/Dandikarthik"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 tracking-tight">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Systems and applications I've built to solve real problems.
            </p>
          </div>
          
          <a 
            href="https://github.com/Dandikarthik" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            View all on GitHub <ArrowRightIcon size={16} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col bg-card hover:bg-card/80 border-border hover:border-primary/50 transition-all duration-300 overflow-hidden group">
                <CardHeader className="relative pb-4">
                  {project.metric && (
                    <div className="absolute top-6 right-6 flex flex-col items-end">
                      <span className="text-3xl font-display font-bold text-primary group-hover:scale-110 transition-transform origin-right">
                        {project.metric}
                      </span>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                        {project.metricLabel}
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold font-display text-foreground pr-24 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <Badge key={t} variant="outline" className="bg-secondary/50 border-border/50 text-muted-foreground">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-4 border-t border-border/50">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    <Github size={18} /> Source Code
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Simple arrow component
function ArrowRightIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}