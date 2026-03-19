import { motion } from 'motion/react';
import {
    ArrowRight,
    BadgeCheck,
    Binary,
    Blocks,
    BrainCircuit,
    ChevronRight,
    Copy,
    FileCode2,
    Fingerprint,
    Flame,
    Globe,
    Layers3,
    LockKeyhole,
    Network,
    ScanLine,
    Shield,
    Sparkles,
    WalletCards,
    } from 'lucide-react';
    import { Link } from 'react-router';
    import { useLanguage } from '../contexts/LanguageContext';
    import './SmartContractPage.css';

    const CONTRACT_ADDRESS = 'TBJZD8RwQ1JcQvEP9BTbPbgBCGxUjxSXnn';
    const TRONSCAN_URL =
    'https://tronscan.org/#/token20/TBJZD8RwQ1JcQvEP9BTbPbgBCGxUjxSXnn';

    const pillars = [
    {
        icon: FileCode2,
        titleEn: 'TRC20 Execution Layer',
        titleKo: 'TRC20 실행 레이어',
        descEn:
        'Built on the TRON network with a contract model designed for token transfer compatibility, wallet interaction, and ecosystem connectivity.',
        descKo:
        'TRON 네트워크 기반으로 구축되어 토큰 전송 호환성, 지갑 상호작용, 생태계 연결성을 고려한 실행 레이어를 형성합니다.',
    },
    {
        icon: LockKeyhole,
        titleEn: 'Authority Boundary Design',
        titleKo: '권한 경계 설계',
        descEn:
        'Contract control is described through separated operational boundaries, distinguishing public token behavior from policy-sensitive actions.',
        descKo:
        '일반 토큰 동작과 정책 민감 기능을 구분하는 운영 경계 중심으로 컨트랙트 통제 구조를 설명합니다.',
    },
    {
        icon: Flame,
        titleEn: 'Treasury-Linked Burn Logic',
        titleKo: '트레저리 연동 소각 로직',
        descEn:
        'The project basis reflects a periodic burn model connected to platform revenue policy rather than a simple standalone event.',
        descKo:
        '단순 이벤트가 아닌 플랫폼 수익 정책과 연결된 정기 소각 구조를 기준으로 설계 철학을 보여줍니다.',
    },
    {
        icon: Shield,
        titleEn: 'Operational Security Segmentation',
        titleKo: '운영 보안 분리',
        descEn:
        'Treasury, liquidity, reward, and governance-sensitive flows can be interpreted through separated security zones and control paths.',
        descKo:
        '트레저리, 유동성, 리워드, 거버넌스 민감 흐름을 분리된 보안 구역과 통제 경로로 해석할 수 있도록 구성합니다.',
    },
    ];

    const flowSteps = [
    {
        no: '01',
        titleEn: 'Contract Identity',
        titleKo: '컨트랙트 식별',
        descEn:
        'The deployed contract identity serves as the fixed on-chain reference point for KORION’s token-layer presence.',
        descKo:
        '배포된 컨트랙트 식별자는 KORION의 토큰 레이어 존재를 대표하는 고정 온체인 기준점 역할을 합니다.',
    },
    {
        no: '02',
        titleEn: 'Wallet & Explorer Compatibility',
        titleKo: '지갑·익스플로러 호환',
        descEn:
        'TRON-based visibility and token-standard compatibility support ecosystem discovery, wallet display, and explorer-level verification flow.',
        descKo:
        'TRON 기반 가시성과 토큰 표준 호환성을 통해 생태계 인식, 지갑 표시, 익스플로러 검증 흐름을 지원합니다.',
    },
    {
        no: '03',
        titleEn: 'Policy-Controlled Operations',
        titleKo: '정책 통제형 운영',
        descEn:
        'Supply handling, treasury execution, and sensitive actions are framed as controlled policy functions rather than casual token actions.',
        descKo:
        '공급 처리, 트레저리 집행, 민감 기능은 단순 토큰 조작이 아니라 정책 통제형 기능으로 해석됩니다.',
    },
    {
        no: '04',
        titleEn: 'Protocol Trust Surface',
        titleKo: '프로토콜 신뢰 표면',
        descEn:
        'Public address visibility, transparent explorer linkage, and structured execution narrative reinforce institutional credibility.',
        descKo:
        '공개 주소, 익스플로러 연결, 구조화된 실행 설명은 프로젝트의 대외 신뢰성과 인프라 인상을 강화합니다.',
    },
    ];

    const specs = [
    { labelEn: 'Network', labelKo: '네트워크', value: 'TRON' },
    { labelEn: 'Contract Standard', labelKo: '컨트랙트 표준', value: 'TRC20' },
    { labelEn: 'Contract Address', labelKo: '컨트랙트 주소', value: CONTRACT_ADDRESS },
    { labelEn: 'Decimals', labelKo: '소수점', value: '6' },
    { labelEn: 'Supply Basis', labelKo: '총 공급 기준', value: '10B KORION' },
    { labelEn: 'Explorer Reference', labelKo: '익스플로러 기준', value: 'TRONSCAN' },
    ];

    const accessCards = [
    {
        icon: Globe,
        titleEn: 'TRONSCAN Reference',
        titleKo: 'TRONSCAN 기준 페이지',
        bodyEn:
        'View the public explorer reference for the KORION smart contract and verify the on-chain token surface.',
        bodyKo:
        'KORION 스마트 컨트랙트의 공개 익스플로러 기준 페이지를 통해 온체인 토큰 표면을 확인할 수 있습니다.',
        href: TRONSCAN_URL,
        external: true,
    },
    {
        icon: FileCode2,
        titleEn: 'Contract Identity',
        titleKo: '컨트랙트 식별 정보',
        bodyEn:
        'Use the contract address as the core identity reference for wallet, explorer, and ecosystem verification.',
        bodyKo:
        '컨트랙트 주소를 지갑, 익스플로러, 생태계 검증을 위한 핵심 식별 기준으로 활용할 수 있습니다.',
        href: '#contract-identity',
        external: false,
    },
    {
        icon: Layers3,
        titleEn: 'Developer Structure',
        titleKo: '개발 구조 안내',
        bodyEn:
        'Review the execution architecture, operational structure, and system-oriented flow connected to the KORION protocol.',
        bodyKo:
        'KORION 프로토콜과 연결되는 실행 구조, 운영 구조, 시스템 흐름을 확인할 수 있습니다.',
        href: '/developers',
        external: true,
    },
    ];

    const trustCards = [
    {
        icon: BadgeCheck,
        titleEn: 'Visible On-Chain Identity',
        titleKo: '공개 온체인 식별성',
        bodyEn:
        'A visible contract reference strengthens the project’s public verification layer and improves trust communication.',
        bodyKo:
        '공개된 컨트랙트 기준점은 프로젝트의 검증 가능성을 높이고 신뢰 전달력을 강화합니다.',
    },
    {
        icon: WalletCards,
        titleEn: 'Service-Oriented Contract Framing',
        titleKo: '서비스 지향형 계약 구조',
        bodyEn:
        'The contract is positioned as infrastructure for wallet use, ecosystem integration, and platform-linked utility rather than isolated issuance.',
        bodyKo:
        '컨트랙트는 단순 발행용이 아니라 지갑 사용, 생태계 연동, 플랫폼 실사용을 위한 인프라로 위치합니다.',
    },
    {
        icon: Fingerprint,
        titleEn: 'Controlled Authority Narrative',
        titleKo: '통제 권한 구조',
        bodyEn:
        'Operational trust increases when authority, execution scope, and security boundaries are explained with clarity.',
        bodyKo:
        '권한, 실행 범위, 보안 경계를 명확하게 설명할수록 운영 신뢰도는 높아집니다.',
    },
    {
        icon: BrainCircuit,
        titleEn: 'Premium Protocol Presentation',
        titleKo: '프리미엄 프로토콜 표현',
        bodyEn:
        'The page is designed to present KORION as a structured protocol system rather than a simple token landing page.',
        bodyKo:
        '이 페이지는 KORION을 단순 토큰 소개가 아니라 구조화된 프로토콜 시스템으로 보이게 설계됩니다.',
    },
    ];

    export function SmartContractPage() {
    const { language } = useLanguage();
    const isKo = language === 'KR';

    const handleCopyContract = async () => {
        try {
        await navigator.clipboard.writeText(CONTRACT_ADDRESS);
        } catch (error) {
        console.error('Failed to copy contract address:', error);
        }
    };

    return (
        <div className="smart-contract-page">
        <section className="smart-contract-hero">
            <div className="smart-contract-hero__ambient smart-contract-hero__ambient--one" />
            <div className="smart-contract-hero__ambient smart-contract-hero__ambient--two" />
            <div className="smart-contract-hero__ambient smart-contract-hero__ambient--three" />

            <div className="smart-contract-page__container">
            <div className="smart-contract-hero__layout">
                <motion.div
                className="smart-contract-hero__content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75 }}
                >
                <div className="smart-contract-hero__eyebrow">
                    <Binary size={14} />
                    <span>{isKo ? 'LIVE CONTRACT INTERFACE' : 'LIVE CONTRACT INTERFACE'}</span>
                </div>

                <h1 className="smart-contract-hero__title">
                    {isKo
                    ? 'KORION 스마트 컨트랙트는\n배포 구조와 실행 레이어를 보여줍니다'
                    : 'KORION smart contracts reveal deployment structure and execution layers'}
                </h1>

                <p className="smart-contract-hero__description">
                    {isKo
                    ? 'KORION의 온체인 컨트랙트가 어떤 배포 구조와 실행 레이어 위에서 운영되는지를 시각적으로 안내하는 프리미엄 프로토콜입니다. 컨트랙트 주소, 익스플로러 연결, 실행 구조, 운영 경계를 한 화면에서 전달하도록 설계했습니다.'
                    : 'A premium protocol designed to visually showcase the deployment architecture and execution layers of the KORION on-chain contract. It brings together contract identity, explorer access, execution flow, and operational scope in a single interface.'}
                </p>

                <div id="contract-identity" className="smart-contract-hero__identity">
                    <div className="smart-contract-hero__identity-head">
                    <span>{isKo ? 'Contract Address' : 'Contract Address'}</span>
                    <div className="smart-contract-hero__identity-badges">
                        <span>TRON</span>
                        <span>TRC20</span>
                        <span>KORION</span>
                    </div>
                    </div>

                    <div className="smart-contract-hero__address">
                    <code>{CONTRACT_ADDRESS}</code>

                    <button
                        type="button"
                        onClick={handleCopyContract}
                        className="smart-contract-hero__copy"
                        aria-label="Copy contract address"
                    >
                        <Copy size={16} />
                    </button>
                    </div>

                    <div className="smart-contract-hero__identity-actions">
                    <a
                        href={TRONSCAN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="smart-contract-hero__link smart-contract-hero__link--primary"
                    >
                        <Globe size={16} />
                        <span>{isKo ? 'Tronscan에서 보기' : 'View on TRONSCAN'}</span>
                    </a>

                    <a
                        href="/developers"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="smart-contract-hero__link smart-contract-hero__link--ghost"
                        >
                        <span>{isKo ? '개발 구조 보기' : 'Developer Structure'}</span>
                        <ChevronRight size={16} />
                    </a>
                    </div>
                </div>
                </motion.div>

                <motion.div
                className="smart-contract-hero__visual"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.85, delay: 0.12 }}
                >
                <div className="contract-chamber">
                    <div className="contract-chamber__scanline" />
                    <div className="contract-chamber__grid" />
                    <div className="contract-chamber__beam contract-chamber__beam--left" />
                    <div className="contract-chamber__beam contract-chamber__beam--right" />

                    <div className="contract-chamber__core-wrap">
                    <div className="contract-chamber__pulse contract-chamber__pulse--one" />
                    <div className="contract-chamber__pulse contract-chamber__pulse--two" />
                    <div className="contract-chamber__pulse contract-chamber__pulse--three" />

                    <div className="contract-chamber__core">
                        <div className="contract-chamber__core-top">
                        <Network size={18} />
                        <span>{isKo ? 'KORION 컨트랙트 코어' : 'KORION Contract Core'}</span>
                        </div>

                        <div className="contract-chamber__hexagon">
                        <div className="contract-chamber__hexagon-inner">
                            <Blocks size={34} />
                        </div>
                        </div>

                        <div className="contract-chamber__core-bottom">
                        <span>TRON / TRC20</span>
                        <strong>{isKo ? '온체인 활성 실행 영역' : 'On-Chain Active Surface'}</strong>
                        </div>
                    </div>
                    </div>

                    <div className="contract-chamber__node contract-chamber__node--top">
                    <span className="contract-chamber__node-icon">
                        <ScanLine size={16} />
                    </span>
                    <div>
                        <strong>{isKo ? '익스플로러 연동' : 'Explorer Sync'}</strong>
                        <p>{isKo ? '공개 식별 가능' : 'Publicly addressable'}</p>
                    </div>
                    </div>

                    <div className="contract-chamber__node contract-chamber__node--left">
                    <span className="contract-chamber__node-icon">
                        <LockKeyhole size={16} />
                    </span>
                    <div>
                        <strong>{isKo ? '권한 경계 레이어' : 'Authority Boundary'}</strong>
                        <p>{isKo ? '민감 기능 분리' : 'Sensitive path isolation'}</p>
                    </div>
                    </div>

                    <div className="contract-chamber__node contract-chamber__node--right">
                    <span className="contract-chamber__node-icon">
                        <Flame size={16} />
                    </span>
                    <div>
                        <strong>{isKo ? '소각 정책 레이어' : 'Burn Policy Layer'}</strong>
                        <p>{isKo ? '트레저리 연동 로직' : 'Treasury-linked logic'}</p>
                    </div>
                    </div>

                    <div className="contract-chamber__node contract-chamber__node--bottom">
                    <span className="contract-chamber__node-icon">
                        <Layers3 size={16} />
                    </span>
                    <div>
                        <strong>{isKo ? '트레저리 실행 영역' : 'Treasury Surface'}</strong>
                        <p>{isKo ? '정책 통제 기반 실행' : 'Policy-controlled actions'}</p>
                    </div>
                    </div>

                    <div className="contract-chamber__data contract-chamber__data--a" />
                    <div className="contract-chamber__data contract-chamber__data--b" />
                    <div className="contract-chamber__data contract-chamber__data--c" />
                    <div className="contract-chamber__data contract-chamber__data--d" />
                </div>
                </motion.div>
            </div>
            </div>
        </section>



        <section className="smart-contract-section smart-contract-section--elevated">
            <div className="smart-contract-page__container-01">
            <div className="smart-contract-section__heading">
                <span className="smart-contract-section__label">
                {isKo ? 'ARCHITECTURAL PILLARS' : 'ARCHITECTURAL PILLARS'}
                </span>
                <h2>
                {isKo
                    ? '배포 구조와 실행 레이어를\n직관적으로 안내합니다'
                    : 'A clear view of deployment structure and execution layers'}
                </h2>
                <p>
                {isKo
                    ? 'KORION 스마트 컨트랙트는 온체인 배포 구조, 실행 계층, 권한 설계, 익스플로러 검증 연결, 운영 신뢰 요소를 한 흐름 안에서 이해할 수 있도록 구성되었습니다.'
                    : 'The KORION smart contract is structured to present on-chain deployment, execution layers, authority design, explorer verification, and operational trust in one coherent flow.'}
                </p>
            </div>

            <div className="smart-contract-pillars">
                {pillars.map((item, index) => {
                const Icon = item.icon;
                return (
                    <motion.div
                    key={index}
                    className="smart-contract-pillars__card"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55, delay: index * 0.06 }}
                    >
                    <div className="smart-contract-pillars__icon">
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

        <section className="smart-contract-section">
            <div className="smart-contract-page__container-01">
            <div className="smart-contract-flow">
                <div className="smart-contract-flow__intro">
                <span className="smart-contract-section__label">
                    {isKo ? 'PROTOCOL FLOW' : 'PROTOCOL FLOW'}
                </span>
                <h2>
                    {isKo
                    ? 'KORION 컨트랙트가 보여주는\n온체인 신뢰 흐름'
                    : 'The on-chain trust flow presented by KORION contracts'}
                </h2>
                <p>
                    {isKo
                    ? '배포된 주소와 공개 익스플로러 연결은 단순 링크 이상의 의미를 갖습니다. 이것은 프로젝트를 실제 온체인 레이어와 연결하는 시각적·기술적 기준점이며, 컨트랙트 구조 설명의 중심이 됩니다.'
                    : 'A deployed address and public explorer linkage mean more than a simple link. They become the visual and technical anchor that connects the project to an actual on-chain layer.'}
                </p>
                </div>

                <div className="smart-contract-flow__steps">
                {flowSteps.map((item) => (
                    <div key={item.no} className="smart-contract-step">
                    <div className="smart-contract-step__no">{item.no}</div>
                    <div className="smart-contract-step__body">
                        <h3>{isKo ? item.titleKo : item.titleEn}</h3>
                        <p>{isKo ? item.descKo : item.descEn}</p>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </section>

        <section className="smart-contract-section smart-contract-section--panel">
            <div className="smart-contract-page__container-01">
            <div className="smart-contract-specs">
                <div className="smart-contract-specs__header">
                <span className="smart-contract-section__label">
                    {isKo ? 'TECHNICAL BASELINE' : 'TECHNICAL BASELINE'}
                </span>
                <h2>{isKo ? '현재 페이지 기준 기술 베이스라인' : 'Current technical baseline'}</h2>
                </div>

                <div className="smart-contract-specs__grid">
                {specs.map((item, index) => (
                    <div className="smart-contract-specs__item" key={index}>
                    <span>{isKo ? item.labelKo : item.labelEn}</span>
                    <strong>{item.value}</strong>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </section>

        <section className="smart-contract-section smart-contract-section--access">
            <div className="smart-contract-page__container-01">
            <div className="smart-contract-section__heading">
                <span className="smart-contract-section__label">
                {isKo ? 'CONTRACT ACCESS' : 'CONTRACT ACCESS'}
                </span>
                <h2>
                {isKo
                    ? 'KORION 컨트랙트 정보를\n바로 확인할 수 있는 경로'
                    : 'Direct paths to KORION contract information'}
                </h2>
                <p>
                {isKo
                    ? '공개 익스플로러, 컨트랙트 식별 정보, 개발 구조 안내로 바로 연결되어 필요한 정보를 빠르게 확인할 수 있습니다.'
                    : 'Access public explorer reference, contract identity details, and developer structure from one connected section.'}
                </p>
            </div>

            <div className="smart-contract-access">
                {accessCards.map((item, index) => {
                const Icon = item.icon;

                if (item.external) {
                    return (
                    <a
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="smart-contract-access__card"
                    >
                        <div className="smart-contract-access__icon">
                        <Icon size={18} />
                        </div>
                        <h3>{isKo ? item.titleKo : item.titleEn}</h3>
                        <p>{isKo ? item.bodyKo : item.bodyEn}</p>
                        <span className="smart-contract-access__arrow">
                        <ArrowRight size={16} />
                        </span>
                    </a>
                    );
                }

                return item.href.startsWith('/') ? (
                    <Link key={index} to={item.href} className="smart-contract-access__card">
                    <div className="smart-contract-access__icon">
                        <Icon size={18} />
                    </div>
                    <h3>{isKo ? item.titleKo : item.titleEn}</h3>
                    <p>{isKo ? item.bodyKo : item.bodyEn}</p>
                    <span className="smart-contract-access__arrow">
                        <ArrowRight size={16} />
                    </span>
                    </Link>
                ) : (
                    <a key={index} href={item.href} className="smart-contract-access__card">
                    <div className="smart-contract-access__icon">
                        <Icon size={18} />
                    </div>
                    <h3>{isKo ? item.titleKo : item.titleEn}</h3>
                    <p>{isKo ? item.bodyKo : item.bodyEn}</p>
                    <span className="smart-contract-access__arrow">
                        <ArrowRight size={16} />
                    </span>
                    </a>
                );
                })}
            </div>
            </div>
        </section>

        <section className="smart-contract-section">
            <div className="smart-contract-page__container-01">
            <div className="smart-contract-trust">
                <div className="smart-contract-trust__content">
                <span className="smart-contract-section__label">
                    {isKo ? 'TRUST SURFACE' : 'TRUST SURFACE'}
                </span>
                <h2>
                    {isKo
                    ? '온체인 가시성과 운영 신뢰를\n함께 보여주는 구조'
                    : 'A structure that presents on-chain visibility and operational trust together'}
                </h2>
                <p>
                    {isKo
                    ? 'KORION 스마트 컨트랙트 페이지는 공개 식별성, 정책 통제, 서비스 연동성, 프리미엄 프로토콜 이미지를 하나의 흐름 안에서 전달하도록 설계되었습니다.'
                    : 'The KORION smart contract page is designed to present public identity, policy control, service connectivity, and a premium protocol image within one coherent experience.'}
                </p>
                </div>

                <div className="smart-contract-trust__grid">
                {trustCards.map((item, index) => {
                    const Icon = item.icon;
                    return (
                    <div className="smart-contract-trust__card" key={index}>
                        <div className="smart-contract-trust__icon">
                        <Icon size={18} />
                        </div>
                        <h3>{isKo ? item.titleKo : item.titleEn}</h3>
                        <p>{isKo ? item.bodyKo : item.bodyEn}</p>
                    </div>
                    );
                })}
                </div>
            </div>

            <div className="smart-contract-note">
                <div className="smart-contract-note__icon">
                <Sparkles size={18} />
                </div>
                <div className="smart-contract-note__body">
                <h3>{isKo ? '안내' : 'Note'}</h3>
                <p>
                    {isKo
                    ? '본 페이지는 사용자가 제공한 KORION Tronscan 링크 및 컨트랙트 주소를 기준으로 구성한 스마트 컨트랙트 구조 안내 페이지입니다. 배포 구조의 세부 관리자 권한, 멀티시그 적용 범위, 추가 정책 로직은 운영 버전에 따라 구체화될 수 있습니다.'
                    : 'This page is built around the KORION TRONSCAN link and contract address provided by the user. Detailed admin permissions, multisig coverage, and additional policy logic may be refined by operational version.'}
                </p>
                </div>
            </div>

            <div className="smart-contract-cta">
                <a
                href={TRONSCAN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="smart-contract-cta__button"
                >
                <span>{isKo ? 'KORION Tronscan 열기' : 'Open KORION TRONSCAN'}</span>
                <ArrowRight size={18} />
                </a>

                <a
                    href="/developers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="smart-contract-cta__button smart-contract-cta__button--ghost"
                    >
                    <span>{isKo ? '개발자 페이지 이동' : 'Go to Developers'}</span>
                    <ArrowRight size={18} />
                </a>
            </div>
            </div>
        </section>
        </div>
    );
    }
