import { company } from '@/lib/site';

export const enProducts = [
  {
    name: 'Luminescent Paint',
    status: 'Available',
    summary: '10-24 cd/m² brightness, weather-resistant and underwater-ready versions, multi-color tuning.',
    applications: 'Traffic safety, cultural tourism, branded installations',
    brightness: '10-24 cd/m²',
    supply: 'Bucket packaging / spray service',
    validation: 'RoHS',
    keyParameters: '50-150 μm coating thickness; transparent protective layer available',
    variants: [
      { model: 'Clear coat / top coat', spec: '24 cd/m² brightness · 1h+ duration' },
      { model: 'Master paint', spec: '24 cd/m² brightness · 1h+ duration' },
      { model: 'Primer', spec: '24 cd/m² brightness · 1h+ duration' },
    ],
    image: '/发光油漆.jpg',
  },
  {
    name: 'Luminescent Fiber',
    status: 'Available',
    summary: '0.6-2.5 mm flexible fiber with long afterglow performance and no electrical driver required.',
    applications: 'Automotive interiors, wearables, architectural soft lighting',
    brightness: '20-45 cd/m² surface brightness',
    supply: 'Bare fiber / coated fiber',
    validation: 'Bending and UV-aging validation',
    keyParameters: '0.6-2.5 mm diameter; no electrical driver required',
    variants: [
      { model: 'Orange base red 01-04', spec: '20-45 cd/m² · afterglow >=3h' },
      { model: 'Orange base yellow 01-05', spec: '20-45 cd/m² · afterglow >=3h' },
      { model: 'White base green 01-03', spec: '20-45 cd/m² · afterglow >=3h' },
      { model: 'White base blue 01-05', spec: '20-45 cd/m² · afterglow >=3h' },
    ],
    image: '/发光纤维丝.jpg',
  },
  {
    name: 'Electroluminescent Wire',
    status: 'Available',
    summary: 'Uniform line light source, low-voltage drive, cuttable and connector-ready.',
    applications: 'Visual identity, apparel decoration, architectural guide lines',
    brightness: '20-45 cd/m²',
    supply: '0.3-0.5 mm wire and custom connectors',
    validation: 'Low-voltage electrical safety workflow',
    keyParameters: '5V drive options; cuttable wire format',
    variants: [
      { model: 'White base blue 0.3 mm', spec: '20-40 cd/m² brightness' },
      { model: 'White base blue 0.5 mm', spec: '30-45 cd/m² brightness' },
      { model: 'White base cyan 0.3 mm', spec: '20-40 cd/m² brightness' },
      { model: 'White base cyan 0.5 mm', spec: '30-45 cd/m² brightness' },
    ],
    image: '/宇元新材电致发光线产品图无背景.png',
  },
  {
    name: 'Luminescent Film',
    status: 'Pilot production',
    summary: '0.25 mm flexible film for curved surfaces, roll-to-roll customization and die-cut parts.',
    applications: 'Vehicle badges, facade accents, cultural products',
    brightness: '50-100 cd/m²',
    supply: 'Rolls / sheets / die-cut parts',
    validation: 'Salt spray, damp heat and flame testing workflow',
    keyParameters: '0.25 mm thickness; TPU/PC/composite substrates; 3M adhesive optional',
    variants: [
      { model: 'Orange base red 01-04', spec: '50-100 cd/m² · 1h+ duration' },
      { model: 'White base green 01-03', spec: '50-100 cd/m² · 1h+ duration' },
      { model: 'White base blue 01-05', spec: '50-100 cd/m² · 1h+ duration' },
      { model: 'Orange base yellow 01-05', spec: '50-100 cd/m² · 1h+ duration' },
    ],
    image: '/发光膜.jpg',
  },
  {
    name: '3D Printing Additives',
    status: 'Pre-order',
    summary: 'SLA/FDM-compatible luminescent materials for fast prototypes and custom light-effect parts.',
    applications: 'Functional samples, educational models, creative installations',
    brightness: '4-6h body-glow duration',
    supply: 'FDM filament / SLA resin',
    validation: 'UL94/CSA application in progress',
    keyParameters: 'Luminescent filler options; 120°C heat-resistant workflow for selected materials',
    variants: [
      { model: 'FDM 1.75 mm filament', spec: '15% luminescent filler · 230°C nozzle · 4-6h glow' },
      { model: 'FDM 2.85 mm filament', spec: '120°C heat resistance · high-speed printing support' },
      { model: 'SLA 405 nm resin', spec: 'Low viscosity · 6-8 mJ/cm² curing energy · 38 MPa tensile strength' },
    ],
    image: '/宇元新材发光材料制成的3D打印辅材.jpg',
  },
  {
    name: 'Glow & Thermochromic PLA Filament',
    status: 'Available',
    summary: 'Glow PLA glow-in-the-dark and TC thermochromic filament families in one 1.75 mm PLA format; stable FDM printing and an electronic color card for selection.',
    applications: 'Creative gifts, collectibles, educational models, functional prototypes and color validation',
    brightness: 'Afterglow + cold-to-hot color change',
    metricLabel: 'Light Effect',
    supply: '1.75 mm filament · spools',
    validation: 'PLA eco material · electronic color card provided',
    keyParameters: 'Glow: sustained afterglow after light charging; TC: 22/30/42°C activation options',
    variants: [
      { model: 'Glow PLA filament', spec: '6 basic colors · 1.75 mm · sustained afterglow in the dark' },
      { model: 'TC single-color filament', spec: '16 colors · 22/30/42°C activation · fades to PLA base color when heated' },
      { model: 'TC dual-color filament', spec: '49 colors · yellow-orange/red/purple/blue/teal families · cold/hot dual state' },
    ],
    image: '/images/filament/glow-pla-green.png',
  },
  {
    name: 'Lightweight Radiation-Shielding Composite',
    status: 'Joint validation',
    summary: 'A flexible, lightweight, multilayer composite under development for reducing the weight of conventional medical lead-apron structures.',
    applications: 'Medical imaging protection, interventional procedures, industrial radiography and localized shielding components',
    brightness: 'Lightweight / flexible / multilayer',
    metricLabel: 'Performance Direction',
    supply: 'Sheets / rolls / composite layers / validation samples',
    validation: 'Third-party testing against target lead equivalence and applicable standards',
    keyParameters: 'Shielding performance, thickness, areal density and bending durability are confirmed per project',
    variants: [
      { model: 'Flexible shielding sheet / roll', spec: 'Layer structure tailored to radiation energy and target shielding performance' },
      { model: 'Protective-garment composite layer', spec: 'Lightweight structures for aprons, collars and localized protective components' },
      { model: 'Custom validation sample', spec: 'Formulation, layer structure, bending durability and garment integration validation' },
    ],
    image: '/radiation-shielding-lightweight-apron.jpg',
  },
];

