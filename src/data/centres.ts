import { SupportCentre, ChannelPartnerInfo } from '../types';

export const MOCK_CENTRES: SupportCentre[] = [
  {
    id: 'cen-ambattur',
    name: 'District Industries Centre (DIC) Facilitation Desk',
    type: 'Government MSME Facilitation Centre',
    area: 'Ambattur Industrial Estate',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600058',
    distanceKm: 4.2,
    services: [
      'Udyam Registration Free Assistance',
      'PMEGP Task Force Application Verification',
      'Project Report (DPR) Guidance & Templates',
      'State Capital Subsidy Documentation'
    ],
    openingHours: 'Mon - Fri: 09:30 AM - 05:30 PM',
    phone: '+91 (044) 2625 3421',
    email: 'dic.chennai@tn.gov.in',
    address: 'SIDCO Industrial Estate, 2nd Main Road, Ambattur, Chennai - 600058'
  },
  {
    id: 'cen-guindy',
    name: 'MSME Development & Facilitation Office (MSME-DFO)',
    type: 'Central Ministry of MSME Branch',
    area: 'Guindy',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600032',
    distanceKm: 8.5,
    services: [
      'Central MSME Schemes Technical Guidance',
      'CGTMSE & Stand-Up India Handholding',
      'Technology Upgradation (CLCSS) Advice',
      'Export & Vendor Development Consultation'
    ],
    openingHours: 'Mon - Fri: 09:00 AM - 05:30 PM',
    phone: '+91 (044) 2250 1011',
    email: 'dfo-chennai@dcmsme.gov.in',
    address: '65/1, GST Road, Guindy, Chennai, Tamil Nadu - 600032'
  },
  {
    id: 'cen-anna-nagar',
    name: 'TNeGA e-Seva & Common Service Centre (CSC)',
    type: 'Digital Certificate & Citizen Service Centre',
    area: 'Anna Nagar West',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600040',
    distanceKm: 3.8,
    services: [
      'Instant e-PAN & Aadhaar Biometric Update',
      'Community & Income Certificate Applications',
      'Digital Signature (DSC) Issuance',
      'GST & Udyam Filing Support'
    ],
    openingHours: 'Mon - Sat: 09:00 AM - 07:00 PM',
    phone: '+91 98401 23890',
    email: 'eseva.annanagar@tnega.in',
    address: 'Plot 12B, 3rd Avenue, Near Roundtana, Anna Nagar West, Chennai - 600040'
  },
  {
    id: 'cen-delhi-okhla',
    name: 'District Industries Centre (South Delhi)',
    type: 'Government MSME Facilitation Centre',
    area: 'Okhla Industrial Area Phase-II',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110020',
    distanceKm: 5.1,
    services: [
      'PMEGP & PM Vishwakarma Application Desk',
      'Udyam Registration Assistance',
      'Project Costing & Margin Money Guidance'
    ],
    openingHours: 'Mon - Fri: 09:30 AM - 05:00 PM',
    phone: '+91 (011) 2638 8844',
    email: 'dic.delhi@nic.in',
    address: 'D-Block, Okhla Phase II, New Delhi - 110020'
  },
  {
    id: 'cen-mumbai-andheri',
    name: 'Maharashtra Industrial Development Centre & DIC',
    type: 'Government MSME Facilitation Centre',
    area: 'Andheri East',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400093',
    distanceKm: 6.3,
    services: [
      'Udyam Certificate Helpdesk',
      'CGTMSE Bank Coordination & Clearance',
      'MUDRA Scheme Documentation Verification'
    ],
    openingHours: 'Mon - Fri: 10:00 AM - 05:30 PM',
    phone: '+91 (022) 2821 7733',
    email: 'dic.mumbai@maharashtra.gov.in',
    address: 'MIDC Central Road, Near Chakala, Andheri East, Mumbai - 400093'
  },
  {
    id: 'cen-blr-peenya',
    name: 'Karnataka MSME Facilitation & KVIC Centre',
    type: 'MSME Support Centre',
    area: 'Peenya Industrial Area 1st Stage',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560058',
    distanceKm: 4.9,
    services: [
      'PMEGP Direct Application Support',
      'Technology Upgradation Subsidy Assistance',
      'Bank DPR Preparation Workshops'
    ],
    openingHours: 'Mon - Fri: 09:30 AM - 05:00 PM',
    phone: '+91 (080) 2839 4412',
    email: 'msme.peenya@karnataka.gov.in',
    address: '4th Cross, Peenya 1st Stage, Bengaluru - 560058'
  }
];

