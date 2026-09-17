import React from 'react';
import { Briefcase } from 'lucide-react';
import { useAssessment } from '../../context/AssessmentContext';
import { formatINR } from '../../utils/finance';

export const StepBusiness: React.FC = () => {
  const { profile, updateProfile } = useAssessment();

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-100 pb-4">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-blue-700" />
          Step 2: Business Profile & Activity
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Specifying the nature of your enterprise maps directly to sector-specific MSME subsidies.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Business / Enterprise Name *
          </label>
          <input
            type="text"
            value={profile.businessName}
            onChange={(e) => updateProfile({ businessName: e.target.value })}
            placeholder="e.g. Sri Sai Packaged Foods & Condiments"
            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Business Location Classification *
          </label>
          <select
            value={profile.businessLocation}
            onChange={(e) => updateProfile({ businessLocation: e.target.value as any })}
            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 font-medium"
          >
            <option value="Urban">Urban (City / Municipal Area)</option>
            <option value="Semi-Urban">Semi-Urban (Town / Taluk)</option>
            <option value="Rural">Rural (Village / Panchayat - Up to 35% Subsidy)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Industry / Business Type *
          </label>
          <select
            value={profile.businessType}
            onChange={(e) => updateProfile({ businessType: e.target.value as any })}
            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 font-medium"
          >
            <option value="Manufacturing">Manufacturing</option>
            <option value="Food Processing">Food Processing</option>
            <option value="Service">Service</option>
            <option value="Trading">Trading</option>
            <option value="Retail">Retail</option>
            <option value="Handicraft">Handicraft / Traditional Craft</option>
            <option value="Agriculture Allied">Agriculture Allied</option>
            <option value="Technology">Technology / IT Services</option>
            <option value="Other">Other Enterprise</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Current Business Stage *
          </label>
          <select
            value={profile.businessStage}
            onChange={(e) => updateProfile({ businessStage: e.target.value as any })}
            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 font-medium"
          >
            <option value="Idea Stage">Idea Stage (Pre-incorporation)</option>
            <option value="New Business">New Business (Under 1 year)</option>
            <option value="Existing Business">Existing Business (Operational)</option>
            <option value="Expansion">Expansion / Technology Upgradation</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Years in Operation
          </label>
          <input
            type="number"
            min="0"
            max="40"
            value={profile.yearsInBusiness}
            onChange={(e) => updateProfile({ yearsInBusiness: parseInt(e.target.value) || 0 })}
            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Number of Employees
          </label>
          <input
            type="number"
            min="1"
            max="500"
            value={profile.employees}
            onChange={(e) => updateProfile({ employees: parseInt(e.target.value) || 1 })}
            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Annual Turnover (in ₹)
          </label>
          <input
            type="number"
            step="50000"
            value={profile.annualTurnover}
            onChange={(e) => updateProfile({ annualTurnover: parseInt(e.target.value) || 0 })}
            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 font-medium"
          />
          <span className="text-[11px] text-slate-500 mt-1 block">
            {formatINR(profile.annualTurnover)} per year
          </span>
        </div>

        <div className="sm:col-span-2 lg:col-span-3">
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Brief Business Activity & Proposed Project Description
          </label>
          <textarea
            rows={2}
            value={profile.businessDescription}
            onChange={(e) => updateProfile({ businessDescription: e.target.value })}
            placeholder="e.g. Small-scale food processing and vacuum packaging unit preparing traditional snacks and spices..."
            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
          />
        </div>
      </div>
    </div>
  );
};
