import { motion } from 'motion/react';
import {
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Clock3,
  CreditCard,
  Globe2,
  Layers3,
  RadioTower,
  Smartphone,
  Sparkles,
  Store,
  Wallet,
} from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import './RoadmapPage.css';

type RoadmapStatus = 'done' | 'current' | 'upcoming';
type RoadmapPriority = 'high' | 'core' | 'expansion' | 'vision';

type RoadmapItem = {
  step: string;
  year: string;
  quarter: string;
  periodEn: string;
  periodKo: string;
  titleEn: string;
  titleKo: string;
  descEn: string;
  descKo: string;
  bulletsEn: string[];
  bulletsKo: string[];
  icon: React.ComponentType<{ size?: number }>;
  status: RoadmapStatus;
  priority: RoadmapPriority;
};

const roadmapSteps: RoadmapItem[] = [
  {
    step: 'Phase 0',
    year: '2025',
    quarter: 'Q1',
    periodEn: 'Brand Foundation',
    periodKo: '브랜드 기반',
    titleEn: 'Official Website & Community Launch',
    titleKo: '공식 홈페이지 및 커뮤니티 구축',
    descEn:
      'The official website and community channels are launched to establish brand identity, transparency, and early user communication.',
    descKo:
      '브랜드 아이덴티티와 초기 사용자 커뮤니케이션을 위해 공식 홈페이지와 커뮤니티 채널을 구축하는 단계입니다.',
    bulletsEn: ['Official website launch', 'Community channel setup', 'Early ecosystem visibility'],
    bulletsKo: ['공식 홈페이지 오픈', '커뮤니티 채널 구축', '초기 생태계 가시성 확보'],
    icon: Globe2,
    status: 'done',
    priority: 'core',
  },
  {
    step: 'Phase 1',
    year: '2025',
    quarter: 'Q2',
    periodEn: 'Token Foundation',
    periodKo: '토큰 기반',
    titleEn: 'Token Launch & Treasury Setup',
    titleKo: '토큰 런치 및 트레저리 구조',
    descEn:
      'The KORION token is deployed on TRON with treasury allocation and ecosystem reserve structures.',
    descKo:
      'KORION 토큰을 TRON 네트워크에 배포하고 트레저리 및 생태계 리저브 구조를 설정하는 단계입니다.',
    bulletsEn: ['Token deployment', 'Treasury allocation', 'Reserve structure'],
    bulletsKo: ['토큰 배포', '트레저리 할당', '리저브 구조 설정'],
    icon: Wallet,
    status: 'done',
    priority: 'high',
  },
  {
    step: 'Phase 2',
    year: '2025',
    quarter: 'Q2',
    periodEn: 'Wallet Infrastructure',
    periodKo: '지갑 인프라',
    titleEn: 'KORION Wallet Development',
    titleKo: 'KORION Wallet 개발',
    descEn:
      'The KORION wallet becomes the central gateway for storage, transfers, mining participation, and ecosystem access.',
    descKo:
      'KORION Wallet을 보관, 전송, 마이닝 참여, 생태계 접근의 핵심 게이트웨이로 구축하는 단계입니다.',
    bulletsEn: ['Asset storage', 'Deposit / withdrawal', 'Ecosystem gateway'],
    bulletsKo: ['자산 보관', '입출금 기능', '생태계 게이트웨이'],
    icon: Smartphone,
    status: 'done',
    priority: 'high',
  },
  {
    step: 'Phase 3',
    year: '2025',
    quarter: 'Q3',
    periodEn: 'Participation Layer',
    periodKo: '참여 단계',
    titleEn: 'Mobile Mining Activation',
    titleKo: '모바일 마이닝 활성화',
    descEn:
      'Participation-based mining activates through the wallet to drive early ecosystem growth.',
    descKo:
      '월렛 기반 참여형 마이닝을 통해 초기 생태계 확장을 시작하는 단계입니다.',
    bulletsEn: ['Wallet mining', 'Reward distribution', 'User participation growth'],
    bulletsKo: ['월렛 마이닝', '보상 분배 구조', '사용자 참여 확대'],
    icon: Smartphone,
    status: 'done',
    priority: 'core',
  },

  {
    step: 'Phase 4',
    year: '2026',
    quarter: 'Q1',
    periodEn: 'Liquidity Layer',
    periodKo: '유동성 단계',
    titleEn: 'DEX Listing',
    titleKo: 'DEX 상장',
    descEn:
      'Decentralized exchange listing enables external liquidity participation and price discovery.',
    descKo:
      '탈중앙화 거래소 상장을 통해 외부 유동성과 가격 발견이 가능해지는 단계입니다.',
    bulletsEn: ['DEX trading', 'Liquidity pools', 'Market participation'],
    bulletsKo: ['DEX 거래', '유동성 풀', '시장 참여'],
    icon: Layers3,
    status: 'done',
    priority: 'high',
  },
  {
    step: 'Phase 4-1',
    year: '2026',
    quarter: 'Q4',
    periodEn: 'Platform Integration',
    periodKo: '플랫폼 통합',
    titleEn: 'Foxyya Platform Integration',
    titleKo: 'Foxyya 플랫폼 통합',
    descEn:
      'Token utility expands through integration with the Foxyya platform ecosystem.',
    descKo:
      'Foxyya 플랫폼과의 연동을 통해 토큰 유틸리티가 확장되는 단계입니다.',
    bulletsEn: ['Platform integration', 'Service-layer demand', 'Utility expansion'],
    bulletsKo: ['플랫폼 연동', '서비스 수요 형성', '유틸리티 확장'],
    icon: RadioTower,
    status: 'current',
    priority: 'high',
  },



    {
    step: 'Phase 5',
    year: '2026',
    quarter: 'Q4',
    periodEn: 'Strategic Funding',
    periodKo: '전략 자금',
    titleEn: 'Strategic Presale Round',
    titleKo: '전략 프리세일',
    descEn:
      'Following platform readiness, a strategic presale may support ecosystem expansion and infrastructure growth.',
    descKo:
      '플랫폼 완성 이후 생태계 확장과 인프라 성장을 위한 전략적 프리세일을 진행하는 단계입니다.',
    bulletsEn: ['Strategic funding', 'Ecosystem growth capital', 'Infrastructure expansion'],
    bulletsKo: ['전략적 자금 확보', '생태계 성장 재원', '인프라 확장'],
    icon: BadgeCheck,
    status: 'upcoming',
    priority: 'core',
  },
  {
    step: 'Phase 6',
    year: '2026',
    quarter: 'Q1',
    periodEn: 'Payment Layer',
    periodKo: '결제 단계',
    titleEn: 'KORION Pay Deployment',
    titleKo: 'KORION Pay 배포',
    descEn:
      'Following DEX activation, KORION Pay expands token utility for peer-to-peer and service transactions.',
    descKo:
      'DEX 활성화 이후 KORION Pay를 통해 토큰의 P2P 결제 및 서비스 결제 유틸리티를 확장하는 단계입니다.',
    bulletsEn: ['P2P payments', 'Service-linked payments', 'Utility after DEX activation'],
    bulletsKo: ['P2P 결제', '서비스 연동 결제', 'DEX 이후 실사용 확대'],
    icon: CreditCard,
    status: 'upcoming',
    priority: 'high',
  },
  {
    step: 'Phase 7',
    year: '2026',
    quarter: 'Q2',
    periodEn: 'Offline Payment Development',
    periodKo: '오프라인 결제 개발',
    titleEn: 'Offline Payment Development',
    titleKo: '오프라인 결제 개발',
    descEn:
      'After payment deployment, the project develops offline-capable payment logic for low-connectivity transaction scenarios.',
    descKo:
      '결제 배포 이후 저연결 환경에서도 동작 가능한 오프라인 결제 로직을 개발하는 단계입니다.',
    bulletsEn: ['Offline payment logic', 'Deferred sync model', 'Field transaction usability'],
    bulletsKo: ['오프라인 결제 로직', '지연 동기화 구조', '현장 결제 활용성'],
    icon: Store,
    status: 'upcoming',
    priority: 'core',
  },
  {
    step: 'Phase 8',
    year: '2026',
    quarter: 'Q2',
    periodEn: 'Offline Payment Infrastructure',
    periodKo: '오프라인 결제 인프라',
    titleEn: 'Offline Payment Infrastructure',
    titleKo: '오프라인 결제 인프라',
    descEn:
      'The supporting infrastructure for offline payment settlement, reconciliation, and secure transaction handling is established.',
    descKo:
      '오프라인 결제 정산, 정합성 검증, 보안 처리까지 포함하는 인프라를 구축하는 단계입니다.',
    bulletsEn: ['Settlement infrastructure', 'Secure reconciliation', 'Merchant-ready framework'],
    bulletsKo: ['정산 인프라', '보안 정합성 검증', '가맹점 대응 프레임'],
    icon: Store,
    status: 'upcoming',
    priority: 'core',
  },
  {
    step: 'Phase 9',
    year: '2026',
    quarter: 'Q2',
    periodEn: 'Developer Infrastructure',
    periodKo: '개발 인프라',
    titleEn: 'API Development & Developer Portal',
    titleKo: 'API 개발 및 개발자 포털',
    descEn:
      'Backend APIs and developer documentation are released to enable ecosystem integration.',
    descKo:
      '생태계 연동을 위해 백엔드 API와 개발자 문서를 공개하는 단계입니다.',
    bulletsEn: ['Wallet API', 'Payment API', 'Developer documentation'],
    bulletsKo: ['월렛 API', '결제 API', '개발 문서'],
    icon: ChevronRight,
    status: 'current',
    priority: 'high',
  },
  {
    step: 'Phase 10',
    year: '2026',
    quarter: 'Q3',
    periodEn: 'Market Expansion',
    periodKo: '시장 확장',
    titleEn: 'CEX Listing',
    titleKo: 'CEX 상장',
    descEn:
      'Centralized exchange listings expand market accessibility and liquidity depth.',
    descKo:
      '중앙화 거래소 상장을 통해 시장 접근성과 유동성을 확대하는 단계입니다.',
    bulletsEn: ['Global exchange access', 'Market visibility', 'Liquidity depth'],
    bulletsKo: ['글로벌 거래소 접근', '시장 가시성', '유동성 확대'],
    icon: Globe2,
    status: 'current',
    priority: 'high',
  },
  {
    step: 'Phase 11',
    year: '2026',
    quarter: 'Q4',
    periodEn: 'Market Platform',
    periodKo: '마켓플랫폼',
    titleEn: 'Market Platform Development',
    titleKo: '마켓플랫폼 개발',
    descEn:
      'Following broader exchange visibility, the ecosystem expands into a market platform layer for product, service, and transactional utility.',
    descKo:
      '거래소 확장 이후 상품, 서비스, 거래 유틸리티를 연결하는 마켓플랫폼 레이어를 개발하는 단계입니다.',
    bulletsEn: ['Marketplace architecture', 'Service utility layer', 'Transaction ecosystem'],
    bulletsKo: ['마켓플레이스 구조', '서비스 유틸리티 레이어', '거래 생태계 확장'],
    icon: Layers3,
    status: 'upcoming',
    priority: 'expansion',
  },
  {
    step: 'Phase 12',
    year: '2027',
    quarter: 'Q4',
    periodEn: 'Exchange Platform',
    periodKo: '거래소 개발',
    titleEn: 'Exchange Platform Development',
    titleKo: '거래소 개발',
    descEn:
      'After CEX-level market expansion, a dedicated exchange platform development phase is initiated for broader ecosystem control and service integration.',
    descKo:
      'CEX 단계 이후 더 넓은 생태계 통제와 서비스 통합을 위해 자체 거래소 개발을 추진하는 단계입니다.',
    bulletsEn: ['Exchange platform planning', 'Trading service architecture', 'Liquidity control framework'],
    bulletsKo: ['거래소 플랫폼 기획', '거래 서비스 아키텍처', '유동성 통제 프레임'],
    icon: RadioTower,
    status: 'upcoming',
    priority: 'expansion',
  },
  {
    step: 'Phase 13',
    year: '2027',
    quarter: 'Q1',
    periodEn: 'Contract Architecture',
    periodKo: '컨트랙트 구조',
    titleEn: 'Multi-Contract Deployment',
    titleKo: '멀티 컨트랙트 배포',
    descEn:
      'The ecosystem evolves toward modular smart contract architecture for payments, services, and rewards.',
    descKo:
      '결제, 서비스, 보상 기능을 위한 모듈형 스마트컨트랙트 구조로 확장하는 단계입니다.',
    bulletsEn: ['Modular contracts', 'Service modules', 'Operational separation'],
    bulletsKo: ['모듈형 컨트랙트', '서비스 모듈', '기능 분리'],
    icon: Layers3,
    status: 'upcoming',
    priority: 'core',
  },
  {
    step: 'Phase 14',
    year: '2027',
    quarter: 'Q2',
    periodEn: 'Cross-Chain Expansion',
    periodKo: '크로스체인 확장',
    titleEn: 'Expansion Beyond TRON',
    titleKo: 'TRON 이후 체인 확장',
    descEn:
      'Future expansion explores interoperability with additional blockchain networks.',
    descKo:
      '추가 블록체인 네트워크와의 상호운용성을 확장하는 단계입니다.',
    bulletsEn: ['Multi-chain support', 'Cross-chain bridges', 'Expanded utility'],
    bulletsKo: ['멀티체인 지원', '크로스체인 브리지', '유틸리티 확장'],
    icon: ArrowUpRight,
    status: 'upcoming',
    priority: 'expansion',
  },
  {
    step: 'Phase 15',
    year: '2027',
    quarter: 'Q3',
    periodEn: 'Distributed Network Layer',
    periodKo: '분산 네트워크 레이어',
    titleEn: 'CDNS Development',
    titleKo: 'CDNS 개발',
    descEn:
      'A CDNS layer is developed before mainnet evolution to strengthen distributed service delivery, content/network resilience, and broader ecosystem infrastructure readiness.',
    descKo:
      '메인넷 개발 이전에 분산 서비스 전달, 콘텐츠/네트워크 복원력, 생태계 인프라 준비도를 높이기 위해 CDNS를 개발하는 단계입니다.',
    bulletsEn: ['Distributed delivery layer', 'Infrastructure resilience', 'Pre-mainnet network readiness'],
    bulletsKo: ['분산 전달 레이어', '인프라 복원력', '메인넷 이전 네트워크 준비'],
    icon: RadioTower,
    status: 'upcoming',
    priority: 'core',
  },
  {
    step: 'Phase 16',
    year: '2027',
    quarter: 'Q4',
    periodEn: 'Protocol Evolution',
    periodKo: '프로토콜 진화',
    titleEn: 'KORION Mainnet Development',
    titleKo: 'KORION 메인넷 개발',
    descEn:
      'The project evaluates an independent blockchain infrastructure to support ecosystem sovereignty.',
    descKo:
      '생태계 독립성을 위한 자체 블록체인 인프라 개발을 검토하는 단계입니다.',
    bulletsEn: ['Protocol independence', 'Infrastructure control', 'Network scalability'],
    bulletsKo: ['프로토콜 독립성', '인프라 통제', '네트워크 확장성'],
    icon: Globe2,
    status: 'upcoming',
    priority: 'high',
  },
  {
    step: 'Phase 17',
    year: '2028+',
    quarter: 'VISION',
    periodEn: 'Global Reserve Vision',
    periodKo: '기축 자산 비전',
    titleEn: 'KORION as a Strategic Reserve Asset',
    titleKo: '기축 코인 목표',
    descEn:
      'The long-term ambition is to position KORION as a widely used ecosystem settlement asset.',
    descKo:
      '장기적으로 KORION을 생태계 핵심 정산 자산으로 성장시키는 단계입니다.',
    bulletsEn: ['Settlement asset', 'Ecosystem reserve role', 'Global adoption'],
    bulletsKo: ['정산 자산', '생태계 리저브 역할', '글로벌 채택'],
    icon: BadgeCheck,
    status: 'upcoming',
    priority: 'vision',
  },
];

