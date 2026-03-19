import { motion } from 'motion/react';
import {
    Pickaxe,
    Smartphone,
    Coins,
    Zap,
    ShieldCheck,
    Layers3,
    ChevronRight,
    Sparkles,
    BadgeCheck,
    Users,
    Activity,
    ArrowUpRight,
} from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import './MiningPage.css';

    const miningFeatures = [
    {
        icon: Smartphone,
        titleEn: 'Mobile-First Mining',
        titleKr: '모바일 중심 채굴',
        descEn:
        'Mining participation is designed to be accessible through a mobile-first structure, making entry into the ecosystem simpler and more intuitive.',
        descKr:
        '채굴 참여는 모바일 중심 구조로 설계되어 사용자가 더 쉽고 직관적으로 생태계에 진입할 수 있도록 구성됩니다.',
    },
    {
        icon: Coins,
        titleEn: 'KORI Reward Structure',
        titleKr: 'KORI 보상 구조',
        descEn:
        'Mining activity is connected to the KORI reward model, linking user participation to the broader KORION token economy.',
        descKr:
        '채굴 활동은 KORI 보상 구조와 연결되어 사용자 참여가 KORION 토큰 경제와 이어지도록 설계됩니다.',
    },
    {
        icon: Users,
        titleEn: 'Participation-Based Growth',
        titleKr: '참여 기반 성장 구조',
        descEn:
        'The mining model can be strengthened through user engagement, ecosystem participation, and service activity across connected platforms.',
        descKr:
        '채굴 모델은 사용자 참여, 생태계 활동, 연결된 서비스 플랫폼 내 활동성을 통해 더욱 강화될 수 있습니다.',
    },
    {
        icon: ShieldCheck,
        titleEn: 'Structured Ecosystem Logic',
        titleKr: '구조화된 생태계 로직',
        descEn:
        'Mining is positioned not as an isolated feature, but as part of a broader structured ecosystem involving utility, retention, and platform growth.',
        descKr:
        '채굴은 단순한 독립 기능이 아니라 유틸리티, 체류시간, 플랫폼 성장과 연결되는 구조화된 생태계 요소로 위치합니다.',
    },
    ];

    const miningFlow = [
    {
        icon: Smartphone,
        titleEn: 'Join via Mobile',
        titleKr: '모바일로 참여',
        descEn: 'Users access the mining layer through a mobile-first user journey.',
        descKr: '사용자는 모바일 중심 사용자 경험을 통해 채굴 레이어에 진입합니다.',
    },
    {
        icon: Activity,
        titleEn: 'Engage with Ecosystem',
        titleKr: '생태계 활동 참여',
        descEn: 'Participation, activity, and retention can strengthen the value of the mining experience.',
        descKr: '참여도, 활동성, 체류시간은 채굴 경험의 가치를 더욱 강화할 수 있습니다.',
    },
    {
        icon: Coins,
        titleEn: 'Receive KORI Rewards',
        titleKr: 'KORI 보상 연결',
        descEn: 'Mining connects to the KORI reward structure as part of the larger ecosystem model.',
        descKr: '채굴은 더 큰 생태계 모델 안에서 KORI 보상 구조와 연결됩니다.',
    },
    {
        icon: Layers3,
        titleEn: 'Expand Utility',
        titleKr: '유틸리티 확장',
        descEn: 'Reward logic can link naturally into wallet, payment, service, and ecosystem expansion.',
        descKr: '보상 로직은 지갑, 결제, 서비스, 생태계 확장 구조로 자연스럽게 연결될 수 있습니다.',
    },
    ];

    const valuePoints = [
    {
        titleEn: 'Accessible Ecosystem Entry',
        titleKr: '쉬운 생태계 진입',
        descEn:
        'Mobile mining lowers the barrier to entry and provides users with a familiar starting point inside the KORION ecosystem.',
        descKr:
        '모바일 채굴은 진입장벽을 낮추고 사용자가 KORION 생태계 안에서 익숙한 방식으로 시작할 수 있는 출발점을 제공합니다.',
    },
    {
        titleEn: 'Retention Through Participation',
        titleKr: '참여를 통한 체류 강화',
        descEn:
        'A mining system connected to participation can support stronger retention and more meaningful ecosystem activity.',
        descKr:
        '참여와 연결된 채굴 구조는 더 강한 체류시간과 의미 있는 생태계 활동을 뒷받침할 수 있습니다.',
    },
    {
        titleEn: 'Token Utility Narrative',
        titleKr: '토큰 유틸리티 서사 강화',
        descEn:
        'Mining reinforces the token economy by linking user action, reward design, and service expansion into one coherent story.',
        descKr:
        '채굴은 사용자 행동, 보상 설계, 서비스 확장을 하나의 흐름으로 연결해 토큰 경제 서사를 강화합니다.',
    },
    ];

    export function MiningPage() {
    const { t } = useLanguage();

    return (
        <div className="mining-page">
        <section className="mining-hero">
            <div className="mining-hero__bg" />
            <div className="mining-hero__grid" />
            <div className="mining-page__container">
            <div className="mining-hero__content">
                <motion.div
                className="mining-hero__badge"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                >
                <BadgeCheck size={16} />
                <span>{t('MOBILE MINING', '모바일 채굴')}</span>
                </motion.div>

                <motion.h1
                className="mining-hero__title"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.8 }}
                >
                {t(
                    'A mobile mining layer designed to connect participation and ecosystem growth',
                    '참여와 생태계 성장을 연결하는 모바일 채굴 레이어'
                )}
                </motion.h1>

                <motion.p
                className="mining-hero__subtitle"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.84, delay: 0.08 }}
                >
                {t(
                    'KORION Mining is designed as a mobile-first participation model that can connect users, rewards, and ecosystem utility within one structured framework.',
                    'KORION Mining은 사용자, 보상, 생태계 유틸리티를 하나의 구조 안에서 연결할 수 있는 모바일 중심 참여 모델로 설계됩니다.'
                )}
                </motion.p>

                <motion.div
                className="mining-hero__actions"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.84, delay: 0.14 }}
                >
                <Link to="/ecosystem" className="mining-btn mining-btn--primary">
                    {t('Get Started', '시작하기')}
                    
                    <ChevronRight size={16} />
                </Link>

                <Link to="/whitepaper" className="mining-btn mining-btn--ghost">
                    {t('Whitepaper', '백서')}
                    <ChevronRight size={16} />
                </Link>
                </motion.div>

                <motion.div
                className="mining-hero__stats"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.84, delay: 0.2 }}
                >
                <div className="mining-stat">
                    <strong>{t('Mobile Entry', '모바일 진입')}</strong>
                    <span>{t('User-friendly access', '쉬운 참여 구조')}</span>
                </div>
                <div className="mining-stat">
                    <strong>{t('KORI Rewards', 'KORI 보상')}</strong>
                    <span>{t('Linked reward logic', '보상 연결 구조')}</span>
                </div>
                <div className="mining-stat">
                    <strong>{t('Ecosystem Utility', '생태계 유틸리티')}</strong>
                    <span>{t('Participation-driven value', '참여 기반 가치')}</span>
                </div>
                </motion.div>
            </div>

            <motion.div
                className="mining-hero__visual"
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.9 }}
            >
                <div className="mining-orbit mining-orbit--one" />
                <div className="mining-orbit mining-orbit--two" />
                <div className="mining-glow mining-glow--one" />
                <div className="mining-glow mining-glow--two" />

                <div className="mining-core-card">
                <div className="mining-core-card__icon">
                    <Pickaxe size={28} />
                </div>
                <h3>{t('KORION Mining', 'KORION 채굴')}</h3>
                <p>
                    {t(
                    'A structured participation layer designed for ecosystem entry and long-term utility.',
                    '생태계 진입과 장기 유틸리티를 위한 구조화된 참여 레이어.'
                    )}
                </p>
                </div>

                <div className="mining-float mining-float--left">
                <Smartphone size={18} />
                <span>{t('Mobile First', '모바일 중심')}</span>
                </div>

                <div className="mining-float mining-float--right">
                <Coins size={18} />
                <span>{t('Reward Logic', '보상 구조')}</span>
                </div>

                <div className="mining-float mining-float--bottom">
                <Zap size={18} />
                <span>{t('Participation Growth', '참여 성장')}</span>
                </div>
            </motion.div>
            </div>
        </section>

        <section className="mining-section">
            <div className="mining-page__container-01">
            <div className="mining-section__head">
                <span className="mining-section__label">{t('Overview', '개요')}</span>
                <h2>
                {t(
                    'Mining is positioned as a participation framework, not just a feature',
                    '채굴은 단순 기능이 아니라 참여 프레임워크로 설계됩니다'
                )}
                </h2>
                <p>
                {t(
                    'The KORION mining model is designed to connect mobile accessibility, token reward logic, and ecosystem participation into a unified growth structure.',
                    'KORION 채굴 모델은 모바일 접근성, 토큰 보상 구조, 생태계 참여를 하나의 성장 구조로 연결하도록 설계됩니다.'
                )}
                </p>
            </div>

            <div className="mining-feature-grid">
                {miningFeatures.map((item) => {
                const Icon = item.icon;
                return (
                    <motion.div
                    key={item.titleEn}
                    className="mining-feature-card"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55 }}
                    >
                    <div className="mining-feature-card__icon">
                        <Icon size={20} />
                    </div>
                    <h3>{t(item.titleEn, item.titleKr)}</h3>
                    <p>{t(item.descEn, item.descKr)}</p>
                    </motion.div>
                );
                })}
            </div>
            </div>
        </section>

        <section className="mining-section mining-section--deep">
            <div className="mining-page__container-01">
            <div className="mining-section__head">
                <span className="mining-section__label">{t('Flow', '구조')}</span>
                <h2>
                {t(
                    'A mining flow connected to user journey and utility expansion',
                    '사용자 여정과 유틸리티 확장에 연결되는 채굴 흐름'
                )}
                </h2>
            </div>

            <div className="mining-flow-grid">
                {miningFlow.map((item) => {
                const Icon = item.icon;
                return (
                    <div key={item.titleEn} className="mining-flow-card">
                    <div className="mining-flow-card__icon">
                        <Icon size={20} />
                    </div>
                    <h3>{t(item.titleEn, item.titleKr)}</h3>
                    <p>{t(item.descEn, item.descKr)}</p>
                    <ArrowUpRight size={16} className="mining-flow-card__arrow" />
                    </div>
                );
                })}
            </div>
            </div>
        </section>

        <section className="mining-section">
            <div className="mining-page__container-01">
            <div className="mining-section__head">
                <span className="mining-section__label">{t('Value', '가치')}</span>
                <h2>
                {t(
                    'Why mobile mining matters inside the KORION ecosystem',
                    '왜 모바일 채굴이 KORION 생태계 안에서 중요한가'
                )}
                </h2>
            </div>

            <div className="mining-value-list">
                {valuePoints.map((item) => (
                <div key={item.titleEn} className="mining-value-item">
                    <ShieldCheck size={18} />
                    <div>
                    <h3>{t(item.titleEn, item.titleKr)}</h3>
                    <p>{t(item.descEn, item.descKr)}</p>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>

        <section className="mining-section mining-section--deep">
            <div className="mining-page__container-01">
            <div className="mining-cta-box">
                <div className="mining-cta-box__label">
                <Sparkles size={16} />
                <span>{t('KORION Mining', 'KORION 채굴')}</span>
                </div>

                <h2>
                {t(
                    'A mobile-first mining model designed for ecosystem growth',
                    '생태계 성장을 위해 설계된 모바일 중심 채굴 모델'
                )}
                </h2>

                <p>
                {t(
                    'KORION Mining is structured to connect user participation, KORI rewards, and long-term ecosystem utility in one continuous framework.',
                    'KORION Mining은 사용자 참여, KORI 보상, 장기적인 생태계 유틸리티를 하나의 연속된 구조로 연결하도록 설계됩니다.'
                )}
                </p>

                <div className="mining-cta-box__actions">
                <Link to="/whitepaper" className="mining-btn mining-btn--primary">
                    {t('Read Whitepaper', '백서 보기')}
                    <ChevronRight size={16} />
                </Link>

                <Link to="/tokenomics" className="mining-btn mining-btn--ghost">
                    {t('View Tokenomics', '토크노믹스 보기')}
                    <ChevronRight size={16} />
                </Link>
                </div>
            </div>
            </div>
        </section>
        </div>
    );
    }