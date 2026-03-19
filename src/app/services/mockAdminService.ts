import { 
  type PartnerProfile, 
  type CardNews, 
  type LeadershipMember,
  ADMIN_TYPES_LOADED 
} from '../types/AdminTypes';
console.log('Admin types loaded:', ADMIN_TYPES_LOADED);
import { newsPosts } from '../data/newsPosts';

const PARTNERS_KEY = 'kori_admin_partners';
const NEWS_KEY = 'kori_admin_news';
const LEADERSHIP_KEY = 'kori_admin_leadership';

export type PartnerLevel = 'gold' | 'blue' | 'green' | 'none';

// Initial data from TeamSection.tsx
const initialPartners: PartnerProfile[] = [
  {
    id: 'korea-partner',
    name: 'Lead Platform Engineer',
    nameKo: '리드 플랫폼 엔지니어',
    country: 'General',
    countryKo: '대한민국',
    email: '',
    image: 'partner-avatar',
    badge: 'gold',
    desc: 'Leads technical strategy and platform architecture, ensuring scalability and infrastructure resilience across the entire ecosystem.',
    descKo: '전체 생태계의 확장성과 인프라 복원력을 보장하기 위해 기술 전략 및 플랫폼 아키텍처를 총괄합니다.',
    socials: {
      linkedin: 'https://www.linkedin.com/',
      twitter: 'https://x.com/thatguyofweb3',
    },
    order: 0,
    isVisible: true,
  },
  {
    id: 'joel-partner',
    name: 'Nigerian Leader',
    nameKo: '나이지리아 리더',
    country: 'Joel',
    countryKo: '나이지리아',
    email: '',
    image: 'partner-joel',
    badge: 'gold',
    desc: 'Expands regional visibility and localized partner communication in Nigeria.',
    descKo: '나이지리아 지역 내 가시성과 현지 파트너 커뮤니케이션 확대를 담당합니다.',
    socials: {
      twitter: 'https://x.com/Joelonchain',
    },
    order: 1,
    isVisible: true,
  },
  {
    id: 'eben-partner',
    name: 'Nigerian Partner',
    nameKo: '에벤',
    country: 'Eben',
    countryKo: '나이지리아',
    email: '',
    image: 'partner-eben',
    badge: 'blue',
    desc: 'Regional partner supporting community growth and engagement in Nigeria.',
    descKo: '나이지리아 지역의 커뮤니티 성장과 참여를 지원하는 지역 파트너입니다.',
    socials: {
      twitter: 'https://x.com/samuel_ebenz',
    },
    order: 2,
    isVisible: true,
  },
  {
    id: 'judge-partner',
    name: 'Nigerian Partner',
    nameKo: '나이지리아 파트너',
    country: 'Giant Judge',
    countryKo: '나이지리아',
    email: '',
    image: 'partner-judge',
    badge: 'blue',
    desc: 'Strategic partner focusing on ecosystem expansion and regional support.',
    descKo: '생태계 확장과 지역 지원에 집중하는 전략적 파트너입니다.',
    socials: {
      twitter: 'https://x.com/itlovve',
    },
    order: 3,
    isVisible: true,
  },
  {
    id: 'hypr-partner',
    name: 'Nigerian Partner',
    nameKo: '나이지리아 파트너',
    country: 'Hypr',
    countryKo: '나이지리아',
    email: '',
    image: 'partner-hypr',
    badge: 'green',
    desc: 'Regional partner supporting community growth and engagement in Nigeria.',
    descKo: '나이지리아 지역의 커뮤니티 성장과 참여를 지원하는 지역 파트너입니다.',
    socials: {
      twitter: 'https://x.com/HYPROFWEB5',
    },
    order: 4,
    isVisible: true,
  },
  {
    id: 'georgi-partner',
    name: 'Kyrgyzstan Partner',
    nameKo: '키르기스스탄 파트너',
    country: 'Mr. Georgi Cooper',
    countryKo: '키르기스스탄',
    email: '',
    image: null,
    badge: 'none',
    desc: 'Strategic partner supporting project communication, international positioning, and regional community expansion in Kyrgyzstan.',
    descKo: '키르기스스탄 지역의 프로젝트 커뮤니케이션, 국제적 포지셔닝 및 지역 커뮤니티 확장을 지원하는 전략적 파트너입니다.',
    socials: {
      twitter: 'https://x.com/georgicoper',
    },
    order: 5,
    isVisible: true,
  },
  {
    id: 'us-partner',
    name: 'US Digital Outreach Partner',
    nameKo: '미국 디지털 아웃리치 파트너',
    country: 'United States',
    countryKo: '미국',
    email: 'partnership@korion.io',
    image: null,
    badge: 'none',
    desc: 'Supports wider international exposure through digital channels and partner outreach.',
    descKo: '디지털 채널과 파트너 아웃리치를 통해 국제적 노출 확대를 지원합니다.',
    socials: {
      email: 'partnership@korion.io',
      linkedin: 'https://www.linkedin.com/',
      instagram: 'https://www.instagram.com/',
    },
    order: 6,
    isVisible: true,
  },
  {
    id: 'europe-partner',
    name: 'Europe Network Partner',
    nameKo: '유럽 네트워크 파트너',
    country: 'Europe',
    countryKo: '유럽권',
    email: 'partnership@korion.io',
    image: null,
    badge: 'none',
    desc: 'Contributes to strategic communication and regional project positioning.',
    descKo: '전략 커뮤니케이션과 지역 내 프로젝트 포지셔닝에 기여합니다.',
    socials: {
      email: 'partnership@korion.io',
      linkedin: 'https://www.linkedin.com/',
      instagram: 'https://www.instagram.com/',
    },
    order: 7,
    isVisible: true,
  },
  {
    id: 'global-ambassador',
    name: 'Global Ambassador Partner',
    nameKo: '글로벌 앰배서더 파트너',
    country: 'Global',
    countryKo: '글로벌',
    email: 'partnership@korion.io',
    image: null,
    badge: 'none',
    desc: 'Helps maintain broader project visibility across multiple communities and channels.',
    descKo: '여러 커뮤니티와 채널에서 프로젝트의 전반적인 가시성을 유지하고 확대합니다.',
    socials: {
      email: 'partnership@korion.io',
      linkedin: 'https://www.linkedin.com/',
      instagram: 'https://www.instagram.com/',
    },
    order: 8,
    isVisible: true,
  },
  {
    id: 'ecosystem-promotion',
    name: 'Ecosystem Promotion Partner',
    nameKo: '생태계 홍보 파트너',
    country: 'Multi-Region',
    countryKo: '다중 권역',
    email: 'partnership@korion.io',
    image: null,
    badge: 'none',
    desc: 'Supports ecosystem messaging, campaign spread, and coordinated communication.',
    descKo: '생태계 메시지 전달, 캠페인 확산, 협업형 커뮤니케이션을 지원합니다.',
    socials: {
      email: 'partnership@korion.io',
      linkedin: 'https://www.linkedin.com/',
      instagram: 'https://www.instagram.com/',
    },
    order: 9,
    isVisible: true,
  },
];

