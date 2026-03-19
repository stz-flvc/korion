import { motion } from 'motion/react';
import {
  WifiOff,
  Globe,
  ShieldCheck,
  Smartphone,
  CreditCard,
  ServerCog,
  LockKeyhole,
  Landmark,
  ArrowRight,
  CheckCircle2,
  Layers3,
  Cable,
  BadgeCheck,
  Coins,
  Building2,
  Plane,
  Ship,
  Mountain,
  Store,
  Cpu,
  RefreshCw,
  Wallet,
  Radio,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './KorionPayPage.css';
import korionLogo from '../../assets/logo/logo.png'
const offlineFeatures = [
  {
    icon: WifiOff,
    titleKo: '네트워크 불필요',
    titleEn: 'No Network Required',
    descKo:
      '통신망 연결 없이도 결제가 성립되는 구조로, 장애·음영지역·재난 환경에서도 작동합니다.',
    descEn:
      'Payments can be completed without network connectivity, enabling operation even during outages, weak-signal zones, and disaster environments.',
  },
  {
    icon: Smartphone,
    titleKo: '스마트폰 간 직접 결제',
    titleEn: 'Phone-to-Phone Payment',
    descKo:
      'POS 단말기나 별도 승인 서버 없이 스마트폰과 스마트폰만으로 직접 결제를 수행합니다.',
    descEn:
      'Payments are executed directly between smartphones without POS terminals or separate authorization servers.',
  },
  {
    icon: ShieldCheck,
    titleKo: 'TEE 보안 구조',
    titleEn: 'TEE Security',
    descKo:
      '단말 내부 TEE(Trusted Execution Environment)를 활용해 외부 앱이 접근할 수 없는 보안 영역에서 거래를 생성·검증합니다.',
    descEn:
      'Transactions are created and verified inside the device’s Trusted Execution Environment, isolated from ordinary applications.',
  },
  {
    icon: LockKeyhole,
    titleKo: '이중지불 저항 구조',
    titleEn: 'Double-Spend Resistant',
    descKo:
      '단조 카운터(Monotonic Counter)와 Hash-Chain 구조를 통해 거래 롤백·위변조·중복 사용을 어렵게 설계합니다.',
    descEn:
      'A monotonic counter and hash-chain design help resist rollback, tampering, and duplicate spending attempts.',
  },
];

const onlineFeatures = [
  {
    icon: Globe,
    titleKo: '연결형 디지털 결제',
    titleEn: 'Connected Digital Payment',
    descKo:
      '온라인 환경에서는 KORION Wallet과 연동되어 실시간 결제, 정산, 서비스 확장을 지원합니다.',
    descEn:
      'In connected environments, KORION Wallet supports real-time payments, settlement, and service expansion.',
  },
  {
    icon: ServerCog,
    titleKo: '상점 및 플랫폼 대응',
    titleEn: 'Merchant & Platform Ready',
    descKo:
      '커머스, 앱 서비스, 정기 결제, 디지털 상품 결제 등 다양한 온라인 사용 시나리오에 대응합니다.',
    descEn:
      'It supports diverse online scenarios such as commerce, app services, recurring payments, and digital product checkout.',
  },
  {
    icon: Wallet,
    titleKo: '사용자 중심 UX',
    titleEn: 'User-Centric UX',
    descKo:
      '복잡한 주소 입력과 네트워크 확인을 최소화한 직관적 결제 경험으로 일반 사용자 진입장벽을 낮춥니다.',
    descEn:
      'A simplified payment experience reduces friction for ordinary users by minimizing address entry and network complexity.',
  },
  {
    icon: RefreshCw,
    titleKo: '정산 및 동기화',
    titleEn: 'Settlement & Sync',
    descKo:
      '온라인 구간에서는 거래 이력 동기화, 상태 반영, 서비스 연동, 정산 흐름을 자연스럽게 처리합니다.',
    descEn:
      'In online mode, transaction history sync, state updates, service integration, and settlement are handled seamlessly.',
  },
];

const patentedPoints = [
  {
    titleKo: 'TEE 기반 보안 실행 영역',
    titleEn: 'TEE-Based Secure Execution Layer',
    descKo:
      '결제 생성과 검증 로직을 단말의 신뢰 실행 환경 내부에서 수행하도록 설계하여, 일반 앱 레벨보다 높은 보안성을 목표로 합니다.',
    descEn:
      'Payment generation and verification are designed to run inside the device’s trusted execution environment for stronger security than ordinary app-level logic.',
  },
  {
    titleKo: 'Monotonic Counter 기반 상태 불가역성',
    titleEn: 'State Irreversibility with Monotonic Counter',
    descKo:
      '거래 순서를 되돌릴 수 없는 단방향 카운터 구조로 유지하여 오프라인 환경에서도 이중지불 위험을 줄이는 방향의 핵심 개념을 반영합니다.',
    descEn:
      'A one-way counter structure keeps transaction order irreversible, reflecting a core concept for reducing double-spend risk in offline environments.',
  },
  {
    titleKo: 'Hash-Chain 무결성 검증',
    titleEn: 'Hash-Chain Integrity Verification',
    descKo:
      '각 거래가 이전 상태와 연결되는 체인 구조를 통해 거래 기록이 하나라도 변조되면 전체 무결성 검증에 영향을 주는 모델을 구성합니다.',
    descEn:
      'Each transaction is chained to the previous state, so any tampering affects integrity verification across the full record.',
  },
  {
    titleKo: 'Collateral Lock 기반 안전성',
    titleEn: 'Collateral Lock Safety Model',
    descKo:
      '온라인 상태에서 자산을 먼저 잠그고, 오프라인 거래는 그 한도 내에서만 실행되도록 하여 신용형이 아닌 담보형 결제 구조를 지향합니다.',
    descEn:
      'Assets are locked in advance while online, and offline spending is limited to that range, aiming for a collateral-based rather than credit-based model.',
  },
  {
    titleKo: 'Lazy Clearing 정산 구조',
    titleEn: 'Lazy Clearing Settlement Flow',
    descKo:
      '오프라인에서는 사용 경험을 우선해 즉시 결제를 완료하고, 네트워크가 복구되거나 연결될 때 후속 동기화 및 정산을 처리하는 흐름을 반영합니다.',
    descEn:
      'Offline payments are completed instantly for usability, while later synchronization and settlement occur when connectivity is restored.',
  },
  {
    titleKo: '스마트폰 자체를 결제 인프라로 전환',
    titleEn: 'Turning the Smartphone into Payment Infrastructure',
    descKo:
      '별도 POS, 지속적인 서버 승인, 회선 의존도를 낮추고 스마트폰 자체를 결제 수단이자 보안 장치로 활용하는 구조를 핵심 경쟁력으로 제시합니다.',
    descEn:
      'By reducing dependence on POS hardware, constant server approval, and communication lines, the smartphone itself becomes both a payment device and a security unit.',
  },
];

const useCases = [
  {
    icon: Plane,
    titleKo: '항공기',
    titleEn: 'Aircraft',
    descKo: '비연결 환경에서도 승객 결제 경험 유지',
    descEn: 'Maintain passenger payment experiences even without stable connectivity.',
  },
  {
    icon: Ship,
    titleKo: '선박',
    titleEn: 'Ships',
    descKo: '해상 통신 불안정 구간에서의 결제 대응',
    descEn: 'Handle payments in maritime areas with unstable communication.',
  },
  {
    icon: Mountain,
    titleKo: '광산 · 터널 · 오지',
    titleEn: 'Mines · Tunnels · Remote Areas',
    descKo: '인프라 취약 지역의 Always-On 결제',
    descEn: 'Enable always-on payments in infrastructure-limited regions.',
  },
  {
    icon: Building2,
    titleKo: '군사 · 폐쇄망',
    titleEn: 'Military · Closed Networks',
    descKo: '폐쇄된 네트워크 환경에서의 독립 결제 수단',
    descEn: 'Provide independent payment capabilities in isolated network environments.',
  },
  {
    icon: Store,
    titleKo: '소상공인',
    titleEn: 'Small Merchants',
    descKo: '단말기 비용과 수수료 구조를 줄이는 결제 대안',
    descEn: 'Offer a payment alternative that reduces device costs and fee burdens.',
  },
  {
    icon: Landmark,
    titleKo: '재난 대응',
    titleEn: 'Disaster Response',
    descKo: '통신 장애 시에도 작동 가능한 긴급 결제 인프라',
    descEn: 'Provide emergency-capable payment infrastructure during communication failures.',
  },
];

const compareRows = [
  {
    key: 'network',
    labelKo: '네트워크 의존',
    labelEn: 'Network Dependence',
    legacyKo: '필수',
    legacyEn: 'Required',
    korionKo: '선택 또는 불필요',
    korionEn: 'Optional or unnecessary',
  },
  {
    key: 'pos',
    labelKo: 'POS 단말기',
    labelEn: 'POS Terminal',
    legacyKo: '대체로 필요',
    legacyEn: 'Generally required',
    korionKo: '스마트폰만으로 가능',
    korionEn: 'Possible with smartphone only',
  },
  {
    key: 'server',
    labelKo: '서버 승인',
    labelEn: 'Server Authorization',
    legacyKo: '중앙 승인 중심',
    legacyEn: 'Centered on centralized authorization',
    korionKo: '오프라인 직접 거래 가능',
    korionEn: 'Direct offline transaction possible',
  },
  {
    key: 'outage',
    labelKo: '통신 장애 대응',
    labelEn: 'Outage Response',
    legacyKo: '결제 중단 가능성 높음',
    legacyEn: 'High chance of payment interruption',
    korionKo: '항상 작동 가능한 구조 지향',
    korionEn: 'Designed toward always-on operation',
  },
  {
    key: 'ux',
    labelKo: '사용자 진입장벽',
    labelEn: 'User Entry Barrier',
    legacyKo: 'QR/주소/대기 등 존재',
    legacyEn: 'QR/address/waiting complexity exists',
    korionKo: '터치 중심의 단순 UX',
    korionEn: 'Touch-based simple UX',
  },
  {
    key: 'scalability',
    labelKo: '확장성',
    labelEn: 'Scalability',
    legacyKo: '기존 인프라 중심',
    legacyEn: 'Focused on existing infrastructure',
    korionKo: '신규 시장 창출 가능',
    korionEn: 'Capable of creating new markets',
  },
];

const investorPoints = [
  {
    ko: '기존 결제망 대체가 아니라, 기존 결제가 닿지 못한 환경에 대한 신규 시장 창출 가능성',
    en: 'Not merely a replacement for existing rails, but a way to create new markets where traditional payment systems cannot reach.',
  },
  {
    ko: '재난·군사·운송·개발도상국·인프라 취약 지역 등 특수 시장에서 차별적 포지션 확보 가능',
    en: 'It can secure differentiated positioning in special markets such as disaster response, military settings, transport, developing regions, and infrastructure-limited zones.',
  },
  {
    ko: '스마트폰 보안칩 보급, TEE 표준화, 근거리 통신 기술 발전에 따른 현실적 상용화 타이밍',
    en: 'The spread of smartphone security chips, TEE standardization, and short-range communication advances create a practical commercialization window.',
  },
  {
    ko: '온·오프라인 결제를 단일 브랜드 아래 통합함으로써 KORION Wallet 및 생태계 서비스 확장성과 연결',
    en: 'By unifying offline and online payments under one brand, it strengthens the expansion potential of KORION Wallet and the wider ecosystem.',
  },
];

export function KorionPayPage() {
  const { language } = useLanguage();
  const isKo = language === 'KR';

  return (
    <div className="korionpay-page" id="top">
      <section className="korionpay-hero">
        <div className="korionpay-hero__bg" />
        <div className="korionpay-hero__grid" />
        <div className="korionpay-page__container">
          <div className="korionpay-hero__content">
            <motion.div
              className="korionpay-hero__eyebrow"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <BadgeCheck size={16} />
              <span>KORION PAY</span>
            </motion.div>

            <motion.h1
              className="korionpay-hero__title"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.75 }}
            >
              {isKo ? (
                <>
                  연결에 의존하지 않는 결제와
                  <br />
                  연결을 확장하는 결제를
                  <span> 하나의 인프라로.</span>
                </>
              ) : (
                <>
                  Payments without connection,
                  <br />
                  and payments that expand connection,
                  <span> in one infrastructure.</span>
                </>
              )}
            </motion.h1>

            <motion.p
              className="korionpay-hero__desc"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {isKo
                ? 'KORION PAY는 단순한 결제 기능이 아닙니다. 오프라인 환경에서도 작동하는 신뢰 기반 결제 구조와, 온라인 환경에서 확장 가능한 디지털 결제 흐름을 하나의 프레임 안에 통합한 차세대 결제 아키텍처입니다.'
                : 'KORION PAY is more than a payment feature. It is a next-generation payment architecture that unifies a trust-based payment structure working even in offline environments with a scalable digital payment flow for connected environments.'}
            </motion.p>

            <motion.div
              className="korionpay-hero__cta"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.8, delay: 0.16 }}
            >
              <a href="#pay-architecture" className="korionpay-btn korionpay-btn--primary">
                {isKo ? '아키텍처 보기' : 'Architecture'}
                <ArrowRight size={18} />
              </a>
              <a href="#pay-comparison" className="korionpay-btn korionpay-btn--ghost">
                {isKo ? '비교 보기' : 'Compare Model'}
              </a>
            </motion.div>

            <motion.div
              className="korionpay-hero__stats"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.8, delay: 0.22 }}
            >
              <div className="korionpay-stat">
                <strong>{isKo ? '오프라인 페이' : 'Offline Pay'}</strong>
                <span>{isKo ? '네트워크 없는 직접 결제' : 'Direct payment without network'}</span>
              </div>
              <div className="korionpay-stat">
                <strong>{isKo ? '온라인 페이' : 'Online Pay'}</strong>
                <span>{isKo ? '서비스 연동형 실시간 결제' : 'Service-linked real-time payment'}</span>
              </div>
              <div className="korionpay-stat">
                <strong>{isKo ? '특허 기반 구조' : 'Patent-Based'}</strong>
                <span>{isKo ? '특허 출원형 핵심 구조 반영' : 'Reflecting patent-oriented core structure'}</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="korionpay-hero__visual"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9 }}
          >
            <div className="korionpay-orbit korionpay-orbit--one" />
            <div className="korionpay-orbit korionpay-orbit--two" />
            <div className="korionpay-glow korionpay-glow--one" />
            <div className="korionpay-glow korionpay-glow--two" />

            <div className="korionpay-device korionpay-device--left">
              <div className="korionpay-device__header">
                <WifiOff size={18} />
                <span>{isKo ? '오프라인 페이' : 'Offline Pay'}</span>
              </div>
              <div className="korionpay-device__body">
                <div className="korionpay-chip">
                  <img src={korionLogo} alt="KORION" />
                </div>
                <div className="korionpay-line" />
                <div className="korionpay-line korionpay-line--short" />
                <div className="korionpay-tags">
                  <span>TEE</span>
                  <span>Hash-Chain</span>
                  <span>Collateral</span>
                </div>
              </div>
            </div>

            <div className="korionpay-center-badge">
              <div className="korionpay-center-badge__core">
                <CreditCard size={28} />
              </div>
              <div className="korionpay-signal korionpay-signal--left" />
              <div className="korionpay-signal korionpay-signal--right" />
            </div>

            <div className="korionpay-device korionpay-device--right">
              <div className="korionpay-device__header">
                <Globe size={18} />
                <span>{isKo ? '온라인 페이' : 'Online Pay'}</span>
              </div>
              <div className="korionpay-device__body">
                <div className="korionpay-chip">
                  <img src={korionLogo} alt="KORION" />
                </div>
                <div className="korionpay-line" />
                <div className="korionpay-line korionpay-line--short" />
                <div className="korionpay-tags">
                  <span>Sync</span>
                  <span>Merchant</span>
                  <span>Settlement</span>
                </div>
              </div>
            </div>

            <div className="korionpay-hero__caption">
              {isKo
                ? 'Offline Pay와 Online Pay를 하나의 브랜드 안에서 연결하는 KORION의 결제 레이어'
                : 'KORION’s payment layer connecting Offline Pay and Online Pay within one brand'}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="korionpay-section">
        <div className="korionpay-page__container-01">
          <div className="korionpay-section__head">
            <span className="korionpay-section__label">
              {isKo ? '개요' : 'Overview'}
            </span>
            <h2>
              {isKo
                ? 'KORION PAY는 두 가지 결제 흐름을 하나로 묶습니다'
                : 'KORION PAY unifies two payment flows into one'}
            </h2>
            <p>
              {isKo
                ? 'KORION PAY는 네트워크가 없어도 작동하는 Offline Pay와, 서비스 확장성과 연결성을 강화하는 Online Pay를 함께 구성하여 온·오프라인 전반을 포괄하는 결제 인프라를 지향합니다.'
                : 'KORION PAY combines Offline Pay, which works without network connectivity, with Online Pay, which strengthens service integration and connectivity, aiming to build a payment infrastructure spanning both offline and online environments.'}
            </p>
          </div>

          <div className="korionpay-dual">
            <div className="korionpay-dual__card korionpay-dual__card--offline">
              <div className="korionpay-dual__top">
                <div className="korionpay-dual__icon">
                  <WifiOff size={24} />
                </div>
                <div>
                  <h3>{isKo ? '오프라인 페이' : 'Offline Pay'}</h3>
                  <p>
                    {isKo
                      ? '네트워크 없이 작동하는 디지털 결제 인프라'
                      : 'A digital payment infrastructure that works without network connectivity'}
                  </p>
                </div>
              </div>
              <ul className="korionpay-checklist">
                <li>
                  <CheckCircle2 size={18} />
                  {isKo ? '서버 승인 없음' : 'No server authorization'}
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  {isKo ? '네트워크 연결 없음' : 'No network connection required'}
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  {isKo ? 'POS 단말기 없음' : 'No POS terminal required'}
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  {isKo ? '스마트폰 ↔ 스마트폰 직접 거래' : 'Smartphone-to-smartphone direct transaction'}
                </li>
              </ul>
            </div>

            <div className="korionpay-dual__card korionpay-dual__card--online">
              <div className="korionpay-dual__top">
                <div className="korionpay-dual__icon">
                  <Globe size={24} />
                </div>
                <div>
                  <h3>{isKo ? '온라인 페이' : 'Online Pay'}</h3>
                  <p>
                    {isKo
                      ? '연결성과 서비스 확장을 강화하는 디지털 결제 레이어'
                      : 'A digital payment layer that expands connectivity and services'}
                  </p>
                </div>
              </div>
              <ul className="korionpay-checklist">
                <li>
                  <CheckCircle2 size={18} />
                  {isKo ? '실시간 서비스 연동' : 'Real-time service integration'}
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  {isKo ? '온라인 상점·앱·플랫폼 결제 대응' : 'Support for stores, apps, and platforms'}
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  {isKo ? '상태 동기화 및 정산 처리' : 'State synchronization and settlement processing'}
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  {isKo ? 'Wallet 중심의 확장형 사용 구조' : 'Wallet-centered scalable usage model'}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="korionpay-section korionpay-section--deep">
        <div className="korionpay-page__container-01">
          <div className="korionpay-section__head">
            <span className="korionpay-section__label">
              {isKo ? '오프라인 비전' : 'Offline Vision'}
            </span>
            <h2>
              {isKo
                ? '결제는 인프라가 아니라 기능이어야 합니다'
                : 'Payment should be a function, not infrastructure'}
            </h2>
            <p>
              {isKo
                ? '오늘날 디지털 결제는 네트워크, POS, 승인 서버, 회선 비용과 같은 복잡한 구조에 의존합니다. KORION Offline Pay는 스마트폰 자체를 신뢰 기반 장치로 활용해 연결이 없는 상황에서도 결제가 작동하는 새로운 접근을 제시합니다.'
                : 'Today’s digital payments depend on networks, POS terminals, authorization servers, and communication costs. KORION Offline Pay proposes a new approach where the smartphone itself becomes a trust-based payment device, allowing payments even when there is no connection.'}
            </p>
          </div>

          <div className="korionpay-feature-grid">
            {offlineFeatures.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.titleEn}
                  className="korionpay-feature-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55 }}
                >
                  <div className="korionpay-feature-card__icon">
                    <Icon size={20} />
                  </div>
                  <h3>{isKo ? item.titleKo : item.titleEn}</h3>
                  <p>{isKo ? item.descKo : item.descEn}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="pay-architecture" className="korionpay-section">
        <div className="korionpay-page__container-01">
          <div className="korionpay-section__head">
            <span className="korionpay-section__label">
              {isKo ? '특허 기반 아키텍처' : 'Patent-Based Architecture'}
            </span>
            <h2>
              {isKo
                ? '특허 출원형 핵심 개념을 반영한 구조'
                : 'A structure reflecting patent-oriented core concepts'}
            </h2>
            <p>
              {isKo
                ? '아래 내용은 KORION PAY가 지향하는 오프라인 결제 아키텍처의 핵심 개념입니다. TEE, 단조 카운터, Hash-Chain, Collateral Lock, Lazy Clearing과 같은 요소를 기반으로 기존 결제 인프라와 다른 신뢰 구조를 설명합니다.'
                : 'The following sections describe the core concepts behind the offline payment architecture envisioned by KORION PAY. Based on TEE, monotonic counters, hash-chains, collateral lock, and lazy clearing, it presents a trust model different from conventional payment infrastructure.'}
            </p>
          </div>

          <div className="korionpay-patent-grid">
            {patentedPoints.map((item, index) => (
              <motion.div
                key={item.titleEn}
                className="korionpay-patent-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
              >
                <span className="korionpay-patent-card__index">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <h3>{isKo ? item.titleKo : item.titleEn}</h3>
                <p>{isKo ? item.descKo : item.descEn}</p>
              </motion.div>
            ))}
          </div>

          <div className="korionpay-architecture-flow">
            <div className="korionpay-flow-card">
              <Cpu size={20} />
              <strong>{isKo ? '보안 디바이스 레이어' : 'Secure Device Layer'}</strong>
              <span>TEE · Security Chip · Trusted Execution</span>
            </div>
            <div className="korionpay-flow-arrow">→</div>
            <div className="korionpay-flow-card">
              <Layers3 size={20} />
              <strong>{isKo ? '거래 무결성 레이어' : 'Transaction Integrity Layer'}</strong>
              <span>Monotonic Counter · Hash-Chain</span>
            </div>
            <div className="korionpay-flow-arrow">→</div>
            <div className="korionpay-flow-card">
              <Coins size={20} />
              <strong>{isKo ? '가치 안전성 레이어' : 'Value Safety Layer'}</strong>
              <span>Collateral Lock · Spend Boundaries</span>
            </div>
            <div className="korionpay-flow-arrow">→</div>
            <div className="korionpay-flow-card">
              <RefreshCw size={20} />
              <strong>{isKo ? '정산 레이어' : 'Settlement Layer'}</strong>
              <span>Lazy Clearing · Network Sync</span>
            </div>
          </div>
        </div>
      </section>

      <section className="korionpay-section korionpay-section--deep">
        <div className="korionpay-page__container-01">
          <div className="korionpay-section__head">
            <span className="korionpay-section__label">
              {isKo ? '온라인 확장성' : 'Online Expansion'}
            </span>
            <h2>
              {isKo
                ? 'Online Pay는 연결성을 확장합니다'
                : 'Online Pay expands connectivity'}
            </h2>
            <p>
              {isKo
                ? 'Offline Pay가 연결이 없는 환경에서의 혁신이라면, Online Pay는 연결된 환경에서 KORION의 결제 생태계를 서비스와 상점, 디지털 플랫폼으로 확장하는 역할을 합니다.'
                : 'If Offline Pay is an innovation for disconnected environments, Online Pay extends the KORION payment ecosystem across services, merchants, and digital platforms in connected environments.'}
            </p>
          </div>

          <div className="korionpay-feature-grid">
            {onlineFeatures.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.titleEn}
                  className="korionpay-feature-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55 }}
                >
                  <div className="korionpay-feature-card__icon">
                    <Icon size={20} />
                  </div>
                  <h3>{isKo ? item.titleKo : item.titleEn}</h3>
                  <p>{isKo ? item.descKo : item.descEn}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="pay-comparison" className="korionpay-section">
        <div className="korionpay-page__container-01">
          <div className="korionpay-section__head">
            <span className="korionpay-section__label">
              {isKo ? '비교' : 'Comparison'}
            </span>
            <h2>
              {isKo
                ? '기존 결제와의 구조적 차이'
                : 'Structural differences from traditional payments'}
            </h2>
            <p>
              {isKo
                ? 'KORION PAY는 기존 카드/페이 모델을 단순 복제하는 것이 아니라, 결제를 작동시키는 전제 자체를 다시 설계합니다.'
                : 'KORION PAY does not simply copy legacy card or payment models. It redesigns the very assumptions that make payments work.'}
            </p>
          </div>

          <div className="korionpay-table-wrap">
            <table className="korionpay-table">
              <thead>
                <tr>
                  <th>{isKo ? '구분' : 'Category'}</th>
                  <th>{isKo ? '기존 카드 / 페이' : 'Traditional Card / Pay'}</th>
                  <th>KORION PAY</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.key}>
                    <td>{isKo ? row.labelKo : row.labelEn}</td>
                    <td>{isKo ? row.legacyKo : row.legacyEn}</td>
                    <td>{isKo ? row.korionKo : row.korionEn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="korionpay-section korionpay-section--deep">
        <div className="korionpay-page__container-01">
          <div className="korionpay-section__head">
            <span className="korionpay-section__label">
              {isKo ? '활용 환경' : 'Use Cases'}
            </span>
            <h2>
              {isKo
                ? '지금까지 결제가 불가능했던 환경을 시장으로 전환'
                : 'Turning previously unreachable payment environments into markets'}
            </h2>
            <p>
              {isKo
                ? 'Offline Pay는 기존 결제를 단순히 대체하는 것이 아니라, 기존 인프라가 닿지 못했던 환경 자체를 새로운 경제 활동 영역으로 확장시키는 개념입니다.'
                : 'Offline Pay is not merely a substitute for existing payment systems. It expands environments previously unreachable by infrastructure into new economic zones.'}
            </p>
          </div>

          <div className="korionpay-usecases">
            {useCases.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.titleEn} className="korionpay-usecase">
                  <div className="korionpay-usecase__icon">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3>{isKo ? item.titleKo : item.titleEn}</h3>
                    <p>{isKo ? item.descKo : item.descEn}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="korionpay-section">
        <div className="korionpay-page__container-01">
          <div className="korionpay-simplicity">
            <div className="korionpay-simplicity__left">
              <span className="korionpay-section__label">
                {isKo ? '사용자 경험' : 'User Experience'}
              </span>
              <h2>
                {isKo
                  ? 'Offline Pay는 사용법을 없앴습니다'
                  : 'Offline Pay removes the learning curve'}
              </h2>
              <p>
                {isKo
                  ? '디지털 자산은 긴 주소, QR 스캔, 네트워크 확인, 전송 대기, 수수료 계산 같은 복잡성 때문에 일반 사용자에게 어려웠습니다. KORION PAY는 결제 경험을 카드처럼 단순하게 만드는 데 초점을 둡니다.'
                  : 'Digital assets have often been difficult for ordinary users because of long addresses, QR scans, network checks, transfer waiting, and fee calculations. KORION PAY focuses on making the payment experience as simple as using a card.'}
              </p>
            </div>

            <div className="korionpay-steps">
              <div className="korionpay-step">
                <span>01</span>
                <h3>{isKo ? '스마트폰을 가까이' : 'Bring smartphones close'}</h3>
                <p>
                  {isKo
                    ? '복잡한 주소 입력 없이 직관적으로 결제 시작'
                    : 'Start payment intuitively without complex address entry'}
                </p>
              </div>
              <div className="korionpay-step">
                <span>02</span>
                <h3>{isKo ? '금액 확인' : 'Confirm the amount'}</h3>
                <p>
                  {isKo
                    ? '사용자는 카드 결제처럼 금액만 확인하면 됩니다'
                    : 'Users only need to confirm the amount, just like a card payment'}
                </p>
              </div>
              <div className="korionpay-step">
                <span>03</span>
                <h3>{isKo ? '즉시 완료' : 'Complete instantly'}</h3>
                <p>
                  {isKo
                    ? '네트워크 대기 없이 결제 경험을 간결하게 구성'
                    : 'Keep the payment flow concise without waiting for the network'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="korionpay-section korionpay-section--deep">
        <div className="korionpay-page__container-01">
          <div className="korionpay-investor">
            <div className="korionpay-investor__panel">
              <span className="korionpay-section__label">
                {isKo ? '왜 중요한가' : 'Why It Matters'}
              </span>
              <h2>
                {isKo
                  ? '왜 투자자와 파트너가 주목해야 하는가'
                  : 'Why investors and partners should pay attention'}
              </h2>
              <div className="korionpay-investor__list">
                {investorPoints.map((item, index) => (
                  <div key={index} className="korionpay-investor__item">
                    <Radio size={18} />
                    <p>{isKo ? item.ko : item.en}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="korionpay-investor__side">
              <div className="korionpay-sidecard">
                <Cable size={22} />
                <h3>{isKo ? '항상 작동하는 경제' : 'Always-On Economy'}</h3>
                <p>
                  {isKo
                    ? '연결이 끊기더라도 경제 활동이 멈추지 않는 결제 구조는 기존 금융 인프라의 한계를 보완하는 새로운 방향이 될 수 있습니다.'
                    : 'A payment structure that keeps economic activity running even when connectivity is lost can become a meaningful complement to the limits of existing financial infrastructure.'}
                </p>
              </div>
              <div className="korionpay-sidecard">
                <Building2 size={22} />
                <h3>{isKo ? '인프라 절감' : 'Infrastructure Reduction'}</h3>
                <p>
                  {isKo
                    ? '별도 단말기, 통신 의존, 승인 지연을 줄이는 모델은 소상공인과 신흥 시장에서 높은 확장 잠재력을 가집니다.'
                    : 'A model that reduces separate terminals, communication dependence, and approval delays has strong expansion potential for small merchants and emerging markets.'}
                </p>
              </div>
              <div className="korionpay-sidecard">
                <Landmark size={22} />
                <h3>{isKo ? '전략적 유틸리티' : 'Strategic Utility'}</h3>
                <p>
                  {isKo
                    ? '단순 토큰 사용처를 넘어 실제 결제 인프라 서사로 연결될 수 있다는 점이 KORION PAY의 핵심 차별 요소입니다.'
                    : 'One of KORION PAY’s key differentiators is that it extends beyond token utility into a real payment infrastructure narrative.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="korionpay-cta-section">
        <div className="korionpay-page__container-01">
          <div className="korionpay-cta-box">
            <span className="korionpay-section__label">KORION PAY</span>
            <h2>
              {isKo ? (
                <>
                  Offline Pay와 Online Pay를 통해
                  <br />
                  KORION은 결제를 다시 정의합니다
                </>
              ) : (
                <>
                  Through Offline Pay and Online Pay,
                  <br />
                  KORION redefines payment
                </>
              )}
            </h2>
            <p>
              {isKo
                ? 'KORION PAY는 단순한 결제 앱이 아니라, 연결이 없는 환경과 연결된 환경을 모두 포괄하는 디지털 결제 인프라로 진화하는 것을 목표로 합니다.'
                : 'KORION PAY is not merely a payment app. It aims to evolve into a digital payment infrastructure spanning both disconnected and connected environments.'}
            </p>
            <div className="korionpay-cta-box__actions">
              <a href="#pay-architecture" className="korionpay-btn korionpay-btn--primary">
                {isKo ? '기술 보기' : 'View Technology'}
                <ArrowRight size={18} />
              </a>
              <a href="#top" className="korionpay-btn korionpay-btn--ghost">
                {isKo ? '맨 위로' : 'Back to Top'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}