export const CHANNEL_PARTNER_DATA: Record<string, ChannelPartnerInfo> = {
  pmegp: {
    name: 'District Industries Centre (DIC) & Public Sector Bank',
    category: 'DIC / District Centre',
    role: 'Lead Nodal Implementing Agency & Financing Bank Branch',
    description: 'For PMEGP applications, District Industries Centre (DIC) acts as the sponsoring authority that screens your project with the District Task Force Committee (DTFC), followed by term loan sanction and margin money release via your nominated public sector bank.',
    servicesProvided: [
      'Project viability review & score assessment',
      'Nomination of bank branch for loan appraisal',
      'Processing of 25%-35% margin money capital subsidy',
      'Mandatory free 5-10 day EDP entrepreneurship training coordination'
    ],
    howToApproach: 'Submit your online application through the official PMEGP e-portal selecting your local District Industries Centre (DIC). Once submitted, carry your original KYC, DPR and Udyam certificate to the DIC desk for fast-track verification.'
  },
  'pm-mudra-tarun': {
    name: 'Public Sector Commercial Bank / Regional Rural Bank',
    category: 'Public Sector Bank',
    role: 'Primary Lending Institution (PLI)',
    description: 'MUDRA Tarun loans are sanctioned directly by commercial banks, RRBs, and small finance banks with 100% guarantee coverage through NCGTC without asking for property collateral.',
    servicesProvided: [
      'Working capital cash credit assessment',
      'Issuance of RuPay MUDRA Card for credit withdrawals',
      'Fast-track sanction without tangible collateral',
      'Periodic cash flow review and limit enhancement'
    ],
    howToApproach: 'Approach the MSME Desk of the bank branch where you maintain your current business account, or submit a request on the JanSamarth / Udyamimitra portal specifying your loan requirement.'
  },
  'pm-mudra-kishore': {
    name: 'Nearest Public Sector / Small Finance Bank Branch',
    category: 'Public Sector Bank',
    role: 'Retail Micro-Finance Desk',
    description: 'Ideal for early-stage micro entrepreneurs. Branches have designated MSME officers to process MUDRA Kishore applications with minimal procedural hurdles.',
    servicesProvided: [
      'Asset purchase quotation appraisal',
      'Flexible term loan disbursal directly to machinery vendor',
      'Low processing fees and prompt turnaround'
    ],
    howToApproach: 'Visit your nearest bank branch with equipment vendor pro-forma invoice, business location proof, and 6 months bank account statements.'
  },
  'stand-up-india': {
    name: 'Scheduled Commercial Bank & SIDBI Lead District Desk',
    category: 'Public Sector Bank',
    role: 'Greenfield Nodal Channel',
    description: 'Each commercial bank branch is mandated to extend at least one Stand-Up India facility to SC/ST borrowers and one to women entrepreneurs for greenfield ventures up to ₹1 Crore.',
    servicesProvided: [
      'Comprehensive composite loan sanction (Term + Working Capital)',
      'Handholding support from SIDBI connect centres',
      'Moratorium facility up to 18 months'
    ],
    howToApproach: 'Register on standupmitra.in portal to match with your local Lead District Bank Manager (LDM) or schedule an in-person briefing at the branch.'
  },
  cgtmse: {
    name: 'Scheduled Commercial Bank MSME Credit Division',
    category: 'Public Sector Bank',
    role: 'Member Lending Institution (MLI)',
    description: 'The bank applies for CGTMSE trust guarantee on behalf of the borrower, removing the requirement for any real-estate mortgage or third-party guarantor.',
    servicesProvided: [
      'Guarantee coverage up to 85% of total project exposure',
      'Large credit facility up to ₹5 Crore for high-growth units',
      'Concessional guarantee fee for women entrepreneurs'
    ],
    howToApproach: 'Submit a comprehensive DPR showing high debt-service coverage ratio (DSCR > 1.3) to the SME Branch of a PSU bank with valid Udyam registration.'
  },
  'pm-vishwakarma': {
    name: 'Common Service Centre (CSC) & Gram Panchayat / ULB',
    category: 'MSME Facilitation',
    role: 'Biometric Registration & Trade Verification Body',
    description: 'Artisans register through biometric Common Service Centres, followed by Gram Panchayat/Urban Local Body field authentication and 5% credit sanction.',
    servicesProvided: [
      'Aadhaar biometric registration',
      'Official PM Vishwakarma ID card and certificate',
      '₹15,000 modern toolkit digital voucher',
      '5% subsidized credit without collateral'
    ],
    howToApproach: 'Visit any village or urban Common Service Centre (CSC) with your trade tools, Aadhaar, and bank passbook for immediate digital enrolment.'
  },
  'day-nulm': {
    name: 'City Mission Management Unit (CMMU) / Municipality',
    category: 'MSME Facilitation',
    role: 'Urban Livelihoods Mission Implementing Agency',
    description: 'Urban municipal corporations coordinate micro-credit applications for urban micro-enterprises with bank interest subvention reimbursement above 7%.',
    servicesProvided: [
      'Self-employment screening and bank recommendation',
      'Interest subvention management directly credited to account',
      'Community organizer handholding at neighbourhood level'
    ],
    howToApproach: 'Contact the Urban Livelihood Cell or Community Organizer at your Municipal Corporation zonal office.'
  },
  clcss: {
    name: 'SIDBI / NABARD Nodal Banking Channel',
    category: 'Rural Development Bank',
    role: 'Technology Upgradation Nodal Agency',
    description: 'Processes online subsidy claims for modern machinery induction, providing 15% upfront capital subsidy credited as a Term Deposit Receipt (TDR).',
    servicesProvided: [
      'Approved technology benchmark certification',
      'Capital subsidy sanction up to ₹15 Lakh',
      'Joint technical verification of installed machinery'
    ],
    howToApproach: 'Apply through your financing bank’s MSME credit wing along with machinery specifications and manufacturer warranty certificates.'
  }
};
