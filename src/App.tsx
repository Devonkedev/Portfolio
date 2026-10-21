import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { MotionConfig } from "framer-motion";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Research from "./pages/Research";
import Projects from "./pages/Projects";
import Leadership from "./pages/Leadership";
import Awards from "./pages/Awards";
import NotFound from "./pages/NotFound";
import CosmicBackground from "./components/CosmicBackground";
import { usePointerSpotlight } from "./components/Motion";

const queryClient = new QueryClient();

const GlobalEffects = () => {
  usePointerSpotlight();
  return <CosmicBackground />;
};

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
    <MotionConfig reducedMotion="user">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <GlobalEffects />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/research" element={<Research />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/awards" element={<Awards />} />
            {/* Old URL kept working for anyone with the previous link */}
            <Route path="/extracurricular" element={<Navigate to="/projects" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
    </MotionConfig>
  </ThemeProvider>
);

export default App;
