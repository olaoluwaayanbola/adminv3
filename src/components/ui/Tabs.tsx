import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface Tab {
  id: string;
  label: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (tabId: string) => void;
}

export const Tabs = ({ tabs, activeTab, onChange }: TabsProps) => (
  <div className="flex gap-6 border-b border-cp365-border">
    {tabs.map((tab) => {
      const isActive = tab.id === activeTab;
      return (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange(tab.id)}
          className={cn(
            'pb-3 text-sm font-semibold uppercase tracking-wide',
            isActive
              ? 'text-cp365-primary border-b-2 border-cp365-primary'
              : 'text-cp365-textMuted border-b-2 border-transparent hover:text-cp365-textMain',
          )}
        >
          {tab.label}
        </button>
      );
    })}
  </div>
);
