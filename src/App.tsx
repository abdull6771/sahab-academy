import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SiteLayout from "@/components/layout/SiteLayout";
import Index from "./pages/Index";
import About from "./pages/About";
import Academic from "./pages/Academic";
import Nursery from "./pages/Nursery";
import Primary from "./pages/Primary";
import Secondary from "./pages/Secondary";
import Admissions from "./pages/Admissions";
import Register from "./pages/Register";
import Campus from "./pages/Campus";
import Gallery from "./pages/Gallery";
import Alumni from "./pages/Alumni";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics/nursery" element={<Nursery />} />
            <Route path="/academics/primary" element={<Primary />} />
            <Route path="/academics/secondary" element={<Secondary />} />
            <Route path="/academics/:stage" element={<Academic />} />
            <Route path="/academics" element={<Navigate to="/academics/primary" replace />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/register" element={<Register />} />
            <Route path="/campus" element={<Campus />} />
            <Route path="/facilities" element={<Navigate to="/campus#facilities" replace />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
