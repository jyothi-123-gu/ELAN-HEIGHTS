import { Product } from './types';

export const GENERATED_IMAGES = {
  boutique: '/src/assets/images/elan_heights_boutique_1781161781331.png',
  heroModel: '/src/assets/images/elan_heights_hero_model_1781161796077.png',
  designerHeels: '/src/assets/images/elan_heights_designer_heels_1781161811112.png',
  babyShoes: '/src/assets/images/elan_heights_baby_shoes_1781161826307.png',
  luxurySneakers: '/src/assets/images/elan_heights_luxury_sneakers_1781161846891.png',
  roseGlassSlippers: '/src/assets/images/rose_glass_slipper_1781165589306.png',
  ethnicJuttis: '/src/assets/images/ethnic_jutts_1781165608776.png',
  jellyStarSandals: '/src/assets/images/jelly_star_sandals_1781165837100.png',
  academySchoolLoafer: '/src/assets/images/academy_school_loafer_1781165849500.png',
  kidsMaryJaneFlat: '/src/assets/images/kids_mary_jane_flat_1781165865734.png',
  pearlBalletFlat: '/src/assets/images/pearl_ballet_flat_1781165882564.png',
  comfortSuedeLoafer: '/src/assets/images/comfort_suede_loafer_1781165900387.png',
  silkNudePumps: '/src/assets/images/silk_nude_pumps_1781165915845.png',
  espressoEspadrilles: '/src/assets/images/espresso_espadrilles_1781165940931.png',
  feltComfortClog: '/src/assets/images/felt_comfort_clog_1781165955277.png',
  signatureLeatherSlides: '/src/assets/images/signature_leather_slides_1781165970815.png',
  empowermentProRunner: '/src/assets/images/empowerment_pro_runner_1781166203155.png',
  satinPearlMule: '/src/assets/images/satin_pearl_mule_1781166476069.png',
  goldAnkleWedge: '/src/assets/images/gold_ankle_wedge_1781166493028.png',
  burgundyHighBoot: '/src/assets/images/burgundy_high_boot_1781166509068.png',
  bridalLaceHeel: '/src/assets/images/bridal_lace_heel_1781166527701.png',
  patentChelseaBoot: '/src/assets/images/patent_chelsea_boot_1781166539843.png',
  combatMatteBoot: '/src/assets/images/combat_matte_boot_1781166556868.png',
  canvasHighTop: '/src/assets/images/canvas_high_top_1781166580089.png',
  shearlingWinterBoot: '/src/assets/images/shearling_winter_boot_1781166609978.png',
  velvetHeeledMule: '/src/assets/images/velvet_heeled_mule_1781167988261.png',
  blackLaceBalletFlat: '/src/assets/images/black_lace_ballet_flat_1781168003101.png',
  cyberKnitLoafer: '/src/assets/images/cyber_knit_loafer_1781168018518.png',
  heritageCampaignBanner: '/src/assets/images/heritage_campaign_banner_1781168919991.png',
  elanHero8kFullLength: '/src/assets/images/elan_hero_8k_full_length_1781169252736.png',
  allAgesFootwearHero: '/src/assets/images/all_ages_footwear_hero_1781169788789.png',
  bridalLacePump: '/src/assets/images/bridal_lace_pump_1781169937060.png'
};

