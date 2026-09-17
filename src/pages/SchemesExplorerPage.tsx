import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  SlidersHorizontal, 
  CheckSquare, 
  Square, 
  ArrowRight, 
  IndianRupee, 
  Percent, 
  Clock, 
  Tag, 
  Building2,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { useAssessment } from '../context/AssessmentContext';
import { formatCompactINR } from '../utils/finance';
import { SchemeCompareModal } from '../components/SchemeCompareModal';

export const SchemesExplorerPage: React.FC = () => {
  const { allSchemes, rankedResults, selectedCompareIds, toggleCompareScheme } = useAssessment();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('All');
  const [compareModalOpen, setCompareModalOpen] = useState(false);

  // Filter schemes
  const filteredSchemes = useMemo(() => {
    return allSchemes.filter(scheme => {
      const matchesSearch = 
        scheme.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        scheme.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        scheme.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        scheme.ministry.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'All' || scheme.category === selectedCategory;
      const matchesType = selectedBusinessType === 'All' || scheme.businessTypes.includes(selectedBusinessType as any);

      return matchesSearch && matchesCategory && matchesType;
    });
  }, [allSchemes, searchQuery, selectedCategory, selectedBusinessType]);

  const categories = ['All', 'MSME', 'Self-Employment', 'Women Entrepreneurship', 'Credit Guarantee', 'Poverty Alleviation'];
  const businessTypes = ['All', 'Manufacturing', 'Food Processing', 'Service', 'Trading', 'Handicraft', 'Agriculture Allied', 'Technology'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
            National MSME Catalog
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-[#0B2545] mt-1">
            Explore Government Schemes
          </h1>
          <p className="text-xs sm:text-sm text-slate-600">
            Browse all 8 evaluated central entrepreneurship support and capital subsidy frameworks.
          </p>
        </div>

        <button
          onClick={() => setCompareModalOpen(true)}
          className="inline-flex items-center gap-2 bg-[#0B2545] hover:bg-[#134B70] text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-xs transition self-start sm:self-auto"
        >
          <span>Compare Selected Schemes ({selectedCompareIds.length})</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-4 sm:p-6 space-y-4">
        
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search government schemes by keyword, acronym or ministry (e.g. PMEGP, MUDRA, Food Processing, SIDBI)..."
            className="w-full text-xs pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 text-xs pt-1">
          <div className="space-y-1.5 flex-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase">Scheme Category:</span>
            <div className="flex flex-wrap gap-1.5">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-full font-medium transition ${
                    selectedCategory === cat 
                      ? 'bg-[#0B2545] text-white font-bold' 
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1.5 flex-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase">Business Sector:</span>
            <div className="flex flex-wrap gap-1.5">
              {businessTypes.map(bt => (
                <button
                  key={bt}
                  onClick={() => setSelectedBusinessType(bt)}
                  className={`px-3 py-1 rounded-full font-medium transition ${
                    selectedBusinessType === bt 
                      ? 'bg-blue-700 text-white font-bold' 
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {bt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Schemes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSchemes.map((scheme) => {
          const match = rankedResults.find(r => r.scheme.id === scheme.id);
          const isSelected = selectedCompareIds.includes(scheme.id);

          return (
            <div
              key={scheme.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200">
                      {scheme.code}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      {scheme.category}
                    </span>
                  </div>

                  {match && (
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {match.score}% Match
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  {scheme.name}
                </h3>

                <p className="text-[11px] text-slate-500 font-medium line-clamp-1">
                  {scheme.ministry}
                </p>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {scheme.shortDescription}
                </p>

                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold uppercase block">Funding Ceiling</span>
                    <strong className="text-slate-900">{formatCompactINR(scheme.maxFunding)}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold uppercase block">Mock Interest</span>
                    <strong className="text-emerald-700">{scheme.mockInterestRate}% p.a.</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold uppercase block">Tenure</span>
                    <span className="text-slate-700">{scheme.mockTenureYears} Years</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold uppercase block">Subsidy</span>
                    <span className="text-slate-700">{scheme.mockSubsidy.available ? `${scheme.mockSubsidy.percentage}% Max` : 'Collateral Guarantee'}</span>
                  </div>
                </div>

                {/* Covered Sectors */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1">
                    {scheme.businessTypes.slice(0, 3).map((b, i) => (
                      <span key={i} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                        {b}
                      </span>
                    ))}
                    {scheme.businessTypes.length > 3 && (
                      <span className="text-[10px] text-slate-400">+{scheme.businessTypes.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => toggleCompareScheme(scheme.id)}
                  className={`text-xs font-semibold flex items-center gap-1.5 transition ${
                    isSelected ? 'text-blue-900 font-bold' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {isSelected ? (
                    <CheckSquare className="w-4 h-4 text-blue-800 fill-blue-50" />
                  ) : (
                    <Square className="w-4 h-4 text-slate-400" />
                  )}
                  <span>Compare</span>
                </button>

                <Link
                  to={`/schemes/${scheme.id}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-900"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          );
        })}
      </div>

      <SchemeCompareModal
        isOpen={compareModalOpen}
        onClose={() => setCompareModalOpen(false)}
      />

    </div>
  );
};
