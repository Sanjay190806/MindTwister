import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  Briefcase, 
  IndianRupee, 
  FileCheck2, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles 
} from 'lucide-react';
import { useAssessment } from '../context/AssessmentContext';
import { StepPersonal } from '../components/assessment/StepPersonal';
import { StepBusiness } from '../components/assessment/StepBusiness';
import { StepFinancial } from '../components/assessment/StepFinancial';
import { StepDocuments } from '../components/assessment/StepDocuments';
import { StepReview } from '../components/assessment/StepReview';
import { LoadingAnalysis } from '../components/LoadingAnalysis';

export const AssessmentPage: React.FC = () => {
  const navigate = useNavigate();
  const { 
    loadDemoPersona, 
    currentPersonaKey,
    isAnalyzing,
    analysisStep,
    analysisMessage,
    runAnalysis 
  } = useAssessment();

  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    { num: 1, label: 'Personal Profile', icon: User },
    { num: 2, label: 'Business Profile', icon: Briefcase },
    { num: 3, label: 'Financial Profile', icon: IndianRupee },
    { num: 4, label: 'Documents', icon: FileCheck2 },
    { num: 5, label: 'Review & Analyze', icon: CheckCircle2 }
  ];

  const handleNext = () => {
    if (activeStep < 5) {
      setActiveStep(activeStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleTriggerAnalysis = async () => {
    await runAnalysis();
    navigate('/results');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {isAnalyzing && (
        <LoadingAnalysis currentStep={analysisStep} message={analysisMessage} />
      )}

      {/* Top Title & Demo Quick-Fill Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
              SIH26092 Assessment Flow
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#0B2545] mt-1">
            Entrepreneur Scheme Assessment
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
            Fill in your operational and financial parameters to match against Government of India schemes.
          </p>
        </div>

        {/* Demo Fast Fill Buttons */}
        <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-200">
          <span className="text-[11px] font-semibold text-slate-500 pl-2">Preload:</span>
          <button
            onClick={() => loadDemoPersona('arun')}
            className={`text-xs px-2.5 py-1.5 rounded-lg font-bold transition ${
              currentPersonaKey === 'arun' 
                ? 'bg-[#0B2545] text-white shadow-xs' 
                : 'text-slate-700 hover:bg-slate-200'
            }`}
          >
            Arun Kumar (Demo)
          </button>
          <button
            onClick={() => loadDemoPersona('pooja')}
            className={`text-xs px-2.5 py-1.5 rounded-lg font-bold transition ${
              currentPersonaKey === 'pooja' 
                ? 'bg-[#0B2545] text-white shadow-xs' 
                : 'text-slate-700 hover:bg-slate-200'
            }`}
          >
            Pooja
          </button>
          <button
            onClick={() => loadDemoPersona('empty')}
            className="text-xs px-2.5 py-1.5 rounded-lg text-slate-600 hover:bg-slate-200 transition font-medium"
            title="Clear all fields to blank"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Stepper Navigation */}
      <div className="my-8">
        <div className="grid grid-cols-5 gap-2">
          {steps.map((s) => {
            const isDone = activeStep > s.num;
            const isCurrent = activeStep === s.num;
            return (
              <button
                key={s.num}
                onClick={() => setActiveStep(s.num)}
                className={`text-left p-3 rounded-xl border transition-all flex flex-col sm:flex-row items-center sm:items-start gap-2.5 ${
                  isCurrent
                    ? 'bg-blue-50/80 border-[#0B2545] shadow-xs'
                    : isDone
                    ? 'bg-emerald-50/50 border-emerald-200 text-emerald-900'
                    : 'bg-white border-slate-200 text-slate-400 hover:border-slate-300'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold ${
                    isCurrent
                      ? 'bg-[#0B2545] text-white'
                      : isDone
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {isDone ? <CheckCircle2 className="w-4 h-4" /> : s.num}
                </div>
                <div className="hidden sm:block">
                  <div className={`text-xs font-bold leading-tight ${isCurrent ? 'text-[#0B2545]' : isDone ? 'text-emerald-950' : 'text-slate-500'}`}>
                    {s.label}
                  </div>
                  <div className="text-[10px] text-slate-400">Step {s.num} of 5</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Form Container Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-gov p-6 sm:p-8">
        {activeStep === 1 && <StepPersonal />}
        {activeStep === 2 && <StepBusiness />}
        {activeStep === 3 && <StepFinancial />}
        {activeStep === 4 && <StepDocuments />}
        {activeStep === 5 && (
          <StepReview 
            onEditStep={(stepNum) => setActiveStep(stepNum)} 
            onRunAnalysis={handleTriggerAnalysis} 
          />
        )}

        {/* Wizard Footer Navigation Controls */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
          <button
            type="button"
            onClick={handleBack}
            disabled={activeStep === 1}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous Step
          </button>

          <div className="text-xs text-slate-500 font-medium">
            Step {activeStep} of 5
          </div>

          {activeStep < 5 ? (
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-1.5 bg-[#0B2545] hover:bg-[#134B70] text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow-xs transition"
            >
              Next Step
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleTriggerAnalysis}
              className="inline-flex items-center gap-1.5 bg-[#046A38] hover:bg-[#03522b] text-white text-xs font-bold px-5 py-2.5 rounded-lg shadow-xs transition"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              Analyze Eligibility
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
