import { motion } from 'motion/react';
import {
    ArrowRight,
    Building2,
    ChevronRight,
    Sparkles,
    Orbit,
    ShieldCheck,
    Layers3,
    Globe2,
    } from 'lucide-react';
    import { Link } from 'react-router';
    import { useLanguage } from '../contexts/LanguageContext';
    import './AboutPage.css';

    const fadeUp = {
    initial: { opacity: 0, y: 36 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18 },
    transition: { duration: 0.7, ease: 'easeOut' },
    };

    export function AboutPage() {
    const { language } = useLanguage();
    const isKo = language === 'KR';

    const identityItems = [
        isKo ? '신뢰 중심 구조' : 'Trust-Centered Structure',
        isKo ? '실사용형 생태계' : 'Utility Ecosystem',
        isKo ? '확장 가능한 설계' : 'Scalable Design',
        isKo ? '서비스 통합 방향' : 'Service Integration',
        
    ];

    const storyBlocks = [
        {
        no: '01',
        title: isKo ? '우리가 만드는 것은 단순한 토큰이 아닙니다' : 'We Are Not Building Just a Token',
        desc: isKo
            ? 'KORION은 단순한 디지털 자산을 넘어, 모바일 경험, 자산 보관, 결제 흐름, 서비스 연동이 하나의 구조 안에서 이어지는 통합형 생태계를 지향합니다. 우리는 사용자가 기술을 이해해야만 사용할 수 있는 구조가 아니라, 자연스럽게 참여하고 활용할 수 있는 경험을 만드는 데 집중합니다.'
            : 'KORION goes beyond the idea of a standalone digital asset. It is designed as an integrated ecosystem where mobile experience, asset custody, payment flow, and service connectivity operate within one structure. We focus on creating a system that feels natural to use, not one that requires users to decode the technology first.',
        icon: Layers3,
        },
        {
        no: '02',
        title: isKo ? '기술은 보여주기보다 연결되어야 합니다' : 'Technology Should Connect, Not Just Impress',
        desc: isKo
            ? 'KORION은 복잡한 기술을 과시하는 방식보다, 실제 서비스와 연결될 수 있는 구조적 완성도를 더 중요하게 생각합니다. 사용성, 안정성, 브랜드 신뢰, 그리고 장기적 확장성을 함께 고려하는 것이 우리의 기술 철학입니다.'
            : 'Rather than showcasing complexity for its own sake, KORION prioritizes architectural quality that can connect with real services. Usability, stability, brand trust, and long-term scalability all shape our technical philosophy.',
        icon: Orbit,
        },
        {
        no: '03',
        title: isKo ? '브랜드와 시스템은 함께 신뢰를 만듭니다' : 'Brand and System Build Trust Together',
        desc: isKo
            ? '우리는 생태계의 가치를 기술만으로 설명하지 않습니다. 프로젝트가 실제로 어떻게 보이고, 어떻게 운영되며, 어떤 방향으로 확장되는지까지 포함해 신뢰를 만들어야 한다고 생각합니다. KORION은 그 전체 경험을 설계하는 프로젝트입니다.'
            : 'We do not believe technology alone defines ecosystem value. Trust is built through how a project appears, operates, and expands over time. KORION is designed to shape that full experience as one coherent system.',
        icon: ShieldCheck,
        },
    ];

    return (
        <main className="about-page">
        <section className="about-hero">
            <div className="about-hero__bg">
            <div className="about-hero__glow about-hero__glow--one" />
            <div className="about-hero__glow about-hero__glow--two" />
            <div className="about-hero__grid" />
            </div>

            <div className="about-page__container about-hero__container">
            <motion.div
                className="about-hero__copy"
                initial={{ opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <div className="about-hero__eyebrow">
                <Building2 size={16} />
                <span>{isKo ? 'ABOUT KORION' : 'ABOUT KORION'}</span>
                </div>

                <h1 className="about-hero__title">
                {isKo
                    ? '디지털 자산, 결제, 서비스 경험을 하나의 브랜드 구조로 연결합니다'
                    : 'Connecting Digital Assets, Payments, and Service Experience into One Brand Structure'}
                </h1>

                <p className="about-hero__desc">
                {isKo
                    ? 'KORION은 모바일 채굴, 디지털 지갑, 결제 인프라, 그리고 서비스 연동 경험을 하나의 흐름으로 설계하는 생태계 프로젝트입니다. 우리는 기술이 복잡하게 보이는 것이 아니라 자연스럽게 쓰이는 구조를 만듭니다.'
                    : 'KORION is an ecosystem project designed to unify mobile mining, digital wallet infrastructure, payment capability, and service connectivity into one continuous experience. We believe technology should feel usable, not merely complex.'}
                </p>

                <div className="about-hero__actions">
                <a href="#company-info" className="about-hero__btn about-hero__btn--primary">
                <span>{isKo ? '회사 정보 보기' : 'View Company Info'}</span>
                <ChevronRight size={18} />
                </a>

                <Link to="/team" className="about-hero__btn about-hero__btn--ghost">
                    <span>{isKo ? '팀 소개 보기' : 'Meet the Team'}</span>
                </Link>
                </div>
            </motion.div>

            </div>

            <div className="about-hero__scroll">
            <span>{isKo ? 'SCROLL' : 'SCROLL'}</span>
            </div>
        </section>

        <section className="about-statement">
            <div className="about-page__container">
            <motion.div className="about-statement__inner" {...fadeUp}>
                <p className="about-statement__label">
                {isKo ? 'BRAND STATEMENT' : 'BRAND STATEMENT'}
                </p>
                <h2 className="about-statement__quote">
                {isKo
                    ? '기술은 실제로 쓰일 때 비로소 의미를 가집니다.'
                    : 'Technology becomes meaningful only when it becomes usable.'}
                </h2>
            </motion.div>
            </div>
        </section>

        <section className="about-why">
            <div className="about-page__container about-why__grid">
            <motion.div className="about-why__left" {...fadeUp}>
                <span className="about-why__kicker">{isKo ? 'WHY KORION' : 'WHY KORION'}</span>
                <h2>
                {isKo
                    ? 'KORION은 왜 지금 필요한가'
                    : 'Why KORION Matters Now'}
                </h2>
            </motion.div>

            <motion.div className="about-why__right" {...fadeUp}>
                <p>
                {isKo
                    ? '디지털 자산 시장은 점점 더 커지고 있지만, 여전히 많은 프로젝트는 실제 사용 흐름보다 개별 기능이나 단기적 이슈에 집중합니다. KORION은 그 반대 방향에서 출발합니다. 우리는 사용자가 모바일 환경에서 더 쉽게 참여하고, 자산을 관리하고, 결제와 서비스로 이어질 수 있는 구조를 만드는 데 집중합니다.'
                    : 'The digital asset market continues to expand, but many projects still focus more on isolated functions or short-term attention than on real usability. KORION starts from the opposite direction. We focus on creating a structure where users can participate more easily through mobile, manage assets, and extend that experience into payments and services.'}
                </p>
                <p>
                {isKo
                    ? '이 페이지는 기능 목록을 나열하는 페이지가 아니라, KORION이 어떤 철학과 기준 위에서 만들어지고 있는지를 보여주는 공간입니다.'
                    : 'This page is not intended to list features. It is meant to show the philosophy and standards on which KORION is being built.'}
                </p>
            </motion.div>
            </div>
        </section>

        <section className="about-story">
            <div className="about-page__container">
            <div className="about-story__list">
                {storyBlocks.map((item, index) => {
                const Icon = item.icon;
                return (
                    <motion.article
                    key={item.no}
                    className="about-story__item"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.18 }}
                    transition={{ duration: 0.7, delay: index * 0.08 }}
                    >
                    <div className="about-story__no">{item.no}</div>

                    <div className="about-story__content">
                        <div className="about-story__icon">
                        <Icon size={22} />
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                    </motion.article>
                );
                })}
            </div>
            </div>
        </section>

        <section className="about-identity">
            <div className="about-identity__track">
            {identityItems.concat(identityItems).map((item, index) => (
                <div key={`${item}-${index}`} className="about-identity__item">
                <span>{item}</span>
                </div>
            ))}
            </div>
        </section>

        <section className="about-signature">
            <div className="about-page__container">
            <motion.div className="about-signature__panel" {...fadeUp}>
                <div className="about-signature__header">
                <span>{isKo ? 'KORION SIGNATURE' : 'KORION SIGNATURE'}</span>
                <h2>
                    {isKo
                    ? '하나의 기능이 아니라, 하나의 경험을 설계합니다'
                    : 'We Design One Experience, Not Just Separate Features'}
                </h2>
                </div>

                <div className="about-signature__layout">
                <div className="about-signature__visual">
                    <div className="about-signature__sphere" />
                    <div className="about-signature__beam about-signature__beam--one" />
                    <div className="about-signature__beam about-signature__beam--two" />
                </div>

                <div className="about-signature__copy">
                    <p>
                    {isKo
                        ? '모바일 채굴, 디지털 자산 보관, 결제 흐름, 서비스 연동은 KORION 안에서 분리된 기능이 아닙니다. 우리는 이 모든 요소가 하나의 브랜드 경험처럼 자연스럽게 이어지도록 설계합니다.'
                        : 'Mobile mining, digital asset custody, payment flow, and service connectivity are not treated as separate functions inside KORION. They are designed to feel like one continuous brand experience.'}
                    </p>

                    <ul className="about-signature__points">
                    <li>
                        <Globe2 size={16} />
                        <span>{isKo ? '실생활과 연결되는 구조' : 'Connected to real-world usage'}</span>
                    </li>
                    <li>
                        <ShieldCheck size={16} />
                        <span>{isKo ? '신뢰를 우선하는 방향' : 'Trust-led direction'}</span>
                    </li>
                    <li>
                        <Layers3 size={16} />
                        <span>{isKo ? '확장을 고려한 통합 설계' : 'Integrated design built for expansion'}</span>
                    </li>
                    </ul>
                </div>
                </div>
            </motion.div>
            </div>
        </section>

        <section id="company-info" className="about-company">
            <div className="about-page__container">
                <motion.div className="about-company__wrap" {...fadeUp}>
                <div className="about-company__header">
                    <span>{isKo ? 'COMPANY INFORMATION' : 'COMPANY INFORMATION'}</span>
                    <h2>{isKo ? '회사 정보' : 'Company Information'}</h2>
                    <p className="about-company__lead">
                    {isKo
                        ? 'KORION은 전 세계 누구나 쉽게 접근하고 사용할 수 있는 디지털 기축 통화의 새로운 표준을 설계합니다. 모바일 참여, 디지털 자산 인프라, 결제 네트워크, 그리고 서비스 생태계를 하나의 흐름으로 연결하여 국경과 플랫폼의 경계를 넘어서는 글로벌 가치 교환 시스템 구축을 목표로 합니다.'
                        : 'KORION is designing a new standard for a globally accessible digital reserve currency. By connecting mobile participation, digital asset infrastructure, payment networks, and service ecosystems into one unified flow, KORION aims to build a global value exchange system beyond the boundaries of borders and platforms.'}
                    </p>
                </div>

                <div className="about-company__content">
                    <div className="about-company__message">
                    <div className="about-company__message-box">
                        <p className="about-company__message-label">
                        {isKo ? 'OUR DIRECTION' : 'OUR DIRECTION'}
                        </p>
                        <h3>
                        {isKo
                            ? '쉽고 빠르게, 그리고 누구나 사용할 수 있도록'
                            : 'Accessible, Fast, and Built for Everyone'}
                        </h3>
                        <p>
                        {isKo
                            ? '기술은 더 복잡해질 수 있지만, 사용 경험은 더 직관적이어야 합니다. KORION은 디지털 자산이 일부 사용자만을 위한 기술이 아니라, 전 세계 누구나 자연스럽게 사용할 수 있는 가치 교환 수단이 되도록 설계된 프로젝트입니다.'
                            : 'Technology can become more complex, but the experience of using it should become more intuitive. KORION is designed so that digital assets evolve from a niche technology into a value exchange medium that anyone in the world can use naturally.'}
                        </p>
                    </div>
                    </div>

                    <div className="about-company__grid">
                    <div className="about-company__item">
                        <label>{isKo ? '회사명' : 'Company Name'}</label>
                        <strong>
                        {isKo ? '주식회사 다이아나인틴컴퍼니' : 'Dianainteen Company Ltd.'}
                        </strong>
                    </div>

                    <div className="about-company__item">
                        <label>{isKo ? '산업 분야' : 'Industry'}</label>
                        <strong>
                        {isKo
                            ? '블록체인 기술 / 디지털 자산 인프라'
                            : 'Blockchain Technology / Digital Asset Infrastructure'}
                        </strong>
                    </div>

                    <div className="about-company__item">
                        <label>{isKo ? '핵심 영역' : 'Core Focus'}</label>
                        <strong>
                        {isKo
                            ? '모바일 채굴 · 디지털 지갑 · 결제 인프라 · 서비스 생태계'
                            : 'Mobile Mining · Digital Wallet · Payment Infrastructure · Service Ecosystem'}
                        </strong>
                    </div>

                    <div className="about-company__item">
                        <label>{isKo ? '프로젝트 성격' : 'Project Category'}</label>
                        <strong>
                        {isKo
                            ? '실사용 중심 글로벌 디지털 자산 생태계'
                            : 'Utility-Driven Global Digital Asset Ecosystem'}
                        </strong>
                    </div>

                    <div className="about-company__item">
                        <label>{isKo ? '운영 방향' : 'Strategic Direction'}</label>
                        <strong>
                        {isKo
                            ? '전 세계 누구나 쉽게 사용할 수 있는 디지털 기축 통화 구조'
                            : 'A Digital Reserve Currency Structure Accessible Worldwide'}
                        </strong>
                    </div>

                    <div className="about-company__item">
                        <label>{isKo ? '브랜드 철학' : 'Brand Philosophy'}</label>
                        <strong>
                        {isKo
                            ? '복잡한 기술을 직관적인 경험으로 전환'
                            : 'Turning Complex Technology into Intuitive Experience'}
                        </strong>
                    </div>
                    </div>
                </div>
                </motion.div>

                <motion.div className="about-company__cta" {...fadeUp}>
                <Link to="/team" className="about-company__link">
                    <span>{isKo ? '리더십과 팀 소개 보기' : 'Explore Leadership and Team'}</span>
                    <ArrowRight size={18} />
                </Link>
                </motion.div>
            </div>
        </section>
        </main>
    );
    }