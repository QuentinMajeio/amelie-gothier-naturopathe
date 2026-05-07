import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState } from "react";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import CookieBanner from "./components/CookieBanner";
import { PolitiqueCookies } from "./components/LegalModals";
import { clearConsent } from "./hooks/use-cookie-consent";

const queryClient = new QueryClient();

const App = () => {
  const [showCookies, setShowCookies] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieBanner onOpenPolitique={() => setShowCookies(true)} />
          <PolitiqueCookies
            open={showCookies}
            onClose={() => setShowCookies(false)}
            onManage={() => {
              setShowCookies(false);
              clearConsent();
            }}
          />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
