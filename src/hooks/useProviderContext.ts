import { useContext } from 'react';
import { ProviderContext } from '../context/provider-context';

export const useProviderContext = () => {
  const context = useContext(ProviderContext);
  if (!context) {
    throw new Error('useProviderContext must be used within a ProviderProvider');
  }
  return context;
};