export const PRODUCTS: Product[] = [
  // 1. STILETTOS / DESIGNER HEELS
  {
    id: 'dc-01',
    name: 'Aurelia Rose Quartz Stilettos',
    category: 'Stilettos (Designer Heels)',
    group: 'Couture & Heels',
    segment: 'Designer Collections',
    price: 1850,
    description: 'Bespoke custom-crafted high stilettos crafted from premium Italian blush pink suede. Ornately hand-adorned with sparkling rose quartz crystal clusters and finished with the iconic EH monogram in 18k solid gold. Truly elite luxury, designed for exclusive red carpets.',
    features: [
      'Genuine Italian suede upper',
      'Solid 18k rose gold-plated EH monogram',
      'Glove-soft hand-stitched lambskin lining',
      '105mm stiletto heel with comfort-tuned pitch',
      'Includes custom velvet travel coffer'
    ],
    colors: [
      { name: 'Rose Quartz Pink', hex: '#E8C5C8' },
      { name: 'Champagne Gold', hex: '#E5D3B3' },
      { name: 'Nacre White', hex: '#FAF5EC' }
    ],
    sizes: [35, 36, 37, 38, 39, 40, 41],
    rating: 4.9,
    reviewsCount: 34,
    image: GENERATED_IMAGES.designerHeels,
    isBestseller: true,
    material: 'Blush Suede & Crystals',
    heelHeight: '105mm',
    ageGroup: 'Adult',
    tags: ['stilettos', 'pumps', 'party shoes', 'glitter shoes', 'luxury couture footwear', 'limited-edition collections', 'seasonal fashion trends', 'platform heels']
  },

  // 2. SILK NUDE PUMPS & KITTEN HEELS
  {
    id: 'dc-02',
    name: 'Seraphina Silk Nude Pumps',
    category: 'Pumps (Office & Party)',
    group: 'Couture & Heels',
    segment: 'Luxury',
    price: 690,
    description: 'Timeless luxury point-toe pumps wrapping the foot in smooth champagne-colored duchess silk. Designed with a perfect slope that looks beautiful in executive boardrooms or evening cocktail galas. Extremely flattering line with micro-cushion comfort.',
    features: [
      'Duchess silk satin outer',
      'Non-slip genuine nubuck leather sole',
      'Orthopedic grade internal memory cushion',
      '85mm sleek kitten-to-stiletto tapered heel',
      'Packaged in signature perfume-scented box'
    ],
    colors: [
      { name: 'Champagne Nude', hex: '#DFC1B1' },
      { name: 'Ivory Silk', hex: '#F7F4EB' },
      { name: 'Midnight Onyx', hex: '#1C1C1C' }
    ],
    sizes: [36, 37, 38, 39, 40],
    rating: 4.8,
    reviewsCount: 52,
    image: GENERATED_IMAGES.silkNudePumps,
    isNew: true,
    material: 'Duchess Silk & Kidskin',
    heelHeight: '85mm',
    ageGroup: 'Adult',
    tags: ['pumps', 'kitten heels', 'office footwear', 'party shoes', 'luxury couture footwear', 'seasonal fashion trends']
  },

  // 3. BRIDAL FOOTWEAR & LEATHER HEELS
  {
    id: 'dc-03',
    name: 'Elysian Bridal Dream Heels',
    category: 'Bridal Footwear',
    group: 'Couture & Heels',
    segment: 'Designer Collections',
    price: 2450,
    description: 'An ethereal bridal masterpiece for your finest day. Draped in premium French Chantilly lace, pearls, and hand-embroidered silver-gilt filament. Features custom-built comfortable block heels for outdoor ceremony stability and long hours of poise.',
    features: [
      'French lace overlaid on organic silk mesh',
      '65 individual hand-sewn freshwater baroque pearls',
      'Custom blue velvet inner sole detail (Your "Something Blue")',
      'Slightly wider block-stiletto base (95mm) for outdoor ceremony stability',
      'Collectible wooden keepsake box lined with satin'
    ],
    colors: [
      { name: 'Pearl White', hex: '#FFFDF9' },
      { name: 'Soft Nude Gold', hex: '#F3E5D8' }
    ],
    sizes: [35, 36, 37, 38, 39, 40],
    rating: 5.0,
    reviewsCount: 18,
    image: GENERATED_IMAGES.bridalLaceHeel,
    isNew: true,
    material: 'French Lace & Fresh Water Pearls',
    heelHeight: '95mm',
    ageGroup: 'Adult',
    tags: ['bridal footwear', 'block heels', 'party shoes', 'luxury couture footwear', 'limited-edition collections']
  },

  // 4. BABY SHOES & FIRST WALKERS
  {
    id: 'bk-01',
    name: "L'Étoile Silk Bow Walker",
    category: 'First Walkers (Baby Shoes)',
    group: 'Baby & Kids',
    segment: 'Luxury',
    price: 420,
    description: 'Exquisite pre-walker flat designed specifically for tiny princess steps. Structured with ultra-flexible vegetable-tanned nappa leather that supports soft skeletal growth, and tied with a sumptuous champagne-pink satin bow.',
    features: [
      'Aero-breathable chrome-free nappa leather',
      'Wide anatomical toe room to match toddler feet',
      'Super-soft suede sole to protect and grip indoor marble',
      'Reinforced velvet collar to ensure slip-proof fit',
      'Custom gold monogram buckle ornament'
    ],
    colors: [
      { name: 'Pearl Pink', hex: '#F6D9D9' },
      { name: 'Nacre Cream', hex: '#FEFDF8' },
      { name: 'Soft Gold', hex: '#E6D3A7' }
    ],
    sizes: [16, 17, 18, 19, 20, 21],
    rating: 4.9,
    reviewsCount: 19,
    image: GENERATED_IMAGES.babyShoes,
    isBestseller: true,
    material: 'Veb-Tanned Nappa & Silk Satin',
    ageGroup: 'Toddler',
    tags: ['baby shoes', 'first walkers', 'casual shoes', 'comfort footwear', 'limited-edition collections']
  },

  // 5. MARY JANES & FOR KIDS
  {
    id: 'bk-02',
    name: 'Petite Mary Jane Ballet Flat',
    category: 'Mary Janes (Kids)',
    group: 'Baby & Kids',
    segment: 'Premium',
    price: 220,
    description: 'Perfect classic Mary Jane for young juniors. Crafted from durable yet soft calfskin and secured with an adjustable scalloped T-strap. Features detailed hand-punched brogue embroidery suitable for prestige events or private academy rules.',
    features: [
      'Full-grain calf leather and shiny patent trims',
      'Memory foam orthotic insert to support growing arches',
      'Hook-and-loop hidden strap for rapid dressing',
      'Whisper-quiet non-marking natural rubber sole'
    ],
    colors: [
      { name: 'Royal Blush', hex: '#EDB7B9' },
      { name: 'Patent Cherry', hex: '#7A1C20' },
      { name: 'Classic Navy', hex: '#202A44' }
    ],
    sizes: [22, 24, 26, 28, 30, 32],
    rating: 4.7,
    reviewsCount: 42,
    image: GENERATED_IMAGES.kidsMaryJaneFlat,
    material: 'Patent Calf Leather',
    ageGroup: 'Junior',
    tags: ['Mary Janes', 'school shoes', 'ballet flats', 'casual shoes']
  },

  // 6. SCHOOL LOAFERS
  {
    id: 'bk-03',
    name: 'Prestige Academy School Loafer',
    category: 'School Shoes',
    group: 'Baby & Kids',
    segment: 'Mid-Range',
    price: 135,
    description: 'Elite-tier private academy leather loafer. Features reinforced double saddle-stitching, anti-scuff toe guards, and high-traction rubber bottoms. Classy look that lasts through school yard play and formal dress days.',
    features: [
      'Scuff-resistant treated Italian cowhide',
      'Moisture-wicking mesh lining with anti-odor charcoal particles',
      'Extremely lightweight vulcanized rubber base'
    ],
    colors: [
      { name: 'Ebony Tan', hex: '#151515' },
      { name: 'Rich Mahogany', hex: '#4A2A20' }
    ],
    sizes: [28, 30, 32, 34, 36],
    rating: 4.6,
    reviewsCount: 61,
    image: GENERATED_IMAGES.academySchoolLoafer,
    material: 'Scuff-Resistant Cowhide',
    ageGroup: 'Junior',
    tags: ['school shoes', 'loafers', 'casual shoes', 'office footwear']
  },

  // 7. CHUNKY SNEAKERS & STREET SPORTS
  {
    id: 'sp-01',
    name: 'Nova Pastel Chunky Sneakers',
    category: 'Chunky Sneakers',
    group: 'Sports & Sneakers',
    segment: 'Luxury',
    price: 520,
    description: 'An ultra-modern high-fashion sneaker combining raw street comfort with couture materials. Embellished with subtle gold wire overlays, soft pastel foam pads, and a wavy architectural transparent air sole that cushions every bold step.',
    features: [
      'Breathable engineered micro-knit panels',
      'Split-grain suede and pearlescent leather modules',
      'Futuristic dual-density bubble foam midsole',
      'Hand-woven cotton-silk laces',
      'Hidden 45mm interior elevated wedge'
    ],
    colors: [
      { name: 'Quartz Cream Lavender', hex: '#EBE3E5' },
      { name: 'Blush Ivory Gold', hex: '#F9ECE6' },
      { name: 'Neon Pearl', hex: '#D2E1DB' }
    ],
    sizes: [35, 36, 37, 38, 39, 40, 41],
    rating: 4.9,
    reviewsCount: 88,
    image: GENERATED_IMAGES.luxurySneakers,
    isBestseller: true,
    material: 'Knit Mesh, Suede & Pearlescent Gold Calfskin',
    ageGroup: 'Adult',
    tags: ['chunky sneakers', 'sneakers', 'sports shoes', 'training shoes', 'casual shoes', 'wedges', 'platform heels', 'seasonal fashion trends']
  },

  // 8. RUNNING SHOES & BIOM_LAST DESIGN
  {
    id: 'sp-02',
    name: 'Empowerment Pro Runner',
    category: 'Running Shoes',
    group: 'Sports & Sneakers',
    segment: 'Mid-Range',
    price: 185,
    description: 'High-performance athletic running shoe designed to support female biomechanics. Ultra-springy, moisture-controlling construction that keeps you fast in pristine style, detailed with elegant reflective champagne accents.',
    features: [
      'High-tensile seamless stretch upper',
      'Responsive energy-return carbon plate',
      'Reflective rose gold 3M safety piping',
      'Anatomically responsive ladies-last fit'
    ],
    colors: [
      { name: 'Rose Glow Grey', hex: '#DFD8DB' },
      { name: 'Pure White Chrome', hex: '#ECEFF4' }
    ],
    sizes: [36, 37, 38, 39, 40, 42],
    rating: 4.8,
    reviewsCount: 112,
    image: GENERATED_IMAGES.empowermentProRunner,
    material: 'Carbon Mesh & Carbon EVA',
    ageGroup: 'Adult',
    tags: ['running shoes', 'sports shoes', 'training shoes', 'walking shoes', 'comfort footwear', 'seasonal fashion trends']
  },

  // 9. HIGH-TOP CANVAS & SLIP-ONS
  {
    id: 'sp-03',
    name: 'Soho High-Top Canvas',
    category: 'Canvas Shoes (Sneakers)',
    group: 'Sports & Sneakers',
    segment: 'Value',
    price: 95,
    description: 'Chic downtown canvas high-tops featuring clean silhouettes, double-vulcanized protective rands, and subtle embroidered rose-gold EH insignias. Casual wear elevated for the stylish modern teen and young adult.',
    features: [
      '12oz organic Egyptian long-staple canvas',
      'Copper rust-proof grommets with silk-finish flat cords',
      'Arch-supportive OrthoLite foam insole'
    ],
    colors: [
      { name: 'Soft Off-White', hex: '#FAF9F6' },
      { name: 'Blush Taupe', hex: '#D1BAB2' },
      { name: 'Sable Black', hex: '#262626' }
    ],
    sizes: [35, 36, 37, 38, 39, 40, 41],
    rating: 4.5,
    reviewsCount: 78,
    image: GENERATED_IMAGES.canvasHighTop,
    material: 'Egyptian Canvas & Rubber',
    ageGroup: 'Universal',
    tags: ['canvas shoes', 'sneakers', 'casual shoes', 'slip-ons']
  },

  // 10. CHELSEA BOOTS & ANKLE BOOTS
  {
    id: 'bt-01',
    name: 'Chelsea Duchess Leather Boots',
    category: 'Chelsea Boots',
    group: 'Boots & Winter',
    segment: 'Luxury',
    price: 490,
    description: 'Vogue-ready sleek Chelsea boots in polished vegetable-tanned Italian calfskin leather. Fitted with flexible elastic twin gores and a customized heavy duty yet lightweight treaded lug sole that delivers winter utility with premium poise.',
    features: [
      'Full-grain grade-A box calf leather',
      'Hand-waxed burnished toe cap',
      'Waterproof seam-sealed barrier technology',
      'Chic 40mm stacked leather cuban heel'
    ],
    colors: [
      { name: 'Chestnut Brown', hex: '#5A3D28' },
      { name: 'Brilliant Black', hex: '#0F0F0F' }
    ],
    sizes: [36, 37, 38, 39, 40, 41],
    rating: 4.9,
    reviewsCount: 45,
    image: GENERATED_IMAGES.patentChelseaBoot,
    isBestseller: true,
    material: 'Veb-Tanned Box Calf Leather',
    ageGroup: 'Adult',
    heelHeight: '40mm',
    tags: ['Chelsea boots', 'ankle boots', 'winter boots', 'casual shoes', 'office footwear', 'seasonal fashion trends']
  },

  // 11. WINTER BOOTS & KNEE-HIGH COZY
  {
    id: 'bt-02',
    name: 'Courchevel Fur Winter Boots',
    category: 'Winter Boots',
    group: 'Boots & Winter',
    segment: 'Luxury',
    price: 580,
    description: 'Cold-weather luxury winter boots lined with genuine shearling, detailed with water-resistant rose-pink suede panels and robust crisscross statement gold speed-hooks. Keeps feet pristine, dry, and wrapped in complete thermal bliss.',
    features: [
      'Fluorocarbon-treated water-resistant Italian suede',
      '100% thick Merino wool sheepskin lining',
      'Articulated vibram winter-grip deep treads',
      'Rose gold hardware detailing'
    ],
    colors: [
      { name: 'Oatmeal Shearling', hex: '#EAE1D4' },
      { name: 'Winter Silt Grey', hex: '#8C827A' }
    ],
    sizes: [36, 37, 38, 39, 40],
    rating: 4.8,
    reviewsCount: 31,
    image: GENERATED_IMAGES.shearlingWinterBoot,
    material: 'Suede, Merino Wool & Shearling',
    ageGroup: 'Adult',
    tags: ['winter boots', 'knee-high boots', 'comfort footwear', 'limited-edition collections', 'seasonal fashion trends']
  },

  // 12. COMBAT BOOTS & OFF-DUTY EDGE
  {
    id: 'bt-03',
    name: 'Metropolitan Combat Boots',
    category: 'Combat Boots',
    group: 'Boots & Winter',
    segment: 'Premium',
    price: 380,
    description: 'Empowering feminine military style boot. Built with luxurious matte tumbled cowhide, shiny silver studs, and a quick-release zipped side. The ultimate edge for autumn statement outfits.',
    features: [
      'Pebble-grained matte leather',
      'Comfort gusset side zipper for easy wear',
      '14-eye standard lacing with premium waxed laces'
    ],
    colors: [
      { name: 'Onyx Polish', hex: '#111111' },
      { name: 'Saddle Tan', hex: '#7C4B2E' }
    ],
    sizes: [36, 37, 38, 39, 40, 41],
    rating: 4.7,
    reviewsCount: 54,
    image: GENERATED_IMAGES.combatMatteBoot,
    material: 'Tumbled Pebble Leather',
    ageGroup: 'Adult',
    tags: ['combat boots', 'ankle boots', 'winter boots', 'casual shoes', 'seasonal fashion trends']
  },

  // 13. BALLET FLATS (EVERYDAY CLASSIC)
  {
    id: 'ev-01',
    name: 'Vendome Pearl Ballet Flats',
    category: 'Ballet Flats',
    group: 'Everyday Casual',
    segment: 'Premium',
    price: 240,
    description: 'Ultra-feminine ballerina flats with a flexible inner elastic band. Handmade in Venice, featuring genuine kidskin leather and a pristine top crown embellished with genuine freshwater seed pearls.',
    features: [
      'Glove-like folding structural build',
      'Hand-arranged seed pearls and crystal bow tie',
      'Cushioned memory padding for extensive daily walking'
    ],
    colors: [
      { name: 'Pearl Ivory', hex: '#FDFBF7' },
      { name: 'Blush Nude', hex: '#EACDCD' },
      { name: 'Classic Black Satin', hex: '#1C1C1F' }
    ],
    sizes: [35, 36, 37, 38, 39, 40, 41],
    rating: 4.8,
    reviewsCount: 89,
    image: GENERATED_IMAGES.pearlBalletFlat,
    isBestseller: true,
    material: 'Kidskin Leather & Pearls',
    ageGroup: 'Universal',
    tags: ['ballet flats', 'casual shoes', 'flat sandals', 'comfort footwear', 'office footwear', 'limited-edition collections']
  },

  // 14. ESPADRILLES & WEDGES
  {
    id: 'ev-02',
    name: 'Côte d’Azur Espresso Espadrilles',
    category: 'Espadrilles',
    group: 'Everyday Casual',
    segment: 'Value',
    price: 110,
    description: 'Chic woven jute holiday flats with soft tie-up linen straps. Highly photorealistic resort vibes, perfect for beachside lunches or warm botanical garden strolls.',
    features: [
      'Breathable flax linen upper with lace-up ties',
      '100% natural hand-braided organic jute midsole',
      'Protective natural thin rubber outsole surface'
    ],
    colors: [
      { name: 'Linen Oat', hex: '#ECE4DB' },
      { name: 'Coral Rose', hex: '#E09289' }
    ],
    sizes: [36, 37, 38, 39, 40],
    rating: 4.6,
    reviewsCount: 50,
    image: GENERATED_IMAGES.espressoEspadrilles,
    material: 'Spanish Jute & Flax Linen',
    ageGroup: 'Adult',
    tags: ['espadrilles', 'wedges', 'sandals', 'flat sandals', 'casual shoes', 'seasonal fashion trends']
  },

  // 15. SLIDES, FLIP-FLOPS & RESORT WEAR
  {
    id: 'ev-03',
    name: 'EH Signature Slides',
    category: 'Slides',
    group: 'Everyday Casual',
    segment: 'Mid-Range',
    price: 165,
    description: 'Easy-wear everyday slides showcasing a prominent stitched EH monogram across a quilted leather strap. Simple, luxurious, lightweight, and perfect to accompany a relaxed luxury lifestyle.',
    features: [
      'Quilted drum-dyed calf nappa strap',
      'Anatomically contoured real cork-latex footbed',
      'Super lightweight shock-absorbing EVA layer'
    ],
    colors: [
      { name: 'Bespoke Nude', hex: '#DFBAB0' },
      { name: 'Caramel Leather', hex: '#9E6A4B' },
      { name: 'Ebony Gold', hex: '#1E1E1E' }
    ],
    sizes: [35, 36, 37, 38, 39, 40, 41, 42],
    rating: 4.7,
    reviewsCount: 135,
    image: GENERATED_IMAGES.signatureLeatherSlides,
    material: 'Cork & kontour calfskin',
    ageGroup: 'Universal',
    tags: ['slides', 'flat sandals', 'flip-flops', 'sandals', 'casual shoes', 'comfort footwear']
  },

  // 16. COMFORT & PODIATRY-LOAFERS
  {
    id: 'co-01',
    name: 'Alise Comfort Walking Suede Loafer',
    category: 'Comfort Shoes (Orthopedic)',
    group: 'Comfort & Orthopedic',
    segment: 'Premium',
    price: 245,
    description: 'Specially engineered orthotic-friendly flat designed for busy professionals, teachers, or mature women who spend hours on their feet. Features pressure-distribution soles and cloud-soft Italian suede.',
    features: [
      'Podiatric-certified dynamic arch support',
      'Extra padded heel cup prevents plantar fasciitis strain',
      'Soft breathable suede stretches to alleviate pressure hotspots'
    ],
    colors: [
      { name: 'Smokey Mauve', hex: '#A89297' },
      { name: 'Deep Espresso', hex: '#3E2E2E' },
      { name: 'Midnight Deep Blue', hex: '#1C2638' }
    ],
    sizes: [36, 37, 38, 39, 40, 41, 42],
    rating: 4.9,
    reviewsCount: 112,
    image: GENERATED_IMAGES.comfortSuedeLoafer,
    isBestseller: true,
    material: 'Premium Stretch Suede & Polyurethane Sole',
    ageGroup: 'Universal',
    tags: ['loaders', 'loafers', 'comfort footwear', 'orthopedic footwear', 'walking shoes', 'casual shoes', 'office footwear']
  },

  // 17. COMFORT CLOGS & SLIP-ONS
  {
    id: 'co-02',
    name: 'Linen Whisper Slip-On Clog',
    category: 'Clogs',
    group: 'Comfort & Orthopedic',
    segment: 'Mid-Range',
    price: 140,
    description: 'Perfect house-to-garden comfort clog with a natural wool felt construction. Perfect insulative properties, keeping toes cozy during winter and breezy in spring.',
    features: [
      'Eco-friendly naturally compressed wool felt',
      'Dampness-resistant high stability deep cork heel cup',
      'Adjustable rose gold metal front pin buckle'
    ],
    colors: [
      { name: 'Flannel Grey', hex: '#9E9D9B' },
      { name: 'Oatmeal Milk', hex: '#DFDACD' }
    ],
    sizes: [35, 36, 37, 38, 39, 40, 41],
    rating: 4.6,
    reviewsCount: 39,
    image: GENERATED_IMAGES.feltComfortClog,
    material: 'Compressed Wool Felt & Cork',
    ageGroup: 'Universal',
    tags: ['clogs', 'mules', 'slip-ons', 'comfort footwear', 'casual shoes']
  },

  // 18. ETHNIC MASTERPIECES
  {
    id: 'ex-01',
    name: 'Shehnai Heritage Ethnic Juttis',
    category: 'Ethnic Footwear',
    group: 'Couture & Heels',
    segment: 'Premium',
    price: 280,
    description: 'A tribute to royal heritage. Hand-crafted flat juttis beautifully stitched with genuine brass zari threads, mirrors, and seed-beads. Features padded double leather cushions to protect your feet during long cultural festivities.',
    features: [
      'Pure organic silk raw upper base',
      'Hand-sewn brass-wire zardozi and delicate sequins',
      'Ultra-plush leather foot cushion layer'
    ],
    colors: [
      { name: 'Royal Gold Mirror', hex: '#ECC45C' },
      { name: 'Ruby Vermillion', hex: '#A3293D' }
    ],
    sizes: [35, 36, 37, 38, 39, 40],
    rating: 4.9,
    reviewsCount: 22,
    image: GENERATED_IMAGES.ethnicJuttis,
    material: 'Raw Silk, Brass Zari & Glass Beads',
    ageGroup: 'Adult',
    tags: ['ethnic footwear', 'flat sandals', 'party shoes', 'moccasins', 'limited-edition collections']
  },

  // 19. PARTY GLITTER GLASS SLIPPERS
  {
    id: 'ex-02',
    name: 'Glitter Rose Glass Slippers',
    category: 'Glitter Shoes (Mary Janes)',
    group: 'Baby & Kids',
    segment: 'Budget',
    price: 65,
    description: 'Sparkling party flats that shimmer like real Cinderella slippers. Designed with a flexible mesh core that keeps the coarse glitter entirely locked away from delicate skin, minimizing scratches.',
    features: [
      'Premium triple-lock scratchless visual micro-glitter',
      'Soft micro-velvet interior lining',
      'Non-hazardous synthetic low rubber grip'
    ],
    colors: [
      { name: 'Prism Multi-Glitter', hex: '#EDD5DE' },
      { name: 'Stardust Silver', hex: '#E3E3E3' }
    ],
    sizes: [22, 24, 26, 28, 30],
    rating: 4.7,
    reviewsCount: 94,
    image: GENERATED_IMAGES.roseGlassSlippers,
    material: 'Glitter Mesh',
    ageGroup: 'Junior',
    tags: ['glitter shoes', 'party shoes', 'Mary Janes', 'baby shoes', 'seasonal fashion trends']
  },

  // 20. JELLY SHOES & WATERPROOF WATERWALKERS
  {
    id: 'ex-03',
    name: 'Jelly Star Sandal',
    category: 'Jelly Shoes',
    group: 'Baby & Kids',
    segment: 'Budget',
    price: 45,
    description: 'Fragrant and fun jelly sandals for warm beaches or summer playdates. Fully waterproof, elastic compound that bends with the natural arches of childrens feet.',
    features: [
      'Scented eco-flexible hypoallergenic PVC overlay',
      '100% waterproof for beach and puddle jumping',
      'E-Z snap rust-proof strap system'
    ],
    colors: [
      { name: 'Sweet Peach Scented', hex: '#FDDFC8' },
      { name: 'Crystal Lavender Sparkle', hex: '#EBE3FF' }
    ],
    sizes: [20, 22, 24, 26, 28],
    rating: 4.4,
    reviewsCount: 105,
    image: GENERATED_IMAGES.jellyStarSandals,
    material: 'Scented Infused PVC',
    ageGroup: 'Toddler',
    tags: ['jelly shoes', 'sandals', 'flat sandals', 'casual shoes']
  },

  // 21. PREMIUM SATIN MULES (NEW)
  {
    id: 'ex-04',
    name: 'Marie Satin Pearl Mules',
    category: 'Mules',
    group: 'Couture & Heels',
    segment: 'Luxury',
    price: 360,
    description: 'Limited edition slip-on mules made of quilted baby pink silk satin, featuring a large hand-stitched freshwater pearl and crystal buckle. Perfect for hosting fine indoor events or styling up off-duty attire.',
    features: [
      'Polished premium duchess silk satin',
      'Hand-arranged seed pearl and Austrian crystal setting',
      'Slip-on design with supportive slight block heel (20mm)'
    ],
    colors: [
      { name: 'Quilted Rose Petal', hex: '#EEC7CE' },
      { name: 'Ivory Satin Pearl', hex: '#FAF3E3' }
    ],
    sizes: [36, 37, 38, 39, 40],
    rating: 4.9,
    reviewsCount: 15,
    image: GENERATED_IMAGES.satinPearlMule,
    material: 'Duchess Satin & Pearls',
    ageGroup: 'Adult',
    heelHeight: '20mm',
    tags: ['mules', 'moccasins', 'slip-ons', 'party shoes', 'luxury couture footwear', 'limited-edition collections']
  },

  // 22. ESPADRILLE WEDGES (NEW)
  {
    id: 'ex-05',
    name: 'Ibiza Gold Ankle Wedges',
    category: 'Wedges (Sandals)',
    group: 'Everyday Casual',
    segment: 'Mid-Range',
    price: 185,
    description: 'Stunning luxury wedge sandals featuring high woven natural jute platforms and elegant metallic rose gold leather ankle straps. Exudes endless summer resort bliss with steady, comfortable posture.',
    features: [
      'Gleaming rose-gold metalized calfskin straps',
      'Premium triple-wound organic Spanish jute wedges',
      'Adjustable gold buckle ankle closure for secure strides'
    ],
    colors: [
      { name: 'Rose Gold Metallic', hex: '#E2B2A3' },
      { name: 'Champagne Bronze', hex: '#D2AF80' }
    ],
    sizes: [36, 37, 38, 39, 40, 41],
    rating: 4.8,
    reviewsCount: 29,
    image: GENERATED_IMAGES.goldAnkleWedge,
    material: 'Metallic Calfskin & Jute',
    ageGroup: 'Adult',
    heelHeight: '90mm',
    tags: ['wedges', 'sandals', 'platform sandals', 'flat sandals', 'casual shoes', 'seasonal fashion trends']
  },

  // 23. KNEE-HIGH BOOTS (NEW)
  {
    id: 'ex-06',
    name: 'Burgundy Empress Knee-High Boots',
    category: 'Knee-High Boots',
    group: 'Boots & Winter',
    segment: 'Luxury',
    price: 720,
    description: 'An commanding autumn-winter boots design in high-shine deep cherry-burgundy brush off box calf leather. Elegant streamlined shape with immaculate equestrian-inspired stitch details.',
    features: [
      'Full grain box calf leather with custom hand-polished burnish finish',
      'Equestrian-inspired curved decorative seam detail',
      'Inside full-length smooth zipper for elegant, rapid fit',
      'Breathable structured kidskin shaft lining'
    ],
    colors: [
      { name: 'Imperial Cherry', hex: '#58101E' },
      { name: 'Tuxedo Black', hex: '#111111' }
    ],
    sizes: [36, 37, 38, 39, 40, 41],
    rating: 5.0,
    reviewsCount: 11,
    image: GENERATED_IMAGES.burgundyHighBoot,
    material: 'High-Shine Box Calf',
    ageGroup: 'Adult',
    tags: ['knee-high boots', 'winter boots', 'ankle boots', 'office footwear', 'seasonal fashion trends', 'limited-edition collections']
  },
  
  // 24. VELVET MULES
  {
    id: 'ex-07',
    name: 'Emperatriz Velvet Heeled Mules',
    category: 'Mules',
    group: 'Couture & Heels',
    segment: 'Designer Collections',
    price: 890,
    description: 'An elegant statement mule sculpted from deep royal blue French sapphire velvet. Luxuriously adorned with hand-laid brass-gilt starry embroidery and finished with a comfortable contoured kitten heel. A poetic tribute to celestial nights.',
    features: [
      'Premium plush sapphire velvet upper',
      'Hand-threaded brass wire celestial embroidery',
      'Softest drum-dyed gold lambskin lining',
      '65mm kitten-to-block sculpted heel profile'
    ],
    colors: [
      { name: 'Sapphire Night', hex: '#1D2A44' },
      { name: 'Emerald Velvet', hex: '#114B3E' },
      { name: 'Gilded Crimson', hex: '#6D1515' }
    ],
    sizes: [35, 36, 37, 38, 39, 40, 41],
    rating: 4.9,
    reviewsCount: 16,
    image: GENERATED_IMAGES.velvetHeeledMule,
    material: 'Sapphire Velvet',
    heelHeight: '65mm',
    ageGroup: 'Adult',
    tags: ['mules', 'moccasins', 'slip-ons', 'party shoes', 'luxury couture footwear', 'limited-edition collections']
  },

  // 25. BLACK CHANTILLY LACE BALLET FLATS
  {
    id: 'ex-08',
    name: 'Chopin Nocturne Lace Ballet Flats',
    category: 'Ballet Flats',
    group: 'Everyday Casual',
    segment: 'Luxury',
    price: 490,
    description: 'Infinitely poetic and graceful. Crafted from heavy matte French silk and overlaid with whisper-soft delicate black Chantilly lace panels that gracefully wrap the ankles. Elegant satin tie-up ribbons let you tailor your perfect fit.',
    features: [
      'Delicate genuine French Chantilly lace panels',
      'Ultra-dense matte luxury silk satin base',
      'Ankle-wrap premium silk-satin ribbons',
      'Extended micro-glove flexible design for cloud walking'
    ],
    colors: [
      { name: 'Obsidian Lace', hex: '#000000' },
      { name: 'Ivory Chantilly', hex: '#F9F6F0' }
    ],
    sizes: [35, 36, 37, 38, 39, 40],
    rating: 4.9,
    reviewsCount: 29,
    image: GENERATED_IMAGES.blackLaceBalletFlat,
    material: 'Silk & Chantilly Lace',
    ageGroup: 'Universal',
    isNew: true,
    tags: ['ballet flats', 'casual shoes', 'party shoes', 'limited-edition collections']
  },

  // 26. IRIDESCENT CYBER-KNIT LOAFERS
  {
    id: 'ex-09',
    name: 'Aurora Iridescent Cyber-Loafers',
    category: 'Comfort Shoes (Orthopedic)',
    group: 'Comfort & Orthopedic',
    segment: 'Premium',
    price: 320,
    description: 'A striking fusion of futuristic sportswear tech and absolute biomechanical alignment. Features an innovative iridescent, light-shifting holographic cyber-knit upper, paired with podiatric certified supportive shock-absorption cushioning.',
    features: [
      'Light-shifting iridescent holographic knit mesh upper',
      'Podiatrist-certified dual-density orthopedic sole skeleton',
      'Reinforced silver alloy heel stabilizing cup',
      'Quick slip-on stretch collar for effortless elite wear'
    ],
    colors: [
      { name: 'Holographic Aurora', hex: '#C3ECE4' },
      { name: 'Prism Pink', hex: '#ECD5DF' },
      { name: 'Matte Stealth Silver', hex: '#E5E5E5' }
    ],
    sizes: [36, 37, 38, 39, 40, 41, 42, 43],
    rating: 4.8,
    reviewsCount: 37,
    image: GENERATED_IMAGES.cyberKnitLoafer,
    material: 'Iridescent Cyber-Knit & Premium Cushioning',
    ageGroup: 'Adult',
    tags: ['loafers', 'comfort footwear', 'sports shoes', 'walking shoes', 'casual shoes', 'orthopedic footwear']
  },

  // START 20 ADDITIONAL PRODUCTS FOR 46 TOTAL
  {
    id: 'xt-01',
    name: 'Snowdrop Bridal Pumps',
    category: 'Bridal Footwear',
    group: 'Couture & Heels',
    segment: 'Luxury',
    price: 980,
    description: 'A breathtaking bridal lace pump stiletto adorned with tiny pearls. Placed on a silk white cushion, soft warm ambient lighting, elegant luxury footwear aesthetic.',
    features: ['Chantilly Ivory Lace', 'Austrian Pearl Embroidery', '100mm Stiletto Heel'],
    colors: [{ name: 'Snowdrop Lace', hex: '#FDFBF7' }, { name: 'Champagne Flute', hex: '#EED9C4' }],
    sizes: [36, 37, 38, 39],
    rating: 4.8, reviewsCount: 16,
    image: GENERATED_IMAGES.bridalLacePump,
    material: 'Lace & Pearls', heelHeight: '100mm', ageGroup: 'Adult',
    tags: ['bridal footwear', 'stilettos', 'pumps', 'party shoes']
  },
  {
    id: 'xt-02',
    name: 'Nordic Shearling Luxe Boots',
    category: 'Winter Boots',
    group: 'Boots & Winter',
    segment: 'Premium',
    price: 490,
    description: 'Luxurious suede and shearling lined winter boot for women. Elegant quiet luxury footwear aesthetic, perfect for snow lodges.',
    features: ['Waterproof Suede', 'Merino Shearling Lining', 'Traction Sole'],
    colors: [{ name: 'Walnut Suede', hex: '#634E3F' }, { name: 'Arctic Grey', hex: '#C2C5C8' }],
    sizes: [37, 38, 39, 40],
    rating: 4.9, reviewsCount: 31,
    image: GENERATED_IMAGES.shearlingWinterBoot,
    material: 'Suede & Shearling', ageGroup: 'Adult',
    tags: ['winter boots', 'ankle boots', 'comfort footwear']
  },
  {
    id: 'xt-03',
    name: 'Blossom First-Walkers',
    category: 'First Walkers (Baby Shoes)',
    group: 'Baby & Kids',
    segment: 'Luxury',
    price: 180,
    description: 'Adorable soft nappa leather pink infant first-walker shoe with delicate floral lace accents. Excellent for toddler arch support.',
    features: ['Chrome-free Leather', 'Velvet laces', 'Non-slip pure rubber sole'],
    colors: [{ name: 'Petal Pink', hex: '#FADADD' }, { name: 'Vanilla Cream', hex: '#F3E5AB' }],
    sizes: [18, 19, 20, 21],
    rating: 5.0, reviewsCount: 8,
    image: GENERATED_IMAGES.babyShoes,
    material: 'Nappa Leather', ageGroup: 'Toddler',
    tags: ['baby shoes', 'first walkers', 'casual shoes']
  },
  {
    id: 'xt-04',
    name: 'Stratos Platform Sneakers',
    category: 'Chunky Sneakers',
    group: 'Sports & Sneakers',
    segment: 'Premium',
    price: 360,
    description: 'Modern high-fashion chunky platform sneaker in white mesh with silver chrome outlines and pastel peach accents.',
    features: ['Double-stacked mid-sole', 'Chrome reflective piping', 'Cloud bed insoles'],
    colors: [{ name: 'Optic White Peach', hex: '#F1F1F0' }, { name: 'Void Black', hex: '#2A2B2D' }],
    sizes: [36, 37, 38, 39, 40],
    rating: 4.7, reviewsCount: 52,
    image: GENERATED_IMAGES.luxurySneakers,
    material: 'Tech Mesh & Leather', ageGroup: 'Adult',
    tags: ['chunky sneakers', 'sneakers', 'platform shoes', 'sports shoes']
  },
  {
    id: 'xt-05',
    name: 'Monaco Riviera Slides',
    category: 'Slides',
    group: 'Everyday Casual',
    segment: 'Value',
    price: 120,
    description: 'Sleek poolside slides featuring minimalistic woven linen over a contoured soft bed.',
    features: ['Woven Flax Upper', 'Durable EVA sole', 'Waterproof footbed'],
    colors: [{ name: 'Linen Oat', hex: '#D7CDBE' }, { name: 'Navy Sail', hex: '#263248' }],
    sizes: [36, 37, 38, 39, 41],
    rating: 4.4, reviewsCount: 22,
    image: GENERATED_IMAGES.espressoEspadrilles,
    material: 'Linen & EVA', ageGroup: 'Adult',
    tags: ['slides', 'flat sandals', 'casual shoes']
  },
  {
    id: 'xt-06',
    name: 'Verona Suede Heels',
    category: 'Pumps (Office & Party)',
    group: 'Couture & Heels',
    segment: 'Mid-Range',
    price: 260,
    description: 'A beautiful everyday office pump wrapped in soft velour suede, delivering impeccable style.',
    features: ['Calf Velour Suede', '75mm Stacked wood heel', 'Memory foam heel cup'],
    colors: [{ name: 'Plum Red', hex: '#772C3E' }, { name: 'Taupe Dust', hex: '#ACA49D' }],
    sizes: [35, 36, 37, 38, 39],
    rating: 4.5, reviewsCount: 88,
    image: GENERATED_IMAGES.silkNudePumps,
    material: 'Velour Suede', heelHeight: '75mm', ageGroup: 'Adult',
    tags: ['pumps', 'office footwear', 'casual shoes']
  },
  {
    id: 'xt-07',
    name: 'Royal Heritage Velvet Kids Flats',
    category: 'Mary Janes (Kids)',
    group: 'Baby & Kids',
    segment: 'Premium',
    price: 160,
    description: 'Aristocratic style flat shoes for kids wrapped in soft blue velvet. Perfect for recitals and prestigious events.',
    features: ['Premium Plush Velvet', 'Golden buckle closure', 'Soft padded insoles'],
    colors: [{ name: 'Royal Blue Velvet', hex: '#1C315E' }, { name: 'Garnet', hex: '#58111A' }],
    sizes: [26, 28, 30, 32],
    rating: 4.6, reviewsCount: 14,
    image: GENERATED_IMAGES.kidsMaryJaneFlat,
    material: 'Plush Velvet', ageGroup: 'Junior',
    tags: ['Mary Janes', 'party shoes', 'casual shoes', 'school shoes']
  },
  {
    id: 'xt-08',
    name: 'Cosmos Silver Juttis',
    category: 'Ethnic Footwear',
    group: 'Couture & Heels',
    segment: 'Mid-Range',
    price: 195,
    description: 'Modern fusion ethnic juttis glowing with silver zircon beads over a soft grey velvet base.',
    features: ['Hand-threaded zircons', 'Glove-leather lining', 'Flexible flat sole'],
    colors: [{ name: 'Silver Dust', hex: '#C0C0C0' }, { name: 'Lilac', hex: '#C8B9D0' }],
    sizes: [36, 37, 38, 39],
    rating: 4.8, reviewsCount: 30,
    image: GENERATED_IMAGES.ethnicJuttis,
    material: 'Velvet & Zircon', ageGroup: 'Adult',
    tags: ['ethnic footwear', 'flat sandals', 'party shoes']
  },
  {
    id: 'xt-09',
    name: 'Carbon Edge Trainers',
    category: 'Running Shoes',
    group: 'Sports & Sneakers',
    segment: 'Luxury',
    price: 340,
    description: 'Unleash your full potential with carbon fiber plated trainers. Extremely lightweight with dramatic performance.',
    features: ['Carbon Fibre Core plate', 'Aero-mesh lightweight weave', 'Reactive Foam'],
    colors: [{ name: 'Vapour Grey', hex: '#81848B' }, { name: 'Acid Green', hex: '#B2D235' }],
    sizes: [38, 39, 40, 41, 42],
    rating: 4.9, reviewsCount: 140,
    image: GENERATED_IMAGES.empowermentProRunner,
    material: 'Mesh & Carbon Fiber', ageGroup: 'Adult',
    tags: ['running shoes', 'sports shoes', 'training shoes']
  },
  {
    id: 'xt-10',
    name: 'Cotswold Riding Boots',
    category: 'Knee-High Boots',
    group: 'Boots & Winter',
    segment: 'Premium',
    price: 450,
    description: 'Classic English riding boots tailored in tan vachetta leather that beautifully patinas over time. Classic and timeless.',
    features: ['Vegetable Tanned leather', 'Asymmetric top-line', 'Low equestrian heel'],
    colors: [{ name: 'Saddle Tan', hex: '#8B5A2B' }, { name: 'Matte Black', hex: '#2F2F2F' }],
    sizes: [36, 37, 38, 39],
    rating: 4.7, reviewsCount: 65,
    image: GENERATED_IMAGES.burgundyHighBoot,
    material: 'Vachetta Leather', heelHeight: '30mm', ageGroup: 'Adult',
    tags: ['knee-high boots', 'winter boots', 'casual shoes', 'office footwear']
  },
  {
    id: 'xt-11',
    name: 'Luminescence Crystal Flats',
    category: 'Ballet Flats',
    group: 'Everyday Casual',
    segment: 'Luxury',
    price: 610,
    description: 'Breathtaking ballet flats studded with hundreds of Swarovski crystals over sheer organza mesh.',
    features: ['Swarovski Crystal layer', 'Sheer mesh paneling', 'Silk border trim'],
    colors: [{ name: 'Diamond Clear', hex: '#F0F8FF' }, { name: 'Rose Diamond', hex: '#F9EBEF' }],
    sizes: [35, 36, 37, 38, 39],
    rating: 4.8, reviewsCount: 33,
    image: GENERATED_IMAGES.blackLaceBalletFlat,
    material: 'Mesh & Crystals', ageGroup: 'Adult',
    tags: ['ballet flats', 'party shoes', 'casual shoes']
  },
  {
    id: 'xt-12',
    name: 'Terra Cotta Leather Espadrilles',
    category: 'Espadrilles',
    group: 'Everyday Casual',
    segment: 'Premium',
    price: 180,
    description: 'Luxurious thick leather espadrilles with ankle wraps, delivering supreme Mediterranean island style.',
    features: ['Buttery calf leather', 'Handcrafted Jute wedge', 'Padded leather insole'],
    colors: [{ name: 'Terra Cotta Cotto', hex: '#CC4E46' }, { name: 'Sand Nude', hex: '#E2CDBD' }],
    sizes: [37, 38, 39, 40],
    rating: 4.5, reviewsCount: 42,
    image: GENERATED_IMAGES.goldAnkleWedge,
    material: 'Calf Leather & Jute', heelHeight: '70mm', ageGroup: 'Adult',
    tags: ['espadrilles', 'wedges', 'sandals', 'casual shoes']
  },
  {
    id: 'xt-13',
    name: 'Acoustic Suede School Boots',
    category: 'School Shoes',
    group: 'Baby & Kids',
    segment: 'Mid-Range',
    price: 110,
    description: 'Sturdy, comfortable suede chukka boots for junior school environments. Classic desert style with superior grip.',
    features: ['Stain-resistant suede', 'Gum rubber crepe sole', 'Cotton flat laces'],
    colors: [{ name: 'Desert Sand', hex: '#C2B280' }, { name: 'Navy Twilight', hex: '#1C294D' }],
    sizes: [30, 32, 34, 36],
    rating: 4.3, reviewsCount: 11,
    image: GENERATED_IMAGES.academySchoolLoafer,
    material: 'Suede & Gum Rubber', ageGroup: 'Junior',
    tags: ['school shoes', 'casual shoes', 'winter boots']
  },
  {
    id: 'xt-14',
    name: 'Neon Horizon High-Tops',
    category: 'Canvas Shoes (Sneakers)',
    group: 'Sports & Sneakers',
    segment: 'Budget',
    price: 85,
    description: 'Vibrant neon street-art inspired canvas high top shoes for expressive teens and adults.',
    features: ['Vibrant dye canvas', 'Reinforced rubber toe cap', 'Cushioned sole'],
    colors: [{ name: 'Electric Pink', hex: '#FC0FC0' }, { name: 'Cyber Yellow', hex: '#FFFF00' }],
    sizes: [36, 37, 38, 39, 41],
    rating: 4.1, reviewsCount: 96,
    image: GENERATED_IMAGES.canvasHighTop,
    material: 'Cotton Canvas', ageGroup: 'Universal',
    tags: ['canvas shoes', 'sneakers', 'casual shoes']
  },
  {
    id: 'xt-15',
    name: 'Duchess Ribbon Kitten Heels',
    category: 'Pumps (Office & Party)',
    group: 'Couture & Heels',
    segment: 'Premium',
    price: 330,
    description: 'Delicate kitten heels featuring a prominent grosgrain ribbon bow at the toe box. Perfectly elegant for gallery visits.',
    features: ['Silk Satin Body', 'Grosgrain statement bow', '50mm slim kitten heel'],
    colors: [{ name: 'Mustard Gold', hex: '#D7AE2A' }, { name: 'Emerald Velvet', hex: '#1B4D3E' }],
    sizes: [35, 36, 37, 38, 39, 40],
    rating: 4.7, reviewsCount: 38,
    image: GENERATED_IMAGES.velvetHeeledMule,
    material: 'Satin & Grosgrain', heelHeight: '50mm', ageGroup: 'Adult',
    tags: ['pumps', 'kitten heels', 'party shoes', 'office footwear']
  },
  {
    id: 'xt-16',
    name: 'Polar Bear Infant Booties',
    category: 'First Walkers (Baby Shoes)',
    group: 'Baby & Kids',
    segment: 'Budget',
    price: 80,
    description: 'Incredibly cozy faux-fur winter booties. Keeps infant toes warm and protected from frigid winter drafts.',
    features: ['Hypoallergenic faux-fur', 'Soft brushed fleece lining', 'Velcro side tabs'],
    colors: [{ name: 'Polar White', hex: '#FDFDFD' }, { name: 'Cub Brown', hex: '#8B5A2B' }],
    sizes: [16, 17, 18],
    rating: 4.8, reviewsCount: 155,
    image: GENERATED_IMAGES.babyShoes,
    material: 'Faux-Fur & Fleece', ageGroup: 'Toddler',
    tags: ['baby shoes', 'first walkers', 'winter boots']
  },
  {
    id: 'xt-17',
    name: 'Venetian Glass Slingbacks',
    category: 'Stilettos (Designer Heels)',
    group: 'Couture & Heels',
    segment: 'Luxury',
    price: 1100,
    description: 'Magnificent glass-clear transparent slingbacks adorned with pure silver hardware, giving a modern Cinderella aesthetic.',
    features: ['Scratch-resistant transparent lucite', 'Pure silver buckles', '110mm glass heel'],
    colors: [{ name: 'Crystal Clear', hex: '#EBEBFA' }, { name: 'Smoked Glass', hex: '#B5B5BE' }],
    sizes: [36, 37, 38, 39],
    rating: 4.6, reviewsCount: 22,
    image: GENERATED_IMAGES.bridalLaceHeel,
    material: 'Lucite & Silver', heelHeight: '110mm', ageGroup: 'Adult',
    tags: ['stilettos', 'party shoes', 'pumps', 'limited-edition collections']
  },
  {
    id: 'xt-18',
    name: 'Ascend Orthopedic Walkers',
    category: 'Comfort Shoes (Orthopedic)',
    group: 'Comfort & Orthopedic',
    segment: 'Mid-Range',
    price: 175,
    description: 'Serious orthopedic mesh walkers designed to align the spine and mitigate joint stress during long daily shifts. Highly recommended for clinical staff.',
    features: ['Triple density EVA foam', 'Breathable knit upper', 'Deep heel stabilizer'],
    colors: [{ name: 'Clinical White', hex: '#F0F0F0' }, { name: 'Navy Teal', hex: '#005D6E' }],
    sizes: [37, 38, 39, 40, 41, 42],
    rating: 4.9, reviewsCount: 340,
    image: GENERATED_IMAGES.comfortSuedeLoafer,
    material: 'Engineered Knit & EVA', ageGroup: 'Adult',
    tags: ['comfort footwear', 'orthopedic footwear', 'walking shoes', 'sneakers', 'sports shoes']
  },
  {
    id: 'xt-19',
    name: 'Milano Combat Zip Boots',
    category: 'Combat Boots',
    group: 'Boots & Winter',
    segment: 'Luxury',
    price: 680,
    description: 'Chunky, aggressive combat boots elevated with luxury finishing. Featuring front double silver zips and thick commando soles.',
    features: ['Thick calfskin hide', 'Twin silver bespoke zippers', 'Commando XL rubber sole'],
    colors: [{ name: 'Deep Black Polish', hex: '#0D0D0D' }, { name: 'Oxblood Red', hex: '#4A0404' }],
    sizes: [36, 37, 38, 39, 40],
    rating: 4.7, reviewsCount: 41,
    image: GENERATED_IMAGES.combatMatteBoot,
    material: 'Calfskin & Rubber', heelHeight: '50mm', ageGroup: 'Adult',
    tags: ['combat boots', 'winter boots', 'ankle boots', 'casual shoes']
  },
  {
    id: 'xt-20',
    name: 'Lotus Blossom Satin Slides',
    category: 'Slides',
    group: 'Everyday Casual',
    segment: 'Premium',
    price: 240,
    description: 'Intricately embroidered flat slides adorned with gorgeous lotus flower silk threading. Perfect for high-end lounging or yacht deck wear.',
    features: ['Silk Embroidered Upper', 'Premium leather footbed', 'Anti-slip base'],
    colors: [{ name: 'Lotus Pink', hex: '#E79AB3' }, { name: 'Jade Green', hex: '#00A86B' }],
    sizes: [36, 37, 38, 39, 40],
    rating: 4.8, reviewsCount: 19,
    image: GENERATED_IMAGES.signatureLeatherSlides,
    material: 'Silk Satin', ageGroup: 'Adult',
    tags: ['slides', 'flat sandals', 'casual shoes']
  }
];

export const SPECIALS = [
  {
    title: 'The Signature Bride',
    tagline: 'Your "Something Blue" Customization',
    desc: 'Each pair of our Elysian Bridal Heels is hand-made to order, customized with your wedding date embroidered in royal blue threading on the interior lambskin leather lining.',
    buttonText: 'Schedule Atelier Fitting',
    image: GENERATED_IMAGES.bridalLaceHeel
  },
  {
    title: 'Heritage Packaging Design',
    tagline: 'The EH Rose-Gold Experience',
    desc: 'Unboxing is an affair to remember. Every purchase, from our everyday essential flats to our finest haute-couture stilettos, arrives housed in an acid-free tissue paper layer, a protective velvet dust bag, and our rigid Rose-Gold monogrammed keepsake box.',
    buttonText: 'Explore Ateliers',
    image: GENERATED_IMAGES.boutique
  }
];
