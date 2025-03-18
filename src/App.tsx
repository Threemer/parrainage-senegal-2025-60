
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CandidatesPage from "./pages/admin/CandidatesPage";
import ElectoralFilePage from "./pages/admin/ElectoralFilePage";
import SponsorshipPeriodPage from "./pages/admin/SponsorshipPeriodPage";
import RegisterPage from "./pages/voter/RegisterPage";
import CandidatePage from "./pages/candidate/CandidatePage";
import ModelsDiagram from "./pages/ModelsDiagram";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Routes administrateur */}
          <Route path="/admin/candidates" element={<CandidatesPage />} />
          <Route path="/admin/electoral-file" element={<ElectoralFilePage />} />
          <Route path="/admin/sponsorship-period" element={<SponsorshipPeriodPage />} />
          
          {/* Routes espace électeur */}
          <Route path="/voter/register" element={<RegisterPage />} />
          
          {/* Routes espace candidat */}
          <Route path="/candidate" element={<CandidatePage />} />
          
          {/* Route modèles UML */}
          <Route path="/models" element={<ModelsDiagram />} />
          
          {/* Route 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