function getStatusLabel(status: RoadmapStatus, isKo: boolean) {
  if (status === 'done') return isKo ? '완료' : 'Completed';
  if (status === 'current') return isKo ? '진행중' : 'In Progress';
  return isKo ? '예정' : 'Upcoming';
}

function getStatusIcon(status: RoadmapStatus) {
  if (status === 'done') return CheckCircle2;
  if (status === 'current') return Clock3;
  return CircleDot;
}

function getPriorityLabel(priority: RoadmapPriority, isKo: boolean) {
  if (priority === 'high') return isKo ? '핵심 우선' : 'HIGH';
  if (priority === 'core') return isKo ? '핵심' : 'CORE';
  if (priority === 'expansion') return isKo ? '확장' : 'EXPANSION';
  return isKo ? '비전' : 'VISION';
}

function getYearStats(year: string) {
  const filtered = roadmapSteps.filter((item) => item.year === year);
  return {
    done: filtered.filter((item) => item.status === 'done').length,
    current: filtered.filter((item) => item.status === 'current').length,
    upcoming: filtered.filter((item) => item.status === 'upcoming').length,
  };
}

export function RoadmapPage() {
  const { language } = useLanguage();
  const isKo = language === 'KR';

  const completedCount = roadmapSteps.filter((item) => item.status === 'done').length;
  const currentCount = roadmapSteps.filter((item) => item.status === 'current').length;
  const upcomingCount = roadmapSteps.filter((item) => item.status === 'upcoming').length;

  const progressPercent =
    roadmapSteps.length > 0
      ? Math.round((completedCount / roadmapSteps.length) * 100)
      : 0;

  return (
    <div className="roadmap-page">
      <div className="roadmap-page__bg">
        <div className="roadmap-page__orb roadmap-page__orb--one" />
        <div className="roadmap-page__orb roadmap-page__orb--two" />
        <div className="roadmap-page__orb roadmap-page__orb--three" />
        <div className="roadmap-page__grid" />
        <div className="roadmap-page__beam roadmap-page__beam--left" />
        <div className="roadmap-page__beam roadmap-page__beam--right" />
      </div>

      <section className="roadmap-hero">
        <div className="roadmap-page__container">
          <motion.div
            className="roadmap-hero__content"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="roadmap-hero__eyebrow">
              <span className="roadmap-hero__eyebrow-dot" />
              {isKo ? 'Whitepaper-Based Roadmap' : 'Whitepaper-Based Roadmap'}
            </div>

            <h1 className="roadmap-hero__title">
              {isKo
                ? 'KORION 생태계의 실행 단계와 확장 전략'
                : 'Execution stages and expansion strategy of the KORION ecosystem'}
            </h1>

            <p className="roadmap-hero__description">
              {isKo
                ? '백서 기반 로드맵을 중심으로 완료, 진행중, 예정 단계를 정교하게 구분하고 연도·분기 흐름, 실행 우선순위, 미래 확장 비전까지 한눈에 보여주는 초프리미엄 타임라인입니다.'
                : 'A premium execution timeline built around the whitepaper roadmap, clearly separating completed, active, and upcoming phases while visualizing year, quarter, execution priority, and long-term expansion vision.'}
            </p>

            <motion.div
              className="roadmap-progress"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="roadmap-progress__head">
                <span>{isKo ? 'Roadmap Progress' : 'Roadmap Progress'}</span>
                <strong>
                  {completedCount}/{roadmapSteps.length} {isKo ? '완료' : 'completed'}
                </strong>
              </div>

              <div className="roadmap-progress__track">
                <motion.div
                  className="roadmap-progress__fill"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 1.1, delay: 0.3, ease: 'easeOut' }}
                />
              </div>

              <div className="roadmap-progress__meta">
                <span>{progressPercent}%</span>
                <span>
                  {isKo
                    ? '완료 구간 프리미엄 강조 적용'
                    : 'Premium highlight applied to completed milestones'}
                </span>
              </div>

              <div className="roadmap-progress__stats">
                <div className="roadmap-progress__stat roadmap-progress__stat--done">
                  <span>{isKo ? '완료' : 'Completed'}</span>
                  <strong>{completedCount}</strong>
                </div>
                <div className="roadmap-progress__stat roadmap-progress__stat--current">
                  <span>{isKo ? '진행중' : 'In Progress'}</span>
                  <strong>{currentCount}</strong>
                </div>
                <div className="roadmap-progress__stat roadmap-progress__stat--upcoming">
                  <span>{isKo ? '예정' : 'Upcoming'}</span>
                  <strong>{upcomingCount}</strong>
                </div>
              </div>
            </motion.div>

            <div className="roadmap-hero__actions">
              <Link to="/explorer" className="roadmap-hero__button roadmap-hero__button--primary">
                {isKo ? 'Explorer 보기' : 'View Explorer'}
                <ArrowUpRight size={18} />
              </Link>

              <Link to="/tokenomics" className="roadmap-hero__button roadmap-hero__button--secondary">
                {isKo ? '토크노믹스 보기' : 'View Tokenomics'}
                <ChevronRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="roadmap-timeline-section">
        <div className="roadmap-page__container">
          <div className="roadmap-timeline">
            {roadmapSteps.map((item, index) => {
              const Icon = item.icon;
              const StatusIcon = getStatusIcon(item.status);

              const prevYear = index > 0 ? roadmapSteps[index - 1].year : null;
              const showYearDivider = prevYear !== item.year;
              const isCurrent = item.status === 'current';
              const yearStats = getYearStats(item.year);

              return (
                <div key={item.step}>
                  {showYearDivider && (
                    <motion.div
                      className="roadmap-year-divider"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35 }}
                    >
                      <div className="roadmap-year-divider__rail-label">
                        <span>{item.year}</span>
                      </div>
                    </motion.div>
                  )}

                  <motion.article
                    className={`roadmap-timeline__item roadmap-timeline__item--${item.status}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.12 }}
                    transition={{ duration: 0.42, delay: index * 0.03 }}
                  >
                    <div className="roadmap-timeline__rail">
                      <div className="roadmap-timeline__gauge">
                        <div className="roadmap-timeline__gauge-track" />
                        <div className="roadmap-timeline__gauge-glow" />
                      </div>

                      <div className={`roadmap-timeline__node roadmap-timeline__node--${item.status}`}>
                        <div className="roadmap-timeline__node-halo" />
                        <div className="roadmap-timeline__node-core">
                          <Icon size={18} />
                        </div>
                      </div>

                      {item.status === 'current' && <div className="roadmap-timeline__active-beam" />}

                      {index !== roadmapSteps.length - 1 && (
                        <div className="roadmap-timeline__line" />
                      )}
                    </div>

                    <div className={`roadmap-card roadmap-card--${item.status}`}>
                      {item.status === 'done' && (
                        <motion.div
                          className="roadmap-card__shine"
                          animate={{ x: ['-140%', '160%'] }}
                          transition={{
                            duration: 3.1,
                            repeat: Infinity,
                            repeatDelay: 2.2,
                            ease: 'easeInOut',
                          }}
                        />
                      )}





                      <div className="roadmap-card__top">
                        <div className="roadmap-card__phase">
                          <span>{item.step}</span>
                          <strong>{isKo ? item.periodKo : item.periodEn} : {isKo ? item.titleKo : item.titleEn}</strong>
                          
                        </div>
                        
                        <div className={`roadmap-card__badge roadmap-card__badge--${item.status}`}>
                          <StatusIcon size={14} />
                          <span>{getStatusLabel(item.status, isKo)}</span>
                        </div>
                      </div>
                      <p className="roadmap-card__desc">
                        {isKo ? item.descKo : item.descEn}
                      </p>
                      
                      <div className="roadmap-card__bullets">
                        {(isKo ? item.bulletsKo : item.bulletsEn).map((bullet, bulletIndex) => (
                          <motion.div
                            key={`${item.step}-${bulletIndex}`}
                            className="roadmap-card__bullet"
                            initial={{ opacity: 0, x: -8 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.08 * bulletIndex }}
                          >
                            <BadgeCheck size={15} />
                            <span>{bullet}</span>
                          </motion.div>
                        ))}
                      </div>

                      {item.status === 'done' && (
                        <div className="roadmap-card__footer roadmap-card__footer--done">
                          <CheckCircle2 size={16} />
                          <span>{isKo ? '완료 단계' : 'Completed milestone'}</span>
                        </div>
                      )}

                      {item.status === 'current' && (
                        <div className="roadmap-card__footer roadmap-card__footer--current">
                          <Clock3 size={16} />
                          <span>{isKo ? '현재 집중 구간' : 'Current focus milestone'}</span>
                        </div>
                      )}

                      {item.status === 'upcoming' && (
                        <div className="roadmap-card__footer roadmap-card__footer--upcoming">
                          <CircleDot size={16} />
                          <span>{isKo ? '예정 단계' : 'Upcoming milestone'}</span>
                        </div>
                      )}
                    </div>
                  </motion.article>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}