import React from 'react';
import { FileCheck, CheckCircle2, AlertTriangle, MapPin, ExternalLink, HelpCircle, ArrowRight } from 'lucide-react';
import { Scheme, EntrepreneurProfile } from '../../types';
import { MASTER_DOCUMENTS } from '../../data/schemes';

interface DocumentReadinessSectionProps {
  scheme: Scheme;
  profile: EntrepreneurProfile;
  onOpenSupportCentres: (docName?: string) => void;
}

export const DocumentReadinessSection: React.FC<DocumentReadinessSectionProps> = ({
  scheme,
  profile,
  onOpenSupportCentres
}) => {
  // Focus on scheme's required documents
  const requiredDocIds = scheme.requiredDocuments;
  const schemeDocs = MASTER_DOCUMENTS.filter(doc => requiredDocIds.includes(doc.id));

  const availableDocs = schemeDocs.filter(doc => profile.availableDocuments[doc.id]);
  const missingDocs = schemeDocs.filter(doc => !profile.availableDocuments[doc.id]);

  const readyCount = availableDocs.length;
  const totalCount = schemeDocs.length;
  const percentage = totalCount > 0 ? Math.round((readyCount / totalCount) * 100) : 100;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-gov p-6 sm:p-8 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-blue-800" />
            <h3 className="text-lg font-bold text-slate-900">
              Document Readiness & Verification Status
            </h3>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Audit of mandatory paperwork required specifically for {scheme.code} application processing.
          </p>
        </div>

        {/* Readiness Badge */}
        <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200 self-start sm:self-auto">
          <div>
            <div className="text-xs font-semibold text-slate-500">Readiness Score</div>
            <div className="text-sm font-bold text-slate-900">
              <span className="text-emerald-700 font-extrabold">{readyCount}</span> of {totalCount} Documents Ready
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center border border-emerald-300">
            {percentage}%
          </div>
        </div>
      </div>

      {/* Available Documents Checklist */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Available Documents ({availableDocs.length})
          </h4>
          <span className="text-[11px] text-slate-400">Ready for digital submission</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {availableDocs.map(doc => (
            <div
              key={doc.id}
              className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-50/50 border border-emerald-200 text-xs"
            >
              <span className="font-medium text-slate-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                {doc.name}
              </span>
              <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">
                Verified Ready
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Missing Documents & Action Support */}
      {missingDocs.length > 0 && (
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              Missing Documents Requiring Action ({missingDocs.length})
            </h4>
            <span className="text-[11px] text-amber-700 font-medium">Resolution guidance provided below</span>
          </div>

          <div className="space-y-3">
            {missingDocs.map(doc => (
              <div
                key={doc.id}
                className="bg-amber-50/70 border-2 border-amber-300/80 rounded-xl p-4 shadow-xs space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    <span className="text-sm font-bold text-slate-900">
                      Missing: {doc.name}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-amber-800 bg-amber-200/80 px-2 py-0.5 rounded">
                      Action Needed
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">
                    Estimated time to obtain: <strong>{doc.estimatedDays}</strong>
                  </span>
                </div>

                {/* How to get it */}
                <div className="bg-white/80 rounded-lg p-3 border border-amber-200 text-xs space-y-1">
                  <div className="font-bold text-slate-800 flex items-center gap-1">
                    <HelpCircle className="w-3.5 h-3.5 text-blue-700" />
                    How to get it:
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {doc.howToGet}
                  </p>
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                  <span className="text-[11px] text-slate-500">
                    Issuing Authority: <strong className="text-slate-700">{doc.supportAgency}</strong>
                  </span>

                  <button
                    onClick={() => onOpenSupportCentres(doc.name)}
                    className="inline-flex items-center gap-1.5 bg-[#0B2545] hover:bg-[#134B70] text-white text-xs font-bold px-3.5 py-2 rounded-lg shadow-xs transition"
                  >
                    <MapPin className="w-3.5 h-3.5 text-amber-300" />
                    <span>Find Nearest Support Centre</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {missingDocs.length === 0 && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-700" />
          <span>All mandatory documents are identified as available. You can proceed directly to channel partner application.</span>
        </div>
      )}

    </div>
  );
};