// Mapping existing newsPosts to CardNews type
const initialNews: CardNews[] = newsPosts.map((post, index) => ({
  id: post.id,
  slug: post.slug,
  title: post.titleEn,
  titleKo: post.titleKo,
  summary: post.summaryEn,
  summaryKo: post.summaryKo,
  content: post.contentEn,
  contentKo: post.contentKo,
  thumbnail: post.thumbnail || null,
  category: post.category,
  featured: post.featured || false,
  pinned: post.pinned || false,
  isVisible: true,
  publishedAt: post.publishedAt,
  order: index,
  tags: post.tags || [],
}));

class MockAdminService {
  private getStorage<T>(key: string, defaultValue: T): T {
    const data = localStorage.getItem(key);
    if (!data) return defaultValue;
    try {
      return JSON.parse(data) as T;
    } catch {
      return defaultValue;
    }
  }

  private setStorage<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // --- Partners ---
  getPartners(): PartnerProfile[] {
    return this.getStorage<PartnerProfile[]>(PARTNERS_KEY, initialPartners).sort((a, b) => a.order - b.order);
  }

  savePartner(partner: PartnerProfile): void {
    const partners = this.getPartners();
    const index = partners.findIndex((p) => p.id === partner.id);
    if (index >= 0) {
      partners[index] = partner;
    } else {
      partners.push(partner);
    }
    this.setStorage(PARTNERS_KEY, partners);
  }

  deletePartner(id: string): void {
    const partners = this.getPartners().filter((p) => p.id !== id);
    this.setStorage(PARTNERS_KEY, partners);
  }

  reorderPartners(partnerIds: string[]): void {
    const partners = this.getPartners();
    const reordered = partnerIds.map((id, index) => {
      const p = partners.find((p) => p.id === id);
      if (p) return { ...p, order: index };
      return null;
    }).filter(Boolean) as PartnerProfile[];
    this.setStorage(PARTNERS_KEY, reordered);
  }

