import { motion } from 'motion/react';
import {
    Landmark,
    ShieldCheck,
    Network,
    Globe2,
    Scale,
    Layers3,
    Sparkles,
    ChevronRight,
    BadgeCheck,
    Orbit,
    Blocks,
    Handshake,
    LineChart,
    LockKeyhole,
    ArrowUpRight,
    } from 'lucide-react';
    import { Link } from 'react-router';
    import { useLanguage } from '../contexts/LanguageContext';
    import './FoundationPage.css';

    const governancePillars = [
    {
        icon: ShieldCheck,
        titleEn: 'Integrity & Stewardship',
        titleKo: '무결성과 책임 있는 관리',
        descEn:
        'The foundation is designed to protect ecosystem continuity, preserve user trust, and manage strategic resources with discipline.',
        descKo:
        '재단은 생태계의 지속성을 보호하고, 사용자 신뢰를 유지하며, 전략 자원을 책임감 있게 관리하도록 설계됩니다.',
    },
    {
        icon: Scale,
        titleEn: 'Transparent Governance',
        titleKo: '투명한 거버넌스',
        descEn:
        'Operational principles, ecosystem policies, and strategic direction are aligned around clarity, accountability, and long-term public credibility.',
        descKo:
        '운영 원칙, 생태계 정책, 전략 방향은 명확성, 책임성, 장기적 공신력을 중심으로 정렬됩니다.',
    },
    {
        icon: Network,
        titleEn: 'Ecosystem Coordination',
        titleKo: '생태계 조정 기능',
        descEn:
        'The foundation acts as a coordination layer connecting products, communities, partners, infrastructure, and future platform services.',
        descKo:
        '재단은 제품, 커뮤니티, 파트너, 인프라, 미래 플랫폼 서비스를 연결하는 조정 허브의 역할을 수행합니다.',
    },
    {
        icon: Globe2,
        titleEn: 'Global Expansion Readiness',
        titleKo: '글로벌 확장 준비성',
        descEn:
        'KORION is structured to evolve beyond a single service or region, enabling scalable partnerships and multi-market ecosystem growth.',
        descKo:
        'KORION은 단일 서비스나 지역에 머무르지 않고, 확장 가능한 파트너십과 다중 시장 생태계 성장을 지향하도록 구조화됩니다.',
    },
    ];

    const operatingPrinciples = [
    {
        icon: BadgeCheck,
        titleEn: 'User-Centered Stability',
        titleKo: '사용자 중심 안정성',
        descEn:
        'Core decisions prioritize ecosystem stability, service continuity, and predictable user experience over short-term noise.',
        descKo:
        '핵심 의사결정은 단기적 변동보다 생태계 안정성, 서비스 지속성, 예측 가능한 사용자 경험을 우선합니다.',
    },
    {
        icon: LockKeyhole,
        titleEn: 'Security-First Operations',
        titleKo: '보안 우선 운영',
        descEn:
        'The foundation supports an operating culture where wallet infrastructure, payment rails, and ecosystem systems are expanded with security in mind.',
        descKo:
        '재단은 지갑 인프라, 결제 네트워크, 생태계 시스템이 보안을 최우선 가치로 확장되도록 운영 문화를 뒷받침합니다.',
    },
    {
        icon: Layers3,
        titleEn: 'Structured Decision Layers',
        titleKo: '계층적 의사결정 구조',
        descEn:
        'Strategic direction, policy formation, execution oversight, and ecosystem support are separated into clear functional layers.',
        descKo:
        '전략 방향, 정책 수립, 실행 관리, 생태계 지원 기능을 명확한 계층 구조로 분리하여 운영합니다.',
    },
    {
        icon: Handshake,
        titleEn: 'Partnership Alignment',
        titleKo: '파트너십 정렬',
        descEn:
        'The foundation aligns external collaborations with the ecosystem’s long-term vision, utility, and trust framework.',
        descKo:
        '재단은 외부 협력 관계를 생태계의 장기 비전, 실사용성, 신뢰 구조와 일치시키는 역할을 합니다.',
    },
    ];

    const structureFlow = [
    {
        icon: Landmark,
        titleEn: 'Foundation',
        titleKo: 'Foundation',
        bodyEn:
        'Vision holding body that safeguards long-term ecosystem direction and structural continuity.',
        bodyKo:
        '장기 생태계 방향성과 구조적 지속성을 유지하는 비전 중심 기관',
    },
    {
        icon: Blocks,
        titleEn: 'Policy & Governance',
        titleKo: '정책 · 거버넌스',
        bodyEn:
        'Defines operating standards, strategic rules, governance principles, and ecosystem frameworks.',
        bodyKo:
        '운영 기준, 전략 규칙, 거버넌스 원칙, 생태계 프레임워크를 설계',
    },
    {
        icon: Orbit,
        titleEn: 'Platform & Service Layer',
        titleKo: '플랫폼 · 서비스 레이어',
        bodyEn:
        'Connects wallet, payment, utility, and future application services into one coordinated ecosystem.',
        bodyKo:
        '지갑, 결제, 유틸리티, 미래 서비스들을 하나의 생태계로 연결',
    },
    {
        icon: LineChart,
        titleEn: 'Expansion & Sustainability',
        titleKo: '확장 · 지속성',
        bodyEn:
        'Supports adoption growth, ecosystem partnerships, and long-range strategic scaling.',
        bodyKo:
        '이용자 확대, 파트너십 확장, 장기 전략 스케일업을 지원',
    },
    ];

    const roadmapSignals = [
    {
        year: 'Phase 01',
        titleEn: 'Foundation of Trust',
        titleKo: '신뢰 기반 구축',
        descEn:
        'Define the governance identity of KORION and establish a stable institutional narrative around ecosystem stewardship.',
        descKo:
        'KORION의 거버넌스 정체성을 정립하고, 생태계 관리 주체로서의 안정적 서사를 구축합니다.',
    },
    {
        year: 'Phase 02',
        titleEn: 'Operational Coordination',
        titleKo: '운영 체계 정렬',
        descEn:
        'Standardize policy logic, service principles, ecosystem support responsibilities, and collaboration pathways.',
        descKo:
        '정책 기준, 서비스 원칙, 생태계 지원 책임, 협력 경로를 체계적으로 정렬합니다.',
    },
    {
        year: 'Phase 03',
        titleEn: 'Utility Expansion',
        titleKo: '실사용 확장',
        descEn:
        'Expand the connection between token utility, wallet services, payment scenarios, and platform participation.',
        descKo:
        '토큰 유틸리티, 지갑 서비스, 결제 시나리오, 플랫폼 참여 구조의 연결을 확장합니다.',
    },
    {
        year: 'Phase 04',
        titleEn: 'Global Ecosystem Reach',
        titleKo: '글로벌 생태계 확장',
        descEn:
        'Advance toward a broader ecosystem model capable of integrating partners, services, and regional growth channels.',
        descKo:
        '파트너, 서비스, 지역 확장 채널을 포괄하는 더 넓은 생태계 모델로 발전합니다.',
    },
    ];

    export function FoundationPage() {
    const { language } = useLanguage();
    const isKo = language === 'KR';

    return (
        <div className="foundation-page">
        <section className="foundation-page__hero">
            <div className="foundation-page__hero-bg">
            <div className="foundation-page__grid" />
            <div className="foundation-page__orb foundation-page__orb--one" />
            <div className="foundation-page__orb foundation-page__orb--two" />
            <div className="foundation-page__orb foundation-page__orb--three" />
            <div className="foundation-page__beam foundation-page__beam--left" />
            <div className="foundation-page__beam foundation-page__beam--right" />
            </div>

            <div className="foundation-page__container foundation-page__hero-container">
            <div className="foundation-page__hero-copy">
                <motion.div
                className="foundation-page__eyebrow"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65 }}
                >
                <Sparkles size={16} />
                <span>{isKo ? 'KORION FOUNDATION' : 'KORION FOUNDATION'}</span>
                </motion.div>

                <motion.h1
                className="foundation-page__hero-title"
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.06 }}
                >
                {isKo ? (
                    <>
                    생태계의 방향을 지키고
                    <br />
                    장기적 확장을 설계하는
                    <br />
                    <span>Foundation Structure</span>
                    </>
                ) : (
                    <>
                    A Foundation Structure
                    <br />
                    that safeguards direction,
                    <br />
                    and architects long-term growth
                    </>
                )}
                </motion.h1>

                <motion.p
                className="foundation-page__hero-text"
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.12 }}
                >
                {isKo
                    ? 'KORION Foundation은 재단 구조, 운영 원칙, 거버넌스 방향, 그리고 장기적 생태계 확장 전략을 안내하는 중심 축입니다. 단기 운영 단위를 넘어, 신뢰와 지속성을 축적하는 구조적 기반으로 설계됩니다.'
                    : 'The KORION Foundation serves as the structural center for governance direction, operating principles, and long-term ecosystem expansion. It is designed not merely as an administrative layer, but as a durable institutional framework for trust, continuity, and strategic growth.'}
                </motion.p>

                <motion.div
                className="foundation-page__hero-actions"
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.18 }}
                >
                <Link to="/whitepaper" className="foundation-page__primary-btn">
                    <span>{isKo ? '백서 보기' : 'View Whitepaper'}</span>
                    <ChevronRight size={18} />
                </Link>

                <a href="#foundation-structure" className="foundation-page__secondary-btn">
                    <span>{isKo ? '구조 살펴보기' : 'Explore Structure'}</span>
                </a>
                </motion.div>

                <motion.div
                className="foundation-page__hero-metrics"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.24 }}
                >
                <div className="foundation-page__metric-card">
                    <strong>{isKo ? '재단 역할' : 'Core Role'}</strong>
                    <span>
                    {isKo ? '거버넌스 · 조정 · 확장 기반' : 'Governance · Coordination · Expansion'}
                    </span>
                </div>
                <div className="foundation-page__metric-card">
                    <strong>{isKo ? '운영 철학' : 'Operating Ethos'}</strong>
                    <span>
                    {isKo ? '투명성 · 안정성 · 지속성' : 'Transparency · Stability · Continuity'}
                    </span>
                </div>
                <div className="foundation-page__metric-card">
                    <strong>{isKo ? '장기 방향' : 'Long Horizon'}</strong>
                    <span>
                    {isKo ? '실사용 생태계의 확장' : 'Expansion of real utility ecosystem'}
                    </span>
                </div>
                </motion.div>
            </div>

            <motion.div
                className="foundation-page__hero-visual"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.12 }}
            >
                <div className="foundation-page__visual-shell">
                <div className="foundation-page__visual-ring foundation-page__visual-ring--outer" />
                <div className="foundation-page__visual-ring foundation-page__visual-ring--mid" />
                <div className="foundation-page__visual-ring foundation-page__visual-ring--inner" />

                <div className="foundation-page__visual-core">
                    <div className="foundation-page__visual-core-badge">
                    <Landmark size={22} />
                    <span>KORION</span>
                    </div>

                    <h3>{isKo ? 'Foundation Governance Core' : 'Foundation Governance Core'}</h3>
                    <p>
                    {isKo
                        ? '장기 비전, 정책 기준, 생태계 조정, 확장 전략을 하나의 구조로 연결합니다.'
                        : 'Unifying long-term vision, policy standards, ecosystem coordination, and strategic expansion into one structured core.'}
                    </p>
                </div>

                <div className="foundation-page__floating-card foundation-page__floating-card--one">
                    <ShieldCheck size={18} />
                    <span>{isKo ? 'Trust Architecture' : 'Trust Architecture'}</span>
                </div>

                <div className="foundation-page__floating-card foundation-page__floating-card--two">
                    <Network size={18} />
                    <span>{isKo ? 'Ecosystem Coordination' : 'Ecosystem Coordination'}</span>
                </div>

                <div className="foundation-page__floating-card foundation-page__floating-card--three">
                    <Globe2 size={18} />
                    <span>{isKo ? 'Global Expansion Layer' : 'Global Expansion Layer'}</span>
                </div>
                </div>
            </motion.div>
            </div>
        </section>

        <section className="foundation-page__section foundation-page__section--intro">
            <div className="foundation-page__container-01">
            <div className="foundation-page__section-head foundation-page__section-head--center">
                <span className="foundation-page__section-kicker">
                {isKo ? 'FOUNDATION OVERVIEW' : 'FOUNDATION OVERVIEW'}
                </span>
                <h2>
                {isKo
                    ? '재단은 단순 운영 주체가 아니라 KORION의 장기 방향을 유지하는 구조적 기반입니다'
                    : 'The foundation is not a simple operator, but a structural base that preserves KORION’s long-term direction'}
                </h2>
                <p>
                {isKo
                    ? '백서 기준의 서사에 맞춰, 재단은 생태계의 정체성 유지, 운영 원칙 수립, 파트너십 정렬, 서비스 간 연결, 장기 확장 전략을 하나의 체계로 묶는 역할을 수행합니다.'
                    : 'Aligned with the whitepaper narrative, the foundation is positioned to preserve ecosystem identity, establish operating principles, align partnerships, connect services, and guide long-range expansion through a unified institutional structure.'}
                </p>
            </div>

            <div className="foundation-page__pillar-grid">
                {governancePillars.map((item, index) => {
                const Icon = item.icon;
                return (
                    <motion.article
                    key={item.titleEn}
                    className="foundation-page__pillar-card"
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: index * 0.06 }}
                    >
                    <div className="foundation-page__pillar-icon">
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

        <section
            id="foundation-structure"
            className="foundation-page__section foundation-page__section--structure"
        >
            <div className="foundation-page__container-01">
            <div className="foundation-page__section-head">
                <span className="foundation-page__section-kicker">
                {isKo ? 'FOUNDATION STRUCTURE' : 'FOUNDATION STRUCTURE'}
                </span>
                <h2>
                {isKo
                    ? '재단 구조는 비전에서 실행으로 이어지는 다층적 흐름으로 설계됩니다'
                    : 'The foundation structure is designed as a layered flow from vision to execution'}
                </h2>
                <p>
                {isKo
                    ? 'KORION Foundation은 재단 자체, 정책·거버넌스, 서비스 연결 레이어, 그리고 생태계 확장 축이 유기적으로 이어지는 형태를 지향합니다.'
                    : 'KORION Foundation is envisioned as an integrated architecture where the foundation body, governance layer, service coordination layer, and ecosystem expansion axis operate as one connected system.'}
                </p>
            </div>

            <div className="foundation-page__flow">
                {structureFlow.map((item, index) => {
                const Icon = item.icon;
                return (
                    <motion.div
                    key={item.titleEn}
                    className="foundation-page__flow-card"
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.65, delay: index * 0.08 }}
                    >
                    <div className="foundation-page__flow-top">
                        <div className="foundation-page__flow-icon">
                        <Icon size={20} />
                        </div>
                        <span className="foundation-page__flow-index">
                        {String(index + 1).padStart(2, '0')}
                        </span>
                    </div>
                    <h3>{isKo ? item.titleKo : item.titleEn}</h3>
                    <p>{isKo ? item.bodyKo : item.bodyEn}</p>
                    </motion.div>
                );
                })}
            </div>
            </div>
        </section>

        <section className="foundation-page__section foundation-page__section--principles">
            <div className="foundation-page__container-01 foundation-page__principles-layout">
            <div className="foundation-page__principles-copy">
                <span className="foundation-page__section-kicker">
                {isKo ? 'OPERATING PRINCIPLES' : 'OPERATING PRINCIPLES'}
                </span>
                <h2>
                {isKo
                    ? '운영 원칙은 재단의 신뢰를 결정하는 가장 중요한 기준입니다'
                    : 'Operating principles are the most important standard that defines the foundation’s credibility'}
                </h2>
                <p>
                {isKo
                    ? '재단은 단기 홍보성 구조가 아니라, 장기적으로 축적되는 신뢰와 책임성을 중심으로 운영되어야 합니다. 따라서 사용자 보호, 보안 우선, 명확한 역할 구분, 파트너십 정렬이 핵심 원칙이 됩니다.'
                    : 'The foundation must not function as a short-lived promotional layer, but as a durable institution centered on credibility, accountability, and long-term trust accumulation. That is why user stability, security-first operations, clear responsibility layers, and aligned partnerships become core principles.'}
                </p>
            </div>

            <div className="foundation-page__principles-grid">
                {operatingPrinciples.map((item, index) => {
                const Icon = item.icon;
                return (
                    <motion.article
                    key={item.titleEn}
                    className="foundation-page__principle-card"
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55, delay: index * 0.05 }}
                    >
                    <div className="foundation-page__principle-icon">
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

        <section className="foundation-page__section foundation-page__section--expansion">
            <div className="foundation-page__container-01">
            <div className="foundation-page__section-head foundation-page__section-head--center">
                <span className="foundation-page__section-kicker">
                {isKo ? 'LONG-TERM EXPANSION' : 'LONG-TERM EXPANSION'}
                </span>
                <h2>
                {isKo
                    ? '장기적 생태계 확장 방향은 유틸리티와 구조의 동시 성장을 목표로 합니다'
                    : 'The long-term ecosystem path targets simultaneous growth of utility and structure'}
                </h2>
                <p>
                {isKo
                    ? 'KORION은 단일 토큰이나 단일 서비스에 머무는 구조가 아니라, 지갑·결제·서비스·참여 구조가 결합된 확장형 생태계를 지향합니다. 재단은 이 확장 방향이 무질서하게 흩어지지 않도록 기준과 연결성을 제공합니다.'
                    : 'KORION is not limited to a single token or service. It aims toward an expandable ecosystem where wallet experience, payments, service layers, and participation structures grow together. The foundation provides the continuity and standards that prevent this expansion from becoming fragmented.'}
                </p>
            </div>

            <div className="foundation-page__timeline">
                {roadmapSignals.map((item, index) => (
                <motion.article
                    key={item.year}
                    className="foundation-page__timeline-card"
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: index * 0.06 }}
                >
                    <span className="foundation-page__timeline-phase">{item.year}</span>
                    <h3>{isKo ? item.titleKo : item.titleEn}</h3>
                    <p>{isKo ? item.descKo : item.descEn}</p>
                </motion.article>
                ))}
            </div>
            </div>
        </section>

        <section className="foundation-page__section foundation-page__section--cta">
            <div className="foundation-page__container-01">
            <motion.div
                className="foundation-page__cta-box"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65 }}
            >
                <div className="foundation-page__cta-copy">
                <span className="foundation-page__section-kicker">
                    {isKo ? 'FOUNDATION VISION' : 'FOUNDATION VISION'}
                </span>
                <h2>
                    {isKo
                    ? 'KORION Foundation은 생태계의 품격과 지속성을 만드는 장기 구조입니다'
                    : 'KORION Foundation is a long-horizon structure that shapes ecosystem credibility and continuity'}
                </h2>
                <p>
                    {isKo
                    ? '재단은 운영의 배경에 머무는 조직이 아니라, 사용자 신뢰와 서비스 확장, 파트너 연계, 구조적 안정성을 함께 설계하는 핵심 축입니다.'
                    : 'The foundation is not meant to remain in the background. It is the strategic axis that helps design trust, service expansion, partner alignment, and structural stability together.'}
                </p>
                </div>

                <div className="foundation-page__cta-actions">
                <Link to="/whitepaper" className="foundation-page__primary-btn">
                    <span>{isKo ? '백서 기준 보기' : 'Review Whitepaper Basis'}</span>
                    <ArrowUpRight size={18} />
                </Link>
                <Link to="/ecosystem" className="foundation-page__ghost-btn">
                    <span>{isKo ? '생태계 보기' : 'Explore Ecosystem'}</span>
                </Link>
                </div>
            </motion.div>
            </div>
        </section>
        </div>
    );
    }