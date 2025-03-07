
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { AppContextType, SponsorshipPeriod, User } from '@/lib/types';

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [sponsorshipPeriod, setSponsorshipPeriod] = useState<SponsorshipPeriod | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const value = {
    user,
    isAuthenticated: !!user,
    sponsorshipPeriod,
    loading,
    setUser,
    setSponsorshipPeriod,
    setLoading,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
