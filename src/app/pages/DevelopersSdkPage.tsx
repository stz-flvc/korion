import { Link, useLocation } from 'react-router';
import { useEffect, useMemo, useState } from 'react';
import {
    Box,
    ChevronDown,
    Code2,
    Cpu,
    FileCode2,
    Layers3,
    Package,
    ShieldCheck,
    TerminalSquare,
    Wrench,
    } from 'lucide-react';
    import { useLanguage } from '../contexts/LanguageContext';
    import './DevelopersSdkPage.css';

    const sdkModules = [
    {
        icon: Code2,
        titleEn: 'JavaScript SDK',
        titleKo: 'JavaScript SDK',
        descEn:
        'Frontend-friendly module structure for wallet queries, payment creation, and lightweight integration flows.',
        descKo:
        '지갑 조회, 결제 생성, 경량 연동 흐름에 적합한 프론트엔드 친화형 모듈 구조입니다.',
        packages: ['@korion/sdk', '@korion/sdk/payments', '@korion/sdk/wallet'],
    },
    {
        icon: Cpu,
        titleEn: 'TypeScript SDK',
        titleKo: 'TypeScript SDK',
        descEn:
        'Typed models and response contracts for more stable service integration across production environments.',
        descKo:
        '실서비스 환경에서 더 안정적인 연동을 가능하게 하는 타입 기반 모델과 응답 계약입니다.',
        packages: ['types', 'request models', 'response models'],
    },
    {
        icon: TerminalSquare,
        titleEn: 'Backend Examples',
        titleKo: '백엔드 예제',
        descEn:
        'Reference server implementations for signed requests, callback verification, and transaction polling.',
        descKo:
        '서명 요청, 콜백 검증, 트랜잭션 폴링을 위한 서버 레퍼런스 구현 예제입니다.',
        packages: ['Node.js example', 'Express webhook example', 'Polling worker example'],
    },
    {
        icon: ShieldCheck,
        titleEn: 'Sandbox Toolkit',
        titleKo: '샌드박스 툴킷',
        descEn:
        'Test credentials, staged flows, and sample payloads for safer onboarding before production deployment.',
        descKo:
        '실서비스 배포 전 안전한 온보딩을 위한 테스트 인증정보, 단계별 흐름, 샘플 페이로드입니다.',
        packages: ['sandbox keys', 'sample payloads', 'test flow presets'],
    },
    ];

    const exampleTabs = [
    {
        titleEn: 'Client Initialization',
        titleKo: '클라이언트 초기화',
        code: `import { createKorionClient } from '@korion/sdk';

    const client = createKorionClient({
    apiKey: 'YOUR_API_KEY',
    secret: 'YOUR_SECRET',
    env: 'sandbox',
    });`,
    },
    {
        titleEn: 'Wallet Balance Query',
        titleKo: '지갑 잔액 조회',
        code: `const balance = await client.wallet.getBalance();

    console.log(balance.data);`,
    },
    {
        titleEn: 'Payment Request',
        titleKo: '결제 요청 생성',
        code: `const payment = await client.payments.create({
    orderId: 'ORDER-1001',
    asset: 'KORI',
    amount: '2500.000000',
    redirectUrl: 'https://service.example.com/result',
    });`,
    },
    {
        titleEn: 'Webhook Verification',
        titleKo: '웹훅 검증',
        code: `const verified = await client.webhooks.verify({
    signature: request.headers['x-korion-signature'],
    payload: request.body,
    });`,
    },
    ];

    export function DevelopersSdkPage() {
    const { language } = useLanguage();
    const { hash } = useLocation();
    const isKo = language === 'KR';

    const tocItems = useMemo(
        () => [
        { id: 'sdk-overview', label: isKo ? '개요' : 'Overview' },
        { id: 'sdk-modules', label: isKo ? 'SDK 모듈' : 'SDK Modules' },
        { id: 'sdk-examples', label: isKo ? '예제 코드' : 'Examples' },
        { id: 'sdk-roadmap', label: isKo ? '공개 로드맵' : 'Release Roadmap' },
        ],
        [isKo]
    );

    const [activeSection, setActiveSection] = useState<string>('sdk-overview');

    useEffect(() => {
        const currentHash = hash.replace('#', '');
        if (currentHash) {
        setActiveSection(currentHash);
        } else {
        setActiveSection('sdk-overview');
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
        const y = target.getBoundingClientRect().top + window.scrollY - 110;
        window.scrollTo({
            top: y,
            behavior: 'smooth',
        });
        }

        window.history.replaceState(null, '', `#${id}`);
    };

    return (
        <div className="developers-sdk-page">
        <section className="developers-sdk-hero">
            <div className="developers-sdk-page__container">
            <div className="developers-sdk-hero__crumbs">
                <Link to="/developers">{isKo ? '개발자' : 'Developers'}</Link>
                <ChevronDown size={14} />
                <span>SDK</span>
            </div>

            <h1>{isKo ? 'KORION SDK & Tools' : 'KORION SDK & Tools'}</h1>
            <p>
                {isKo
                ? 'KORION SDK는 Wallet, Payment, Webhook, Sandbox 흐름을 빠르게 연동할 수 있도록 구성됩니다. JavaScript와 TypeScript를 중심으로 공개하고, 이후 서버 예제와 테스트 툴킷으로 확장하는 구조가 가장 이상적입니다.'
                : 'KORION SDK is structured to accelerate wallet, payment, webhook, and sandbox integration flows with JavaScript, TypeScript, and backend-oriented tooling.'}
            </p>
            </div>
        </section>

        <section className="developers-sdk-body">
            <div className="developers-sdk-page__container developers-sdk-body__grid">
            <aside className="developers-sdk-sidebar">
                <div className="developers-sdk-sidebar__box">
                <span className="developers-sdk-sidebar__title">
                    {isKo ? 'SDK 문서' : 'SDK Docs'}
                </span>

                {tocItems.map((item) => (
                    <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleTocClick(e, item.id)}
                    className={activeSection === item.id ? 'is-current' : ''}
                    >
                    {item.label}
                    </a>
                ))}
                </div>
            </aside>

            <main className="developers-sdk-main">
                <section className="developers-sdk-section" id="sdk-overview">
                <h2>{isKo ? '개요' : 'Overview'}</h2>
                <div className="developers-sdk-divider" />
                <p>
                    {isKo
                    ? 'KORION SDK 문서는 단순 설치 설명보다, 실제 연동 시간을 줄여주는 구조가 중요합니다. 따라서 클라이언트 초기화, 인증, 잔액 조회, 결제 요청, 웹훅 검증, 샌드박스 테스트 순으로 문서화하는 것이 가장 자연스럽습니다.'
                    : 'KORION SDK documentation should prioritize implementation speed through a practical sequence of initialization, authentication, wallet access, payment flow, webhook verification, and sandbox testing.'}
                </p>
                </section>

                <section className="developers-sdk-section" id="sdk-modules">
                <h2>{isKo ? 'SDK 모듈' : 'SDK Modules'}</h2>
                <div className="developers-sdk-divider" />

                <div className="developers-sdk-modules">
                    {sdkModules.map((module) => {
                    const Icon = module.icon;
                    return (
                        <article className="developers-sdk-module" key={module.titleEn}>
                        <div className="developers-sdk-module__icon">
                            <Icon size={18} />
                        </div>
                        <h3>{isKo ? module.titleKo : module.titleEn}</h3>
                        <p>{isKo ? module.descKo : module.descEn}</p>
                        <div className="developers-sdk-module__packages">
                            {module.packages.map((pkg) => (
                            <code key={pkg}>{pkg}</code>
                            ))}
                        </div>
                        </article>
                    );
                    })}
                </div>
                </section>

                <section className="developers-sdk-section" id="sdk-examples">
                <h2>{isKo ? '예제 코드' : 'Example Snippets'}</h2>
                <div className="developers-sdk-divider" />

                <div className="developers-sdk-examples">
                    {exampleTabs.map((item) => (
                    <div className="developers-sdk-example" key={item.titleEn}>
                        <div className="developers-sdk-example__head">
                        <div className="developers-sdk-example__head-left">
                            <FileCode2 size={16} />
                            <span>{isKo ? item.titleKo : item.titleEn}</span>
                        </div>
                        </div>
                        <pre>{item.code}</pre>
                    </div>
                    ))}
                </div>
                </section>

                <section className="developers-sdk-section" id="sdk-roadmap">
                <h2>{isKo ? '공개 로드맵' : 'Release Roadmap'}</h2>
                <div className="developers-sdk-divider" />

                <div className="developers-sdk-roadmap">
                    <div className="developers-sdk-roadmap__item">
                    <div className="developers-sdk-roadmap__icon">
                        <Package size={16} />
                    </div>
                    <div>
                        <strong>{isKo ? '1단계' : 'Phase 1'}</strong>
                        <p>
                        {isKo
                            ? 'JavaScript / TypeScript SDK 개요, 기본 클라이언트 초기화, 대표 예제 공개'
                            : 'JavaScript / TypeScript SDK overview, base initialization, and representative examples'}
                        </p>
                    </div>
                    </div>

                    <div className="developers-sdk-roadmap__item">
                    <div className="developers-sdk-roadmap__icon">
                        <Wrench size={16} />
                    </div>
                    <div>
                        <strong>{isKo ? '2단계' : 'Phase 2'}</strong>
                        <p>
                        {isKo
                            ? 'Webhook 검증, Payment 흐름, 백엔드 예제, 샌드박스 테스트 가이드 공개'
                            : 'Webhook verification, payment flow, backend examples, and sandbox testing guides'}
                        </p>
                    </div>
                    </div>

                    <div className="developers-sdk-roadmap__item">
                    <div className="developers-sdk-roadmap__icon">
                        <Layers3 size={16} />
                    </div>
                    <div>
                        <strong>{isKo ? '3단계' : 'Phase 3'}</strong>
                        <p>
                        {isKo
                            ? '파트너 전용 모듈, 거래소/지갑 연동킷, 고급 운영 예제 공개'
                            : 'Partner modules, exchange/wallet integration kits, and advanced operational references'}
                        </p>
                    </div>
                    </div>

                    <div className="developers-sdk-roadmap__item">
                    <div className="developers-sdk-roadmap__icon">
                        <Box size={16} />
                    </div>
                    <div>
                        <strong>{isKo ? '4단계' : 'Phase 4'}</strong>
                        <p>
                        {isKo
                            ? '문서 자동화, 버전별 릴리즈 기록, 샘플 프로젝트 패키지 제공'
                            : 'Documentation automation, versioned release notes, and sample project packages'}
                        </p>
                    </div>
                    </div>
                </div>
                </section>
            </main>
            </div>
        </section>
        </div>
    );
    }