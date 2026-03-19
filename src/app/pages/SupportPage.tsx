import { motion } from 'motion/react';
import {
  BadgeCheck,
  BellRing,
  ChevronRight,
  FileText,
  Globe,
  Headphones,
  HelpCircle,
  LifeBuoy,
  Mail,
  MessageSquareMore,
  ShieldCheck,
  Wallet,
} from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import './SupportPage.css';

const supportHighlights = [
  {
    icon: Headphones,
    titleEn: 'Dedicated Support',
    titleKo: '전담 지원',
    descEn:
      'Fast and structured assistance for wallet, platform, and ecosystem-related inquiries.',
    descKo:
      '지갑, 플랫폼, 생태계 관련 문의에 대해 빠르고 체계적인 지원을 제공합니다.',
  },
  {
    icon: ShieldCheck,
    titleEn: 'Security First',
    titleKo: '보안 우선',
    descEn:
      'Support processes are designed to protect account integrity, transaction safety, and user trust.',
    descKo:
      '고객지원 절차는 계정 무결성, 거래 안전성, 사용자 신뢰를 최우선으로 설계되었습니다.',
  },
  {
    icon: BadgeCheck,
    titleEn: 'Verified Guidance',
    titleKo: '검증된 안내',
    descEn:
      'Receive official guidance for usage, verification, wallet operations, and service policies.',
    descKo:
      '이용 방법, 인증, 지갑 운영, 서비스 정책에 대해 공식적이고 검증된 안내를 받을 수 있습니다.',
  },
];

const supportChannels = [
  {
    icon: Mail,
    titleEn: 'Email Support',
    titleKo: '이메일 지원',
    descEn:
      'For account, service, or operational inquiries requiring detailed assistance.',
    descKo:
      '계정, 서비스, 운영 관련 문의 등 상세한 안내가 필요한 경우 이메일로 지원합니다.',
    value: 'dianainteen@dianainteen.com',
    href: 'mailto:dianainteen@dianainteen.com',
  },
  {
    icon: MessageSquareMore,
    titleEn: 'Community Help',
    titleKo: '커뮤니티 안내',
    descEn:
      'Stay updated on announcements, campaigns, and community-based support channels.',
    descKo:
      '공지사항, 캠페인, 커뮤니티 기반 지원 채널에서 최신 정보를 확인할 수 있습니다.',
    value: 'Telegram Community',
    href: 'https://t.me/KORION_Official_chat',
  },
  {
    icon: BellRing,
    titleEn: 'Announcements',
    titleKo: '공지사항',
    descEn:
      'Check important service notices, maintenance guidance, and ecosystem updates.',
    descKo:
      '중요한 서비스 안내, 점검 공지, 생태계 업데이트를 확인할 수 있습니다.',
    value: 'Service Notices',
    href: '/news',
  },
];

const helpCategories = [
  {
    icon: Wallet,
    titleEn: 'Wallet & Asset',
    titleKo: '지갑 및 자산',
    itemsEn: [
      'Deposit and withdrawal guidance',
      'Wallet usage and balance checks',
      'Transaction status inquiries',
    ],
    itemsKo: [
      '입출금 안내',
      '지갑 사용 및 잔액 확인',
      '거래 상태 문의',
    ],
  },
  {
    icon: ShieldCheck,
    titleEn: 'Account & Security',
    titleKo: '계정 및 보안',
    itemsEn: [
      'Login and access issues',
      'Account verification support',
      'Security-related reporting',
    ],
    itemsKo: [
      '로그인 및 접근 문제',
      '계정 인증 지원',
      '보안 관련 신고',
    ],
  },
  {
    icon: FileText,
    titleEn: 'Policy & Service',
    titleKo: '정책 및 서비스',
    itemsEn: [
      'Operational policy guidance',
      'Service updates and notices',
      'Terms and usage information',
    ],
    itemsKo: [
      '운영 정책 안내',
      '서비스 업데이트 및 공지',
      '이용 관련 정보',
    ],
  },
];

const faqItems = [
  {
    qEn: 'How do I contact support for account-related issues?',
    qKo: '계정 관련 문제는 어떻게 문의하나요?',
    aEn:
      'You can contact the support team through the official support email with a detailed description of the issue.',
    aKo:
      '문제 내용을 구체적으로 작성하여 공식 지원 이메일로 문의하시면 고객지원팀이 확인 후 안내합니다.',
  },
  {
    qEn: 'Where can I check service notices or updates?',
    qKo: '서비스 공지나 업데이트는 어디서 확인하나요?',
    aEn:
      'Important notices and service updates are provided through the official announcement and support channels.',
    aKo:
      '중요 공지 및 서비스 업데이트는 공식 공지사항 및 지원 채널을 통해 안내됩니다.',
  },
  {
    qEn: 'What information should I include when submitting an inquiry?',
    qKo: '문의 접수 시 어떤 정보를 함께 보내야 하나요?',
    aEn:
      'Include the issue summary, related account or wallet information, screenshots if available, and the time of occurrence.',
    aKo:
      '문의 요약, 관련 계정 또는 지갑 정보, 가능하다면 스크린샷, 발생 시점을 함께 전달해주시면 확인이 더 빠릅니다.',
  },
];

