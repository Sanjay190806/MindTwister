import React, { useState, useMemo } from 'react';
import { Calculator, IndianRupee, Percent, Clock, Gift, ShieldAlert, Sparkles } from 'lucide-react';
import { Scheme, EntrepreneurProfile } from '../../types';
import { calculateFinancials, formatINR, getApplicableSubsidy } from '../../utils/finance';

interface FinancialCalculatorSectionProps {
  scheme: Scheme;
  profile: EntrepreneurProfile;
}

export const FinancialCalculatorSection: React.FC<FinancialCalculatorSectionProps> = ({
  scheme,
  profile
}) => {
  // Pre-populate with user requested loan amount or scheme defaults
  const initialPrincipal = profile.preferredLoanAmount || profile.requiredFunding || 500000;
  const initialTenure = profile.preferredTenureYears || scheme.mockTenureYears || 5;
  const initialRate = scheme.mockInterestRate || 8.5;

  const [loanAmount, setLoanAmount] = useState<number>(initialPrincipal);
  const [interestRate, setInterestRate] = useState<number>(initialRate);
  const [tenureYears, setTenureYears] = useState<number>(initialTenure);

  const subsidyRate = useMemo(() => {
    return getApplicableSubsidy(scheme, profile);
  }, [scheme, profile]);

  const calc = useMemo(() => {
    return calculateFinancials(loanAmount, interestRate, tenureYears, subsidyRate);
  }, [loanAmount, interestRate, tenureYears, subsidyRate]);

  // Proportions for visual bar
  const totalBar = calc.principal + calc.totalInterest;
  const principalPercent = totalBar > 0 ? Math.round((calc.principal / totalBar) * 100) : 50;
  const interestPercent = 100 - principalPercent;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-gov p-6 sm:p-8 space-y-6">
      
      {/* Title & Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-blue-800" />
            <h3 className="text-lg font-bold text-slate-900">
              Financial Estimate & EMI Calculator
            </h3>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Interactive calculation reflecting mock interest rates, repayment tenure and capital subsidies
          </p>
        </div>

        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200 self-start sm:self-auto">
          Demo Amortization Model
        </span>
      </div>

      {/* Top 5 Key Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {/* Loan Amount */}
        <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
          <span className="text-[10px] uppercase font-bold text-slate-400 block">
            Loan Principal
          </span>
          <span className="text-base sm:text-lg font-black text-[#0B2545] mt-0.5 block">
            {formatINR(calc.principal)}
          </span>
          <span className="text-[10px] text-slate-500">Term Loan Component</span>
        </div>

        {/* Mock Interest */}
        <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
          <span className="text-[10px] uppercase font-bold text-slate-400 block">
            Mock Interest Rate
          </span>
          <span className="text-base sm:text-lg font-black text-emerald-700 mt-0.5 block">
            {calc.annualInterestRate}% p.a.
          </span>
          <span className="text-[10px] text-slate-500">Indicative benchmark</span>
        </div>

        {/* Mock Tenure */}
        <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
          <span className="text-[10px] uppercase font-bold text-slate-400 block">
            Loan Tenure
          </span>
          <span className="text-base sm:text-lg font-black text-slate-800 mt-0.5 block">
            {calc.tenureYears} Years
          </span>
          <span className="text-[10px] text-slate-500">{calc.tenureYears * 12} Monthly installments</span>
        </div>

        {/* Estimated Monthly EMI */}
        <div className="bg-blue-50/80 p-3.5 rounded-xl border border-blue-200 sm:col-span-1">
          <span className="text-[10px] uppercase font-bold text-blue-700 block">
            Estimated Monthly EMI
          </span>
          <span className="text-base sm:text-lg font-black text-blue-950 mt-0.5 block">
            {formatINR(calc.monthlyEmi)}
          </span>
          <span className="text-[10px] text-blue-700 font-medium">Per month payout</span>
        </div>

        {/* Mock Subsidy / Benefit */}
        <div className="bg-emerald-50/80 p-3.5 rounded-xl border border-emerald-200 col-span-2 sm:col-span-1">
          <span className="text-[10px] uppercase font-bold text-emerald-800 block">
            Govt Subsidy / Benefit
          </span>
          <span className="text-base sm:text-lg font-black text-emerald-800 mt-0.5 block">
            {formatINR(calc.estimatedSubsidy)}
          </span>
          <span className="text-[10px] text-emerald-700 font-medium">
            {subsidyRate}% Capital Margin Money
          </span>
        </div>
      </div>

      {/* Interactive Controls & Live Sliders */}
      <div className="bg-slate-50/80 rounded-xl p-5 border border-slate-200 space-y-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
          Fine-tune Loan Parameters
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Loan Amount Slider */}
          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
              <span>Loan Amount:</span>
              <span className="text-[#0B2545] font-bold">{formatINR(loanAmount)}</span>
            </div>
            <input
              type="range"
              min={scheme.minFunding}
              max={Math.min(scheme.maxFunding, 2500000)}
              step="25000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(parseInt(e.target.value) || scheme.minFunding)}
              className="w-full accent-[#0B2545] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>{formatINR(scheme.minFunding)}</span>
              <span>{formatINR(Math.min(scheme.maxFunding, 2500000))}</span>
            </div>
          </div>

          {/* Interest Rate Slider */}
          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
              <span>Interest Rate:</span>
              <span className="text-emerald-700 font-bold">{interestRate}% p.a.</span>
            </div>
            <input
              type="range"
              min="5"
              max="15"
              step="0.25"
              value={interestRate}
              onChange={(e) => setInterestRate(parseFloat(e.target.value) || 8.5)}
              className="w-full accent-emerald-700 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>5.0% (Concessional)</span>
              <span>15.0%</span>
            </div>
          </div>

          {/* Tenure Slider */}
          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
              <span>Repayment Tenure:</span>
              <span className="text-slate-900 font-bold">{tenureYears} Years</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={tenureYears}
              onChange={(e) => setTenureYears(parseInt(e.target.value) || 5)}
              className="w-full accent-[#0B2545] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>1 Year</span>
              <span>10 Years</span>
            </div>
          </div>
        </div>
      </div>

      {/* Financial Breakdown & Equation */}
      <div className="border border-slate-200 rounded-xl p-5 bg-white space-y-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
          Financial Breakdown & Net Burden Summary
        </h4>

        {/* Breakdown Equation */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center py-2 bg-slate-50 rounded-xl border border-slate-100">
          <div className="p-2">
            <span className="text-[10px] font-semibold text-slate-500 uppercase">Principal Loan</span>
            <div className="text-sm sm:text-base font-bold text-slate-900">{formatINR(calc.principal)}</div>
          </div>
          <div className="p-2">
            <span className="text-[10px] font-semibold text-slate-500 uppercase">+ Total Interest</span>
            <div className="text-sm sm:text-base font-bold text-rose-700">+{formatINR(calc.totalInterest)}</div>
          </div>
          <div className="p-2">
            <span className="text-[10px] font-semibold text-slate-500 uppercase">- Govt Subsidy</span>
            <div className="text-sm sm:text-base font-bold text-emerald-700">-{formatINR(calc.estimatedSubsidy)}</div>
          </div>
          <div className="p-2 bg-blue-100/50 rounded-lg">
            <span className="text-[10px] font-bold text-blue-900 uppercase">= Net Burden</span>
            <div className="text-sm sm:text-base font-black text-[#0B2545]">{formatINR(calc.netFinancialBurden)}</div>
          </div>
        </div>

        {/* Visual Progress Proportion (Principal vs Interest) */}
        <div className="space-y-1.5 pt-2">
          <div className="flex justify-between text-xs text-slate-600">
            <span>Principal vs Interest Distribution</span>
            <span className="font-semibold">
              Total Repayment: <strong className="text-slate-900">{formatINR(calc.totalRepayment)}</strong>
            </span>
          </div>
          <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden flex shadow-inner">
            <div
              className="bg-[#0B2545] h-full flex items-center justify-center text-[10px] text-white font-bold"
              style={{ width: `${principalPercent}%` }}
              title={`Principal: ${principalPercent}%`}
            >
              {principalPercent > 20 && `${principalPercent}% Principal`}
            </div>
            <div
              className="bg-amber-500 h-full flex items-center justify-center text-[10px] text-slate-950 font-bold"
              style={{ width: `${interestPercent}%` }}
              title={`Interest: ${interestPercent}%`}
            >
              {interestPercent > 15 && `${interestPercent}% Interest`}
            </div>
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0B2545]"></span>
              Principal: {formatINR(calc.principal)}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              Interest Outlay: {formatINR(calc.totalInterest)}
            </span>
          </div>
        </div>
      </div>

      {/* Mandatory Demo Disclaimer for financial section */}
      <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-3 text-[11px] text-amber-900 flex items-start gap-2">
        <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <div>
          <strong>Financial Estimate — Demo Only:</strong> Interest rates, subsidy values and calculations shown here are mock values for demonstration and are not official scheme terms. Final lending rate, margin money requirements and amortizations will be determined by the financing bank upon physical appraisal.
        </div>
      </div>

    </div>
  );
};
