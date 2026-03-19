export type PartnerLevel = 'gold' | 'blue' | 'green' | 'none';

export type PartnerSocialLinks = {
  email?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  custom?: { label: string; url: string }[];
};

export type PartnerProfile = {
  id: string;
  name: string;
  nameKo: string;
  country: string;
  countryKo: string;
  email: string;
  image: string | null;
  badge: PartnerLevel;
  desc: string;
  descKo: string;
  socials: PartnerSocialLinks;
  order: number;
  isVisible: boolean;
};

export type NewsCategory = 'notice' | 'update' | 'event' | 'media';

export type CardNews = {
  id: string;
  slug: string;
  title: string;
  titleKo: string;
  summary: string;
  summaryKo: string;
  content: string[];
  contentKo: string[];
  thumbnail: string | null;
  category: NewsCategory;
  featured: boolean;
  pinned: boolean;
  isVisible: boolean;
  publishedAt: string;
  order: number;
  tags: string[];
};

export type LeadershipMember = {
  id: string;
  name: string;
  nameKo: string;
  role: string;
  roleKo: string;
  summary: string;
  summaryKo: string;
  bio: string;
  bioKo: string;
  highlights: string[];
  highlightsKo: string[];
  image: string | null;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
  email?: string;
  order: number;
  isVisible: boolean;
};

export const ADMIN_TYPES_LOADED = true;
