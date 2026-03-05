import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import PillarPage from "@/pages/PillarPage";
import AgenticFoundry from "@/pages/AgenticFoundry";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pillar/:id" element={<PillarPage />} />
        <Route path="/agentic-foundry" element={<AgenticFoundry />} />
      </Routes>
    </Router>
  );
}
