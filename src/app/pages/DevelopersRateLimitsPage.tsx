import { Link } from 'react-router';
import { ChevronDown, TimerReset, Gauge, RefreshCcw, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './DevelopersRateLimitsPage.css';

export function DevelopersRateLimitsPage() {
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
                <span>{isKo ? '호출 제한 정책' : 'Rate Limit Policy'}</span>
            </div>

            <div className="developers-doc-hero__eyebrow">
                <TimerReset size={16} />
                <span>{isKo ? '운영 안정성 문서' : 'Operational Stability Doc'}</span>
            </div>

            <h1>{isKo ? 'Rate Limit Policy' : 'Rate Limit Policy'}</h1>
            <p>
                {isKo
                ? '호출 제한 정책은 단순 차단이 아니라 전체 시스템 안정성과 파트너 품질을 유지하기 위한 운영 기준입니다. 클라이언트는 버스트 제어, 재시도 간격, 백오프 설계를 반영해 안정적으로 구현하는 것이 좋습니다.'
                : 'Rate limiting is an operational safeguard for system stability. Clients should implement burst control, retry intervals, and backoff strategies.'}
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
                <a href="#limits">{isKo ? '기본 한도' : 'Base Limits'}</a>
                <a href="#retry">{isKo ? '재시도 전략' : 'Retry Strategy'}</a>
                <a href="#best-practice">{isKo ? '권장 구현' : 'Best Practice'}</a>
                </div>
            </aside>

            <main className="developers-doc-main">
                <section className="developers-doc-section" id="limits">
                <div className="developers-doc-section__heading">
                    <div className="developers-doc-section__icon">
                    <Gauge size={18} />
                    </div>
                    <div>
                    <h2>{isKo ? '기본 한도 예시' : 'Representative Limits'}</h2>
                    <p>
                        {isKo
                        ? '실제 운영 정책은 파트너 등급에 따라 달라질 수 있지만, 문서상 기본 가이드를 제공하면 충분합니다.'
                        : 'Actual limits may vary by partner tier, but documentation should provide a clear baseline.'}
                    </p>
                    </div>
                </div>

                <div className="developers-doc-grid developers-doc-grid--triple">
                    <div>
                    <span>{isKo ? '초당 요청 수' : 'Requests per second'}</span>
                    <strong>100 req / sec</strong>
                    </div>
                    <div>
                    <span>{isKo ? '일일 한도' : 'Daily quota'}</span>
                    <strong>10,000 req / day</strong>
                    </div>
                    <div>
                    <span>{isKo ? '초과 시 처리' : 'On limit exceed'}</span>
                    <strong>429 Too Many Requests</strong>
                    </div>
                </div>
                </section>

                <section className="developers-doc-section" id="retry">
                <div className="developers-doc-section__heading">
                    <div className="developers-doc-section__icon">
                    <RefreshCcw size={18} />
                    </div>
                    <div>
                    <h2>{isKo ? '재시도 전략' : 'Retry Strategy'}</h2>
                    <p>
                        {isKo
                        ? '즉시 무한 재시도는 오히려 차단을 심화시킬 수 있으므로 지수 백오프 기반 전략이 적합합니다.'
                        : 'Immediate infinite retries can worsen throttling. Exponential backoff is recommended.'}
                    </p>
                    </div>
                </div>

                <div className="developers-doc-note">
                    {isKo
                    ? '권장: 1초 → 2초 → 4초 → 8초 순으로 재시도 간격 증가'
                    : 'Recommended: increase retry intervals as 1s → 2s → 4s → 8s'}
                </div>
                </section>

                <section className="developers-doc-section" id="best-practice">
                <div className="developers-doc-section__heading">
                    <div className="developers-doc-section__icon">
                    <ShieldCheck size={18} />
                    </div>
                    <div>
                    <h2>{isKo ? '권장 구현 방식' : 'Best Practice'}</h2>
                    <p>
                        {isKo
                        ? '클라이언트는 제한에 걸리지 않도록 캐싱, 폴링 간격 조절, 이벤트 기반 처리 전환을 함께 고려하는 것이 좋습니다.'
                        : 'Clients should combine caching, polling interval control, and event-driven processing where possible.'}
                    </p>
                    </div>
                </div>

                <div className="developers-doc-list">
                    <div>{isKo ? '읽기 요청은 캐싱 활용' : 'Cache read-heavy requests'}</div>
                    <div>{isKo ? '상태 확인 폴링 주기 최소화' : 'Reduce status polling frequency'}</div>
                    <div>{isKo ? '가능한 경우 웹훅 기반 처리 전환' : 'Prefer webhook-driven updates where possible'}</div>
                    <div>{isKo ? '429 응답 시 자동 백오프' : 'Apply automatic backoff on 429 responses'}</div>
                </div>
                </section>
            </main>
            </div>
        </section>
        </div>
    );
    }