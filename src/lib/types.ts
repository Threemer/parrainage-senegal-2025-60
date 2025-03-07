
export interface User {
  id: string;
  email: string;
  role: 'admin' | 'voter' | 'candidate';
  name: string;
}

export interface ElectoralFile {
  id: string;
  name: string;
  uploadDate: string;
  status: 'pending' | 'validated' | 'rejected';
  checksum: string;
  errorCount?: number;
}

export interface Voter {
  id: string;
  voterNumber: string;
  nationalIdNumber: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  birthPlace: string;
  gender: 'M' | 'F';
  pollingStation: string;
  email?: string;
  phone?: string;
  hasSponsored: boolean;
}

export interface Candidate {
  id: string;
  voterNumber: string;
  nationalIdNumber: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  email: string;
  phone: string;
  politicalParty?: string;
  slogan?: string;
  photoUrl?: string;
  partyColors?: string[];
  websiteUrl?: string;
  sponsorshipCount: number;
}

export interface SponsorshipPeriod {
  id: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
}

export interface Sponsorship {
  id: string;
  voterId: string;
  candidateId: string;
  date: string;
  verificationCode: string;
}

export interface FileValidationResult {
  isValid: boolean;
  errors?: {
    line: number;
    message: string;
    data?: any;
  }[];
}

export interface AppContextType {
  user: User | null;
  isAuthenticated: boolean;
  sponsorshipPeriod: SponsorshipPeriod | null;
  loading: boolean;
  setUser: (user: User | null) => void;
  setSponsorshipPeriod: (period: SponsorshipPeriod | null) => void;
  setLoading: (loading: boolean) => void;
}

export interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}
