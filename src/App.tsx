import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

/**
 * Instância do QueryClient utilizada para gerenciar estados de cache 
 * e requisições assíncronas do React Query.
 */
const queryClient = new QueryClient();

/**
 * Componente principal da aplicação (App).
 * Gerencia o roteamento, provedores de contexto globais e sistemas de notificação.
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* Provedor para componentes de Tooltip (UI shadcn) */}
    <TooltipProvider>
      {/* Sistemas de Toast/Notificação (Toast padrão e Sonner) */}
      <Toaster />
      <Sonner />
      
      {/* Configuração de rotas via React Router */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Rota coringa para página 404 (NotFound) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;