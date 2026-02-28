/**
 * Government scheme categories and data
 */

export const SCHEME_CATEGORIES = [
  {
    id: '1',
    name: 'Agriculture',
    icon: '🌾',
    color: '#27AE60',
    description: 'Schemes for farmers and agricultural workers',
  },
  {
    id: '2',
    name: 'Health',
    icon: '🏥',
    color: '#E74C3C',
    description: 'Healthcare and medical assistance schemes',
  },
  {
    id: '3',
    name: 'Education',
    icon: '📚',
    color: '#3498DB',
    description: 'Educational support and scholarship schemes',
  },
  {
    id: '4',
    name: 'Housing',
    icon: '🏠',
    color: '#9B59B6',
    description: 'Housing and shelter assistance schemes',
  },
  {
    id: '5',
    name: 'Social Security',
    icon: '🛡️',
    color: '#E67E22',
    description: 'Pension and social welfare schemes',
  },
  {
    id: '6',
    name: 'Women Empowerment',
    icon: '👩',
    color: '#E91E63',
    description: 'Schemes for women welfare and empowerment',
  },
  {
    id: '7',
    name: 'Fishermen',
    icon: '🐟',
    color: '#00BCD4',
    description: 'Support schemes for fishing community',
  },
  {
    id: '8',
    name: 'Entrepreneurs',
    icon: '💼',
    color: '#FF9800',
    description: 'Business and self-employment support schemes',
  },
];

export const SCHEMES = [
  {
    id: '1',
    name: 'YSR Rythu Bharosa',
    category: 'Agriculture',
    categoryId: '1',
    shortDescription: 'Financial support and investment for farmers',
    description:
      'YSR Rythu Bharosa provides financial support of ₹13,500 per year to farmers for agricultural investment, crop insurance, and livelihood support.',
    benefits: [
      'Annual financial assistance of ₹13,500',
      'Free crop insurance coverage',
      'Zero-interest crop loans',
      'Agricultural support services',
    ],
    eligibility: [
      'Registered farmers in Andhra Pradesh',
      'Must own or lease agricultural land',
      'Aadhaar-linked bank account required',
    ],
    documents: [
      'Aadhaar Card',
      'Land ownership/lease documents',
      'Bank passbook',
      'Passport-size photograph',
    ],
    applicationUrl: 'https://rythubharosa.ap.gov.in',
    status: 'active',
  },
  {
    id: '2',
    name: 'YSR Aarogyasri',
    category: 'Health',
    categoryId: '2',
    shortDescription: 'Cashless health treatment up to ₹5 lakh per year',
    description:
      'YSR Aarogyasri provides cashless health treatment up to ₹5 lakh annually for BPL families at empanelled network hospitals across Andhra Pradesh.',
    benefits: [
      'Cashless treatment up to ₹5 lakh per year',
      'Coverage of 2,470+ medical procedures',
      'Pre and post-hospitalization expenses',
      'Free transport to hospital',
    ],
    eligibility: [
      'BPL (Below Poverty Line) families',
      'White ration card holders',
      'Valid Aadhaar card',
    ],
    documents: [
      'Aadhaar Card',
      'White Ration Card',
      'Income certificate',
    ],
    applicationUrl: 'https://ysraarogyasri.ap.gov.in',
    status: 'active',
  },
  {
    id: '3',
    name: 'YSR Pension Kanuka',
    category: 'Social Security',
    categoryId: '5',
    shortDescription: 'Monthly pension for senior citizens, widows, and disabled',
    description:
      'YSR Pension Kanuka provides monthly pension ranging from ₹2,500 to ₹10,000 for senior citizens, widows, disabled persons, and other vulnerable groups.',
    benefits: [
      'Monthly pension of ₹2,500 to ₹10,000',
      'Door-step delivery on the 1st of every month',
      'Annual enhancement of pension amount',
    ],
    eligibility: [
      'Senior citizens above 60 years',
      'Widows and deserted women',
      'Persons with disabilities (40%+ disability)',
      'Must be from economically weaker sections',
    ],
    documents: [
      'Aadhaar Card',
      'Age proof certificate',
      'Disability certificate (if applicable)',
      'Bank account details',
    ],
    applicationUrl: 'https://pensionkanuka.ap.gov.in',
    status: 'active',
  },
  {
    id: '4',
    name: 'Jagananna Amma Vodi',
    category: 'Education',
    categoryId: '3',
    shortDescription: '₹15,000 annual assistance for children\'s education',
    description:
      'Jagananna Amma Vodi provides ₹15,000 per year to mothers/guardians of school-going children from economically weaker sections to support education.',
    benefits: [
      'Annual assistance of ₹15,000 per child',
      'Direct bank transfer to mother/guardian',
      'Covers Classes 1 to 12',
    ],
    eligibility: [
      'Children studying in government schools',
      'Mothers/guardians from economically weaker sections',
      'Children must maintain 75% attendance',
    ],
    documents: [
      'Aadhaar Card of mother/guardian',
      'School enrollment certificate',
      'Bank account details',
    ],
    applicationUrl: 'https://ammavodi.ap.gov.in',
    status: 'active',
  },
  {
    id: '5',
    name: 'Pedalandariki Illu',
    category: 'Housing',
    categoryId: '4',
    shortDescription: 'Free housing for economically weaker sections',
    description:
      'Pedalandariki Illu (YSR Housing) provides free houses to economically weaker sections and eligible families without proper shelter in Andhra Pradesh.',
    benefits: [
      'Free house construction',
      'Separate toilet and kitchen',
      'Electricity and water connections',
      'Land patta provided',
    ],
    eligibility: [
      'Families without own house or pucca house',
      'Annual income below ₹3 lakh',
      'Must be AP resident for at least 10 years',
    ],
    documents: [
      'Aadhaar Card',
      'Income certificate',
      'Domicile certificate',
      'Caste certificate (if applicable)',
    ],
    applicationUrl: 'https://housing.ap.gov.in',
    status: 'active',
  },
  {
    id: '6',
    name: 'YSR Matsyakara Bharosa',
    category: 'Fishermen',
    categoryId: '7',
    shortDescription: 'Financial support for fishing community',
    description:
      'YSR Matsyakara Bharosa provides financial assistance of ₹10,000 per year to fishermen during lean seasons and compensation for losses due to natural disasters.',
    benefits: [
      'Annual assistance of ₹10,000',
      'Free fishing licenses',
      'Accident insurance coverage',
      'Equipment subsidies',
    ],
    eligibility: [
      'Registered fishermen in AP',
      'Must possess valid fishing license',
      'Aadhaar-linked bank account',
    ],
    documents: [
      'Aadhaar Card',
      'Fishing community certificate',
      'Bank passbook',
      'Fishing license',
    ],
    applicationUrl: 'https://fisheries.ap.gov.in',
    status: 'active',
  },
];

export const APP_NAME = 'eGov YSR';
export const APP_VERSION = '1.0.0';
export const SUPPORT_EMAIL = 'support@egov.ap.gov.in';
export const SUPPORT_PHONE = '1800-425-0808';
export const HELPLINE = '14566';
