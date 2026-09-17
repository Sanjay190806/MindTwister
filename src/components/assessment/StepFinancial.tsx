import React from 'react';
import { IndianRupee } from 'lucide-react';
import { useAssessment } from '../../context/AssessmentContext';
import { formatINR } from '../../utils/finance';

export const StepFinancial: React.FC = () => {
  const { profile, updateProfile } = useAssessment();

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-100 pb-4">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <IndianRupee className="w-5 h-5 text-blue-700" />
          Step 3: Financial Profile & Funding Requirement
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Funding preference and cash flow metrics determine MUDRA, PMEGP or CGTMSE alignment.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="bg-blue-50/60 p-4 rounded-xl border border-blue-200">
          <label className="block text-xs font-bold text-[#0B2545] mb-1">
            Total Funding Required (in ₹) *
          </label>
          <input
            type="number"
            step="25000"
            min="25000"
            max="100000000"
            value={profile.requiredFunding}
            onChange={(e) => {
              const val = parseInt(e.target.value) || 0;
              updateProfile({ requiredFunding: val, preferredLoanAmount: val });
            }}
            className="w-full text-sm font-bold text-[#0B2545] px-3.5 py-2 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
          <div className="text-xs font-semibold text-blue-800 mt-1">
            {formatINR(profile.requiredFunding)}
          </div>
        </div>

        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Preferred Bank Loan Component
          </label>
          <input
            type="number"
            step="25000"
            value={profile.preferredLoanAmount}
            onChange={(e) => updateProfile({ preferredLoanAmount: parseInt(e.target.value) || 0 })}
            className="w-full text-sm font-bold text-slate-800 px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
          <div className="text-xs text-slate-500 mt-1">
            {formatINR(profile.preferredLoanAmount)}
          </div>
        </div>

        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Preferred Repayment Tenure: <span className="font-bold text-[#0B2545]">{profile.preferredTenureYears} Years</span>
          </label>
          <input
            type="range"
            min="1"
            max="10"
            step="1"
            value={profile.preferredTenureYears}
            onChange={(e) => updateProfile({ preferredTenureYears: parseInt(e.target.value) || 5 })}
            className="w-full accent-[#0B2545] cursor-pointer mt-2"
          />
          <div className="flex justify-between text-[10px] text-slate-400 mt-1">
            <span>1 Year</span>
            <span>5 Years</span>
            <span>10 Years</span>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Annual Personal Income (in ₹)
          </label>
          <input
            type="number"
            step="25000"
            value={profile.personalIncome}
            onChange={(e) => updateProfile({ personalIncome: parseInt(e.target.value) || 0 })}
            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
          />
          <span className="text-[11px] text-slate-500 mt-1 block">
            {formatINR(profile.personalIncome)}
          </span>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Annual Business Revenue (in ₹)
          </label>
          <input
            type="number"
            step="50000"
            value={profile.businessRevenue}
            onChange={(e) => updateProfile({ businessRevenue: parseInt(e.target.value) || 0 })}
            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
          />
          <span className="text-[11px] text-slate-500 mt-1 block">
            {formatINR(profile.businessRevenue)}
          </span>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Existing Self-Investment (in ₹)
          </label>
          <input
            type="number"
            step="25000"
            value={profile.existingInvestment}
            onChange={(e) => updateProfile({ existingInvestment: parseInt(e.target.value) || 0 })}
            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
          />
          <span className="text-[11px] text-slate-500 mt-1 block">
            {formatINR(profile.existingInvestment)}
          </span>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Existing Active Loans?
          </label>
          <select
            value={profile.existingLoans}
            onChange={(e) => updateProfile({ existingLoans: e.target.value as any })}
            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
          >
            <option value="No">No active bank debt</option>
            <option value="Yes">Yes, servicing current loan</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Monthly Existing EMI (if any)
          </label>
          <input
            type="number"
            value={profile.monthlyExistingEmi}
            onChange={(e) => updateProfile({ monthlyExistingEmi: parseInt(e.target.value) || 0 })}
            disabled={profile.existingLoans === 'No'}
            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 disabled:bg-slate-100"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Collateral Security Available?
          </label>
          <select
            value={profile.collateralAvailable}
            onChange={(e) => updateProfile({ collateralAvailable: e.target.value as any })}
            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 font-medium"
          >
            <option value="No">No (Filter Collateral-Free Schemes)</option>
            <option value="Yes">Yes (Tangible Property Available)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Credit History Rating
          </label>
          <select
            value={profile.creditHistory}
            onChange={(e) => updateProfile({ creditHistory: e.target.value as any })}
            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 font-medium"
          >
            <option value="Good">Good (CIBIL 700+ / Timely history)</option>
            <option value="Average">Average (CIBIL 600 - 699)</option>
            <option value="Limited / No History">Limited / No Prior History</option>
          </select>
        </div>
      </div>
    </div>
  );
};
