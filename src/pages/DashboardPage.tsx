import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  FileCheck2, 
  IndianRupee, 
  Compass, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Building2, 
  Clock, 
  RotateCcw,
  UserCheck
} from 'lucide-react';
import { useAssessment } from '../context/AssessmentContext';
import { formatINR, formatCompactINR } from '../utils/finance';
import { MASTER_DOCUMENTS } from '../data/schemes';

export const DashboardPage: React.FC = () => {
  const { 
    profile, 
    topRecommendation, 
    loadDemoPersona, 
    currentPersonaKey 
  } = useAssessment();

  const totalDocs = MASTER_DOCUMENTS.length;
  const readyDocs = Object.values(profile.availableDocuments).filter(Boolean).length;
  const missingDocs = totalDocs - readyDocs;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-[#0B2545] via-[#103A69] to-[#134B70] rounded-2xl text-white p-6 sm:p-8 shadow-gov">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded shadow-xs">
                Citizen Dashboard
              </span>
              <span className="text-xs text-blue-200">
                SIH 2026 Prototype
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black">
              Welcome to JANSAHAY AI, {profile.fullName || 'Citizen Entrepreneur'}
            </h1>
            <p className="text-xs sm:text-sm text-blue-100">
              {profile.businessName} • {profile.businessType} ({profile.businessStage}) • {profile.city}, {profile.state}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <Link
              to="/results"
              className="inline-flex items-center gap-1.5 bg-[#FF671F] hover:bg-[#e05817] text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-sm transition"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>View Full Recommendation</span>
            </Link>
            <Link
              to="/assessment"
              className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs font-semibold px-3.5 py-2.5 rounded-lg transition"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Modify Assessment</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 4 Summary Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* Assessment Status */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 flex items-center justify-center shrink-0">
            <Award className="w-6 h-6 text-amber-600" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase block">Assessment Status</span>
            <span className="text-xl font-black text-slate-900 block mt-0.5">
              {topRecommendation?.score}% Demo Match
            </span>
            <span className="text-[11px] text-emerald-700 font-semibold">{topRecommendation?.matchTier}</span>
          </div>
        </div>

        {/* Recommended Scheme */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 flex items-center justify-center shrink-0">
            <Building2 className="w-6 h-6 text-blue-700" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase block">Recommended Scheme</span>
            <span className="text-xl font-black text-[#0B2545] block mt-0.5">
              {topRecommendation?.scheme.code}
            </span>
            <span className="text-[11px] text-slate-500 font-medium truncate max-w-[160px] block">
              {topRecommendation?.scheme.category}
            </span>
          </div>
        </div>

        {/* Documents Status */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-center shrink-0">
            <FileCheck2 className="w-6 h-6 text-emerald-700" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase block">Document Readiness</span>
            <span className="text-xl font-black text-slate-900 block mt-0.5">
              {readyDocs} / {totalDocs} Ready
            </span>
            <span className="text-[11px] text-amber-700 font-medium">
              {missingDocs > 0 ? `${missingDocs} documents pending` : 'All ready'}
            </span>
          </div>
        </div>

        {/* Funding Requirement */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-800 flex items-center justify-center shrink-0">
            <IndianRupee className="w-6 h-6 text-indigo-700" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase block">Required Funding</span>
            <span className="text-xl font-black text-slate-900 block mt-0.5">
              {formatCompactINR(profile.requiredFunding)}
            </span>
            <span className="text-[11px] text-slate-500 font-medium">{profile.preferredTenureYears} Years preferred</span>
          </div>
        </div>

      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: My Active Recommendation & Financial Summary */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Active Recommendation Snapshot */}
          {topRecommendation && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-gov p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  <h3 className="font-bold text-base text-slate-900">
                    Primary Scheme Recommendation
                  </h3>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                  {topRecommendation.score}% Match
                </span>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#0B2545]">
                  {topRecommendation.scheme.name} ({topRecommendation.scheme.code})
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {topRecommendation.scheme.shortDescription}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Funding</span>
                  <div className="font-bold text-slate-900 mt-0.5">{formatCompactINR(profile.requiredFunding)}</div>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Mock Interest</span>
                  <div className="font-bold text-emerald-700 mt-0.5">{topRecommendation.scheme.mockInterestRate}% p.a.</div>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Tenure</span>
                  <div className="font-bold text-slate-900 mt-0.5">{topRecommendation.scheme.mockTenureYears} Years</div>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Subsidy Margin</span>
                  <div className="font-bold text-slate-900 mt-0.5">{topRecommendation.scheme.mockSubsidy.percentage}% Max</div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <Link
                  to="/results"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900"
                >
                  <span>Open Complete Recommendation & EMI Calculator</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}

          {/* Quick Action Plan / Next Steps */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-gov p-6 space-y-4">
            <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-800" />
              Your Recommended Action Checklist
            </h3>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-900 font-bold flex items-center justify-center shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <div className="font-bold text-slate-900">Resolve Missing Documents</div>
                  <div className="text-slate-600 mt-0.5">
                    {!profile.availableDocuments['udyamRegistration'] 
                      ? 'Obtain free Udyam Registration online or visit nearest Ambattur DIC helpdesk.'
                      : 'Ensure all KYC certificates are validated.'}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-900 font-bold flex items-center justify-center shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <div className="font-bold text-slate-900">Prepare Detailed Project Report (DPR)</div>
                  <div className="text-slate-600 mt-0.5">
                    Collate equipment purchase quotations and projected 3-year cash flows for the bank appraiser.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-900 font-bold flex items-center justify-center shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <div className="font-bold text-slate-900">Apply via Official e-Portal</div>
                  <div className="text-slate-600 mt-0.5">
                    Submit digital application on {topRecommendation?.scheme.officialPortalUrl.replace('https://', '')} selecting your designated Lead Bank Branch.
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Col: Document Audit & Persona Switcher */}
        <div className="space-y-6">
          
          {/* Documents Snapshot */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-gov p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-blue-800" />
                Document Checklist
              </h3>
              <span className="text-xs font-bold text-slate-700">
                {readyDocs}/{totalDocs}
              </span>
            </div>

            <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
              {MASTER_DOCUMENTS.map(doc => {
                const isReady = profile.availableDocuments[doc.id];
                return (
                  <div
                    key={doc.id}
                    className={`p-2 rounded-lg border text-xs flex items-center justify-between gap-2 ${
                      isReady ? 'bg-emerald-50/60 border-emerald-200' : 'bg-amber-50/60 border-amber-200'
                    }`}
                  >
                    <span className="font-medium text-slate-800 truncate">
                      {doc.name}
                    </span>
                    {isReady ? (
                      <span className="text-[10px] font-bold text-emerald-700 flex items-center gap-1 shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Ready
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold text-amber-700 flex items-center gap-1 shrink-0">
                        <AlertTriangle className="w-3.5 h-3.5" /> Missing
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            <Link
              to="/results"
              className="w-full text-center block text-xs font-bold text-blue-700 hover:text-blue-900 pt-2"
            >
              Manage Missing Documents & Centre
            </Link>
          </div>

          {/* Quick Demo Switcher Card for Hackathon Judges */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 space-y-3">
            <div className="flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-emerald-700" />
              <h4 className="font-bold text-xs uppercase text-slate-800">
                Test Other SIH Personas
              </h4>
            </div>
            <p className="text-[11px] text-slate-500">
              Instantly simulate different entrepreneur demographics and sectors to examine matching variations:
            </p>
            <div className="space-y-2 pt-1">
              <button
                onClick={() => loadDemoPersona('arun')}
                className={`w-full text-left p-2 rounded-lg text-xs font-semibold border transition ${
                  currentPersonaKey === 'arun' ? 'bg-[#0B2545] text-white border-[#0B2545]' : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-200'
                }`}
              >
                Arun Kumar (Food Mfg • ₹5L • Expansion)
              </button>
              <button
                onClick={() => loadDemoPersona('pooja')}
                className={`w-full text-left p-2 rounded-lg text-xs font-semibold border transition ${
                  currentPersonaKey === 'pooja' ? 'bg-[#0B2545] text-white border-[#0B2545]' : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-200'
                }`}
              >
                Pooja Sharma (Women Artisan • Handloom)
              </button>
              <button
                onClick={() => loadDemoPersona('ramesh')}
                className={`w-full text-left p-2 rounded-lg text-xs font-semibold border transition ${
                  currentPersonaKey === 'ramesh' ? 'bg-[#0B2545] text-white border-[#0B2545]' : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-200'
                }`}
              >
                Ramesh Yadav (Rural Agri • Pulses)
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
