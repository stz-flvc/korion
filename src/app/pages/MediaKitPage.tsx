import { motion } from "framer-motion";
import {
    ArrowDownToLine,
    BadgeCheck,
    Download,
    FileArchive,
    FileText,
    Globe,
    Image as ImageIcon,
    Layers3,
    Palette,
    ShieldCheck,
    Sparkles,
    Wand2,
    } from "lucide-react";
    import { Link } from "react-router";
    import { ImageWithFallback } from "../components/figma/ImageWithFallback";
    import { useLanguage } from "../contexts/LanguageContext";
    import { useAssetUrl } from "../utils/assetLoader";
    import "./MediaKitPage.css";

    type AssetCard = {
    icon: React.ElementType;
    titleKo: string;
    titleEn: string;
    descKo: string;
    descEn: string;
    metaKo: string;
    metaEn: string;
    };

    type RuleItem = {
    titleKo: string;
    titleEn: string;
    descKo: string;
    descEn: string;
    };

    const assetCards: AssetCard[] = [
    {
        icon: Layers3,
        titleKo: "브랜드 로고 패키지",
        titleEn: "Brand Logo Package",
        descKo:
        "심볼, 워드마크, 가로형/세로형 구조를 포함한 기본 브랜드 자산 패키지입니다.",
        descEn:
        "Core brand asset package including symbol, wordmark, and horizontal/vertical logo compositions.",
        metaKo: "SVG / PNG / 다크 / 라이트",
        metaEn: "SVG / PNG / Dark / Light",
    },
    {
        icon: Palette,
        titleKo: "브랜드 컬러 시스템",
        titleEn: "Brand Color System",
        descKo:
        "KORION의 신뢰감과 미래지향성을 반영한 메인/서브 컬러 가이드입니다.",
        descEn:
        "Primary and secondary color guidance reflecting KORION’s trust, clarity, and forward-looking identity.",
        metaKo: "메인 / 포인트 / 뉴트럴",
        metaEn: "Primary / Accent / Neutral",
    },
    {
        icon: FileText,
        titleKo: "프로젝트 소개 자료",
        titleEn: "Project Overview Materials",
        descKo:
        "서비스 개요, 생태계 방향성, 활용 구조를 빠르게 전달할 수 있는 공식 소개 자료입니다.",
        descEn:
        "Official overview materials that clearly present the service, ecosystem direction, and utility structure.",
        metaKo: "PDF / 요약 / 피치덱",
        metaEn: "PDF / Summary / Pitch",
    },
    {
        icon: ImageIcon,
        titleKo: "프로덕트 스크린샷",
        titleEn: "Product Screenshots",
        descKo:
        "앱/플랫폼 화면 및 홍보용 비주얼에 사용할 수 있는 공식 이미지 세트입니다.",
        descEn:
        "Official image sets for app/platform screens and promotional visual usage.",
        metaKo: "앱 / UI / 프리뷰",
        metaEn: "App / UI / Preview",
    },
    ];

    const usageRules: RuleItem[] = [
    {
        titleKo: "비율 유지",
        titleEn: "Keep proportions",
        descKo:
        "로고의 비율, 간격, 형태를 임의로 변형하지 않고 원본 기준을 유지합니다.",
        descEn:
        "Do not distort the logo. Preserve its original proportions, spacing, and structure.",
    },
    {
        titleKo: "공식 색상 사용",
        titleEn: "Use official colors",
        descKo:
        "브랜드 컬러 가이드를 기준으로 사용하며 임의 색상 변경은 최소화합니다.",
        descEn:
        "Use the official brand palette and avoid arbitrary recoloring whenever possible.",
    },
    {
        titleKo: "충분한 여백 확보",
        titleEn: "Respect clear space",
        descKo:
        "로고 주변에는 가독성과 독립성을 해치지 않도록 충분한 여백을 확보합니다.",
        descEn:
        "Maintain sufficient clear space around the logo to protect legibility and identity.",
    },
    {
        titleKo: "공식 자료 우선 사용",
        titleEn: "Prefer official assets",
        descKo:
        "홍보, 기사, 파트너 제안서에는 공식 배포된 자료를 우선적으로 사용하는 것을 권장합니다.",
        descEn:
        "For media, PR, and partner use, official distributed assets should be used whenever possible.",
    },
    ];

    const quickFacts = [
    {
        labelKo: "프로젝트 포지션",
        labelEn: "Project Positioning",
        valueKo: "디지털 결제 · 생태계 인프라 · 실사용 확장",
        valueEn: "Digital payments · ecosystem infrastructure · practical utility expansion",
    },
    {
        labelKo: "핵심 방향",
        labelEn: "Core Direction",
        valueKo: "신뢰성 있는 서비스 구조와 확장 가능한 브랜드 경험",
        valueEn: "Trusted service architecture with scalable brand experience",
    },
    {
        labelKo: "활용 목적",
        labelEn: "Primary Use Cases",
        valueKo: "미디어, 파트너 제안, 상장 자료, 커뮤니티 배포",
        valueEn: "Media, partner decks, listing materials, and community distribution",
    },
    ];

    export function MediaKitPage() {
    const { language } = useLanguage();
    const isKo = language === "KR";
    const logo = useAssetUrl(
        'korion-logo-main',
        () => import("../../assets/logo/logo.png")
    );

    return (
        <div className="media-kit-page">
        <section className="media-kit-hero">
            <div className="media-kit-hero__bg">
            <div className="media-kit-hero__orb media-kit-hero__orb--one" />
            <div className="media-kit-hero__orb media-kit-hero__orb--two" />
            <div className="media-kit-hero__grid" />
            <div className="media-kit-hero__beam media-kit-hero__beam--left" />
            <div className="media-kit-hero__beam media-kit-hero__beam--right" />
            </div>

            <div className="media-kit-page__container media-kit-hero__container">
            <motion.div
                className="media-kit-hero__content"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="media-kit-hero__eyebrow">
                <Sparkles size={16} />
                <span>{isKo ? "KORION 미디어 키트" : "KORION MEDIA KIT"}</span>
                </div>

                <h1 className="media-kit-hero__title">
                {isKo
                    ? "브랜드 자산과 프로젝트 소개 자료를 한 곳에서"
                    : "Brand assets and project materials in one premium destination"}
                </h1>

                <p className="media-kit-hero__description">
                {isKo
                    ? "KORION Media Kit은 로고, 시각 자산, 소개 자료, 제품 이미지 등 대외 커뮤니케이션에 필요한 핵심 브랜드 요소를 체계적으로 정리한 페이지입니다."
                    : "The KORION Media Kit centralizes logos, visual assets, project materials, and product imagery for clear, premium external communication."}
                </p>

                <div className="media-kit-hero__actions">
                <a href="#assets" className="media-kit-hero__primary">
                    <Download size={18} />
                    <span>{isKo ? "자산 보기" : "View Assets"}</span>
                </a>

                <Link to="/contact" className="media-kit-hero__secondary">
                    <BadgeCheck size={18} />
                    <span>{isKo ? "브랜드 문의" : "Brand Contact"}</span>
                </Link>
                </div>

                <div className="media-kit-hero__mini-note">
                <ShieldCheck size={15} />
                <span>
                    {isKo
                    ? "실제 파일은 추후 공식 버전으로 교체 가능하도록 설계되었습니다."
                    : "Built so official files can be replaced later without redesigning the page."}
                </span>
                </div>
            </motion.div>

            <motion.div
                className="media-kit-hero__visual"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.08 }}
            >
                <div className="media-kit-showcase">
                <div className="media-kit-showcase__halo" />
                <div className="media-kit-showcase__ring media-kit-showcase__ring--one" />
                <div className="media-kit-showcase__ring media-kit-showcase__ring--two" />

                <div className="media-kit-showcase__card media-kit-showcase__card--main">
                    <div className="media-kit-showcase__brand">
                    <div className="media-kit-showcase__brand-badge">
                        <ImageWithFallback src={logo || undefined} alt="KORION Logo" />
                    </div>
                    <div>
                        <p className="media-kit-showcase__brand-label">KORION</p>
                        <h3>
                        {isKo ? "공식 브랜드 자산" : "Official Brand Assets"}
                        </h3>
                    </div>
                    </div>

                    <div className="media-kit-showcase__grid">
                    <div className="media-kit-showcase__tile">
                        <Palette size={18} />
                        <span>{isKo ? "브랜드 컬러" : "Brand Colors"}</span>
                    </div>
                    <div className="media-kit-showcase__tile">
                        <Layers3 size={18} />
                        <span>{isKo ? "로고 패키지" : "Logo Package"}</span>
                    </div>
                    <div className="media-kit-showcase__tile">
                        <FileArchive size={18} />
                        <span>{isKo ? "배포 자료" : "Press Assets"}</span>
                    </div>
                    <div className="media-kit-showcase__tile">
                        <Globe size={18} />
                        <span>{isKo ? "프로젝트 소개" : "Project Overview"}</span>
                    </div>
                    </div>
                </div>

                <div className="media-kit-showcase__card media-kit-showcase__card--floating media-kit-showcase__card--top">
                    <Wand2 size={16} />
                    <span>{isKo ? "프리미엄 브랜드 아이덴티티" : "Premium brand identity"}</span>
                </div>

                <div className="media-kit-showcase__card media-kit-showcase__card--floating media-kit-showcase__card--bottom">
                    <ArrowDownToLine size={16} />
                    <span>{isKo ? "미디어·파트너 활용 준비 완료" : "Ready for media & partner use"}</span>
                </div>
                </div>
            </motion.div>
            </div>
        </section>

        <section className="media-kit-facts">
            <div className="media-kit-page__container-01">
            <div className="media-kit-facts__grid">
                {quickFacts.map((item, index) => (
                <motion.div
                    key={item.labelEn}
                    className="media-kit-facts__card"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                    <p className="media-kit-facts__label">
                    {isKo ? item.labelKo : item.labelEn}
                    </p>
                    <h3 className="media-kit-facts__value">
                    {isKo ? item.valueKo : item.valueEn}
                    </h3>
                </motion.div>
                ))}
            </div>
            </div>
        </section>

        <section className="media-kit-assets" id="assets">
            <div className="media-kit-page__container-01">
            <div className="media-kit-section-heading">
                <span>{isKo ? "자산 라이브러리" : "ASSET LIBRARY"}</span>
                <h2>
                {isKo
                    ? "브랜드 자산을 체계적으로 정리한 다운로드 허브"
                    : "A structured download hub for KORION brand assets"}
                </h2>
                <p>
                {isKo
                    ? "실제 다운로드 링크가 아직 없어도 페이지 구조를 먼저 완성해두면, 이후 공식 파일만 교체하여 바로 운영할 수 있습니다."
                    : "Even before final files are ready, this structure lets you launch a polished page and replace assets later with official downloads."}
                </p>
            </div>

            <div className="media-kit-assets__grid">
                {assetCards.map((card, index) => {
                const Icon = card.icon;

                return (
                    <motion.article
                    key={card.titleEn}
                    className="media-kit-asset-card"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    >
                    <div className="media-kit-asset-card__top">
                        <div className="media-kit-asset-card__icon">
                        <Icon size={20} />
                        </div>
                        <span className="media-kit-asset-card__meta">
                        {isKo ? card.metaKo : card.metaEn}
                        </span>
                    </div>

                    <h3>{isKo ? card.titleKo : card.titleEn}</h3>
                    <p>{isKo ? card.descKo : card.descEn}</p>

                    <div className="media-kit-asset-card__actions">
                        <button type="button" className="media-kit-asset-card__button">
                        <Download size={16} />
                        <span>{isKo ? "다운로드 예정" : "Coming Soon"}</span>
                        </button>

                        <button
                        type="button"
                        className="media-kit-asset-card__button media-kit-asset-card__button--ghost"
                        >
                        <FileText size={16} />
                        <span>{isKo ? "상세 보기" : "Details"}</span>
                        </button>
                    </div>
                    </motion.article>
                );
                })}
            </div>
            </div>
        </section>

        <section className="media-kit-brand">
            <div className="media-kit-page__container-01 media-kit-brand__container">
            <motion.div
                className="media-kit-brand__panel"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65 }}
            >
                <div className="media-kit-section-heading media-kit-section-heading--left">
                <span>{isKo ? "브랜드 스토리" : "BRAND STORY"}</span>
                <h2>
                    {isKo
                    ? "KORION이 전달해야 하는 인상"
                    : "The impression KORION should consistently deliver"}
                </h2>
                </div>

                <p className="media-kit-brand__lead">
                {isKo
                    ? "KORION은 단순한 시각 요소가 아니라, 신뢰성, 구조적 완성도, 그리고 실제 활용 확장성을 전달하는 브랜드 경험으로 보여져야 합니다."
                    : "KORION should be presented not merely as a visual identity, but as a brand experience shaped by trust, structural depth, and real-world utility potential."}
                </p>

                <div className="media-kit-brand__bullets">
                <div className="media-kit-brand__bullet">
                    <BadgeCheck size={18} />
                    <div>
                    <strong>{isKo ? "신뢰 중심의 인상" : "Trust-first impression"}</strong>
                    <p>
                        {isKo
                        ? "투자자, 파트너, 사용자 모두에게 안정적이고 정돈된 브랜드 톤을 제공합니다."
                        : "Delivers a stable, refined tone for investors, partners, and users alike."}
                    </p>
                    </div>
                </div>

                <div className="media-kit-brand__bullet">
                    <ShieldCheck size={18} />
                    <div>
                    <strong>{isKo ? "구조적 정체성" : "Structured identity"}</strong>
                    <p>
                        {isKo
                        ? "서비스와 생태계의 구조를 시각적으로도 일관되게 전달할 수 있도록 설계합니다."
                        : "Visually reinforces the underlying service architecture and ecosystem structure."}
                    </p>
                    </div>
                </div>

                <div className="media-kit-brand__bullet">
                    <Sparkles size={18} />
                    <div>
                    <strong>{isKo ? "프리미엄 확장성" : "Premium scalability"}</strong>
                    <p>
                        {isKo
                        ? "미디어, 리스팅, 제휴, 홍보 등 다양한 외부 채널에 자연스럽게 확장될 수 있어야 합니다."
                        : "It should extend naturally across media, listings, partnerships, and promotional channels."}
                    </p>
                    </div>
                </div>
                </div>
            </motion.div>

            <motion.div
                className="media-kit-brand__preview"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65 }}
            >
                <div className="media-kit-brand__preview-card">
                <div className="media-kit-brand__preview-top">
                    <div className="media-kit-brand__logo-wrap">
                    <ImageWithFallback src={logo || undefined} alt="KORION" />
                    </div>
                    <div>
                    <p>{isKo ? "공식 미디어 표현 기준" : "Official media presentation"}</p>
                    <h3>{isKo ? "KORION 브랜드 프레임" : "KORION Brand Frame"}</h3>
                    </div>
                </div>

                <div className="media-kit-brand__color-row">
                    <span className="media-kit-brand__color media-kit-brand__color--one" />
                    <span className="media-kit-brand__color media-kit-brand__color--two" />
                    <span className="media-kit-brand__color media-kit-brand__color--three" />
                    <span className="media-kit-brand__color media-kit-brand__color--four" />
                </div>

                <div className="media-kit-brand__preview-copy">
                    {isKo
                    ? "브랜드 자산은 단순 다운로드 목록이 아니라, KORION의 정체성을 외부 세계에 정확하게 전달하는 공식 인터페이스가 되어야 합니다."
                    : "Brand assets should function not just as downloadable files, but as the official interface through which KORION presents itself to the world."}
                </div>
                </div>
            </motion.div>
            </div>
        </section>

        <section className="media-kit-rules">
            <div className="media-kit-page__container-01">
            <div className="media-kit-section-heading">
                <span>{isKo ? "사용 가이드라인" : "USAGE GUIDELINES"}</span>
                <h2>
                {isKo
                    ? "브랜드 사용 가이드"
                    : "Guidelines for clean and consistent brand usage"}
                </h2>
            </div>

            <div className="media-kit-rules__grid">
                {usageRules.map((rule, index) => (
                <motion.div
                    key={rule.titleEn}
                    className="media-kit-rule-card"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                    <div className="media-kit-rule-card__index">
                    {(index + 1).toString().padStart(2, "0")}
                    </div>
                    <h3>{isKo ? rule.titleKo : rule.titleEn}</h3>
                    <p>{isKo ? rule.descKo : rule.descEn}</p>
                </motion.div>
                ))}
            </div>
            </div>
        </section>

        <section className="media-kit-cta">
            <div className="media-kit-page__container-01">
            <motion.div
                className="media-kit-cta__panel"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65 }}
            >
                <div className="media-kit-cta__content">
                <span>{isKo ? "보도자료 · 파트너 · 커뮤니티" : "PRESS · PARTNERS · COMMUNITY"}</span>
                <h2>
                    {isKo
                    ? "공식 자료가 필요하신가요?"
                    : "Need official materials for press or partnership use?"}
                </h2>
                <p>
                    {isKo
                    ? "실제 로고 원본, 소개서, 이미지 세트, 보도자료 버전은 운영 단계에서 공식 다운로드 링크로 연결하면 됩니다."
                    : "Official source files, overview decks, image sets, and press-ready versions can be connected here as downloadable resources during launch."}
                </p>
                </div>

                <div className="media-kit-cta__actions">
                <Link to="/contact" className="media-kit-cta__button">
                    <BadgeCheck size={18} />
                    <span>{isKo ? "문의하기" : "Contact Us"}</span>
                </Link>

                <Link to="/whitepaper" className="media-kit-cta__button media-kit-cta__button--ghost">
                    <FileText size={18} />
                    <span>{isKo ? "백서 보기" : "View Whitepaper"}</span>
                </Link>
                </div>
            </motion.div>
            </div>
        </section>
        </div>
    );
    }
