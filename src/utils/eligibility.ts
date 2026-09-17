import { Scheme, EntrepreneurProfile, MatchScoreResult, ScoreBreakdown } from '../types';

export function evaluateSchemeEligibility(scheme: Scheme, profile: EntrepreneurProfile): MatchScoreResult {
  const breakdown: ScoreBreakdown = {
    businessType: 0,
    fundingRange: 0,
    businessStage: 0,
    entrepreneurType: 0,
    location: 0,
    incomeEligibility: 0,
    documentReadiness: 0
  };

  const matchReasons: string[] = [];
  const cautionNotes: string[] = [];

  // 1. Business Type Match (+20)
  if (scheme.businessTypes.includes(profile.businessType)) {
    breakdown.businessType = 20;
    matchReasons.push(`Your business type (${profile.businessType}) is directly recognized and eligible under this scheme`);
  } else if (scheme.businessTypes.includes('Other')) {
    breakdown.businessType = 12;
    matchReasons.push(`Your business type (${profile.businessType}) may qualify under allied or miscellaneous enterprise provisions`);
  } else {
    breakdown.businessType = 5;
    cautionNotes.push(`Primary focus of ${scheme.code} is typically for ${scheme.businessTypes.slice(0, 3).join(', ')}`);
  }

  // 2. Funding Range Match (+20)
  const req = profile.requiredFunding;
  if (req >= scheme.minFunding && req <= scheme.maxFunding) {
    breakdown.fundingRange = 20;
    matchReasons.push(`Your requested funding (₹${req.toLocaleString('en-IN')}) falls comfortably within the demo range (₹${scheme.minFunding.toLocaleString('en-IN')} - ₹${scheme.maxFunding.toLocaleString('en-IN')})`);
  } else if (req > scheme.maxFunding && req <= scheme.maxFunding * 1.2) {
    breakdown.fundingRange = 12;
    cautionNotes.push(`Requested funding slightly exceeds the demo ceiling for ${scheme.code}`);
  } else if (req < scheme.minFunding && req >= scheme.minFunding * 0.7) {
    breakdown.fundingRange = 12;
    cautionNotes.push(`Requested funding is slightly below typical minimum tranche`);
  } else {
    breakdown.fundingRange = 4;
    cautionNotes.push(`Funding requirement is outside typical parameters for this scheme`);
  }

  // 3. Business Stage Match (+15)
  if (scheme.businessStages.includes(profile.businessStage)) {
    breakdown.businessStage = 15;
    matchReasons.push(`Your operational stage (${profile.businessStage}) aligns with target assistance parameters`);
  } else {
    breakdown.businessStage = 6;
    cautionNotes.push(`Scheme usually prioritizes ${scheme.businessStages.join(' or ')}`);
  }

  // 4. Entrepreneur Type & Demographics (+15)
  let entScore = 10;
  if (scheme.id === 'stand-up-india') {
    const isEligibleDemographic = 
      profile.gender === 'Female' || 
      ['SC', 'ST'].includes(profile.socialCategory) ||
      profile.specialCategory === 'Women Entrepreneur';
    
    if (isEligibleDemographic) {
      entScore = 15;
      matchReasons.push(`Your demographic profile meets the mandate for Stand-Up India`);
    } else {
      entScore = 4;
      cautionNotes.push(`Stand-Up India specifically mandates SC, ST or Women entrepreneurs`);
    }
  } else if (scheme.id === 'pm-vishwakarma') {
    if (profile.businessType === 'Handicraft') {
      entScore = 15;
      matchReasons.push(`Targeted artisan trade category matches Vishwakarma criteria`);
    } else {
      entScore = 5;
      cautionNotes.push(`PM Vishwakarma is restricted to 18 traditional craftsmanship trades`);
    }
  } else if (scheme.id === 'pmegp') {
    if (profile.age >= 18) {
      entScore = 14;
      if (['OBC', 'SC', 'ST', 'Minority'].includes(profile.socialCategory) || profile.gender === 'Female') {
        entScore = 15;
        matchReasons.push(`Eligible for higher government capital subsidy tier (up to 25%-35%)`);
      } else {
        matchReasons.push(`Meets age and entrepreneur profile guidelines`);
      }
    }
  } else {
    entScore = 14;
    matchReasons.push(`Entrepreneur classification matches priority guidelines`);
  }
  breakdown.entrepreneurType = entScore;

  // 5. Location Match (+10)
  if (scheme.locations.includes('All India') || scheme.locations.includes(profile.businessLocation)) {
    breakdown.location = 10;
    matchReasons.push(`Applicable in your business location category (${profile.businessLocation})`);
  } else {
    breakdown.location = 5;
    cautionNotes.push(`Location criteria may have specific territorial restrictions`);
  }

  // 6. Income & Financial Profile Match (+10)
  if (scheme.id === 'day-nulm') {
    if (profile.personalIncome <= 300000 && profile.businessLocation === 'Urban') {
      breakdown.incomeEligibility = 10;
      matchReasons.push(`Personal income qualifies within urban low-income assistance ceiling`);
    } else {
      breakdown.incomeEligibility = 4;
      cautionNotes.push(`NULM prioritizes urban poor under notified income ceiling`);
    }
  } else {
    // Standard commercial / MSME viability check
    if (profile.creditHistory === 'Good' || profile.creditHistory === 'Average') {
      breakdown.incomeEligibility = 10;
      matchReasons.push(`Positive credit profile and turnover support debt servicing capability`);
    } else {
      breakdown.incomeEligibility = 6;
      cautionNotes.push(`Limited credit history may require additional verification or bank guarantor`);
    }
  }

  // 7. Document Readiness (+10)
  const reqDocs = scheme.requiredDocuments;
  const availableCount = reqDocs.filter(docId => profile.availableDocuments[docId]).length;
  const docRatio = reqDocs.length > 0 ? availableCount / reqDocs.length : 1;

  if (docRatio >= 0.85) {
    breakdown.documentReadiness = 10;
    matchReasons.push(`High document readiness (${availableCount}/${reqDocs.length} required documents currently available)`);
  } else if (docRatio >= 0.6) {
    breakdown.documentReadiness = 7;
    matchReasons.push(`Moderate document readiness (${availableCount}/${reqDocs.length} available; remaining can be obtained via support centre)`);
  } else {
    breakdown.documentReadiness = 4;
    cautionNotes.push(`Multiple essential documents missing (${reqDocs.length - availableCount} pending)`);
  }

  // Calculate total score (capped at 100)
  const totalScore = Math.min(
    100,
    breakdown.businessType +
    breakdown.fundingRange +
    breakdown.businessStage +
    breakdown.entrepreneurType +
    breakdown.location +
    breakdown.incomeEligibility +
    breakdown.documentReadiness
  );

  // Categorize Tier
  let matchTier: 'Highly Suitable' | 'Strong Match' | 'Potential Match' | 'Limited Match';
  if (totalScore >= 90) {
    matchTier = 'Highly Suitable';
  } else if (totalScore >= 75) {
    matchTier = 'Strong Match';
  } else if (totalScore >= 60) {
    matchTier = 'Potential Match';
  } else {
    matchTier = 'Limited Match';
  }

  return {
    scheme,
    score: totalScore,
    matchTier,
    breakdown,
    matchReasons,
    cautionNotes,
    eligibilityNote: 'Appears eligible under the demo rules. Final eligibility must be verified through the official scheme authority.'
  };
}

export function rankAllSchemes(schemes: Scheme[], profile: EntrepreneurProfile): MatchScoreResult[] {
  const results = schemes.map(scheme => evaluateSchemeEligibility(scheme, profile));
  return results.sort((a, b) => b.score - a.score);
}
