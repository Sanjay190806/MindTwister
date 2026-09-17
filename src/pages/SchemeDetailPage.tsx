import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  ShieldCheck, 
  IndianRupee, 
  Percent, 
  Clock, 
  FileCheck2, 
  Building2, 
  Sparkles, 
  AlertCircle 
} from 'lucide-react';
import { useAssessment } from '../context/AssessmentContext';
import { MASTER_DOCUMENTS } from '../data/schemes';
import { formatCompactINR, formatINR } from '../utils/finance';
import { CHANNEL_PARTNER_DATA } from '../data/centres';

export const SchemeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { allSchemes, rankedResults, profile, toggleCompareScheme, selectedCompareIds } = useAssessment();

  const scheme = allSchemes.find(s => s.id === id);
  const match = rankedResults.find(r => r.scheme.id === id);

  if (!scheme) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-800">Scheme Not Found</h2>
        <p className="text-xs text-slate-500">The requested government scheme does not exist in our catalog.</p>
        <Link
          to="/schemes"
          className="inline-flex items-center gap-1.5 bg-[#0B2545] text-white text-xs font-bold px-4 py-2 rounded-lg"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Scheme Explorer
        </Link>
      </div>
    );
  }

  const partner = CHANNEL_PARTNER_DATA[scheme.id];
  const isSelectedForCompare = selectedCompareIds.includes(scheme.id);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Top Breadcrumbs */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Link to="/" className="hover:text-slate-800">Home</Link>
          <span>/</span>
          <Link to="/schemes" className="hover:text-slate-800">Schemes</Link>
          <span>/</span>
          <span className="font-semibold text-[#0B2545]">{scheme.code}</span>
        </div>

        <Link
          to="/schemes"
          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Schemes</span>
        </Link>
      </div>

      {/* Scheme Header Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-gov p-6 sm:p-8 space-y-5">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200">
                {scheme.code}
              </span>
              <span className="text-xs font-semibold text-slate-500">
                {scheme.category}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#0B2545]">
              {scheme.name}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              {scheme.ministry}
            </p>
          </div>

          {match && (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 px-4 text-right shrink-0">
              <span className="text-[10px] uppercase font-bold text-emerald-800 block">
                Your Assessment Fit
              </span>
              <span className="text-2xl font-black text-emerald-700">
                {match.score}%
              </span>
              <span className="text-xs font-semibold text-emerald-800 block mt-0.5">
                {match.matchTier}
              </span>
            </div>
          )}
        </div>

        <p className="text-sm text-slate-700 leading-relaxed font-medium">
          {scheme.shortDescription}
        </p>

        {/* 4 Quick Metric Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-100 text-xs">
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
            <span className="text-[10px] uppercase font-semibold text-slate-400 block">Funding Range</span>
            <strong className="text-sm text-slate-900 block mt-0.5">{formatCompactINR(scheme.minFunding)} - {formatCompactINR(scheme.maxFunding)}</strong>
          </div>
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
            <span className="text-[10px] uppercase font-semibold text-slate-400 block">Mock Interest</span>
            <strong className="text-sm text-emerald-700 block mt-0.5">{scheme.mockInterestRate}% p.a.</strong>
          </div>
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
            <span className="text-[10px] uppercase font-semibold text-slate-400 block">Repayment Tenure</span>
            <strong className="text-sm text-slate-900 block mt-0.5">{scheme.mockTenureYears} Years</strong>
          </div>
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
            <span className="text-[10px] uppercase font-semibold text-slate-400 block">Capital Subsidy</span>
            <strong className="text-sm text-slate-900 block mt-0.5">{scheme.mockSubsidy.available ? `${scheme.mockSubsidy.percentage}% Max` : 'Collateral Guarantee'}</strong>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            to="/assessment"
            className="inline-flex items-center gap-2 bg-[#0B2545] hover:bg-[#134B70] text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-xs transition"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Check My Profile Against This Scheme</span>
          </Link>

          <button
            onClick={() => toggleCompareScheme(scheme.id)}
            className="inline-flex items-center gap-1.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold px-4 py-2.5 rounded-lg transition"
          >
            <span>{isSelectedForCompare ? 'Remove from Comparison' : 'Add to Comparison'}</span>
          </button>

          <a
            href={scheme.officialPortalUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-blue-700 hover:underline inline-flex items-center gap-1 font-medium ml-auto"
          >
            <span>Official Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Target Beneficiaries & Eligibility Rules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Who It Is For */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3">
          <h3 className="text-base font-bold text-slate-900">
            Who It Is For (Target Beneficiaries)
          </h3>
          <ul className="space-y-2 text-xs text-slate-600">
            {scheme.targetUsers.map((user, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                <span>{user}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Eligibility Rules */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3">
          <h3 className="text-base font-bold text-slate-900">
            Demo Eligibility Parameters
          </h3>
          <ul className="space-y-2 text-xs text-slate-600">
            {scheme.eligibilityRules.map((rule, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Required Documents */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <FileCheck2 className="w-5 h-5 text-blue-800" />
            Mandatory Documents Checklist
          </h3>
          <span className="text-xs text-slate-500">
            {scheme.requiredDocuments.length} documents specified
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {scheme.requiredDocuments.map(docId => {
            const docInfo = MASTER_DOCUMENTS.find(d => d.id === docId);
            const isAvailable = profile.availableDocuments[docId];

            return (
              <div
                key={docId}
                className="p-3 rounded-xl border border-slate-200 bg-slate-50/50 flex items-start justify-between gap-2 text-xs"
              >
                <div>
                  <div className="font-bold text-slate-900">
                    {docInfo ? docInfo.name : docId}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {docInfo?.howToGet}
                  </div>
                </div>
                {isAvailable ? (
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded shrink-0">
                    Ready
                  </span>
                ) : (
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded shrink-0">
                    Pending
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Benefits & Limitations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Benefits */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3">
          <h3 className="text-base font-bold text-emerald-900">
            Scheme Benefits & Incentives
          </h3>
          <ul className="space-y-2 text-xs text-slate-600">
            {scheme.benefits.map((b, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5"></span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Limitations */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3">
          <h3 className="text-base font-bold text-slate-800">
            Conditions & Operational Limitations
          </h3>
          <ul className="space-y-2 text-xs text-slate-600">
            {scheme.limitations.map((lim, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 mt-1.5"></span>
                <span>{lim}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Application Steps */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
        <h3 className="text-base font-bold text-slate-900">
          Official Application Procedure
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {scheme.applicationSteps.map(step => (
            <div key={step.step} className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
              <div className="w-6 h-6 rounded-md bg-[#0B2545] text-white text-xs font-bold flex items-center justify-center">
                {step.step}
              </div>
              <h4 className="font-bold text-xs text-slate-900">{step.title}</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Important Disclaimer Note */}
      <div className="bg-amber-50/90 border border-amber-200 rounded-2xl p-4 text-xs text-amber-900 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div>
          <strong>Prototype Disclaimer:</strong> All scheme parameters, interest rates, capital subsidies and eligibility checklists shown above are demonstration values for Smart India Hackathon 2026. Please consult the official ministry portal or visit your nearest District Industries Centre for current official notifications before lodging physical applications.
        </div>
      </div>

    </div>
  );
};
