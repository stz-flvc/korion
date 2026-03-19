import { motion } from 'motion/react';
import {
    BadgeCheck,
    ChevronRight,
    Mic,
    Users,
    MessageCircle,
    Radio,
    HeartHandshake,
    Gamepad2,
    Sparkles,
    Coins,
    ShieldCheck,
    Phone,
    UserRound,
    MessagesSquare,
    Headphones,
    Layers3,
    Trophy,
    Star,
    } from 'lucide-react';
    import { Link } from 'react-router';
    import { ImageWithFallback } from '../components/figma/ImageWithFallback';
    import { useLanguage } from '../contexts/LanguageContext';
    import './FoxyyaPage.css';
    import { useAssetUrl } from '../utils/assetLoader';
    import { FaGooglePlay, FaApple } from 'react-icons/fa';
    const serviceCards = [
    {
        icon: MessageCircle,
        titleEn: 'Community & Chat',
        titleKr: '커뮤니티 & 채팅',
        descEn:
        'Users can communicate through community spaces, chat features, and interactive participation flows built around real-time social engagement.',
        descKr:
        '사용자는 커뮤니티 공간과 채팅 기능을 통해 실시간 소셜 참여 중심의 상호작용을 경험할 수 있습니다.',
    },
    {
        icon: HeartHandshake,
        titleEn: 'Family Group & Agency',
        titleKr: '패밀리그룹 & 에이전시',
        descEn:
        'Foxyya includes social organization layers such as family groups and agency structures that strengthen belonging, retention, and user-driven activity.',
        descKr:
        'Foxyya는 패밀리그룹과 에이전시 같은 조직형 구조를 포함하여 소속감, 체류시간, 사용자 중심 활동성을 강화합니다.',
    },
    {
        icon: Phone,
        titleEn: 'Random Call & Voice Matching',
        titleKr: '랜덤통화 & 음성 매칭',
        descEn:
        'Users can discover and connect with others through random voice calls and matching-based interaction experiences.',
        descKr:
        '사용자는 랜덤 음성 통화와 매칭형 상호작용을 통해 새로운 연결과 참여를 경험할 수 있습니다.',
    },
    {
        icon: Radio,
        titleEn: 'Group Live & Personal Live',
        titleKr: '그룹라이브 & 개인라이브',
        descEn:
        'Foxyya supports both personal live rooms and group-based live experiences, enabling a broad range of creator and community formats.',
        descKr:
        'Foxyya는 개인 라이브와 그룹 기반 라이브를 모두 지원하여 다양한 크리에이터 및 커뮤니티 운영 방식을 담을 수 있습니다.',
    },
    {
        icon: Gamepad2,
        titleEn: 'Interactive Game Broadcasts',
        titleKr: '참여형 게임 방송',
        descEn:
        'Live rooms can evolve beyond simple audio streams into participatory game experiences shared by hosts and members together.',
        descKr:
        '라이브룸은 단순한 음성 방송을 넘어 진행자와 회원이 함께 참여하는 게임형 콘텐츠 공간으로 확장될 수 있습니다.',
    },
    {
        icon: Sparkles,
        titleEn: 'Concert & Event Live Content',
        titleKr: '콘서트 & 이벤트 방송',
        descEn:
        'The platform can support event-oriented and entertainment-oriented live content such as concerts, themed broadcasts, and special sessions.',
        descKr:
        '플랫폼은 콘서트, 테마 방송, 특별 세션과 같은 이벤트형·엔터테인먼트형 라이브 콘텐츠를 담을 수 있습니다.',
    },
    ];

    const miningPoints = [
    {
        icon: Coins,
        titleEn: 'KORI Payment Utility',
        titleKr: 'KORI 결제 유틸리티',
        descEn:
        'Foxyya is positioned as a service platform where payments can be made with KORION KORI, connecting entertainment and ecosystem utility.',
        descKr:
        'Foxyya는 KORION KORI로 결제가 가능한 서비스 플랫폼으로 설계되어, 엔터테인먼트와 생태계 유틸리티를 연결합니다.',
    },
    {
        icon: Trophy,
        titleEn: 'Participation-Based Mining Efficiency',
        titleKr: '참여도 기반 채굴 효율 상승',
        descEn:
        'User participation inside the platform can be connected to mining efficiency, creating a stronger incentive structure across service activity.',
        descKr:
        '플랫폼 내 참여도는 채굴 효율 상승과 연결될 수 있어, 서비스 활동 전반에 더 강한 인센티브 구조를 형성합니다.',
    },
    {
        icon: Mic,
        titleEn: 'Host Participation Mining',
        titleKr: '진행자 참여 채굴',
        descEn:
        'Broadcast hosts can participate in the platform economy through activity, engagement, and audience-based contribution structures.',
        descKr:
        '방송 진행자는 활동성과 참여도, 청취자 반응 기반 구조를 통해 플랫폼 경제에 참여할 수 있습니다.',
    },
    {
        icon: Headphones,
        titleEn: 'Listener Participation Mining',
        titleKr: '청취자 참여 채굴',
        descEn:
        'Listeners are not passive users. Through participation, engagement, and contribution, they can also connect to KORI mining opportunities.',
        descKr:
        '청취자는 단순 소비자가 아니라 참여와 활동, 기여를 통해 KORI 채굴과 연결될 수 있는 구조를 가집니다.',
    },
    ];

    const ecosystemPoints = [
    {
        titleEn: 'Entertainment + Utility',
        titleKr: '엔터테인먼트 + 유틸리티',
        descEn:
        'Foxyya is not just a content service. It is designed as a platform where fun, participation, and token utility come together.',
        descKr:
        'Foxyya는 단순한 콘텐츠 서비스가 아니라 재미, 참여, 토큰 유틸리티가 함께 작동하는 플랫폼으로 설계됩니다.',
    },
    {
        titleEn: 'Service-Led Ecosystem Entry',
        titleKr: '서비스 중심 생태계 진입',
        descEn:
        'Users can encounter KORION naturally through service participation rather than through technical onboarding alone.',
        descKr:
        '사용자는 기술적 진입장벽이 아니라 실제 서비스 참여를 통해 자연스럽게 KORION 생태계를 경험할 수 있습니다.',
    },
    {
        titleEn: 'Retention Through Social Structure',
        titleKr: '소셜 구조 기반 체류시간 강화',
        descEn:
        'Community, family groups, live rooms, and content loops create a stronger long-term retention model.',
        descKr:
        '커뮤니티, 패밀리그룹, 라이브룸, 콘텐츠 순환 구조는 장기 체류를 강화하는 모델을 형성합니다.',
    },
    ];

    export function FoxyyaPage() {
    const { t } = useLanguage();
    const foxyyaLogo = useAssetUrl(
        'foxyya-logo',
        () => import('../../assets/foxyya/foxyya-logo.png')
    );
    const foxyyaHomeImage = useAssetUrl(
        'foxyya-home-image',
        () => import('../../assets/foxyya/foxyya-home.png')
    );
    const foxyyaCommunityImage = useAssetUrl(
        'foxyya-community-image',
        () => import('../../assets/foxyya/foxyya-community.png')
    );

    return (
        <div className="foxyya-page">
        <section className="foxyya-hero">
            <div className="foxyya-hero__bg" />
            <div className="foxyya-hero__grid" />
            <div className="foxyya-page__container">
            <div className="foxyya-hero__content">
                <motion.div
                className="foxyya-hero__badge"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                >
                <BadgeCheck size={16} />
                <span>{t('SOCIAL LIVE PLATFORM', '소셜 라이브 플랫폼')}</span>
                </motion.div>

                <motion.div
                className="foxyya-hero__brand"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.7 }}
                >
                <ImageWithFallback src={foxyyaLogo || undefined} alt="Foxyya" className="foxyya-hero__logo" />
                <span className="foxyya-hero__brand-name">Foxyya</span>
                </motion.div>

                <motion.h1
                className="foxyya-hero__title"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.8 }}
                >
                {t(
                    'A participation-driven live social platform connected to KORION',
                    'KORION과 연결되는 참여형 라이브 소셜 플랫폼'
                )}
                </motion.h1>

                <motion.p
                className="foxyya-hero__subtitle"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.84, delay: 0.08 }}
                >
                {t(
                    'Foxyya is a platform that brings together community, chat, family groups, agency systems, anonymous boards, random calls, group live, personal live, interactive game broadcasts, concert streams, and practical KORI utility into one service experience.',
                    'Foxyya는 커뮤니티, 채팅, 패밀리그룹, 에이전시, 익명게시판, 랜덤통화, 그룹라이브, 개인라이브, 참여형 게임방송, 콘서트방송, 그리고 실질적인 KORI 유틸리티를 하나의 서비스 경험으로 통합하는 플랫폼입니다.'
                )}
                </motion.p>

                <div className="foxyya-hero__actions">

                <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="foxyya-btn foxyya-btn--primary"
                >
                    <FaGooglePlay size={18} />
                    {t('Google Play (To be released)', '구글 플레이 (출시 예정)')}
                </a>

                <a
                    href="https://apps.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="foxyya-btn foxyya-btn--primary"
                >
                    <FaApple size={18} />
                    {t('App Store (To be released)', '앱스토어 (출시 예정)')}
                </a>

                </div>

                <motion.div
                className="foxyya-hero__stats"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.84, delay: 0.2 }}
                >
                <div className="foxyya-stat">
                    <strong>{t('KORI Payment', 'KORI 결제')}</strong>
                    <span>{t('Utility inside service', '서비스 내 유틸리티')}</span>
                </div>
                <div className="foxyya-stat">
                    <strong>{t('Participation Mining', '참여형 채굴')}</strong>
                    <span>{t('Hosts and listeners', '진행자와 청취자')}</span>
                </div>
                <div className="foxyya-stat">
                    <strong>{t('Social Live Ecosystem', '소셜 라이브 생태계')}</strong>
                    <span>{t('Community-driven retention', '참여 기반 체류 구조')}</span>
                </div>
                </motion.div>
            </div>

            <motion.div
                className="foxyya-hero__visual"
                initial={{ opacity: 0, scale: 0.96, y: 18 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.9 }}
            >
                <div className="foxyya-phone foxyya-phone--home">
                <div className="foxyya-phone__label">{t('Home', '홈')}</div>
                <ImageWithFallback src={foxyyaHomeImage || undefined} alt="Foxyya Home" />
                </div>

                <div className="foxyya-phone foxyya-phone--community">
                <div className="foxyya-phone__label">{t('Community', '커뮤니티')}</div>
                <ImageWithFallback src={foxyyaCommunityImage || undefined} alt="Foxyya Community" />
                </div>

                <div className="foxyya-floating-badge foxyya-floating-badge--pay">
                <Coins size={16} />
                <span>{t('KORI Payment', 'KORI 결제')}</span>
                </div>

                <div className="foxyya-floating-badge foxyya-floating-badge--mine">
                <Sparkles size={16} />
                <span>{t('Participation Mining', '참여형 채굴')}</span>
                </div>
            </motion.div>
            </div>
        </section>

        <section className="foxyya-section">
            <div className="foxyya-page__container-01">
            <div className="foxyya-section__head">
                <span className="foxyya-section__label">{t('Platform Overview', '플랫폼 개요')}</span>
                <h2>
                {t(
                    'Foxyya is a service platform where community, voice, and participation meet',
                    'Foxyya는 커뮤니티, 음성, 참여가 만나는 서비스 플랫폼입니다'
                )}
                </h2>
                <p>
                {t(
                    'Rather than being limited to one function, Foxyya is designed as a multi-service platform where communication, live content, relationship building, and user activity gather into one structured ecosystem.',
                    'Foxyya는 하나의 기능에 머무르지 않고, 소통, 라이브 콘텐츠, 관계 형성, 사용자 활동이 하나의 구조화된 생태계 안으로 모이는 멀티서비스 플랫폼으로 설계됩니다.'
                )}
                </p>
            </div>

            <div className="foxyya-service-grid">
                {serviceCards.map((item) => {
                const Icon = item.icon;
                return (
                    <motion.div
                    key={item.titleEn}
                    className="foxyya-service-card"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55 }}
                    >
                    <div className="foxyya-service-card__icon">
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

        <section className="foxyya-section foxyya-section--deep">
            <div className="foxyya-page__container-01">
            <div className="foxyya-section__head">
                <span className="foxyya-section__label">{t('KORI Utility', 'KORI 유틸리티')}</span>
                <h2>
                {t(
                    'Foxyya connects service activity with KORI payment and mining structure',
                    'Foxyya는 서비스 활동을 KORI 결제와 채굴 구조에 연결합니다'
                )}
                </h2>
                <p>
                {t(
                    'Inside Foxyya, KORION KORI is positioned not only as a token, but as a service-linked utility connected to payment, participation, and incentive design.',
                    'Foxyya 안에서 KORION KORI는 단순한 토큰이 아니라 결제, 참여, 인센티브 설계와 연결되는 서비스형 유틸리티로 자리잡습니다.'
                )}
                </p>
            </div>

            <div className="foxyya-mining-grid">
                {miningPoints.map((item) => {
                const Icon = item.icon;
                return (
                    <div key={item.titleEn} className="foxyya-mining-card">
                    <div className="foxyya-mining-card__icon">
                        <Icon size={20} />
                    </div>
                    <h3>{t(item.titleEn, item.titleKr)}</h3>
                    <p>{t(item.descEn, item.descKr)}</p>
                    </div>
                );
                })}
            </div>
            </div>
        </section>

        <section className="foxyya-section">
            <div className="foxyya-page__container-01">
            <div className="foxyya-layout-grid">
                <div className="foxyya-preview-card">
                <div className="foxyya-preview-card__header">
                    <Mic size={18} />
                    <span>{t('Home Screen Inspiration', '홈 화면 구조')}</span>
                </div>
                <ImageWithFallback src={foxyyaHomeImage || undefined} alt="Foxyya home preview" className="foxyya-preview-card__image" />
                <div className="foxyya-preview-card__text">
                    <h3>{t('Service Entry Hub', '서비스 진입 허브')}</h3>
                    <p>
                    {t(
                        'The home screen structure emphasizes service entry points such as caves, random calls, live sections, and category navigation to maximize intuitive participation.',
                        '홈 화면은 동굴, 랜덤통화, 라이브 섹션, 카테고리 탐색 등 서비스 진입 포인트를 전면에 배치하여 직관적인 참여를 강화합니다.'
                    )}
                    </p>
                </div>
                </div>

                <div className="foxyya-preview-card">
                <div className="foxyya-preview-card__header">
                    <MessagesSquare size={18} />
                    <span>{t('Community Screen Inspiration', '커뮤니티 화면 구조')}</span>
                </div>
                <ImageWithFallback
                    src={foxyyaCommunityImage}
                    alt="Foxyya community preview"
                    className="foxyya-preview-card__image"
                />
                <div className="foxyya-preview-card__text">
                    <h3>{t('Social Retention Layer', '소셜 체류 레이어')}</h3>
                    <p>
                    {t(
                        'The community layout reflects a feed-based interaction model where follow relationships, posts, comments, and content sharing strengthen retention and participation.',
                        '커뮤니티 화면은 팔로우 관계, 게시글, 댓글, 공유를 중심으로 한 피드형 상호작용 구조를 통해 체류시간과 참여도를 강화합니다.'
                    )}
                    </p>
                </div>
                </div>
            </div>
            </div>
        </section>

        <section className="foxyya-section foxyya-section--deep">
            <div className="foxyya-page__container-01">
            <div className="foxyya-section__head">
                <span className="foxyya-section__label">{t('Ecosystem Value', '생태계 가치')}</span>
                <h2>
                {t(
                    'Why Foxyya matters inside the KORION ecosystem',
                    '왜 Foxyya가 KORION 생태계 안에서 중요한가'
                )}
                </h2>
            </div>

            <div className="foxyya-value-list">
                {ecosystemPoints.map((item) => (
                <div key={item.titleEn} className="foxyya-value-item">
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

        <section className="foxyya-section">
            <div className="foxyya-page__container-01">
            <div className="foxyya-cta-box">
                <div className="foxyya-cta-box__label">
                <Star size={16} />
                <span>Foxyya</span>
                </div>
                <h2>
                {t(
                    'Entertainment, community, participation, and KORI utility in one platform',
                    '엔터테인먼트, 커뮤니티, 참여, 그리고 KORI 유틸리티가 하나의 플랫폼으로'
                )}
                </h2>
                <p>
                {t(
                    'Foxyya is designed as a next-generation service platform where social live content and KORION ecosystem utility can grow together.',
                    'Foxyya는 소셜 라이브 콘텐츠와 KORION 생태계 유틸리티가 함께 성장할 수 있는 차세대 서비스 플랫폼으로 설계됩니다.'
                )}
                </p>

                <div className="foxyya-cta-box__actions">
                <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="foxyya-btn foxyya-btn--primary"
                >
                    <FaGooglePlay size={18} />
                    {t('Google Play', '구글 플레이')}
                </a>

                <a
                    href="https://apps.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="foxyya-btn foxyya-btn--primary"
                >
                    <FaApple size={18} />
                    {t('App Store', '앱스토어')}
                </a>
                </div>
            </div>
            </div>
        </section>
        </div>
    );
    }
