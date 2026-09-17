import React from 'react';
import { User } from 'lucide-react';
import { useAssessment } from '../../context/AssessmentContext';

export const StepPersonal: React.FC = () => {
  const { profile, updateProfile } = useAssessment();

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-100 pb-4">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <User className="w-5 h-5 text-blue-700" />
          Step 1: Personal & Demographic Information
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Demographic details help identify special subvention tiers (SC/ST/OBC/Women/Rural priority).
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Full Name of Citizen / Entrepreneur *
          </label>
          <input
            type="text"
            value={profile.fullName}
            onChange={(e) => updateProfile({ fullName: e.target.value })}
            placeholder="e.g. Arun Kumar"
            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Age (in years) *
          </label>
          <input
            type="number"
            min="18"
            max="75"
            value={profile.age}
            onChange={(e) => updateProfile({ age: parseInt(e.target.value) || 18 })}
            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Gender *
          </label>
          <select
            value={profile.gender}
            onChange={(e) => updateProfile({ gender: e.target.value as any })}
            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
          >
            <option value="Male">Male</option>
            <option value="Female">Female (Eligible for Women Slabs)</option>
            <option value="Other">Other</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            State / Union Territory *
          </label>
          <input
            type="text"
            value={profile.state}
            onChange={(e) => updateProfile({ state: e.target.value })}
            placeholder="e.g. Tamil Nadu"
            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            District *
          </label>
          <input
            type="text"
            value={profile.district}
            onChange={(e) => updateProfile({ district: e.target.value })}
            placeholder="e.g. Chennai"
            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            City / Town *
          </label>
          <input
            type="text"
            value={profile.city}
            onChange={(e) => updateProfile({ city: e.target.value })}
            placeholder="e.g. Chennai"
            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            PIN Code *
          </label>
          <input
            type="text"
            maxLength={6}
            value={profile.pincode}
            onChange={(e) => updateProfile({ pincode: e.target.value })}
            placeholder="e.g. 600058"
            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Social Category *
          </label>
          <select
            value={profile.socialCategory}
            onChange={(e) => updateProfile({ socialCategory: e.target.value as any })}
            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 font-medium"
          >
            <option value="General">General</option>
            <option value="OBC">OBC (Other Backward Classes)</option>
            <option value="SC">SC (Scheduled Caste)</option>
            <option value="ST">ST (Scheduled Tribe)</option>
            <option value="Minority">Minority Community</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Special Category (If Applicable)
          </label>
          <select
            value={profile.specialCategory}
            onChange={(e) => updateProfile({ specialCategory: e.target.value as any })}
            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
          >
            <option value="None">None</option>
            <option value="Women Entrepreneur">Women Entrepreneur</option>
            <option value="Differently Abled (Divyangjan)">Differently Abled (Divyangjan)</option>
            <option value="Ex-Serviceman">Ex-Serviceman</option>
            <option value="NER / Hilly Region">North Eastern / Hilly Region</option>
          </select>
        </div>

        <div className="sm:col-span-2 lg:col-span-3">
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Entrepreneur Type Classification *
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {[
              'New Entrepreneur',
              'Existing Business Owner',
              'Self-Employed',
              'Micro Business Owner',
              'Startup / Early Stage Business'
            ].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => updateProfile({ entrepreneurType: type as any })}
                className={`text-xs p-2.5 rounded-xl border text-center font-medium transition ${
                  profile.entrepreneurType === type
                    ? 'bg-blue-50 border-[#0B2545] text-[#0B2545] font-bold shadow-xs'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
