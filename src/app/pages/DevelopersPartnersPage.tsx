    import { Link } from 'react-router';
    import {
    Building2,
    ChevronDown,
    Globe,
    Landmark,
    LifeBuoy,
    Store,
    Wallet,
    } from 'lucide-react';
    import { useLanguage } from '../contexts/LanguageContext';
    import './DevelopersPartnersPage.css';

    const partnerCards = [
    {
        icon: Store,
        titleEn: 'Merchant Integration',
        titleKo: '가맹점 연동',
        descEn: 'For online and offline services integrating KORION Pay and settlement flows.',
        descKo: 'KORION Pay 및 정산 흐름을 연동하는 온라인/오프라인 서비스용입니다.',
    },
    {
        icon: Wallet,
        titleEn: 'Wallet Provider',
        titleKo: '지갑 사업자',
        descEn: 'For wallet services preparing asset display, deposit, and withdrawal support.',
        descKo: '자산 표시, 입출금 지원을 준비하는 지갑 서비스용입니다.',
    },
    {
        icon: Landmark,
        titleEn: 'Exchange / Custody',
        titleKo: '거래소 / 커스터디',
        descEn: 'For asset listing, operational support, and custody-related integration workflows.',
        descKo: '자산 상장, 운영 지원, 커스터디 관련 연동 흐름을 위한 구조입니다.',
    },
    ];

    export function DevelopersPartnersPage() {
    const { language } = useLanguage();
    const isKo = language === 'KR';

    return (
        <div className="developers-partners-page">
        <section className="developers-partners-hero">
            <div className="developers-partners-page__container">
            <div className="developers-partners-hero__crumbs">
                <Link to="/developers">{isKo ? '개발자' : 'Developers'}</Link>
                <ChevronDown size={14} />
                <span>{isKo ? '파트너' : 'Partners'}</span>
            </div>

            <h1>{isKo ? 'Partner Integration' : 'Partner Integration'}</h1>
            <p>
                {isKo
                ? 'KORION 파트너 문서는 가맹점, 지갑 사업자, 거래소, 커스터디 파트너가 실제 연동을 준비할 때 참고할 수 있는 공개 구조를 제공합니다. 기술 문서와 함께 온보딩 체크리스트, 사전등록, 테스트 흐름을 연결하는 것이 좋습니다.'
                : 'Partner documentation provides the public integration structure for merchants, wallet providers, exchanges, and custody partners.'}
            </p>
            </div>
        </section>

        <section className="developers-partners-body">
            <div className="developers-partners-page__container">
            <div className="developers-partners-intro">
                <div className="developers-partners-intro__card">
                <Building2 size={18} />
                <strong>{isKo ? '역할별 온보딩 구조' : 'Role-based onboarding structure'}</strong>
                </div>
                <div className="developers-partners-intro__card">
                <Globe size={18} />
                <strong>{isKo ? '기술 문서와 운영 절차 연결' : 'Links technical docs with operations'}</strong>
                </div>
            </div>

            <div className="developers-partners-grid">
                {partnerCards.map((card) => {
                const Icon = card.icon;
                return (
                    <article className="developers-partners-card" key={card.titleEn}>
                    <div className="developers-partners-card__icon">
                        <Icon size={18} />
                    </div>
                    <h2>{isKo ? card.titleKo : card.titleEn}</h2>
                    <p>{isKo ? card.descKo : card.descEn}</p>
                    <Link to="/developers/preregister" className="developers-partners-card__button">
                        {isKo ? '사전등록 연결' : 'Go to Pre-registration'}
                    </Link>
                    </article>
                );
                })}
            </div>

            <section className="developers-partners-section">
                <h2>{isKo ? '권장 온보딩 항목' : 'Recommended Onboarding Items'}</h2>
                <div className="developers-partners-divider" />
                <div className="developers-partners-checklist">
                <div><LifeBuoy size={16} /><span>{isKo ? '담당자 정보 확인' : 'Confirm contact ownership'}</span></div>
                <div><LifeBuoy size={16} /><span>{isKo ? '연동 목적 정의' : 'Define integration purpose'}</span></div>
                <div><LifeBuoy size={16} /><span>{isKo ? '테스트 환경 검증' : 'Validate sandbox usage'}</span></div>
                <div><LifeBuoy size={16} /><span>{isKo ? '웹훅 이벤트 수신 점검' : 'Review webhook event handling'}</span></div>
                <div><LifeBuoy size={16} /><span>{isKo ? '운영 이전 체크리스트 수행' : 'Complete pre-production checklist'}</span></div>
                </div>
            </section>
            </div>
        </section>
        </div>
    );
    }