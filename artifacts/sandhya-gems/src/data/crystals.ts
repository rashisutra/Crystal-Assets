export type Goal = 'love' | 'wealth' | 'health' | 'protection';

export interface Crystal {
  name: string;
  img: string;
  why: string;
  price: string;
  url: string;
  goals: Goal[];
  signs: string[];
}

export const crystals: Record<string, Crystal> = {
  amethyst: {
    name: 'Amethyst Bracelet',
    img: 'https://sandhyagems.in/cdn/shop/files/Natural_Certified_Amethyst_Bracelet.jpg?width=200&height=200&crop=center&v=1754054662',
    why: 'Amethyst resonates with your sign and energy. It calms an overactive mind, sharpens intuition, and creates a protective spiritual shield around you.',
    price: '₹525 (was ₹725) · Free delivery in Hyderabad',
    url: 'https://sandhyagems.in/collections/best-gemstone-bracelets-online/products/amethyst-bracelet-online',
    goals: ['health', 'protection'],
    signs: ['Aquarius', 'Pisces', 'Scorpio', 'Virgo'],
  },
  rose_quartz: {
    name: 'Rose Quartz Bracelet',
    img: 'https://sandhyagems.in/cdn/shop/files/Natural_Rose_Quartz_Crystal_Bracelet.png?width=200&height=200&crop=center&v=1754054663',
    why: 'Rose Quartz is the stone of unconditional love. It opens your heart, heals emotional wounds, and creates space for beautiful relationships to blossom.',
    price: '₹499 (was ₹755) · Free delivery in Hyderabad',
    url: 'https://sandhyagems.in/collections/best-gemstone-bracelets-online/products/natural-rose-quartz-bracelet',
    goals: ['love'],
    signs: ['Taurus', 'Libra', 'Cancer', 'Pisces'],
  },
  money_magnet: {
    name: 'Money Magnet Bracelet',
    img: 'https://sandhyagems.in/cdn/shop/files/Natural_Crystal_Money_Magnet_Bracelet.png?width=200&height=200&crop=center&v=1771061520',
    why: 'The Money Magnet combines Citrine, Pyrite and Aventurine — the three most powerful crystals for attracting financial abundance and career success.',
    price: '₹659 (was ₹899) · Free delivery in Hyderabad',
    url: 'https://sandhyagems.in/collections/best-gemstone-bracelets-online/products/natural-money-magnet-bracelet',
    goals: ['wealth'],
    signs: ['Capricorn', 'Taurus', 'Virgo', 'Leo'],
  },
  black_tourmaline: {
    name: 'Black Tourmaline Nazar Bracelet',
    img: 'https://sandhyagems.in/cdn/shop/files/Product1_MoneyMagnet_NoNazarEvilEye__page-0005.jpg?width=200&height=200&crop=center&v=1771070099',
    why: 'Black Tourmaline is the most powerful protection crystal. It creates an invisible energy shield, absorbs negativity and keeps your aura grounded and pure.',
    price: '₹799 (was ₹1,200) · Free delivery in Hyderabad',
    url: 'https://sandhyagems.in/collections/best-gemstone-bracelets-online/products/black-tourmaline-bracelet-protection',
    goals: ['protection'],
    signs: ['Capricorn', 'Scorpio', 'Aries', 'Sagittarius'],
  },
  aventurine: {
    name: 'Green Aventurine Bracelet',
    img: 'https://sandhyagems.in/cdn/shop/files/Certified_Natural_Green_Aventurine_Bracelet.jpg?width=200&height=200&crop=center&v=1754054668',
    why: 'Green Aventurine is the stone of opportunity and good fortune. It promotes physical vitality, emotional healing, and opens doors to new growth.',
    price: '₹550 (was ₹750) · Free delivery in Hyderabad',
    url: 'https://sandhyagems.in/collections/best-gemstone-bracelets-online/products/natural-green-bracelet',
    goals: ['health', 'wealth'],
    signs: ['Virgo', 'Taurus', 'Libra', 'Cancer'],
  },
  lava: {
    name: 'Lava Stone Healing Bracelet',
    img: 'https://sandhyagems.in/cdn/shop/files/Natural_Lava_Stone_Healing_Bracelet.png?width=200&height=200&crop=center&v=1754054659',
    why: "Born from the earth's core, Lava Stone is the ultimate grounding crystal. It gives you raw strength, courage, and a stable base to build from.",
    price: '₹599 (was ₹899) · Free delivery in Hyderabad',
    url: 'https://sandhyagems.in/collections/best-gemstone-bracelets-online/products/natural-lava-healing-bracelet',
    goals: ['health', 'protection'],
    signs: ['Aries', 'Leo', 'Sagittarius', 'Scorpio'],
  },
  power_trio: {
    name: 'Ultimate Power Trio Set',
    img: 'https://sandhyagems.in/cdn/shop/files/combain.png?width=200&height=200&crop=center&v=1771074198',
    why: 'The Power Trio gives you everything — wealth attraction, evil eye protection and lucky energy in one set. Our most complete crystal package at an unbeatable price.',
    price: '₹999 (was ₹2,099) · Free delivery in Hyderabad',
    url: 'https://sandhyagems.in/collections/best-gemstone-bracelets-online/products/wealth-protection-set-power-trio',
    goals: ['wealth', 'protection'],
    signs: ['Capricorn', 'Gemini', 'Aquarius', 'Libra'],
  },
};

