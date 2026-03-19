import { motion } from 'motion/react';
import {
    ShieldCheck,
    Vault,
    Wallet,
    Snowflake,
    Flame,
    Waves,
    Gift,
    Megaphone,
    Landmark,
    LockKeyhole,
    Eye,
    AlertTriangle,
    ChevronRight,
    ArrowUpRight,
    Workflow,
    CircleDollarSign,
    BadgeCheck,
    Layers3,
    } from 'lucide-react';
    import { Link } from 'react-router';
    import { useLanguage } from '../contexts/LanguageContext';
    import './TreasuryPage.css';

    const treasuryPrinciples = [
    {
        icon: ShieldCheck,
        titleEn: 'Collective Authorization',
        titleKo: '집단 승인 구조',
        descEn:
        'Critical treasury actions are designed around collective authorization rather than unilateral control.',
        descKo:
        '핵심 트레저리 행위는 단일 주체가 아닌 집단 승인 구조를 중심으로 설계됩니다.',
    },
    {
        icon: Layers3,
        titleEn: 'Risk Separation',
        titleKo: '리스크 분리',
        descEn:
        'Reserve storage, market liquidity, rewards, growth budget, and operational settlement are separated by role.',
        descKo:
        '준비금 보관, 유동성, 리워드, 성장 예산, 운영 정산은 목적에 따라 분리 관리됩니다.',
    },
    {
        icon: Workflow,
        titleEn: 'Procedural Control',
        titleKo: '절차 기반 통제',
        descEn:
        'Treasury movement follows defined review, threshold, and approval procedures based on wallet risk profile.',
        descKo:
        '트레저리 이동은 지갑별 위험도에 따라 정의된 검토·임계치·승인 절차를 따릅니다.',
    },
    {
        icon: BadgeCheck,
        titleEn: 'Supply Integrity',
        titleKo: '공급 무결성',
        descEn:
        'Governance protects allocation discipline, reserve credibility, and ecosystem confidence over the long term.',
        descKo:
        '거버넌스는 장기적으로 할당 질서, 준비금 신뢰성, 생태계 신뢰를 보호합니다.',
    },
    ];

    const walletLayers = [
    {
        icon: Snowflake,
        titleEn: 'Cold Reserve Wallet',
        titleKo: '콜드 리저브 월렛',
        descEn:
        'High-security reserve storage for long-term preservation, strategic stability, and minimal exposure.',
        descKo:
        '장기 보존, 전략적 안정성, 최소 노출을 위한 고보안 준비금 저장 지갑입니다.',
        badge: '50%',
    },
    {
        icon: Waves,
        titleEn: 'Liquidity Wallet',
        titleKo: '유동성 월렛',
        descEn:
        'Supports market-making readiness, exchange connectivity, and orderly token circulation.',
        descKo:
        '시장 유동성 대응, 거래 준비, 질서 있는 토큰 순환을 지원하는 지갑입니다.',
        badge: '20%',
    },
    {
        icon: Gift,
        titleEn: 'Reward Pool Wallet',
        titleKo: '리워드 풀 월렛',
        descEn:
        'Used for policy-governed mining rewards and ecosystem incentive settlement.',
        descKo:
        '정책 기반 채굴 보상과 생태계 인센티브 정산에 사용되는 지갑입니다.',
        badge: '23%',
    },
    {
        icon: Megaphone,
        titleEn: 'Marketing & Ecosystem Wallet',
        titleKo: '마케팅 · 생태계 월렛',
        descEn:
        'Supports adoption programs, campaigns, partnerships, and ecosystem growth activities.',
        descKo:
        '채택 확대, 캠페인, 파트너십, 생태계 성장 활동을 지원하는 지갑입니다.',
        badge: '4%',
    },
    {
        icon: Flame,
        titleEn: 'Hot / Operational Wallet',
        titleKo: '핫 · 운영 월렛',
        descEn:
        'Handles routine settlement and active transactions under tight exposure and usage limits.',
        descKo:
        '제한된 노출과 사용 범위 내에서 일상 정산과 능동적 운영 거래를 담당합니다.',
        badge: '3%',
    },
    ];

    const controlFlow = [
    {
        step: '01',
        icon: Eye,
        titleEn: 'Request & Review',
        titleKo: '요청 및 검토',
        descEn:
        'A treasury action begins with purpose validation, wallet scope review, and policy fit assessment.',
        descKo:
        '트레저리 행위는 목적 검증, 지갑 범위 확인, 정책 적합성 검토로 시작됩니다.',
    },
    {
        step: '02',
        icon: LockKeyhole,
        titleEn: 'Threshold Approval',
        titleKo: '임계치 승인',
        descEn:
        'Signature requirements and internal review depth differ according to exposure and risk category.',
        descKo:
        '서명 요건과 내부 검토 수준은 노출도와 위험 등급에 따라 달라집니다.',
    },
    {
        step: '03',
        icon: Wallet,
        titleEn: 'Controlled Execution',
        titleKo: '통제된 실행',
        descEn:
        'Execution is limited to defined wallet purpose, approved amount, and authorized operational scope.',
        descKo:
        '실행은 승인된 금액, 지갑 목적, 허가된 운영 범위 안에서만 수행됩니다.',
    },
    {
        step: '04',
        icon: Landmark,
        titleEn: 'Logging & Post Review',
        titleKo: '기록 및 사후 검토',
        descEn:
        'Treasury actions are followed by logging, monitoring, and post-event operational review.',
        descKo:
        '트레저리 행위 이후에는 기록, 모니터링, 사후 운영 검토가 이어집니다.',
    },
    ];

    const safeguards = [
    {
        icon: ShieldCheck,
        titleEn: 'No Single-Key Dependency',
        titleKo: '단일 키 의존 배제',
        descEn:
        'Critical reserve movement should not depend on one compromised key or one unilateral actor.',
        descKo:
        '핵심 준비금 이동은 하나의 키나 단일 행위자에 의존하지 않도록 설계됩니다.',
    },
    {
        icon: Snowflake,
        titleEn: 'Minimal Cold Movement',
        titleKo: '콜드 이동 최소화',
        descEn:
        'Cold reserve operations are designed for low frequency and higher internal scrutiny.',
        descKo:
        '콜드 준비금은 낮은 빈도와 더 높은 내부 검토를 전제로 운영됩니다.',
    },
    {
        icon: Flame,
        titleEn: 'Limited Hot Exposure',
        titleKo: '핫 노출 최소화',
        descEn:
        'Operational wallets support activity, but balances and transaction scope remain intentionally constrained.',
        descKo:
        '운영용 지갑은 활동을 지원하지만 잔액과 거래 범위는 의도적으로 제한됩니다.',
    },
    {
        icon: AlertTriangle,
        titleEn: 'Emergency Controls',
        titleKo: '비상 통제 체계',
        descEn:
        'Abnormal events require escalation paths, exceptional review procedures, and suspension capability.',
        descKo:
        '이상 상황 발생 시 상향 보고, 예외 심사, 일시 중지 기능이 작동해야 합니다.',
    },
    ];

    export function TreasuryPage() {
    const { language } = useLanguage();
    const isKo = language === 'KR';

    return (
        <div className="treasury-page">
        <section className="treasury-hero">
            <div className="treasury-hero__bg">
            <div className="treasury-hero__noise" />
            <div className="treasury-hero__grid" />
            <div className="treasury-hero__spot treasury-hero__spot--one" />
            <div className="treasury-hero__spot treasury-hero__spot--two" />
            <div className="treasury-hero__spot treasury-hero__spot--three" />
            </div>

            <div className="treasury-page__container treasury-hero__container">
            <div className="treasury-hero__copy">
                <motion.div
                className="treasury-hero__eyebrow"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                >
                <Vault size={16} />
                <span>{isKo ? 'KORION TREASURY' : 'KORION TREASURY'}</span>
                </motion.div>

                <motion.h1
                className="treasury-hero__title"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                >
                {isKo ? (
                    <>
                    멀티시그 기반 자산 통제와
                    <br />
                    구조적 분리를 통해
                    <br />
                    <span>지속 가능한 Treasury</span>
                    </>
                ) : (
                    <>
                    Sustainable Treasury
                    <br />
                    through multisig control
                    <br />
                    and structural separation
                    </>
                )}
                </motion.h1>

                <motion.p
                className="treasury-hero__text"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.12 }}
                >
                {isKo
                    ? 'KORION Treasury는 단순 보관 개념이 아니라, 준비금 보호, 운영 리스크 분리, 정책 기반 승인, 유동성 지원, 보상 지속성, 그리고 생태계 신뢰를 함께 설계하는 자산 운영 구조입니다.'
                    : 'KORION Treasury is not a simple storage concept. It is a structured asset operating model designed to protect reserves, separate operational risk, govern movement through policy-based approvals, support liquidity, sustain incentives, and strengthen ecosystem trust.'}
                </motion.p>

                <motion.div
                className="treasury-hero__actions"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.18 }}
                >
                <a href="#treasury-wallets" className="treasury-btn treasury-btn--primary">
                    <span>{isKo ? '자산 구조 보기' : 'Explore Treasury Layers'}</span>
                    <ChevronRight size={18} />
                </a>

                <Link to="/whitepaper" className="treasury-btn treasury-btn--secondary">
                    <span>{isKo ? '백서 보기' : 'View Whitepaper'}</span>
                    
                </Link>

                
                </motion.div>

                <motion.div
                className="treasury-hero__stats"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.24 }}
                >
                <div className="treasury-hero__stat">
                    <strong>{isKo ? '통제 원칙' : 'Control Model'}</strong>
                    <span>{isKo ? '멀티시그 · 절차 승인' : 'Multisig · Procedural Approval'}</span>
                </div>
                <div className="treasury-hero__stat">
                    <strong>{isKo ? '구조 원칙' : 'Structure Model'}</strong>
                    <span>{isKo ? '지갑 역할 분리 운영' : 'Role-separated wallet architecture'}</span>
                </div>
                <div className="treasury-hero__stat">
                    <strong>{isKo ? '보안 원칙' : 'Security Model'}</strong>
                    <span>{isKo ? '콜드 보호 · 핫 노출 제한' : 'Cold protection · Limited hot exposure'}</span>
                </div>
                </motion.div>
            </div>

            
            </div>
        </section>

        <section className="treasury-section treasury-section--principles">
            <div className="treasury-page__container-01">
            <div className="treasury-section__head treasury-section__head--center">
                <span className="treasury-section__kicker">
                {isKo ? 'TREASURY PHILOSOPHY' : 'TREASURY PHILOSOPHY'}
                </span>
                <h2>
                {isKo
                    ? 'KORION 트레저리는 보관보다 통제와 신뢰를 우선하는 구조입니다'
                    : 'KORION Treasury prioritizes control and trust beyond simple custody'}
                </h2>
                <p>
                {isKo
                    ? '트레저리 구조는 단순히 자산을 모아두는 개념이 아니라, 공급 질서와 준비금 신뢰성을 유지하고 운영 리스크를 분리하며 생태계 확장에 필요한 자본 흐름을 정책적으로 관리하는 시스템입니다.'
                    : 'The treasury model is not just about holding assets. It exists to preserve supply discipline, maintain reserve credibility, separate operational risk, and manage strategic capital flows required for ecosystem expansion through policy-driven controls.'}
                </p>
            </div>

            <div className="treasury-principles">
                {treasuryPrinciples.map((item, index) => {
                const Icon = item.icon;
                return (
                    <motion.article
                    key={item.titleEn}
                    className="treasury-principle-card"
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55, delay: index * 0.05 }}
                    >
                    <div className="treasury-principle-card__icon">
                        <Icon size={20} />
                    </div>
                    <h3>{isKo ? item.titleKo : item.titleEn}</h3>
                    <p>{isKo ? item.descKo : item.descEn}</p>
                    </motion.article>
                );
                })}
            </div>
            </div>
        </section>

        <section id="treasury-wallets" className="treasury-section treasury-section--wallets">
            <div className="treasury-page__container-01">
            <div className="treasury-section__head">
                <span className="treasury-section__kicker">
                {isKo ? 'TREASURY LAYERS' : 'TREASURY LAYERS'}
                </span>
                <h2>
                {isKo
                    ? '자산은 하나의 지갑이 아니라 역할별 레이어로 분리됩니다'
                    : 'Assets are separated into functional wallet layers, not concentrated in one place'}
                </h2>
                <p>
                {isKo
                    ? '백서 기준의 KORION treasury architecture는 cold reserve, liquidity, reward, marketing, operational wallet로 분리되어 각기 다른 목적과 다른 승인 기준 아래 운영됩니다.'
                    : 'Under the whitepaper-based KORION treasury architecture, cold reserve, liquidity, reward, marketing, and operational wallets are separated and managed under different purposes and different approval expectations.'}
                </p>
            </div>

            <div className="treasury-wallet-grid">
                {walletLayers.map((item, index) => {
                const Icon = item.icon;
                return (
                    <motion.article
                    key={item.titleEn}
                    className="treasury-wallet-card"
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.18 }}
                    transition={{ duration: 0.55, delay: index * 0.05 }}
                    >
                    <div className="treasury-wallet-card__top">
                        <div className="treasury-wallet-card__icon">
                        <Icon size={20} />
                        </div>
                        <span className="treasury-wallet-card__badge">{item.badge}</span>
                    </div>
                    <h3>{isKo ? item.titleKo : item.titleEn}</h3>
                    <p>{isKo ? item.descKo : item.descEn}</p>
                    </motion.article>
                );
                })}
            </div>
            </div>
        </section>

        <section className="treasury-section treasury-section--flow">
            <div className="treasury-page__container-01 treasury-flow-layout">
            <div className="treasury-flow-copy">
                <span className="treasury-section__kicker">
                {isKo ? 'OPERATION MODEL' : 'OPERATION MODEL'}
                </span>
                <h2>
                {isKo
                    ? '트레저리 운영은 요청부터 사후 검토까지 단계적으로 통제됩니다'
                    : 'Treasury operations are controlled step by step from request to post-review'}
                </h2>
                <p>
                {isKo
                    ? '핵심 포인트는 “누가 보냈는가”보다 “왜, 어떤 범위에서, 어떤 승인 절차를 거쳤는가”입니다. 따라서 트레저리 실행은 요청, 검토, 승인, 제한된 실행, 기록과 검토의 흐름으로 이해하는 것이 맞습니다.'
                    : 'The key question is not merely who moved an asset, but why it was moved, within what scope, and under which approval path. Treasury execution is therefore best understood as a staged process of request, review, approval, controlled execution, and post-event monitoring.'}
                </p>
            </div>

            <div className="treasury-flow-cards">
                {controlFlow.map((item, index) => {
                const Icon = item.icon;
                return (
                    <motion.article
                    key={item.step}
                    className="treasury-flow-card"
                    initial={{ opacity: 0, x: 26 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55, delay: index * 0.06 }}
                    >
                    <div className="treasury-flow-card__meta">
                        <span className="treasury-flow-card__step">{item.step}</span>
                        <div className="treasury-flow-card__icon">
                        <Icon size={18} />
                        </div>
                    </div>
                    <h3>{isKo ? item.titleKo : item.titleEn}</h3>
                    <p>{isKo ? item.descKo : item.descEn}</p>
                    </motion.article>
                );
                })}
            </div>
            </div>
        </section>

        <section className="treasury-section treasury-section--safeguards">
            <div className="treasury-page__container-01">
            <div className="treasury-section__head treasury-section__head--center">
                <span className="treasury-section__kicker">
                {isKo ? 'SAFEGUARD SYSTEM' : 'SAFEGUARD SYSTEM'}
                </span>
                <h2>
                {isKo
                    ? '트레저리 보안은 기술보다 원칙과 운영 구조에서 시작됩니다'
                    : 'Treasury security begins with principles and operating structure, not only with technology'}
                </h2>
                <p>
                {isKo
                    ? 'KORION treasury의 보안은 지갑 분리, 집단 승인, hot exposure 제한, 시스템 역할 분리, 비상 통제, 기록과 사후 검토까지 포함하는 다층 구조를 지향합니다.'
                    : 'Treasury security in KORION aims for a layered model that includes wallet segregation, collective authorization, limited hot exposure, separated system roles, emergency controls, logging, and post-event review.'}
                </p>
            </div>

            <div className="treasury-safeguards">
                {safeguards.map((item, index) => {
                const Icon = item.icon;
                return (
                    <motion.article
                    key={item.titleEn}
                    className="treasury-safeguard-card"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                    <div className="treasury-safeguard-card__icon">
                        <Icon size={18} />
                    </div>
                    <div>
                        <h3>{isKo ? item.titleKo : item.titleEn}</h3>
                        <p>{isKo ? item.descKo : item.descEn}</p>
                    </div>
                    </motion.article>
                );
                })}
            </div>
            </div>
        </section>

        <section className="treasury-section treasury-section--cta">
            <div className="treasury-page__container-01">
            <motion.div
                className="treasury-cta"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6 }}
            >
                <div className="treasury-cta__copy">
                <span className="treasury-section__kicker">
                    {isKo ? 'TREASURY VISION' : 'TREASURY VISION'}
                </span>
                <h2>
                    {isKo
                    ? 'KORION Treasury는 자산을 보관하는 곳이 아니라 신뢰를 설계하는 구조입니다'
                    : 'KORION Treasury is not where assets simply sit — it is where trust is structured'}
                </h2>
                <p>
                    {isKo
                    ? '준비금 보존, 유동성 운영, 리워드 지속성, 운영 정산, 비상 통제까지 하나의 정책 구조로 연결함으로써 KORION은 장기 생태계 확장에 필요한 자산 신뢰 체계를 구축합니다.'
                    : 'By connecting reserve preservation, liquidity operations, reward sustainability, operational settlement, and emergency control into one policy structure, KORION builds the treasury trust framework required for long-term ecosystem growth.'}
                </p>
                </div>

                <div className="treasury-cta__actions">
                <Link to="/whitepaper" className="treasury-btn treasury-btn--primary">
                    <span>{isKo ? '백서 기준 확인' : 'Review Whitepaper'}</span>
                    <ArrowUpRight size={18} />
                </Link>
                <Link to="/foundation" className="treasury-btn treasury-btn--secondary">
                    <span>{isKo ? '재단 페이지 보기' : 'Foundation Page'}</span>
                </Link>
                </div>
            </motion.div>
            </div>
        </section>
        </div>
    );
    }