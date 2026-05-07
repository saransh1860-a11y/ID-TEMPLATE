export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  details: {
    style: string;
    planning: string;
    materials: string;
    timeline: string;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'The Obsidian Suite',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    description: 'A sophisticated executive workspace designed for peak performance and visual prestige.',
    details: {
      style: 'Dark Modernism',
      planning: 'Open-concept with private acoustics',
      materials: 'Walnut, Smoked Glass, Brushed Aluminum',
      timeline: '4 Months'
    }
  },
  {
    id: '2',
    title: 'Aurelia Villa',
    category: 'Luxury Villa',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
    description: 'A sprawling estate that blends Mediterranean warmth with razor-sharp modern lines.',
    details: {
      style: 'Contemporary Chic',
      planning: 'Zoned living for large families',
      materials: 'Travertine, White Oak, Silk',
      timeline: '12 Months'
    }
  },
  {
    id: '3',
    title: 'Lumina Penthouse',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=1200',
    description: 'An sky-high sanctuary emphasizing light, shadow, and panoramic views.',
    details: {
      style: 'Minimalist Luxury',
      planning: 'Flow-through layout',
      materials: 'Calacatta Marble, Polished Concrete',
      timeline: '6 Months'
    }
  },
  {
    id: '4',
    title: 'Velvet Horizon Lounge',
    category: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1574092167195-23428d02951f?auto=format&fit=crop&q=80&w=1200',
    description: 'A rich, tactile sensory experience designed for late-night conversations.',
    details: {
      style: 'Neo-Antique',
      planning: 'Intimate modular seating',
      materials: 'Velvet, Brass, Amber Lighting',
      timeline: '5 Months'
    }
  }
];

export const SERVICES: Service[] = [
  {
    id: 'interior',
    title: 'Interior Design',
    description: 'Bespoke end-to-end design solutions that reflect your personal legacy.',
    icon: 'Layout'
  },
  {
    id: 'kitchen',
    title: 'Modular Kitchen',
    description: 'Precision-engineered culinary spaces that balance form and function.',
    icon: 'ChefHat'
  },
  {
    id: 'planning',
    title: 'Space Planning',
    description: 'Architectural optimization to maximize the potential of every square inch.',
    icon: 'Maximize'
  },
  {
    id: 'furniture',
    title: 'Furniture & Decor',
    description: 'Curated collections of global artisanal pieces and custom-made millwork.',
    icon: 'Armchair'
  },
  {
    id: 'commercial',
    title: 'Commercial Interiors',
    description: 'Corporate and retail spaces designed to enhance brand identity and productivity.',
    icon: 'Building2'
  }
];
