import React, { useState } from 'react';
import { X, Printer, Download, CheckCircle2, ShieldCheck, QrCode, Copy, Building2, MapPin, IndianRupee } from 'lucide-react';
import { MatchScoreResult, EntrepreneurProfile } from '../../types';
import { formatINR, formatCompactINR } from '../../utils/finance';

interface RecommendationSlipModalProps {
  isOpen: boolean;
  onClose: () => void;
  matchResult: MatchScoreResult;
  profile: EntrepreneurProfile;
}

export const RecommendationSlipModal: React.FC<RecommendationSlipModalProps> = ({
  isOpen,
  onClose,
  matchResult,
  profile
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const { scheme, score, matchTier } = matchResult;
  const slipId = `JSAI-2026-${profile.district?.substring(0, 3).toUpperCase() || 'IND'}-${Math.floor(10000 + Math.random() * 90000)}`;
  const dateStr = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    navigator.clipboard?.writeText(slipId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full flex flex-col border border-slate-300 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Top Bar */}
        <div className="bg-[#0B2545] text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF671F]"></span>
            <h3 className="text-sm font-bold tracking-wide">
              Official Scheme Recommendation Advisory Slip (Demo)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded-lg hover:bg-white/10 transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Printable Certificate Slip Body */}
        <div id="advisory-slip" className="p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[75vh] bg-white text-slate-800">
          
          {/* Slip Header */}
          <div className="border-b-2 border-slate-900 pb-4 text-center space-y-1">
            <div className="text-[10px] uppercase tracking-widest font-black text-slate-500">
              Smart India Hackathon 2026 • Problem SIH26092
            </div>
            <h2 className="text-xl font-black text-[#0B2545] tracking-tight">
              JANSAHAY AI SCHEME ADVISORY DOSSIER
            </h2>
            <p className="text-xs text-slate-600">
              Automated Citizen Entrepreneur Matching & Priority Sector Lending Assessment
            </p>
            <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 pt-1">
              <span>Ref ID: <strong className="font-mono text-slate-900">{slipId}</strong></span>
              <span>•</span>
              <span>Generated: <strong>{dateStr}</strong></span>
            </div>
          </div>

          {/* Citizen Demographics & Business Matrix */}
          <div className="grid grid-cols-2 gap-4 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Citizen Entrepreneur</span>
              <strong className="text-slate-900 text-sm">{profile.fullName || 'Citizen Candidate'}</strong>
              <div className="text-slate-600 text-[11px] mt-0.5">{profile.age} Yrs • {profile.gender} • {profile.socialCategory}</div>
              <div className="text-slate-600 text-[11px]">{profile.city}, {profile.state} ({profile.pincode})</div>
            </div>

            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Enterprise Profile</span>
              <strong className="text-slate-900 text-sm">{profile.businessName || 'Micro Enterprise'}</strong>
              <div className="text-slate-600 text-[11px] mt-0.5">{profile.businessType} • {profile.businessStage}</div>
              <div className="text-slate-600 text-[11px]">Turnover: {formatINR(profile.annualTurnover)}/yr</div>
            </div>
          </div>

          {/* Primary Recommendation Card */}
          <div className="border-2 border-blue-900/30 rounded-xl p-5 bg-blue-50/40 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded bg-blue-900 text-white">
                  Primary Matched Framework
                </span>
                <h3 className="text-lg font-black text-[#0B2545] mt-1">
                  {scheme.name} ({scheme.code})
                </h3>
              </div>
              <div className="text-right">
                <div className="text-2xl font-black text-emerald-700">{score}%</div>
                <div className="text-[10px] font-bold uppercase text-emerald-900">{matchTier}</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-blue-200 text-xs">
              <div>
                <span className="text-[10px] text-slate-500 uppercase block">Recommended Loan</span>
                <strong className="text-slate-900">{formatINR(profile.preferredLoanAmount || 500000)}</strong>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 uppercase block">Mock Interest</span>
                <strong className="text-emerald-700">{scheme.mockInterestRate}% p.a.</strong>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 uppercase block">Capital Subsidy</span>
                <strong className="text-slate-900">{scheme.mockSubsidy.percentage}% Max</strong>
              </div>
            </div>
          </div>

          {/* Document Readiness & Support Channel */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="border border-slate-200 p-3.5 rounded-xl bg-slate-50 space-y-1.5">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Paperwork Readiness</span>
              <div className="font-bold text-emerald-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{Object.values(profile.availableDocuments).filter(Boolean).length} of 13 Documents Ready</span>
              </div>
              <p className="text-[11px] text-slate-600">
                {!profile.availableDocuments['udyamRegistration'] ? 'Missing: Udyam MSME Registration (Assistance mapped)' : 'All basic identity and KYC ready.'}
              </p>
            </div>

            <div className="border border-slate-200 p-3.5 rounded-xl bg-slate-50 space-y-1.5">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Sponsoring Channel</span>
              <div className="font-bold text-slate-900">District Industries Centre (DIC)</div>
              <p className="text-[11px] text-slate-600">
                Nearest Helpdesk: Ambattur Industrial Estate Desk (4.2 km away)
              </p>
            </div>
          </div>

          {/* Verification QR and Barcode Graphic */}
          <div className="pt-2 border-t border-slate-200 flex items-center justify-between gap-4">
            <div className="space-y-0.5">
              <div className="font-mono text-[10px] tracking-widest text-slate-400 uppercase">
                ||| | ||||| || |||||| | |||| ||| |||||||
              </div>
              <div className="text-[10px] text-slate-400">
                Digital Verification Code: <strong>{slipId}</strong>
              </div>
            </div>
            <div className="text-right text-[10px] text-slate-400 italic">
              Smart India Hackathon 2026 Simulation Only
            </div>
          </div>

        </div>

        {/* Modal Actions Footer */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex items-center justify-between gap-2">
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 font-medium px-3 py-1.5 rounded hover:bg-slate-200 transition"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>{copied ? 'Copied ID!' : 'Copy Reference ID'}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 bg-[#0B2545] hover:bg-[#134B70] text-white text-xs font-bold px-4 py-2 rounded-lg shadow-xs transition"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="px-3 py-2 text-xs font-semibold bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg transition"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
