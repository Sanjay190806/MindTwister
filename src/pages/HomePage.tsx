import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Calculator, 
  FileCheck, 
  Building, 
  MapPin, 
  ShieldCheck, 
  Award, 
  TrendingUp, 
  Users, 
  Layers,
  ChevronRight,
  IndianRupee,
  FileText
} from 'lucide-react';
import { useAssessment } from '../context/AssessmentContext';
import { MOCK_SCHEMES } from '../data/schemes';
import { formatCompactINR } from '../utils/finance';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { loadDemoPersona } = useAssessment();

  const handleLaunchPersona = (key: 'arun' | 'pooja' | 'ramesh') => {
    loadDemoPersona(key);
    navigate('/assessment');
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-slate-50 border-b border-slate-200 pt-12 pb-16">
        {/* Subtle decorative background pattern */}
        <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-5">
            
            {/* National Theme Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-900 text-xs font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#FF671F]"></span>
              <span>Smart India Hackathon 2026 Prototype • Problem SIH26092</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2545] tracking-tight leading-tight">
              Find the Right Government Scheme for Your Business
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              JANSAHAY AI analyzes your business, financial profile and eligibility to identify suitable government support schemes and guide you toward the next steps.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                to="/assessment"
                className="inline-flex items-center gap-2 bg-[#0B2545] hover:bg-[#134B70] text-white font-bold text-base px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span>Find My Scheme</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/schemes"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-base px-6 py-3.5 rounded-xl shadow-xs hover:border-slate-400 transition"
              >
                <span>Explore Schemes</span>
              </Link>
            </div>

            {/* Quick Demo Pre-load Pill for SIH Judges */}
            <div className="pt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
              <span className="font-semibold text-slate-700">Quick Demo Presets:</span>
              <button
                onClick={() => handleLaunchPersona('arun')}
                className="text-blue-700 hover:text-blue-900 font-semibold bg-blue-50 hover:bg-blue-100 px-2.5 py-1 rounded border border-blue-200 transition"
              >
                Arun Kumar (Food Mfg • ₹5L)
              </button>
              <span className="text-slate-300">•</span>
              <button
                onClick={() => handleLaunchPersona('pooja')}
                className="text-rose-700 hover:text-rose-900 font-semibold bg-rose-50 hover:bg-rose-100 px-2.5 py-1 rounded border border-rose-200 transition"
              >
                Pooja (Artisan • ₹3L)
              </button>
            </div>

          </div>

          {/* Flow Diagram (Profile -> AI Analysis -> Scheme Matching -> Financial Planning -> Support) */}
          <div className="mt-14 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-gov border border-slate-200">
              <div className="text-center mb-6">
                <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400">
                  Interactive Citizen Journey
                </span>
                <h3 className="text-sm font-bold text-slate-800">
                  How JANSAHAY AI Accelerates Marginal Enterprise Enablement
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative">
                
                {/* Step 1 */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 text-center flex flex-col items-center hover:border-blue-300 transition">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#0B2545] flex items-center justify-center font-bold mb-2">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-xs text-slate-900">Your Profile</div>
                  <div className="text-[11px] text-slate-500 mt-1 leading-tight">
                    Business type, stage, turnover & location
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 text-center flex flex-col items-center hover:border-blue-300 transition">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold mb-2">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-xs text-slate-900">AI Analysis</div>
                  <div className="text-[11px] text-slate-500 mt-1 leading-tight">
                    Multi-criteria eligibility rule scoring
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 text-center flex flex-col items-center hover:border-blue-300 transition">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-2">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-xs text-slate-900">Scheme Matching</div>
                  <div className="text-[11px] text-slate-500 mt-1 leading-tight">
                    Highest match + ranked suitable options
                  </div>
                </div>

                {/* Step 4 */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 text-center flex flex-col items-center hover:border-blue-300 transition">
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold mb-2">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-xs text-slate-900">Financial Planning</div>
                  <div className="text-[11px] text-slate-500 mt-1 leading-tight">
                    Dynamic EMI, interest & subsidy burden
                  </div>
                </div>

                {/* Step 5 */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 text-center flex flex-col items-center hover:border-blue-300 transition">
                  <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center font-bold mb-2">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-xs text-slate-900">Support & Routing</div>
                  <div className="text-[11px] text-slate-500 mt-1 leading-tight">
                    Missing docs, nearest DIC & bank channel
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4 Trust & Core Feature Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0B2545] mb-4">
              <Award className="w-6 h-6 text-blue-800" />
            </div>
            <h3 className="font-bold text-base text-slate-900">
              Personalized Scheme Matching
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Tailors scheme recommendations according to your industry sector, turnover, demographic category and funding amount.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 mb-4">
              <ShieldCheck className="w-6 h-6 text-emerald-700" />
            </div>
            <h3 className="font-bold text-base text-slate-900">
              Eligibility Verification
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Transparent rule scoring that highlights why you match and which specific criteria are satisfied or require attention.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800 mb-4">
              <Calculator className="w-6 h-6 text-amber-700" />
            </div>
            <h3 className="font-bold text-base text-slate-900">
              Financial Planning
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Calculates dynamic monthly EMIs, total interest outlay, and deducts applicable government subsidies to reveal true net burden.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-800 mb-4">
              <FileCheck className="w-6 h-6 text-purple-700" />
            </div>
            <h3 className="font-bold text-base text-slate-900">
              Document Assistance
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Audits ready versus missing documents (e.g. Udyam registration) and directs you to the nearest physical service helpdesk.
            </p>
          </div>

        </div>
      </section>

      {/* How It Works (5-Step Section) */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
              Process Roadmap
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545] mt-2">
              How JANSAHAY AI Works
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Five straightforward steps connecting marginal entrepreneurs with institutional credit and subsidies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            
            <div className="space-y-3 relative">
              <div className="text-2xl font-black text-blue-900/40">01</div>
              <h4 className="font-bold text-sm text-slate-900">Enter Profile</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Provide basic demographic, location and business operational parameters in a structured form.
              </p>
            </div>

            <div className="space-y-3 relative">
              <div className="text-2xl font-black text-blue-900/40">02</div>
              <h4 className="font-bold text-sm text-slate-900">Analyze Eligibility</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Rule engine benchmarks sector, funding requirement, and demographic priority slabs.
              </p>
            </div>

            <div className="space-y-3 relative">
              <div className="text-2xl font-black text-blue-900/40">03</div>
              <h4 className="font-bold text-sm text-slate-900">Match Schemes</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ranks all available central schemes from highest suitability down to alternative options.
              </p>
            </div>

            <div className="space-y-3 relative">
              <div className="text-2xl font-black text-blue-900/40">04</div>
              <h4 className="font-bold text-sm text-slate-900">Calculate Financial Support</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Computes monthly EMI, total interest, and offsets capital subsidies to give clear cash flow visibility.
              </p>
            </div>

            <div className="space-y-3 relative">
              <div className="text-2xl font-black text-blue-900/40">05</div>
              <h4 className="font-bold text-sm text-slate-900">Get Application Guidance</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Step-by-step roadmap, missing document advisory, and direct routing to local DICs or bank branches.
              </p>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              Takes less than 2 minutes to complete • No prior document uploads needed
            </div>
            <Link
              to="/assessment"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-800 hover:text-blue-950 bg-blue-50 px-4 py-2 rounded-lg border border-blue-200 transition"
            >
              <span>Launch Assessment Wizard</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* Featured National Schemes Snapshot */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              MSME & Central Schemes
            </span>
            <h2 className="text-2xl font-bold text-[#0B2545]">
              Featured Government Support Frameworks
            </h2>
            <p className="text-xs text-slate-600 mt-0.5">
              Available for real-time rule matching in this hackathon prototype
            </p>
          </div>
          <Link
            to="/schemes"
            className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 hover:text-blue-900"
          >
            <span>View All 8 Schemes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MOCK_SCHEMES.slice(0, 3).map((scheme) => (
            <div
              key={scheme.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-blue-300 transition"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200">
                    {scheme.code}
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {scheme.badgeTag}
                  </span>
                </div>

                <h3 className="font-bold text-base text-slate-900 line-clamp-1">
                  {scheme.name}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">
                  {scheme.ministry}
                </p>

                <p className="text-xs text-slate-600 mt-3 leading-relaxed line-clamp-2">
                  {scheme.shortDescription}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Funding Ceiling</span>
                    <span className="font-bold text-slate-800">{formatCompactINR(scheme.maxFunding)}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Mock Interest</span>
                    <span className="font-bold text-emerald-700">{scheme.mockInterestRate}% p.a.</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to={`/schemes/${scheme.id}`}
                  className="text-xs font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1"
                >
                  <span>Explore Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/assessment"
                  className="text-xs font-semibold text-slate-600 hover:text-slate-900"
                >
                  Check Fit
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Demo Persona Spotlight / SIH Quick Test Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#0B2545] via-[#0F355E] to-[#134B70] rounded-2xl text-white p-6 sm:p-8 shadow-lg">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-amber-400/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SIH 2026 Presentation Showcase</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Evaluate With Verified Demo Persona: Arun Kumar
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                Pre-loads an existing food packaging unit owner in Chennai seeking ₹5,00,000 expansion loan. Demonstrates the complete flow: high PMEGP match, dynamic EMI calculation, missing Udyam registration alert, and Ambattur DIC routing.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => handleLaunchPersona('arun')}
                className="bg-[#FF671F] hover:bg-[#e05817] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow transition flex items-center gap-2"
              >
                <span>Launch Arun's Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
