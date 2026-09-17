export type SocialCategory = 'General' | 'OBC' | 'SC' | 'ST' | 'Minority';

export type SpecialCategory = 'None' | 'Women Entrepreneur' | 'Differently Abled (Divyangjan)' | 'Ex-Serviceman' | 'NER / Hilly Region';

export type EntrepreneurType = 
  | 'New Entrepreneur'
  | 'Existing Business Owner'
  | 'Self-Employed'
  | 'Micro Business Owner'
  | 'Startup / Early Stage Business';

export type BusinessType = 
  | 'Manufacturing'
  | 'Service'
  | 'Trading'
  | 'Agriculture Allied'
  | 'Food Processing'
  | 'Retail'
  | 'Handicraft'
  | 'Technology'
  | 'Other';

export type BusinessStage = 
  | 'Idea Stage'
  | 'New Business'
  | 'Existing Business'
  | 'Expansion';

export type BusinessLocation = 'Urban' | 'Rural' | 'Semi-Urban';

export type CreditHistory = 'Good' | 'Average' | 'Limited / No History';

export interface DocumentItem {
  id: string;
  name: string;
  category: 'Identity' | 'Business' | 'Financial' | 'Category';
  description: string;
  howToGet: string;
  estimatedDays: string;
  supportAgency: string;
}

export interface EntrepreneurProfile {
  // Personal
  fullName: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other' | 'Prefer not to say';
  state: string;
  district: string;
  city: string;
  pincode: string;
  socialCategory: SocialCategory;
  specialCategory: SpecialCategory;
  entrepreneurType: EntrepreneurType;

  // Business
  businessName: string;
  businessType: BusinessType;
  businessStage: BusinessStage;
  yearsInBusiness: number;
  employees: number;
  businessLocation: BusinessLocation;
  businessDescription: string;
  annualTurnover: number;

  // Financial
  personalIncome: number;
  businessRevenue: number;
  existingInvestment: number;
  requiredFunding: number;
  preferredLoanAmount: number;
  preferredTenureYears: number;
  existingLoans: 'Yes' | 'No';
  monthlyExistingEmi: number;
  collateralAvailable: 'Yes' | 'No';
  creditHistory: CreditHistory;

  // Documents available: mapping of document ID to boolean
  availableDocuments: Record<string, boolean>;
}

export interface Scheme {
  id: string;
  name: string;
  code: string;
  tagline: string;
  shortDescription: string;
  ministry: string;
  category: 'MSME' | 'Poverty Alleviation' | 'Women Entrepreneurship' | 'Self-Employment' | 'Credit Guarantee' | 'Handicraft' | 'Artisan';
  businessTypes: BusinessType[];
  businessStages: BusinessStage[];
  minFunding: number;
  maxFunding: number;
  mockInterestRate: number; // e.g. 8.5 (%)
  mockTenureYears: number; // e.g. 5
  mockSubsidy: {
    available: boolean;
    percentage: number;
    description: string;
    ruralPercentage?: number;
    urbanPercentage?: number;
    specialCategoryBonus?: number;
  };
  eligibilityRules: string[];
  requiredDocuments: string[]; // document IDs
  targetUsers: string[];
  locations: string[]; // 'All India', 'Urban', 'Rural' etc.
  channelPartners: string[];
  benefits: string[];
  limitations: string[];
  applicationSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  officialPortalUrl: string;
  badgeTag: string;
}

export interface ScoreBreakdown {
  businessType: number; // max 20
  fundingRange: number; // max 20
  businessStage: number; // max 15
  entrepreneurType: number; // max 15
  location: number; // max 10
  incomeEligibility: number; // max 10
  documentReadiness: number; // max 10
}

export interface MatchScoreResult {
  scheme: Scheme;
  score: number; // 0 to 100
  matchTier: 'Highly Suitable' | 'Strong Match' | 'Potential Match' | 'Limited Match';
  breakdown: ScoreBreakdown;
  matchReasons: string[];
  eligibilityNote: string;
  cautionNotes?: string[];
}

export interface FinancialCalculation {
  principal: number;
  annualInterestRate: number;
  tenureYears: number;
  monthlyEmi: number;
  totalInterest: number;
  totalRepayment: number;
  estimatedSubsidy: number;
  netFinancialBurden: number;
}

export interface SupportCentre {
  id: string;
  name: string;
  type: string;
  area: string;
  city: string;
  state: string;
  pincode: string;
  distanceKm: number;
  services: string[];
  openingHours: string;
  phone: string;
  email: string;
  address: string;
}

export interface ChannelPartnerInfo {
  name: string;
  category: 'Public Sector Bank' | 'MSME Facilitation' | 'DIC / District Centre' | 'KVIC / Khadi Board' | 'Rural Development Bank';
  role: string;
  description: string;
  servicesProvided: string[];
  howToApproach: string;
}
