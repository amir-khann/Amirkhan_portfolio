import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Component to handle root path redirect
const RootRedirect = () => {
  const location = useLocation();
  
  useEffect(() => {
    const windowPath = window.location.pathname;
    // If we're at the root path with basename, ensure we're on the correct route
    if (windowPath === "/Amirkhan_portfolio/" || windowPath === "/Amirkhan_portfolio") {
      if (location.pathname !== "/") {
        window.history.replaceState(null, "", "/Amirkhan_portfolio/");
      }
    }
  }, [location.pathname]);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/Amirkhan_portfolio/">
        <RootRedirect />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="" element={<Navigate to="/" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
