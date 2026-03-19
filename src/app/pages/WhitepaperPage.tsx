import React, { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router';
import {
    ChevronLeft,
    ChevronRight,
    Download,
    ExternalLink,
    FileText,
    Home,
    Languages,
    Menu,
    X,
    } from 'lucide-react';
    import FooterNew from '../components/FooterNew';
    import { useLanguage } from '../contexts/LanguageContext';
    import { loadAssetUrl } from '../utils/assetLoader';
    
    import './WhitepaperPage.css';
    const sections = [
    { titleEn: 'Front Matter', titleKr: '서문', page: 1 },
    { titleEn: 'Executive Summary', titleKr: '요약', page: 5 },
    { titleEn: 'Industry Background', titleKr: '산업 배경', page: 5 },
    { titleEn: 'Problem Statement', titleKr: '문제 정의', page: 6 },
    { titleEn: 'Vision, Mission, and Strategic Principles', titleKr: '비전, 미션 및 전략 원칙', page: 7 },
    { titleEn: 'KORION Ecosystem Overview', titleKr: 'KORION 생태계 개요', page: 8 },
    { titleEn: 'Ecosystem Participants', titleKr: '생태계 참여자', page: 9 },
    { titleEn: 'Token Overview', titleKr: '토큰 개요', page: 9 },
    { titleEn: 'Token Utility Framework', titleKr: '토큰 유틸리티 구조', page: 10 },
    { titleEn: 'Token Supply Structure', titleKr: '토큰 공급 구조', page: 11 },
    { titleEn: 'Treasury Governance', titleKr: '트레저리 거버넌스', page: 12 },
    { titleEn: 'Treasury Wallet Policy', titleKr: '트레저리 지갑 정책', page: 13 },
    { titleEn: 'Wallet Architecture', titleKr: '지갑 아키텍처', page: 15 },
    { titleEn: 'User Account and Identity Layer', titleKr: '사용자 계정 및 인증 레이어', page: 16 },
    { titleEn: 'Deposit and Withdrawal Framework', titleKr: '입출금 구조', page: 17 },
    { titleEn: 'Mobile Mining Model', titleKr: '모바일 채굴 모델', page: 19 },
    { titleEn: 'Mining Reward Calculation', titleKr: '채굴 보상 산정', page: 19 },
    {
        titleEn: 'Mining Levels, Efficiency, and Participation Logic',
        titleKr: '채굴 레벨, 효율 및 참여 로직',
        page: 20,
    },
    { titleEn: 'Mining Emission Schedule', titleKr: '채굴 발행 일정', page: 21 },
    { titleEn: 'Token Burn Mechanisms', titleKr: '토큰 소각 메커니즘', page: 21 },
    { titleEn: 'KORION Pay', titleKr: 'KORION Pay', page: 22 },
    { titleEn: 'Offline Payment Technology', titleKr: '오프라인 결제 기술', page: 23 },
    { titleEn: 'Foxyya Social Platform', titleKr: 'Foxyya 소셜 플랫폼', page: 24 },
    { titleEn: 'Marketplace Integration', titleKr: '마켓플레이스 통합', page: 26 },
    { titleEn: 'Exchange Infrastructure', titleKr: '거래소 인프라', page: 27 },
    { titleEn: 'Liquidity Strategy', titleKr: '유동성 전략', page: 28 },
    { titleEn: 'Security Framework', titleKr: '보안 프레임워크', page: 28 },
    { titleEn: 'Smart Contract Architecture', titleKr: '스마트 컨트랙트 아키텍처', page: 30 },
    { titleEn: 'Technical Infrastructure', titleKr: '기술 인프라', page: 31 },
    { titleEn: 'Data, Logging, and Observability', titleKr: '데이터, 로깅 및 관측성', page: 33 },
    { titleEn: 'Custody and Asset Protection', titleKr: '커스터디 및 자산 보호', page: 33 },
    { titleEn: 'Compliance and Risk Controls', titleKr: '컴플라이언스 및 리스크 통제', page: 34 },
    { titleEn: 'Economic Sustainability', titleKr: '경제적 지속 가능성', page: 35 },
    { titleEn: 'Governance Model', titleKr: '거버넌스 모델', page: 36 },
    { titleEn: 'Revenue Model', titleKr: '수익 모델', page: 37 },
    { titleEn: 'Market Expansion Strategy', titleKr: '시장 확장 전략', page: 38 },
    { titleEn: 'Partnership Strategy', titleKr: '파트너십 전략', page: 39 },
    { titleEn: 'Roadmap', titleKr: '로드맵', page: 40 },
    { titleEn: 'Future Development', titleKr: '향후 개발 방향', page: 41 },
    { titleEn: 'Team and Organization', titleKr: '팀 및 조직', page: 41 },
    { titleEn: 'Legal and Regulatory Compliance', titleKr: '법률 및 규제 준수', page: 42 },
    { titleEn: 'Risk Disclosure', titleKr: '위험 고지', page: 43 },
    { titleEn: 'Transparency Policy', titleKr: '투명성 정책', page: 44 },
    { titleEn: 'Audit and Security Review Plan', titleKr: '감사 및 보안 검토 계획', page: 45 },
    { titleEn: 'Use Case Scenarios', titleKr: '활용 시나리오', page: 45 },
    { titleEn: 'KPI and Ecosystem Metrics', titleKr: 'KPI 및 생태계 지표', page: 46 },
    { titleEn: 'Community and Ecosystem Growth', titleKr: '커뮤니티 및 생태계 성장', page: 47 },
    { titleEn: 'Branding and Positioning', titleKr: '브랜딩 및 포지셔닝', page: 47 },
    { titleEn: 'Conclusion', titleKr: '결론', page: 48 },
    { titleEn: 'FAQ', titleKr: '자주 묻는 질문', page: 48 },
    { titleEn: 'Glossary', titleKr: '용어집', page: 49 },
    { titleEn: 'Appendix A: Token Allocation Summary', titleKr: '부록 A: 토큰 배분 요약', page: 50 },
    { titleEn: 'Appendix B: Emission Schedule Table', titleKr: '부록 B: 발행 일정 표', page: 51 },
    { titleEn: 'Appendix C: Treasury Role Summary', titleKr: '부록 C: 트레저리 역할 요약', page: 51 },
    { titleEn: 'Appendix D: Architecture Summary', titleKr: '부록 D: 아키텍처 요약', page: 52 },
    { titleEn: 'Appendix E: Payment Flow Summary', titleKr: '부록 E: 결제 흐름 요약', page: 53 },
    { titleEn: 'Appendix F: Mining Flow Summary', titleKr: '부록 F: 채굴 흐름 요약', page: 54 },
    { titleEn: 'Appendix G: Security Principles Summary', titleKr: '부록 G: 보안 원칙 요약', page: 55 },
    {
        titleEn: 'Appendix H: Revenue and Burn Logic Summary',
        titleKr: '부록 H: 수익 및 소각 로직 요약',
        page: 56,
    },
    { titleEn: 'Appendix I: Governance Decision Scope', titleKr: '부록 I: 거버넌스 의사결정 범위', page: 56 },
    { titleEn: 'Disclaimer', titleKr: '면책 조항', page: 57 },
    ];

    const TOTAL_PAGES = 57;

    export default function WhitepaperPage() {
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);
    const [isPdfLoading, setIsPdfLoading] = useState(false);

    const { t, language, toggleLanguage } = useLanguage();
    const isKr = language === 'KR';

    const ensurePdfUrl = useCallback(async () => {
        if (pdfUrl) {
            return pdfUrl;
        }

        setIsPdfLoading(true);
        try {
            const loadedUrl = await loadAssetUrl(
                'whitepaper-v1-1-pdf',
                () => import('../../whitepaper/Whitepaper Version-1.1.pdf?url')
            );
            setPdfUrl(loadedUrl);
            return loadedUrl;
        } finally {
            setIsPdfLoading(false);
        }
    }, [pdfUrl]);

    const pdfSrc = useMemo(() => {
        if (!pdfUrl) {
            return null;
        }

        return `${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&page=${currentPage}`;
    }, [currentPage, pdfUrl]);

    const goToPage = (page: number) => {
        const safePage = Math.max(1, Math.min(TOTAL_PAGES, page));
        setCurrentPage(safePage);
        setMobileSidebarOpen(false);
    };

    const onPrev = async () => {
        await ensurePdfUrl();
        goToPage(currentPage - 1);
    };
    const onNext = async () => {
        await ensurePdfUrl();
        goToPage(currentPage + 1);
    };

    const handleOpenPdf = useCallback(async () => {
        const loadedUrl = await ensurePdfUrl();
        window.open(loadedUrl, '_blank', 'noopener,noreferrer');
    }, [ensurePdfUrl]);

    const handleDownloadPdf = useCallback(async () => {
        const loadedUrl = await ensurePdfUrl();
        const anchor = document.createElement('a');
        anchor.href = loadedUrl;
        anchor.download = 'KORION-Whitepaper-Version-1.1.pdf';
        document.body.appendChild(anchor);
        anchor.click();
        anchor.remove();
    }, [ensurePdfUrl]);

    const handleLoadViewer = useCallback(async () => {
        await ensurePdfUrl();
    }, [ensurePdfUrl]);

    const progress = (currentPage / TOTAL_PAGES) * 100;

    return (
        <div className="whitepaper-page">
        <div className="whitepaper-page__hero">
            <div className="whitepaper-page__container">
            <div className="whitepaper-page__hero-row">
                <div className="whitepaper-page__hero-left">
                <div className="whitepaper-page__brand-icon">
                <Link to="/">
                    <FileText size={20} />
                </Link>
                </div>

                <div className="whitepaper-page__brand-copy">
                    <p className="whitepaper-page__eyebrow">
                    {t('KORION DOCUMENT', 'KORION 문서')}
                    </p>
                    <h1 className="whitepaper-page__title">
                    {t('KORION Whitepaper', 'KORION 백서')}
                    </h1>
                    <p className="whitepaper-page__subtitle">
                    {t(
                        'Mobile Mining, Digital Payments, and Service-Integrated Token Economy',
                        '모바일 채굴, 디지털 결제, 서비스 통합형 토큰 이코노미'
                    )}
                    </p>
                </div>
                </div>

                <div className="whitepaper-page__hero-actions">
                <Link to="/" className="whitepaper-page__ghost-button">
                    <Home size={16} />
                    {t('Home', '홈')}
                </Link>

                <button
                    type="button"
                    onClick={handleOpenPdf}
                    className="whitepaper-page__ghost-button"
                    disabled={isPdfLoading}
                >
                    <ExternalLink size={16} />
                    {isPdfLoading ? t('Loading PDF...', 'PDF 불러오는 중...') : t('Open PDF', 'PDF 열기')}
                </button>

                <button
                    type="button"
                    onClick={toggleLanguage}
                    className="whitepaper-page__ghost-button"
                >
                    <Languages size={16} />
                    {isKr ? 'English' : '한국어'}
                </button>



                <button
                    type="button"
                    onClick={handleDownloadPdf}
                    className="korion-nav__cta-button"
                    disabled={isPdfLoading}
                >
                    <Download size={16} />
                    {isPdfLoading ? t('Preparing...', '준비 중...') : t('Download', '다운로드')}
                </button>
                </div>

                <button
                type="button"
                onClick={() => setMobileSidebarOpen(true)}
                className="whitepaper-page__mobile-menu"
                aria-label={t('Open whitepaper navigation', '백서 메뉴 열기')}
                >
                <Menu size={20} />
                </button>
            </div>
            </div>
        </div>

        <div className="whitepaper-page__container whitepaper-page__layout">
            <aside className="whitepaper-page__sidebar">
            <div className="whitepaper-page__sidebar-sticky">
                <div className="whitepaper-page__sidebar-head">
                <div className="whitepaper-page__sidebar-head-row">
                    <h2 className="whitepaper-page__sidebar-title">
                    {t('Contents', '목차')}
                    </h2>
                    <span className="whitepaper-page__badge">
                    {TOTAL_PAGES} {t('Pages', '페이지')}
                    </span>
                </div>

                <div className="whitepaper-page__progress">
                    <div
                    className="whitepaper-page__progress-bar"
                    style={{ width: `${progress}%` }}
                    />
                </div>

                <p className="whitepaper-page__muted">
                    {t('Viewing page', '현재 페이지')} {currentPage} / {TOTAL_PAGES}
                </p>
                </div>

                <div className="whitepaper-page__sidebar-body">
                <div className="whitepaper-page__toc">
                    {sections.map((item) => {
                    const active = currentPage === item.page;

                    return (
                        <button
                        key={`${item.titleEn}-${item.page}`}
                        type="button"
                        onClick={() => goToPage(item.page)}
                        className={`whitepaper-page__toc-item ${active ? 'is-active' : ''}`}
                        >
                        <span className="whitepaper-page__toc-page">p.{item.page}</span>
                        <span className="whitepaper-page__toc-text">
                            {isKr ? item.titleKr : item.titleEn}
                        </span>
                        </button>
                    );
                    })}
                </div>
                </div>
            </div>
            </aside>

            {mobileSidebarOpen && (
            <div className="whitepaper-page__mobile-overlay">
                <button
                type="button"
                onClick={() => setMobileSidebarOpen(false)}
                className="whitepaper-page__mobile-backdrop"
                aria-label={t('Close whitepaper navigation overlay', '백서 메뉴 닫기')}
                />

                <div className="whitepaper-page__mobile-panel">
                <div className="whitepaper-page__mobile-head">
                    <div>
                    <p className="whitepaper-page__eyebrow whitepaper-page__eyebrow--mobile">
                        {t('Contents', '목차')}
                    </p>
                    <h2 className="whitepaper-page__mobile-title">
                        {t('Whitepaper Navigation', '백서 내비게이션')}
                    </h2>
                    </div>

                    <button
                    type="button"
                    onClick={() => setMobileSidebarOpen(false)}
                    className="whitepaper-page__mobile-close"
                    aria-label={t('Close whitepaper navigation', '백서 메뉴 닫기')}
                    >
                    <X size={20} />
                    </button>
                </div>

                <div className="whitepaper-page__mobile-progress-wrap">
                    <div className="whitepaper-page__progress">
                    <div
                        className="whitepaper-page__progress-bar"
                        style={{ width: `${progress}%` }}
                    />
                    </div>

                    <p className="whitepaper-page__muted">
                    {t('Viewing page', '현재 페이지')} {currentPage} / {TOTAL_PAGES}
                    </p>
                </div>

                <div className="whitepaper-page__mobile-body">
                    <div className="whitepaper-page__toc">
                    {sections.map((item) => {
                        const active = currentPage === item.page;

                        return (
                        <button
                            key={`${item.titleEn}-${item.page}-mobile`}
                            type="button"
                            onClick={() => goToPage(item.page)}
                            className={`whitepaper-page__toc-item ${active ? 'is-active' : ''}`}
                        >
                            <span className="whitepaper-page__toc-page">p.{item.page}</span>
                            <span className="whitepaper-page__toc-text">
                            {isKr ? item.titleKr : item.titleEn}
                            </span>
                        </button>
                        );
                    })}
                    </div>
                </div>
                </div>
            </div>
            )}

            <main className="whitepaper-page__main">
            <div className="whitepaper-page__toolbar">
                <div className="whitepaper-page__toolbar-row">
                <div className="whitepaper-page__pager">
                    <button
                    type="button"
                    onClick={onPrev}
                    disabled={currentPage <= 1}
                    className="whitepaper-page__icon-button"
                    aria-label={t('Previous page', '이전 페이지')}
                    >
                    <ChevronLeft size={20} />
                    </button>

                    <div className="whitepaper-page__page-indicator">
                    {t('Page', '페이지')} <span>{currentPage}</span> / {TOTAL_PAGES}
                    </div>

                    <button
                    type="button"
                    onClick={onNext}
                    disabled={currentPage >= TOTAL_PAGES}
                    className="whitepaper-page__icon-button"
                    aria-label={t('Next page', '다음 페이지')}
                    >
                    <ChevronRight size={20} />
                    </button>
                </div>

                <div className="whitepaper-page__mobile-actions">
                    <Link
                    to="/"
                    className="whitepaper-page__ghost-button whitepaper-page__ghost-button--small"
                    >
                    <Home size={16} />
                    {t('Home', '홈')}
                    </Link>

                    <button
                    type="button"
                    onClick={handleOpenPdf}
                    className="whitepaper-page__ghost-button whitepaper-page__ghost-button--small"
                    disabled={isPdfLoading}
                    >
                    <ExternalLink size={16} />
                    {isPdfLoading ? t('Loading...', '로딩 중...') : t('Open', '열기')}
                    </button>

                    <button
                    type="button"
                    onClick={handleDownloadPdf}
                    className="whitepaper-page__ghost-button whitepaper-page__ghost-button--small"
                    disabled={isPdfLoading}
                    >
                    <Download size={16} />
                    {isPdfLoading ? t('Preparing...', '준비 중...') : t('Save', '저장')}
                    </button>

                    <button
                    type="button"
                    onClick={toggleLanguage}
                    className="whitepaper-page__ghost-button whitepaper-page__ghost-button--small"
                    >
                    <Languages size={16} />
                    {isKr ? 'EN' : 'KR'}
                    </button>
                </div>
                </div>
            </div>

            <section className="whitepaper-page__viewer-section">
                <div className="whitepaper-page__viewer-shell">
                <div className="whitepaper-page__viewer-head">
                    <div>
                    <p className="whitepaper-page__viewer-eyebrow">
                        {t('PDF Viewer', 'PDF 뷰어')}
                    </p>
                    <h3 className="whitepaper-page__viewer-title">
                        {t('KORION Whitepaper Viewer', 'KORION 백서 뷰어')}
                    </h3>
                    </div>

                    <div className="whitepaper-page__viewer-note">
                    {t('Internal PDF frame', '내부 PDF 프레임')}
                    <br />
                    {t('Page-linked navigation', '페이지 연동 내비게이션')}
                    </div>
                </div>

                <div className="whitepaper-page__viewer-frame">
                    {pdfSrc ? (
                    <iframe
                        key={pdfSrc}
                        src={pdfSrc}
                        title={t('KORION Whitepaper PDF Viewer', 'KORION 백서 PDF 뷰어')}
                        className="whitepaper-page__iframe"
                    />
                    ) : (
                    <div className="whitepaper-page__viewer-placeholder">
                        <div className="whitepaper-page__viewer-placeholder-card">
                        <FileText size={28} />
                        <h4>{t('Load the whitepaper when you need it', '필요할 때만 백서를 불러옵니다')}</h4>
                        <p>
                            {t(
                            'The PDF stays out of the initial render path until you open, download, or load the viewer.',
                            'PDF는 열기, 다운로드, 또는 뷰어 불러오기를 누르기 전까지 초기 렌더 경로에서 제외됩니다.'
                            )}
                        </p>
                        <button
                            type="button"
                            onClick={handleLoadViewer}
                            className="korion-nav__cta-button"
                            disabled={isPdfLoading}
                        >
                            <FileText size={16} />
                            {isPdfLoading ? t('Loading PDF...', 'PDF 불러오는 중...') : t('Load Viewer', '뷰어 불러오기')}
                        </button>
                        </div>
                    </div>
                    )}
                </div>
                </div>
            </section>
            </main>
        </div>

        <FooterNew />
        </div>
    );
    }
