import { motion } from 'motion/react';
import {
    AlertTriangle,
    BadgeCheck,
    BellRing,
    CheckCircle2,
    ChevronRight,
    KeyRound,
    LockKeyhole,
    ShieldCheck,
    Smartphone,
    TriangleAlert,
    Wallet,
    Eye,
    Fingerprint,
    Siren,
    FileLock2,
    } from 'lucide-react';
    import { Link } from 'react-router';
    import { useLanguage } from '../contexts/LanguageContext';
    import './SecurityPage.css';

    const protectionCards = [
    {
        icon: LockKeyhole,
        titleEn: 'Account Protection',
        titleKo: '계정 보호',
        descEn:
        'Protect your account with strong authentication, trusted devices, and safe login habits.',
        descKo:
        '강력한 인증 수단, 신뢰 가능한 기기, 안전한 로그인 습관으로 계정을 보호하세요.',
        pointsEn: [
        'Use a strong and unique password',
        'Enable additional authentication when available',
        'Do not share login credentials with anyone',
        ],
        pointsKo: [
        '강력하고 고유한 비밀번호 사용',
        '가능한 경우 추가 인증 수단 활성화',
        '로그인 정보는 누구와도 공유하지 않기',
        ],
    },
    {
        icon: Wallet,
        titleEn: 'Wallet Safety',
        titleKo: '지갑 안전 수칙',
        descEn:
        'Your wallet is a core access point to digital assets and must be handled with extra caution.',
        descKo:
        '지갑은 디지털 자산 접근의 핵심 수단이므로 더욱 각별한 주의가 필요합니다.',
        pointsEn: [
        'Back up recovery information securely',
        'Verify addresses carefully before transfer',
        'Never install unknown wallet-related apps',
        ],
        pointsKo: [
        '복구 정보를 안전하게 백업하기',
        '전송 전 주소를 반드시 다시 확인하기',
        '출처 불명의 지갑 관련 앱 설치 금지',
        ],
    },
    {
        icon: ShieldCheck,
        titleEn: 'Platform Security Awareness',
        titleKo: '플랫폼 보안 인식',
        descEn:
        'Stay alert to impersonation, phishing attempts, and suspicious links pretending to represent official services.',
        descKo:
        '공식 서비스를 사칭하는 피싱, 위장 링크, 의심스러운 연락에 항상 주의해야 합니다.',
        pointsEn: [
        'Use only official links and official channels',
        'Ignore urgent messages demanding immediate action',
        'Report suspicious activity as early as possible',
        ],
        pointsKo: [
        '공식 링크와 공식 채널만 이용하기',
        '즉시 조치를 요구하는 긴급 메시지 주의',
        '의심 행위 발견 시 빠르게 신고하기',
        ],
    },
    ];

    const guideBlocks = [
    {
        icon: KeyRound,
        titleEn: 'Password & Authentication',
        titleKo: '비밀번호 및 인증',
        bodyEn:
        'Use a long password that is not reused on other websites or services. Avoid storing passwords in unsecured notes or messenger apps. When additional authentication features are available, enable them and keep backup methods protected.',
        bodyKo:
        '다른 웹사이트나 서비스와 중복되지 않는 긴 비밀번호를 사용하세요. 비밀번호를 보안되지 않은 메모장이나 메신저에 저장하지 마세요. 추가 인증 기능이 제공되는 경우 활성화하고, 백업 인증 수단도 안전하게 관리해야 합니다.',
    },
    {
        icon: Smartphone,
        titleEn: 'Device Safety',
        titleKo: '기기 보안',
        bodyEn:
        'Keep your phone and computer updated to the latest secure version. Install apps only from trusted sources and avoid rooted or jailbroken devices for financial or wallet activity. Lock your device with a passcode, biometrics, or both.',
        bodyKo:
        '휴대폰과 컴퓨터는 최신 보안 버전으로 유지하세요. 앱은 신뢰 가능한 경로를 통해서만 설치하고, 금융 또는 지갑 활동에는 루팅·탈옥 기기 사용을 피하세요. 비밀번호, 생체인증 또는 두 가지 모두로 기기를 잠그는 것이 좋습니다.',
    },
    {
        icon: Eye,
        titleEn: 'Phishing Prevention',
        titleKo: '피싱 예방',
        bodyEn:
        'Always inspect the URL and sender identity before entering any credentials or approving transactions. Attackers often copy branding, tone, and layouts. If a page feels rushed, unusual, or asks for sensitive information unexpectedly, stop and verify through official channels.',
        bodyKo:
        '로그인 정보 입력이나 거래 승인 전에는 반드시 URL과 발신자 정보를 확인하세요. 공격자는 브랜드, 말투, 화면 구성까지 유사하게 모방할 수 있습니다. 페이지가 지나치게 급박하거나 낯설고, 민감한 정보를 갑자기 요구한다면 즉시 중단하고 공식 채널을 통해 확인해야 합니다.',
    },
    {
        icon: Fingerprint,
        titleEn: 'Recovery & Ownership',
        titleKo: '복구 정보 및 자산 소유권',
        bodyEn:
        'Recovery phrases, private keys, and wallet credentials must never be exposed to anyone. No legitimate support team should ask for them. Store recovery details offline in a secure and private place, and verify that your backup can actually be accessed when needed.',
        bodyKo:
        '복구 구문, 개인키, 지갑 자격 정보는 누구에게도 노출되어서는 안 됩니다. 정상적인 지원팀이라면 이를 요구하지 않습니다. 복구 정보는 오프라인의 안전하고 사적인 장소에 보관하고, 실제 필요 시 접근 가능한 상태인지 점검해 두는 것이 중요합니다.',
    },
    ];

    const checklistItems = {
    en: [
        'I use a password that is unique to this service.',
        'I verify wallet addresses before every transfer.',
        'I do not share private keys or recovery phrases.',
        'I use only official links and official announcements.',
        'I avoid unknown files, suspicious QR codes, and fake support accounts.',
        'I keep my device and app versions updated.',
    ],
    ko: [
        '이 서비스 전용의 고유한 비밀번호를 사용하고 있습니다.',
        '모든 전송 전에 지갑 주소를 다시 확인합니다.',
        '개인키나 복구 구문을 누구와도 공유하지 않습니다.',
        '공식 링크와 공식 공지만 이용합니다.',
        '출처 불명 파일, 의심스러운 QR, 가짜 고객센터 계정을 피합니다.',
        '기기와 앱을 최신 버전으로 유지합니다.',
    ],
    };

    const emergencySteps = {
    en: [
        'Stop further actions immediately if you suspect fraud or compromise.',
        'Change related passwords and revoke risky access where possible.',
        'Move assets only after confirming a safe environment.',
        'Contact official support channels with accurate details.',
    ],
    ko: [
        '사기나 계정 이상이 의심되면 즉시 추가 행동을 중단하세요.',
        '관련 비밀번호를 변경하고 위험한 접근 권한을 정리하세요.',
        '안전한 환경을 확인한 뒤에만 자산 이동을 진행하세요.',
        '정확한 내용을 정리해 공식 지원 채널로 문의하세요.',
    ],
    };

    export function SecurityPage() {
    const { t, language } = useLanguage();
    const isKo = language === 'KR';

    return (
        <div className="security-page">
        <div className="security-page__container">
            <section className="security-page__intro">
            <motion.div
                className="security-page__intro-badge"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
            >
                <ShieldCheck size={16} />
                <span>{isKo ? '보안 안내 센터' : 'Security Guidance Center'}</span>
            </motion.div>

            <motion.h1
                className="security-page__title"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.04 }}
            >
                {isKo
                ? '계정 보호, 지갑 주의사항, 보안 가이드를 한눈에 확인하세요'
                : 'Review account protection, wallet precautions, and practical security guidance in one place.'}
            </motion.h1>

            <motion.p
                className="security-page__lead"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 }}
            >
                {isKo
                ? '이 페이지는 사용자가 보다 안전하게 서비스를 이용할 수 있도록 핵심 보안 원칙과 주의사항을 정리한 안내 페이지입니다. 보안은 기능이 아니라 습관이며, 작은 확인 하나가 큰 위험을 막을 수 있습니다.'
                : 'This page brings together essential security principles and user precautions to support safer platform usage. Security is not only a feature but also a habit, and one careful check can prevent significant risk.'}
            </motion.p>
            </section>

            <section className="security-page__protection-grid">
            {protectionCards.map((card, index) => {
                const Icon = card.icon;

                return (
                <motion.article
                    key={index}
                    className="security-protection-card"
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                    <div className="security-protection-card__icon">
                    <Icon size={20} />
                    </div>

                    <h2 className="security-protection-card__title">
                    {isKo ? card.titleKo : card.titleEn}
                    </h2>

                    <p className="security-protection-card__desc">
                    {isKo ? card.descKo : card.descEn}
                    </p>

                    <div className="security-protection-card__list">
                    {(isKo ? card.pointsKo : card.pointsEn).map((point, pointIndex) => (
                        <div key={pointIndex} className="security-protection-card__item">
                        <BadgeCheck size={16} />
                        <span>{point}</span>
                        </div>
                    ))}
                    </div>
                </motion.article>
                );
            })}
            </section>

            <section className="security-page__guides">
            <div className="security-page__section-head">
                <div className="security-page__section-kicker">
                <FileLock2 size={16} />
                <span>{isKo ? '보안 가이드' : 'Security Guide'}</span>
                </div>
                <h2>
                {isKo
                    ? '안전한 이용을 위한 핵심 원칙'
                    : 'Core principles for safer usage'}
                </h2>
                <p>
                {isKo
                    ? '계정, 기기, 링크, 복구 정보까지 실제 사용 과정에서 가장 자주 발생하는 보안 위험 요소를 기준으로 정리했습니다.'
                    : 'These recommendations focus on the most common security risks users face across accounts, devices, links, and recovery information.'}
                </p>
            </div>

            <div className="security-guide-grid">
                {guideBlocks.map((block, index) => {
                const Icon = block.icon;

                return (
                    <motion.article
                    key={index}
                    className="security-guide-card"
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    >
                    <div className="security-guide-card__top">
                        <div className="security-guide-card__icon">
                        <Icon size={18} />
                        </div>
                        <h3>{isKo ? block.titleKo : block.titleEn}</h3>
                    </div>
                    <p>{isKo ? block.bodyKo : block.bodyEn}</p>
                    </motion.article>
                );
                })}
            </div>
            </section>

            <section className="security-page__awareness">
            <motion.div
                className="security-alert-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
            >
                <div className="security-alert-card__header">
                <div className="security-alert-card__icon">
                    <TriangleAlert size={18} />
                </div>
                <div>
                    <h3>{isKo ? '반드시 주의하세요' : 'Please stay alert'}</h3>
                    <p>
                    {isKo
                        ? '정상적인 운영팀이나 고객지원은 개인키, 복구 구문, 전체 비밀번호를 요구하지 않습니다.'
                        : 'A legitimate operations or support team should never ask for your private key, recovery phrase, or full password.'}
                    </p>
                </div>
                </div>

                <div className="security-alert-card__tags">
                <span>{isKo ? '가짜 고객센터 주의' : 'Fake support warning'}</span>
                <span>{isKo ? '피싱 링크 주의' : 'Phishing link warning'}</span>
                <span>{isKo ? '복구정보 공유 금지' : 'Never share recovery data'}</span>
                </div>
            </motion.div>
            </section>

            <section className="security-page__checklist-wrap">
            <div className="security-page__section-head">
                <div className="security-page__section-kicker">
                <CheckCircle2 size={16} />
                <span>{isKo ? '보안 체크리스트' : 'Security Checklist'}</span>
                </div>
                <h2>{isKo ? '지금 바로 점검해보세요' : 'Check your security posture now'}</h2>
            </div>

            <div className="security-checklist">
                {(isKo ? checklistItems.ko : checklistItems.en).map((item, index) => (
                <motion.div
                    key={index}
                    className="security-checklist__item"
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                >
                    <CheckCircle2 size={18} />
                    <span>{item}</span>
                </motion.div>
                ))}
            </div>
            </section>

            <section className="security-page__emergency">
            <div className="security-page__section-head">
                <div className="security-page__section-kicker">
                <Siren size={16} />
                <span>{isKo ? '긴급 대응' : 'Emergency Response'}</span>
                </div>
                <h2>{isKo ? '이상 징후가 보이면 이렇게 대응하세요' : 'What to do if something looks wrong'}</h2>
            </div>

            <div className="security-emergency-grid">
                {(isKo ? emergencySteps.ko : emergencySteps.en).map((step, index) => (
                <motion.div
                    key={index}
                    className="security-emergency-step"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                    <div className="security-emergency-step__index">0{index + 1}</div>
                    <p>{step}</p>
                </motion.div>
                ))}
            </div>
            </section>

            <section className="security-page__cta">
            <motion.div
                className="security-cta-card"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
            >
                <div className="security-cta-card__content">
                <div className="security-cta-card__badge">
                    <BellRing size={16} />
                    <span>{isKo ? '안전한 이용 습관' : 'Safer Usage Habits'}</span>
                </div>

                <h2>
                    {isKo
                    ? '보안은 한 번의 설정이 아니라 지속적인 확인입니다'
                    : 'Security is not a one-time setup, but a continuous practice'}
                </h2>

                <p>
                    {isKo
                    ? '계정 보호와 지갑 보안은 사소한 부주의에서 가장 자주 무너집니다. 공식 경로를 이용하고, 복구 정보를 안전하게 관리하며, 모든 전송 전 다시 확인하는 습관을 유지하세요.'
                    : 'Account and wallet safety are most often weakened by small moments of carelessness. Use official channels, store recovery information securely, and keep the habit of verifying every transfer before approval.'}
                </p>

                <div className="security-cta-card__actions">
                    <Link to="/support" className="security-cta-card__button security-cta-card__button--primary">
                    <span>{isKo ? '고객지원 보기' : 'View Support'}</span>
                    <ChevronRight size={18} />
                    </Link>

                    <Link to="/download" className="security-cta-card__button security-cta-card__button--secondary">
                    <span>{isKo ? '앱 다운로드' : 'Download App'}</span>
                    </Link>
                </div>
                </div>

                <div className="security-cta-card__visual" aria-hidden="true">
                <div className="security-cta-card__orb security-cta-card__orb--one" />
                <div className="security-cta-card__orb security-cta-card__orb--two" />
                <div className="security-cta-card__shield">
                    <ShieldCheck size={34} />
                </div>
                <div className="security-cta-card__mini security-cta-card__mini--a">
                    <LockKeyhole size={16} />
                </div>
                <div className="security-cta-card__mini security-cta-card__mini--b">
                    <AlertTriangle size={16} />
                </div>
                </div>
            </motion.div>
            </section>
        </div>
        </div>
    );
    }