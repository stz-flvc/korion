import { Link } from 'react-router';
import { ChevronDown, Code2, Store, Landmark } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './DevelopersPreregisterPage.css';

export function DevelopersPreregisterPage() {
    const { language } = useLanguage();
    const isKo = language === 'KR';

    return (
        <div className="developers-prereg-page">
        <section className="developers-prereg-hero">
            <div className="developers-prereg-page__container">
            <div className="developers-prereg-hero__crumbs">
                <Link to="/developers">{isKo ? '개발자' : 'Developers'}</Link>
                <ChevronDown size={14} />
                <span>{isKo ? '사전등록' : 'Pre-registration'}</span>
            </div>

            <h1>Developer &amp; Partner Pre-registration</h1>
            <p>
                {isKo
                ? '초기 문서, 샌드박스, SDK 프리뷰, 파트너 온보딩 정보를 먼저 받아볼 수 있도록 개발자와 파트너를 위한 사전등록 구조를 제공합니다.'
                : 'Register early for access to documentation previews, sandbox credentials, SDK previews, and partner onboarding flows.'}
            </p>
            </div>
        </section>

        <section className="developers-prereg-body">
            <div className="developers-prereg-page__container">
            <div className="developers-prereg-cards">
                <article className="developers-prereg-card">
                <div className="developers-prereg-card__icon">
                    <Code2 size={18} />
                </div>
                <h2>{isKo ? '개발자 사전등록' : 'Developer Pre-registration'}</h2>
                <p>
                    {isKo
                    ? 'API 문서, SDK 샘플, 샌드박스 발급 절차를 먼저 받고 싶은 개발자를 위한 등록입니다.'
                    : 'For developers who want early access to API docs, SDK examples, and sandbox onboarding.'}
                </p>
                </article>

                <article className="developers-prereg-card">
                <div className="developers-prereg-card__icon">
                    <Store size={18} />
                </div>
                <h2>{isKo ? '가맹점 / 서비스 사전등록' : 'Merchant / Service Registration'}</h2>
                <p>
                    {isKo
                    ? 'KORION Pay 및 정산 흐름 연동을 준비하는 서비스 운영자를 위한 등록입니다.'
                    : 'For merchants and service operators preparing KORION Pay and settlement integrations.'}
                </p>
                </article>

                <article className="developers-prereg-card">
                <div className="developers-prereg-card__icon">
                    <Landmark size={18} />
                </div>
                <h2>{isKo ? '거래소 / 지갑 파트너 등록' : 'Exchange / Wallet Partner Registration'}</h2>
                <p>
                    {isKo
                    ? '거래소, 커스터디, 지갑 사업자 등 자산 또는 네트워크 연동을 준비하는 파트너를 위한 등록입니다.'
                    : 'For exchanges, custodians, and wallet providers preparing asset or network-level integrations.'}
                </p>
                </article>
            </div>

            <div className="developers-prereg-formwrap">
                <h2>{isKo ? '사전등록 양식' : 'Pre-registration Form'}</h2>
                <div className="developers-prereg-divider" />

                <form className="developers-prereg-form">
                <div className="developers-prereg-form__grid">
                    <label>
                    <span>{isKo ? '구분' : 'Category'}</span>
                    <select>
                        <option>{isKo ? '개발자' : 'Developer'}</option>
                        <option>{isKo ? '가맹점 / 서비스' : 'Merchant / Service'}</option>
                        <option>{isKo ? '거래소 / 지갑 파트너' : 'Exchange / Wallet Partner'}</option>
                    </select>
                    </label>

                    <label>
                    <span>{isKo ? '회사명 / 팀명' : 'Company / Team'}</span>
                    <input type="text" placeholder={isKo ? '회사명 또는 팀명' : 'Company or team name'} />
                    </label>

                    <label>
                    <span>{isKo ? '담당자명' : 'Contact Name'}</span>
                    <input type="text" placeholder={isKo ? '담당자명' : 'Contact name'} />
                    </label>

                    <label>
                    <span>{isKo ? '이메일' : 'Email'}</span>
                    <input type="email" placeholder="contact@example.com" />
                    </label>

                    <label>
                    <span>{isKo ? '웹사이트' : 'Website'}</span>
                    <input type="text" placeholder="https://example.com" />
                    </label>

                    <label>
                    <span>{isKo ? '관심 영역' : 'Interest Area'}</span>
                    <input
                        type="text"
                        placeholder={
                        isKo
                            ? '예: Wallet API, Payment API, Sandbox, Exchange Integration'
                            : 'e.g. Wallet API, Payment API, Sandbox, Exchange Integration'
                        }
                    />
                    </label>
                </div>

                <label className="developers-prereg-form__full">
                    <span>{isKo ? '연동 계획 또는 요청사항' : 'Integration Plan or Request'}</span>
                    <textarea
                    rows={7}
                    placeholder={
                        isKo
                        ? '예상 연동 목적, 필요한 문서, 샌드박스 필요 여부 등을 작성하세요.'
                        : 'Describe your integration goals, required docs, and whether you need sandbox access.'
                    }
                    />
                </label>

                <div className="developers-prereg-form__actions">
                    <button type="submit">{isKo ? '사전등록 신청' : 'Submit Registration'}</button>
                </div>
                </form>
            </div>
            </div>
        </section>
        </div>
    );
    }