export const enSolutions = [
  {
    title: 'Mobility and Automotive',
    pain: 'Night-time recognition, ambient design and flexible integration require durable light materials.',
    plan: 'Luminescent stitching, flexible films and vehicle-badge systems for rapid concept validation.',
    kpi: 'Focus: shorter validation cycles, bending reliability and consistent soft light.',
  },
  {
    title: 'Smart Agriculture',
    pain: 'Greenhouses need distributed supplemental light with lower maintenance and energy cost.',
    plan: 'Luminescent films and fiber belts support cyclic light compensation and spectral experiments.',
    kpi: 'Focus: energy-saving layouts, crop-cycle observation and spectrum tuning.',
  },
  {
    title: 'Emergency and Public Safety',
    pain: 'Traditional lighting can fail in water, smoke, impact or low-power rescue scenarios.',
    plan: 'Water-resistant luminescent fabrics, directional signage and wearable marker modules.',
    kpi: 'Focus: passive visibility, deployment speed and environmental durability.',
  },
  {
    title: 'Medical Imaging and Radiation Protection',
    pain: 'Conventional medical lead aprons are heavy, increasing shoulder, neck and back strain during extended procedures.',
    plan: 'Develop flexible, lightweight radiation-shielding composites for aprons, collars and localized protection, targeting weight reduction and potential replacement of conventional lead-based structures.',
    kpi: 'Validation focus: target lead equivalence, areal density, thickness, bending durability, wearing comfort and applicable regulatory requirements.',
  },
  {
    title: 'Culture, Tourism and Installations',
    pain: 'Creative night scenes need lower energy usage, richer shapes and easier maintenance.',
    plan: 'Large-area films and 3D-printable luminescent parts for lightweight custom structures.',
    kpi: 'Focus: pattern customization, low-power scenes and maintainable installations.',
  },
];

