export interface Product {
  id: string;
  name: string;
  category: 'bats' | 'protection' | 'balls_kit' | 'sportswear' | 'accessories';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewsCount: number;
  badge?: string;
  shortDesc: string;
  fullDesc: string;
  specs: Record<string, string>;
  inStock: boolean;
  features: string[];
}

export const PRODUCTS: Product[] = [
  // --- BATS ---
  {
    id: 'bat-pro-english-willow',
    name: 'Kutty Masterclass Grade 1 English Willow Bat',
    category: 'bats',
    categoryLabel: 'Cricket Bats',
    price: 9800,
    originalPrice: 12500,
    image: '/src/assets/images/product_cricket_bats_1793367722910.jpg',
    rating: 4.9,
    reviewsCount: 38,
    badge: 'Best Seller',
    shortDesc: 'Handcrafted Grade 1 English Willow with 7-9 straight grains and massive 40mm contoured edges.',
    fullDesc: 'Carefully selected from prime English Willow clefts, shaped for players who demand effortless pickup and ferocious power. Features an extended spine with minimal concaving for a devastating mid-to-low sweet spot suitable for Tamil Nadu turf and matting pitches.',
    specs: {
      'Willow Grade': 'Grade 1 English Willow',
      'Weight': '1170g - 1210g (Light pickup)',
      'Edge Thickness': '39mm - 41mm',
      'Handle': 'Semi-oval 12-piece cane with rubber inserts',
      'Sweet Spot': 'Mid-to-Low Profile (ideal for front-foot drives)',
      'Knocking Status': 'Pre-pressed, oiling & knocking available'
    },
    inStock: true,
    features: [
      'Unbleached clean face with 7 to 9 straight grains',
      'Feather-light pickup designed for quick bat speed',
      'Double-rubber multi-piece Sarawak cane handle',
      'Fitted with toe guard and high-grip chevron handle sleeve'
    ]
  },
  {
    id: 'bat-kashmir-willow-pro',
    name: 'Tirunelveli Pro Kashmir Willow Match Bat',
    category: 'bats',
    categoryLabel: 'Cricket Bats',
    price: 3200,
    originalPrice: 4200,
    image: '/src/assets/images/product_cricket_bats_1793367722910.jpg',
    rating: 4.8,
    reviewsCount: 64,
    badge: 'Popular',
    shortDesc: 'Hard-pressed premium Kashmir Willow bat optimized for leather and heavy tennis tournament play.',
    fullDesc: 'Engineered specifically for district tournaments and intense league matches. Combines durable high-density Kashmir willow with thick profile edges to give maximum power on both turf wickets and local concrete/matting tracks.',
    specs: {
      'Willow Grade': 'Selected Grade A Kashmir Willow',
      'Weight': '1190g - 1230g',
      'Edge Thickness': '38mm',
      'Handle': 'Round 3-piece cane handle with spiral grip',
      'Sweet Spot': 'Mid Sweet Spot for all-round strokeplay',
      'Suitability': 'Leather Ball & Hard Tennis Ball'
    },
    inStock: true,
    features: [
      'Natural air-dried Kashmir willow cleft',
      'Substantial blade profile with power bow',
      'Durable toe protection against damp wickets',
      'Excellent balance for cuts, pulls, and straight lofted shots'
    ]
  },
  {
    id: 'bat-hard-tennis-scoop',
    name: 'PowerStroke Scoop Hard Tennis Willow Bat',
    category: 'bats',
    categoryLabel: 'Cricket Bats',
    price: 1850,
    originalPrice: 2400,
    image: '/src/assets/images/product_cricket_bats_1793367722910.jpg',
    rating: 4.9,
    reviewsCount: 82,
    badge: 'Tournament Special',
    shortDesc: 'Aerodynamic scoop carved willow bat engineered for blistering hand speed and 360-degree hard tennis power.',
    fullDesc: 'The ultimate hard tennis weapon for night tournaments and local championships. The precise aerodynamic back scooping removes dead weight while keeping thick edges intact, delivering maximum rebound with red and green tennis balls.',
    specs: {
      'Willow': 'Tough Seasoned Willow Blade',
      'Weight': '1020g - 1060g (Super Light)',
      'Blade Length': 'Full Size (Short Handle / Long Blade options)',
      'Scoop': 'Precision CNC 4-Channel Aerodynamic Scooping',
      'Edge': '45mm - 50mm Monster Edges',
      'Suitability': 'Hard Tennis / Light Tennis Tournaments'
    },
    inStock: true,
    features: [
      'Engineered for maximum boundary clearance in T10/T20 games',
      'Ultra-thick edges for off-center boundary hits',
      'Double-grip handle for sweat-resistant firm hold',
      'Polyurethane toe coat for gravel protection'
    ]
  },

  // --- PROTECTIVE GEAR ---
  {
    id: 'gear-batting-pads-pro',
    name: 'Pro Shield Lightweight Batting Leg Guards (Pads)',
    category: 'protection',
    categoryLabel: 'Protective Gear',
    price: 2650,
    originalPrice: 3400,
    image: '/src/assets/images/product_protective_gear_1793367723256.jpg',
    rating: 4.8,
    reviewsCount: 29,
    badge: 'High Impact',
    shortDesc: 'Modern ultra-lightweight dual-wing batting pads with high-density cane bars and gel-infused knee cups.',
    fullDesc: 'Designed to offer first-class impact resistance against 135+ km/h pace bowling without weighing down the batsman. The ergonomic pre-curved design allows effortless sprinting between the wickets.',
    specs: {
      'Protection Tier': 'Professional Club / League Level',
      'Facing': 'Premium wipe-clean polyurethane (PU)',
      'Internal Core': 'High-density foam (HDF) with cane vertical bars',
      'Knee Locator': 'Ergonomic 3-piece knee cup with gel bolster',
      'Straps': 'Padded 50mm calf straps with durable velcro'
    },
    inStock: true,
    features: [
      'Ambidextrous dual-wing fit suitable for RH and LH batters',
      'Absorbs peak shock without adding bulk',
      'Breathable mesh lining for humid Tamil Nadu conditions',
      'Reinforced instep with synthetic leather piping'
    ]
  },
  {
    id: 'gear-batting-gloves-onyx',
    name: 'Aero Touch Sheepskin Cricket Batting Gloves',
    category: 'protection',
    categoryLabel: 'Protective Gear',
    price: 1650,
    originalPrice: 2100,
    image: '/src/assets/images/product_protective_gear_1793367723256.jpg',
    rating: 4.9,
    reviewsCount: 45,
    shortDesc: 'Split-finger gloves with premium Pittards sheepskin palm, shark-tooth splits, and three-piece side bolsters.',
    fullDesc: 'Combines supple English/German sheepskin palm leather with high-resilience foam inserts. Gives batsmen complete grip sensitivity on the handle along with superior thumb and knuckle defense against rising deliveries.',
    specs: {
      'Palm Leather': 'Premium Grade Sheepskin with perforated airflow',
      'Finger Design': 'Split-finger ergonomic cuts for natural flex',
      'Side Protection': 'Dual-layer side bar on lead hand',
      'Wrist Band': '50mm elasticated sweatband with secure velcro closure',
      'Sizes Available': 'Youth, Boys, Mens, Large Mens'
    },
    inStock: true,
    features: [
      'Ultra-soft palm provides immediate tactile feel without break-in time',
      'Reinforced high-wear zones at thumb crotch',
      'Antibacterial moisture-wicking gussets',
      'Fibre inserts on top two lead fingers for yorker protection'
    ]
  },
  {
    id: 'gear-cricket-helmet',
    name: 'Carbon Guard Titanium-Finish Cricket Helmet',
    category: 'protection',
    categoryLabel: 'Protective Gear',
    price: 2400,
    originalPrice: 3100,
    image: '/src/assets/images/product_protective_gear_1793367723256.jpg',
    rating: 4.8,
    reviewsCount: 31,
    badge: 'BCCI/ICC Spec',
    shortDesc: 'Impact-resistant ABS outer shell with coated steel face grille and dial-fit micro-adjuster.',
    fullDesc: 'Strictly compliant with modern cricket safety standards. Features dual-density EPS liner, high visibility non-reflective steel grille, and multi-channel ventilation ports to keep you cool under the Tirunelveli sun.',
    specs: {
      'Shell': 'High Impact Molded ABS Plastic',
      'Grille': 'Powder-coated carbon steel wire',
      'Adjustment': 'Rear rotary dial fit system',
      'Ventilation': '6 airflow intake and exhaust vents',
      'Chin Strap': 'Padded quick-release buckle strap'
    },
    inStock: true,
    features: [
      'Tested against 140+ km/h cricket ball impacts',
      'Removable and washable anti-sweat internal padding',
      'Extended temple and occipital neck guard coverage',
      'Lightweight construction reduces neck fatigue'
    ]
  },

  // --- BALLS & KITS ---
  {
    id: 'ball-4piece-leather-box',
    name: 'Pro Match 4-Piece Leather Cricket Ball (Box of 6)',
    category: 'balls_kit',
    categoryLabel: 'Balls & Kits',
    price: 2700,
    originalPrice: 3600,
    image: '/src/assets/images/product_cricket_balls_kit_1793367723610.jpg',
    rating: 4.9,
    reviewsCount: 52,
    badge: 'League Grade',
    shortDesc: 'Hand-stitched alum tanned 4-piece leather match balls with Portuguese cork center and waxed finish.',
    fullDesc: 'Official tournament spec 156g cricket balls favored by local cricket clubs and academies across Tirunelveli. Holds shape, shine, and proud seam across 50 overs on tough turf and abrasive wicket conditions.',
    specs: {
      'Construction': '4-Piece hand-stitched alum tanned steer hide',
      'Core': 'Natural Portuguese cork layered with worsted wool',
      'Seam': '78-82 prominent hand stitches with linen thread',
      'Weight': '156g ± 2g (Standard Senior Match Weight)',
      'Box Quantity': 'Pack of 6 Match Balls (Red / White / Pink available)'
    },
    inStock: true,
    features: [
      'Outstanding seam retention for conventional and reverse swing',
      'Water-repellent lacquer finish resists early scuffing',
      'Available in Classic Red, White Day-Night, and Pink',
      'Uniform weight and bounce across every ball in the box'
    ]
  },
  {
    id: 'kit-bag-wheelie-pro',
    name: 'Kutty Titan Heavy-Duty Wheelie Cricket Kit Bag',
    category: 'balls_kit',
    categoryLabel: 'Balls & Kits',
    price: 3450,
    originalPrice: 4500,
    image: '/src/assets/images/hero_cricket_equipment_1793367722376.jpg',
    rating: 4.8,
    reviewsCount: 23,
    shortDesc: 'Spacious 1680D nylon wheelie kit bag with 3 external bat caves, shoe tunnel, and rugged all-terrain wheels.',
    fullDesc: 'Engineered for tournament players traveling with full match kits. Comfortably houses 3 full-size bats, pads, 2 helmets, gloves, shoes, wicketkeeping gear, and team apparel with industrial zip pullers.',
    specs: {
      'Material': '1680D Ballistic Heavy-Duty Cordura Fabric',
      'Dimensions': '98cm x 38cm x 38cm (Extra Large capacity)',
      'Wheels': 'Triple all-terrain ball-bearing tractor wheels',
      'Bat Storage': '3 dedicated padded zippered bat sleeves',
      'Compartments': 'Separate ventilated footwear pocket and accessory organizer'
    },
    inStock: true,
    features: [
      'Reinforced bottom skid plate prevents dragging wear',
      'Heavy-duty padded carry handles on top and ends',
      'Rust-proof dual nylon zips with padlock holes',
      'Waterproof internal lining protects equipment from rain'
    ]
  },

  // --- SPORTSWEAR & TEAMWEAR ---
  {
    id: 'wear-team-sublimation-jersey',
    name: 'Custom Sublimated Cricket Team Match Jersey & Trouser',
    category: 'sportswear',
    categoryLabel: 'Sportswear & Teamwear',
    price: 750,
    originalPrice: 999,
    image: '/src/assets/images/product_cricket_sportswear_1793367723576.jpg',
    rating: 5.0,
    reviewsCount: 97,
    badge: 'Custom Printing',
    shortDesc: 'Full custom digital sublimation cricket jerseys with player name, number, team crest, and sponsor logos.',
    fullDesc: 'We manufacture custom cricket team uniforms right here in Tirunelveli. Made with premium 180 GSM micro-poly waffle mesh fabric with rapid dry-fit technology. Perfect for club tournaments, corporate cups, and school teams.',
    specs: {
      'Fabric': '180 GSM Honeycomb Micro-Poly Dry-Fit',
      'Printing': 'Fade-proof Italian digital dye sublimation',
      'Customization': 'Player Name, Number, Team Crest, Sponsor branding included',
      'Collar Types': 'Athletic Polo Collar / Chinese Collar / V-Neck',
      'Min Order': 'From single piece to 50+ bulk team sets'
    },
    inStock: true,
    features: [
      'Moisture-wicking yarn keeps players cool during afternoon matches',
      'Unlimited vibrant colors and design patterns',
      'Matching stretch cricket trousers with reinforced knees',
      'Fast turnaround time for upcoming local tournament fixtures'
    ]
  },
  {
    id: 'wear-pro-cricket-whites',
    name: 'Classic Pro Cricket Match Whites (Shirt + Trouser Set)',
    category: 'sportswear',
    categoryLabel: 'Sportswear & Teamwear',
    price: 1100,
    originalPrice: 1500,
    image: '/src/assets/images/product_cricket_sportswear_1793367723576.jpg',
    rating: 4.8,
    reviewsCount: 41,
    shortDesc: 'Traditional off-white test match uniform with stretch panels and dirt-release fabric treatment.',
    fullDesc: 'Designed for district league matches and academy training sessions. Features mechanical 4-way stretch at the crotch and shoulders to facilitate uninhibited bowling actions and low slip catching.',
    specs: {
      'Color': 'Traditional Ivory / Cream White',
      'Fit': 'Athletic Slim Fit with elasticated waistband & drawstring',
      'Pockets': 'Deep side pockets sized for sweatbands and ball cloth',
      'Fabric': 'Durable poly-cotton performance blend',
      'Sizes': 'S, M, L, XL, XXL'
    },
    inStock: true,
    features: [
      'Anti-stain soil release technology easy to launder',
      'Mesh ventilation underarms and rear yoke',
      'Reinforced seams withstand explosive sliding stops',
      'Complies with official TNCA league uniform dress codes'
    ]
  },

  // --- ACCESSORIES & SERVICES ---
  {
    id: 'acc-bat-maintenance-kit',
    name: 'Complete Willow Care Kit (Mallet, Raw Linseed Oil, Extratec)',
    category: 'accessories',
    categoryLabel: 'Accessories',
    price: 590,
    originalPrice: 850,
    image: '/src/assets/images/product_cricket_balls_kit_1793367723610.jpg',
    rating: 4.9,
    reviewsCount: 68,
    shortDesc: 'Hardwood knocking mallet, pure cold-pressed raw linseed oil, anti-scuff sheet, and fiberglass edge tape.',
    fullDesc: 'The essential maintenance kit every serious batsman needs to prolong the life and rebound of their willow. Regular oiling and edge taping prevents surface cracking, seam marks, and toe splitting.',
    specs: {
      'Mallet': 'Turned seasoned hardwood ball-head mallet',
      'Oil': '100ml Pure Raw Linseed Oil (cold pressed)',
      'Protection': 'Full length crystal clear Extratec scuff sheet',
      'Tape': 'Filament-reinforced cross-weave edge tape',
      'Bonus': 'Sandpaper strips for surface preparation'
    },
    inStock: true,
    features: [
      'Step-by-step knocking instructions card included',
      'Prevents moisture damage from morning dewy wickets',
      'Extends blade lifespan by up to 2 extra seasons',
      'Professional grade materials used by master bat-makers'
    ]
  },
  {
    id: 'acc-premium-grips-pack',
    name: 'Octopus & Chevron High-Traction Bat Grips (Pack of 3)',
    category: 'accessories',
    categoryLabel: 'Accessories',
    price: 350,
    originalPrice: 500,
    image: '/src/assets/images/product_cricket_balls_kit_1793367723610.jpg',
    rating: 4.8,
    reviewsCount: 54,
    shortDesc: 'High-grade non-slip vulcanized rubber grips with sweat-dispersal patterns in assorted colors.',
    fullDesc: 'Provides instantaneous shock absorption and maximum purchase on the handle. Free installation cone fitting service available in our Tirunelveli shop!',
    specs: {
      'Pack Contains': '3 Heavy Duty Grips (Assorted: Black, Green, White)',
      'Texture': 'Dual-layer Octopus suction base with Chevron top',
      'Material': '100% natural vulcanized rubber',
      'Thickness': 'Medium 1.5mm optimal handle feel'
    },
    inStock: true,
    features: [
      'Eliminates bat twisting on heavy off-center impacts',
      'Resistant to hardening under hot humid climate',
      'Complimentary fitting when visiting our Tirunelveli store',
      'Soft on hands to prevent calluses and blisters'
    ]
  }
];

