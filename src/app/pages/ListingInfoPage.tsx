import { motion } from 'motion/react';
import {
    ArrowUpRight,
    BadgeCheck,
    BarChart3,
    CandlestickChart,
    Coins,
    Droplets,
    ExternalLink,
    Globe,
    Landmark,
    Layers3,
    Link2,
    Activity,
    ShieldCheck,
    TrendingUp,
    Wallet,
    Sparkles,
    Radar,
    CircleDollarSign,
    } from 'lucide-react';
    import { useLanguage } from '../contexts/LanguageContext';
    import './ListingInfoPage.css';

    const marketCards = [
    {
        icon: Coins,
        titleEn: 'DEX Trading',
        titleKo: 'DEX 거래',
        descEn:
        'KORION is currently available for decentralized trading through the TRON ecosystem.',
        descKo:
        'KORION은 현재 TRON 생태계 기반의 탈중앙화 거래 환경에서 거래할 수 있습니다.',
    },
    {
        icon: Layers3,
        titleEn: 'Liquidity Environment',
        titleKo: '유동성 환경',
        descEn:
        'Market access is currently centered on DEX liquidity and on-chain swap activity.',
        descKo:
        '현재 마켓 접근은 DEX 유동성과 온체인 스왑 활동을 중심으로 구성되어 있습니다.',
    },
    {
        icon: Globe,
        titleEn: 'Future Market Expansion',
        titleKo: '향후 마켓 확장',
        descEn:
        'Additional market integrations may be considered over time depending on ecosystem growth and operational strategy.',
        descKo:
        '생태계 성장과 운영 전략에 따라 향후 추가 마켓 연동이 검토될 수 있습니다.',
    },
    ];

    const referenceLinks = [
    {
        icon: Link2,
        title: 'SUN.io',
        href: 'https://sun.io/?lang=en-US#/scan/pairDetail?pairAddress=TCHbWJUBZ9DVpaPb6QW9vb31yTSz7sfhQh&version=v2',
        descEn: 'Current decentralized trading market for KORION.',
        descKo: '현재 KORION이 거래 중인 탈중앙화 거래 마켓입니다.',
    },
    {
        icon: Wallet,
        title: 'TRON Network',
        href: 'https://tronscan.org/#/token20/TBJZD8RwQ1JcQvEP9BTbPbgBCGxUjxSXnn',
        descEn: 'Network environment used for KORION token activity and on-chain reference.',
        descKo: 'KORION 토큰 활동과 온체인 확인에 사용되는 네트워크 환경입니다.',
    },
    {
        icon: ShieldCheck,
        title: 'Official Reference',
        href: '/whitepaper',
        descEn: 'Review the broader token ecosystem and platform direction.',
        descKo: '토큰 생태계와 플랫폼 방향성에 대한 더 넓은 내용을 확인할 수 있습니다.',
        internal: true,
    },
    ];

    const dexStats = {
    priceUsd: 0.0124,
    priceTrx: 0.0432,
    volume24hUsd: 12874.45,
    liquidityUsd: 68420.2,
    change24h: 5.37,
    lastUpdated: '2026-03-15 20:30 KST',
    };

    const priceHistory = [
    { label: '00:00', value: 0.0112 },
    { label: '04:00', value: 0.0118 },
    { label: '08:00', value: 0.0114 },
    { label: '12:00', value: 0.0121 },
    { label: '16:00', value: 0.0119 },
    { label: '20:00', value: 0.0128 },
    { label: 'Now', value: 0.0124 },
    ];

    function formatUsd(value: number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: value < 1 ? 6 : 2,
    }).format(value);
    }

    function formatCompactUsd(value: number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        notation: 'compact',
        maximumFractionDigits: 2,
    }).format(value);
    }

    function formatTrx(value: number) {
    return `${new Intl.NumberFormat('en-US', {
        maximumFractionDigits: 6,
    }).format(value)} TRX`;
    }

    function formatPercent(value: number) {
    const sign = value > 0 ? '+' : '';
    return `${sign}${value.toFixed(2)}%`;
    }

    function buildLinePoints(data: { label: string; value: number }[]) {
    const width = 100;
    const height = 100;
    const padding = 8;
    const values = data.map((item) => item.value);
    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = max - min || 1;

    return data
        .map((item, index) => {
        const x =
            padding + (index * (width - padding * 2)) / Math.max(data.length - 1, 1);
        const y =
            height - padding - ((item.value - min) / range) * (height - padding * 2);
        return `${x},${y}`;
        })
        .join(' ');
    }

    function buildAreaPoints(data: { label: string; value: number }[]) {
    const line = buildLinePoints(data).split(' ');
    if (line.length === 0) return '';
    const first = line[0].split(',')[0];
    const last = line[line.length - 1].split(',')[0];
    return `${first},92 ${line.join(' ')} ${last},92`;
    }

    export function ListingInfoPage() {
    const { language } = useLanguage();
    const isKo = language === 'KR';

    const linePoints = buildLinePoints(priceHistory);
    const areaPoints = buildAreaPoints(priceHistory);

    const latestValue = priceHistory[priceHistory.length - 1]?.value ?? 0;
    const highValue = Math.max(...priceHistory.map((item) => item.value));
    const lowValue = Math.min(...priceHistory.map((item) => item.value));

    return (
        <div className="listing-info-page">
        <div className="listing-info-page__bg">
            <div className="listing-info-page__orb listing-info-page__orb--one" />
            <div className="listing-info-page__orb listing-info-page__orb--two" />
            <div className="listing-info-page__orb listing-info-page__orb--three" />
            <div className="listing-info-page__grid" />
        </div>

        <div className="listing-info-page__container">
            <motion.section
            className="listing-info-page__intro"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            >
            <div className="listing-info-page__eyebrow">
                <BadgeCheck size={15} />
                <span>{isKo ? '상장 정보' : 'Listing Information'}</span>
            </div>

            <h1 className="listing-info-page__title">
                {isKo
                ? '거래소 및 마켓 참고 정보를 보다 정교하게 확인할 수 있는 프리미엄 안내 페이지입니다.'
                : 'A premium market reference page for exchange visibility and listing information.'}
            </h1>

            <p className="listing-info-page__description">
                {isKo
                ? '현재 KORION은 TRON 기반 DEX 환경에서 거래가 가능하며, 이 페이지는 거래 가능 상태, 마켓 지표, 유동성 참고 정보, 향후 확장 가능성 및 공식 확인 링크를 한곳에서 확인할 수 있도록 구성되었습니다.'
                : 'KORION is currently tradable in a TRON-based decentralized market environment. This page brings together trading status, market metrics, liquidity references, future expansion guidance, and official verification links in one premium view.'}
            </p>
            </motion.section>

            <motion.section
            className="listing-info-page__hero-board"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.06 }}
            >
            <article className="listing-board listing-board--primary">
                <div className="listing-board__top">
                <div className="listing-board__title-group">
                    <div className="listing-board__icon">
                    <Coins size={18} />
                    </div>
                    <div>
                    <span className="listing-board__label">
                        {isKo ? '현재 거래 환경' : 'Current Trading Venue'}
                    </span>
                    <h2>{isKo ? 'SUN.io DEX 활성 상태' : 'SUN.io DEX Active'}</h2>
                    </div>
                </div>

                <span className="listing-board__badge">
                    {isKo ? '온체인 거래 가능' : 'On-chain Trading Live'}
                </span>
                </div>

                <p className="listing-board__desc">
                {isKo
                    ? 'KORION은 현재 SUN.io를 통해 거래되고 있으며, TRON 네트워크 기반의 유동성 환경 안에서 가격 형성과 스왑 흐름을 확인할 수 있습니다.'
                    : 'KORION is currently tradable via SUN.io, where price discovery and swap activity take place inside the TRON network liquidity environment.'}
                </p>

                <div className="listing-board__chips">
                <span>TRON</span>
                <span>SUN.io</span>
                <span>{isKo ? 'DEX 거래중' : 'DEX Live'}</span>
                </div>

                <a
                className="listing-board__action"
                href="https://sun.io/?lang=en-US#/scan/pairDetail?pairAddress=TCHbWJUBZ9DVpaPb6QW9vb31yTSz7sfhQh&version=v2"
                target="_blank"
                rel="noopener noreferrer"
                >
                <span>{isKo ? 'SUN.io 바로가기' : 'Open SUN.io'}</span>
                <ArrowUpRight size={16} />
                </a>
            </article>

            <article className="listing-board listing-board--secondary">
                <div className="listing-board__top">
                <div className="listing-board__title-group">
                    <div className="listing-board__icon listing-board__icon--soft">
                    <Landmark size={18} />
                    </div>
                    <div>
                    <span className="listing-board__label">
                        {isKo ? '향후 상장 방향' : 'Future Listing Direction'}
                    </span>
                    <h2>{isKo ? '추가 거래소는 아직 미상장' : 'No Additional Listings Yet'}</h2>
                    </div>
                </div>
                </div>

                <p className="listing-board__desc">
                {isKo
                    ? '현재 기준으로 KORION은 추가 중앙화 거래소 또는 기타 외부 마켓에 공식 상장되지 않았습니다. 향후 확장 여부는 생태계 성장, 유동성 규모, 운영 전략에 따라 검토될 수 있습니다.'
                    : 'At this time, KORION is not officially listed on additional centralized exchanges or other extended markets. Future expansion may be reviewed depending on ecosystem growth, liquidity scale, and operational strategy.'}
                </p>

                <div className="listing-board__signal">
                <TrendingUp size={16} />
                <span>
                    {isKo
                    ? '향후 정보는 공식 공지 기준으로 확인하는 것이 가장 정확합니다.'
                    : 'Future updates should be verified through official announcements.'}
                </span>
                </div>
            </article>
            </motion.section>

            <motion.section
            className="listing-info-page__market-terminal"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.1 }}
            >
            <div className="listing-info-page__section-head">
                <span>{isKo ? 'DEX 마켓 스냅샷' : 'DEX Market Snapshot'}</span>
                <h2>{isKo ? '가격, 거래량, 유동성, 최근 추이' : 'Price, volume, liquidity, and trend'}</h2>
            </div>

            <div className="listing-terminal">
                <div className="listing-terminal__left">
                <div className="listing-terminal__stats">
                    <article className="listing-stat-tile listing-stat-tile--featured">
                    <div className="listing-stat-tile__head">
                        <div className="listing-stat-tile__icon">
                        <CircleDollarSign size={18} />
                        </div>
                        <span>{isKo ? '현재 가격' : 'Current Price'}</span>
                    </div>
                    <strong>{formatUsd(dexStats.priceUsd)}</strong>
                    <p>{formatTrx(dexStats.priceTrx)}</p>
                    </article>

                    <article className="listing-stat-tile">
                    <div className="listing-stat-tile__head">
                        <div className="listing-stat-tile__icon">
                        <BarChart3 size={18} />
                        </div>
                        <span>{isKo ? '24h 거래량' : '24H Volume'}</span>
                    </div>
                    <strong>{formatCompactUsd(dexStats.volume24hUsd)}</strong>
                    <p>{isKo ? '온체인 기준 참고값' : 'Reference from on-chain volume'}</p>
                    </article>

                    <article className="listing-stat-tile">
                    <div className="listing-stat-tile__head">
                        <div className="listing-stat-tile__icon">
                        <Droplets size={18} />
                        </div>
                        <span>{isKo ? '유동성' : 'Liquidity'}</span>
                    </div>
                    <strong>{formatCompactUsd(dexStats.liquidityUsd)}</strong>
                    <p>{isKo ? '활성 풀 기준 참고값' : 'Reference from active pool depth'}</p>
                    </article>

                    <article className="listing-stat-tile">
                    <div className="listing-stat-tile__head">
                        <div className="listing-stat-tile__icon">
                        <Activity size={18} />
                        </div>
                        <span>{isKo ? '24시간 변동률' : '24H Change'}</span>
                    </div>
                    <strong
                        className={
                        dexStats.change24h > 0
                            ? 'is-up'
                            : dexStats.change24h < 0
                            ? 'is-down'
                            : ''
                        }
                    >
                        {formatPercent(dexStats.change24h)}
                    </strong>
                    <p>
                        {isKo
                        ? `업데이트: ${dexStats.lastUpdated}`
                        : `Updated: ${dexStats.lastUpdated}`}
                    </p>
                    </article>
                </div>

                <article className="listing-chart-panel">
                    <div className="listing-chart-panel__top">
                    <div>
                        <span className="listing-chart-panel__eyebrow">
                        {isKo ? '가격 흐름 시각화' : 'Price Flow Visualization'}
                        </span>
                        <h3>{isKo ? '최근 구간 추이' : 'Recent interval trend'}</h3>
                    </div>

                    <div className="listing-chart-panel__mini-stats">
                        <span>
                        {isKo ? '고가' : 'High'} <strong>{formatUsd(highValue)}</strong>
                        </span>
                        <span>
                        {isKo ? '저가' : 'Low'} <strong>{formatUsd(lowValue)}</strong>
                        </span>
                        <span>
                        {isKo ? '현재' : 'Last'} <strong>{formatUsd(latestValue)}</strong>
                        </span>
                    </div>
                    </div>

                    <div className="listing-chart-panel__canvas">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                        <defs>
                        <linearGradient id="listingAreaGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="rgba(123,132,255,0.45)" />
                            <stop offset="100%" stopColor="rgba(123,132,255,0.02)" />
                        </linearGradient>
                        </defs>

                        <polygon
                        points={areaPoints}
                        fill="url(#listingAreaGradient)"
                        className="listing-chart-panel__area"
                        />
                        <polyline
                        points={linePoints}
                        fill="none"
                        className="listing-chart-panel__line-glow"
                        />
                        <polyline
                        points={linePoints}
                        fill="none"
                        className="listing-chart-panel__line"
                        />
                    </svg>

                    <div className="listing-chart-panel__timeline">
                        {priceHistory.map((item) => (
                        <div key={item.label} className="listing-chart-panel__tick">
                            <span className="listing-chart-panel__tick-dot" />
                            <span>{item.label}</span>
                        </div>
                        ))}
                    </div>
                    </div>
                </article>
                </div>

                <div className="listing-terminal__right">
                <article className="listing-insight-card">
                    <div className="listing-insight-card__head">
                    <div className="listing-insight-card__icon">
                        <CandlestickChart size={18} />
                    </div>
                    <div>
                        <span>{isKo ? '시장 해석' : 'Market Interpretation'}</span>
                        <h3>{isKo ? '현재 DEX 중심 단계' : 'DEX-Centered Phase'}</h3>
                    </div>
                    </div>

                    <p>
                    {isKo
                        ? '현재 KORION의 거래 구조는 DEX를 중심으로 형성되어 있으며, 시장 참여도는 유동성 규모와 스왑 흐름에 직접 연결됩니다. 따라서 가격, 거래량, 유동성은 현재 단계에서 가장 중요한 참고 지표로 볼 수 있습니다.'
                        : 'KORION is currently operating in a DEX-centered market phase, where participation is directly tied to pool depth and swap activity. Price, volume, and liquidity are therefore the most important reference metrics at this stage.'}
                    </p>

                    <div className="listing-insight-card__points">
                    <div className="listing-insight-card__point">
                        <Radar size={15} />
                        <span>{isKo ? '온체인 중심 가격 형성' : 'On-chain price discovery'}</span>
                    </div>
                    <div className="listing-insight-card__point">
                        <Sparkles size={15} />
                        <span>{isKo ? '유동성 깊이가 체감 거래성에 영향' : 'Liquidity depth affects tradability'}</span>
                    </div>
                    <div className="listing-insight-card__point">
                        <TrendingUp size={15} />
                        <span>{isKo ? '향후 확장은 생태계 성장과 연결' : 'Future expansion ties to ecosystem growth'}</span>
                    </div>
                    </div>
                </article>

                <article className="listing-brief-card">
                    <span className="listing-brief-card__eyebrow">
                    {isKo ? '마켓 브리프' : 'Market Brief'}
                    </span>
                    <h3>{isKo ? '현재 확인 포인트' : 'Current Checkpoints'}</h3>

                    <ul>
                    <li>
                        {isKo
                        ? '현재 거래 가능 마켓은 SUN.io 중심입니다.'
                        : 'SUN.io is the current active market venue.'}
                    </li>
                    <li>
                        {isKo
                        ? 'TRON 네트워크 기반 확인 링크를 통해 상태 점검이 가능합니다.'
                        : 'TRON-based reference links support verification and monitoring.'}
                    </li>
                    <li>
                        {isKo
                        ? '추가 거래소 정보는 공식 발표 전까지 확정 정보로 보기 어렵습니다.'
                        : 'Additional exchange information should not be treated as confirmed before official announcement.'}
                    </li>
                    </ul>
                </article>
                </div>
            </div>
            </motion.section>

            <motion.section
            className="listing-info-page__market-overview"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.14 }}
            >
            <div className="listing-info-page__section-head">
                <span>{isKo ? '마켓 참고 정보' : 'Market Reference'}</span>
                <h2>{isKo ? '현재 거래 환경과 향후 방향성' : 'Current market access and future direction'}</h2>
            </div>

            <div className="listing-market-grid">
                {marketCards.map((item, index) => {
                const Icon = item.icon;

                return (
                    <motion.article
                    key={item.titleEn}
                    className="listing-market-card"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.56, delay: 0.16 + index * 0.06 }}
                    >
                    <div className="listing-market-card__icon">
                        <Icon size={18} />
                    </div>
                    <h3>{isKo ? item.titleKo : item.titleEn}</h3>
                    <p>{isKo ? item.descKo : item.descEn}</p>
                    </motion.article>
                );
                })}
            </div>
            </motion.section>

            <motion.section
            className="listing-info-page__details"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.18 }}
            >
            <div className="listing-detail-panel">
                <div className="listing-detail-panel__head">
                <span className="listing-detail-panel__dot" />
                <h3>{isKo ? '현재 상장 상태' : 'Current Listing Status'}</h3>
                </div>

                <ul className="listing-detail-panel__list">
                <li>
                    {isKo
                    ? 'KORION은 현재 SUN.io에서 거래 가능한 상태입니다.'
                    : 'KORION is currently tradable on SUN.io.'}
                </li>
                <li>
                    {isKo
                    ? 'TRON 네트워크 환경을 기반으로 거래 참고가 가능합니다.'
                    : 'The trading environment is based on the TRON network.'}
                </li>
                <li>
                    {isKo
                    ? '기타 거래소는 현재 기준으로 아직 공식 상장되지 않았습니다.'
                    : 'No other exchanges are officially listed at this time.'}
                </li>
                </ul>
            </div>

            <div className="listing-detail-panel">
                <div className="listing-detail-panel__head">
                <span className="listing-detail-panel__dot" />
                <h3>{isKo ? '향후 마켓 관련 안내' : 'Future Market Guidance'}</h3>
                </div>

                <ul className="listing-detail-panel__list">
                <li>
                    {isKo
                    ? '향후 DEX 확장 또는 추가 마켓 검토가 진행될 수 있습니다.'
                    : 'Additional DEX expansion or further market reviews may occur in the future.'}
                </li>
                <li>
                    {isKo
                    ? '중앙화 거래소 상장은 현재 확정 공지가 없는 상태입니다.'
                    : 'No confirmed centralized exchange announcement has been made yet.'}
                </li>
                <li>
                    {isKo
                    ? '공식 상장 관련 내용은 추후 공지 또는 공식 채널을 통해 확인하는 것이 가장 정확합니다.'
                    : 'The most accurate updates on future listings should come from official announcements and channels.'}
                </li>
                </ul>
            </div>
            </motion.section>

            <motion.section
            className="listing-info-page__references"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.24 }}
            >
            <div className="listing-info-page__section-head">
                <span>{isKo ? '공식 참고 링크' : 'Official Reference Links'}</span>
                <h2>{isKo ? '거래 및 확인에 참고할 수 있는 링크' : 'Useful links for trading and verification'}</h2>
            </div>

            <div className="listing-reference-grid">
                {referenceLinks.map((item, index) => {
                const Icon = item.icon;

                if (item.internal) {
                    return (
                    <motion.a
                        key={item.title}
                        href={item.href}
                        className="listing-reference-card"
                        initial={{ opacity: 0, y: 22 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.56, delay: 0.26 + index * 0.06 }}
                    >
                        <div className="listing-reference-card__icon">
                        <Icon size={18} />
                        </div>
                        <div className="listing-reference-card__body">
                        <h3>{item.title}</h3>
                        <p>{isKo ? item.descKo : item.descEn}</p>
                        </div>
                        <ExternalLink size={16} />
                    </motion.a>
                    );
                }

                return (
                    <motion.a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="listing-reference-card"
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.56, delay: 0.26 + index * 0.06 }}
                    >
                    <div className="listing-reference-card__icon">
                        <Icon size={18} />
                    </div>
                    <div className="listing-reference-card__body">
                        <h3>{item.title}</h3>
                        <p>{isKo ? item.descKo : item.descEn}</p>
                    </div>
                    <ExternalLink size={16} />
                    </motion.a>
                );
                })}
            </div>
            </motion.section>

            <motion.section
            className="listing-info-page__notice"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.3 }}
            >
            <div className="listing-notice-card">
                <h3>{isKo ? '안내 사항' : 'Notice'}</h3>
                <p>
                {isKo
                    ? '본 페이지는 현재 확인 가능한 거래 환경과 향후 마켓 관련 참고 정보를 제공하기 위한 안내용 페이지입니다. 실제 상장 상태, 유동성, 거래 가능 여부 및 향후 확장 계획은 시장 상황과 운영 정책에 따라 달라질 수 있으며, 최신 정보는 공식 채널을 통해 확인하는 것이 가장 정확합니다.'
                    : 'This page is intended to provide reference information about the current trading environment and possible future market pathways. Actual listing status, liquidity conditions, trading availability, and future expansion plans may change depending on market conditions and operational policy, so the most accurate updates should be verified through official channels.'}
                </p>
            </div>
            </motion.section>
        </div>
        </div>
    );
    }