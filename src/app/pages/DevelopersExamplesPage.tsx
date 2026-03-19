import { Link } from 'react-router';
import { ChevronDown, Code2, TerminalSquare, FileJson2, Boxes } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './DevelopersExamplesPage.css';

    export function DevelopersExamplesPage() {
    const { language } = useLanguage();
    const isKo = language === 'KR';

    return (
        <div className="developers-doc-page">
        <section className="developers-doc-hero">
            <div className="developers-doc-page__container">
            <div className="developers-doc-hero__crumbs">
                <Link to="/developers">{isKo ? '개발자' : 'Developers'}</Link>
                <ChevronDown size={14} />
                <Link to="/developers/api">{isKo ? 'API 레퍼런스' : 'API Reference'}</Link>
                <ChevronDown size={14} />
                <span>{isKo ? 'SDK 및 예제 코드' : 'SDK & Example Code'}</span>
            </div>

            <div className="developers-doc-hero__eyebrow">
                <Code2 size={16} />
                <span>{isKo ? '연동 시작 문서' : 'Integration Starter Doc'}</span>
            </div>

            <h1>{isKo ? 'SDK & Example Code' : 'SDK & Example Code'}</h1>
            <p>
                {isKo
                ? '개발자는 문서만 읽는 것보다 바로 복사해서 테스트할 수 있는 예제 코드에서 훨씬 빠르게 진입합니다. 지갑 조회, 결제 요청, 웹훅 처리 같은 대표 흐름은 최소한 예제 수준으로 제공하는 것이 좋습니다.'
                : 'Developers adopt faster when they can copy runnable examples. Wallet lookup, payment creation, and webhook handling should be documented with real snippets.'}
            </p>
            </div>
        </section>

        <section className="developers-doc-body">
            <div className="developers-doc-page__container developers-doc-layout">
            <aside className="developers-doc-sidebar">
                <div className="developers-doc-sidebar__box">
                <span className="developers-doc-sidebar__title">
                    {isKo ? '문서 탐색' : 'On this page'}
                </span>
                <a href="#languages">{isKo ? '지원 예시 언어' : 'Example Languages'}</a>
                <a href="#curl">{isKo ? 'cURL 예시' : 'cURL Example'}</a>
                <a href="#node">{isKo ? 'Node.js 예시' : 'Node.js Example'}</a>
                <a href="#json">{isKo ? '응답 예시' : 'Response Example'}</a>
                </div>
            </aside>

            <main className="developers-doc-main">
                <section className="developers-doc-section" id="languages">
                <div className="developers-doc-section__heading">
                    <div className="developers-doc-section__icon">
                    <Boxes size={18} />
                    </div>
                    <div>
                    <h2>{isKo ? '지원 예시 언어' : 'Example Languages'}</h2>
                    <p>
                        {isKo
                        ? '실무에서는 최소한 cURL, Node.js, Python 예제를 제공하면 초기 도입성이 크게 좋아집니다.'
                        : 'At minimum, cURL, Node.js, and Python samples significantly improve onboarding.'}
                    </p>
                    </div>
                </div>

                <div className="developers-doc-list">
                    <div>cURL</div>
                    <div>Node.js</div>
                    <div>Python</div>
                    <div>{isKo ? '향후 SDK 패키지 확장 가능' : 'SDK packages can be expanded later'}</div>
                </div>
                </section>

                <section className="developers-doc-section" id="curl">
                <div className="developers-doc-section__heading">
                    <div className="developers-doc-section__icon">
                    <TerminalSquare size={18} />
                    </div>
                    <div>
                    <h2>{isKo ? 'cURL 예시' : 'cURL Example'}</h2>
                    <p>
                        {isKo
                        ? '가장 먼저 복사해서 테스트하기 좋은 형태입니다.'
                        : 'This is the fastest format developers can copy and test immediately.'}
                    </p>
                    </div>
                </div>

                <div className="developers-doc-code">
                    <div className="developers-doc-code__top">
                    <span />
                    <span />
                    <span />
                    </div>
                    <pre>{`curl https://api.korion.io/v1/payments \\
    -X POST \\
    -H "Authorization: Bearer YOUR_API_KEY" \\
    -H "Content-Type: application/json" \\
    -d '{
        "asset": "KORI",
        "amount": "100.00",
        "order_id": "order_001"
    }'`}</pre>
                </div>
                </section>

                <section className="developers-doc-section" id="node">
                <div className="developers-doc-section__heading">
                    <div className="developers-doc-section__icon">
                    <Code2 size={18} />
                    </div>
                    <div>
                    <h2>{isKo ? 'Node.js 예시' : 'Node.js Example'}</h2>
                    <p>
                        {isKo
                        ? '프론트엔드/백엔드 JavaScript 개발자가 바로 참고할 수 있는 최소 예시입니다.'
                        : 'A minimal example for JavaScript-based backend integrations.'}
                    </p>
                    </div>
                </div>

                <div className="developers-doc-code">
                    <div className="developers-doc-code__top">
                    <span />
                    <span />
                    <span />
                    </div>
                    <pre>{`const response = await fetch('https://api.korion.io/v1/wallet/balance', {
    method: 'GET',
    headers: {
        Authorization: 'Bearer YOUR_API_KEY',
    },
    });

    const data = await response.json();
    console.log(data);`}</pre>
                </div>
                </section>

                <section className="developers-doc-section" id="json">
                <div className="developers-doc-section__heading">
                    <div className="developers-doc-section__icon">
                    <FileJson2 size={18} />
                    </div>
                    <div>
                    <h2>{isKo ? '응답 예시' : 'Response Example'}</h2>
                    <p>
                        {isKo
                        ? '대표 응답 구조를 같이 보여주면 연동 속도가 빨라집니다.'
                        : 'Showing response structure alongside request snippets helps teams integrate faster.'}
                    </p>
                    </div>
                </div>

                <div className="developers-doc-code">
                    <div className="developers-doc-code__top">
                    <span />
                    <span />
                    <span />
                    </div>
                    <pre>{`{
    "success": true,
    "code": "OK_200",
    "message": "Request completed",
    "data": {
        "balance": "12500.00",
        "asset": "KORI",
        "network": "TRON"
    }
    }`}</pre>
                </div>
                </section>
            </main>
            </div>
        </section>
        </div>
    );
    }