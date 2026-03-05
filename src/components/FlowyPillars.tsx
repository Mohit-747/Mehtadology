import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { cn } from "@/lib/utils";
import { Brain, Database, Network, Shield, Users, Rocket, Zap, Layers, Code, LineChart, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface Pillar {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  border: string;
}

const pillars: Pillar[] = [
  {
    id: 1,
    title: "Strategic Alignment",
    description: "Defining AI goals aligned with your core business KPIs. We ensure AI isn't just a tool, but a strategic lever for growth.",
    icon: Rocket,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20"
  },
  {
    id: 2,
    title: "Data Sovereignty",
    description: "Ensuring clean, accessible, and governed data. Your data is your moat; we structure it for maximum AI leverage.",
    icon: Database,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20"
  },
  {
    id: 3,
    title: "Infrastructure Scalability",
    description: "Cloud and Edge readiness for high-performance AI workloads. Building the robust backbone your agents need to thrive.",
    icon: Layers,
    color: "text-amber-300",
    bg: "bg-amber-300/10",
    border: "border-amber-300/20"
  },
  {
    id: 4,
    title: "Agentic Orchestration",
    description: "Moving from simple chatbots to autonomous agents that plan, execute, and learn. The true power of Mehtadology 2.0.",
    icon: Brain,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20"
  },
  {
    id: 5,
    title: "Workflow Integration",
    description: "Seamlessly embedding AI into existing business processes. Automation that feels natural, not disruptive.",
    icon: Network,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20"
  },
  {
    id: 6,
    title: "Governance & Ethics",
    description: "Responsible AI, bias mitigation, and compliance. Building trust into every algorithm we deploy.",
    icon: Shield,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20"
  },
  {
    id: 7,
    title: "Human-AI Synergy",
    description: "Designing workflows where humans and AI co-create. Augmenting human potential, not replacing it.",
    icon: Users,
    color: "text-yellow-300",
    bg: "bg-yellow-300/10",
    border: "border-yellow-300/20"
  },
  {
    id: 8,
    title: "Security & Privacy",
    description: "Safeguarding proprietary data and models. Enterprise-grade security for your most valuable intellectual property.",
    icon: Code,
    color: "text-orange-300",
    bg: "bg-orange-300/10",
    border: "border-orange-300/20"
  },
  {
    id: 9,
    title: "Continuous Learning",
    description: "Systems that improve over time through RLHF and feedback loops. Your AI gets smarter every single day.",
    icon: Zap,
    color: "text-amber-200",
    bg: "bg-amber-200/10",
    border: "border-amber-200/20"
  },
  {
    id: 10,
    title: "Value Realization",
    description: "Measuring ROI and impact. Tangible results, clear metrics, and proven success in your digital transformation.",
    icon: LineChart,
    color: "text-yellow-200",
    bg: "bg-yellow-200/10",
    border: "border-yellow-200/20"
  }
];

export function FlowyPillars() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="relative w-full py-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Central Flow Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2 hidden md:block">
        <motion.div 
          style={{ scaleY, transformOrigin: "top" }}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-amber-200 via-yellow-500 to-amber-700 shadow-[0_0_15px_rgba(251,191,36,0.6)]"
        />
      </div>

      <div className="space-y-24 relative z-10">
        {pillars.map((pillar, index) => (
          <PillarCard key={pillar.id} pillar={pillar} index={index} />
        ))}
      </div>
    </div>
  );
}

const PillarCard: React.FC<{ pillar: Pillar; index: number }> = ({ pillar, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={cn(
        "flex flex-col md:flex-row items-center gap-8 md:gap-16",
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      {/* Content Side */}
      <div className={cn("flex-1 text-center md:text-left", !isEven && "md:text-right")}>
        <Link to={`/pillar/${pillar.id}`} className={cn(
          "group block relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 p-8 transition-all duration-500",
          "hover:border-amber-500/50 hover:bg-zinc-900/80",
          "hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.3)]", // 3D Shadow
          "hover:-translate-y-2" // 3D Lift
        )}>
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          
          <div className={cn(
            "relative z-10 inline-flex items-center justify-center p-3 rounded-xl mb-4 transition-transform duration-500 group-hover:scale-110",
            pillar.bg, pillar.color
          )}>
            <pillar.icon className="w-8 h-8" />
          </div>
          <h3 className="relative z-10 text-3xl font-bold text-white mb-3 tracking-tight group-hover:text-amber-100 transition-colors">{pillar.title}</h3>
          <p className="relative z-10 text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors">{pillar.description}</p>
          
          <div className="mt-6 flex items-center gap-2 text-amber-500 font-medium opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            Explore Pillar <span className="text-xl">→</span>
          </div>
        </Link>
      </div>

      {/* Center Marker (Desktop) */}
      <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-black border border-amber-500/30 relative z-20 shrink-0 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
        <div className={cn("w-4 h-4 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.8)]")} />
      </div>

      {/* Visual Side (Placeholder for now, maybe a mini-graphic or just empty space for balance) */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
};
