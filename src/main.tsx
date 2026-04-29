import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

/**
 * Ponto de entrada da aplicação (Entry Point).
 * Seleciona o elemento 'root' no DOM e renderiza o componente App.
 * O operador '!' (non-null assertion) garante ao TS que o elemento existe.
 */
createRoot(document.getElementById("root")!).render(<App />);