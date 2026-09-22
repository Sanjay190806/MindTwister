export interface TranslationStrings {
  portalBadge: string;
  tagline: string;
  heroHeading: string;
  heroSub: string;
  findMyScheme: string;
  exploreSchemes: string;
  startAssessment: string;
  home: string;
  howItWorks: string;
  dashboard: string;
  tryDemo: string;
  recommendationTitle: string;
  financialTitle: string;
  documentsTitle: string;
  nearestCentre: string;
  disclaimerText: string;
}

export const TRANSLATIONS: Record<'en' | 'hi' | 'ta', TranslationStrings> = {
  en: {
    portalBadge: 'Smart India Hackathon 2026 Prototype • Problem SIH26092',
    tagline: 'AI-Powered Scheme Matching & Financial Planning',
    heroHeading: 'Find the Right Government Scheme for You',
    heroSub: 'JanSahay AI analyzes your profile, financial needs and eligibility to identify suitable government schemes.',
    findMyScheme: 'Find My Scheme',
    exploreSchemes: 'Explore Schemes',
    startAssessment: 'Start Assessment',
    home: 'Home',
    howItWorks: 'How It Works',
    dashboard: 'Dashboard',
    tryDemo: 'Try Demo Persona',
    recommendationTitle: 'Your JANSAHAY AI Recommendation',
    financialTitle: 'Financial Estimate & EMI Calculator',
    documentsTitle: 'Document Readiness & Verification',
    nearestCentre: 'Nearest Facilitation Centre',
    disclaimerText: 'SIH 2026 Prototype: All calculations, interest rates and scheme rules are simulated for demonstration purposes.'
  },
  hi: {
    portalBadge: 'स्मार्ट इंडिया हैकथॉन 2026 प्रोटोटाइप • समस्या SIH26092',
    tagline: 'एआई-संचालित योजना चयन एवं वित्तीय योजना',
    heroHeading: 'आपके लिए सही सरकारी योजना खोजें',
    heroSub: 'जनसहाय एआई उपयुक्त सरकारी योजनाओं की पहचान करने के लिए आपकी प्रोफाइल, वित्तीय आवश्यकताओं और पात्रता का विश्लेषण करता है।',
    findMyScheme: 'मेरी योजना खोजें',
    exploreSchemes: 'योजनाएं देखें',
    startAssessment: 'आकलन शुरू करें',
    home: 'होम',
    howItWorks: 'यह कैसे काम करता है',
    dashboard: 'डैशबोर्ड',
    tryDemo: 'डेमो प्रोफाइल देखें',
    recommendationTitle: 'आपकी जनसहाय एआई सिफारिश',
    financialTitle: 'वित्तीय अनुमान एवं ईएमआई कैलकुलेटर',
    documentsTitle: 'दस्तावेज़ तत्परता एवं सत्यापन',
    nearestCentre: 'निकटतम सुविधा केंद्र',
    disclaimerText: 'एसआईएच 2026 प्रोटोटाइप: सभी गणनाएं, ब्याज दरें और नियम केवल प्रदर्शन के लिए सिम्युलेटेड हैं।'
  },
  ta: {
    portalBadge: 'ஸ்மார்ட் இந்தியா ஹேக்கத்தான் 2026 மாதிரி • SIH26092',
    tagline: 'செயற்கை நுண்ணறிவு திட்டப் பொருத்தம் & நிதி திட்டமிடல்',
    heroHeading: 'உங்களுக்கான சரியான அரசுத் திட்டத்தைக் கண்டறியுங்கள்',
    heroSub: 'ஜன்சஹாய் ஏஐ பொருத்தமான அரசுத் திட்டங்களை அடையாளம் காண உங்கள் விவரக்குறிப்பு, நிதித் தேவைகள் மற்றும் தகுதியை ஆய்வு செய்கிறது.',
    findMyScheme: 'என் திட்டத்தைக் காண்க',
    exploreSchemes: 'திட்டங்களை ஆராய்க',
    startAssessment: 'மதிப்பீட்டைத் தொடங்குக',
    home: 'முகப்பு',
    howItWorks: 'எப்படி செயல்படுகிறது',
    dashboard: 'டாஷ்போர்டு',
    tryDemo: 'மாதிரி சுயவிவரம்',
    recommendationTitle: 'ஜன்சஹாய் ஏஐ பரிந்துரை',
    financialTitle: 'நிதி மதிப்பீடு & EMI கணக்கீடு',
    documentsTitle: 'ஆவணத் தயார்நிலை சரிபார்ப்பு',
    nearestCentre: 'அருகிலுள்ள சேவை மையம்',
    disclaimerText: 'SIH 2026 முன்மாதிரி: அனைத்துக் கணக்கீடுகளும் மற்றும் வட்டி விகிதங்களும் மாதிரி விளக்கத்திற்கானது மட்டுமே.'
  }
};