  // --- News ---
  getNews(): CardNews[] {
    return this.getStorage<CardNews[]>(NEWS_KEY, initialNews).sort((a, b) => a.order - b.order);
  }

  saveNews(news: CardNews): void {
    const allNews = this.getNews();
    const index = allNews.findIndex((n) => n.id === news.id);
    if (index >= 0) {
      allNews[index] = news;
    } else {
      allNews.push(news);
    }
    this.setStorage(NEWS_KEY, allNews);
  }

  deleteNews(id: string): void {
    const allNews = this.getNews().filter((n) => n.id !== id);
    this.setStorage(NEWS_KEY, allNews);
  }

  reorderNews(newsIds: string[]): void {
    const allNews = this.getNews();
    const reordered = newsIds.map((id, index) => {
      const n = allNews.find((n) => n.id === id);
      if (n) return { ...n, order: index };
      return null;
    }).filter(Boolean) as CardNews[];
    this.setStorage(NEWS_KEY, reordered);
  }

  // Leadership
  getLeadership(): LeadershipMember[] {
    const data = this.getStorage<LeadershipMember[]>(LEADERSHIP_KEY, []);
    
    const initial: LeadershipMember[] = [
      {
        id: 'l-1',
        name: 'JANG MUNSU',
        nameKo: '장문수',
        role: 'CEO & Founder',
        roleKo: '대표이사',
        summary: 'Visionary leader with expertise in blockchain and business strategy.',
        summaryKo: '블록체인 및 비즈니스 전략 분야의 전문성을 갖춘 비전 있는 리더입니다.',
        bio: 'Mr. Jang leads KORION with a focus on long-term sustainability and global ecosystem growth through strategic innovation.',
        bioKo: '장문수 대표는 전략적 혁신을 통해 KORION의 장기적 지속 가능성과 글로벌 생태계 성장을 주도하고 있습니다.',
        highlights: ['Blockchain Strategy', 'Business Growth', 'Global Networking'],
        highlightsKo: ['블록체인 전략', '비즈니스 성장', '글로벌 네트워킹'],
        image: 'jang',
        linkedin: 'https://linkedin.com',
        twitter: 'https://x.com',
        instagram: 'https://instagram.com',
        order: 0,
        isVisible: true
      },
      {
        id: 'l-2',
        name: 'SEO SANGUK',
        nameKo: '서상욱',
        role: 'CTO',
        roleKo: '기술총괄',
        summary: 'Tech innovator leading platform architecture and R&D.',
        summaryKo: '플랫폼 아키텍처 및 R&D를 총괄하는 기술 혁신가입니다.',
        bio: 'Expert in infrastructure scalability and blockchain R&D, ensuring a robust technical foundation for all KORION platforms.',
        bioKo: '인프라 확장성과 블록체인 R&D 전문가로서, KORION의 모든 플랫폼에 대한 견고한 기술 기반을 보장합니다.',
        highlights: ['Infrastructure', 'R&D', 'Technical Innovation'],
        highlightsKo: ['인프라', '연구개발', '기술 혁신'],
        image: 'seo',
        linkedin: 'https://linkedin.com',
        twitter: 'https://x.com',
        order: 1,
        isVisible: true
      }
    ];

    if (data.length === 0) {
      this.setStorage(LEADERSHIP_KEY, initial);
      return initial;
    }

    // Merge existing data with initial to ensure new fields are present
    return data.map(m => {
      const init = initial.find(i => i.id === m.id);
      return {
        ...init, // Start with initial details if same ID
        ...m,    // Overwrite with user edits from localStorage
        // But ensure lists and strings aren't null if they should be empty
        highlights: m.highlights || init?.highlights || [],
        highlightsKo: m.highlightsKo || init?.highlightsKo || [],
        summary: m.summary || init?.summary || '',
        summaryKo: m.summaryKo || init?.summaryKo || '',
        bio: m.bio || init?.bio || '',
        bioKo: m.bioKo || init?.bioKo || '',
      };
    });
  }

  saveLeadershipMember(member: LeadershipMember): void {
    const all = this.getLeadership();
    const index = all.findIndex((m) => m.id === member.id);
    if (index !== -1) {
      all[index] = member;
    } else {
      all.push(member);
    }
    this.setStorage(LEADERSHIP_KEY, all);
  }

  deleteLeadershipMember(id: string): void {
    const all = this.getLeadership().filter((m) => m.id !== id);
    this.setStorage(LEADERSHIP_KEY, all);
  }
}

export const mockAdminService = new MockAdminService();
