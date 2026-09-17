import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowLeft, 
  Printer, 
  Share2, 
  LayoutDashboard, 
  RotateCcw,
  CheckCircle2,
  FileCheck
} from 'lucide-react';
import { useAssessment } from '../context/AssessmentContext';
import { TopRecommendationCard } from '../components/results/TopRecommendationCard';
import { FinancialCalculatorSection } from '../components/results/FinancialCalculatorSection';
import { ExplainabilitySection } from '../components/results/ExplainabilitySection';
import { DocumentReadinessSection } from '../components/results/DocumentReadinessSection';
import { ChannelPartnerSection } from '../components/results/ChannelPartnerSection';
import { ApplicationGuidanceTimeline } from '../components/results/ApplicationGuidanceTimeline';
import { OtherSuitableSchemes } from '../components/results/OtherSuitableSchemes';
import { SupportCentresModal } from '../components/SupportCentresModal';
import { SchemeCompareModal } from '../components/SchemeCompareModal';

export const ResultsPage: React.FC = () => {
  const navigate = useNavigate();
  const { 
    rankedResults, 
    topRecommendation, 
    profile, 
    loadDemoPersona 
  } = useAssessment();

  const [centresModalOpen, setCentresModalOpen] = useState(false);
  const [selectedDocForCentres, setSelectedDocForCentres] = useState<string | undefined>(undefined);
  const [compareModalOpen, setCompareModalOpen] = useState(false);
  const [printNotice, setPrintNotice] = useState(false);

  const handleOpenCentres = (docName?: string) => {
    setSelectedDocForCentres(docName);
    setCentresModalOpen(true);
  };

  const handlePrint = () => {
    window.print();
  };

  if (!topRecommendation) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-800">No Assessment Results Available</h2>
        <p className="text-xs text-slate-500">Please complete the citizen entrepreneur assessment first.</p>
        <Link
          to="/assessment"
          className="inline-flex items-center gap-1.5 bg-[#0B2545] text-white text-xs font-bold px-4 py-2 rounded-lg"
        >
          Start Assessment Wizard
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Top Breadcrumb & Actions Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Link to="/" className="hover:text-slate-800">Home</Link>
            <span>/</span>
            <Link to="/assessment" className="hover:text-slate-800">Assessment</Link>
            <span>/</span>
            <span className="font-semibold text-[#0B2545]">Recommendations</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#0B2545] mt-1">
            Your JANSAHAY AI Recommendation
          </h1>
          <p className="text-xs sm:text-sm text-slate-600">
            Based on the information provided, this scheme is the strongest match in this demo.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => navigate('/assessment')}
            className="inline-flex items-center gap-1.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold px-3 py-2 rounded-lg shadow-2xs transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Modify Profile</span>
          </button>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold px-3 py-2 rounded-lg shadow-2xs transition"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Dossier</span>
          </button>

          <Link
            to="/dashboard"
            className="inline-flex items-center gap-1.5 bg-[#0B2545] hover:bg-[#134B70] text-white text-xs font-bold px-3.5 py-2 rounded-lg shadow-xs transition"
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>Go to Dashboard</span>
          </Link>
        </div>
      </div>

      {/* 1. Large Highlighted Primary Recommendation Card */}
      <TopRecommendationCard
        matchResult={topRecommendation}
        onOpenCompare={() => setCompareModalOpen(true)}
      />

      {/* 2. Interactive Financial Calculator & EMI Model */}
      <FinancialCalculatorSection
        scheme={topRecommendation.scheme}
        profile={profile}
      />

      {/* 3. Explainability Section (Why Recommended + Decomposition Bars) */}
      <ExplainabilitySection
        matchResult={topRecommendation}
        profile={profile}
      />

      {/* 4. Document Readiness & Missing Document Support (with Ambattur DIC route) */}
      <DocumentReadinessSection
        scheme={topRecommendation.scheme}
        profile={profile}
        onOpenSupportCentres={handleOpenCentres}
      />

      {/* 5. Recommended Channel Partner & Nearest Support Centre Preview */}
      <ChannelPartnerSection
        scheme={topRecommendation.scheme}
        profile={profile}
        onOpenCentresModal={() => handleOpenCentres()}
      />

      {/* 6. Complete Application Guidance Roadmap Timeline */}
      <ApplicationGuidanceTimeline
        scheme={topRecommendation.scheme}
      />

      {/* 7. Other Suitable Schemes (Excluding Primary Top Match) */}
      <OtherSuitableSchemes
        results={rankedResults.slice(1)}
        onOpenCompareModal={() => setCompareModalOpen(true)}
      />

      {/* Modals */}
      <SupportCentresModal
        isOpen={centresModalOpen}
        onClose={() => setCentresModalOpen(false)}
        userCity={profile.city}
        defaultDocumentName={selectedDocForCentres}
      />

      <SchemeCompareModal
        isOpen={compareModalOpen}
        onClose={() => setCompareModalOpen(false)}
      />

    </div>
  );
};
