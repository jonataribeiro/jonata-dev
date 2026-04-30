/**
 * TechIcon — logomarcas SVG simples para tecnologias da Stack.
 * SVGs inline (pequenos) em tom monocromático + primary no hover via currentColor.
 * Para adicionar uma nova tecnologia, crie uma entrada no mapa `icons`.
 */
import { cn } from "@/lib/utils";

type IconProps = { className?: string };

const S = ({ children, viewBox = "0 0 24 24" }: { children: React.ReactNode; viewBox?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    fill="currentColor"
    className="w-full h-full"
    aria-hidden
  >
    {children}
  </svg>
);

const icons: Record<string, React.ReactNode> = {
  React: (
    <S>
      <circle cx="12" cy="12" r="2" />
      <g fill="none" stroke="currentColor" strokeWidth="1.2">
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      </g>
    </S>
  ),
  TypeScript: (
    <S>
      <rect width="24" height="24" rx="3" />
      <text x="12" y="17" textAnchor="middle" fontSize="10" fontWeight="700" fill="hsl(var(--background))" fontFamily="monospace">TS</text>
    </S>
  ),
  JavaScript: (
    <S>
      <rect width="24" height="24" rx="3" />
      <text x="12" y="17" textAnchor="middle" fontSize="10" fontWeight="700" fill="hsl(var(--background))" fontFamily="monospace">JS</text>
    </S>
  ),
  "Tailwind CSS": (
    <S viewBox="0 0 32 20">
      <path d="M16 0C11.7 0 9 2.1 8 6.3c1.5-2.1 3.3-2.8 5.3-2.3 1.2.3 2 1.2 3 2.2 1.6 1.7 3.4 3.6 7.3 3.6 4.3 0 7-2.1 8-6.3-1.5 2.1-3.3 2.8-5.3 2.3-1.2-.3-2-1.2-3-2.2C21.7 1.9 19.9 0 16 0zM8 9.6C3.7 9.6 1 11.7 0 15.9c1.5-2.1 3.3-2.8 5.3-2.3 1.2.3 2 1.2 3 2.2 1.6 1.7 3.4 3.6 7.3 3.6 4.3 0 7-2.1 8-6.3-1.5 2.1-3.3 2.8-5.3 2.3-1.2-.3-2-1.2-3-2.2C13.7 11.5 11.9 9.6 8 9.6z" />
    </S>
  ),
  Vite: (
    <S>
      <path d="M12 2 L22 6 L12 22 L2 6 Z" opacity="0.9" />
      <path d="M12 2 L22 6 L12 12 Z" fill="hsl(var(--background))" opacity="0.25" />
    </S>
  ),
  HTML5: (
    <S>
      <path d="M3 2h18l-1.7 18L12 22l-7.3-2L3 2zm4 4 .4 4h7.8l-.2 2.2L12 13.3 8.9 12.4l-.2-1.9H6.5l.4 3.8 5.1 1.4 5.1-1.4.7-7.9H7z" />
    </S>
  ),
  CSS3: (
    <S>
      <path d="M3 2h18l-1.7 18L12 22l-7.3-2L3 2zm4.1 4 .4 4.5h9.2l-.2 2L12 13.8l-4.5-1.2.3 2.6 4.2 1.2 4.2-1.2.5-5.2H7.4L7.3 8h9.3l.2-2H7.1z" />
    </S>
  ),
  "Node.js": (
    <S>
      <path d="M12 2 3 7v10l9 5 9-5V7l-9-5zm0 2.3 7 3.9v7.6l-7 3.9-7-3.9V8.2l7-3.9zm-1 4.7v6.5c0 .3-.2.5-.5.5h-.5c-.6 0-1.2-.2-1.7-.5l-.3-.2c-.1 0-.2-.1-.2-.2v-.4c0-.1.1-.2.2-.2h.4c.1 0 .1 0 .2.1l.3.2c.2.1.4.2.6.2.3 0 .5-.2.5-.5V9c0-.1.1-.2.2-.2h.6c.1 0 .2.1.2.2zm4.5 6.8c-1.6 0-2.1-.7-2.2-1.5 0-.1.1-.2.2-.2h.6c.1 0 .2.1.2.2.1.5.3.7 1.2.7.7 0 1-.3 1-.6 0-.2-.1-.4-1.2-.5-.9-.1-2.1-.3-2.1-1.4 0-1 .8-1.5 2-1.5s2 .5 2.1 1.5c0 .1 0 .1-.1.2h-.6c-.1 0-.2-.1-.2-.2-.1-.5-.4-.6-1.1-.6s-1 .2-1 .5c0 .2.1.4 1.2.5 1.1.1 2.1.3 2.1 1.4 0 1.1-.9 1.6-2.1 1.6z" />
    </S>
  ),
  Express: (
    <S>
      <rect width="24" height="24" rx="3" />
      <text x="12" y="17" textAnchor="middle" fontSize="11" fontWeight="700" fill="hsl(var(--background))" fontFamily="monospace">Ex</text>
    </S>
  ),
  "REST APIs": (
    <S>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </S>
  ),
  "Git & GitHub": (
    <S>
      <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.6-1.4-2.2-.3-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.6-4.5 4.9.4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5A10 10 0 0 0 12 2z" />
    </S>
  ),
  SQL: (
    <S>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" fill="currentColor" opacity="0.6" />
    </S>
  ),
  PostgreSQL: (
    <S>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" fill="currentColor" opacity="0.6" />
    </S>
  ),
  MySQL: (
    <S>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" fill="currentColor" opacity="0.6" />
    </S>
  ),
  "Modelagem de dados": (
    <S>
      <rect x="3" y="4" width="7" height="7" rx="1" />
      <rect x="14" y="4" width="7" height="7" rx="1" />
      <rect x="3" y="13" width="7" height="7" rx="1" />
      <rect x="14" y="13" width="7" height="7" rx="1" />
      <path d="M10 7.5h4M10 16.5h4M6.5 11v2M17.5 11v2" stroke="currentColor" strokeWidth="1" fill="none" />
    </S>
  ),
  "Queries & Joins": (
    <S>
      <circle cx="9" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 8a6 6 0 0 0 0 8 6 6 0 0 0 0-8z" />
    </S>
  ),
  "Next.js": (
    <S>
      <circle cx="12" cy="12" r="10" />
      <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="700" fill="hsl(var(--background))" fontFamily="monospace">N</text>
    </S>
  ),
  "Testes (Vitest)": (
    <S>
      <path d="M12 2 3 7v10l9 5 9-5V7l-9-5z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 12l3 3 5-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </S>
  ),
  "Clean Code": (
    <S>
      <path d="M8 6 2 12l6 6M16 6l6 6-6 6M14 4l-4 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </S>
  ),
  "Inglês técnico": (
    <S>
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 12h20M12 2c3 3 3 17 0 20M12 2c-3 3-3 17 0 20" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </S>
  ),
  Figma: (
    <S>
      <path d="M8 2h4v6H8a3 3 0 0 1 0-6zM12 2h4a3 3 0 0 1 0 6h-4V2zM12 8h4a3 3 0 0 1 0 6h-4V8zM8 8h4v6H8a3 3 0 0 1 0-6z" />
      <circle cx="11" cy="17" r="3" />
    </S>
  ),
};

export const TechIcon = ({ name, className }: { name: string; className?: string }) => {
  const icon = icons[name];
  if (!icon) {
    // Fallback: primeira letra em um quadrado
    return (
      <span
        className={cn(
          "inline-flex items-center justify-center w-5 h-5 rounded bg-primary/20 text-primary text-[10px] font-mono font-bold",
          className
        )}
        aria-hidden
      >
        {name[0]}
      </span>
    );
  }
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center w-5 h-5 text-primary/80 group-hover:text-primary transition-colors",
        className
      )}
      aria-hidden
    >
      {icon}
    </span>
  );
};
