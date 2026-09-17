import React, { useState } from 'react';
import { X, MapPin, Phone, Clock, Mail, CheckCircle2, Navigation, AlertCircle, Search } from 'lucide-react';
import { SupportCentre } from '../types';
import { MOCK_CENTRES } from '../data/centres';

interface SupportCentresModalProps {
  isOpen: boolean;
  onClose: () => void;
  userCity?: string;
  defaultDocumentName?: string;
}

export const SupportCentresModal: React.FC<SupportCentresModalProps> = ({
  isOpen,
  onClose,
  userCity = 'Chennai',
  defaultDocumentName
}) => {
  const [selectedCity, setSelectedCity] = useState<string>(userCity);
  const [directionsNotice, setDirectionsNotice] = useState<string | null>(null);

  if (!isOpen) return null;

  // Filter centres or sort by match to city
  const filteredCentres = MOCK_CENTRES.filter(c => 
    selectedCity ? c.city.toLowerCase().includes(selectedCity.toLowerCase()) : true
  );

  const displayCentres = filteredCentres.length > 0 ? filteredCentres : MOCK_CENTRES;

  const handleDirections = (centreName: string) => {
    setDirectionsNotice(`Demo navigation: Route initiated to ${centreName} via simulated GPS map.`);
    setTimeout(() => setDirectionsNotice(null), 3500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="bg-[#0B2545] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-800/70 border border-blue-400/30 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 id="modal-title" className="text-lg font-bold">
                Nearest Support & Facilitation Centres
              </h3>
              <p className="text-xs text-blue-200">
                {defaultDocumentName ? `Physical helpdesks for obtaining: ${defaultDocumentName}` : 'District Industries Centres, MSME-DFO & Citizen e-Seva Helpdesks'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Demo Notice Strip */}
        <div className="bg-amber-50 border-b border-amber-200 px-5 py-2 flex items-center gap-2 text-xs text-amber-900">
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
          <span>
            <strong>Demo locations:</strong> Centre profiles, phone numbers and distances shown below are simulated for demonstration. Verify operational timings before physical visits.
          </span>
        </div>

        {/* City Filter / Search Bar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-700">Filter Region:</span>
            <div className="flex items-center gap-1.5">
              {['Chennai', 'New Delhi', 'Mumbai', 'Bengaluru'].map(city => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`text-xs px-3 py-1.5 rounded-full font-medium transition ${
                    selectedCity.toLowerCase() === city.toLowerCase()
                      ? 'bg-[#0B2545] text-white shadow-xs'
                      : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
          <span className="text-xs text-slate-500">
            Showing {displayCentres.length} matching centres
          </span>
        </div>

        {/* Directions toast alert if clicked */}
        {directionsNotice && (
          <div className="bg-emerald-50 border-b border-emerald-300 px-5 py-2 text-xs text-emerald-900 flex items-center gap-2 animate-in fade-in duration-150">
            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>{directionsNotice}</span>
          </div>
        )}

        {/* Centre Cards List */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1 divide-y divide-slate-100">
          {displayCentres.map((centre) => (
            <div key={centre.id} className="pt-4 first:pt-0">
              <div className="bg-white rounded-xl border border-slate-200 hover:border-blue-300 p-4 shadow-xs transition hover:shadow-md">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
                  
                  {/* Left: Centre Details */}
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                        {centre.type}
                      </span>
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {centre.distanceKm} km away
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {centre.area}, {centre.city}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 leading-tight">
                      {centre.name}
                    </h4>

                    <p className="text-xs text-slate-600 flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span>{centre.address}</span>
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 pt-1">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{centre.openingHours}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="font-medium text-slate-800">{centre.phone}</span>
                      </div>
                    </div>

                    {/* Services Checklist */}
                    <div className="pt-2">
                      <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                        On-Site Citizen Services Provided:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {centre.services.map((service, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 text-[11px] bg-slate-100 text-slate-800 px-2.5 py-1 rounded border border-slate-200"
                          >
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Actions */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-end gap-2 shrink-0 pt-2 sm:pt-0">
                    <button
                      onClick={() => handleDirections(centre.name)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-[#0B2545] hover:bg-[#134B70] text-white text-xs font-semibold px-3.5 py-2 rounded-lg transition shadow-xs"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      Get Directions
                    </button>
                    <a
                      href={`tel:${centre.phone}`}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-medium px-3.5 py-2 rounded-lg transition"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      Call Centre
                    </a>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            For online Udyam self-registration, visit <a href="https://udyamregistration.gov.in" target="_blank" rel="noreferrer" className="text-blue-600 underline font-medium">udyamregistration.gov.in</a> (Free of charge)
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold rounded-lg transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
