import React, { useState } from 'react';
import { FileCheck2, CheckCircle2, AlertCircle, UploadCloud } from 'lucide-react';
import { useAssessment } from '../../context/AssessmentContext';
import { MASTER_DOCUMENTS } from '../../data/schemes';

export const StepDocuments: React.FC = () => {
  const { profile, setAvailableDocument } = useAssessment();
  const [fakeUploadToast, setFakeUploadToast] = useState<string | null>(null);

  const handleFakeUpload = (docName: string) => {
    setFakeUploadToast(`Demo upload for "${docName}" simulated — no document is actually uploaded.`);
    setTimeout(() => setFakeUploadToast(null), 3500);
  };

  const readyCount = Object.values(profile.availableDocuments).filter(Boolean).length;

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <FileCheck2 className="w-5 h-5 text-blue-700" />
            Step 4: Document Readiness Audit
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Toggle each document as available or missing. JANSAHAY AI will provide guidance on missing documents.
          </p>
        </div>

        <div className="text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg">
          Readiness:{' '}
          <span className="text-emerald-700 font-bold">{readyCount}</span> / {MASTER_DOCUMENTS.length} Ready
        </div>
      </div>

      {fakeUploadToast && (
        <div className="bg-blue-50 border border-blue-200 text-blue-900 text-xs p-3 rounded-xl flex items-center gap-2 animate-in fade-in duration-150">
          <UploadCloud className="w-4 h-4 text-blue-600 shrink-0" />
          <span>{fakeUploadToast}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {MASTER_DOCUMENTS.map((doc) => {
          const isAvailable = Boolean(profile.availableDocuments[doc.id]);
          return (
            <div
              key={doc.id}
              className={`p-4 rounded-xl border transition-all ${
                isAvailable
                  ? 'bg-emerald-50/40 border-emerald-300 shadow-2xs'
                  : 'bg-amber-50/30 border-amber-200'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {doc.category}
                    </span>
                    {isAvailable ? (
                      <span className="text-[10px] font-bold text-emerald-700 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Ready
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold text-amber-700 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 text-amber-600" /> Missing / Pending
                      </span>
                    )}
                  </div>

                  <div className="font-bold text-xs text-slate-900 leading-snug pt-0.5">
                    {doc.name}
                  </div>
                  <p className="text-[11px] text-slate-500 leading-tight">
                    {doc.description}
                  </p>
                </div>

                <div className="flex flex-col items-end gap-2 shrink-0">
                  <div className="inline-flex rounded-lg border border-slate-200 p-0.5 bg-white text-xs">
                    <button
                      type="button"
                      onClick={() => setAvailableDocument(doc.id, true)}
                      className={`px-2 py-1 rounded text-[11px] font-semibold transition ${
                        isAvailable ? 'bg-emerald-600 text-white' : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      Available
                    </button>
                    <button
                      type="button"
                      onClick={() => setAvailableDocument(doc.id, false)}
                      className={`px-2 py-1 rounded text-[11px] font-semibold transition ${
                        !isAvailable ? 'bg-amber-600 text-white' : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      Missing
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleFakeUpload(doc.name)}
                    className="text-[10px] text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 hover:underline"
                  >
                    <UploadCloud className="w-3 h-3" />
                    Demo Upload
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
