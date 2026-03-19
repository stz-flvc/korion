import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import {
    ChevronDown,
    FileText,
    Layers3,
    Package,
    ShieldCheck,
    Sparkles,
    Wrench,
    } from 'lucide-react';
    import { useLanguage } from '../contexts/LanguageContext';
    import './DevelopersChangelogPage.css';

    const changelogItems = [
    {
        version: 'v0.4.0',
        date: '2026-03',
        icon: Sparkles,
        titleEn: 'Developers portal structure expanded',
        titleKo: 'Developers 포털 구조 확장',
        itemsEn: [
        'Developers landing page migrated to documentation-portal layout',
        'API Reference page added',
        'Pre-registration page added',
        'SDK page added',
        ],
        itemsKo: [
        'Developers 메인 페이지를 문서 포털형 구조로 전환',
        'API Reference 페이지 추가',
        '사전등록 페이지 추가',
        'SDK 페이지 추가',
        ],
    },
    {
        version: 'v0.3.0',
        date: '2026-03',
        icon: Package,
        titleEn: 'Public API architecture organized',
        titleKo: '공개 API 아키텍처 정리',
        itemsEn: [
        'Wallet, Payment, Deposit, Withdrawal, Webhook, Partner API groups defined',
        'Representative endpoints drafted',
        'Public documentation grouping refined',
        ],
        itemsKo: [
        'Wallet, Payment, Deposit, Withdrawal, Webhook, Partner API 그룹 정의',
        '대표 엔드포인트 초안 정리',
        '공개 문서 분류 체계 정비',
        ],
    },
    {
        version: 'v0.2.0',
        date: '2026-03',
        icon: ShieldCheck,
        titleEn: 'Contract and network visibility improved',
        titleKo: '컨트랙트 및 네트워크 가시성 강화',
        itemsEn: [
        'TRON / TRC20 structure clarified',
        'Contract address and explorer reference added',
        'Token decimals and base specification aligned',
        ],
        itemsKo: [
        'TRON / TRC20 구조 명확화',
        '컨트랙트 주소 및 익스플로러 참조 추가',
        '토큰 소수점 및 기본 스펙 정렬',
        ],
    },
    {
        version: 'v0.1.0',
        date: '2026-03',
        icon: Wrench,
        titleEn: 'Initial developer surface drafted',
        titleKo: '초기 개발자 구조 초안 작성',
        itemsEn: [
        'First version of developer-facing content drafted',
        'Wallet, payment, and onboarding requirements identified',
        ],
        itemsKo: [
        '초기 개발자 공개 구조 초안 작성',
        '지갑, 결제, 온보딩 요구사항 도출',
        ],
    },
    ];

    export function DevelopersChangelogPage() {
    const { language } = useLanguage();
    const isKo = language === 'KR';
    const [activeVersion, setActiveVersion] = useState('');


    return (
        <div className="developers-changelog-page">
        <section className="developers-changelog-hero">
            <div className="developers-changelog-page__container">
            <div className="developers-changelog-hero__crumbs">
                <Link to="/developers">{isKo ? '개발자' : 'Developers'}</Link>
                <ChevronDown size={14} />
                <span>{isKo ? '변경 이력' : 'Change Log'}</span>
            </div>

            <h1>KORION Change Log</h1>
            <p>
                {isKo
                ? '공개 문서, API 구조, SDK 자료, 파트너 온보딩 흐름의 변경 사항을 기록하는 영역입니다. 문서 포털에서는 이력이 쌓일수록 신뢰도가 올라갑니다.'
                : 'Track updates across public docs, API structure, SDK resources, and partner onboarding flows.'}
            </p>
            </div>
        </section>

        <section className="developers-changelog-body">
            <div className="developers-changelog-page__container developers-changelog-body__grid">
            <aside className="developers-changelog-sidebar">
                <div className="developers-changelog-sidebar__box">
                <span className="developers-changelog-sidebar__title">
                    {isKo ? '릴리즈' : 'Releases'}
                </span>

                {changelogItems.map((item) => (
                    <a
                    key={item.version}
                    href={`#${item.version}`}
                    className={`developers-changelog-sidebar__link${
                        activeVersion === item.version ? ' is-active' : ''
                    }`}
                    onClick={() => setActiveVersion(item.version)}
                    >
                    <span className="developers-changelog-sidebar__dot" />
                    <span>{item.version}</span>
                    </a>
                ))}
                </div>
            </aside>

            <main className="developers-changelog-main">
                <section className="developers-changelog-summary">
                <div className="developers-changelog-summary__card">
                    <div className="developers-changelog-summary__icon">
                    <Layers3 size={18} />
                    </div>
                    <div>
                    <span>{isKo ? '문서 구조' : 'Documentation Structure'}</span>
                    <strong>
                        {isKo
                        ? '문서 포털 기반으로 확장 중'
                        : 'Expanding as a docs-first portal'}
                    </strong>
                    </div>
                </div>

                <div className="developers-changelog-summary__card">
                    <div className="developers-changelog-summary__icon">
                    <FileText size={18} />
                    </div>
                    <div>
                    <span>{isKo ? '공개 범위' : 'Public Scope'}</span>
                    <strong>
                        {isKo
                        ? 'API · SDK · 사전등록 · 변경 이력'
                        : 'API · SDK · Pre-registration · Changelog'}
                    </strong>
                    </div>
                </div>
                </section>

                <section className="developers-changelog-list">
                {changelogItems.map((item) => {
                    const Icon = item.icon;
                    const lines = isKo ? item.itemsKo : item.itemsEn;

                    return (
                    <article
                        className="developers-changelog-entry"
                        id={item.version}
                        key={item.version}
                    >
                        <div className="developers-changelog-entry__meta">
                        <span className="developers-changelog-entry__version">
                            {item.version}
                        </span>
                        <span className="developers-changelog-entry__date">
                            {item.date}
                        </span>
                        </div>

                        <div className="developers-changelog-entry__card">
                        <div className="developers-changelog-entry__icon">
                            <Icon size={18} />
                        </div>

                        <div className="developers-changelog-entry__content">
                            <h2>{isKo ? item.titleKo : item.titleEn}</h2>
                            <ul>
                            {lines.map((line) => (
                                <li key={line}>{line}</li>
                            ))}
                            </ul>
                        </div>
                        </div>
                    </article>
                    );
                })}
                </section>
            </main>
            </div>
        </section>
        </div>
    );
    }