export const enCases = [
  {
    title: 'Automotive Ambient Lines and Door-Panel Light Guides',
    client: 'Automotive validation program',
    challenge: 'Create continuous soft-light effects in limited interior space while preparing for durability tests.',
    result: 'Fiber plus flexible film samples are being evaluated for bending, thermal shock and assembly workflow.',
  },
  {
    title: 'RMAF Smart Greenhouse',
    client: 'Agricultural research scenario',
    challenge: 'Provide low-maintenance night light compensation without disrupting crop operation.',
    result: 'Film and fiber layouts are being tested with photosynthesis monitoring and seasonal observation.',
  },
  {
    title: 'Luminescent 3D Printing Material Validation',
    client: 'Creative installation studio',
    challenge: 'Print light-effect parts on common FDM/FFF devices while keeping material stability.',
    result: 'A shared parameter library is being built across printer types, layer heights and glow consistency tests.',
  },
];

export const enNews = [
  {
    title: 'CosmoOrigin presented at the 3rd Asia Advanced Film Materials Conference',
    date: '2026-06-27',
    category: 'Exhibition',
    summary:
      'CTO Prof. Tian Tian delivered a talk on luminescent energy-storage films, covering active glow safety signage for low-altitude economy, zero-energy agricultural light-conversion films and medical nuclear-safety protection.',
    href: 'https://mp.weixin.qq.com/s/uC-P4ajaRP94_XjgNLjgPw',
  },
  {
    title: 'Delegation from Wulian County, Rizhao visited CosmoOrigin',
    date: '2026-06-03',
    category: 'Government visit',
    summary:
      'A county delegation led by Magistrate Sun Li explored collaboration on the self-luminescent agricultural dimming film and industrial-chain innovation for automotive, traffic safety and emergency applications.',
    href: 'https://mp.weixin.qq.com/s/CdgIg60bJH_qKNInVdoZQQ',
  },
  {
    title: 'Yangtze-Delta investment delegation from Wulian County visited CosmoOrigin',
    date: '2026-04-09',
    category: 'Government visit',
    summary:
      'Discussions covered OEM intellectual-property protection, in-house capacity for quality assurance and local investment policies for industrializing the luminescent material production line.',
    href: 'https://mp.weixin.qq.com/s/2JZlCCkb7wxIG49Yq5CaTA',
  },
  {
    title: 'Workshop on fluorescent tracing and regulation technologies in agricultural research',
    date: '2026-03-24',
    category: 'Technical exchange',
    summary:
      'With Yangzhou University researchers, the team aligned on supplementary-light film design for peony flowering control, live fluorescent tracing of insect heavy-metal transport and fluorescent antibacterial flower packaging.',
    href: 'https://mp.weixin.qq.com/s/pn5-NewME5ZmGqHQYBW6Ww',
  },
  {
    title: 'Expert meeting with Yangzhou University on luminescent films for agriculture',
    date: '2026-03-20',
    category: 'Technical exchange',
    summary:
      'Discussions with horticulture experts focused on the self-luminescent light-conversion film: night-time active light compensation, zero energy consumption and spectral customization for high-value greenhouse crops.',
    href: 'https://mp.weixin.qq.com/s/9UOQ7Mqff05OKsgsfvJxWg',
  },
  {
    title: 'New Yang Village and Zhuangyuan Workshop leaders visited CosmoOrigin',
    date: '2026-03-14',
    category: 'Technical exchange',
    summary:
      'Guests explored high-toughness custom-color 3D-printing materials and how glow filament can empower cultural-creative products based on local Zhuangyuan culture.',
    href: 'https://mp.weixin.qq.com/s/PH4rq4BbVrjltvBBgIbAvQ',
  },
  {
    title: 'Party delegation of Yangzhou University School of Chemistry visited CosmoOrigin',
    date: '2026-03-14',
    category: 'University collaboration',
    summary:
      'The visit covered 3D/4D printing materials, functional films and luminescent coatings, and discussed deeper university-enterprise collaboration in R&D and talent development.',
    href: 'https://mp.weixin.qq.com/s/_DlKHm3NINgowJf9yKclgw',
  },
  {
    title: 'CosmoOrigin visited a Yangzhou 3D-printing workshop for technical exchange',
    date: '2026-02-05',
    category: 'Technical exchange',
    summary:
      'The team explored luminescent materials, PLA-based creative products and educational applications with a local 3D-printing workshop.',
    href: 'https://mp.weixin.qq.com/s/y6ctVJ6_SCpCVZs76HkMFg',
  },
  {
    title: 'Luminescent cultural products appeared at a Spring Festival calligraphy event',
    date: '2026-01-31',
    category: 'Public event',
    summary:
      'CosmoOrigin combined traditional calligraphy with luminescent materials to create modern festive light products.',
    href: 'https://mp.weixin.qq.com/s/MtlpjdZMIatHedajQbHyAw',
  },
  {
    title: 'Cross-material exploration with Red Apple Plastics',
    date: '2026-01-25',
    category: 'Collaboration',
    summary:
      'Both teams discussed TPU films, smart luminescent applications and upstream-downstream material innovation.',
    href: 'https://mp.weixin.qq.com/s/WR79T5SFLtKVPxCK6oxn-A',
  },
  {
    title: 'New luminescent 3D-printing additives released',
    date: '2025-12-08',
    category: 'Product update',
    summary:
      'The new material line supports rapid custom light-effect parts for prototypes, education and creative displays.',
  },
];

