/**
 * 3D Pixar-style Fruit Characters for Hyreel
 * Used for AI video generation templates and showcases
 */

export interface FruitCharacter {
  slug: string;
  name: string;
  emoji: string;
  color: string;
  description: string;
  personality: string;
  image: string;
  video?: string;
  tags: string[];
  animationStyles: string[];
  bestFor: string[];
}

export const fruitCharacters: FruitCharacter[] = [
  {
    slug: 'passion-fruit',
    name: 'Passion Fruit',
    emoji: '🫐',
    color: '#8B5CF6',
    description: 'Cute purple passion fruit mascot with big expressive eyes and a cheerful smile',
    personality: 'Energetic, passionate, full of life',
    image: '/images/fruit-characters/passion-fruit.png',
    video: '/videos/fruit-characters/passion-fruit.mp4',
    tags: ['tropical', 'exotic', 'health', 'energy'],
    animationStyles: ['bounce', 'wave', 'dance', 'zoom'],
    bestFor: ['Health products', 'Energy drinks', 'Tropical brands', 'Fitness apps'],
  },
  {
    slug: 'strawberry',
    name: 'Strawberry',
    emoji: '🍓',
    color: '#EF4444',
    description: 'Adorable red strawberry character with heart-shaped leaves and rosy cheeks',
    personality: 'Sweet, loving, romantic',
    image: '/images/fruit-characters/strawberry.png',
    video: '/videos/fruit-characters/strawberry.mp4',
    tags: ['sweet', 'romantic', 'fresh', 'dessert'],
    animationStyles: ['bounce', 'spin', 'heart-burst', 'zoom'],
    bestFor: ['Dessert brands', 'Dating apps', 'Valentine campaigns', 'Kids products'],
  },
  {
    slug: 'avocado',
    name: 'Avocado',
    emoji: '🥑',
    color: '#22C55E',
    description: 'Chill avocado bro with sunglasses and a laid-back California vibe',
    personality: 'Cool, relaxed, trendy',
    image: '/images/fruit-characters/avocado.png',
    video: '/videos/fruit-characters/avocado.mp4',
    tags: ['healthy', 'trendy', 'millennial', 'organic'],
    animationStyles: ['slide', 'nod', 'chill-wave', 'zoom'],
    bestFor: ['Health food', 'Wellness brands', 'Millennial marketing', 'Organic products'],
  },
  {
    slug: 'lemon',
    name: 'Lemon',
    emoji: '🍋',
    color: '#FCD34D',
    description: 'Zesty lemon character with a bright sunny disposition and sparkling eyes',
    personality: 'Bright, refreshing, optimistic',
    image: '/images/fruit-characters/lemon.png',
    video: '/videos/fruit-characters/lemon.mp4',
    tags: ['fresh', 'citrus', 'summer', 'clean'],
    animationStyles: ['sparkle', 'bounce', 'squeeze', 'zoom'],
    bestFor: ['Cleaning products', 'Summer campaigns', 'Beverage brands', 'Fresh food'],
  },
  {
    slug: 'watermelon',
    name: 'Watermelon',
    emoji: '🍉',
    color: '#F87171',
    description: 'Juicy watermelon slice with a big smile and summer beach vibes',
    personality: 'Fun, summery, refreshing',
    image: '/images/fruit-characters/watermelon.png',
    video: '/videos/fruit-characters/watermelon.mp4',
    tags: ['summer', 'beach', 'party', 'refreshing'],
    animationStyles: ['splash', 'bounce', 'party', 'zoom'],
    bestFor: ['Summer products', 'Beach brands', 'Party goods', 'Refreshments'],
  },
  {
    slug: 'orange',
    name: 'Orange',
    emoji: '🍊',
    color: '#F97316',
    description: 'Vibrant orange character bursting with vitamin C energy and positivity',
    personality: 'Energetic, healthy, positive',
    image: '/images/fruit-characters/orange.png',
    video: '/videos/fruit-characters/orange.mp4',
    tags: ['vitamin', 'energy', 'morning', 'healthy'],
    animationStyles: ['burst', 'spin', 'glow', 'zoom'],
    bestFor: ['Juice brands', 'Morning products', 'Health supplements', 'Kids vitamins'],
  },
  {
    slug: 'blueberry',
    name: 'Blueberry',
    emoji: '🫐',
    color: '#6366F1',
    description: 'Tiny but mighty blueberry with a wise look and antioxidant superpowers',
    personality: 'Smart, powerful, concentrated',
    image: '/images/fruit-characters/blueberry.png',
    video: '/videos/fruit-characters/blueberry.mp4',
    tags: ['superfood', 'brain', 'antioxidant', 'premium'],
    animationStyles: ['float', 'multiply', 'glow', 'zoom'],
    bestFor: ['Superfood brands', 'Brain supplements', 'Premium health', 'Anti-aging'],
  },
  {
    slug: 'mango',
    name: 'Mango',
    emoji: '🥭',
    color: '#FBBF24',
    description: 'Exotic mango king with a golden crown and tropical paradise attitude',
    personality: 'Royal, exotic, luxurious',
    image: '/images/fruit-characters/mango.png',
    video: '/videos/fruit-characters/mango.mp4',
    tags: ['tropical', 'exotic', 'luxury', 'king'],
    animationStyles: ['royal-wave', 'shimmer', 'float', 'zoom'],
    bestFor: ['Tropical products', 'Premium brands', 'Exotic foods', 'Luxury items'],
  },
];

export function getFruitCharacter(slug: string): FruitCharacter | undefined {
  return fruitCharacters.find((char) => char.slug === slug);
}

export function getFruitCharactersByTag(tag: string): FruitCharacter[] {
  return fruitCharacters.filter((char) => char.tags.includes(tag));
}

export const fruitCharacterCategories = [
  { name: 'Tropical', tag: 'tropical', emoji: '🌴' },
  { name: 'Sweet', tag: 'sweet', emoji: '🍬' },
  { name: 'Healthy', tag: 'healthy', emoji: '💪' },
  { name: 'Summer', tag: 'summer', emoji: '☀️' },
];
