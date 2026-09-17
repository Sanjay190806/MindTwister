import { FinancialCalculation, Scheme, EntrepreneurProfile } from '../types';

/**
 * Calculates monthly EMI and financial breakdown using standard banking amortization
 * Formula: EMI = P * r * (1 + r)^n / ((1 + r)^n - 1)
 */
export function calculateFinancials(
  principal: number,
  annualInterestRate: number,
  tenureYears: number,
  subsidyPercentage: number = 0
): FinancialCalculation {
  const p = Math.max(0, principal);
  const r = annualInterestRate > 0 ? (annualInterestRate / 100) / 12 : 0;
  const n = Math.max(1, Math.round(tenureYears * 12));

  let monthlyEmi = 0;
  if (r === 0 || p === 0) {
    monthlyEmi = n > 0 ? Math.round(p / n) : 0;
  } else {
    const factor = Math.pow(1 + r, n);
    monthlyEmi = Math.round((p * r * factor) / (factor - 1));
  }

  const totalRepayment = monthlyEmi * n;
  const totalInterest = Math.max(0, totalRepayment - p);

  // Subsidy calculation (capped at reasonable benchmark limits)
  const estimatedSubsidy = Math.round((p * Math.min(subsidyPercentage, 50)) / 100);
  const netFinancialBurden = Math.max(0, totalRepayment - estimatedSubsidy);

  return {
    principal: p,
    annualInterestRate,
    tenureYears,
    monthlyEmi,
    totalInterest,
    totalRepayment,
    estimatedSubsidy,
    netFinancialBurden
  };
}

/**
 * Determines applicable subsidy percentage for a scheme given user demographics
 */
export function getApplicableSubsidy(scheme: Scheme, profile: EntrepreneurProfile): number {
  if (!scheme.mockSubsidy.available) return 0;

  let rate = scheme.mockSubsidy.percentage;

  // Specific PMEGP multi-tier rules:
  if (scheme.id === 'pmegp') {
    const isSpecialCategory = 
      ['OBC', 'SC', 'ST', 'Minority'].includes(profile.socialCategory) ||
      profile.specialCategory !== 'None' ||
      profile.gender === 'Female';

    const isRural = profile.businessLocation === 'Rural';

    if (isSpecialCategory) {
      rate = isRural ? 35 : 25;
    } else {
      rate = isRural ? 25 : 15;
    }
  }

  return rate;
}

/**
 * Formats numbers in Indian Lakhs/Crores numbering convention
 * Example: 500000 -> ₹5,00,000
 */
export function formatINR(amount: number): string {
  if (isNaN(amount) || amount === null || amount === undefined) return '₹0';
  
  const rounded = Math.round(amount);
  const isNegative = rounded < 0;
  const absStr = Math.abs(rounded).toString();

  let lastThree = absStr.substring(absStr.length - 3);
  const otherNumbers = absStr.substring(0, absStr.length - 3);

  if (otherNumbers !== '') {
    lastThree = ',' + lastThree;
  }

  const formatted = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;
  return `${isNegative ? '-' : ''}₹${formatted}`;
}

/**
 * Formats compact Indian currency (e.g. ₹5 Lakh, ₹1.2 Cr)
 */
export function formatCompactINR(amount: number): string {
  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(2).replace(/\.00$/, '')} Cr`;
  }
  if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(2).replace(/\.00$/, '')} Lakh`;
  }
  return formatINR(amount);
}
