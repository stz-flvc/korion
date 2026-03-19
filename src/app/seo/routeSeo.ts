import { newsPosts } from '../data/newsPosts';

type Language = 'EN' | 'KR';

type SeoEntry = {
  title: string;
  description: string;
  canonicalPath: string;
  robots?: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
};

const defaultSeo: SeoEntry = {
  title: 'KORION',
  description:
    'Official KORION website covering wallet infrastructure, ecosystem growth, payment technology, and platform updates.',
  canonicalPath: '/',
};

const staticSeo: Record<string, SeoEntry> = {
  '/': {
    title: 'KORION Digital Asset Ecosystem',
    description:
      'Explore KORION wallet infrastructure, payment technology, ecosystem strategy, and latest official platform updates.',
    canonicalPath: '/',
  },
  '/ecosystem': {
    title: 'KORION Ecosystem',
    description:
      'Discover the KORION ecosystem structure, real-world utility strategy, and expansion roadmap.',
    canonicalPath: '/ecosystem',
  },
  '/technology': {
    title: 'KORION Technology',
    description:
      'Review KORION payment technology, wallet infrastructure, and product architecture.',
    canonicalPath: '/technology',
  },
  '/korionpay': {
    title: 'KORION Pay',
    description:
      'Learn about KORION Pay architecture, payment flow direction, and real-use infrastructure.',
    canonicalPath: '/korionpay',
  },
  '/about': {
    title: 'About KORION',
    description:
      'Read the KORION mission, operating direction, and long-term platform vision.',
    canonicalPath: '/about',
  },
  '/partner': {
    title: 'KORION Partner',
    description:
      'Apply for partnerships, team collaboration, business proposals, and technical integration with KORION.',
    canonicalPath: '/partner',
  },
  '/Partner': {
    title: 'KORION Partner',
    description:
      'Apply for partnerships, team collaboration, business proposals, and technical integration with KORION.',
    canonicalPath: '/partner',
  },
  '/foundation': {
    title: 'KORION Foundation',
    description:
      'Overview of the KORION foundation, governance direction, and ecosystem stewardship.',
    canonicalPath: '/foundation',
  },
  '/treasury': {
    title: 'KORION Treasury',
    description:
      'Review treasury direction, reserve strategy, and operational stability principles for KORION.',
    canonicalPath: '/treasury',
  },
  '/policy': {
    title: 'KORION Policy',
    description:
      'Official KORION policy, governance standards, risk controls, and user protection principles.',
    canonicalPath: '/policy',
  },
  '/smart-contract': {
    title: 'KORION Smart Contract',
    description:
      'Read KORION smart contract information, token structure, and technical references.',
    canonicalPath: '/smart-contract',
  },
  '/SmartContract': {
    title: 'KORION Smart Contract',
    description:
      'Read KORION smart contract information, token structure, and technical references.',
    canonicalPath: '/smart-contract',
  },
  '/news': {
    title: 'KORION News',
    description:
      'Official KORION announcements, update notes, ecosystem progress, and platform news.',
    canonicalPath: '/news',
  },
  '/tokenomics': {
    title: 'KORION Tokenomics',
    description:
      'Review token utility, issuance structure, and ecosystem tokenomics for KORION.',
    canonicalPath: '/tokenomics',
  },
  '/roadmap': {
    title: 'KORION Roadmap',
    description:
      'Check the KORION roadmap, expansion priorities, and platform delivery direction.',
    canonicalPath: '/roadmap',
  },
  '/support': {
    title: 'KORION Support',
    description:
      'Find KORION support information, user guidance, and service help channels.',
    canonicalPath: '/support',
  },
  '/team': {
    title: 'KORION Team',
    description:
      'Meet the KORION team and leadership behind the ecosystem and product execution.',
    canonicalPath: '/team',
  },
  '/download': {
    title: 'Download KORION',
    description:
      'Download official KORION resources and app packages from the official website.',
    canonicalPath: '/download',
  },
  '/foxyya': {
    title: 'Foxyya by KORION',
    description:
      'Explore Foxyya services, product direction, and KORION ecosystem utility expansion.',
    canonicalPath: '/foxyya',
  },
  '/mining': {
    title: 'KORION Mining',
    description:
      'Learn the KORION mining concept, participation direction, and ecosystem positioning.',
    canonicalPath: '/mining',
  },
  '/media-kit': {
    title: 'KORION Media Kit',
    description:
      'Access KORION media resources, official brand assets, and communication materials.',
    canonicalPath: '/media-kit',
  },
  '/faq': {
    title: 'KORION FAQ',
    description:
      'Frequently asked questions about KORION services, products, policies, and operations.',
    canonicalPath: '/faq',
  },
  '/contact': {
    title: 'Contact KORION',
    description:
      'Official KORION contact channels for business, support, partnership, and inquiries.',
    canonicalPath: '/contact',
  },
  '/explorer': {
    title: 'KORION Explorer',
    description:
      'Access the KORION explorer and review on-chain or ecosystem reference information.',
    canonicalPath: '/explorer',
  },
  '/listing-info': {
    title: 'KORION Listing Info',
    description:
      'Listing information, project references, and official details for KORION partners and exchanges.',
    canonicalPath: '/listing-info',
  },
  '/security': {
    title: 'KORION Security',
    description:
      'Security operations, asset protection principles, and platform trust standards for KORION.',
    canonicalPath: '/security',
  },
  '/whitepaper': {
    title: 'KORION Whitepaper',
    description:
      'Read the official KORION whitepaper covering technology, token model, and ecosystem direction.',
    canonicalPath: '/whitepaper',
  },
  '/developers': {
    title: 'KORION Developers',
    description:
      'KORION developer portal with APIs, SDK references, authentication flow, and partner integration guides.',
    canonicalPath: '/developers',
  },
};

function normalizePathname(pathname: string) {
  if (!pathname || pathname === '/') {
    return '/';
  }

  return pathname.replace(/\/+$/, '');
}

function toIsoDate(date: string) {
  return `${date}T00:00:00+09:00`;
}

export function getSeoForPath(pathname: string, language: Language): SeoEntry {
  const normalizedPath = normalizePathname(pathname);

  if (normalizedPath.startsWith('/news/')) {
    const slug = normalizedPath.replace('/news/', '');
    const post = newsPosts.find((item) => item.slug === slug);

    if (post) {
      return {
        title: language === 'KR' ? post.titleKo : post.titleEn,
        description: language === 'KR' ? post.summaryKo : post.summaryEn,
        canonicalPath: `/news/${post.slug}`,
        ogType: 'article',
        publishedTime: toIsoDate(post.publishedAt),
        modifiedTime: toIsoDate(post.updatedAt || post.publishedAt),
      };
    }
  }

  if (normalizedPath.startsWith('/developers/')) {
    const suffix = normalizedPath.replace('/developers/', '');
    const titleSuffix = suffix
      .split('-')
      .map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1))
      .join(' ');

    return {
      title: `KORION Developers ${titleSuffix}`,
      description:
        'Developer documentation for KORION APIs, SDK workflows, authentication, rate limits, and integration guidance.',
      canonicalPath: normalizedPath,
    };
  }

  return staticSeo[normalizedPath] || {
    ...defaultSeo,
    canonicalPath: normalizedPath,
  };
}
