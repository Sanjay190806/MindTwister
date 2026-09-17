import React from 'react';
import { CheckCircle, ShieldAlert, ArrowRight, Clock, FileCheck2, Send, Award, Landmark } from 'lucide-react';
import { Scheme } from '../../types';

interface ApplicationGuidanceTimelineProps {
  scheme: Scheme;
}

export const ApplicationGuidanceTimeline: React.FC<ApplicationGuidanceTimelineProps> = ({ scheme }) => {
  const steps = [
    {
      num: '01',
      title: 'Prepare Essential Documents',
      desc: 'Ensure mandatory KYC, bank statements, quotations and Udyam registration are organized in digital format.'
    },
    {
      num: '02',
      title: 'Verify Eligibility & DPR',
      desc: 'Validate project costing, DSCR and debt-service capacity against nodal MSME guidelines.'
    },
    {
      num: '03',
      title: 'Contact Sponsoring Channel',
      desc: 'Liaise with local District Industries Centre (DIC) or lead bank branch for preliminary project vetting.'
    },
    {
      num: '04',
      title: 'Submit Application on e-Portal',
      desc: `Lodge formal digital application through ${scheme.officialPortalUrl.replace('https://', '')} with DPR.`
    },
    {
      num: '05',
      title: 'Task Force & Bank Credit Appraisal',
      desc: 'District Task Force Committee reviews viability and financing bank conducts field appraisal & inspection.'
    },
    {
      num: '06',
      title: 'Final Sanction & Margin Subsidy Release',
      desc: 'Bank issues formal sanction letter, establishes term loan credit and claims capital subsidy margin money.'
    }
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-gov p-6 sm:p-8 space-y-6">
      
      <div className="border-b border-slate-100 pb-4">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Clock className="w-5 h-5 text-blue-800" />
          Complete Application Guidance Roadmap
        </h3>
        <p className="text-xs text-slate-500 mt-0.5">
          Step-by-step roadmap from paperwork preparation to institutional credit sanction under {scheme.code}.
        </p>
      </div>

      {/* 6 Step Responsive Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {steps.map((step) => (
          <div
            key={step.num}
            className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-blue-50/40 hover:border-blue-300 transition flex items-start gap-3.5"
          >
            <div className="w-8 h-8 rounded-lg bg-[#0B2545] text-white font-black text-xs flex items-center justify-center shrink-0">
              {step.num}
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-xs text-slate-900 leading-snug">
                {step.title}
              </h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Authority Disclaimer */}
      <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-3 text-[11px] text-amber-900 flex items-start gap-2">
        <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <div>
          <strong>Non-Approval Disclaimer:</strong> JANSAHAY AI provides automated recommendation and guidance only. Final approval, interest rates, margin money requirements and eligibility decisions are made solely by the respective official authority or financing financial institution.
        </div>
      </div>

    </div>
  );
};
