import React from 'react';
import { User, Briefcase, IndianRupee, FileCheck2, CheckCircle2, Edit3, Sparkles, ArrowRight, AlertCircle } from 'lucide-react';
import { useAssessment } from '../../context/AssessmentContext';
import { MASTER_DOCUMENTS } from '../../data/schemes';
import { formatINR } from '../../utils/finance';

interface StepReviewProps {
  onEditStep: (stepNumber: number) => void;
  onRunAnalysis: () => void;
}

export const StepReview: React.FC<StepReviewProps> = ({ onEditStep, onRunAnalysis }) => {
  const { profile } = useAssessment();
  const readyDocCount = Object.values(profile.availableDocuments).filter(Boolean).length;

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-100 pb-4">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          Step 5: Review Profile & Run AI Matching Engine
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Verify your parameters before the simulation evaluates national MSME schemes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
        {/* Personal Summary */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
            <span className="font-bold text-slate-900 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-blue-700" />
              Personal Information
            </span>
            <button
              onClick={() => onEditStep(1)}
              className="text-blue-700 hover:text-blue-900 font-semibold flex items-center gap-1"
            >
              <Edit3 className="w-3 h-3" /> Edit
            </button>
          </div>
          <div className="grid grid-cols-2 gap-y-1.5 text-slate-600 pt-1">
            <span>Name:</span> <strong className="text-slate-900">{profile.fullName || 'Not provided'}</strong>
            <span>Age & Gender:</span> <strong className="text-slate-900">{profile.age} yrs, {profile.gender}</strong>
            <span>Location:</span> <strong className="text-slate-900">{profile.city}, {profile.state} ({profile.pincode})</strong>
            <span>Category:</span> <strong className="text-slate-900">{profile.socialCategory} ({profile.specialCategory})</strong>
            <span>Type:</span> <strong className="text-slate-900">{profile.entrepreneurType}</strong>
          </div>
        </div>

        {/* Business Summary */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
            <span className="font-bold text-slate-900 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-blue-700" />
              Business Information
            </span>
            <button
              onClick={() => onEditStep(2)}
              className="text-blue-700 hover:text-blue-900 font-semibold flex items-center gap-1"
            >
              <Edit3 className="w-3 h-3" /> Edit
            </button>
          </div>
          <div className="grid grid-cols-2 gap-y-1.5 text-slate-600 pt-1">
            <span>Business Name:</span> <strong className="text-slate-900">{profile.businessName || 'Not specified'}</strong>
            <span>Industry Sector:</span> <strong className="text-slate-900">{profile.businessType}</strong>
            <span>Stage & Age:</span> <strong className="text-slate-900">{profile.businessStage} ({profile.yearsInBusiness} yrs)</strong>
            <span>Employees:</span> <strong className="text-slate-900">{profile.employees} workforce</strong>
            <span>Annual Turnover:</span> <strong className="text-slate-900">{formatINR(profile.annualTurnover)}</strong>
          </div>
        </div>

        {/* Financial Summary */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
            <span className="font-bold text-slate-900 flex items-center gap-1.5">
              <IndianRupee className="w-3.5 h-3.5 text-blue-700" />
              Financial & Loan Profile
            </span>
            <button
              onClick={() => onEditStep(3)}
              className="text-blue-700 hover:text-blue-900 font-semibold flex items-center gap-1"
            >
              <Edit3 className="w-3 h-3" /> Edit
            </button>
          </div>
          <div className="grid grid-cols-2 gap-y-1.5 text-slate-600 pt-1">
            <span>Required Funding:</span> <strong className="text-blue-900 font-bold">{formatINR(profile.requiredFunding)}</strong>
            <span>Loan Amount:</span> <strong className="text-slate-900">{formatINR(profile.preferredLoanAmount)}</strong>
            <span>Tenure Preference:</span> <strong className="text-slate-900">{profile.preferredTenureYears} Years</strong>
            <span>Collateral Offered:</span> <strong className="text-slate-900">{profile.collateralAvailable}</strong>
            <span>Credit History:</span> <strong className="text-slate-900">{profile.creditHistory}</strong>
          </div>
        </div>

        {/* Document Readiness Summary */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
            <span className="font-bold text-slate-900 flex items-center gap-1.5">
              <FileCheck2 className="w-3.5 h-3.5 text-blue-700" />
              Document Audit Status
            </span>
            <button
              onClick={() => onEditStep(4)}
              className="text-blue-700 hover:text-blue-900 font-semibold flex items-center gap-1"
            >
              <Edit3 className="w-3 h-3" /> Edit
            </button>
          </div>
          <div className="pt-1">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-slate-600">Document Readiness:</span>
              <strong className="text-emerald-700">
                {readyDocCount} of {MASTER_DOCUMENTS.length} Ready
              </strong>
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div
                className="bg-emerald-600 h-full transition-all duration-300"
                style={{
                  width: `${(readyDocCount / MASTER_DOCUMENTS.length) * 100}%`
                }}
              ></div>
            </div>
            {!profile.availableDocuments['udyamRegistration'] && (
              <div className="mt-2 text-[11px] text-amber-800 bg-amber-100/70 px-2 py-1 rounded flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0 text-amber-700" />
                <span>Udyam Registration is currently marked missing. Support centre will be mapped.</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="pt-4 text-center">
        <button
          onClick={onRunAnalysis}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0B2545] hover:bg-[#134B70] text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5"
        >
          <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
          <span>Analyze My Eligibility</span>
          <ArrowRight className="w-5 h-5" />
        </button>
        <p className="text-[11px] text-slate-400 mt-2">
          Simulates rule-based multi-scheme matching, financial calculations and centre discovery
        </p>
      </div>
    </div>
  );
};