export function getZodiacSign(dob: string): string {
  const d = new Date(dob);
  const m = d.getMonth() + 1;
  const day = d.getDate();
  if ((m === 3 && day >= 21) || (m === 4 && day <= 19)) return 'Aries';
  if ((m === 4 && day >= 20) || (m === 5 && day <= 20)) return 'Taurus';
  if ((m === 5 && day >= 21) || (m === 6 && day <= 20)) return 'Gemini';
  if ((m === 6 && day >= 21) || (m === 7 && day <= 22)) return 'Cancer';
  if ((m === 7 && day >= 23) || (m === 8 && day <= 22)) return 'Leo';
  if ((m === 8 && day >= 23) || (m === 9 && day <= 22)) return 'Virgo';
  if ((m === 9 && day >= 23) || (m === 10 && day <= 22)) return 'Libra';
  if ((m === 10 && day >= 23) || (m === 11 && day <= 21)) return 'Scorpio';
  if ((m === 11 && day >= 22) || (m === 12 && day <= 21)) return 'Sagittarius';
  if ((m === 12 && day >= 22) || (m === 1 && day <= 19)) return 'Capricorn';
  if ((m === 1 && day >= 20) || (m === 2 && day <= 18)) return 'Aquarius';
  return 'Pisces';
}

export function findCrystal(goal: Goal, sign: string): Crystal {
  const entries = Object.values(crystals);
  // Best match: sign + goal
  const perfect = entries.find((c) => c.goals.includes(goal) && c.signs.includes(sign));
  if (perfect) return perfect;
  // Fallback: goal only
  const byGoal = entries.find((c) => c.goals.includes(goal));
  if (byGoal) return byGoal;
  return crystals.amethyst;
}

export interface Product {
  name: string;
  benefit: string;
  priceNow: string;
  priceWas: string;
  discount: string;
  badge: string;
  img: string;
  imgAlt: string;
  url: string;
  darkBg?: boolean;
}

