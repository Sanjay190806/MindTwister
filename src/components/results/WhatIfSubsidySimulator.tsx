import React, { useState } from 'react';
import { Sparkles, TrendingUp, Check, ArrowRight, ShieldCheck, MapPin, UserCheck, RefreshCw } from 'lucide-react';
import { Scheme, EntrepreneurProfile } from '../../types';
import { formatINR } from '../../utils/finance';
import { useAssessment } from '../../context/AssessmentContext';

interface WhatIfSubsidySimulatorProps {
  scheme: Scheme;
  profile: EntrepreneurProfile;
}

export const WhatIfSubsidySimulator: React.FC<WhatIfSubsidySimulatorProps> = ({
  scheme,
  profile
}) => {
  const { updateProfile } = useAssessment();

  const [simRural, setSimRural] = useState(profile.businessLocation === 'Rural');
  const [simSpecial, setSimSpecial] = useState(
    ['OBC', 'SC', 'ST', 'Minority'].includes(profile.socialCategory) ||
    profile.specialCategory !== 'None' ||
    profile.gender === 'Female'
  );
  const [appliedNotice, setAppliedNotice] = useState(false);

  // Baseline calculation
  const loan = profile.preferredLoanAmount || profile.requiredFunding || 500000;
  
  // Calculate baseline percentage
  let baselineRate = 15;
  const isCurrentSpecial = 
    ['OBC', 'SC', 'ST', 'Minority'].includes(profile.socialCategory) ||
    profile.specialCategory !== 'None' ||
    profile.gender === 'Female';
  const isCurrentRural = profile.businessLocation === 'Rural';

  if (isCurrentSpecial) {
    baselineRate = isCurrentRural ? 35 : 25;
  } else {
    baselineRate = isCurrentRural ? 25 : 15;
  }

  // Simulated rate
  let simulatedRate = 15;
  if (simSpecial) {
    simulatedRate = simRural ? 35 : 25;
  } else {
    simulatedRate = simRural ? 25 : 15;
  }

  const baselineSubsidy = Math.round((loan * baselineRate) / 100);
  const simulatedSubsidy = Math.round((loan * simulatedRate) / 100);
  const extraBenefit = simulatedSubsidy - baselineSubsidy;

  const handleApplyScenario = () => {
    updateProfile({
      businessLocation: simRural ? 'Rural' : 'Urban',
      socialCategory: simSpecial ? 'OBC' : 'General'
    });
    setAppliedNotice(true);
    setTimeout(() => setAppliedNotice(false), 3000);
  };

  if (!scheme.mockSubsidy.available) return null;

  return (
    <div className="bg-gradient-to-br from-emerald-50/70 via-white to-blue-50/50 rounded-2xl border-2 border-emerald-300/80 shadow-gov p-6 sm:p-8 space-y-5">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-emerald-100 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center shadow-xs">
            <Sparkles className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base sm:text-lg font-black text-slate-900">
                JANSAHAY AI "What-If" Subsidy Optimization Simulator
              </h3>
              <span className="text-[10px] uppercase font-bold bg-emerald-100 text-emerald-900 border border-emerald-300 px-2 py-0.5 rounded-full">
                Interactive Advisor
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Simulate how strategic business location or special category eligibility maximizes your government capital grant.
            </p>
          </div>
        </div>

        {appliedNotice && (
          <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1.5 rounded-lg border border-emerald-300 animate-in fade-in">
            ✓ Scenario Applied to Profile!
          </span>
        )}
      </div>

      {/* Simulator Toggles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Toggle 1: Rural Setup */}
        <div
          onClick={() => setSimRural(!simRural)}
          className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-start justify-between gap-3 ${
            simRural ? 'bg-emerald-50/80 border-emerald-500 shadow-xs' : 'bg-white border-slate-200 hover:border-slate-300'
          }`}
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-700" />
              <span className="text-xs font-bold text-slate-900">Establish in Rural / Panchayat Area</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-tight">
              Rural micro-units receive up to +10% higher central margin money subsidy under PMEGP.
            </p>
          </div>

          <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${
            simRural ? 'bg-emerald-700 border-emerald-700 text-white' : 'border-slate-300'
          }`}>
            {simRural && <Check className="w-3.5 h-3.5" />}
          </div>
        </div>

        {/* Toggle 2: Special / Women Category */}
        <div
          onClick={() => setSimSpecial(!simSpecial)}
          className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-start justify-between gap-3 ${
            simSpecial ? 'bg-emerald-50/80 border-emerald-500 shadow-xs' : 'bg-white border-slate-200 hover:border-slate-300'
          }`}
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-emerald-700" />
              <span className="text-xs font-bold text-slate-900">Women / OBC / SC / ST / Divyangjan Ownership</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-tight">
              Special category enterprise applicants qualify for higher central capital subsidy tiers (up to 35%).
            </p>
          </div>

          <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${
            simSpecial ? 'bg-emerald-700 border-emerald-700 text-white' : 'border-slate-300'
          }`}>
            {simSpecial && <Check className="w-3.5 h-3.5" />}
          </div>
        </div>

      </div>

      {/* Outcome Comparison Matrix */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        
        <div className="space-y-1">
          <span className="text-[10px] uppercase font-bold text-slate-400 block">Baseline Current Subsidy</span>
          <div className="text-sm sm:text-base font-bold text-slate-700">
            {formatINR(baselineSubsidy)} <span className="text-xs font-normal text-slate-500">({baselineRate}% grant)</span>
          </div>
        </div>

        <div className="hidden sm:block text-slate-300 text-2xl font-light">→</div>

        <div className="space-y-1">
          <span className="text-[10px] uppercase font-bold text-emerald-700 block">Simulated Optimized Subsidy</span>
          <div className="text-lg sm:text-xl font-black text-emerald-800">
            {formatINR(simulatedSubsidy)} <span className="text-xs font-semibold text-emerald-600">({simulatedRate}% grant)</span>
          </div>
        </div>

        <div className="space-y-1 sm:text-right">
          <span className="text-[10px] uppercase font-bold text-blue-700 block">Potential Additional Grant</span>
          <div className="text-base sm:text-lg font-black text-blue-900">
            {extraBenefit > 0 ? `+${formatINR(extraBenefit)}` : 'Optimal Tier Reached'}
          </div>
        </div>

        <button
          onClick={handleApplyScenario}
          className="inline-flex items-center justify-center gap-1.5 bg-[#0B2545] hover:bg-[#134B70] text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-xs transition shrink-0"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Apply Scenario</span>
        </button>

      </div>

    </div>
  );
};
