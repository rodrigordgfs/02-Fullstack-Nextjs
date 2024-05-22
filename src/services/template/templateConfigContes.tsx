import React, { createContext, ReactNode, useContext } from "react";
import { TemplateConfig } from "./withTemplateConfig";

const TemplateConfigContext = createContext<TemplateConfig>({});

interface TemplateConfigProviderProps {
  children: ReactNode;
  value: TemplateConfig;
}

export function TemplateConfigProvider({
  value,
  children,
}: TemplateConfigProviderProps) {
  return (
    <TemplateConfigContext.Provider value={value}>
      {children}
    </TemplateConfigContext.Provider>
  );
}

export const useTemplateConfig = () => useContext(TemplateConfigContext);
