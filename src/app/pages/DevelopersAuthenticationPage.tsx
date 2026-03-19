import { Link } from 'react-router';
import { useState } from 'react';
import {
    ChevronDown,
    FileCode2,
    KeyRound,
    ShieldCheck,
    TimerReset,
    Workflow,
    } from 'lucide-react';
    import { useLanguage } from '../contexts/LanguageContext';
    import './DevelopersAuthenticationPage.css';

    const authSections = [
    {
        id: 'auth-overview',
        titleEn: 'Overview',
        titleKo: '개요',
    },
    {
        id: 'auth-method',
        titleEn: 'Authentication Method',
        titleKo: '인증 방식',
    },
    {
        id: 'auth-signature',
        titleEn: 'Signature Structure',
        titleKo: '서명 구조',
    },
    {
        id: 'auth-headers',
        titleEn: 'Required Headers',
        titleKo: '필수 헤더',
    },
    {
        id: 'auth-errors',
        titleEn: 'Auth Errors',
        titleKo: '인증 오류',
    },
    ];

    const errorRows = [
    {
        code: 'AUTH_001',
        en: 'Missing API key',
        ko: 'API 키가 없습니다',
    },
    {
        code: 'AUTH_002',
        en: 'Invalid API key',
        ko: '유효하지 않은 API 키입니다',
    },
    {
        code: 'AUTH_003',
        en: 'Signature verification failed',
        ko: '서명 검증에 실패했습니다',
    },
    {
        code: 'AUTH_004',
        en: 'Timestamp expired',
        ko: '타임스탬프가 만료되었습니다',
    },
    {
        code: 'AUTH_005',
        en: 'Nonce already used',
        ko: '이미 사용된 nonce입니다',
    },
    ];

    export function DevelopersAuthenticationPage() {
    const { language } = useLanguage();
    const isKo = language === 'KR';
    const [activeSection, setActiveSection] = useState('auth-overview');

    return (
        <div className="developers-auth-page">
        <section className="developers-auth-hero">
            <div className="developers-auth-page__container">
            <div className="developers-auth-hero__crumbs">
                <Link to="/developers">{isKo ? '개발자' : 'Developers'}</Link>
                <ChevronDown size={14} />
                <span>{isKo ? '인증' : 'Authentication'}</span>
            </div>

            <h1>Authentication Guide</h1>
            <p>
                {isKo
                ? 'KORION 공개 API는 API Key와 서명 기반 요청 구조를 중심으로 설계됩니다. 문서에는 인증 방식, 서명 규칙, 필수 헤더, 재전송 방지 구조, 대표 오류 코드가 함께 정리되는 것이 가장 자연스럽습니다.'
                : 'KORION public APIs are designed around API-key and signature-based requests. Authentication docs should define auth method, signature rules, required headers, replay prevention, and representative auth errors.'}
            </p>
            </div>
        </section>

        <section className="developers-auth-body">
            <div className="developers-auth-page__container developers-auth-body__grid">
            <aside className="developers-auth-sidebar">
                <div className="developers-auth-sidebar__box">
                <span className="developers-auth-sidebar__title">
                    {isKo ? '인증 문서' : 'Authentication Docs'}
                </span>

                <nav className="developers-auth-sidebar__nav" aria-label="Authentication navigation">
                    {authSections.map((section) => (
                    <a
                        key={section.id}
                        href={`#${section.id}`}
                        className={`developers-auth-sidebar__link${
                        activeSection === section.id ? ' is-active' : ''
                        }`}
                        onClick={() => setActiveSection(section.id)}
                    >
                        <span className="developers-auth-sidebar__dot" />
                        <span className="developers-auth-sidebar__text">
                        {isKo ? section.titleKo : section.titleEn}
                        </span>
                    </a>
                    ))}
                </nav>
                </div>
            </aside>

            <main className="developers-auth-main">
                <section className="developers-auth-section" id="auth-overview">
                <h2>{isKo ? '개요' : 'Overview'}</h2>
                <div className="developers-auth-divider" />
                <p>
                    {isKo
                    ? '인증 문서는 단순히 키를 넣는 방법을 설명하는 수준에서 끝나지 않아야 합니다. 외부 개발자는 어떤 헤더가 필요한지, 서명 문자열을 어떻게 만드는지, 요청 유효시간은 어떻게 관리하는지, 재전송 방지는 어떤 방식으로 적용되는지를 빠르게 이해할 수 있어야 합니다.'
                    : 'Authentication docs should explain more than where to place an API key. Developers need a clear model for required headers, signature generation, timestamp handling, and replay protection.'}
                </p>
                </section>

                <section className="developers-auth-section" id="auth-method">
                <div className="developers-auth-section__heading">
                    <div className="developers-auth-section__icon">
                    <KeyRound size={18} />
                    </div>
                    <div>
                    <h2>{isKo ? '인증 방식' : 'Authentication Method'}</h2>
                    <p>
                        {isKo
                        ? '기본 구조는 API Key + Secret + Signed Request 조합으로 정리하는 것이 좋습니다.'
                        : 'The recommended structure is API Key + Secret + Signed Request.'}
                    </p>
                    </div>
                </div>

                <div className="developers-auth-info-grid">
                    <div>
                    <span>{isKo ? 'API Key' : 'API Key'}</span>
                    <strong>{isKo ? '클라이언트 식별' : 'Client identification'}</strong>
                    </div>
                    <div>
                    <span>{isKo ? 'Secret' : 'Secret'}</span>
                    <strong>{isKo ? '서명 생성에 사용' : 'Used for signing'}</strong>
                    </div>
                    <div>
                    <span>{isKo ? 'Timestamp' : 'Timestamp'}</span>
                    <strong>{isKo ? '요청 유효시간 검증' : 'Request freshness check'}</strong>
                    </div>
                    <div>
                    <span>{isKo ? 'Nonce' : 'Nonce'}</span>
                    <strong>{isKo ? '재전송 공격 방지' : 'Replay protection'}</strong>
                    </div>
                </div>
                </section>

                <section className="developers-auth-section" id="auth-signature">
                <div className="developers-auth-section__heading">
                    <div className="developers-auth-section__icon">
                    <ShieldCheck size={18} />
                    </div>
                    <div>
                    <h2>{isKo ? '서명 구조' : 'Signature Structure'}</h2>
                    <p>
                        {isKo
                        ? '서명은 보통 HTTP Method, Path, Timestamp, Nonce, Body Hash를 조합한 문자열을 기준으로 생성하는 구조가 가장 일반적입니다.'
                        : 'A common structure is to sign a canonical string composed of HTTP Method, Path, Timestamp, Nonce, and Body Hash.'}
                    </p>
                    </div>
                </div>

                <div className="developers-auth-code">
                    <div className="developers-auth-code__top">
                    <span />
                    <span />
                    <span />
                    </div>
                    <pre>{`METHOD + "\\n" +
    PATH + "\\n" +
    TIMESTAMP + "\\n" +
    NONCE + "\\n" +
    BODY_HASH

    HMAC_SHA256(secret, canonicalString)`}</pre>
                </div>
                </section>

                <section className="developers-auth-section" id="auth-headers">
                <div className="developers-auth-section__heading">
                    <div className="developers-auth-section__icon">
                    <FileCode2 size={18} />
                    </div>
                    <div>
                    <h2>{isKo ? '필수 헤더' : 'Required Headers'}</h2>
                    <p>
                        {isKo
                        ? '요청 헤더를 명확히 문서화하면 연동 오류를 크게 줄일 수 있습니다.'
                        : 'Clearly documenting required headers reduces integration friction.'}
                    </p>
                    </div>
                </div>

                <div className="developers-auth-headers">
                    <div>
                    <code>X-KORION-API-KEY</code>
                    <span>{isKo ? '발급된 API 키' : 'Issued API key'}</span>
                    </div>
                    <div>
                    <code>X-KORION-TIMESTAMP</code>
                    <span>{isKo ? '요청 시각' : 'Request timestamp'}</span>
                    </div>
                    <div>
                    <code>X-KORION-NONCE</code>
                    <span>{isKo ? '고유 요청 식별값' : 'Unique request nonce'}</span>
                    </div>
                    <div>
                    <code>X-KORION-SIGNATURE</code>
                    <span>{isKo ? '서명값' : 'Request signature'}</span>
                    </div>
                </div>
                </section>

                <section className="developers-auth-section">
                <div className="developers-auth-section__heading">
                    <div className="developers-auth-section__icon">
                    <TimerReset size={18} />
                    </div>
                    <div>
                    <h2>{isKo ? '재전송 방지' : 'Replay Protection'}</h2>
                    <p>
                        {isKo
                        ? '실서비스 문서에서는 timestamp 허용 오차, nonce 중복 허용 여부, 만료 규칙을 함께 안내하는 것이 좋습니다.'
                        : 'Production docs should define timestamp tolerance, nonce reuse policy, and expiration rules.'}
                    </p>
                    </div>
                </div>

                <ul className="developers-auth-list">
                    <li>
                    {isKo
                        ? '요청 타임스탬프는 예: 5분 이내만 허용'
                        : 'Request timestamp can be limited to a short validity window, for example 5 minutes'}
                    </li>
                    <li>
                    {isKo
                        ? '동일 nonce 재사용 시 요청 거절'
                        : 'Duplicate nonce values should be rejected'}
                    </li>
                    <li>
                    {isKo
                        ? '민감 요청은 더 엄격한 유효시간 적용 가능'
                        : 'Sensitive operations can use stricter expiry policies'}
                    </li>
                </ul>
                </section>

                <section className="developers-auth-section" id="auth-errors">
                <div className="developers-auth-section__heading">
                    <div className="developers-auth-section__icon">
                    <Workflow size={18} />
                    </div>
                    <div>
                    <h2>{isKo ? '인증 오류' : 'Auth Errors'}</h2>
                    <p>
                        {isKo
                        ? '대표 인증 오류를 먼저 공개하면 개발자가 디버깅 시간을 크게 줄일 수 있습니다.'
                        : 'Publishing representative auth errors makes debugging much easier for developers.'}
                    </p>
                    </div>
                </div>

                <div className="developers-auth-errors">
                    {errorRows.map((row) => (
                    <div className="developers-auth-error" key={row.code}>
                        <code>{row.code}</code>
                        <span>{isKo ? row.ko : row.en}</span>
                    </div>
                    ))}
                </div>
                </section>

                <section className="developers-auth-section">
                <h2>{isKo ? '대표 요청 예시' : 'Representative Request Example'}</h2>
                <div className="developers-auth-divider" />
                <div className="developers-auth-code">
                    <div className="developers-auth-code__top">
                    <span />
                    <span />
                    <span />
                    </div>
                    <pre>{`curl -X GET 'https://api.korion.io/v1/wallet/balance' \\
    -H 'X-KORION-API-KEY: YOUR_API_KEY' \\
    -H 'X-KORION-TIMESTAMP: 1712345678901' \\
    -H 'X-KORION-NONCE: 9b0f1d2a-11ab-46a4' \\
    -H 'X-KORION-SIGNATURE: GENERATED_SIGNATURE'`}</pre>
                </div>
                </section>
            </main>
            </div>
        </section>
        </div>
    );
    }