export const products: Product[] = [
  {
    name: 'Natural Amethyst Bracelet',
    benefit: 'Calms anxiety · Boosts intuition · Promotes deep sleep',
    priceNow: '₹525',
    priceWas: '₹725',
    discount: '-27%',
    badge: 'Bestseller',
    img: 'https://sandhyagems.in/cdn/shop/files/Natural_Certified_Amethyst_Bracelet.jpg?width=400&height=400&crop=center&v=1754054662',
    imgAlt: 'Natural Certified Amethyst Bracelet Hyderabad',
    url: 'https://sandhyagems.in/collections/best-gemstone-bracelets-online/products/amethyst-bracelet-online',
  },
  {
    name: 'Rose Quartz Bracelet',
    benefit: 'Attracts love · Heals emotional wounds · Self-love',
    priceNow: '₹499',
    priceWas: '₹755',
    discount: '-33%',
    badge: 'Love & Healing',
    img: 'https://sandhyagems.in/cdn/shop/files/Natural_Rose_Quartz_Crystal_Bracelet.png?width=400&height=400&crop=center&v=1754054663',
    imgAlt: 'Natural Rose Quartz Bracelet Hyderabad',
    url: 'https://sandhyagems.in/collections/best-gemstone-bracelets-online/products/natural-rose-quartz-bracelet',
  },
  {
    name: 'Money Magnet Bracelet',
    benefit: 'Attracts wealth · Business growth · Financial abundance',
    priceNow: '₹659',
    priceWas: '₹899',
    discount: '-26%',
    badge: 'Top Seller',
    img: 'https://sandhyagems.in/cdn/shop/files/Natural_Crystal_Money_Magnet_Bracelet.png?width=400&height=400&crop=center&v=1771061520',
    imgAlt: 'Money Magnet Crystal Bracelet Hyderabad',
    url: 'https://sandhyagems.in/collections/best-gemstone-bracelets-online/products/natural-money-magnet-bracelet',
  },
  {
    name: 'Green Aventurine Bracelet',
    benefit: 'Stone of opportunity · Luck & prosperity · Emotional calm',
    priceNow: '₹550',
    priceWas: '₹750',
    discount: '-26%',
    badge: 'Gifting Favourite',
    img: 'https://sandhyagems.in/cdn/shop/files/Certified_Natural_Green_Aventurine_Bracelet.jpg?width=400&height=400&crop=center&v=1754054668',
    imgAlt: 'Green Aventurine Bracelet Hyderabad',
    url: 'https://sandhyagems.in/collections/best-gemstone-bracelets-online/products/natural-green-bracelet',
  },
  {
    name: 'Black Tourmaline Nazar Bracelet',
    benefit: 'Blocks negativity · Evil eye protection · Grounding energy',
    priceNow: '₹799',
    priceWas: '₹1,200',
    discount: '-33%',
    badge: 'Protection',
    img: 'https://sandhyagems.in/cdn/shop/files/Product1_MoneyMagnet_NoNazarEvilEye__page-0005.jpg?width=400&height=400&crop=center&v=1771070099',
    imgAlt: 'Black Tourmaline Nazar Bracelet Hyderabad',
    url: 'https://sandhyagems.in/collections/best-gemstone-bracelets-online/products/black-tourmaline-bracelet-protection',
    darkBg: true,
  },
  {
    name: 'Lava Stone Healing Bracelet',
    benefit: 'Raw grounding energy · Strength & courage · Stress relief',
    priceNow: '₹599',
    priceWas: '₹899',
    discount: '-33%',
    badge: 'Healing',
    img: 'https://sandhyagems.in/cdn/shop/files/Natural_Lava_Stone_Healing_Bracelet.png?width=400&height=400&crop=center&v=1754054659',
    imgAlt: 'Lava Stone Healing Bracelet Hyderabad',
    url: 'https://sandhyagems.in/collections/best-gemstone-bracelets-online/products/natural-lava-healing-bracelet',
  },
  {
    name: 'White Agate Bracelet',
    benefit: 'Clarity of mind · Emotional balance · Stress relief',
    priceNow: '₹499',
    priceWas: '₹699',
    discount: '-28%',
    badge: 'Calm & Balance',
    img: 'https://sandhyagems.in/cdn/shop/files/Natural_White_Agate_Bracelet.png?width=400&height=400&crop=center&v=1761420809',
    imgAlt: 'White Agate Bracelet Hyderabad',
    url: 'https://sandhyagems.in/collections/best-gemstone-bracelets-online/products/natural-white-agate-bracelet',
  },
  {
    name: 'Black Onyx Bracelet',
    benefit: 'Inner strength · Focus & discipline · Shields negativity',
    priceNow: '₹499',
    priceWas: '₹699',
    discount: '-28%',
    badge: 'Strength',
    img: 'https://sandhyagems.in/cdn/shop/files/Natural_Black_Onyx_Bracelet.png?width=400&height=400&crop=center&v=1761420808',
    imgAlt: 'Black Onyx Bracelet Hyderabad',
    url: 'https://sandhyagems.in/collections/best-gemstone-bracelets-online/products/black-onyx-bracelet',
    darkBg: true,
  },
  {
    name: 'Turquoise Howlite Bracelet',
    benefit: 'Calms overactive mind · Communication · Patience',
    priceNow: '₹499',
    priceWas: '₹699',
    discount: '-28%',
    badge: 'Communication',
    img: 'https://sandhyagems.in/cdn/shop/files/Natural_Turquoise_Howlite_Bracelet.png?width=400&height=400&crop=center&v=1761420806',
    imgAlt: 'Turquoise Howlite Bracelet Hyderabad',
    url: 'https://sandhyagems.in/collections/best-gemstone-bracelets-online/products/calming-turquoise-howlite-bracelet',
  },
  {
    name: 'Blue Lace Agate Bracelet',
    benefit: 'Serenity & soothing · Throat chakra · Reduces anxiety',
    priceNow: '₹1,499',
    priceWas: '₹1,699',
    discount: '-11%',
    badge: 'Certified',
    img: 'https://sandhyagems.in/cdn/shop/files/Certified_Blue_Lace_Agate_Bracelet.png?width=400&height=400&crop=center&v=1761420807',
    imgAlt: 'Blue Lace Agate Bracelet Hyderabad',
    url: 'https://sandhyagems.in/collections/best-gemstone-bracelets-online/products/certified-blue-lace-agate-bracelet',
  },
  {
    name: 'Ultimate Power Trio Set',
    benefit: 'Money Magnet + Tourmaline + Lucky Stone — the complete kit',
    priceNow: '₹999',
    priceWas: '₹2,099',
    discount: '-52%',
    badge: 'Best Value',
    img: 'https://sandhyagems.in/cdn/shop/files/combain.png?width=400&height=400&crop=center&v=1771074198',
    imgAlt: 'Power Trio Crystal Set Hyderabad',
    url: 'https://sandhyagems.in/collections/best-gemstone-bracelets-online/products/wealth-protection-set-power-trio',
  },
  {
    name: 'Prosperity & Protection Combo',
    benefit: 'Dhan Yog Money Magnet + Tourmaline Nazar — attract & protect',
    priceNow: '₹1,499',
    priceWas: '₹4,099',
    discount: '-63%',
    badge: 'Combo Offer',
    img: 'https://sandhyagems.in/cdn/shop/files/Product_1_Money_Magnet_No_Nazar_Evil_Eye__page-0001.jpg?width=400&height=400&crop=center&v=1771070278',
    imgAlt: 'Prosperity Protection Combo Hyderabad',
    url: 'https://sandhyagems.in/collections/best-gemstone-bracelets-online/products/crystal-protection-bracelets-combo',
  },
];
