import { Link, useLocation } from 'react-router';
import { useEffect, useMemo, useState } from 'react';
import {
    ChevronDown,
    ChevronRight,
    Code2,
    CreditCard,
    Database,
    FileCode2,
    Globe,
    KeyRound,
    Layers3,
    ShieldCheck,
    TimerReset,
    Wallet,
    Webhook,
    Workflow,
    } from 'lucide-react';
    import { useLanguage } from '../contexts/LanguageContext';
    import './DevelopersApiPage.css';

    const apiGroups = [
    {
        titleEn: 'Wallet API',
        titleKo: 'Wallet API',
        icon: Wallet,
        endpoints: [
        'GET /v1/wallet/balance',
        'GET /v1/wallet/address',
        'GET /v1/wallet/assets',
        ],
    },
    {
        titleEn: 'Payment API',
        titleKo: 'Payment API',
        icon: CreditCard,
        endpoints: [
        'POST /v1/payments',
        'GET /v1/payments/{id}',
        'GET /v1/payments/settlements',
        ],
    },
    {
        titleEn: 'Deposit API',
        titleKo: 'Deposit API',
        icon: Database,
        endpoints: [
        'GET /v1/deposits',
        'GET /v1/deposits/{id}',
        'GET /v1/deposits/status',
        ],
    },
    {
        titleEn: 'Withdrawal API',
        titleKo: 'Withdrawal API',
        icon: Workflow,
        endpoints: [
        'POST /v1/withdrawals',
        'GET /v1/withdrawals/{id}',
        'GET /v1/withdrawals/status',
        ],
    },
    {
        titleEn: 'Webhook API',
        titleKo: 'Webhook API',
        icon: Webhook,
        endpoints: [
        'POST /v1/webhooks/verify',
        'GET /v1/webhooks/events',
        'POST /v1/webhooks/test',
        ],
    },
    ];

    const integrationDocs = [
    {
        titleEn: 'Authentication Guide',
        titleKo: '인증 가이드',
        descEn:
        'Understand API key usage, signed request flows, timestamp validation, and secure production practices.',
        descKo:
        'API Key 사용 방식, 서명 요청 흐름, 타임스탬프 검증, 운영 환경 보안 원칙을 정리한 문서입니다.',
        icon: ShieldCheck,
        href: '/developers/authentication',
    },
    {
        titleEn: 'Webhook Signature Verification',
        titleKo: '웹훅 서명 검증',
        descEn:
        'Learn how to verify KORION webhook signatures and safely process external event callbacks.',
        descKo:
        'KORION 웹훅 서명을 검증하고 외부 이벤트 콜백을 안전하게 처리하는 방법을 설명합니다.',
        icon: Webhook,
        href: '/developers/webhooks',
    },
    {
        titleEn: 'Error Code Reference',
        titleKo: '오류 코드 레퍼런스',
        descEn:
        'Review standardized error codes, status mappings, and integration troubleshooting guidance.',
        descKo:
        '표준화된 오류 코드, 상태 매핑, 연동 중 발생할 수 있는 문제 해결 기준을 제공합니다.',
        icon: FileCode2,
        href: '/developers/errors',
    },
    {
        titleEn: 'Sandbox Access Guide',
        titleKo: '샌드박스 발급 가이드',
        descEn:
        'Set up test access, issue credentials, simulate transactions, and validate callback behavior.',
        descKo:
        '테스트 환경 접근, 인증 정보 발급, 트랜잭션 시뮬레이션, 콜백 검증 방법을 안내합니다.',
        icon: Globe,
        href: '/developers/sandbox',
    },
    {
        titleEn: 'SDK & Example Code',
        titleKo: 'SDK 및 예제 코드',
        descEn:
        'Start faster with sample requests, helper utilities, and onboarding snippets for common flows.',
        descKo:
        '샘플 요청, 유틸리티, 주요 연동 흐름용 온보딩 예제를 통해 더 빠르게 시작할 수 있습니다.',
        icon: Code2,
        href: '/developers/examples',
    },
    {
        titleEn: 'Rate Limit Policy',
        titleKo: '호출 제한 정책',
        descEn:
        'Check throughput guidance, retry strategies, burst controls, and resilient client patterns.',
        descKo:
        '처리량 기준, 재시도 전략, 버스트 제어, 안정적인 클라이언트 설계 패턴을 확인할 수 있습니다.',
        icon: TimerReset,
        href: '/developers/rate-limits',
    },
    ];

    const quickStartSteps = [
    {
        step: '01',
        titleEn: 'Issue Credentials',
        titleKo: '인증 정보 발급',
        descEn: 'Create your partner credentials and obtain your API key for secure access.',
        descKo: '파트너용 인증 정보를 생성하고 안전한 연동을 위한 API Key를 발급합니다.',
    },
    {
        step: '02',
        titleEn: 'Check Wallet State',
        titleKo: '지갑 상태 조회',
        descEn:
        'Confirm wallet address, asset list, and available balance before transaction flows.',
        descKo:
        '거래 연동 전 지갑 주소, 보유 자산, 사용 가능 잔액 상태를 먼저 확인합니다.',
    },
    {
        step: '03',
        titleEn: 'Create Transaction',
        titleKo: '거래 요청 생성',
        descEn:
        'Submit payment, deposit, or withdrawal requests based on the service scenario.',
        descKo: '서비스 시나리오에 맞게 결제, 입금, 출금 요청을 생성합니다.',
    },
    {
        step: '04',
        titleEn: 'Handle Webhooks',
        titleKo: '웹훅 처리',
        descEn:
        'Receive asynchronous events and update your internal status with signature verification.',
        descKo: '비동기 이벤트를 수신하고 서명 검증을 거쳐 내부 상태를 갱신합니다.',
    },
    ];

    export function DevelopersApiPage() {
    const { language } = useLanguage();
    const { hash } = useLocation();
    const isKo = language === 'KR';

    const tocItems = useMemo(() => {
        return [
        { id: 'quick-start', label: isKo ? '빠른 시작' : 'Quick Start' },
        { id: 'base-structure', label: isKo ? '기본 구조' : 'Base Structure' },
        { id: 'authentication', label: isKo ? '인증 방식' : 'Authentication' },
        { id: 'rate-limits', label: isKo ? '호출 제한' : 'Rate Limits' },
        { id: 'response-format', label: isKo ? '응답 형식' : 'Response Format' },
        ...apiGroups.map((group) => ({
            id: group.titleEn.toLowerCase().replace(/\s+/g, '-'),
            label: isKo ? group.titleKo : group.titleEn,
        })),
        {
            id: 'integration-guides',
            label: isKo ? '연동 가이드' : 'Integration Guides',
        },
        ];
    }, [isKo]);

    const [activeSection, setActiveSection] = useState<string>('quick-start');

    useEffect(() => {
        const currentHash = hash.replace('#', '');
        if (currentHash) {
        setActiveSection(currentHash);
        }
    }, [hash]);

    const handleTocClick = (
        event: React.MouseEvent<HTMLAnchorElement>,
        id: string
    ) => {
        event.preventDefault();
        setActiveSection(id);

        const target = document.getElementById(id);
        if (target) {
        const y = target.getBoundingClientRect().top + window.scrollY - 120;
        window.scrollTo({
            top: y,
            behavior: 'smooth',
        });
        }

        window.history.replaceState(null, '', `#${id}`);
    };

    return (
        <div className="developers-api-page">
        <section className="developers-api-hero">
            <div className="developers-api-page__container">
            <div className="developers-api-hero__crumbs">
                <Link to="/developers">{isKo ? '개발자' : 'Developers'}</Link>
                <ChevronDown size={14} />
                <span>{isKo ? 'API 레퍼런스' : 'API Reference'}</span>
            </div>

            <div className="developers-api-hero__content">
                <div className="developers-api-hero__copy">
                <div className="developers-api-hero__eyebrow">
                    <Layers3 size={16} />
                    <span>{isKo ? 'KORION 개발자 문서' : 'KORION Developer Docs'}</span>
                </div>

                <h1>KORION API Reference</h1>

                <p>
                    {isKo
                    ? 'KORION API는 Wallet, Payment, Deposit, Withdrawal, Webhook 중심의 실서비스 연동 구조를 기준으로 설계됩니다. 본 문서는 빠른 도입, 보안 검증, 운영 안정성을 함께 고려한 개발자 레퍼런스입니다.'
                    : 'KORION APIs are organized around wallet, payment, deposit, withdrawal, and webhook flows designed for production-grade integration.'}
                </p>

                <div className="developers-api-hero__actions">
                    <a
                    href="#quick-start"
                    className="developers-api-hero__button developers-api-hero__button--primary"
                    onClick={(e) => handleTocClick(e, 'quick-start')}
                    >
                    {isKo ? '빠르게 시작하기' : 'Quick Start'}
                    </a>
                    <a
                    href="#integration-guides"
                    className="developers-api-hero__button developers-api-hero__button--ghost"
                    onClick={(e) => handleTocClick(e, 'integration-guides')}
                    >
                    {isKo ? '연동 가이드 보기' : 'View Integration Guides'}
                    </a>
                </div>
                </div>

                <div className="developers-api-hero__panel">
                <div className="developers-api-hero__panel-top">
                    <span />
                    <span />
                    <span />
                </div>
                <div className="developers-api-hero__panel-body">
                    <div className="developers-api-hero__metric">
                    <span>Base URL</span>
                    <strong>https://api.korion.io</strong>
                    </div>
                    <div className="developers-api-hero__metric">
                    <span>Version</span>
                    <strong>/v1</strong>
                    </div>
                    <div className="developers-api-hero__metric">
                    <span>Authentication</span>
                    <strong>API Key / Signed Request</strong>
                    </div>
                    <div className="developers-api-hero__metric">
                    <span>Network</span>
                    <strong>TRON / TRC20</strong>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        <section className="developers-api-body">
            <div className="developers-api-page__container developers-api-body__grid">
            <aside className="developers-api-sidebar">
                <div className="developers-api-sidebar__box">
                <span className="developers-api-sidebar__title">
                    {isKo ? '문서 탐색' : 'Explore Docs'}
                </span>

                {tocItems.map((item) => (
                    <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleTocClick(e, item.id)}
                    className={`developers-api-sidebar__link ${
                        activeSection === item.id ? 'is-active' : ''
                    }`}
                    >
                    {item.label}
                    </a>
                ))}
                </div>
            </aside>

            <main className="developers-api-main">
                <section className="developers-api-section" id="quick-start">
                <div className="developers-api-section__heading-block">
                    <h2>{isKo ? '빠른 시작' : 'Quick Start'}</h2>
                    <p>
                    {isKo
                        ? 'KORION 연동은 인증 정보 발급, 지갑 상태 확인, 거래 생성, 웹훅 처리 순서로 접근하면 가장 빠르고 안정적으로 구현할 수 있습니다.'
                        : 'The fastest way to integrate KORION is to issue credentials, check wallet state, create transactions, and process webhooks.'}
                    </p>
                </div>
                <div className="developers-api-divider" />

                <div className="developers-api-quickstart">
                    {quickStartSteps.map((item) => (
                    <div className="developers-api-quickstart__card" key={item.step}>
                        <span className="developers-api-quickstart__step">{item.step}</span>
                        <h3>{isKo ? item.titleKo : item.titleEn}</h3>
                        <p>{isKo ? item.descKo : item.descEn}</p>
                    </div>
                    ))}
                </div>
                </section>

                <section className="developers-api-section" id="base-structure">
                <div className="developers-api-section__heading-block">
                    <h2>{isKo ? '기본 구조' : 'Base Structure'}</h2>
                    <p>
                    {isKo
                        ? 'API 버전, 인증 구조, 네트워크 스펙, 공통 응답 체계는 전체 문서에서 일관되게 유지됩니다.'
                        : 'Versioning, authentication, network scope, and standardized responses are consistent across the API surface.'}
                    </p>
                </div>
                <div className="developers-api-divider" />

                <div className="developers-api-info-grid">
                    <div>
                    <span>Base URL</span>
                    <strong>https://api.korion.io</strong>
                    </div>
                    <div>
                    <span>{isKo ? '버전' : 'Versioning'}</span>
                    <strong>/v1</strong>
                    </div>
                    <div>
                    <span>{isKo ? '인증' : 'Authentication'}</span>
                    <strong>API Key / Signed Request</strong>
                    </div>
                    <div>
                    <span>{isKo ? '네트워크' : 'Network'}</span>
                    <strong>TRON / TRC20</strong>
                    </div>
                </div>
                </section>

                <section className="developers-api-section" id="authentication">
                <div className="developers-api-section__heading">
                    <div className="developers-api-section__icon">
                    <KeyRound size={18} />
                    </div>
                    <div>
                    <h2>{isKo ? '인증 방식' : 'Authentication'}</h2>
                    <p>
                        {isKo
                        ? '운영 환경에서는 API Key와 요청 서명을 함께 사용해 무결성과 호출 주체를 검증하는 구조를 권장합니다.'
                        : 'Production integrations should use both API keys and signed requests to validate request integrity and origin.'}
                    </p>
                    </div>
                </div>

                <div className="developers-api-divider" />

                <div className="developers-api-info-grid developers-api-info-grid--triple">
                    <div>
                    <span>{isKo ? '필수 헤더' : 'Required Header'}</span>
                    <strong>Authorization: Bearer YOUR_API_KEY</strong>
                    </div>
                    <div>
                    <span>{isKo ? '서명 헤더' : 'Signature Header'}</span>
                    <strong>X-KORION-SIGN</strong>
                    </div>
                    <div>
                    <span>{isKo ? '타임스탬프' : 'Timestamp Header'}</span>
                    <strong>X-KORION-TIMESTAMP</strong>
                    </div>
                </div>

                <div className="developers-api-code">
                    <div className="developers-api-code__top">
                    <span />
                    <span />
                    <span />
                    </div>
                    <pre>{`curl https://api.korion.io/v1/wallet/balance \\
    -H "Authorization: Bearer YOUR_API_KEY" \\
    -H "X-KORION-SIGN: GENERATED_SIGNATURE" \\
    -H "X-KORION-TIMESTAMP: 1711111111"`}</pre>
                </div>
                </section>

                <section className="developers-api-section" id="rate-limits">
                <div className="developers-api-section__heading">
                    <div className="developers-api-section__icon">
                    <TimerReset size={18} />
                    </div>
                    <div>
                    <h2>{isKo ? '호출 제한 정책' : 'Rate Limits'}</h2>
                    <p>
                        {isKo
                        ? '클라이언트는 버스트 제어, 재시도 간격, 백오프 전략을 고려하여 안정적으로 설계하는 것이 좋습니다.'
                        : 'Clients should be designed with burst control, retry intervals, and backoff strategies for resilient operation.'}
                    </p>
                    </div>
                </div>

                <div className="developers-api-divider" />

                <div className="developers-api-rate-grid">
                    <div className="developers-api-rate-card">
                    <span>{isKo ? '권장 실시간 처리량' : 'Recommended Throughput'}</span>
                    <strong>100 req / sec</strong>
                    </div>
                    <div className="developers-api-rate-card">
                    <span>{isKo ? '일일 운영 한도' : 'Daily Operating Quota'}</span>
                    <strong>10,000 req / day</strong>
                    </div>
                    <div className="developers-api-rate-card">
                    <span>{isKo ? '재시도 전략' : 'Retry Strategy'}</span>
                    <strong>Exponential Backoff</strong>
                    </div>
                </div>
                </section>

                <section className="developers-api-section" id="response-format">
                <div className="developers-api-section__heading-block">
                    <h2>{isKo ? '대표 응답 형식' : 'Representative Response Format'}</h2>
                    <p>
                    {isKo
                        ? 'KORION API 응답은 success, code, message, data 필드를 기준으로 일관된 처리 체계를 갖추도록 설계됩니다.'
                        : 'KORION responses are structured around success, code, message, and data for consistent application handling.'}
                    </p>
                </div>
                <div className="developers-api-divider" />

                <div className="developers-api-code">
                    <div className="developers-api-code__top">
                    <span />
                    <span />
                    <span />
                    </div>
                    <pre>{`{
    "success": true,
    "code": "OK_200",
    "message": "Request completed",
    "data": {
        "status": "confirmed",
        "asset": "KORI",
        "network": "TRON"
    }
    }`}</pre>
                </div>
                </section>

                {apiGroups.map((group) => {
                const Icon = group.icon;
                const sectionId = group.titleEn.toLowerCase().replace(/\s+/g, '-');

                return (
                    <section className="developers-api-section" id={sectionId} key={group.titleEn}>
                    <div className="developers-api-section__heading">
                        <div className="developers-api-section__icon">
                        <Icon size={18} />
                        </div>
                        <div>
                        <h2>{isKo ? group.titleKo : group.titleEn}</h2>
                        <p>
                            {isKo
                            ? `${group.titleKo} 문서는 실제 서비스 연동에 필요한 대표 엔드포인트를 중심으로 구성됩니다.`
                            : `${group.titleEn} documentation is structured around representative production-facing endpoints.`}
                        </p>
                        </div>
                    </div>

                    <div className="developers-api-divider" />

                    <div className="developers-api-endpoints">
                        {group.endpoints.map((endpoint) => (
                        <div className="developers-api-endpoint" key={endpoint}>
                            <code>{endpoint}</code>
                            <ChevronRight size={16} />
                        </div>
                        ))}
                    </div>
                    </section>
                );
                })}

                <section className="developers-api-section" id="integration-guides">
                <div className="developers-api-section__heading-block">
                    <h2>{isKo ? '연동 가이드' : 'Integration Guides'}</h2>
                    <p>
                    {isKo
                        ? '아래 문서는 인증, 보안 검증, 샌드박스 테스트, 오류 대응 등 실제 운영 연동에 필요한 핵심 가이드를 정리한 자료입니다.'
                        : 'The documents below cover the core guides needed for production integration, including authentication, security validation, sandbox testing, and error handling.'}
                    </p>
                </div>

                <div className="developers-api-divider" />

                <div className="developers-api-doc-grid">
                    {integrationDocs.map((doc) => {
                    const Icon = doc.icon;

                    return (
                        <Link to={doc.href} key={doc.titleEn} className="developers-api-doc-card">
                        <div className="developers-api-doc-card__icon">
                            <Icon size={18} />
                        </div>

                        <div className="developers-api-doc-card__body">
                            <h3>{isKo ? doc.titleKo : doc.titleEn}</h3>
                            <p>{isKo ? doc.descKo : doc.descEn}</p>
                        </div>

                        <div className="developers-api-doc-card__arrow">
                            <ChevronRight size={18} />
                        </div>
                        </Link>
                    );
                    })}
                </div>
                </section>
            </main>
            </div>
        </section>
        </div>
    );
    }