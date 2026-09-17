import { Scheme, DocumentItem } from '../types';

export const MASTER_DOCUMENTS: DocumentItem[] = [
  {
    id: 'aadhaar',
    name: 'Aadhaar Card',
    category: 'Identity',
    description: 'Unique 12-digit identity proof linked with mobile number for OTP e-KYC verification.',
    howToGet: 'Download e-Aadhaar from the official UIDAI portal (eaadhaar.uidai.gov.in) using your registered mobile number, or visit any nearest Aadhaar Seva Kendra.',
    estimatedDays: 'Immediate (online download) / 3-5 days',
    supportAgency: 'UIDAI / Aadhaar Seva Kendra'
  },
  {
    id: 'pan',
    name: 'PAN Card (Personal / Entity)',
    category: 'Identity',
    description: 'Permanent Account Number issued by the Income Tax Department of India for financial transactions.',
    howToGet: 'Apply online through NSDL (Protean) or UTIITSL portal (onlineservices.nsdl.com) with Instant e-PAN facility available via Aadhaar OTP.',
    estimatedDays: '10 minutes for Instant e-PAN / 7 days for physical card',
    supportAgency: 'Income Tax Dept / NSDL TIN-FC'
  },
  {
    id: 'bankAccount',
    name: 'Active Savings / Current Bank Account',
    category: 'Financial',
    description: 'Operational bank account in a Scheduled Commercial Bank, Regional Rural Bank or Cooperative Bank.',
    howToGet: 'Visit any public sector bank or commercial bank branch with Aadhaar, PAN, and initial deposit proof. Video-KYC account opening is also available.',
    estimatedDays: 'Same day (digital) / 1-2 days',
    supportAgency: 'Public Sector / Commercial Banks'
  },
  {
    id: 'addressProof',
    name: 'Proof of Address (Utility Bill / Rent Agreement)',
    category: 'Identity',
    description: 'Electricity bill, telephone bill, water bill (under 3 months old), or registered lease/rent agreement.',
    howToGet: 'Obtain latest electricity/water bill from utility provider portal, or execute a registered rental agreement with property owner.',
    estimatedDays: 'Immediate to 1 day',
    supportAgency: 'Electricity Board / Sub-Registrar Office'
  },
  {
    id: 'businessRegistration',
    name: 'Business Entity Registration / Trade License',
    category: 'Business',
    description: 'Shop & Establishment Act certificate, municipal trade license, partnership deed, or company incorporation.',
    howToGet: 'Apply via your State Government Labour / Municipal Corporation portal under the Shops & Establishment Act or local urban body portal.',
    estimatedDays: '3-7 working days',
    supportAgency: 'Municipal Corporation / State Labour Dept'
  },
  {
    id: 'udyamRegistration',
    name: 'Udyam Registration Certificate',
    category: 'Business',
    description: 'Official Government of India MSME registration certificate mandatory for priority sector lending & subsidies.',
    howToGet: 'Apply free of cost on the official Ministry of MSME portal (udyamregistration.gov.in) using your Aadhaar number and PAN. No physical documents needed.',
    estimatedDays: 'Instant to 24 hours (Free portal)',
    supportAgency: 'Ministry of MSME / Nearest MSME-DFO / DIC'
  },
  {
    id: 'incomeProof',
    name: 'Income Proof / Salary Slip / ITR / Form 16',
    category: 'Financial',
    description: 'Income Tax Return acknowledgement for the previous assessment year or Tehsildar-issued income certificate.',
    howToGet: 'Download ITR-V acknowledgement from incometax.gov.in or obtain an official family income certificate from the local Taluk/Tehsildar office via State e-Seva.',
    estimatedDays: 'Immediate (ITR portal) / 5-7 days (Tehsildar)',
    supportAgency: 'Income Tax Dept / Revenue Department (e-District)'
  },
  {
    id: 'bankStatement',
    name: 'Bank Statement (Last 6 Months)',
    category: 'Financial',
    description: 'Official bank statement showing daily average balance, cash flows, and no cheque bounce incidents.',
    howToGet: 'Download stamped e-statement from your bank netbanking portal or mobile app, or request a printout at your home branch.',
    estimatedDays: 'Instant (Netbanking / Mobile Banking)',
    supportAgency: 'Home Bank Branch'
  },
  {
    id: 'gstCertificate',
    name: 'GST Registration Certificate (REG-06)',
    category: 'Business',
    description: 'Goods and Services Tax Identification Number (GSTIN) certificate for turnover or inter-state trading.',
    howToGet: 'Apply online at services.gst.gov.in with PAN, business address proof, and bank account details. Mandatory if turnover exceeds ₹40 Lakh (goods) or ₹20 Lakh (services).',
    estimatedDays: '3 to 7 working days',
    supportAgency: 'GST Seva Kendra / CBIC'
  },
  {
    id: 'businessPlan',
    name: 'Detailed Project Report (DPR) / Business Plan',
    category: 'Business',
    description: 'Structured proposal outlining market feasibility, machinery costs, cash flow projections, and job creation.',
    howToGet: 'Draft using District Industries Centre (DIC) sample templates or consult an MSME Facilitation Centre or chartered accountant.',
    estimatedDays: '3-5 days',
    supportAgency: 'District Industries Centre (DIC) / MSME DFO'
  },
  {
    id: 'casteCertificate',
    name: 'Community / Caste Certificate (SC/ST/OBC)',
    category: 'Category',
    description: 'Official community certificate to claim higher government subsidy slabs (e.g. 25-35% under PMEGP).',
    howToGet: 'Apply through your state e-District / e-Seva portal or Revenue Department (Tahsildar / Sub-Divisional Magistrate).',
    estimatedDays: '7 to 15 working days',
    supportAgency: 'Revenue Dept / e-Seva / CSC Centre'
  },
  {
    id: 'disabilityCertificate',
    name: 'UDID / Disability Certificate (If Applicable)',
    category: 'Category',
    description: 'Unique Disability ID (UDID) issued by the competent medical board for special entrepreneur incentives.',
    howToGet: 'Apply on swavlambancard.gov.in or obtain from the District Government Hospital Chief Medical Officer (CMO).',
    estimatedDays: '15 to 30 days',
    supportAgency: 'Govt Medical Board / Dept of Empowerment of PwD'
  },
  {
    id: 'projectReport',
    name: 'Machinery Quotations & Project Costing',
    category: 'Business',
    description: 'Authorized vendor price quotations and invoice estimates for capital equipment or working capital requirement.',
    howToGet: 'Request formal pro-forma invoices and technical specification sheets from certified equipment manufacturers or suppliers.',
    estimatedDays: '2-4 days',
    supportAgency: 'Equipment Vendors / Machinery Suppliers'
  }
];

