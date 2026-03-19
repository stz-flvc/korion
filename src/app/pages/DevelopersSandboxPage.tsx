import { Link } from 'react-router';
import {
    BadgeCheck,
    ChevronDown,
    FlaskConical,
    KeyRound,
    PlayCircle,
    ShieldCheck,
    TestTubeDiagonal,
    Workflow,
    } from 'lucide-react';
    import { useLanguage } from '../contexts/LanguageContext';
    import './DevelopersSandboxPage.css';

    const sandboxFlows = [
    {
        icon: KeyRound,
        titleEn: 'Sandbox Credentials',
        titleKo: '샌드박스 인증정보',
        descEn: 'Issue test API keys and secrets for integration development.',
        descKo: '연동 개발을 위한 테스트용 API 키와 시크릿을 발급합니다.',
    },
    {
        icon: PlayCircle,
        titleEn: 'Test Payment Flow',
        titleKo: '테스트 결제 흐름',
        descEn: 'Simulate order creation, payment success, and failure states.',
        descKo: '주문 생성, 결제 성공, 실패 상태를 시뮬레이션합니다.',
    },
    {
        icon: Workflow,
        titleEn: 'Webhook Event Simulation',
        titleKo: '웹훅 이벤트 시뮬레이션',
        descEn: 'Trigger representative webhook events for validation and QA.',
        descKo: '검증과 QA를 위한 대표 웹훅 이벤트를 발생시킵니다.',
    },
    {
        icon: BadgeCheck,
        titleEn: 'Partner Staging',
        titleKo: '파트너 스테이징',
        descEn: 'Prepare merchants, exchanges, and wallet partners before production.',
        descKo: '가맹점, 거래소, 지갑 파트너의 운영 전 준비를 지원합니다.',
    },
    ];

    export function DevelopersSandboxPage() {
    const { language } = useLanguage();
    const isKo = language === 'KR';

    return (
        <div className="developers-sandbox-page">

        <section className="developers-sandbox-hero">
            <div className="developers-sandbox-page__container">
            <div className="developers-sandbox-hero__crumbs">
                <Link to="/developers">{isKo ? '개발자' : 'Developers'}</Link>
                <ChevronDown size={14} />
                <span>{isKo ? '샌드박스' : 'Sandbox'}</span>
            </div>

            <h1>{isKo ? 'Sandbox Guide' : 'Sandbox Guide'}</h1>
            <p>
                {isKo
                ? '샌드박스는 실서비스 전에 결제, 지갑, 웹훅, 파트너 연동을 안전하게 검증하기 위한 테스트 환경입니다. 테스트 키, 예제 흐름, 샘플 payload, 이벤트 시뮬레이션 구조를 함께 안내하는 것이 좋습니다.'
                : 'Sandbox is the safe testing surface for validating wallet, payment, webhook, and partner flows before production deployment.'}
            </p>
            </div>
        </section>

        <section className="developers-sandbox-body">
            <div className="developers-sandbox-page__container">
            <div className="developers-sandbox-intro">
                <div className="developers-sandbox-intro__card">
                <FlaskConical size={18} />
                <strong>{isKo ? '운영 전 검증 환경' : 'Pre-production validation environment'}</strong>
                </div>
                <div className="developers-sandbox-intro__card">
                <ShieldCheck size={18} />
                <strong>{isKo ? '실서비스와 분리된 테스트 흐름' : 'Isolated test flow from production'}</strong>
                </div>
            </div>

            <div className="developers-sandbox-flows">
                {sandboxFlows.map((flow) => {
                const Icon = flow.icon;
                return (
                    <article className="developers-sandbox-flow" key={flow.titleEn}>
                    <div className="developers-sandbox-flow__icon">
                        <Icon size={18} />
                    </div>
                    <h2>{isKo ? flow.titleKo : flow.titleEn}</h2>
                    <p>{isKo ? flow.descKo : flow.descEn}</p>
                    </article>
                );
                })}
            </div>

            <section className="developers-sandbox-section">
                <h2>{isKo ? '대표 테스트 순서' : 'Representative Test Flow'}</h2>
                <div className="developers-sandbox-divider" />
                <div className="developers-sandbox-steps">
                <div><TestTubeDiagonal size={16} /><span>{isKo ? '샌드박스 키 발급' : 'Issue sandbox credentials'}</span></div>
                <div><TestTubeDiagonal size={16} /><span>{isKo ? '테스트 결제 요청 생성' : 'Create a test payment request'}</span></div>
                <div><TestTubeDiagonal size={16} /><span>{isKo ? '대표 상태 전환 확인' : 'Confirm representative state transitions'}</span></div>
                <div><TestTubeDiagonal size={16} /><span>{isKo ? '웹훅 이벤트 수신 검증' : 'Validate webhook event reception'}</span></div>
                <div><TestTubeDiagonal size={16} /><span>{isKo ? '파트너 스테이징 검수' : 'Review partner staging readiness'}</span></div>
                </div>
            </section>

            <section className="developers-sandbox-section">
                <h2>{isKo ? '샘플 환경 값' : 'Sample Environment Values'}</h2>
                <div className="developers-sandbox-divider" />
                <div className="developers-sandbox-code">
                <div className="developers-sandbox-code__top">
                    <span />
                    <span />
                    <span />
                </div>
                <pre>{`BASE_URL=https://sandbox-api.korion.io
    API_KEY=SANDBOX_KEY
    API_SECRET=SANDBOX_SECRET
    WEBHOOK_SECRET=SANDBOX_WEBHOOK_SECRET`}</pre>
                </div>
            </section>
            </div>
        </section>
        </div>
    );
    }