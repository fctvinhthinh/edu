export interface Country {
  id: string;
  slug: string;
  name: string;
  flag: string;
  image: string;
  cost: string;
  duration: string;
  description: string;
  partTimeWage: string;
  topCities: string[];
  topUniversities: University[];
  conditions: string[];
  scholarships: string[];
  faqs: FAQ[];
  pros: string[];
}

export interface University {
  name: string;
  ranking?: string;
  location: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface Country {
  id: string;
  slug: string;
  name: string;
  flag: string;
  image: string;
  cost: string;
  duration: string;
  description: string;
  partTimeWage: string;
  topCities: string[];
  topUniversities: University[];
  conditions: string[];
  scholarships: string[];
  faqs: FAQ[];
  pros: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  university: string;
  avatar: string;
  rating: number;
  content: string;
  year: string;
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  publishedAt: string;
  tags: string[];
  readTime: number;
}

export interface Scholarship {
  id: string;
  title: string;
  country: string;
  value: string;
  deadline: string;
  level: string;
  conditions: string[];
  description: string;
  link: string;
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export interface Partner {
  name: string;
  logo: string;
  country: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
