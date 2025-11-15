import { useMemo, useState, type ReactNode } from 'react';
import type { Provider } from '../types/provider';
import { ProviderContext } from './provider-context';

const initialProviders: Provider[] = [
  {
    id: '1',
    firstName: 'Amelia',
    lastName: 'Hart',
    ahpraNumber: 'MED123456',
    providerType: 'General Practitioner',
    practice: 'Care Plan Health - North',
    medicareLocationId: '123456A',
    minorId: 'NORTH01',
    status: 'approved',
  },
  {
    id: '2',
    firstName: 'Noah',
    lastName: 'Singh',
    ahpraNumber: 'MED789012',
    providerType: 'Physiotherapist',
    practice: 'Care Plan Health - CBD',
    medicareLocationId: '654321B',
    minorId: 'CBD22',
    status: 'approved',
  },
  {
    id: '3',
    firstName: 'Sienna',
    lastName: 'Cole',
    ahpraNumber: 'MED234567',
    providerType: 'Registered Nurse',
    practice: 'Care Plan Health - West',
    medicareLocationId: '998877C',
    minorId: 'WEST03',
    status: 'approved',
  },
  {
    id: '4',
    firstName: 'Leo',
    lastName: 'Martin',
    ahpraNumber: 'MED345678',
    providerType: 'Psychologist',
    practice: 'Care Plan Health - South',
    status: 'pending',
  },
  {
    id: '5',
    firstName: 'Olivia',
    lastName: 'Nguyen',
    ahpraNumber: 'MED456789',
    providerType: 'Occupational Therapist',
    practice: 'Care Plan Health - North',
    status: 'pending',
  },
];

export const ProviderProvider = ({ children }: { children: ReactNode }) => {
  const [providers, setProviders] = useState<Provider[]>(initialProviders);

  const approveProvider = (id: string) => {
    setProviders((prev) =>
      prev.map((provider) =>
        provider.id === id ? { ...provider, status: 'approved' } : provider,
      ),
    );
  };

  const rejectProvider = (id: string) => {
    setProviders((prev) =>
      prev.map((provider) =>
        provider.id === id ? { ...provider, status: 'rejected' } : provider,
      ),
    );
  };

  const value = useMemo(
    () => ({
      providers,
      approveProvider,
      rejectProvider,
    }),
    [providers],
  );

  return <ProviderContext.Provider value={value}>{children}</ProviderContext.Provider>;
};

