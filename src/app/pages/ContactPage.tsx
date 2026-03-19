import { motion } from 'motion/react';
import {
    Mail,
    ShieldCheck,
    Headset,
    Briefcase,
    Bug,
    Code2,
    Clock3,
    ChevronRight,
    CircleHelp,
    MessageSquareText,
    } from 'lucide-react';
    import { Link } from 'react-router';
    import { useLanguage } from '../contexts/LanguageContext';
    import './ContactPage.css';

    const contactChannels = [
    {
        key: 'support',
        icon: Headset,
        titleEn: 'Support Team',
        titleKo: '지원팀 문의',
        descEn:
        'For account access, app issues, wallet usage, login errors, update guidance, and general service support.',
        descKo:
        '계정 접근, 앱 사용 문제, 지갑 이용, 로그인 오류, 업데이트 안내 등 일반적인 서비스 지원이 필요한 경우 문의할 수 있습니다.',
        email: 'dianainteen@dianainteen.com',
        badgeEn: 'dianainteen@dianainteen.com',
        badgeKo: '일반 지원',
    },
    {
        key: 'ops',
        icon: MessageSquareText,
        titleEn: 'Operations Team',
        titleKo: '운영팀 문의',
        descEn:
        'For ecosystem operations, campaign coordination, notice-related questions, user flow issues, or service feedback.',
        descKo:
        '생태계 운영, 캠페인 협의, 공지 관련 문의, 서비스 흐름 관련 이슈, 운영 피드백 등을 전달할 수 있습니다.',
        email: 'dianainteen@dianainteen.com',
        badgeEn: 'dianainteen@dianainteen.com',
        badgeKo: '서비스 운영',
    },
    {
        key: 'biz',
        icon: Briefcase,
        titleEn: 'Business & Partnership',
        titleKo: '비즈니스 / 제휴 문의',
        descEn:
        'For strategic partnerships, payment collaboration, listing discussions, enterprise proposals, and growth opportunities.',
        descKo:
        '전략 제휴, 결제 협업, 상장 논의, 기업 제안, 사업 확장 기회에 대한 문의에 적합합니다.',
        email: 'dianainteen@dianainteen.com',
        badgeEn: 'dianainteen@dianainteen.com',
        badgeKo: '제휴',
    },
    {
        key: 'security',
        icon: ShieldCheck,
        titleEn: 'Security Report',
        titleKo: '보안 제보',
        descEn:
        'For vulnerability reports, suspicious activity, fraud concerns, wallet security issues, or responsible disclosure.',
        descKo:
        '취약점 제보, 이상 징후, 사기 의심, 지갑 보안 이슈, 책임 있는 공개 절차 관련 내용을 전달할 수 있습니다.',
        email: 'dianainteen@dianainteen.com',
        badgeEn: 'dianainteen@dianainteen.com',
        badgeKo: '책임 있는 제보',
    },
    {
        key: 'dev',
        icon: Code2,
        titleEn: 'Developer Contact',
        titleKo: '개발 관련 문의',
        descEn:
        'For API integration, technical documentation, SDK coordination, product interoperability, or infrastructure discussions.',
        descKo:
        'API 연동, 기술 문서, SDK 협업, 제품 연동성, 인프라 관련 협의가 필요한 경우 문의할 수 있습니다.',
        email: 'dianainteen@dianainteen.com',
        badgeEn: 'dianainteen@dianainteen.com',
        badgeKo: '기술 문의',
    },
    ];

    const faqItems = [
    {
        qEn: 'Which team should I contact first?',
        qKo: '어느 팀으로 먼저 문의해야 하나요?',
        aEn:
        'If your issue is related to using the service, app, wallet, or account, contact Support first. For partnership or business matters, use the Business channel.',
        aKo:
        '서비스 이용, 앱, 지갑, 계정 문제라면 지원팀으로 먼저 문의하시면 됩니다. 제휴나 사업 관련 내용은 비즈니스 채널을 이용해 주세요.',
    },
    {
        qEn: 'Can I report a security issue privately?',
        qKo: '보안 이슈를 비공개로 제보할 수 있나요?',
        aEn:
        'Yes. Security-related matters should be sent to the dedicated security contact so they can be reviewed through the appropriate process.',
        aKo:
        '가능합니다. 보안 관련 사안은 전용 보안 연락처로 보내주시면 적절한 절차를 통해 검토됩니다.',
    },
    {
        qEn: 'How detailed should my inquiry be?',
        qKo: '문의 내용은 얼마나 자세히 적어야 하나요?',
        aEn:
        'Include your issue summary, related account or wallet context if relevant, screenshots when needed, and the exact sequence of what happened.',
        aKo:
        '문제 요약, 관련 계정 또는 지갑 정보, 필요한 경우 스크린샷, 그리고 어떤 순서로 문제가 발생했는지를 함께 적어주시면 좋습니다.',
    },
    ];

    export function ContactPage() {
    const { language } = useLanguage();
    const isKo = language === 'KR';

    return (
        <div className="contact-page">
        <div className="contact-page__bg">
            <div className="contact-page__glow contact-page__glow--one" />
            <div className="contact-page__glow contact-page__glow--two" />
            <div className="contact-page__grid" />
        </div>

        <div className="contact-page__container">
            <motion.section
            className="contact-page__intro"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            >
            <div className="contact-page__eyebrow">
                <Mail size={15} />
                <span>{isKo ? '문의 안내' : 'Contact Guidance'}</span>
            </div>

            <h1 className="contact-page__title">
                {isKo
                ? '운영팀 및 지원팀에 빠르고 정확하게 문의할 수 있도록 정리된 안내 페이지입니다.'
                : 'A premium contact page designed to guide users to the right team quickly and clearly.'}
            </h1>

            <p className="contact-page__description">
                {isKo
                ? '서비스 이용 문의부터 운영, 제휴, 보안, 개발 관련 소통까지 목적에 맞는 채널로 연결할 수 있도록 구성했습니다. 문의 성격에 따라 가장 적절한 담당 영역을 확인한 뒤 연락해 주세요.'
                : 'From product support to operations, partnership, security, and developer communication, this page is structured to help route each inquiry to the most appropriate team.'}
            </p>
            </motion.section>

            <motion.section
            className="contact-page__summary"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.08 }}
            >
            <div className="contact-page__summary-card">
                <div className="contact-page__summary-icon">
                <Clock3 size={18} />
                </div>
                <div>
                <h3>{isKo ? '응답 안내' : 'Response Guidance'}</h3>
                <p>
                    {isKo
                    ? '문의 유형에 따라 담당 팀에서 순차적으로 검토하며, 상세 정보가 포함될수록 더 빠른 확인이 가능합니다.'
                    : 'Each inquiry is reviewed by the relevant team, and more complete details usually lead to faster handling.'}
                </p>
                </div>
            </div>

            <div className="contact-page__summary-card">
                <div className="contact-page__summary-icon">
                <ShieldCheck size={18} />
                </div>
                <div>
                <h3>{isKo ? '보안 우선 처리' : 'Security Priority'}</h3>
                <p>
                    {isKo
                    ? '보안 이슈나 의심 거래, 취약점 제보는 일반 문의보다 우선적으로 분류될 수 있습니다.'
                    : 'Security concerns, suspicious activity, and vulnerability reports may be prioritized over standard requests.'}
                </p>
                </div>
            </div>

            <div className="contact-page__summary-card">
                <div className="contact-page__summary-icon">
                <CircleHelp size={18} />
                </div>
                <div>
                <h3>{isKo ? '정확한 채널 선택' : 'Choose the Right Channel'}</h3>
                <p>
                    {isKo
                    ? '문의 목적에 맞는 채널을 선택하면 더 정확한 답변과 더 나은 연결이 가능합니다.'
                    : 'Selecting the correct team helps your message reach the right reviewers with less delay.'}
                </p>
                </div>
            </div>
            </motion.section>

            <section className="contact-page__channels">
            {contactChannels.map((item, index) => {
                const Icon = item.icon;

                return (
                <motion.article
                    key={item.key}
                    className="contact-channel-card"
                    initial={{ opacity: 0, y: 26 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.62, delay: 0.1 + index * 0.06 }}
                >
                    <div className="contact-channel-card__top">
                    <div className="contact-channel-card__icon">
                        <Icon size={18} />
                    </div>

                    <span className="contact-channel-card__badge">
                        {isKo ? item.badgeKo : item.badgeEn}
                    </span>
                    </div>

                    <h2 className="contact-channel-card__title">
                    {isKo ? item.titleKo : item.titleEn}
                    </h2>

                    <p className="contact-channel-card__desc">
                    {isKo ? item.descKo : item.descEn}
                    </p>

                    <a href={`mailto:${item.email}`} className="contact-channel-card__email">
                    <Mail size={16} />
                    <span>{item.email}</span>
                    </a>
                </motion.article>
                );
            })}
            </section>

            <motion.section
            className="contact-page__policy"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.22 }}
            >
            <div className="contact-policy-card">
                <div className="contact-policy-card__header">
                <span className="contact-policy-card__dot" />
                <h3>{isKo ? '문의 작성 가이드' : 'Inquiry Writing Guide'}</h3>
                </div>

                <ul className="contact-policy-card__list">
                <li>
                    {isKo
                    ? '문의 제목에는 문제 유형이나 요청 목적을 간단하고 명확하게 적어주세요.'
                    : 'Use a short and clear subject line that reflects your issue or request.'}
                </li>
                <li>
                    {isKo
                    ? '계정, 지갑, 거래 관련 문의라면 필요한 범위 내에서 식별 가능한 정보를 함께 남겨주세요.'
                    : 'If your issue involves an account, wallet, or transaction, provide enough relevant context for review.'}
                </li>
                <li>
                    {isKo
                    ? '오류 화면이나 동작 문제가 있다면 스크린샷 또는 재현 순서를 함께 전달해 주세요.'
                    : 'For app issues, include screenshots or the exact steps needed to reproduce the problem.'}
                </li>
                <li>
                    {isKo
                    ? '보안 관련 내용은 공개 채널보다 전용 보안 연락처를 사용하는 것이 좋습니다.'
                    : 'Security-related issues are best reported through the dedicated security contact channel.'}
                </li>
                </ul>
            </div>

            <div className="contact-policy-card">
                <div className="contact-policy-card__header">
                <span className="contact-policy-card__dot" />
                <h3>{isKo ? '운영 안내' : 'Operating Guidance'}</h3>
                </div>

                <div className="contact-policy-card__meta">
                <div className="contact-policy-card__meta-item">
                    <span>{isKo ? '처리 방식' : 'Processing'}</span>
                    <strong>
                    {isKo ? '문의 성격에 따라 담당 팀 배정' : 'Assigned by inquiry type'}
                    </strong>
                </div>

                <div className="contact-policy-card__meta-item">
                    <span>{isKo ? '우선 검토' : 'Priority Review'}</span>
                    <strong>
                    {isKo ? '보안 및 서비스 장애 관련 이슈' : 'Security and service-impacting issues'}
                    </strong>
                </div>

                <div className="contact-policy-card__meta-item">
                    <span>{isKo ? '권장 내용' : 'Recommended Content'}</span>
                    <strong>
                    {isKo ? '상황 설명, 시점, 증빙 자료' : 'Summary, timing, and evidence'}
                    </strong>
                </div>
                </div>
            </div>
            </motion.section>

            <motion.section
            className="contact-page__faq"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.28 }}
            >
            <div className="contact-page__section-heading">
                <span>{isKo ? '자주 확인하는 안내' : 'Helpful FAQ'}</span>
                <h2>{isKo ? '문의 전 확인하면 더 빠릅니다' : 'Check these before reaching out'}</h2>
            </div>

            <div className="contact-faq-list">
                {faqItems.map((item, index) => (
                <article key={index} className="contact-faq-item">
                    <h3>{isKo ? item.qKo : item.qEn}</h3>
                    <p>{isKo ? item.aKo : item.aEn}</p>
                </article>
                ))}
            </div>
            </motion.section>

            <motion.section
            className="contact-page__cta"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.34 }}
            >
            <div className="contact-page__cta-card">
                <div className="contact-page__cta-copy">
                <span>{isKo ? '추가 안내' : 'More Guidance'}</span>
                <h2>
                    {isKo
                    ? '문의와 함께 필요한 정책 및 서비스 페이지도 함께 확인해 보세요.'
                    : 'You may also want to review policy and service pages before submitting an inquiry.'}
                </h2>
                <p>
                    {isKo
                    ? '보다 정확한 문의를 위해 관련 페이지를 함께 검토하면 문제 해결 속도를 높이는 데 도움이 됩니다.'
                    : 'Reviewing related pages beforehand can help you submit a more precise inquiry and reduce back-and-forth.'}
                </p>
                </div>

                <div className="contact-page__cta-actions">
                <Link to="/support" className="contact-page__cta-button">
                    <span>{isKo ? '지원 페이지 보기' : 'View Support Page'}</span>
                    <ChevronRight size={16} />
                </Link>

                <Link to="/developers" className="contact-page__cta-button contact-page__cta-button--ghost">
                    <span>{isKo ? '개발자 페이지 보기' : 'View Developers Page'}</span>
                    <ChevronRight size={16} />
                </Link>
                </div>
            </div>
            </motion.section>
        </div>
        </div>
    );
    }