export const TRUST_BADGES = {
  bbb: 'A+ Rated Business',
  google: '4.9/5 Rating (120+ Canadian Tech Reviews)',
  guarantee: '100% Satisfaction Guarantee',
};

export const PROBLEM_STATS = [
  {
    id: 'stat1',
    value: '27%',
    label: 'Of inbound calls to home service providers are missed or unreturned.',
    source: 'Home Service Benchmark Report',
    metricType: 'missed_calls',
  },
  {
    id: 'stat2',
    value: '391%',
    label: 'Higher sales conversion rates when leads are called within the first minute.',
    source: 'Lead Response Management Study',
    metricType: 'conversion_boost',
  },
  {
    id: 'stat3',
    value: '5-15',
    label: 'Leads missed per day by the average restoration company during high-volume periods.',
    source: 'industry Average Estimate',
    metricType: 'leads_lost',
  },
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Customer Submits Form',
    description: 'A lead requests emergency water/fire restoration services on your website, Google Local Services, or Facebook Ads.',
    detail: 'Instant trigger captured via webhooks.'
  },
  {
    step: '02',
    title: 'VeloxCall AI Callback',
    description: 'Our system instantly processes the lead and trigger pipeline to dial the homeowner back in under 60 seconds.',
    detail: 'Before they can click back to search for a competitor.'
  },
  {
    step: '03',
    title: 'Qualified & Booked',
    description: 'The AI agent validates their emergency, takes details (leak location, insurance), books the dispatch, and text-alerts your team.',
    detail: 'Calm, professional, and empathetic tone.'
  }
];

export const TESTIMONIALS = [
  {
    id: 't1',
    author: 'Mark Sterling',
    role: 'Owner, West Coast Restoration Ltd.',
    location: 'Vancouver, BC',
    quote: 'We were skeptical about letting AI handle emergency calls, but after missing several high-value water losses last winter, we gave VeloxCall a shot. In our first 30 days, we secured 47 additional jobs that would have gone to competitors. Our lead qualification rate hit 84%. In restoration, speed is everything. VeloxCall delivers it.',
    avatarColor: 'bg-orange-500',
    avatarText: 'MS',
    impactMetric: '47 Additional Jobs Service Booked'
  },
  {
    id: 't2',
    author: 'Jean-François Moreau',
    role: 'President, Urgence Sinistre Montréal',
    location: 'Montreal, QC',
    quote: 'When water damage strikes at 2 AM, homeowners won\'t wait. If we do not pick up, they call the next guy. VeloxCall AI speaks perfect French-Canadian and English, answers within seconds, and logs details straight to our restoration CRM. This is a game changer for Canadian operators.',
    avatarColor: 'bg-slate-700',
    avatarText: 'JM',
    impactMetric: '+22% Inbound Booking Rate'
  }
];

export const PRICING_PLANS = [
  {
    name: 'Starter Agent',
    price: '$497',
    period: 'month',
    description: 'Perfect for local single-location restoration operators looking to stop leaking leads.',
    features: [
      '200 qualified callback calls included',
      'Over-quota calls: $1.95/minute',
      '1 dedicated local Canadian phone number',
      'Basic CRM synchronization',
      'SMS alerts & dispatch notifications',
      'Calm, empathetic emergency tone'
    ],
    cta: 'Start 14-Day Free Trial',
    popular: false,
  },
  {
    name: 'Growth Champion',
    price: '$997',
    period: 'month',
    description: 'Designed for active, growing restoration companies aiming to capture high daily lead volumes.',
    features: [
      '500 qualified callback calls included',
      'Over-quota calls: $1.65/minute',
      '2 dedicated Canadian numbers (English & French option)',
      'Human-in-the-loop live transfer (seamlessly route to active dispatchers)',
      'Advanced API & custom CRM integration',
      'Priority setup & customized call scripting',
      'Interactive SMS follow-up sequence'
    ],
    cta: 'Capture Every Lead Now',
    popular: true,
  },
  {
    name: 'Custom Enterprise',
    price: 'Custom',
    period: 'tailored',
    description: 'For franchise groups, multi-location operators, and high-volume dispatch hubs.',
    features: [
      'Unlimited custom AI voice agent channels',
      'Volume-based usage pricing',
      'Franchise & multi-location call routing',
      'Custom webhook triggers via Jobber, Encircle, or Dash CRM',
      'Dedicated restoration account manager',
      'Custom accent and speech profile tuning'
    ],
    cta: 'Book Franchise Demo',
    popular: false,
  }
];

export const FAQS = [
  {
    q: 'Does it sound like a robot? How do emergencies get handled?',
    a: 'No, VeloxCall AI uses ultra-low latency voice models that sound incredibly human, warm, and professional. It maintains an empathetic, reassuring tone which is crucial for homeowners dealing with stressful situations like flooded basements or soot damage.'
  },
  {
    q: 'Can it transfer calls to a live dispatcher or technician?',
    a: 'Absolutely. Under the Growth and Custom plans, if the homeowner requests a live human or the emergency meets specific high-severity thresholds (e.g., active burning or flooding of a full commercial space), the AI instantly and seamlessly transfers the call to your primary dispatcher or on-call tech.'
  },
  {
    q: 'How does it trigger? Do we have to change our website?',
    a: 'Integration is simple. Using secure webhook channels, we connect to your existing contact forms, Google Local Services, Houzz leads, or Facebook Lead Ads. The moment a form is submitted, the webhook triggers our AI agent to place the outbound callback within 60 seconds.'
  },
  {
    q: 'Are the phone numbers local to Canadian cities?',
    a: 'Yes. We provide numbers in any Canadian area code (e.g., 604 for Vancouver, 403 for Calgary, 416/647 for Toronto, 514 for Montreal, etc.). Homeowners see a local trusted number calling them back immediately.'
  },
  {
    q: 'What CRM databases do you support?',
    a: 'We integrate with standard home service and restoration suites like Jobber, Housecall Pro, ServiceTitan, Encircle, Alacrity, and Dash, as well as Hubspot, Salesforce, and custom endpoints via webhooks.'
  }
];

export const CANADIAN_PROVINCES = [
  'British Columbia',
  'Alberta',
  'Saskatchewan',
  'Manitoba',
  'Ontario',
  'Quebec',
  'New Brunswick',
  'Nova Scotia',
  'Prince Edward Island',
  'Newfoundland and Labrador',
];
