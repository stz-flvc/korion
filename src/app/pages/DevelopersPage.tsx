import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';
import {
  ArrowRight,
  BookOpen,
  Building2,
  ChevronDown,
  ChevronRight,
  Code2,
  CreditCard,
  Cpu,
  Database,
  ExternalLink,
  FileCode2,
  Globe,
  KeyRound,
  Layers3,
  LifeBuoy,
  Landmark,
  Network,
  ReceiptText,
  ShieldCheck,
  Store,
  Wallet,
  Webhook,
  Workflow,
  Wrench,
  Boxes,
  Search,
  X,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './DevelopersPage.css';

type DocSection = {
  id: string;
  titleEn: string;
  titleKo: string;
  items: {
    id: string;
    labelEn: string;
    labelKo: string;
  }[];
};

type ApiCard = {
  icon: React.ComponentType<{ size?: number }>;
  key: string;
  titleEn: string;
  titleKo: string;
  descEn: string;
  descKo: string;
  routes: string[];
};

type SdkCard = {
  id: string;
  icon: React.ComponentType<{ size?: number }>;
  titleEn: string;
  titleKo: string;
  descEn: string;
  descKo: string;
};

type PreregCard = {
  icon: React.ComponentType<{ size?: number }>;
  titleEn: string;
  titleKo: string;
  descEn: string;
  descKo: string;
};

const docSections: DocSection[] = [
  {
    id: 'start',
    titleEn: 'Getting Started',
    titleKo: '시작하기',
    items: [
      { id: 'overview', labelEn: 'Overview', labelKo: '개요' },
      { id: 'platform', labelEn: 'Platform Structure', labelKo: '플랫폼 구조' },
      { id: 'quickstart', labelEn: 'Quick Start', labelKo: '빠른 시작' },
    ],
  },
  {
    id: 'api',
    titleEn: 'API Suite',
    titleKo: 'API 구성',
    items: [
      { id: 'wallet-api', labelEn: 'Wallet API', labelKo: 'Wallet API' },
      { id: 'payment-api', labelEn: 'Payment API', labelKo: 'Payment API' },
      { id: 'deposit-api', labelEn: 'Deposit API', labelKo: 'Deposit API' },
      { id: 'withdrawal-api', labelEn: 'Withdrawal API', labelKo: 'Withdrawal API' },
      { id: 'webhook-api', labelEn: 'Webhook API', labelKo: 'Webhook API' },
      { id: 'partner-api', labelEn: 'Partner API', labelKo: 'Partner API' },
    ],
  },
  {
    id: 'sdk',
    titleEn: 'SDK & Tools',
    titleKo: 'SDK 및 도구',
    items: [
      { id: 'javascript-sdk', labelEn: 'JavaScript SDK', labelKo: 'JavaScript SDK' },
      { id: 'typescript-sdk', labelEn: 'TypeScript SDK', labelKo: 'TypeScript SDK' },
      { id: 'backend-examples', labelEn: 'Backend Examples', labelKo: '백엔드 예제' },
      { id: 'sandbox', labelEn: 'Sandbox', labelKo: '샌드박스' },
    ],
  },
  {
    id: 'network',
    titleEn: 'Network & Contract',
    titleKo: '네트워크 및 컨트랙트',
    items: [
      { id: 'tron-network', labelEn: 'TRON / TRC20', labelKo: 'TRON / TRC20' },
      { id: 'contract-info', labelEn: 'Contract Information', labelKo: '컨트랙트 정보' },
      { id: 'token-spec', labelEn: 'Token Specification', labelKo: '토큰 스펙' },
    ],
  },
  {
    id: 'resources',
    titleEn: 'Developer Resources',
    titleKo: '개발 리소스',
    items: [
      { id: 'developer-resources', labelEn: 'Resource Overview', labelKo: '리소스 개요' },
      { id: 'auth-guide', labelEn: 'Authentication Guide', labelKo: '인증 가이드' },
      { id: 'error-guide', labelEn: 'Error Codes', labelKo: '오류 코드' },
      { id: 'webhook-guide', labelEn: 'Webhook Validation', labelKo: '웹훅 검증' },
      { id: 'checklist-guide', labelEn: 'Partner Checklist', labelKo: '파트너 체크리스트' },
    ],
  },
  {
    id: 'partner',
    titleEn: 'Partner Program',
    titleKo: '파트너 프로그램',
    items: [
      { id: 'pre-register', labelEn: 'Pre-registration', labelKo: '사전등록' },
      { id: 'merchant', labelEn: 'Merchant Integration', labelKo: '가맹점 연동' },
      { id: 'exchange', labelEn: 'Exchange / Wallet', labelKo: '거래소 / 지갑' },
    ],
  },
];

const apiCards: ApiCard[] = [
  {
    icon: Wallet,
    key: 'wallet',
    titleEn: 'Wallet API',
    titleKo: 'Wallet API',
    descEn: 'Balance queries, wallet state visibility, address retrieval, and asset summaries.',
    descKo: '잔액 조회, 지갑 상태 가시성, 주소 조회, 자산 요약 정보를 제공합니다.',
    routes: ['GET /v1/wallet/balance', 'GET /v1/wallet/address', 'GET /v1/wallet/assets'],
  },
  {
    icon: CreditCard,
    key: 'payment',
    titleEn: 'Payment API',
    titleKo: 'Payment API',
    descEn: 'Merchant payment creation, order verification, settlement status, and checkout lifecycle.',
    descKo: '가맹점 결제 생성, 주문 검증, 정산 상태, 체크아웃 라이프사이클을 제공합니다.',
    routes: ['POST /v1/payments', 'GET /v1/payments/{id}', 'GET /v1/payments/settlements'],
  },
  {
    icon: Database,
    key: 'deposit',
    titleEn: 'Deposit API',
    titleKo: 'Deposit API',
    descEn: 'Deposit history, confirmation progress, network detection, and inbound transaction tracking.',
    descKo: '입금 내역, 확인 진행 상태, 네트워크 감지, 입금 트랜잭션 추적 기능을 제공합니다.',
    routes: ['GET /v1/deposits', 'GET /v1/deposits/{id}', 'GET /v1/deposits/status'],
  },
  {
    icon: ReceiptText,
    key: 'withdrawal',
    titleEn: 'Withdrawal API',
    titleKo: 'Withdrawal API',
    descEn: 'Withdrawal request lifecycle, approval state, broadcast status, and completion tracking.',
    descKo: '출금 요청 라이프사이클, 승인 상태, 브로드캐스트 상태, 완료 추적 기능을 제공합니다.',
    routes: ['POST /v1/withdrawals', 'GET /v1/withdrawals/{id}', 'GET /v1/withdrawals/status'],
  },
  {
    icon: Webhook,
    key: 'webhook',
    titleEn: 'Webhook API',
    titleKo: 'Webhook API',
    descEn: 'Event-driven callbacks for payment, deposit, withdrawal, and settlement state changes.',
    descKo: '결제, 입금, 출금, 정산 상태 변경을 위한 이벤트 기반 콜백 구조를 제공합니다.',
    routes: ['POST /v1/webhooks/verify', 'GET /v1/webhooks/events', 'POST /v1/webhooks/test'],
  },
  {
    icon: Building2,
    key: 'partner',
    titleEn: 'Partner API',
    titleKo: 'Partner API',
    descEn: 'Integration endpoints and onboarding data surfaces for exchanges, wallets, and merchants.',
    descKo: '거래소, 지갑, 가맹점 연동을 위한 엔드포인트와 온보딩 데이터 구조를 제공합니다.',
    routes: ['GET /v1/partners/profile', 'POST /v1/partners/apply', 'GET /v1/partners/status'],
  },
];

const sdkCards: SdkCard[] = [
  {
    id: 'javascript-sdk',
    icon: Code2,
    titleEn: 'JavaScript SDK',
    titleKo: 'JavaScript SDK',
    descEn: 'Frontend-friendly client package for wallet lookup, balance queries, payment creation, and lightweight service integration.',
    descKo: '지갑 조회, 잔액 확인, 결제 생성, 프론트엔드 중심 연동에 적합한 클라이언트 패키지입니다.',
  },
  {
    id: 'typescript-sdk',
    icon: Cpu,
    titleEn: 'TypeScript SDK',
    titleKo: 'TypeScript SDK',
    descEn: 'Strongly typed SDK for production-grade integration with typed requests, responses, and safer application development.',
    descKo: '타입이 명확한 요청과 응답 구조를 제공하여 안정적인 서비스 개발에 적합한 SDK입니다.',
  },
  {
    id: 'backend-examples',
    icon: Wrench,
    titleEn: 'Backend Examples',
    titleKo: '백엔드 예제',
    descEn: 'Reference implementations for authentication, order verification, webhook validation, and deposit or withdrawal processing.',
    descKo: '인증, 주문 검증, 웹훅 검증, 입출금 처리 흐름을 이해할 수 있는 서버 예제를 제공합니다.',
  },
  {
    id: 'sandbox',
    icon: ShieldCheck,
    titleEn: 'Sandbox',
    titleKo: '샌드박스',
    descEn: 'A safe test environment for validating API requests, webhook events, and integration behavior before production launch.',
    descKo: '실서비스 적용 전 API 요청, 웹훅 이벤트, 전체 연동 동작을 검증할 수 있는 테스트 환경입니다.',
  },
];

const quickLinks = [
  { icon: BookOpen, titleEn: 'Guides', titleKo: '가이드' },
  { icon: FileCode2, titleEn: 'API Reference', titleKo: 'API 레퍼런스' },
  { icon: Code2, titleEn: 'SDK', titleKo: 'SDK' },
  { icon: Layers3, titleEn: 'Changelog', titleKo: '변경 이력' },
];

const topCategories = [
  { icon: BookOpen, href: '#overview', titleEn: 'Getting Started', titleKo: '시작하기' },
  { icon: Boxes, href: '#api-suite', titleEn: 'API Suite', titleKo: 'API 구성' },
  { icon: Code2, href: '#sdk-tools', titleEn: 'SDK', titleKo: 'SDK' },
  { icon: Wallet, href: '#wallet-api', titleEn: 'Wallet', titleKo: '지갑' },
  { icon: CreditCard, href: '#payment-api', titleEn: 'Payments', titleKo: '결제' },
  { icon: Network, href: '#network-contract', titleEn: 'Network', titleKo: '네트워크' },
  { icon: Building2, href: '#preregistration', titleEn: 'Partners', titleKo: '파트너' },
  { icon: LifeBuoy, href: '#developer-resources', titleEn: 'Resources', titleKo: '리소스' },
];

const preregCards: PreregCard[] = [
  {
    icon: Code2,
    titleEn: 'Developer Pre-registration',
    titleKo: '개발자 사전등록',
    descEn: 'For builders who want early access to API documentation, sandbox credentials, and SDK previews.',
    descKo: 'API 문서, 샌드박스 인증정보, SDK 프리뷰를 먼저 받아보고 싶은 개발자를 위한 등록입니다.',
  },
  {
    icon: Store,
    titleEn: 'Merchant / Service Registration',
    titleKo: '가맹점 / 서비스 사전등록',
    descEn: 'For services planning to integrate KORION Pay, settlement flows, or branded wallet experiences.',
    descKo: 'KORION Pay, 정산 흐름, 브랜드 지갑 경험을 연동하려는 서비스 등록용입니다.',
  },
  {
    icon: Landmark,
    titleEn: 'Exchange / Wallet Partner Registration',
    titleKo: '거래소 / 지갑 파트너 사전등록',
    descEn: 'For exchanges, custodians, and wallet operators preparing network-level or asset-level integration.',
    descKo: '네트워크 또는 자산 단위 연동을 준비하는 거래소, 커스터디, 지갑 사업자를 위한 등록입니다.',
  },
];

function containsQuery(values: string[], query: string) {
  if (!query.trim()) return true;
  const lower = query.trim().toLowerCase();
  return values.some((value) => value.toLowerCase().includes(lower));
}

export function DevelopersPage() {
  const { language } = useLanguage();
  const { hash } = useLocation();
  const isKo = language === 'KR';

  const [openSections, setOpenSections] = useState<string[]>([
    'start',
    'api',
    'sdk',
    'resources',
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('overview');

  const tableOfContents = useMemo(
    () => [
      { id: 'overview', label: isKo ? '개요' : 'Overview' },
      { id: 'api-suite', label: isKo ? 'API 구성' : 'API Suite' },
      { id: 'sdk-tools', label: isKo ? 'SDK 및 도구' : 'SDK & Tools' },
      { id: 'network-contract', label: isKo ? '네트워크 및 컨트랙트' : 'Network & Contract' },
      { id: 'developer-resources', label: isKo ? '개발 리소스' : 'Developer Resources' },
      { id: 'preregistration', label: isKo ? '사전등록' : 'Pre-registration' },
    ],
    [isKo]
  );

  const toggleSection = (id: string) => {
    setOpenSections((prev) =>
      prev.includes(id) ? prev.filter((sectionId) => sectionId !== id) : [...prev, id]
    );
  };

  const filteredDocSections = useMemo(() => {
    return docSections
      .map((section) => {
        const filteredItems = section.items.filter((item) =>
          containsQuery(
            [section.titleEn, section.titleKo, item.labelEn, item.labelKo],
            searchQuery
          )
        );

        const sectionMatched = containsQuery([section.titleEn, section.titleKo], searchQuery);

        return {
          ...section,
          items: sectionMatched ? section.items : filteredItems,
        };
      })
      .filter((section) => section.items.length > 0 || !searchQuery.trim());
  }, [searchQuery]);

  const filteredApiCards = useMemo(() => {
    return apiCards.filter((card) =>
      containsQuery(
        [
          card.titleEn,
          card.titleKo,
          card.descEn,
          card.descKo,
          ...card.routes,
        ],
        searchQuery
      )
    );
  }, [searchQuery]);

  const filteredSdkCards = useMemo(() => {
    return sdkCards.filter((card) =>
      containsQuery([card.titleEn, card.titleKo, card.descEn, card.descKo], searchQuery)
    );
  }, [searchQuery]);

  const filteredPreregCards = useMemo(() => {
    return preregCards.filter((card) =>
      containsQuery([card.titleEn, card.titleKo, card.descEn, card.descKo], searchQuery)
    );
  }, [searchQuery]);

  const filteredToc = useMemo(() => {
    return tableOfContents.filter((item) => containsQuery([item.label], searchQuery));
  }, [tableOfContents, searchQuery]);

  const searchResultAnchors = useMemo(() => {
    const anchors: string[] = [];

    if (containsQuery(['overview', '개요', 'getting started', '시작하기'], searchQuery)) {
      anchors.push('overview');
    }
    if (filteredApiCards.length > 0 || containsQuery(['api', 'api suite', 'api 구성'], searchQuery)) {
      anchors.push('api-suite');
    }
    if (filteredSdkCards.length > 0 || containsQuery(['sdk', 'tools', '도구'], searchQuery)) {
      anchors.push('sdk-tools');
    }
    if (containsQuery(['network', 'contract', '네트워크', '컨트랙트'], searchQuery)) {
      anchors.push('network-contract');
    }
    if (
      containsQuery(['resources', 'developer resources', '개발 리소스'], searchQuery)
    ) {
      anchors.push('developer-resources');
    }
    if (
      filteredPreregCards.length > 0 ||
      containsQuery(['pre-registration', '사전등록', 'partners', '파트너'], searchQuery)
    ) {
      anchors.push('preregistration');
    }

    return Array.from(new Set(anchors));
  }, [searchQuery, filteredApiCards.length, filteredSdkCards.length, filteredPreregCards.length]);

  useEffect(() => {
    const currentHash = hash.replace('#', '');
    if (currentHash) {
      setActiveSection(currentHash);
    } else {
      setActiveSection('overview');
    }
  }, [hash]);


  const handleAnchorClick = (id: string) => {
    setActiveSection(id);
  };

  const handleSearchEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return;
    if (searchResultAnchors.length === 0) return;

    const target = document.getElementById(searchResultAnchors[0]);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="developers-docs-page">
      <section className="developers-docs-hero">
        <div className="developers-docs-page__container developers-docs-hero__inner">
          <motion.div
            className="developers-docs-hero__content"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="developers-docs-hero__eyebrow">
              <Globe size={14} />
              <span>{isKo ? 'KORION 문서 포털' : 'KORION Documentation Portal'}</span>
            </div>

            <h1>{isKo ? 'KORION Developer Hub' : 'KORION Developer Hub'}</h1>

            <p>
              {isKo
                ? '지갑, 결제, 입출금 상태 추적, 웹훅 이벤트, TRON 기반 자산 구조를 연동하기 위한 문서와 개발 자료를 한 곳에서 제공합니다. 서비스 개발자, 가맹점, 거래소, 지갑 파트너가 실제 연동 흐름을 빠르게 이해할 수 있도록 설계된 허브입니다.'
                : 'Access the guides, integration resources, and technical structure needed to work with KORION wallet, payment, webhook, deposit, withdrawal, and TRON-based asset flows.'}
            </p>

            <div className="developers-docs-hero__buttons">
              <a href="#overview" className="developers-docs-hero__primary">
                <BookOpen size={16} />
                <span>{isKo ? '문서 시작하기' : 'Get Started'}</span>
              </a>
              <Link to="/developers/api" className="developers-docs-hero__secondary">
                <Code2 size={16} />
                <span>{isKo ? 'API 보기' : 'API Reference'}</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="developers-docs-categories">
        <div className="developers-docs-page__container">
          <div className="developers-docs-categories__grid">
            {topCategories.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.titleEn} href={item.href} className="developers-docs-categories__card">
                  <div className="developers-docs-categories__icon">
                    <Icon size={18} />
                  </div>
                  <strong>{isKo ? item.titleKo : item.titleEn}</strong>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <div className="developers-docs-subnav">
        <div className="developers-docs-page__container developers-docs-subnav__inner">
          <div className="developers-docs-subnav__crumbs">
            <button type="button">{isKo ? '홈' : 'Home'}</button>
            <ChevronDown size={14} />
            <button type="button" className="is-active">
              {isKo ? '개발자' : 'Developers'}
            </button>
          </div>

          <div className="developers-docs-subnav__search">
            <Search size={16} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearchEnter}
              placeholder={isKo ? '문서 검색' : 'Search docs'}
            />
            {searchQuery ? (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label={isKo ? '검색어 지우기' : 'Clear search'}
              >
                <X size={14} />
              </button>
            ) : (
              <span>ENTER</span>
            )}
          </div>
        </div>
      </div>

      <section className="developers-docs-layout">
        <div className="developers-docs-page__container developers-docs-layout__grid">
          <aside className="developers-docs-sidebar">
            {filteredDocSections.length === 0 && searchQuery.trim() ? (
              <div className="developers-docs-sidebar__empty">
                {isKo ? '검색 결과가 없습니다.' : 'No matching documents found.'}
              </div>
            ) : (
              filteredDocSections.map((section) => {
                const isOpen = openSections.includes(section.id);
                return (
                  <div className="developers-docs-sidebar__group" key={section.id}>
                    <button
                      type="button"
                      className="developers-docs-sidebar__group-title"
                      onClick={() => toggleSection(section.id)}
                    >
                      <span>{isKo ? section.titleKo : section.titleEn}</span>
                      <ChevronRight className={isOpen ? 'is-open' : ''} size={15} />
                    </button>

                    {isOpen && (
                      <div className="developers-docs-sidebar__items">
                        {section.items.map((item, index) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          onClick={() => handleAnchorClick(item.id)}
                          className={activeSection === item.id ? 'is-current' : ''}
                        >
                          {isKo ? item.labelKo : item.labelEn}
                        </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </aside>

          <main className="developers-docs-main">
            <section id="overview" className="developers-docs-content-section">
              <h2>{isKo ? 'Getting Started' : 'Getting Started'}</h2>
              <div className="developers-docs-divider" />
              <p>
                {isKo
                  ? 'KORION Developers는 단순 소개 페이지가 아니라, 실제 연동 준비도를 보여주는 문서 포털입니다. 개발자는 API 구조를 빠르게 이해할 수 있어야 하고, 파트너는 어떤 범위까지 공개 자료가 준비되어 있는지 바로 판단할 수 있어야 합니다.'
                  : 'KORION Developers is designed as a documentation-first portal rather than a simple landing page.'}
              </p>
              <p>
                {isKo
                  ? '공개 문서는 Wallet, Payment, Deposit, Withdrawal, Webhook, Partner 영역으로 나뉘며, 각 영역은 실제 서비스 연동 흐름에 맞는 엔드포인트와 상태 모델을 중심으로 확장될 수 있습니다.'
                  : 'The public documentation is structured around multiple API surfaces rather than a single generic API.'}
              </p>

              <ul className="developers-docs-list">
                <li>{isKo ? '복수 API 구조를 전제로 한 문서 체계' : 'Documentation built around a multi-API architecture'}</li>
                <li>{isKo ? 'TRON / TRC20 네트워크 기반 공개 검증 정보' : 'TRON / TRC20 public verification surfaces'}</li>
                <li>{isKo ? '결제 및 정산 흐름을 포함한 서비스형 연동 구조' : 'Service-oriented payment and settlement integration flows'}</li>
              </ul>
            </section>

            <section id="platform" className="developers-docs-content-section">
              <h3>{isKo ? '플랫폼 구조' : 'Platform Structure'}</h3>
              <p>
                {isKo
                  ? 'KORION은 단일 기능형 토큰 프로젝트가 아니라, 지갑·결제·입출금·정산·파트너 연동이 이어지는 구조를 가집니다. 따라서 Developers 페이지도 하나의 API 설명으로 끝나지 않고, 역할별 문서 체계로 분리되는 것이 자연스럽습니다.'
                  : 'KORION is better represented as a layered platform than a single-token integration.'}
              </p>

              <div className="developers-docs-quickgrid">
                {quickLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div className="developers-docs-quickgrid__card" key={item.titleEn}>
                      <div className="developers-docs-quickgrid__icon">
                        <Icon size={18} />
                      </div>
                      <strong>{isKo ? item.titleKo : item.titleEn}</strong>
                    </div>
                  );
                })}
              </div>
            </section>

            <section id="quickstart" className="developers-docs-content-section">
              <h3>{isKo ? '빠른 시작' : 'Quick Start'}</h3>
              <p>
                {isKo
                  ? '문서 포털의 첫 단계에서는 API 개요, 인증 구조, 대표 응답 형식, 컨트랙트 주소, SDK 샘플 코드가 가장 먼저 보여져야 합니다. 이 다섯 가지가 갖춰지면 외부 개발자는 프로젝트의 기술 준비도를 바로 판단할 수 있습니다.'
                  : 'A strong quick-start experience begins with API overview, auth structure, representative responses, contract info, and SDK examples.'}
              </p>

              <div className="developers-docs-codeblock">
                <div className="developers-docs-codeblock__top">
                  <span />
                  <span />
                  <span />
                </div>
                <pre>{`import { createKorionClient } from '@korion/sdk';

const client = createKorionClient({
  apiKey: 'YOUR_API_KEY',
  secret: 'YOUR_SECRET',
  env: 'sandbox',
});

const balance = await client.wallet.getBalance();
const payment = await client.payments.create({
  orderId: 'ORDER-1001',
  amount: '2500.000000',
  asset: 'KORI',
});`}</pre>
              </div>
            </section>

            <section id="api-suite" className="developers-docs-content-section">
              <h2>{isKo ? 'API Suite' : 'API Suite'}</h2>
              <div className="developers-docs-divider" />
              <p>
                {isKo
                  ? 'KORION 공개 문서는 여러 API 영역으로 나누어지는 것이 자연스럽습니다. Wallet, Payment, Deposit, Withdrawal, Webhook, Partner API를 중심으로 문서 체계를 구성하면 확장성과 이해도가 모두 올라갑니다.'
                  : 'A multi-surface API suite is the natural structure for KORION.'}
              </p>

              <div className="developers-docs-api-grid">
                {filteredApiCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <article className="developers-docs-api-card" key={card.key} id={`${card.key}-api`}>
                      <div className="developers-docs-api-card__icon">
                        <Icon size={18} />
                      </div>
                      <h4>{isKo ? card.titleKo : card.titleEn}</h4>
                      <p>{isKo ? card.descKo : card.descEn}</p>

                      <div className="developers-docs-api-card__routes">
                        {card.routes.map((route) => (
                          <code key={route}>{route}</code>
                        ))}
                      </div>
                    </article>
                  );
                })}
              </div>

              {searchQuery.trim() && filteredApiCards.length === 0 && (
                <p className="developers-docs-search-empty">
                  {isKo ? '검색 조건에 맞는 API 카드가 없습니다.' : 'No API cards matched your search.'}
                </p>
              )}
            </section>

            <section id="sdk-tools" className="developers-docs-content-section">
              <h2>{isKo ? 'SDK & Tools' : 'SDK & Tools'}</h2>
              <div className="developers-docs-divider" />
              <p>
                {isKo
                  ? 'SDK는 JavaScript / TypeScript를 우선 공개하는 것이 좋고, 이후 백엔드 예제와 샌드박스 문서를 붙이는 구조가 이상적입니다. 프론트엔드와 서버 모두에서 빠르게 테스트할 수 있는 형태가 가장 신뢰를 줍니다.'
                  : 'Start with JavaScript and TypeScript SDKs, then expand toward backend examples and sandbox tooling.'}
              </p>

              <div className="developers-docs-feature-row">
                {filteredSdkCards.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div className="developers-docs-feature-card" id={item.id} key={item.id}>
                      <div className="developers-docs-feature-card__icon">
                        <Icon size={18} />
                      </div>
                      <strong>{isKo ? item.titleKo : item.titleEn}</strong>
                      <p>{isKo ? item.descKo : item.descEn}</p>
                    </div>
                  );
                })}
              </div>

              {searchQuery.trim() && filteredSdkCards.length === 0 && (
                <p className="developers-docs-search-empty">
                  {isKo ? '검색 조건에 맞는 SDK 항목이 없습니다.' : 'No SDK items matched your search.'}
                </p>
              )}
            </section>

            <section id="network-contract" className="developers-docs-content-section">
              <h2>{isKo ? 'Network & Contract' : 'Network & Contract'}</h2>
              <div className="developers-docs-divider" />
              <p id="tron-network">
                {isKo
                  ? 'KORION은 TRON 기반 TRC20 자산 구조를 사용하며, 공개 문서에는 네트워크, 토큰 표준, 컨트랙트 주소, 소수점, 익스플로러 검증 링크가 포함되는 것이 좋습니다.'
                  : 'KORION documentation should expose the network, token standard, contract address, decimals, and explorer reference.'}
              </p>

              <div className="developers-docs-contract-panel" id="contract-info">
                <div>
                  <span>{isKo ? '네트워크' : 'Network'}</span>
                  <strong>TRON</strong>
                </div>
                <div>
                  <span>{isKo ? '표준' : 'Standard'}</span>
                  <strong>TRC20</strong>
                </div>
                <div>
                  <span>{isKo ? '심볼' : 'Symbol'}</span>
                  <strong>KORI</strong>
                </div>
                <div id="token-spec">
                  <span>{isKo ? '소수점' : 'Decimals'}</span>
                  <strong>6</strong>
                </div>
                <div className="developers-docs-contract-panel__address">
                  <span>{isKo ? '컨트랙트 주소' : 'Contract Address'}</span>
                  <code>TBJZD8RwQ1JcQvEP9BTbPbgBCGxUjxSXnn</code>
                </div>
                <a
                  href="https://tronscan.org/#/token20/TBJZD8RwQ1JcQvEP9BTbPbgBCGxUjxSXnn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{isKo ? 'Tronscan에서 확인' : 'View on Tronscan'}</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </section>

            <section id="developer-resources" className="developers-docs-content-section">
              <h2>{isKo ? 'Developer Resources' : 'Developer Resources'}</h2>
              <div className="developers-docs-divider" />
              <p>
                {isKo
                  ? '개발자 포털 완성도를 높이기 위해서는 API 소개 외에도 인증, 오류 코드, 웹훅 검증, 샌드박스, 변경 이력, 파트너 체크리스트가 함께 제공되는 것이 좋습니다.'
                  : 'A strong developer portal should extend beyond API summaries to include authentication, error handling, webhook validation, sandbox onboarding, changelog history, and partner checklists.'}
              </p>

              <div className="developers-docs-recommendations">
                <Link to="/developers/authentication" id="auth-guide">
                  <KeyRound size={16} />
                  <span>{isKo ? '인증 가이드' : 'Authentication Guide'}</span>
                </Link>
                <Link to="/developers/errors" id="error-guide">
                  <Database size={16} />
                  <span>{isKo ? '오류 코드 문서' : 'Error Code Reference'}</span>
                </Link>
                <Link to="/developers/webhooks" id="webhook-guide">
                  <Webhook size={16} />
                  <span>{isKo ? '웹훅 검증 문서' : 'Webhook Validation Guide'}</span>
                </Link>
                <Link to="/developers/sandbox">
                  <Workflow size={16} />
                  <span>{isKo ? '샌드박스 발급 절차' : 'Sandbox Access Flow'}</span>
                </Link>
                <Link to="/developers/changelog">
                  <Layers3 size={16} />
                  <span>{isKo ? '변경 이력' : 'Change Log'}</span>
                </Link>
                <Link to="/developers/partners" id="checklist-guide">
                  <LifeBuoy size={16} />
                  <span>{isKo ? '파트너 온보딩 체크리스트' : 'Partner Onboarding Checklist'}</span>
                </Link>
              </div>
            </section>

            <section id="preregistration" className="developers-docs-content-section">
              <h2>{isKo ? 'Pre-registration' : 'Pre-registration'}</h2>
              <div className="developers-docs-divider" />
              <p id="pre-register">
                {isKo
                  ? '개발자 페이지에는 문서만 있는 것보다, 실제로 사전등록을 받아 초기 파트너와 개발자를 모으는 구조가 훨씬 좋습니다. 개발자, 가맹점, 거래소·지갑 파트너를 분리해 등록을 받으면 향후 연동 흐름도 훨씬 정리됩니다.'
                  : 'Adding pre-registration flows for developers and partners makes the portal much more actionable.'}
              </p>

              <div className="developers-docs-prereg-grid">
                {filteredPreregCards.map((card, index) => {
                  const Icon = card.icon;
                  return (
                    <motion.article
                      key={card.titleEn}
                      className="developers-docs-prereg-card"
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.45, delay: index * 0.06 }}
                      id={index === 1 ? 'merchant' : index === 2 ? 'exchange' : undefined}
                    >
                      <div className="developers-docs-prereg-card__icon">
                        <Icon size={18} />
                      </div>
                      <h4>{isKo ? card.titleKo : card.titleEn}</h4>
                      <p>{isKo ? card.descKo : card.descEn}</p>
                      <Link to="/developers/preregister" className="developers-docs-prereg-card__button">
                        <span>{isKo ? '사전등록 신청' : 'Apply for Early Access'}</span>
                        <ArrowRight size={16} />
                      </Link>
                    </motion.article>
                  );
                })}
              </div>

              {searchQuery.trim() && filteredPreregCards.length === 0 && (
                <p className="developers-docs-search-empty">
                  {isKo ? '검색 조건에 맞는 사전등록 항목이 없습니다.' : 'No pre-registration items matched your search.'}
                </p>
              )}
            </section>
          </main>

          <aside className="developers-docs-toc">
            <div className="developers-docs-toc__box">
              <span className="developers-docs-toc__title">
                {isKo ? '목차' : 'Table of Contents'}
              </span>
              {filteredToc.length === 0 && searchQuery.trim() ? (
                <span className="developers-docs-toc__empty">
                  {isKo ? '일치하는 항목 없음' : 'No matching sections'}
                </span>
              ) : (
                filteredToc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => handleAnchorClick(item.id)}
                    className={activeSection === item.id ? 'is-current' : ''}
                  >
                    {item.label}
                  </a>
                ))
              )}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}