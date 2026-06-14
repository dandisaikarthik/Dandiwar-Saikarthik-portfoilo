import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Sparkles } from "lucide-react";

const socials = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/saikarthik",
    color: "hover:text-white hover:bg-foreground",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/saikarthik",
    color: "hover:text-white hover:bg-blue-600",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/saikarthik",
    color: "hover:text-white hover:bg-sky-500",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:dandisaikarthik@gmail.com",
    color: "hover:text-white hover:bg-primary",
  },
];

const details = [
  { icon: Mail, label: "dandisaikarthik@gmail.com", href: "mailto:dandisaikarthik@gmail.com" },
  { icon: Phone, label: "+91 9553466446", href: "tel:+919553466446" },
  { icon: MapPin, label: "Hyderabad, India", href: null },
];

export function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden border-t border-border">
      {/* Animated background blobs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-600 text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Open to Full-Time & Internship Roles
          </span>
        </motion.div>

        {/* Big headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-6"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-display tracking-tight leading-none">
            Let's Build{" "}
            <span className="relative inline-block">
              <span className="text-primary">Something</span>
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
                style={{ originX: 0 }}
              />
            </span>
            <br />
            <span className="text-foreground">Amazing Together</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-12"
        >
          I'm a B.Tech AI/ML graduate actively looking for opportunities.
          One email away from your next great hire.
        </motion.p>

        {/* Big CTA button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mb-16"
        >
          <motion.a
            href="mailto:dandisaikarthik@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-primary text-white font-bold text-xl shadow-[0_0_40px_rgba(234,88,12,0.4)] hover:shadow-[0_0_60px_rgba(234,88,12,0.6)] transition-shadow duration-300"
          >
            <Sparkles className="w-5 h-5 animate-pulse" />
            Hire Me — dandisaikarthik@gmail.com
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </motion.div>

        {/* Divider with OR */}
        <div className="flex items-center gap-4 max-w-md mx-auto mb-12">
          <div className="flex-1 h-px bg-border" />
          <span className="text-muted-foreground text-sm font-medium">or reach out via</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-4 mb-16"
        >
          {socials.map(({ icon: Icon, label, href, color }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl border border-border bg-card text-muted-foreground font-medium text-sm transition-all duration-200 ${color}`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </motion.a>
          ))}
        </motion.div>

        {/* Contact detail chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {details.map(({ icon: Icon, label, href }) => (
            <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm text-muted-foreground">
              <Icon className="w-4 h-4 text-primary" />
              {href ? (
                <a href={href} className="hover:text-primary transition-colors font-medium">{label}</a>
              ) : (
                <span className="font-medium">{label}</span>
              )}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