export const MOCK_SCHEMES: Scheme[] = [
  {
    id: 'pmegp',
    name: "Prime Minister's Employment Generation Programme",
    code: 'PMEGP',
    tagline: 'Credit-Linked Capital Subsidy for Micro-Enterprises & Self-Employment',
    shortDescription: 'Credit-linked subsidy programme by Ministry of MSME to generate continuous self-employment opportunities in rural and urban areas.',
    ministry: 'Ministry of Micro, Small & Medium Enterprises (MoMSME) / KVIC',
    category: 'Self-Employment',
    businessTypes: ['Manufacturing', 'Food Processing', 'Service', 'Handicraft', 'Agriculture Allied'],
    businessStages: ['New Business', 'Expansion', 'Existing Business'],
    minFunding: 100000,
    maxFunding: 5000000, // Up to 50 Lakh for Mfg, 20 Lakh for Services
    mockInterestRate: 8.5,
    mockTenureYears: 5,
    mockSubsidy: {
      available: true,
      percentage: 25, // default baseline
      ruralPercentage: 35,
      urbanPercentage: 25,
      specialCategoryBonus: 10,
      description: 'Capital subsidy: 15% to 25% for general category; 25% to 35% for Special Categories (SC/ST/OBC/Minorities/Women/Ex-servicemen/PH) and rural areas.'
    },
    eligibilityRules: [
      'Any individual above 18 years of age is eligible',
      'For projects over ₹10 Lakh in manufacturing and ₹5 Lakh in services, minimum 8th class pass educational qualification required',
      'Assistance available only for new projects or formal expansion sanctioned under 2nd loan window',
      'Self-Help Groups (SHGs) and Charitable Trusts not registered under any other subsidy scheme are also eligible'
    ],
    requiredDocuments: [
      'aadhaar',
      'pan',
      'bankAccount',
      'addressProof',
      'udyamRegistration',
      'businessPlan',
      'projectReport',
      'incomeProof'
    ],
    targetUsers: [
      'New Entrepreneurs setting up micro processing or manufacturing units',
      'Existing unit owners applying for formal technology & capacity expansion',
      'Women and rural artisans establishing self-employment ventures'
    ],
    locations: ['All India', 'Urban', 'Rural', 'Semi-Urban'],
    channelPartners: [
      'Khadi and Village Industries Commission (KVIC)',
      'District Industries Centres (DIC)',
      'State KVIB Boards',
      'Public Sector Commercial Banks'
    ],
    benefits: [
      'High capital subsidy up to 35% credited directly into borrower subsidy account (lock-in period applies)',
      'Substantial loan ceiling up to ₹50 Lakh for manufacturing and ₹20 Lakh for services',
      'No collateral security required for loans up to ₹10 Lakh',
      'Integrated EDP (Entrepreneurship Development Programme) training provided free of cost'
    ],
    limitations: [
      'Units producing meat, intoxicants, or hazardous environmental products are ineligible',
      'Second loan for upgradation requires existing unit to be running profitably for 3 consecutive years'
    ],
    applicationSteps: [
      { step: 1, title: 'Online Registration', description: 'Register on the official PMEGP e-Portal (kviconline.gov.in/pmegpeportal) selecting implementing agency (KVIC/KVIB/DIC).' },
      { step: 2, title: 'Document Upload & DPR', description: 'Upload Aadhaar, PAN, caste/special category certificate, and detailed project costing report.' },
      { step: 3, title: 'District Task Force Committee Review', description: 'DTFC evaluates application feasibility and forwards approved proposal to designated financing bank.' },
      { step: 4, title: 'Bank Sanction & Margin Money', description: 'Bank conducts appraisal, sanctions the term loan & working capital, and claims margin money subsidy from KVIC.' }
    ],
    officialPortalUrl: 'https://kviconline.gov.in/pmegpeportal',
    badgeTag: 'Highest Subsidy Benefit'
  },
  {
    id: 'pm-mudra-tarun',
    name: 'Pradhan Mantri MUDRA Yojana (Tarun)',
    code: 'PMMY-TARUN',
    tagline: 'Collateral-Free Institutional Finance for Growing Micro Enterprises',
    shortDescription: 'Provides loans from ₹5 Lakh up to ₹10 Lakh (extended to ₹20 Lakh under latest guidelines) for established micro businesses expanding working capital and equipment.',
    ministry: 'Ministry of Finance / Department of Financial Services',
    category: 'MSME',
    businessTypes: ['Manufacturing', 'Food Processing', 'Service', 'Trading', 'Retail', 'Handicraft', 'Technology'],
    businessStages: ['Existing Business', 'Expansion'],
    minFunding: 500000,
    maxFunding: 1000000,
    mockInterestRate: 9.2,
    mockTenureYears: 5,
    mockSubsidy: {
      available: false,
      percentage: 0,
      description: 'Zero direct capital subsidy; benefit comes through 100% collateral-free credit guarantee via NCGTC and subsidized low margin money requirements.'
    },
    eligibilityRules: [
      'Existing non-corporate, non-farm small/micro enterprises with operational track record',
      'Applicant must not be a defaulter to any commercial bank or financial institution',
      'Satisfactory transaction history in existing business account',
      'Viable business model with demonstrated cash flow for monthly EMI servicing'
    ],
    requiredDocuments: [
      'aadhaar',
      'pan',
      'bankAccount',
      'addressProof',
      'businessRegistration',
      'udyamRegistration',
      'bankStatement',
      'gstCertificate'
    ],
    targetUsers: [
      'Retail shop owners, wholesale traders, and food processing operators',
      'Service providers upgrading computational or logistical equipment',
      'Micro enterprises needing working capital enhancements'
    ],
    locations: ['All India', 'Urban', 'Semi-Urban', 'Rural'],
    channelPartners: [
      'Public Sector Commercial Banks',
      'Regional Rural Banks (RRBs)',
      'Small Finance Banks (SFBs)',
      'Micro Finance Institutions (MFIs)'
    ],
    benefits: [
      'Completely collateral-free lending guaranteed under National Credit Guarantee Trustee Company (NCGTC)',
      'MUDRA Card provided for flexible working capital cash credit withdrawals',
      'Minimal processing fees and nominal documentation requirements',
      'Fast sanction through Udyamimitra portal'
    ],
    limitations: [
      'No capital grant or interest rebate provided',
      'Strict verification of 6 months bank statement balance trends'
    ],
    applicationSteps: [
      { step: 1, title: 'Udyamimitra Submission', description: 'Submit digital application through udyamimitra.in portal or directly to preferred bank branch.' },
      { step: 2, title: 'Document Verification', description: 'Submit KYC, business registration, 6-month bank statement, and past turnover records.' },
      { step: 3, title: 'Credit Appraisal', description: 'Bank assesses cash-flow feasibility and verifies CIBIL/CRIF credit bureau record.' },
      { step: 4, title: 'Disbursement & MUDRA Card', description: 'Term loan credited for asset acquisition and MUDRA Card issued for revolving working capital.' }
    ],
    officialPortalUrl: 'https://www.mudra.org.in',
    badgeTag: 'Popular for Expansion'
  },
  {
    id: 'pm-mudra-kishore',
    name: 'Pradhan Mantri MUDRA Yojana (Kishore)',
    code: 'PMMY-KISHORE',
    tagline: 'Credit Support for Developing Micro Enterprises',
    shortDescription: 'Offers loan facilities from ₹50,000 to ₹5,00,000 to help early-stage micro entrepreneurs buy small machinery and raw materials.',
    ministry: 'Ministry of Finance / Department of Financial Services',
    category: 'MSME',
    businessTypes: ['Manufacturing', 'Food Processing', 'Service', 'Trading', 'Retail', 'Handicraft', 'Other'],
    businessStages: ['New Business', 'Existing Business', 'Idea Stage'],
    minFunding: 50000,
    maxFunding: 500000,
    mockInterestRate: 8.8,
    mockTenureYears: 4,
    mockSubsidy: {
      available: false,
      percentage: 0,
      description: 'Collateral-free institutional credit with concessional processing charges and government credit guarantee protection.'
    },
    eligibilityRules: [
      'Micro entrepreneurs starting new operations or upgrading existing small enterprise',
      'Age between 18 and 65 years',
      'Clean credit track record without past write-offs or willful defaults'
    ],
    requiredDocuments: [
      'aadhaar',
      'pan',
      'bankAccount',
      'addressProof',
      'businessRegistration',
      'bankStatement'
    ],
    targetUsers: [
      'Street vendors upgrading to kiosks, tailoring units, repair technicians',
      'Small cottage units, grocery retail shops, handicraft workshops'
    ],
    locations: ['All India', 'Urban', 'Semi-Urban', 'Rural'],
    channelPartners: ['Public Sector Banks', 'Small Finance Banks', 'Cooperative Banks'],
    benefits: [
      'Zero collateral or third-party guarantee needed',
      'Flexible repayment tenure ranging from 3 to 5 years',
      'Easy transition to Tarun tier as business turnover scales'
    ],
    limitations: [
      'Funding capped at maximum ₹5,00,000'
    ],
    applicationSteps: [
      { step: 1, title: 'Branch Application', description: 'Approach nearest commercial bank or apply via JanSamarth / Udyamimitra portal.' },
      { step: 2, title: 'KYC & Quotations', description: 'Provide identity proof, utility bill, and vendor quotation for proposed equipment.' },
      { step: 3, title: 'Sanction', description: 'Loan sanctioned within 7-10 working days upon basic verification.' }
    ],
    officialPortalUrl: 'https://www.mudra.org.in',
    badgeTag: 'Fastest Sanction'
  },
  {
    id: 'stand-up-india',
    name: 'Stand-Up India Scheme',
    code: 'STAND-UP-INDIA',
    tagline: 'Dedicated Funding for SC, ST and Women Entrepreneurs',
    shortDescription: 'Bank loans between ₹10 Lakh and ₹1 Crore to at least one SC/ST borrower and one woman borrower per bank branch for greenfield enterprises.',
    ministry: 'Ministry of Finance / SIDBI',
    category: 'Women Entrepreneurship',
    businessTypes: ['Manufacturing', 'Food Processing', 'Service', 'Trading', 'Agriculture Allied', 'Technology'],
    businessStages: ['New Business', 'Idea Stage', 'Expansion'],
    minFunding: 1000000,
    maxFunding: 10000000,
    mockInterestRate: 8.75,
    mockTenureYears: 7,
    mockSubsidy: {
      available: true,
      percentage: 15,
      description: 'Convergence with central/state credit guarantee and subsidy schemes to keep borrower margin money commitment at only 15%.'
    },
    eligibilityRules: [
      'SC/ST and/or Women entrepreneurs above 18 years of age',
      'Loans under the scheme are available only for greenfield (first-time venture) projects',
      'In case of non-individual enterprises, 51% shareholding & controlling stake must be held by SC/ST or Women entrepreneur',
      'Borrower should not be in default to any bank or financial institution'
    ],
    requiredDocuments: [
      'aadhaar',
      'pan',
      'bankAccount',
      'addressProof',
      'businessRegistration',
      'udyamRegistration',
      'casteCertificate',
      'businessPlan',
      'projectReport'
    ],
    targetUsers: [
      'Women founders establishing new agro-processing or light manufacturing units',
      'SC/ST entrepreneurs launching commercial service, logistics, or trading ventures'
    ],
    locations: ['All India', 'Urban', 'Semi-Urban', 'Rural'],
    channelPartners: ['Scheduled Commercial Banks', 'SIDBI Lead District Managers (LDM)', 'NABARD'],
    benefits: [
      'Substantial composite loan (term loan + working capital) up to ₹1 Crore',
      'Repayable in up to 7 years with a comprehensive moratorium period of up to 18 months',
      'Credit Guarantee Scheme for Stand Up India (CGFSI) support',
      'Handholding support from SIDBI connect centres'
    ],
    limitations: [
      'Strictly applicable for Greenfield (new venture) projects only',
      'Mandatory SC/ST or Women majority ownership'
    ],
    applicationSteps: [
      { step: 1, title: 'Portal Registration', description: 'Register on standupmitra.in portal and choose your district & target business type.' },
      { step: 2, title: 'Handholding Agency Connect', description: 'Connect with local SIDBI or NABARD handholding agency for DPR preparation if needed.' },
      { step: 3, title: 'Bank Branch Routing', description: 'Application routed directly to the designated branch Lead District Manager.' },
      { step: 4, title: 'Sanction & Moratorium', description: 'Loan sanctioned with up to 18 months moratorium before repayment begins.' }
    ],
    officialPortalUrl: 'https://www.standupmitra.in',
    badgeTag: 'High Capital for Women & SC/ST'
  },
  {
    id: 'cgtmse',
    name: 'Credit Guarantee Scheme for Micro & Small Enterprises (CGTMSE)',
    code: 'CGTMSE',
    tagline: 'Collateral-Free Institutional Credit Guarantee up to ₹5 Crore',
    shortDescription: 'Enables micro and small enterprises to access substantial bank loans without pledging third-party guarantees or real estate collateral.',
    ministry: 'Ministry of MSME & SIDBI',
    category: 'Credit Guarantee',
    businessTypes: ['Manufacturing', 'Food Processing', 'Service', 'Technology', 'Trading'],
    businessStages: ['New Business', 'Existing Business', 'Expansion'],
    minFunding: 500000,
    maxFunding: 50000000,
    mockInterestRate: 9.5,
    mockTenureYears: 5,
    mockSubsidy: {
      available: false,
      percentage: 0,
      description: 'Credit guarantee cover up to 85% for micro enterprises and women entrepreneurs; zero collateral security required.'
    },
    eligibilityRules: [
      'New and existing Micro and Small Enterprises as defined under MSMED Act',
      'Both service and manufacturing sectors covered, including select retail trading activities',
      'Valid Udyam Registration Certificate is mandatory',
      'Viable project proposal with demonstrated debt-service coverage ratio (DSCR > 1.25)'
    ],
    requiredDocuments: [
      'aadhaar',
      'pan',
      'bankAccount',
      'businessRegistration',
      'udyamRegistration',
      'bankStatement',
      'gstCertificate',
      'businessPlan',
      'projectReport'
    ],
    targetUsers: [
      'Fast-growing MSMEs needing expansion capital without property collateral',
      'Service tech companies and precision engineering workshops'
    ],
    locations: ['All India', 'Urban', 'Semi-Urban'],
    channelPartners: ['Public Sector Banks', 'Private Scheduled Commercial Banks', 'SIDBI', 'NBFCs'],
    benefits: [
      'High loan limit up to ₹5 Crore completely free of tangible collateral',
      'Up to 85% guarantee coverage backed by Central Government Trust',
      'Reduced annual guarantee fees for women-owned and aspirational district units'
    ],
    limitations: [
      'Annual guarantee fee (0.37% - 1.35%) payable to the Trust',
      'Educational institutions, agriculture credit societies and SHGs excluded'
    ],
    applicationSteps: [
      { step: 1, title: 'Prepare Detailed DPR', description: 'Formulate comprehensive project report and audited financials with projected cash flows.' },
      { step: 2, title: 'Bank Application', description: 'Apply to member lending institution (MLI bank) requesting CGTMSE coverage.' },
      { step: 3, title: 'Bank Sanction & Trust Guarantee', description: 'Lending bank sanctions loan and secures guarantee directly from CGTMSE portal.' }
    ],
    officialPortalUrl: 'https://www.cgtmse.in',
    badgeTag: 'Collateral-Free High Value'
  },
  {
    id: 'pm-vishwakarma',
    name: 'PM Vishwakarma Scheme',
    code: 'PM-VISHWAKARMA',
    tagline: 'End-to-End Support for Traditional Artisans and Craftspeople',
    shortDescription: 'Comprehensive central scheme providing recognition, skill upgradation, toolkit incentive (₹15,000) and concessional collateral-free credit at 5% interest.',
    ministry: 'Ministry of MSME / Ministry of Skill Development',
    category: 'Handicraft',
    businessTypes: ['Handicraft', 'Manufacturing', 'Other'],
    businessStages: ['Existing Business', 'Expansion', 'New Business'],
    minFunding: 100000,
    maxFunding: 300000,
    mockInterestRate: 5.0, // Special concessional rate with 8% subvention
    mockTenureYears: 3,
    mockSubsidy: {
      available: true,
      percentage: 30,
      description: 'Interest subvention of 8% capped at 5% borrower rate + ₹15,000 direct grant for modern toolkits + digital incentive of ₹1 per transaction.'
    },
    eligibilityRules: [
      'Artisan or craftsperson working with hands and tools in one of the 18 specified traditional family-based trades (carpenters, blacksmiths, potters, sculptors, cobblers, tailors, etc.)',
      'Minimum age 18 years on the date of registration',
      'The beneficiary should be actively engaged in the relevant trade and should not have availed similar central/state credit schemes (PMEGP/MUDRA) in the past 5 years',
      'Registration restricted to one member per household'
    ],
    requiredDocuments: [
      'aadhaar',
      'bankAccount',
      'addressProof'
    ],
    targetUsers: [
      'Traditional artisans, handloom weavers, clay potters, carpenters, and metal smiths',
      'Unorganized cottage craft workers needing modern toolkits and micro-finance'
    ],
    locations: ['All India', 'Rural', 'Semi-Urban', 'Urban'],
    channelPartners: ['Common Service Centres (CSC)', 'Gram Panchayats', 'Public Sector Banks'],
    benefits: [
      'Concessional interest rate of only 5% with government bearing remaining subvention',
      '₹15,000 e-voucher grant for purchasing modern professional toolkits',
      'PM Vishwakarma Certificate and ID Card conferring official national recognition',
      'Stipend of ₹500/day during 5-7 days basic skill training'
    ],
    limitations: [
      'First tranche capped at ₹1,00,000; second tranche of ₹2,00,000 released upon standard repayment',
      'Must belong to one of 18 defined traditional artisan trades'
    ],
    applicationSteps: [
      { step: 1, title: 'CSC Biometric Registration', description: 'Enrol via Common Service Centre (CSC) with biometric Aadhaar authentication.' },
      { step: 2, title: 'Three-Tier Verification', description: 'Verification by Gram Panchayat/Urban Local Body, District Implementation Committee, and Screening Committee.' },
      { step: 3, title: 'Skill Training & Toolkit', description: 'Undergo 5-day basic training and receive ₹15,000 digital toolkit voucher.' },
      { step: 4, title: 'Enterprise Loan Disbursal', description: 'Avail first loan tranche of ₹1 Lakh at 5% interest rate.' }
    ],
    officialPortalUrl: 'https://pmvishwakarma.gov.in',
    badgeTag: '5% Concessional Interest'
  },
  {
    id: 'day-nulm',
    name: 'National Urban Livelihoods Mission (DAY-NULM - SEP)',
    code: 'DAY-NULM',
    tagline: 'Self Employment Programme for Urban Micro Entrepreneurs',
    shortDescription: 'Financial assistance to urban poor individuals/groups to set up gainful self-employment micro-enterprises with interest subsidy above 7%.',
    ministry: 'Ministry of Housing and Urban Affairs (MoHUA)',
    category: 'Poverty Alleviation',
    businessTypes: ['Service', 'Trading', 'Retail', 'Food Processing', 'Handicraft'],
    businessStages: ['New Business', 'Existing Business'],
    minFunding: 50000,
    maxFunding: 200000,
    mockInterestRate: 7.0, // Net interest after subvention
    mockTenureYears: 5,
    mockSubsidy: {
      available: true,
      percentage: 20,
      description: 'Interest subvention on bank loan: difference between bank prevailing lending rate and 7% per annum is reimbursed to borrower account.'
    },
    eligibilityRules: [
      'Urban poor residing in municipal corporation / municipality area',
      'Annual family income should be within state-notified urban poverty or low-income threshold',
      'Individual micro enterprise project cost up to ₹2 Lakh'
    ],
    requiredDocuments: [
      'aadhaar',
      'bankAccount',
      'addressProof',
      'incomeProof'
    ],
    targetUsers: [
      'Urban street food sellers, domestic service providers, micro repair shops',
      'Urban youth launching neighbourhood retail or maintenance services'
    ],
    locations: ['Urban', 'Semi-Urban'],
    channelPartners: ['Urban Local Bodies (ULBs)', 'City Mission Management Units (CMMU)', 'Banks'],
    benefits: [
      'Interest capped effectively at 7% per annum',
      'Zero collateral or third-party guarantee needed',
      'Handholding support from Community Organizers (CO) at municipal office'
    ],
    limitations: [
      'Applicable only for urban municipal territory residents',
      'Strict income ceiling for urban poor classification'
    ],
    applicationSteps: [
      { step: 1, title: 'Application at ULB', description: 'Submit application to City Mission Management Unit / Urban Local Body office.' },
      { step: 2, title: 'Task Force Scrutiny', description: 'Urban Task Force committee examines proposal and recommends to bank.' },
      { step: 3, title: 'Bank Loan Sanction', description: 'Bank sanctions loan and ULB sets up interest subvention credit.' }
    ],
    officialPortalUrl: 'https://nulm.gov.in',
    badgeTag: 'Urban Micro Support'
  },
  {
    id: 'clcss',
    name: 'Credit Linked Capital Subsidy Scheme (CLCSS)',
    code: 'CLCSS',
    tagline: 'Technology Upgradation for Micro and Small Manufacturing Units',
    shortDescription: '15% upfront capital subsidy for micro and small enterprises to modernize plant, equipment and machinery with well-established technology.',
    ministry: 'Ministry of MSME',
    category: 'MSME',
    businessTypes: ['Manufacturing', 'Food Processing', 'Technology'],
    businessStages: ['Existing Business', 'Expansion'],
    minFunding: 1000000,
    maxFunding: 10000000,
    mockInterestRate: 9.0,
    mockTenureYears: 5,
    mockSubsidy: {
      available: true,
      percentage: 15,
      description: '15% upfront capital subsidy on institutional finance availed up to ₹1 Crore for approved technology induction.'
    },
    eligibilityRules: [
      'Existing micro or small manufacturing enterprise with valid Udyam registration',
      'Modernization must involve approved state-of-the-art technology sub-sectors (e.g. food processing, precision tools, plastics, auto components)',
      'Term loan must be sanctioned by an eligible nodal bank/agency (SIDBI, NABARD, SBI, etc.)'
    ],
    requiredDocuments: [
      'aadhaar',
      'pan',
      'bankAccount',
      'businessRegistration',
      'udyamRegistration',
      'gstCertificate',
      'bankStatement',
      'projectReport'
    ],
    targetUsers: [
      'Small food processors adopting automated packaging and retort technology',
      'Fabrication and engineering workshops upgrading to CNC machinery'
    ],
    locations: ['All India', 'Urban', 'Semi-Urban', 'Rural'],
    channelPartners: ['SIDBI', 'NABARD', 'Public Sector Commercial Banks'],
    benefits: [
      'Direct upfront capital grant up to ₹15 Lakh (15% of ₹1 Crore loan ceiling)',
      'Substantially reduces cost of modernizing plant and improving product export quality',
      'Can be combined with state-level power and electricity tariff subsidies'
    ],
    limitations: [
      'Second-hand machinery or mere replacement of parts not eligible',
      'Only approved 51 sub-sectors recognized by Ministry of MSME are covered'
    ],
    applicationSteps: [
      { step: 1, title: 'Term Loan Application', description: 'Apply for plant modernization term loan with nodal bank.' },
      { step: 2, title: 'Online Subsidy Claim', description: 'Bank uploads online subsidy claim via MSME CLCSS portal.' },
      { step: 3, title: 'Inspection & Credit', description: 'Joint inspection verifies machinery installation, and subsidy is credited to borrower TDR account.' }
    ],
    officialPortalUrl: 'https://clcss.dcmsme.gov.in',
    badgeTag: '15% Tech Upgradation Grant'
  }
];
