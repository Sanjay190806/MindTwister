import React from 'react';
import { X, Check, AlertTriangle, ExternalLink, ShieldCheck, Percent, Clock, IndianRupee, ArrowRight } from 'lucide-react';
import { Scheme } from '../types';
import { useAssessment } from '../context/AssessmentContext';
import { formatCompactINR } from '../utils/finance';
import { Link } from 'react-router-dom';

interface SchemeCompareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SchemeCompareModal: React.FC<SchemeCompareModalProps> = ({ isOpen, onClose }) => {
  const { allSchemes, selectedCompareIds, toggleCompareScheme, rankedResults } = useAssessment();

  if (!isOpen) return null;

  const compareSchemes: Scheme[] = allSchemes.filter(s => selectedCompareIds.includes(s.id));

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] flex flex-col border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-[#0B2545] text-white p-5 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold">Side-by-Side Scheme Comparison</h3>
              <span className="text-xs bg-blue-800 text-blue-200 px-2 py-0.5 rounded-full border border-blue-600">
                {compareSchemes.length} of max 3 selected
              </span>
            </div>
            <p className="text-xs text-blue-200 mt-0.5">
              Evaluating eligibility parameters, mock financing costs, capital subsidies and collateral terms
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Demo Disclaimer notice */}
        <div className="bg-amber-50 px-5 py-2 border-b border-amber-200 text-xs text-amber-900 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
          <span>
            <strong>Demo Terms:</strong> Interest rates, subsidies and tenures are mock values for comparison demonstration.
          </span>
        </div>

        {/* Modal content body */}
        <div className="p-6 overflow-x-auto overflow-y-auto flex-1">
          {compareSchemes.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              <p className="text-sm font-medium">No schemes selected for comparison.</p>
              <p className="text-xs text-slate-400 mt-1">Select up to 3 schemes from the Explorer or Results page.</p>
            </div>
          ) : (
            <div className="min-w-[700px]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="p-3 bg-slate-100 text-xs font-bold text-slate-700 uppercase tracking-wider rounded-tl-lg w-1/4 border border-slate-200">
                      Comparison Metric
                    </th>
                    {compareSchemes.map(scheme => {
                      const match = rankedResults.find(r => r.scheme.id === scheme.id);
                      return (
                        <th 
                          key={scheme.id}
                          className="p-3 bg-slate-50 text-slate-900 border border-slate-200 w-1/4 align-top"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                                {scheme.code}
                              </span>
                              <h4 className="font-bold text-sm text-slate-900 mt-1 line-clamp-2">
                                {scheme.name}
                              </h4>
                            </div>
                            <button
                              onClick={() => toggleCompareScheme(scheme.id)}
                              className="text-slate-400 hover:text-rose-600 p-1 rounded hover:bg-slate-200 transition"
                              title="Remove from comparison"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                          {match && (
                            <div className="mt-2 flex items-center gap-1.5">
                              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                                {match.score}% Demo Match
                              </span>
                              <span className="text-[10px] text-slate-500">
                                {match.matchTier}
                              </span>
                            </div>
                          )}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs text-slate-700">
                  
                  {/* Category & Ministry */}
                  <tr>
                    <td className="p-3 font-semibold bg-slate-50/70 border border-slate-200">
                      Nodal Ministry / Category
                    </td>
                    {compareSchemes.map(s => (
                      <td key={s.id} className="p-3 border border-slate-200">
                        <div className="font-medium text-slate-900">{s.category}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">{s.ministry}</div>
                      </td>
                    ))}
                  </tr>

                  {/* Funding Range */}
                  <tr>
                    <td className="p-3 font-semibold bg-slate-50/70 border border-slate-200">
                      Demo Funding Range
                    </td>
                    {compareSchemes.map(s => (
                      <td key={s.id} className="p-3 border border-slate-200">
                        <div className="text-sm font-bold text-[#0B2545]">
                          {formatCompactINR(s.minFunding)} - {formatCompactINR(s.maxFunding)}
                        </div>
                        <div className="text-[10px] text-slate-500">Composite / Term & Working Capital</div>
                      </td>
                    ))}
                  </tr>

                  {/* Mock Interest Rate */}
                  <tr>
                    <td className="p-3 font-semibold bg-slate-50/70 border border-slate-200">
                      Mock Interest Rate (Demo)
                    </td>
                    {compareSchemes.map(s => (
                      <td key={s.id} className="p-3 border border-slate-200 font-bold text-slate-900">
                        <span className="text-emerald-700 text-sm">{s.mockInterestRate}%</span> p.a.
                        <span className="block text-[10px] text-slate-500 font-normal">Floating / Nodal bank base rate</span>
                      </td>
                    ))}
                  </tr>

                  {/* Mock Tenure */}
                  <tr>
                    <td className="p-3 font-semibold bg-slate-50/70 border border-slate-200">
                      Repayment Tenure
                    </td>
                    {compareSchemes.map(s => (
                      <td key={s.id} className="p-3 border border-slate-200">
                        <span className="font-semibold text-slate-800">{s.mockTenureYears} Years</span>
                        <span className="block text-[10px] text-slate-500">With standard moratorium where applicable</span>
                      </td>
                    ))}
                  </tr>

                  {/* Subsidy / Capital Grant */}
                  <tr>
                    <td className="p-3 font-semibold bg-slate-50/70 border border-slate-200">
                      Capital Subsidy / Benefit
                    </td>
                    {compareSchemes.map(s => (
                      <td key={s.id} className="p-3 border border-slate-200">
                        {s.mockSubsidy.available ? (
                          <div className="text-emerald-800 bg-emerald-50/80 p-2 rounded border border-emerald-200">
                            <div className="font-bold text-xs">{s.mockSubsidy.percentage}% Capital Subsidy</div>
                            <div className="text-[10px] text-emerald-700 mt-0.5 leading-tight">{s.mockSubsidy.description}</div>
                          </div>
                        ) : (
                          <div className="text-slate-500 bg-slate-50 p-2 rounded border border-slate-200">
                            <span className="font-medium">No Direct Capital Grant</span>
                            <div className="text-[10px] text-slate-400 mt-0.5 leading-tight">{s.mockSubsidy.description}</div>
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Collateral Security */}
                  <tr>
                    <td className="p-3 font-semibold bg-slate-50/70 border border-slate-200">
                      Collateral Requirement
                    </td>
                    {compareSchemes.map(s => (
                      <td key={s.id} className="p-3 border border-slate-200">
                        {s.id === 'cgtmse' || s.id.includes('mudra') || s.id === 'pm-vishwakarma' ? (
                          <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            100% Collateral-Free
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-blue-800 font-semibold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                            No Collateral up to ₹10L
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Target Business Types */}
                  <tr>
                    <td className="p-3 font-semibold bg-slate-50/70 border border-slate-200">
                      Covered Business Sectors
                    </td>
                    {compareSchemes.map(s => (
                      <td key={s.id} className="p-3 border border-slate-200">
                        <div className="flex flex-wrap gap-1">
                          {s.businessTypes.map((b, i) => (
                            <span key={i} className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 border border-slate-200">
                              {b}
                            </span>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Key Required Documents */}
                  <tr>
                    <td className="p-3 font-semibold bg-slate-50/70 border border-slate-200">
                      Essential Documents
                    </td>
                    {compareSchemes.map(s => (
                      <td key={s.id} className="p-3 border border-slate-200">
                        <span className="text-[11px] font-medium text-slate-700">
                          {s.requiredDocuments.length} documents specified
                        </span>
                        <ul className="text-[10px] text-slate-500 mt-1 list-disc list-inside space-y-0.5">
                          {s.requiredDocuments.slice(0, 4).map((d, idx) => (
                            <li key={idx} className="capitalize">{d.replace(/([A-Z])/g, ' $1')}</li>
                          ))}
                          {s.requiredDocuments.length > 4 && (
                            <li className="italic text-slate-400">+{s.requiredDocuments.length - 4} more</li>
                          )}
                        </ul>
                      </td>
                    ))}
                  </tr>

                  {/* Action Link */}
                  <tr>
                    <td className="p-3 font-semibold bg-slate-50/70 border border-slate-200">
                      Detailed Breakdown
                    </td>
                    {compareSchemes.map(s => (
                      <td key={s.id} className="p-3 border border-slate-200">
                        <Link
                          to={`/schemes/${s.id}`}
                          onClick={onClose}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 hover:text-blue-900 underline"
                        >
                          <span>Full Scheme Dossier</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </td>
                    ))}
                  </tr>

                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Compare values are simulated for SIH 2026 prototype evaluation.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold rounded-lg transition"
          >
            Done Comparing
          </button>
        </div>
      </div>
    </div>
  );
};
