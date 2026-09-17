import React, { useState } from 'react';
import { Building2, MapPin, Phone, Clock, ArrowRight, ShieldCheck, Navigation, CheckCircle2, AlertCircle } from 'lucide-react';
import { Scheme, EntrepreneurProfile } from '../../types';
import { CHANNEL_PARTNER_DATA, MOCK_CENTRES } from '../../data/centres';

interface ChannelPartnerSectionProps {
  scheme: Scheme;
  profile: EntrepreneurProfile;
  onOpenCentresModal: () => void;
}

export const ChannelPartnerSection: React.FC<ChannelPartnerSectionProps> = ({
  scheme,
  profile,
  onOpenCentresModal
}) => {
  const [directionsNotice, setDirectionsNotice] = useState<string | null>(null);

  // Look up channel partner mapping or fallback
  const partner = CHANNEL_PARTNER_DATA[scheme.id] || {
    name: 'District Industries Centre (DIC) & Local Financing Bank',
    category: 'DIC / District Centre',
    role: 'Nodal Facilitation Agency',
    description: 'Coordinates government sponsor screening, subsidy margin money release and commercial bank credit appraisal.',
    servicesProvided: ['Eligibility screening', 'Bank recommendation', 'Subsidy disbursement assistance'],
    howToApproach: 'Submit application online through the national portal or approach the MSME desk at your local District Industries Centre.'
  };

  // Find closest centre matching profile city (default Ambattur for Chennai)
  const nearbyCentre = MOCK_CENTRES.find(c => 
    c.city.toLowerCase() === profile.city.toLowerCase()
  ) || MOCK_CENTRES[0];

  const handleDirections = () => {
    setDirectionsNotice(`Demo GPS Navigation launched: Route mapped to ${nearbyCentre.name} (${nearbyCentre.distanceKm} km).`);
    setTimeout(() => setDirectionsNotice(null), 3500);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-gov p-6 sm:p-8 space-y-6">
      
      {/* Header */}
      <div className="border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <Building2 className="w-5 h-5 text-blue-800" />
          <h3 className="text-lg font-bold text-slate-900">
            Recommended Support Channel & Nearest Service Centre
          </h3>
        </div>
        <p className="text-xs text-slate-500 mt-0.5">
          Intelligent routing to the designated implementation channel and closest physical facilitation helpdesk.
        </p>
      </div>

      {directionsNotice && (
        <div className="bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs p-3 rounded-xl flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{directionsNotice}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Left: Recommended Support Channel */}
        <div className="bg-blue-50/50 border border-blue-200 rounded-xl p-5 space-y-4 flex flex-col justify-between">
          <div className="space-y-2.5">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                Recommended Support Channel
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                {partner.category}
              </span>
            </div>

            <h4 className="text-base font-bold text-[#0B2545]">
              {partner.name}
            </h4>

            <p className="text-xs text-slate-600 leading-relaxed">
              Based on your requested funding of <strong>₹{profile.requiredFunding.toLocaleString('en-IN')}</strong> and selection of <strong>{scheme.code}</strong>, this demo recommends routing your application through this nodal financial & institutional body.
            </p>

            <div className="pt-1">
              <div className="text-[11px] font-bold text-slate-700 uppercase mb-1">
                Institutional Mandate:
              </div>
              <p className="text-xs text-slate-600">
                {partner.description}
              </p>
            </div>

            <div className="pt-2">
              <div className="text-[11px] font-bold text-slate-700 uppercase mb-1.5">
                Key Services Provided:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {partner.servicesProvided.map((s, i) => (
                  <span key={i} className="text-[10px] bg-white text-slate-700 px-2.5 py-1 rounded border border-blue-200 font-medium">
                    ✓ {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-blue-200/80">
            <p className="text-[11px] text-blue-900 font-medium leading-tight">
              <strong>Next Action:</strong> {partner.howToApproach}
            </p>
          </div>
        </div>

        {/* Right: Nearest Centre Card (Ambattur for Chennai) */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4 flex flex-col justify-between">
          <div className="space-y-2.5">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                Nearest Physical Centre ({nearbyCentre.distanceKm} km away)
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                {nearbyCentre.area}, {nearbyCentre.city}
              </span>
            </div>

            <h4 className="text-base font-bold text-slate-900 leading-snug">
              {nearbyCentre.name}
            </h4>

            <p className="text-xs text-slate-600 flex items-start gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
              <span>{nearbyCentre.address}</span>
            </p>

            <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 pt-1">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="text-[11px]">{nearbyCentre.openingHours}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="text-[11px] font-medium text-slate-800">{nearbyCentre.phone}</span>
              </div>
            </div>

            <div className="pt-1">
              <div className="text-[11px] font-bold text-slate-500 uppercase mb-1">
                Available Facilitation Desks:
              </div>
              <div className="flex flex-wrap gap-1">
                {nearbyCentre.services.slice(0, 3).map((serv, idx) => (
                  <span key={idx} className="text-[10px] bg-white text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                    {serv}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-200 flex items-center gap-2">
            <button
              onClick={handleDirections}
              className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#0B2545] hover:bg-[#134B70] text-white text-xs font-semibold py-2 rounded-lg transition"
            >
              <Navigation className="w-3.5 h-3.5" />
              Get Directions
            </button>
            <button
              onClick={onOpenCentresModal}
              className="flex-1 inline-flex items-center justify-center gap-1.5 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold py-2 rounded-lg transition"
            >
              View All Centres
            </button>
          </div>
        </div>

      </div>

      {/* Demo disclaimer */}
      <div className="text-[11px] text-slate-400 italic">
        * Demonstration mock locations and partner routing for Smart India Hackathon 2026. Verify physical service availability prior to in-person visits.
      </div>

    </div>
  );
};
