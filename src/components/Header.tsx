import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  ChevronDown, 
  FileText, 
  Compass, 
  Home, 
  LayoutDashboard, 
  Globe, 
  UserCheck, 
  Menu, 
  X,
  Building2
} from 'lucide-react';
import { useAssessment } from '../context/AssessmentContext';

export const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { loadDemoPersona, currentPersonaKey, language, setLanguage } = useAssessment();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [personaDropdownOpen, setPersonaDropdownOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleSelectPersona = (key: 'arun' | 'pooja' | 'ramesh') => {
    loadDemoPersona(key);
    setPersonaDropdownOpen(false);
    navigate('/assessment');
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
      {/* Tricolor top indicator band */}
      <div className="h-1.5 w-full flex">
        <div className="flex-1 bg-[#FF671F]"></div>
        <div className="flex-1 bg-white border-b border-t border-slate-100"></div>
        <div className="flex-1 bg-[#046A38]"></div>
      </div>

      {/* Top micro-bar with government service look */}
      <div className="bg-slate-900 text-slate-300 text-[11px] py-1 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium text-slate-200">Smart India Hackathon 2026 Prototype</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">SIH26092: AI-Driven Scheme Matching for Marginal Entrepreneurs</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400 hidden sm:inline">Citizen & Entrepreneur Digital Support Facility</span>
            <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
              <Globe className="w-3 h-3 text-sky-400" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as any)}
                className="bg-transparent text-slate-200 outline-none text-[11px] cursor-pointer"
                title="Select Language"
              >
                <option value="en" className="bg-slate-900 text-white">English</option>
                <option value="hi" className="bg-slate-900 text-white">हिन्दी (Hindi)</option>
                <option value="ta" className="bg-slate-900 text-white">தமிழ் (Tamil)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3.5 group focus:outline-none">
            {/* Ashoka/Government emblem styled icon */}
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B2545] to-[#134B70] flex items-center justify-center text-white shadow-md ring-2 ring-blue-100 group-hover:scale-105 transition-transform duration-200">
              <div className="relative flex items-center justify-center">
                <Building2 className="w-6 h-6 text-amber-300" />
                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#0B2545] flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0B2545] font-sans">
                  JANSAHAY <span className="text-[#FF671F]">AI</span>
                </span>
                <span className="hidden sm:inline-flex text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200">
                  SIH 2026 Prototype
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 font-medium tracking-normal leading-tight">
                AI-Powered Scheme Matching & Financial Planning
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                isActive('/') && location.pathname === '/'
                  ? 'text-[#0B2545] bg-blue-50/80 font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              <Home className="w-4 h-4 text-slate-500" />
              Home
            </Link>

            <Link
              to="/schemes"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                isActive('/schemes')
                  ? 'text-[#0B2545] bg-blue-50/80 font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              <Compass className="w-4 h-4 text-slate-500" />
              Explore Schemes
            </Link>

            <a
              href="/#how-it-works"
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 transition-colors"
            >
              How It Works
            </a>

            <Link
              to="/dashboard"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                isActive('/dashboard')
                  ? 'text-[#0B2545] bg-blue-50/80 font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              <LayoutDashboard className="w-4 h-4 text-slate-500" />
              Dashboard
            </Link>
          </nav>

          {/* Right Action Area */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Quick Persona Preloader for SIH Demo */}
            <div className="relative">
              <button
                onClick={() => setPersonaDropdownOpen(!personaDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100/80 transition shadow-sm"
                title="Load pre-built SIH demo personas"
              >
                <UserCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>
                  {currentPersonaKey === 'arun' && 'Demo: Arun (Food Mfg)'}
                  {currentPersonaKey === 'pooja' && 'Demo: Pooja (Artisan)'}
                  {currentPersonaKey === 'ramesh' && 'Demo: Ramesh (Agri)'}
                  {currentPersonaKey === 'custom' && 'Demo Persona'}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-emerald-700" />
              </button>

              {personaDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 text-[11px] font-bold uppercase text-slate-400 tracking-wider border-b border-slate-100">
                    Preloaded SIH Test Personas
                  </div>
                  <button
                    onClick={() => handleSelectPersona('arun')}
                    className="w-full text-left px-3 py-2.5 hover:bg-blue-50 transition flex items-start gap-2 text-xs"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold shrink-0 mt-0.5">
                      A
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">Arun Kumar (Primary Demo)</div>
                      <div className="text-[11px] text-slate-500">Chennai • Food Processing • ₹5L Expansion</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleSelectPersona('pooja')}
                    className="w-full text-left px-3 py-2.5 hover:bg-rose-50 transition flex items-start gap-2 text-xs"
                  >
                    <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold shrink-0 mt-0.5">
                      P
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">Pooja Sharma</div>
                      <div className="text-[11px] text-slate-500">Jaipur • Women Artisan Handloom • ₹3L</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleSelectPersona('ramesh')}
                    className="w-full text-left px-3 py-2.5 hover:bg-amber-50 transition flex items-start gap-2 text-xs"
                  >
                    <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold shrink-0 mt-0.5">
                      R
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">Ramesh Yadav</div>
                      <div className="text-[11px] text-slate-500">Varanasi • Rural Agri Allied • ₹4L</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Main CTA: Start Assessment */}
            <Link
              to="/assessment"
              className="inline-flex items-center gap-2 bg-[#0B2545] hover:bg-[#134B70] text-white font-semibold text-sm px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition duration-150"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Start Assessment</span>
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/assessment"
              className="bg-[#0B2545] text-white text-xs font-semibold px-3 py-2 rounded-lg"
            >
              Assessment
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-2">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Home
          </Link>
          <Link
            to="/schemes"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Explore Schemes
          </Link>
          <Link
            to="/dashboard"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Citizen Dashboard
          </Link>
          <div className="pt-2 border-t border-slate-100">
            <div className="text-xs font-bold text-slate-500 mb-2">Switch Demo Persona:</div>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => { handleSelectPersona('arun'); setMobileMenuOpen(false); }}
                className="text-xs font-medium bg-blue-50 text-blue-800 p-2 rounded text-center"
              >
                Arun (Food)
              </button>
              <button
                onClick={() => { handleSelectPersona('pooja'); setMobileMenuOpen(false); }}
                className="text-xs font-medium bg-rose-50 text-rose-800 p-2 rounded text-center"
              >
                Pooja (Artisan)
              </button>
              <button
                onClick={() => { handleSelectPersona('ramesh'); setMobileMenuOpen(false); }}
                className="text-xs font-medium bg-amber-50 text-amber-800 p-2 rounded text-center"
              >
                Ramesh (Agri)
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
