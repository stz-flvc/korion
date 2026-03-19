import { Link } from 'react-router';
import {
    AlertTriangle,
    ChevronDown,
    FileWarning,
    KeyRound,
    ShieldAlert,
    Workflow,
    Wrench,
    } from 'lucide-react';
    import { useLanguage } from '../contexts/LanguageContext';
    import './DevelopersErrorsPage.css';

    const errorGroups = [
    {
        titleEn: 'Authentication Errors',
        titleKo: '인증 오류',
        icon: KeyRound,
        rows: [
        ['AUTH_001', 'Missing API key', 'API 키가 없습니다'],
        ['AUTH_002', 'Invalid API key', '유효하지 않은 API 키입니다'],
        ['AUTH_003', 'Signature verification failed', '서명 검증에 실패했습니다'],
        ['AUTH_004', 'Timestamp expired', '타임스탬프가 만료되었습니다'],
        ],
    },
    {
        titleEn: 'Request Errors',
        titleKo: '요청 오류',
        icon: FileWarning,
        rows: [
        ['REQ_001', 'Invalid request payload', '요청 payload가 유효하지 않습니다'],
        ['REQ_002', 'Required field missing', '필수 필드가 누락되었습니다'],
        ['REQ_003', 'Unsupported asset', '지원되지 않는 자산입니다'],
        ['REQ_004', 'Unsupported network', '지원되지 않는 네트워크입니다'],
        ],
    },
    {
        titleEn: 'Operational Errors',
        titleKo: '운영 오류',
        icon: Workflow,
        rows: [
        ['OPS_001', 'Withdrawal not allowed', '출금이 허용되지 않은 상태입니다'],
        ['OPS_002', 'Settlement not ready', '정산이 준비되지 않았습니다'],
        ['OPS_003', 'Deposit still pending', '입금이 아직 대기 상태입니다'],
        ['OPS_004', 'Partner access restricted', '파트너 접근 권한이 제한되었습니다'],
        ],
    },
    {
        titleEn: 'System Errors',
        titleKo: '시스템 오류',
        icon: ShieldAlert,
        rows: [
        ['SYS_500', 'Internal server error', '내부 서버 오류입니다'],
        ['SYS_503', 'Service temporarily unavailable', '서비스가 일시적으로 사용 불가합니다'],
        ['SYS_504', 'Upstream timeout', '상위 시스템 타임아웃입니다'],
        ['SYS_599', 'Unknown operational exception', '알 수 없는 운영 예외입니다'],
        ],
    },
    ];

    export function DevelopersErrorsPage() {
    const { language } = useLanguage();
    const isKo = language === 'KR';

    return (
        <div className="developers-errors-page">
        <section className="developers-errors-hero">
            <div className="developers-errors-page__container">
            <div className="developers-errors-hero__crumbs">
                <Link to="/developers">{isKo ? '개발자' : 'Developers'}</Link>
                <ChevronDown size={14} />
                <span>{isKo ? '오류 코드' : 'Error Codes'}</span>
            </div>

            <h1>{isKo ? 'Error Code Reference' : 'Error Code Reference'}</h1>
            <p>
                {isKo
                ? '오류 코드 문서는 개발자와 파트너가 빠르게 원인을 파악하고 대응할 수 있게 해주는 핵심 문서입니다. 인증, 요청, 운영, 시스템 오류를 분리해 공개하는 구조가 가장 이해하기 쉽습니다.'
                : 'Error documentation helps developers and partners identify issues quickly. The clearest structure separates authentication, request, operational, and system errors.'}
            </p>
            </div>
        </section>

        <section className="developers-errors-body">
            <div className="developers-errors-page__container">
            <div className="developers-errors-summary">
                <div className="developers-errors-summary__card">
                <AlertTriangle size={18} />
                <strong>{isKo ? '오류는 범주별로 분리' : 'Errors grouped by category'}</strong>
                </div>
                <div className="developers-errors-summary__card">
                <Wrench size={18} />
                <strong>{isKo ? '운영 대응이 쉬운 코드 체계' : 'Operationally useful code structure'}</strong>
                </div>
            </div>

            <div className="developers-errors-groups">
                {errorGroups.map((group) => {
                const Icon = group.icon;
                return (
                    <section className="developers-errors-group" key={group.titleEn}>
                    <div className="developers-errors-group__head">
                        <div className="developers-errors-group__icon">
                        <Icon size={18} />
                        </div>
                        <h2>{isKo ? group.titleKo : group.titleEn}</h2>
                    </div>

                    <div className="developers-errors-table">
                        {group.rows.map(([code, en, ko]) => (
                        <div className="developers-errors-row" key={code}>
                            <code>{code}</code>
                            <span>{isKo ? ko : en}</span>
                        </div>
                        ))}
                    </div>
                    </section>
                );
                })}
            </div>
            </div>
        </section>
        </div>
    );
    }