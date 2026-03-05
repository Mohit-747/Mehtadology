import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, ClipboardCheck, Ruler, Hammer, Plug, ArrowDown, FileText, Database, Code, UserCog } from "lucide-react";
import { cn } from "@/lib/utils";

const pipelineSteps = [
  {
    id: 1,
    title: "The Assessor Agent",
    subtitle: "Diagnostic Phase",
    icon: ClipboardCheck,
    description: "Interfaces with the client via a chat UI or document upload portal. It asks targeted questions based on Mehtadology’s '2026 Agentic AI Readiness Model,' ingests their organizational charts, and analyzes their standard operating procedures (SOPs).",
    output: "A detailed 'Gap Analysis' report identifying manual bottlenecks and scoring them on readiness.",
    outputIcon: FileText,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20"
  },
  {
    id: 2,
    title: "The Architect Agent",
    subtitle: "Planning Phase",
    icon: Ruler,
    description: "Takes the Assessor’s gap analysis and maps the missing pieces to standard AI solutions. For example, if the client has heavy manual customer support, the Architect proposes a 'Customer Support Swarm.'",
    output: "A technical blueprint, including required vector stores, API endpoints, and the necessary organizational 'Task Fit Matrix.'",
    outputIcon: Database,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20"
  },
  {
    id: 3,
    title: "The Scaffolding Agent",
    subtitle: "Build Phase",
    icon: Hammer,
    description: "Translates the blueprint into boilerplate code. It generates the system prompts, sets up the LangChain/CrewAI logic, and writes the Dockerfiles and FastAPI wrappers.",
    output: "A downloadable repository of the semi-complete AI agents.",
    outputIcon: Code,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20"
  },
  {
    id: 4,
    title: "The Integration Phase",
    subtitle: "Human-in-the-Loop",
    icon: Plug,
    description: "This is where the automation stops and you step in. You take the scaffolded agents, connect them securely to the client's live databases (CRM, ERPs), implement the 'Kill Switch' governance Mehtadology emphasizes, and deploy.",
    output: "A fully deployed, secure, and governed agentic system integrated into your live environment.",
    outputIcon: UserCog,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20"
  }
];

export default function AgenticFoundry() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-amber-500/30 relative">
      {/* Global Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-zinc-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-6">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </Link>
        </div>
      </nav>

      <div className="relative pt-32 pb-20 px-6 overflow-hidden z-10">
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-sm text-amber-400 font-medium tracking-wide uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
              The Framework
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">The "Agentic Foundry" Pipeline</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We don't just build agents; we build the factory that builds the agents. 
              A structured, multi-agent workflow that accelerates transformation from diagnosis to deployment.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500/0 via-amber-500/50 to-amber-500/0 -translate-x-1/2 hidden md:block" />

            <div className="space-y-24">
              {pipelineSteps.map((step, index) => (
                <PipelineStep key={step.id} step={step} index={index} />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-32 text-center"
          >
            <Link 
              to="/#contact" 
              className="inline-flex items-center gap-3 px-12 py-6 bg-amber-400 text-black font-bold text-xl rounded-full hover:bg-amber-300 transition-colors shadow-[0_0_30px_-5px_rgba(251,191,36,0.5)]"
            >
              Start Your Foundry
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function PipelineStep({ step, index }: { step: typeof pipelineSteps[0], index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={cn(
        "relative flex flex-col md:flex-row items-center gap-12 md:gap-24",
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      {/* Center Node */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black border border-amber-500/50 z-20 hidden md:flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.3)]">
        <div className="w-4 h-4 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.8)]" />
      </div>

      {/* Content Card */}
      <div className="flex-1 w-full">
        <div className={cn(
          "group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 p-8 transition-all duration-500 hover:border-amber-500/50 hover:bg-zinc-900/80 hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.2)]",
          "text-left"
        )}>
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          
          <div className="flex items-center gap-4 mb-6">
            <div className={cn(
              "inline-flex items-center justify-center p-3 rounded-xl",
              step.bg, step.color
            )}>
              <step.icon className="w-8 h-8" />
            </div>
            <div>
              <div className="text-amber-500 text-sm font-bold tracking-widest uppercase mb-1">{step.subtitle}</div>
              <h3 className="text-2xl font-bold text-white">{step.title}</h3>
            </div>
          </div>
          
          <p className="text-gray-400 text-lg leading-relaxed mb-8 border-l-2 border-white/10 pl-4 group-hover:border-amber-500/50 transition-colors">
            {step.description}
          </p>

          <div className="bg-black/40 rounded-xl p-4 border border-white/5 flex items-start gap-4">
            <div className="p-2 bg-zinc-800 rounded-lg shrink-0">
              <step.outputIcon className="w-5 h-5 text-gray-400" />
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Output Artifact</div>
              <div className="text-gray-300 text-sm">{step.output}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for alignment */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}
