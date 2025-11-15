import { Button } from '../../components/ui/Button';
import { Table } from '../../components/ui/Table';
import { useProviderContext } from '../../hooks/useProviderContext';

export const NewProvidersTab = () => {
  const { providers, approveProvider, rejectProvider } = useProviderContext();
  const pendingProviders = providers.filter((provider) => provider.status === 'pending');

  if (pendingProviders.length === 0) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-dashed border-cp365-border bg-cp365-bg/60 px-8 py-12 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
          <span className="text-2xl text-cp365-primary">✓</span>
        </div>
        <h3 className="text-xl font-semibold text-cp365-textMain">No new providers awaiting approval</h3>
        <p className="mt-2 text-sm text-cp365-textMuted">
          You’ll be notified here whenever a provider submits new onboarding details.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-cp365-textMuted">
            New Providers
          </p>
          <h2 className="text-xl font-semibold text-cp365-textMain">Pending approval</h2>
        </div>
        <p className="text-sm font-medium text-cp365-textMuted">
          {pendingProviders.length} awaiting review
        </p>
      </div>

      <Table>
        <thead className="bg-cp365-bg text-left text-xs font-semibold uppercase tracking-wide text-cp365-textMuted">
          <tr>
            <th className="px-6 py-4">First Name</th>
            <th className="px-6 py-4">Last Name</th>
            <th className="px-6 py-4">AHPRA Number</th>
            <th className="px-6 py-4">Provider Type</th>
            <th className="px-6 py-4 text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          {pendingProviders.map((provider) => (
            <tr
              key={provider.id}
              className="border-t border-cp365-border/80 text-sm text-cp365-textMain hover:bg-slate-50 transition"
            >
              <td className="px-6 py-4 font-semibold">{provider.firstName}</td>
              <td className="px-6 py-4">{provider.lastName}</td>
              <td className="px-6 py-4">{provider.ahpraNumber ?? '—'}</td>
              <td className="px-6 py-4">{provider.providerType}</td>
              <td className="px-6 py-4 text-right">
                <div className="flex justify-end gap-2">
                  <Button size="sm" onClick={() => approveProvider(provider.id)}>
                    Approve
                  </Button>
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => rejectProvider(provider.id)}
                  >
                    Reject
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
