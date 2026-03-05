import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Circle, ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const questions = [
  {
    id: "q1",
    text: "Does your organization have a clearly defined AI strategy aligned with business goals?",
    options: ["No strategy yet", "In discussion", "Documented strategy", "Fully implemented & aligned"]
  },
  {
    id: "q2",
    text: "How would you rate the quality and accessibility of your data?",
    options: ["Siloed & messy", "Centralized but raw", "Clean & structured", "Real-time & API-ready"]
  },
  {
    id: "q3",
    text: "Are you currently using any autonomous agents (beyond simple chatbots)?",
    options: ["None", "Exploring/Piloting", "Limited deployment", "Scaled across operations"]
  },
  {
    id: "q4",
    text: "Do you have governance frameworks in place for AI ethics and bias?",
    options: ["No framework", "Ad-hoc checks", "Formal guidelines", "Automated compliance checks"]
  },
  {
    id: "q5",
    text: "Is your workforce trained on how to collaborate with AI tools?",
    options: ["No training", "Basic awareness", "Role-specific training", "AI-native culture"]
  }
];

export function Assessment() {
  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [calculating, setCalculating] = useState(false);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (optionIndex: number) => {
    setAnswers(prev => ({ ...prev, [questions[currentQ].id]: optionIndex }));
    
    if (currentQ < questions.length - 1) {
      setTimeout(() => setCurrentQ(prev => prev + 1), 300);
    } else {
      setCalculating(true);
      setTimeout(() => {
        setCalculating(false);
        setFinished(true);
      }, 2000);
    }
  };

  const score = Object.values(answers).reduce<number>((a, b) => a + b, 0);
  const maxScore = questions.length * 3; // 0-3 per question
  const percentage = Math.round((score / maxScore) * 100);

  const getLevel = (p: number) => {
    if (p < 30) return { title: "AI Explorer", desc: "You are at the beginning of your journey. Focus on data foundations." };
    if (p < 60) return { title: "AI Adopter", desc: "You have some pieces in place. It's time to connect them with strategy." };
    if (p < 85) return { title: "AI Innovator", desc: "Strong foundations. You are ready for agentic orchestration." };
    return { title: "AI Native", desc: "World-class readiness. Focus on continuous optimization and scale." };
  };

  const result = getLevel(percentage);

  return (
    <div className="w-full max-w-3xl mx-auto bg-zinc-900/50 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600" />
      
      <AnimatePresence mode="wait">
        {!started ? (
          <motion.div
            key="start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">AI Readiness Assessment</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Discover your organization's AI maturity level in less than 2 minutes. 
              Get a personalized roadmap based on the Mehtadology 2.0 framework.
            </p>
            <button
              onClick={() => setStarted(true)}
              className="px-8 py-4 bg-amber-400 text-black font-bold rounded-full hover:bg-amber-300 transition-colors inline-flex items-center gap-2 shadow-[0_0_20px_-5px_rgba(251,191,36,0.4)]"
            >
              Start Assessment <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        ) : calculating ? (
          <motion.div
            key="calculating"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-12 space-y-4"
          >
            <Loader2 className="w-12 h-12 text-amber-500 animate-spin" />
            <p className="text-xl text-white font-medium">Analyzing your responses...</p>
          </motion.div>
        ) : finished ? (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-8"
          >
            <div className="inline-block p-4 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4">
              <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-200">
                {percentage}%
              </span>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Readiness Level: {result.title}</h3>
              <p className="text-gray-400 text-lg max-w-lg mx-auto">{result.desc}</p>
            </div>

            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-left space-y-4">
              <h4 className="font-semibold text-white flex items-center gap-2">
                <CheckCircle2 className="text-green-400 w-5 h-5" /> Recommended Next Steps
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                  Schedule a deep-dive audit of your data infrastructure.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                  Identify one high-impact workflow for agentic automation.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                  Establish a preliminary AI governance council.
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => {
                  setStarted(false);
                  setFinished(false);
                  setCurrentQ(0);
                  setAnswers({});
                }}
                className="px-6 py-3 rounded-full border border-white/20 text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                Retake Assessment
              </button>
              
              <Link
                to="/agentic-foundry"
                className="px-8 py-3 bg-amber-400 text-black font-bold rounded-full hover:bg-amber-300 transition-colors inline-flex items-center gap-2 shadow-[0_0_20px_-5px_rgba(251,191,36,0.4)]"
              >
                See How We Build It <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="question"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-8"
          >
            <div className="flex justify-between items-center text-sm text-gray-500 uppercase tracking-widest">
              <span>Question {currentQ + 1} of {questions.length}</span>
              <span>{Math.round(((currentQ) / questions.length) * 100)}% Complete</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-medium text-white leading-tight">
              {questions[currentQ].text}
            </h3>

            <div className="grid gap-4">
              {questions[currentQ].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className="w-full p-6 text-left bg-white/5 hover:bg-amber-500/10 border border-white/10 hover:border-amber-500/50 rounded-xl transition-all group flex items-center justify-between"
                >
                  <span className="text-lg text-gray-300 group-hover:text-white">{option}</span>
                  <Circle className="w-5 h-5 text-gray-600 group-hover:text-amber-500" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