export const enResources = [
  {
    title: 'CosmoOrigin Product Brochure 2026',
    description: 'Product overview for luminescent paint, fibers, films and 3D-printing materials.',
    type: 'PDF',
    href: '/扬州宇元新材产品手册.pdf',
  },
  {
    title: 'Glow & Thermochromic Filament Color Card',
    description:
      'Electronic color card for Glow PLA (6 colors) and thermochromic PLA filaments: 16 single-color and 49 dual-color options, 22/30/42°C activation.',
    type: 'PDF',
    href: '/宇元新材-夜光温变系列色卡.pdf',
  },
  {
    title: 'Material Property Sheet 2026',
    description: 'ASTM-based property data for PE, PLA and TPU luminescent material series.',
    type: 'DOC',
    href: '/宇元新材物性表-260202.doc',
  },
];

export const enChannels = [
  { label: 'Email', href: `mailto:${company.email}`, value: company.email },
  { label: 'Phone', href: `tel:${company.phoneHref}`, value: company.phone },
  { label: 'Taobao Store', href: company.taobaoUrl, value: 'Domestic sample and product inquiries' },
  { label: 'Shopify Store', href: company.shopifyUrl, value: 'International product inquiries' },
  { label: 'TikTok', href: company.tiktokUrl, value: '@cosmorigin' },
];
