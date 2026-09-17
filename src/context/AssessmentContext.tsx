import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { EntrepreneurProfile, MatchScoreResult, Scheme } from '../types';
import { DEMO_PERSONA_ARUN, DEMO_PERSONA_POOJA, DEMO_PERSONA_RAMESH, EMPTY_PROFILE } from '../data/mockUser';
import { MOCK_SCHEMES } from '../data/schemes';
import { rankAllSchemes } from '../utils/eligibility';

interface AssessmentContextType {
  profile: EntrepreneurProfile;
  updateProfile: (updates: Partial<EntrepreneurProfile>) => void;
  setAvailableDocument: (docId: string, available: boolean) => void;
  loadDemoPersona: (personaKey: 'arun' | 'pooja' | 'ramesh' | 'empty') => void;
  currentPersonaKey: 'arun' | 'pooja' | 'ramesh' | 'custom';
  rankedResults: MatchScoreResult[];
  topRecommendation: MatchScoreResult;
  isAnalyzing: boolean;
  analysisStep: number;
  analysisMessage: string;
  runAnalysis: () => Promise<void>;
  selectedCompareIds: string[];
  toggleCompareScheme: (id: string) => void;
  clearComparison: () => void;
  allSchemes: Scheme[];
  language: 'en' | 'hi' | 'ta';
  setLanguage: (lang: 'en' | 'hi' | 'ta') => void;
  hasCompletedAssessment: boolean;
}

const AssessmentContext = createContext<AssessmentContextType | undefined>(undefined);

export const AssessmentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<EntrepreneurProfile>(DEMO_PERSONA_ARUN);
  const [currentPersonaKey, setCurrentPersonaKey] = useState<'arun' | 'pooja' | 'ramesh' | 'custom'>('arun');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);
  const [analysisMessage, setAnalysisMessage] = useState('');
  const [selectedCompareIds, setSelectedCompareIds] = useState<string[]>(['pmegp', 'pm-mudra-tarun']);
  const [language, setLanguage] = useState<'en' | 'hi' | 'ta'>('en');
  const [hasCompletedAssessment, setHasCompletedAssessment] = useState(true);

  const rankedResults = useMemo(() => {
    return rankAllSchemes(MOCK_SCHEMES, profile);
  }, [profile]);

  const topRecommendation = rankedResults[0];

  const updateProfile = (updates: Partial<EntrepreneurProfile>) => {
    setProfile(prev => ({
      ...prev,
      ...updates
    }));
    setCurrentPersonaKey('custom');
  };

  const setAvailableDocument = (docId: string, available: boolean) => {
    setProfile(prev => ({
      ...prev,
      availableDocuments: {
        ...prev.availableDocuments,
        [docId]: available
      }
    }));
  };

  const loadDemoPersona = (key: 'arun' | 'pooja' | 'ramesh' | 'empty') => {
    if (key === 'arun') {
      setProfile({ ...DEMO_PERSONA_ARUN });
      setCurrentPersonaKey('arun');
      setSelectedCompareIds(['pmegp', 'pm-mudra-tarun']);
    } else if (key === 'pooja') {
      setProfile({ ...DEMO_PERSONA_POOJA });
      setCurrentPersonaKey('pooja');
      setSelectedCompareIds(['stand-up-india', 'pm-vishwakarma']);
    } else if (key === 'ramesh') {
      setProfile({ ...DEMO_PERSONA_RAMESH });
      setCurrentPersonaKey('ramesh');
      setSelectedCompareIds(['pmegp', 'pm-mudra-kishore']);
    } else {
      setProfile({ ...EMPTY_PROFILE });
      setCurrentPersonaKey('custom');
      setSelectedCompareIds([]);
    }
  };

  const runAnalysis = async (): Promise<void> => {
    setIsAnalyzing(true);
    setAnalysisStep(1);
    setAnalysisMessage('Analyzing citizen entrepreneur demographic & business profile...');
    
    await new Promise(r => setTimeout(r, 450));
    setAnalysisStep(2);
    setAnalysisMessage('Evaluating scheme eligibility criteria against MSME guidelines...');

    await new Promise(r => setTimeout(r, 450));
    setAnalysisStep(3);
    setAnalysisMessage('Ranking 8 national support schemes & calculating match affinity...');

    await new Promise(r => setTimeout(r, 400));
    setAnalysisStep(4);
    setAnalysisMessage('Synthesizing financial burden, interest terms & subsidy models...');

    await new Promise(r => setTimeout(r, 400));
    setAnalysisStep(5);
    setAnalysisMessage('Checking document readiness & locating nearest facilitation centre...');

    await new Promise(r => setTimeout(r, 350));
    setIsAnalyzing(false);
    setHasCompletedAssessment(true);
  };

  const toggleCompareScheme = (id: string) => {
    setSelectedCompareIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(x => x !== id);
      }
      if (prev.length >= 3) {
        // max 3
        return [prev[1], prev[2], id];
      }
      return [...prev, id];
    });
  };

  const clearComparison = () => setSelectedCompareIds([]);

  return (
    <AssessmentContext.Provider
      value={{
        profile,
        updateProfile,
        setAvailableDocument,
        loadDemoPersona,
        currentPersonaKey,
        rankedResults,
        topRecommendation,
        isAnalyzing,
        analysisStep,
        analysisMessage,
        runAnalysis,
        selectedCompareIds,
        toggleCompareScheme,
        clearComparison,
        allSchemes: MOCK_SCHEMES,
        language,
        setLanguage,
        hasCompletedAssessment
      }}
    >
      {children}
    </AssessmentContext.Provider>
  );
};

export const useAssessment = () => {
  const context = useContext(AssessmentContext);
  if (!context) {
    throw new Error('useAssessment must be used within an AssessmentProvider');
  }
  return context;
};
