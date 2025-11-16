import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClickSpark from "@/components/ClickSpark";
import Index from "./pages/Index";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Booking from "./pages/Booking";
import Trending from "./pages/Trending";
import EventDetails from "./pages/EventDetails";
import Wedding from "./pages/events/Wedding";
import Corporate from "./pages/events/Corporate";
import Entertainment from "./pages/events/Entertainment";
import Sports from "./pages/events/Sports";
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ClickSpark sparkColor="#ff4757" sparkSize={15} sparkRadius={15} sparkCount={8} duration={400}>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/events/wedding" element={<Wedding />} />
            <Route path="/events/corporate" element={<Corporate />} />
            <Route path="/events/entertainment" element={<Entertainment />} />
            <Route path="/events/sports" element={<Sports />} />
            <Route path="/event/theme/:id" element={<EventDetails />} />
            <Route path="/event/:id" element={<EventDetails />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ClickSpark>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
