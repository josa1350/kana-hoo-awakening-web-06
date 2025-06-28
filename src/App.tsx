
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import JocodePage from "./pages/JocodePage";
import StudyBuddyPage from "./pages/StudyBuddyPage";
import MindsetPage from "./pages/MindsetPage";
import BooksPage from "./pages/BooksPage";
import QuotePage from "./pages/QuotePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/jocode" element={<JocodePage />} />
          <Route path="/study-buddy" element={<StudyBuddyPage />} />
          <Route path="/mindset" element={<MindsetPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/quote" element={<QuotePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
