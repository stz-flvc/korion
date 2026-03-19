import { motion } from 'motion/react';
import {
    ShieldCheck,
    Smartphone,
    ArrowUpDown,
    Pickaxe,
    Wallet,
    ChevronRight,
    CheckCircle2,
    LockKeyhole,
    Layers3,
    Activity,
    Sparkles,
    Zap,
    BadgeCheck,
    MousePointerClick,
    Fingerprint,
    BellRing,
    ArrowUp,
    ArrowDown,
    ArrowLeft,
    ArrowRight,
    TimerReset,
    } from 'lucide-react';
    import { Link } from 'react-router';
    import { ImageWithFallback } from '../components/figma/ImageWithFallback';
    import { useLanguage } from '../contexts/LanguageContext';
    import { useAssetUrl } from '../utils/assetLoader';
    import './EcosystemPage.css';

    const featureCards = [
    {
        icon: Wallet,
        titleEn: 'Real Wallet Experience',
        titleKo: '실제 지갑 경험',
        descEn:
        'KORION Wallet is built as a real mobile product for holding assets, checking balances, and managing ecosystem activity.',
        descKo:
        'KORION Wallet은 자산 보관, 잔액 확인, 생태계 활동 관리를 위한 실제 모바일 지갑 제품으로 설계되었습니다.',
    },
    {
        icon: Pickaxe,
        titleEn: 'One-Tap Mining',
        titleKo: '원탭 채굴',
        descEn:
        'Participation-based mining is integrated into a familiar mobile flow for intuitive daily engagement.',
        descKo:
        '참여 기반 채굴 기능이 익숙한 모바일 흐름 안에 통합되어 직관적인 일상 참여를 지원합니다.',
    },
    {
        icon: ArrowUpDown,
        titleEn: 'Fast Transfers',
        titleKo: '빠른 전송',
        descEn:
        'Transfer and transaction flows are designed to feel simple, fast, and trustworthy inside the wallet.',
        descKo:
        '지갑 안의 전송 및 거래 흐름은 단순하고 빠르며 신뢰감 있게 느껴지도록 설계되었습니다.',
    },
    {
        icon: ShieldCheck,
        titleEn: 'Security-Centered Design',
        titleKo: '보안 중심 설계',
        descEn:
        'KORION Wallet emphasizes trust, operational safeguards, and disciplined digital asset handling.',
        descKo:
        'KORION Wallet은 신뢰, 운영 보호장치, 체계적인 디지털 자산 처리 구조를 중요하게 설계합니다.',
    },
    ];

    const trustPoints = [
    {
        icon: LockKeyhole,
        titleEn: 'Protected User Experience',
        titleKo: '보호된 사용자 경험',
        descEn:
        'Made to reduce friction while keeping the wallet experience secure, controlled, and confidence-driven.',
        descKo:
        '불필요한 복잡성은 줄이면서도 안전하고 통제된, 신뢰 중심의 지갑 경험을 제공합니다.',
    },
    {
        icon: Layers3,
        titleEn: 'Structured Wallet Logic',
        titleKo: '구조화된 지갑 로직',
        descEn:
        'Wallet, mining, rewards, and ecosystem utility are connected through one integrated interface.',
        descKo:
        '지갑, 채굴, 보상, 생태계 유틸리티가 하나의 통합 인터페이스로 연결됩니다.',
    },
    {
        icon: Activity,
        titleEn: 'Operational Visibility',
        titleKo: '운영 가시성',
        descEn:
        'Balance, mining state, reward flow, and activity can be presented clearly through one app experience.',
        descKo:
        '잔액, 채굴 상태, 보상 흐름, 활동 내역을 하나의 앱 경험 안에서 명확하게 확인할 수 있습니다.',
    },
    ];
    const buttonFeatures = [
    {
        icon: MousePointerClick,
        titleEn: 'Single Tap / Double Tap',
        titleKo: '한 번 클릭 / 두 번 클릭',
        descEn:
        'The center button can execute different actions based on single tap and double tap logic for faster access.',
        descKo:
        '센터 버튼은 한 번 클릭과 두 번 클릭을 구분하여 서로 다른 기능을 빠르게 실행할 수 있습니다.',
    },
    {
        icon: ArrowUp,
        titleEn: 'Directional Control',
        titleKo: '방향 제어',
        descEn:
        'Up, down, left, and right interactions allow multiple wallet functions to be triggered through one core button.',
        descKo:
        '위, 아래, 왼쪽, 오른쪽 입력을 통해 하나의 중심 버튼에서 여러 지갑 기능을 실행할 수 있습니다.',
    },
    {
        icon: BellRing,
        titleEn: 'Adaptive State Response',
        titleKo: '상태 반응형 동작',
        descEn:
        'The button can visually change when alerts, rewards, approvals, or activity states are updated.',
        descKo:
        '알림, 보상, 승인 요청, 활동 상태 변화에 따라 버튼 상태가 시각적으로 반응할 수 있습니다.',
    },
    {
        icon: Fingerprint,
        titleEn: 'Hold + Biometric Security',
        titleKo: '길게 누르기 + 생체인증',
        descEn:
        'A sustained press combined with biometric authentication can support protected pages and secure payment approval.',
        descKo:
        '몇 초간 누르기와 생체인증을 결합하여 보호된 페이지 진입과 안전한 결제 승인 기능을 지원할 수 있습니다.',
    },
    ];

    const buttonActions = [
    {
        icon: ArrowUp,
        labelEn: 'Up',
        labelKo: '위',
        valueEn: 'Transfer / Quick Action',
        valueKo: '송금 / 빠른 실행',
    },
    {
        icon: ArrowDown,
        labelEn: 'Down',
        labelKo: '아래',
        valueEn: 'Deposit / Receive',
        valueKo: '입금 / 받기',
    },
    {
        icon: ArrowLeft,
        labelEn: 'Left',
        labelKo: '왼쪽',
        valueEn: 'Reward / Point Utility',
        valueKo: '보상 / 포인트 유틸리티',
    },
    {
        icon: ArrowRight,
        labelEn: 'Right',
        labelKo: '오른쪽',
        valueEn: 'Event / Extra Action',
        valueKo: '이벤트 / 추가 기능',
    },
    {
        icon: MousePointerClick,
        labelEn: '1 Tap',
        labelKo: '1회 클릭',
        valueEn: 'Primary Action',
        valueKo: '기본 실행',
    },
    {
        icon: MousePointerClick,
        labelEn: '2 Tap',
        labelKo: '2회 클릭',
        valueEn: 'Secondary Action',
        valueKo: '보조 실행',
    },
    {
        icon: TimerReset,
        labelEn: 'Hold',
        labelKo: '길게 누르기',
        valueEn: 'Protected Mode',
        valueKo: '보호 모드',
    },
    {
        icon: Fingerprint,
        labelEn: 'Hold + Bio',
        labelKo: '길게 + 생체인증',
        valueEn: 'Secure Payment / Security Page',
        valueKo: '보안 결제 / 보안 페이지',
    },
    ];
    export function EcosystemPage() {
    const { t } = useLanguage();
    const walletMainImage = useAssetUrl(
        'wallet-main-image',
        () => import('../../assets/wallet/wallet-main.png')
    );

    return (
        <div className="ecosystem-page">
        <div className="ecosystem-page__bg">
            <div className="ecosystem-page__noise" />
            <div className="ecosystem-page__grid" />
            <div className="ecosystem-page__glow ecosystem-page__glow--blue" />
            <div className="ecosystem-page__glow ecosystem-page__glow--purple" />
            <div className="ecosystem-page__glow ecosystem-page__glow--violet" />
        </div>

        <section className="ecosystem-page__hero">
            <div className="ecosystem-page__container ecosystem-page__hero-layout">
            <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="ecosystem-page__hero-copy"
            >
                <div className="ecosystem-page__badge">
                <Sparkles size={15} />
                <span>{t('KORION Wallet Experience', 'KORION Wallet Experience')}</span>
                </div>

                <h1 className="ecosystem-page__title">
                {t('The Premium Mobile Gateway to the', '프리미엄 모바일 경험으로 연결되는')}{' '}
                <span className="ecosystem-page__title-gradient">
                    {t('KORION Ecosystem', 'KORION 생태계')}
                </span>
                </h1>

                <p className="ecosystem-page__subtitle">
                {t(
                    'KORION Wallet is the real user-facing gateway for mining participation, asset visibility, secure token handling, and future ecosystem utility. Built for clarity, trust, and a high-quality mobile experience.',
                    'KORION Wallet은 채굴 참여, 자산 가시성, 안전한 토큰 관리, 향후 생태계 유틸리티를 위한 실제 사용자용 게이트웨이입니다. 명확성, 신뢰, 고품질 모바일 경험을 위해 설계되었습니다.'
                )}
                </p>

                <div className="ecosystem-page__hero-actions">
                <Link
                    to="/download"
                    className="ecosystem-page__button ecosystem-page__button--primary"
                >
                    <Smartphone size={18} />
                    {t('Download Wallet', '지갑 다운로드')}
                    <ChevronRight size={18} />
                </Link>

                <Link
                    to="/whitepaper"
                    className="ecosystem-page__button ecosystem-page__button--ghost"
                >
                    <BadgeCheck size={18} />
                    {t('View Whitepaper', '백서 보기')}
                    <ChevronRight size={18} />
                </Link>
                </div>

                <div className="ecosystem-page__hero-points">
                <div className="ecosystem-page__hero-point">
                    <CheckCircle2 size={16} />
                    <span>{t('Real app-based wallet interface', '실제 앱 기반 지갑 인터페이스')}</span>
                </div>
                <div className="ecosystem-page__hero-point">
                    <CheckCircle2 size={16} />
                    <span>{t('Mining, rewards, and wallet in one flow', '채굴, 보상, 지갑이 하나의 흐름으로 연결')}</span>
                </div>
                <div className="ecosystem-page__hero-point">
                    <CheckCircle2 size={16} />
                    <span>{t('Premium mobile-first visual experience', '프리미엄 모바일 우선 비주얼 경험')}</span>
                </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.08 }}
                className="ecosystem-page__hero-visual"
            >
                <div className="wallet-stage">
                <div className="wallet-stage__beam wallet-stage__beam--left" />
                <div className="wallet-stage__beam wallet-stage__beam--right" />
                <div className="wallet-stage__ring wallet-stage__ring--one" />
                <div className="wallet-stage__ring wallet-stage__ring--two" />

                <div className="wallet-stage__chip wallet-stage__chip--top">
                    <ShieldCheck size={14} />
                    <span>{t('Secure Wallet', '보안 지갑')}</span>
                </div>

                <div className="wallet-stage__chip wallet-stage__chip--bottom">
                    <Zap size={14} />
                    <span>{t('Mining Ready', '채굴 활성화')}</span>
                </div>

                <div className="wallet-stage__frame">
                    <div className="wallet-stage__frame-shine" />
                    <ImageWithFallback
                    src={walletMainImage}
                    alt="KORION Wallet App Screen"
                    className="wallet-stage__image"
                    />
                </div>
                </div>
            </motion.div>
            </div>
        </section>

        <section className="ecosystem-page__section">
            <div className="ecosystem-page__container">
            <div className="ecosystem-page__section-heading">
                <span className="ecosystem-page__eyebrow">{t('Core Product Value', '핵심 제품 가치')}</span>
                <h2>{t('Designed around real wallet behavior', '실제 지갑 사용 흐름을 중심으로 설계')}</h2>
            </div>

            <div className="ecosystem-page__feature-grid">
                {featureCards.map((item, index) => {
                const Icon = item.icon;
                return (
                    <motion.div
                    key={item.titleEn}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    className="ecosystem-feature"
                    >
                    <div className="ecosystem-feature__icon">
                        <Icon size={22} />
                    </div>
                    <h3>{t(item.titleEn, item.titleKo)}</h3>
                    <p>{t(item.descEn, item.descKo)}</p>
                    </motion.div>
                );
                })}
            </div>
            </div>
        </section>

        <section className="ecosystem-page__section">
            <div className="ecosystem-page__container">
            <div className="ecosystem-highlight">
                <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.24 }}
                transition={{ duration: 0.55 }}
                className="ecosystem-highlight__copy"
                >
                <span className="ecosystem-page__eyebrow">
                    {t('Visual Product Layer', '비주얼 제품 레이어')}
                </span>

                <h2 className="ecosystem-highlight__title">
                    {t('Mining, rewards, and wallet activity in one premium screen.', '채굴, 보상, 지갑 활동을 하나의 프리미엄 화면에서.')}
                </h2>

                <p className="ecosystem-highlight__desc">
                    {t(
                    'The KORION Wallet interface is built to immediately communicate mining state, reward flow, and user activity with a polished mobile UI that feels modern, premium, and trustworthy.',
                    'KORION Wallet 인터페이스는 채굴 상태, 보상 흐름, 사용자 활동을 즉시 이해할 수 있도록 설계되었으며, 현대적이고 프리미엄하며 신뢰감 있는 모바일 UI 경험을 제공합니다.'
                    )}
                </p>

                <ul className="ecosystem-highlight__list">
                    <li>{t('Clear mining visibility and reward state', '명확한 채굴 상태 및 보상 가시성')}</li>
                    <li>{t('Fast recognition of key wallet information', '핵심 지갑 정보의 빠른 인지')}</li>
                    <li>{t('Strong visual trust through premium UI language', '프리미엄 UI 언어를 통한 높은 신뢰감')}</li>
                </ul>
                </motion.div>

                <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.24 }}
                transition={{ duration: 0.55 }}
                className="ecosystem-highlight__visual"
                >
                <div className="ecosystem-highlight__image-card">
                    <div className="ecosystem-highlight__image-glow" />
                    <ImageWithFallback
                    src={walletMainImage}
                    alt="KORION Wallet Interface"
                    className="ecosystem-highlight__image"
                    />
                </div>
                </motion.div>
            </div>
            </div>
        </section>
        <section className="ecosystem-page__section">
        <div className="ecosystem-page__container">
            <div className="ecosystem-button-section">
            <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="ecosystem-button-section__header"
            >
                <span className="ecosystem-page__eyebrow">
                {t('Patent-Pending Signature Control', '특허출원 기반 시그니처 제어')}
                </span>

                <h2 className="ecosystem-button-section__title">
                {t(
                    'One center button. 13+ possible actions.',
                    '하나의 중심 버튼으로 13개 이상의 기능 확장'
                )}
                </h2>

                <p className="ecosystem-button-section__desc">
                {t(
                    'The KORION Wallet center button is designed as more than a normal navigation button. It acts as a multi-action control hub that can combine directional gestures, single and double tap logic, alert-responsive states, and press-and-hold biometric security flows.',
                    'KORION Wallet의 센터 버튼은 단순한 이동 버튼이 아니라, 방향 입력, 한 번 클릭과 두 번 클릭, 알림 반응형 상태 변화, 길게 누르기와 생체인증 보안 흐름까지 결합할 수 있는 멀티 액션 제어 허브로 설계되었습니다.'
                )}
                </p>
            </motion.div>

            <div className="ecosystem-button-layout">
                <motion.div
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="ecosystem-button-orbit"
                >
                <div className="ecosystem-button-orbit__ring ecosystem-button-orbit__ring--outer" />
                <div className="ecosystem-button-orbit__ring ecosystem-button-orbit__ring--inner" />

                <div className="ecosystem-button-orbit__core">
                    <span>{t('Multi Action', '멀티 액션')}</span>
                </div>

                <div className="ecosystem-button-orbit__node ecosystem-button-orbit__node--top">
                    <ArrowUp size={18} />
                </div>
                <div className="ecosystem-button-orbit__node ecosystem-button-orbit__node--bottom">
                    <ArrowDown size={18} />
                </div>
                <div className="ecosystem-button-orbit__node ecosystem-button-orbit__node--left">
                    <ArrowLeft size={18} />
                </div>
                <div className="ecosystem-button-orbit__node ecosystem-button-orbit__node--right">
                    <ArrowRight size={18} />
                </div>
                <div className="ecosystem-button-orbit__node ecosystem-button-orbit__node--tap">
                    <MousePointerClick size={18} />
                </div>
                <div className="ecosystem-button-orbit__node ecosystem-button-orbit__node--hold">
                    <Fingerprint size={18} />
                </div>
                <div className="ecosystem-button-orbit__node ecosystem-button-orbit__node--alert">
                    <BellRing size={18} />
                </div>
                </motion.div>

                <motion.div
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="ecosystem-button-content"
                >
                <div className="ecosystem-button-content__grid">
                    {buttonFeatures.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                        key={item.titleEn}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="ecosystem-button-card"
                        >
                        <div className="ecosystem-button-card__icon">
                            <Icon size={20} />
                        </div>
                        <h3>{t(item.titleEn, item.titleKo)}</h3>
                        <p>{t(item.descEn, item.descKo)}</p>
                        </motion.div>
                    );
                    })}
                </div>

                <div className="ecosystem-button-actions">
                    {buttonActions.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                        key={`${item.labelEn}-${index}`}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.35, delay: index * 0.03 }}
                        className="ecosystem-button-actions__item"
                        >
                        <div className="ecosystem-button-actions__left">
                            <span className="ecosystem-button-actions__icon">
                            <Icon size={16} />
                            </span>
                            <strong>{t(item.labelEn, item.labelKo)}</strong>
                        </div>
                        <span className="ecosystem-button-actions__value">
                            {t(item.valueEn, item.valueKo)}
                        </span>
                        </motion.div>
                    );
                    })}
                </div>
                </motion.div>
            </div>
            </div>
        </div>
        </section>
        <section className="ecosystem-page__section ecosystem-page__section--last">
            <div className="ecosystem-page__container">
            <div className="ecosystem-trust-box">
                <div className="ecosystem-page__section-heading ecosystem-page__section-heading--left">
                <span className="ecosystem-page__eyebrow">{t('Trust Layer', '신뢰 레이어')}</span>
                <h2>{t('Built to feel secure, premium, and dependable', '안전하고 프리미엄하며 신뢰감 있게 설계')}</h2>
                </div>

                <div className="ecosystem-trust-grid">
                {trustPoints.map((item, index) => {
                    const Icon = item.icon;
                    return (
                    <motion.div
                        key={item.titleEn}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.06 }}
                        className="ecosystem-trust"
                    >
                        <div className="ecosystem-trust__icon">
                        <Icon size={20} />
                        </div>
                        <h3>{t(item.titleEn, item.titleKo)}</h3>
                        <p>{t(item.descEn, item.descKo)}</p>
                    </motion.div>
                    );
                })}
                </div>

                <div className="ecosystem-cta">
                <div>
                    <span className="ecosystem-page__eyebrow">{t('Next Step', '다음 단계')}</span>
                    <h2 className="ecosystem-cta__title">
                    {t('Experience the real KORION Wallet interface.', '실제 KORION Wallet 인터페이스를 경험해보세요.')}
                    </h2>
                    <p className="ecosystem-cta__desc">
                    {t(
                        'Download the wallet and explore a real mobile product built for participation, mining, and ecosystem access.',
                        '참여, 채굴, 생태계 접근을 위해 설계된 실제 모바일 제품을 직접 확인해보세요.'
                    )}
                    </p>
                </div>

                <div className="ecosystem-cta__actions">
                    <Link
                    to="/download"
                    className="ecosystem-page__button ecosystem-page__button--primary"
                    >
                    <Smartphone size={18} />
                    {t('Go to Download', '다운로드 페이지로 이동')}
                    <ChevronRight size={18} />
                    </Link>
                </div>
                </div>
            </div>
            </div>
        </section>
        </div>
    );
    }
