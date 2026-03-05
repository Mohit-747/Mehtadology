import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Rocket, Database, Layers, Brain, Network, Shield, Users, Code, Zap, LineChart, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const pillarDetails = {
  1: {
    title: "Strategic Alignment",
    icon: Rocket,
    meaning: "Strategic Alignment is the foundational step where we ensure that AI initiatives are not just technological experiments but are deeply rooted in the core business objectives. It involves mapping AI capabilities to specific Key Performance Indicators (KPIs) such as revenue growth, cost reduction, or customer satisfaction.",
    impact: "Mehtadology uses this pillar to prevent 'pilot purgatory.' We conduct workshops with C-suite executives to identify high-value use cases. By aligning AI strategy with business strategy, we ensure that every dollar spent on AI delivers measurable ROI. We create a roadmap that prioritizes projects based on feasibility and business impact.",
    color: "text-amber-400",
    bg: "bg-amber-400/10"
  },
  2: {
    title: "Data Sovereignty",
    icon: Database,
    meaning: "Data Sovereignty refers to the ownership, control, and quality of your data assets. It emphasizes that data is a strategic asset that must be clean, accessible, and governed. It also involves ensuring compliance with data privacy regulations and preventing vendor lock-in.",
    impact: "We implement robust data governance frameworks that ensure your data is AI-ready. Mehtadology helps you break down data silos, creating a unified 'single source of truth.' We establish protocols for data lineage and quality assurance, ensuring that your AI models are trained on reliable, high-quality data, which is crucial for accurate predictions and insights.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10"
  },
  3: {
    title: "Infrastructure Scalability",
    icon: Layers,
    meaning: "Infrastructure Scalability is about having the computational power and architectural flexibility to support growing AI workloads. It involves choosing the right mix of cloud, edge, and on-premise solutions to balance performance, cost, and latency.",
    impact: "Mehtadology designs future-proof architectures. Whether it's setting up scalable GPU clusters for training large models or optimizing inference pipelines for real-time applications, we ensure your infrastructure can handle the load. We leverage containerization (Kubernetes) and serverless technologies to allow your AI agents to scale dynamically with demand.",
    color: "text-amber-300",
    bg: "bg-amber-300/10"
  },
  4: {
    title: "Agentic Orchestration",
    icon: Brain,
    meaning: "Agentic Orchestration moves beyond static scripts to autonomous agents that can perceive, reason, act, and learn. It involves coordinating multiple specialized agents to solve complex, multi-step problems without constant human intervention.",
    impact: "This is the core of Mehtadology 2.0. We build multi-agent systems where a 'Manager Agent' breaks down tasks and delegates them to 'Worker Agents' (e.g., a Coder, a Researcher, a Reviewer). This allows for complex workflows like automated software development or full-cycle customer support to be executed autonomously, significantly increasing efficiency.",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10"
  },
  5: {
    title: "Workflow Integration",
    icon: Network,
    meaning: "Workflow Integration focuses on the 'last mile' of AI adoption—embedding AI tools seamlessly into the daily tools and processes your teams already use (like Slack, CRM, ERP). It ensures that AI enhances, rather than disrupts, existing workflows.",
    impact: "We don't just build models; we build plugins and APIs that bring intelligence to your fingertips. Mehtadology integrates AI agents directly into your Slack channels or Jira boards. For example, an AI agent can automatically draft responses to customer tickets within your helpdesk software, requiring only a one-click approval from a human agent.",
    color: "text-orange-400",
    bg: "bg-orange-400/10"
  },
  6: {
    title: "Governance & Ethics",
    icon: Shield,
    meaning: "Governance & Ethics ensures that AI systems are transparent, fair, and accountable. It involves establishing guardrails to prevent bias, hallucinations, and unintended consequences, ensuring that AI operates within legal and ethical boundaries.",
    impact: "Mehtadology implements 'Constitutional AI' frameworks where models are given a set of principles to follow. We set up automated red-teaming to test models for vulnerabilities and bias before deployment. This protects your brand reputation and ensures compliance with emerging regulations like the EU AI Act.",
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  7: {
    title: "Human-AI Synergy",
    icon: Users,
    meaning: "Human-AI Synergy is about designing systems where humans and AI complement each other's strengths. It focuses on 'human-in-the-loop' workflows where AI handles repetitive tasks and humans focus on creativity, strategy, and empathy.",
    impact: "We design interfaces that foster collaboration. Mehtadology builds 'Copilots' for your employees—intelligent assistants that offer suggestions, summarize information, and automate drudgery. We train your workforce to effectively prompt and guide these agents, turning every employee into a 10x producer.",
    color: "text-yellow-300",
    bg: "bg-yellow-300/10"
  },
  8: {
    title: "Security & Privacy",
    icon: Code,
    meaning: "Security & Privacy involves protecting your AI models and the data they process from adversarial attacks, leakage, and unauthorized access. It is critical for maintaining competitive advantage and customer trust.",
    impact: "Mehtadology employs enterprise-grade security practices. We use techniques like differential privacy and federated learning to train models without exposing raw sensitive data. We also secure the model weights themselves, treating them as high-value IP, and implement strict access controls for your agentic systems.",
    color: "text-orange-300",
    bg: "bg-orange-300/10"
  },
  9: {
    title: "Continuous Learning",
    icon: Zap,
    meaning: "Continuous Learning ensures that AI systems don't become stale. It involves setting up feedback loops where the model learns from new data and user interactions, constantly improving its performance over time.",
    impact: "We build 'Data Flywheels.' Mehtadology sets up pipelines where every user interaction (e.g., correcting an AI's draft) is captured and used to fine-tune the model. This means your custom AI agents get smarter and more aligned with your specific business context every single day they are in operation.",
    color: "text-amber-200",
    bg: "bg-amber-200/10"
  },
  10: {
    title: "Value Realization",
    icon: LineChart,
    meaning: "Value Realization is the commitment to tracking and proving the economic value of AI investments. It moves beyond hype to hard metrics like time saved, revenue generated, or error rates reduced.",
    impact: "Mehtadology builds custom dashboards that track the performance of your AI agents in real-time. We define clear success metrics upfront and provide regular reports on ROI. This transparency ensures continued stakeholder support and helps identify the most profitable areas for further AI expansion.",
    color: "text-yellow-200",
    bg: "bg-yellow-200/10"
  }
};

export default function PillarPage() {
  const { id } = useParams();
  const pillar = pillarDetails[Number(id) as keyof typeof pillarDetails];

  if (!pillar) {
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">Pillar not found</div>;
  }

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
            <ArrowLeft className="w-5 h-5" /> Back to Framework
          </Link>
        </div>
      </nav>

      <div className="relative pt-32 pb-20 px-6 overflow-hidden z-10">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className={cn(
              "inline-flex items-center justify-center p-4 rounded-2xl mb-6",
              pillar.bg, pillar.color
            )}>
              <pillar.icon className="w-12 h-12" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">{pillar.title}</h1>
          </motion.div>

          <div className="grid gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold text-amber-400 mb-4 flex items-center gap-3">
                <Brain className="w-6 h-6" /> What It Means
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                {pillar.meaning}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-amber-900/20 to-black border border-amber-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3 relative z-10">
                <CheckCircle2 className="w-6 h-6 text-amber-400" /> The Mehtadology Difference
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed relative z-10">
                {pillar.impact}
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <Link 
              to="/#contact" 
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-200 transition-colors"
            >
              Discuss This Pillar
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
