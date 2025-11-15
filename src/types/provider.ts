export type ProviderStatus = 'pending' | 'approved' | 'rejected';

export interface Provider {
  id: string;
  firstName: string;
  lastName: string;
  ahpraNumber?: string;
  providerType: string;
  practice?: string;
  medicareLocationId?: string;
  minorId?: string;
  status: ProviderStatus;
}
