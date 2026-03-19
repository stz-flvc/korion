import { Link } from 'react-router';
import {
    BellRing,
    ChevronDown,
    FileJson,
    ShieldCheck,
    Webhook,
    Workflow,
    Wrench,
    } from 'lucide-react';
    import { useLanguage } from '../contexts/LanguageContext';
    import './DevelopersWebhooksPage.css';

    const eventRows = [
    {
        name: 'payment.completed',
        en: 'Triggered when a payment reaches final success state',
        ko: '결제가 최종 성공 상태에 도달했을 때 발생합니다',
    },
    {
        name: 'payment.failed',
        en: 'Triggered when a payment ends in failure state',
        ko: '결제가 실패 상태로 종료되었을 때 발생합니다',
    },
    {
        name: 'deposit.confirmed',
        en: 'Triggered after a deposit is confirmed',
        ko: '입금이 확인된 이후 발생합니다',
    },
    {
        name: 'withdrawal.completed',
        en: 'Triggered when a withdrawal is completed',
        ko: '출금이 완료되었을 때 발생합니다',
    },
    {
        name: 'settlement.updated',
        en: 'Triggered when settlement state changes',
        ko: '정산 상태가 변경되었을 때 발생합니다',
    },
    ];

    export function DevelopersWebhooksPage() {
    const { language } = useLanguage();
    const isKo = language === 'KR';

    return (
        <div className="developers-webhooks-page">
        <section className="developers-webhooks-hero">
            <div className="developers-webhooks-page__container">
            <div className="developers-webhooks-hero__crumbs">
                <Link to="/developers">{isKo ? '개발자' : 'Developers'}</Link>
                <ChevronDown size={14} />
                <span>{isKo ? '웹훅' : 'Webhooks'}</span>
            </div>

            <h1>{isKo ? 'Webhook Guide' : 'Webhook Guide'}</h1>
            <p>
                {isKo
                ? 'KORION Webhook 문서는 결제, 입금, 출금, 정산 상태 변경을 이벤트 기반으로 수신하는 구조를 설명합니다. 이벤트 이름, 전달 방식, 서명 검증, 재시도 정책, 샘플 payload를 함께 제공하는 것이 좋습니다.'
                : 'KORION webhook docs explain event-driven delivery for payment, deposit, withdrawal, and settlement state changes, including event names, delivery model, signature verification, retry policy, and sample payloads.'}
            </p>
            </div>
        </section>

        <section className="developers-webhooks-body">
            <div className="developers-webhooks-page__container developers-webhooks-body__grid">
            <aside className="developers-webhooks-sidebar">
                <div className="developers-webhooks-sidebar__box">
                <span className="developers-webhooks-sidebar__title">
                    {isKo ? '웹훅 문서' : 'Webhook Docs'}
                </span>
                <a href="#wh-overview">{isKo ? '개요' : 'Overview'}</a>
                <a href="#wh-events">{isKo ? '이벤트 목록' : 'Event Types'}</a>
                <a href="#wh-delivery">{isKo ? '전달 구조' : 'Delivery Model'}</a>
                <a href="#wh-verification">{isKo ? '서명 검증' : 'Signature Verification'}</a>
                <a href="#wh-sample">{isKo ? '샘플 Payload' : 'Sample Payload'}</a>
                </div>
            </aside>

            <main className="developers-webhooks-main">
                <section className="developers-webhooks-section" id="wh-overview">
                <h2>{isKo ? '개요' : 'Overview'}</h2>
                <div className="developers-webhooks-divider" />
                <p>
                    {isKo
                    ? 'Webhook은 상태 변경을 실시간에 가깝게 전달하기 위한 가장 실용적인 방식입니다. 특히 결제, 입금, 출금, 정산 같은 비동기 흐름이 있는 서비스에서는 폴링만으로는 운영 효율이 떨어지기 때문에 이벤트 기반 구조를 함께 제공하는 것이 좋습니다.'
                    : 'Webhooks are the most practical way to deliver near-real-time state changes. For asynchronous flows such as payments, deposits, withdrawals, and settlement updates, event-driven delivery is far more efficient than polling alone.'}
                </p>
                </section>

                <section className="developers-webhooks-section" id="wh-events">
                <div className="developers-webhooks-section__heading">
                    <div className="developers-webhooks-section__icon">
                    <BellRing size={18} />
                    </div>
                    <div>
                    <h2>{isKo ? '이벤트 목록' : 'Event Types'}</h2>
                    <p>
                        {isKo
                        ? '대표 이벤트 이름을 먼저 공개하면 파트너가 훅 수신 구조를 빠르게 설계할 수 있습니다.'
                        : 'Publishing representative event names early helps partners design consumers faster.'}
                    </p>
                    </div>
                </div>

                <div className="developers-webhooks-events">
                    {eventRows.map((row) => (
                    <div className="developers-webhooks-event" key={row.name}>
                        <code>{row.name}</code>
                        <span>{isKo ? row.ko : row.en}</span>
                    </div>
                    ))}
                </div>
                </section>

                <section className="developers-webhooks-section" id="wh-delivery">
                <div className="developers-webhooks-section__heading">
                    <div className="developers-webhooks-section__icon">
                    <Workflow size={18} />
                    </div>
                    <div>
                    <h2>{isKo ? '전달 구조' : 'Delivery Model'}</h2>
                    <p>
                        {isKo
                        ? '실서비스 문서에는 전송 방식, 성공 응답 조건, 재시도 정책, 중복 수신 대비 원칙이 함께 포함되는 것이 좋습니다.'
                        : 'Production docs should define transport method, success conditions, retry policy, and duplicate-handling expectations.'}
                    </p>
                    </div>
                </div>

                <ul className="developers-webhooks-list">
                    <li>{isKo ? 'Webhook은 HTTPS POST 방식으로 전달' : 'Deliver events via HTTPS POST'}</li>
                    <li>{isKo ? '2xx 응답을 성공으로 간주' : 'Treat 2xx responses as successful delivery'}</li>
                    <li>{isKo ? '실패 시 단계적 재시도 정책 적용 가능' : 'Use progressive retry policy on failed delivery'}</li>
                    <li>{isKo ? '중복 이벤트 수신을 고려한 idempotent 처리 권장' : 'Consumers should implement idempotent handling for duplicate events'}</li>
                </ul>
                </section>

                <section className="developers-webhooks-section" id="wh-verification">
                <div className="developers-webhooks-section__heading">
                    <div className="developers-webhooks-section__icon">
                    <ShieldCheck size={18} />
                    </div>
                    <div>
                    <h2>{isKo ? '서명 검증' : 'Signature Verification'}</h2>
                    <p>
                        {isKo
                        ? 'Webhook 문서에는 요청 헤더의 서명값과 payload를 검증하는 절차를 포함하는 것이 좋습니다.'
                        : 'Webhook docs should include a clear procedure for verifying signatures from request headers against the payload.'}
                    </p>
                    </div>
                </div>

                <div className="developers-webhooks-code">
                    <div className="developers-webhooks-code__top">
                    <span />
                    <span />
                    <span />
                    </div>
                    <pre>{`const signature = req.headers['x-korion-signature'];
    const payload = JSON.stringify(req.body);

    const verified = verifyWebhookSignature({
    signature,
    payload,
    secret: WEBHOOK_SECRET,
    });`}</pre>
                </div>
                </section>

                <section className="developers-webhooks-section" id="wh-sample">
                <div className="developers-webhooks-section__heading">
                    <div className="developers-webhooks-section__icon">
                    <FileJson size={18} />
                    </div>
                    <div>
                    <h2>{isKo ? '샘플 Payload' : 'Sample Payload'}</h2>
                    <p>
                        {isKo
                        ? '대표 payload를 먼저 공개하면 이벤트 처리 로직 설계가 훨씬 쉬워집니다.'
                        : 'Providing a representative payload makes consumer design much easier.'}
                    </p>
                    </div>
                </div>

                <div className="developers-webhooks-code">
                    <div className="developers-webhooks-code__top">
                    <span />
                    <span />
                    <span />
                    </div>
                    <pre>{`{
    "event": "payment.completed",
    "timestamp": 1712345678901,
    "data": {
        "paymentId": "pay_10001",
        "orderId": "ORDER-1001",
        "asset": "KORI",
        "amount": "2500.000000",
        "status": "completed"
    }
    }`}</pre>
                </div>
                </section>

                <section className="developers-webhooks-section">
                <div className="developers-webhooks-section__heading">
                    <div className="developers-webhooks-section__icon">
                    <Wrench size={18} />
                    </div>
                    <div>
                    <h2>{isKo ? '운영 권장사항' : 'Operational Recommendations'}</h2>
                    <p>
                        {isKo
                        ? '운영 문서에서는 테스트 엔드포인트, 서명 오류 대응, 재전송 이벤트 로그, dead-letter 처리 여부까지 점진적으로 확장하는 것이 좋습니다.'
                        : 'Operational docs can later expand toward test endpoints, signature failure handling, replay logs, and dead-letter processing.'}
                    </p>
                    </div>
                </div>

                <div className="developers-webhooks-recommendations">
                    <div>{isKo ? '테스트용 webhook 발송 기능' : 'Webhook test trigger endpoint'}</div>
                    <div>{isKo ? '이벤트 재전송 기능' : 'Event redelivery support'}</div>
                    <div>{isKo ? '최근 이벤트 조회 API' : 'Recent events query API'}</div>
                    <div>{isKo ? '서명 오류 가이드' : 'Signature failure guide'}</div>
                </div>
                </section>
            </main>
            </div>
        </section>
        </div>
    );
    }