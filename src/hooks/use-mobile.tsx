import * as React from "react";

/**
 * Ponto de interrupção (breakpoint) definido para 768px.
 * Dispositivos com largura menor que este valor são considerados 'mobile'.
 */
const MOBILE_BREAKPOINT = 768;

/**
 * Hook: useIsMobile
 * Retorna um booleano que indica se a viewport atual é mobile.
 * * — Utiliza `window.matchMedia` para ouvir mudanças no redimensionamento da tela.
 * — O estado inicial é `undefined` para evitar erros de hidratação (SSR).
 * — Limpa o event listener ao desmontar o componente para evitar vazamento de memória.
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    // Cria a query de mídia baseada no breakpoint definido
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    
    // Função chamada sempre que a largura da tela cruza o breakpoint
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Adiciona o listener para mudanças dinâmicas
    mql.addEventListener("change", onChange);
    
    // Define o estado inicial assim que o componente é montado no cliente
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    
    // Cleanup: remove o listener ao desmontar
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Retorna o valor convertido para booleano (!!undefined vira false)
  return !!isMobile;
}