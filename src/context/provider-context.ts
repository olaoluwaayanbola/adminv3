import { createContext } from 'react';
import type { Provider } from '../types/provider';

export interface ProviderContextValue {
  providers: Provider[];
  approveProvider: (id: string) => void;
  rejectProvider: (id: string) => void;
}

export const ProviderContext = createContext<ProviderContextValue | undefined>(undefined);
