import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, HelpCircle, FileCheck2, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B2545] text-slate-300 pt-12 pb-8 border-t-4 border-[#FF671F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-700/80">
          
          {/* Col 1: About Prototype */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xl font-black text-white tracking-tight font-sans">
                JANSAHAY <span className="text-[#FF671F]">AI</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-blue-900/80 text-blue-200 border border-blue-700">
                SIH 2026
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              AI-driven scheme matching, transparent financial burden calculation, document readiness analysis and channel partner routing designed specifically for India's marginal and micro-entrepreneurs.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <Award className="w-4 h-4" />
              <span>Smart India Hackathon 2026 Prototype (SIH26092)</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3 tracking-wide">Portal Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link to="/" className="hover:text-white transition flex items-center gap-1.5">
                  Citizen Portal Home
                </Link>
              </li>
              <li>
                <Link to="/assessment" className="hover:text-white transition flex items-center gap-1.5">
                  Entrepreneur Assessment Wizard
                </Link>
              </li>
              <li>
                <Link to="/results" className="hover:text-white transition flex items-center gap-1.5">
                  Recommendation & Financial Plan
                </Link>
              </li>
              <li>
                <Link to="/schemes" className="hover:text-white transition flex items-center gap-1.5">
                  Explore National MSME Schemes
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-white transition flex items-center gap-1.5">
                  Entrepreneur Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Reference Portals (Simulated) */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3 tracking-wide">Government Initiatives (Context)</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="https://msme.gov.in" target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center justify-between group">
                  <span>Ministry of MSME</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-white" />
                </a>
              </li>
              <li>
                <a href="https://udyamregistration.gov.in" target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center justify-between group">
                  <span>Udyam Registration Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-white" />
                </a>
              </li>
              <li>
                <a href="https://www.jansamarth.in" target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center justify-between group">
                  <span>JanSamarth Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-white" />
                </a>
              </li>
              <li>
                <a href="https://www.standupmitra.in" target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center justify-between group">
                  <span>StandUp Mitra & MUDRA</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-white" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Disclaimer */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm mb-2 tracking-wide flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Demo Compliance
            </h4>
            <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700 text-[11px] text-slate-300 leading-relaxed">
              <strong>Zero Real Storage:</strong> This prototype operates entirely in your browser using structured mock evaluation rules. No private citizen documents or bank credentials are required or stored.
            </div>
            <p className="text-[11px] text-slate-400">
              Developed for SIH 2026 under problem code SIH26092.
            </p>
          </div>
        </div>

        {/* Bottom copyright and mandatory disclaimer */}
        <div className="pt-6 space-y-3 text-center md:text-left">
          <p className="text-[11px] text-slate-400 leading-normal max-w-5xl">
            <strong>Prototype Disclaimer:</strong> JANSAHAY AI is a Smart India Hackathon 2026 prototype. Scheme information, eligibility analysis, interest rates, financial estimates and service-centre locations shown in this demo use mock data and are provided for demonstration purposes only. Final eligibility, scheme terms, loan approval and application decisions are determined by the respective official authority or financial institution.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800">
            <div>
              © 2026 JANSAHAY AI Team • Smart India Hackathon 2026 Prototype
            </div>
            <div className="flex items-center gap-4 mt-2 sm:mt-0 text-slate-400">
              <span>Light Theme Standard</span>
              <span>•</span>
              <span>Accessibility Compliant</span>
              <span>•</span>
              <span>Indian MSME Demo Rules</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
