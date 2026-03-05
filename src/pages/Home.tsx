import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { FlowyPillars } from "@/components/FlowyPillars";
import { Assessment } from "@/components/Assessment";
import { ArrowRight, Menu, X, ChevronDown, Github, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.9]);

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-amber-500/30 relative">
      {/* Global Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-zinc-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-black/80 backdrop-blur-md border-white/10 py-4" : "bg-transparent py-6"
      )}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img 
              src="https://placehold.co/200x50/000000/fbbf24?text=Mehtadology&font=playfair-display" 
              alt="Mehtadology" 
              className="h-10 w-auto object-contain" 
            />
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#pillars" className="hover:text-amber-400 transition-colors">The 10 Pillars</a>
            <a href="#assessment" className="hover:text-amber-400 transition-colors">Readiness Assessment</a>
            <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
            <a href="#contact" className="px-5 py-2.5 bg-amber-400 text-black rounded-full hover:bg-amber-300 transition-colors font-bold shadow-[0_0_20px_-5px_rgba(251,191,36,0.5)]">
              Book Consultation
            </a>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-8 text-2xl font-light">
            <a href="#pillars" onClick={() => setMobileMenuOpen(false)}>The 10 Pillars</a>
            <a href="#assessment" onClick={() => setMobileMenuOpen(false)}>Readiness Assessment</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-amber-500">Book Consultation</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 text-center max-w-5xl px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-sm text-amber-400 font-medium tracking-wide uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
            The 2026 Agentic AI Readiness Model
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]"
          >
            From Conversation <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600">
              To Orchestration.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            We build the neural architecture for tomorrow's autonomous enterprise. 
            Detect gaps. Automate workflows. Scale intelligence.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="#assessment"
              className="px-8 py-4 bg-amber-400 text-black font-bold rounded-full hover:bg-amber-300 transition-colors flex items-center gap-2 shadow-[0_0_20px_-5px_rgba(251,191,36,0.4)]"
            >
              Check AI Readiness <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#pillars"
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 hover:border-amber-400/50 hover:text-amber-400 transition-all"
            >
              Explore The Framework
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
          <ChevronDown className="animate-bounce" />
        </motion.div>
      </section>

      {/* The 10 Pillars Section */}
      <section id="pillars" className="relative z-10 py-32 bg-transparent">
        <div className="text-center mb-20 px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">The 10 Golden Pillars</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our proprietary framework for assessing and building true agentic capability.
            A holistic approach to digital transformation.
          </p>
        </div>
        
        <FlowyPillars />
      </section>

      {/* Assessment Section */}
      <section id="assessment" className="py-32 bg-transparent relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Where do you stand?</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Most organizations are stuck in the "Chatbot Era." The future is Agentic—systems that don't just talk, but <strong>do</strong>.
                <br /><br />
                Our AI Readiness Assessment analyzes your current infrastructure against the 10 Golden Pillars to identify critical gaps and opportunities for high-impact automation.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-colors">
                  <div className="text-3xl font-bold text-amber-400 mb-2">2 min</div>
                  <div className="text-sm text-gray-400">Time to complete</div>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-colors">
                  <div className="text-3xl font-bold text-yellow-500 mb-2">100%</div>
                  <div className="text-sm text-gray-400">Confidential</div>
                </div>
              </div>
            </div>
            
            <Assessment />
          </div>
        </div>
      </section>

      {/* About / Founder Section */}
      <section id="about" className="py-32 bg-transparent border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/3 aspect-[3/4] relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 group">
               {/* Placeholder for Founder Image */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
               <img 
                 src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" 
                 alt="Dr Ashwin Mehta" 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute bottom-6 left-6 z-20">
                 <h3 className="text-2xl font-bold text-white">Dr. Ashwin Mehta</h3>
                 <p className="text-amber-500 font-medium">Founder & Lead Strategist</p>
               </div>
            </div>
            
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Architecting Intelligence.</h2>
              <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                <p>
                  Mehtadology isn't just a consultancy; it's a philosophy of rigorous, structural transformation. 
                  Founded by Dr. Ashwin Mehta, we bridge the gap between theoretical AI potential and practical, revenue-generating reality.
                </p>
                <p>
                  We don't believe in "AI wrappers." We believe in deep integration. We build systems that understand context, 
                  maintain memory, and execute complex workflows with minimal human oversight.
                </p>
                <p>
                  Our mission is simple: To prepare your business for a world where intelligence is a commodity, 
                  but <strong>application</strong> is the differentiator.
                </p>
              </div>
              
              <div className="mt-10 flex gap-4">
                <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-20 bg-transparent border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Ready to Evolve?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            The gap between AI leaders and laggards is widening. Let's build your bridge to the future.
          </p>
          
          <a 
            href="mailto:contact@mehtadology.com"
            className="inline-flex items-center gap-3 px-10 py-5 bg-amber-400 text-black font-bold text-lg rounded-full hover:bg-amber-300 transition-colors shadow-[0_0_30px_-5px_rgba(251,191,36,0.5)]"
          >
            Start Your Transformation
          </a>

          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
            <p>&copy; 2026 Mehtadology. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