export interface BatService {
  id: string;
  name: string;
  description: string;
  turnaround: string;
  price: number;
  highlight: string;
}

export const SHOP_SERVICES: BatService[] = [
  {
    id: 'machine-knocking',
    name: 'Automated & Manual Bat Knocking',
    description: '10,000+ gradual pneumatic mallet strikes from toe to shoulder, followed by hand edging to open up fibers and prevent cracking.',
    turnaround: '24 - 48 Hours',
    price: 350,
    highlight: 'Match Ready Assurance'
  },
  {
    id: 'scuff-toe-protection',
    name: 'Extratec Lamination & Toe Guard Fitting',
    description: 'Full-face high-clarity anti-scuff sheet application with resin toe guard to seal against moisture and crease tapping wear.',
    turnaround: 'Same Day',
    price: 250,
    highlight: 'Weather Resistance'
  },
  {
    id: 'handle-repair-rethread',
    name: 'Handle Re-Gripping & Thread Binding',
    description: 'Specialist linen twine wrapping, epoxy cane stabilization, and multi-layer grip installation for firm control.',
    turnaround: '1 - 2 Hours',
    price: 180,
    highlight: 'Instant In-Shop Service'
  },
  {
    id: 'custom-team-jersey',
    name: 'Team Uniform Sublimation & Printing',
    description: 'Design and fabrication of full customized jerseys, cricket whites, and training kits for clubs, schools, and tournament teams.',
    turnaround: '3 - 5 Days',
    price: 550,
    highlight: 'Direct Factory Pricing'
  }
];