export function SupportPage() {
  const { language } = useLanguage();
  const isKo = language === 'KR';

  return (
    <div className="support-page">
      <div className="support-page__container">
        <section className="support-page__top-intro">
          <motion.div
            className="support-page__intro-shell"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="support-page__eyebrow">
              <LifeBuoy size={16} />
              <span>{isKo ? '고객 지원 센터' : 'Support Center'}</span>
            </div>

            <div className="support-page__intro-grid">
              <div className="support-page__intro-main">
                <h1 className="support-page__title">
                  {isKo
                    ? '신속하고 신뢰할 수 있는 지원을 위한 공식 고객지원 센터'
                    : 'Official support center for fast, reliable assistance'}
                </h1>
                <p className="support-page__description">
                  {isKo
                    ? 'KORION 고객지원 센터는 서비스 이용, 지갑 운영, 계정 문의, 공지 확인 등 주요 지원 항목을 체계적으로 안내합니다. 실사용자와 파트너 모두가 신뢰할 수 있는 지원 경험을 목표로 설계되었습니다.'
                    : 'The KORION Support Center provides structured assistance for service usage, wallet operations, account inquiries, and official notices. It is designed to deliver a reliable support experience for both users and partners.'}
                </p>

                <div className="support-page__quick-actions">
                  <a
                    href="mailto:dianainteen@dianainteen.com"
                    className="support-page__primary-action"
                  >
                    <Mail size={18} />
                    <span>{isKo ? '이메일 문의' : 'Contact by Email'}</span>
                  </a>

                  <a
                    href="/developers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="support-page__secondary-action"
                  >
                    <HelpCircle size={18} />
                    <span>{isKo ? '개발자 자료' : 'Developer Resources'}</span>
                  </a>
                </div>
              </div>

              <div className="support-page__status-panel">
                <div className="support-page__status-card">
                  <div className="support-page__status-icon">
                    <BadgeCheck size={18} />
                  </div>
                  <div>
                    <strong>{isKo ? '공식 지원 운영' : 'Official Support'}</strong>
                    <p>
                      {isKo
                        ? '정책, 계정, 서비스 관련 문의를 공식 채널로 접수할 수 있습니다.'
                        : 'Submit policy, account, and service-related inquiries through official channels.'}
                    </p>
                  </div>
                </div>

                <div className="support-page__status-card">
                  <div className="support-page__status-icon">
                    <Globe size={18} />
                  </div>
                  <div>
                    <strong>{isKo ? '서비스 정보 확인' : 'Service Information'}</strong>
                    <p>
                      {isKo
                        ? '중요 공지와 운영 업데이트를 지원 페이지에서 빠르게 확인할 수 있습니다.'
                        : 'Check important service notices and operational updates quickly from support pages.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="support-page__highlights">
          <div className="support-page__section-heading">
            <span>{isKo ? '핵심 지원 가치' : 'Core Support Values'}</span>
            <h2>
              {isKo
                ? '더 전문적이고 안정적인 고객지원 경험'
                : 'A more professional and dependable support experience'}
            </h2>
          </div>

          <div className="support-page__highlight-grid">
            {supportHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.titleEn}
                  className="support-page__highlight-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  <div className="support-page__highlight-icon">
                    <Icon size={20} />
                  </div>
                  <h3>{isKo ? item.titleKo : item.titleEn}</h3>
                  <p>{isKo ? item.descKo : item.descEn}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="support-page__channels">
          <div className="support-page__section-heading">
            <span>{isKo ? '문의 채널' : 'Support Channels'}</span>
            <h2>
              {isKo
                ? '필요한 방식으로 빠르게 연결되는 지원 구조'
                : 'A support structure that connects you through the right channel'}
            </h2>
          </div>

          <div className="support-page__channel-grid">
            {supportChannels.map((channel, index) => {
              const Icon = channel.icon;

              const content = (
                <>
                  <div className="support-page__channel-top">
                    <div className="support-page__channel-icon">
                      <Icon size={19} />
                    </div>
                    <ChevronRight size={18} />
                  </div>

                  <h3>{isKo ? channel.titleKo : channel.titleEn}</h3>
                  <p>{isKo ? channel.descKo : channel.descEn}</p>
                  <strong>{channel.value}</strong>
                </>
              );

              return channel.href.startsWith('mailto:') ? (
                <motion.a
                  key={channel.titleEn}
                  href={channel.href}
                  className="support-page__channel-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  {content}
                </motion.a>
              ) : (
                <motion.div
                  key={channel.titleEn}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  <Link to={channel.href} className="support-page__channel-card">
                    {content}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="support-page__categories">
          <div className="support-page__section-heading">
            <span>{isKo ? '지원 범위' : 'Support Scope'}</span>
            <h2>
              {isKo
                ? '주요 문의 항목을 한눈에 확인할 수 있습니다'
                : 'Key support categories at a glance'}
            </h2>
          </div>

          <div className="support-page__category-grid">
            {helpCategories.map((category, index) => {
              const Icon = category.icon;
              const items = isKo ? category.itemsKo : category.itemsEn;

              return (
                <motion.article
                  key={category.titleEn}
                  className="support-page__category-card"
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  <div className="support-page__category-header">
                    <div className="support-page__category-icon">
                      <Icon size={20} />
                    </div>
                    <h3>{isKo ? category.titleKo : category.titleEn}</h3>
                  </div>

                  <ul>
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="support-page__faq">
          <div className="support-page__section-heading">
            <span>{isKo ? '자주 묻는 질문' : 'Frequently Asked Questions'}</span>
            <h2>
              {isKo
                ? '기본적인 문의는 여기서 빠르게 확인하세요'
                : 'Quick answers to common support questions'}
            </h2>
          </div>

          <div className="support-page__faq-list">
            {faqItems.map((item, index) => (
              <motion.article
                key={item.qEn}
                className="support-page__faq-item"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
              >
                <div className="support-page__faq-q">
                  <HelpCircle size={18} />
                  <h3>{isKo ? item.qKo : item.qEn}</h3>
                </div>
                <p>{isKo ? item.aKo : item.aEn}</p>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}