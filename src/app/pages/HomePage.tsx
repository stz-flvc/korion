import React, { useEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import {
  Smartphone,
  CheckCircle,
  ArrowRight,
  Target,
  Rocket,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  Cpu,
  Users,
  Award,
  Download,
  Sparkles,
  Layers3,
  Lock,
  WalletCards,
  Network,
  BadgeCheck,
  ChevronRight,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useReveal } from '../hooks/useReveal';
import korionLogo from '../../assets/logo/korion-ek-logo.png';
import './homepage.css';

export function HomePage() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const pageRef = useReveal<HTMLDivElement>();

  const heroRef = useRef<HTMLElement | null>(null);
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const smoothRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const hero = heroRef.current;
    const scene = sceneRef.current;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (!hero || !scene || prefersReducedMotion || !supportsHover) {
      return;
    }

    let rafId = 0;

    const animate = () => {
      const smooth = smoothRef.current;
      const pointer = pointerRef.current;

      smooth.x += (pointer.x - smooth.x) * 0.08;
      smooth.y += (pointer.y - smooth.y) * 0.08;

      const rotateX = smooth.y * -9;
      const rotateY = smooth.x * 14;
      const moveX = smooth.x * 22;
      const moveY = smooth.y * 16;
      const glowX = 50 + smooth.x * 16;
      const glowY = 50 + smooth.y * 16;

      hero.style.setProperty('--mx', `${smooth.x}`);
      hero.style.setProperty('--my', `${smooth.y}`);
      hero.style.setProperty('--glow-x', `${glowX}%`);
      hero.style.setProperty('--glow-y', `${glowY}%`);
      scene.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      rafId = requestAnimationFrame(animate);
    };

    const handleMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      pointerRef.current = {
        x: (x - 0.5) * 2,
        y: (y - 0.5) * 2,
      };
    };

    const handleLeave = () => {
      pointerRef.current = { x: 0, y: 0 };
    };

    hero.addEventListener('mousemove', handleMove, { passive: true });
    hero.addEventListener('mouseleave', handleLeave);
    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      hero.removeEventListener('mousemove', handleMove);
      hero.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  const trustItems = useMemo(
    () => [
      {
        icon: <Shield className="w-5 h-5 text-emerald-300" />,
        label: t('Security Standard', '보안 표준'),
        value: 'EAL5+',
      },
      {
        icon: <Award className="w-5 h-5 text-sky-300" />,
        label: t('Protocol Grade', '프로토콜 등급'),
        value: 'AAA',
      },
      {
        icon: <Globe className="w-5 h-5 text-fuchsia-300" />,
        label: t('Partner Networks', '파트너 네트워크'),
        value: '24+',
      },
      {
        icon: <Users className="w-5 h-5 text-amber-300" />,
        label: t('Community Reach', '커뮤니티 규모'),
        value: '150K+',
      },
    ],
    [t]
  );

  const architectureItems = useMemo(
    () => [
      {
        icon: <WalletCards size={18} />,
        title: t('Wallet Infrastructure', '지갑 인프라'),
        desc: t(
          'Institutional-grade multi-chain asset gateway designed for secure storage, routing, and service integration.',
          '안전한 보관, 라우팅, 서비스 연동을 위한 기관급 멀티체인 자산 게이트웨이입니다.'
        ),
      },
      {
        icon: <Zap size={18} />,
        title: t('Offline Payment Layer', '오프라인 결제 레이어'),
        desc: t(
          'Future-ready payment architecture for fast real-world settlement beyond always-online environments.',
          '항상 온라인이 아니어도 빠른 실사용 결제를 지원하는 미래형 결제 아키텍처입니다.'
        ),
      },
      {
        icon: <Network size={18} />,
        title: t('Platform Expansion', '플랫폼 확장'),
        desc: t(
          'API, SDK, partner services, and real-utility applications designed to scale the ecosystem globally.',
          'API, SDK, 파트너 서비스, 실사용 앱을 통해 글로벌 확장을 목표로 설계되었습니다.'
        ),
      },
    ],
    [t]
  );

  const metrics = useMemo(
    () => [
      {
        label: t('Wallet Infrastructure', '지갑 인프라'),
        value: 'Multi-Chain',
      },
      {
        label: t('Settlement Direction', '정산 방향'),
        value: 'Offline Pay',
      },
      {
        label: t('Developer Expansion', '개발 확장성'),
        value: 'API / SDK',
      },
      {
        label: t('Utility Strategy', '유틸리티 전략'),
        value: 'Real Usage',
      },
    ],
    [t]
  );

  return (
    <div ref={pageRef} className="home-page">
      <section
        ref={heroRef}
        id="hero"
        className="korion-hero"
        style={{ ['--mx' as string]: '0', ['--my' as string]: '0', ['--glow-x' as string]: '50%', ['--glow-y' as string]: '50%' } as React.CSSProperties}
      >
        <div className="korion-hero__noise" />
        <div className="korion-hero__grid" />
        <div className="korion-hero__radial korion-hero__radial--a" />
        <div className="korion-hero__radial korion-hero__radial--b" />
        <div className="korion-hero__radial korion-hero__radial--c" />
        <div className="korion-hero__scanline" />
        <div className="korion-hero__lightbeam" />
        <div className="korion-hero__mesh" />
        <div className="korion-hero__aurora" />

        <div className="korion-hero__container">
          <div className="korion-hero__content">
            <motion.div
              className="korion-hero__badge"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <Sparkles size={14} />
              <span>
                {t(
                  'Next-Generation Digital Asset Ecosystem',
                  '차세대 디지털 자산 생태계'
                )}
              </span>
            </motion.div>

            <motion.h1
              className="korion-hero__title"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
            >
              <span className="korion-hero__title-top">KORION</span>
              <span className="korion-hero__title-bottom">
                {t(
                  'Institutional-Grade Utility for the Next Era of Digital Payments',
                  '차세대 디지털 결제를 위한 기관급 유틸리티 인프라'
                )}
              </span>
            </motion.h1>

            <motion.p
              className="korion-hero__desc"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12 }}
            >
              {t(
                'KORION is a premium digital asset ecosystem built around secure wallet infrastructure, scalable utility services, partner-ready APIs, and future payment experiences designed for both digital finance and real-world use.',
                'KORION은 안전한 지갑 인프라, 확장 가능한 유틸리티 서비스, 파트너 연동형 API, 그리고 실물 경제와 디지털 금융을 연결하는 미래형 결제 경험을 중심으로 구축된 프리미엄 디지털 자산 생태계입니다.'
              )}
            </motion.p>

            <motion.div
              className="korion-hero__actions"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <a href="/tokenomics" className="korion-hero__btn korion-hero__btn--primary">
                {t('View Tokenomics', '토크노믹스')}
                <ArrowRight size={18} />
              </a>
              <a href="#ecosystem" className="korion-hero__btn korion-hero__btn--ghost">
                {t('Explore Ecosystem', '생태계 보기')}
                
              </a>

              <a href="/whitepaper" className="korion-hero__btn korion-hero__btn--ghost">
                {t('View Whitepaper', '백서 보기')}
              </a>
            </motion.div>

            <motion.div
              className="korion-hero__mini-proof"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28 }}
            >
              <div className="korion-hero__mini-proof-item">
                <BadgeCheck size={16} />
                <span>{t('Enterprise-ready architecture', '엔터프라이즈 대응 아키텍처')}</span>
              </div>
              <div className="korion-hero__mini-proof-item">
                <Lock size={16} />
                <span>{t('Security-first infrastructure', '보안 우선 인프라')}</span>
              </div>
              <div className="korion-hero__mini-proof-item">
                <Layers3 size={16} />
                <span>{t('Scalable ecosystem design', '확장형 생태계 설계')}</span>
              </div>
            </motion.div>

            <motion.div
              className="korion-hero__metrics"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.34 }}
            >
              {metrics.map((item, idx) => (
                <div key={idx} className="korion-hero__metric-card">
                  <div className="korion-hero__metric-value">{item.value}</div>
                  <div className="korion-hero__metric-label">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="korion-hero__visual"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.14 }}
          >
            <div
              ref={sceneRef}
              className="korion-crystal-scene"
              style={{ transform: 'translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg)' }}
            >
              <div className="korion-crystal-scene__ring korion-crystal-scene__ring--outer" />
              <div className="korion-crystal-scene__ring korion-crystal-scene__ring--mid" />
              <div className="korion-crystal-scene__ring korion-crystal-scene__ring--inner" />
              <div className="korion-crystal-scene__halo" />
              <div className="korion-crystal-scene__shadow" />
              <div className="korion-crystal-scene__glow" />
              <div className="korion-crystal-scene__pulse" />

              <div className="korion-crystal">
                <div className="korion-crystal__core">
                  <div className="korion-crystal__facet korion-crystal__facet--front" />
                  <div className="korion-crystal__facet korion-crystal__facet--back" />
                  <div className="korion-crystal__facet korion-crystal__facet--left" />
                  <div className="korion-crystal__facet korion-crystal__facet--right" />
                  <div className="korion-crystal__facet korion-crystal__facet--top" />
                  <div className="korion-crystal__facet korion-crystal__facet--bottom" />
                  <div className="korion-crystal__shine" />
                  <div className="korion-crystal__inner-glow" />

                  <div className="korion-crystal__logo">
                    <span className="korion-crystal__logo-halo" />
                    <img
                      src={korionLogo}
                      alt="KORION EK Logo"
                      className="korion-crystal__logo-image"
                      decoding="async"
                      fetchPriority="high"
                    />
                  </div>
                </div>
              </div>

              <div className="korion-node korion-node--1">
                <span>Wallet</span>
              </div>
              <div className="korion-node korion-node--2">
                <span>Pay</span>
              </div>
              <div className="korion-node korion-node--3">
                <span>API</span>
              </div>
              <div className="korion-node korion-node--4">
                <span>Utility</span>
              </div>

              <div className="korion-floating-card korion-floating-card--a">
                <div className="korion-floating-card__label">
                  {t('Network Grade', '네트워크 등급')}
                </div>
                <div className="korion-floating-card__value">AAA</div>
              </div>

              <div className="korion-floating-card korion-floating-card--b">
                <div className="korion-floating-card__label">
                  {t('Security Layer', '보안 레이어')}
                </div>
                <div className="korion-floating-card__value">EAL5+</div>
              </div>

              <div className="korion-particle korion-particle--1" />
              <div className="korion-particle korion-particle--2" />
              <div className="korion-particle korion-particle--3" />
              <div className="korion-particle korion-particle--4" />
              <div className="korion-particle korion-particle--5" />
              <div className="korion-particle korion-particle--6" />
            </div>
          </motion.div>
        </div>

        <div className="korion-trust-strip">
          <div className="home-shell">
            <div className="korion-trust-strip__grid">
              {trustItems.map((item, index) => (
                <div key={index} className="korion-trust-strip__card">
                  <div className="korion-trust-strip__icon">{item.icon}</div>
                  <div className="korion-trust-strip__text">
                    <div className="korion-trust-strip__value">{item.value}</div>
                    <div className="korion-trust-strip__label">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="korion-hero__bottom-fade" />
      </section>

      <section className="home-section home-section--company">
        <div className="home-company-glow" />
        <div className="home-shell">
          <div className="home-company-grid">
            <div className="reveal">
              <div className="home-section-eyebrow">{t('Who We Are', '우리는 누구인가')}</div>
              <h2 className="home-section-title">
                {t('Building the Global', '글로벌')}{' '}
                <span className="home-section-title-accent">
                  {t('Digital Asset Standard', '디지털 자산 표준 구축')}
                </span>
              </h2>

              <p className="home-company-text home-company-text--primary">
                {t(
                  'KORION is more than a token. It is a structured ecosystem designed to connect wallet infrastructure, partner integrations, user utility, and next-generation digital payment services under one unified strategy.',
                  'KORION은 단순한 토큰이 아닙니다. 지갑 인프라, 파트너 연동, 사용자 유틸리티, 차세대 디지털 결제 서비스를 하나의 통합 전략으로 연결하는 구조화된 생태계입니다.'
                )}
              </p>

              <p className="home-company-text home-company-text--secondary">
                {t(
                  'Our long-term direction is to position KORION as a trusted settlement and service layer between real-world commerce and digital finance, beginning with practical applications and scaling into a globally connected financial network.',
                  '우리의 장기 방향성은 KORION을 실물 상거래와 디지털 금융 사이를 연결하는 신뢰 가능한 정산 및 서비스 레이어로 구축하는 것입니다. 실사용 애플리케이션으로 시작해 글로벌 금융 네트워크로 확장해 나갑니다.'
                )}
              </p>

              <div className="home-company-points">
                {[
                  t('Enterprise-aligned ecosystem planning', '기업형 생태계 설계'),
                  t('Utility-first platform strategy', '실사용 우선 플랫폼 전략'),
                  t('Partner-ready product architecture', '파트너 연동형 제품 구조'),
                ].map((item, idx) => (
                  <div key={idx} className="home-company-point">
                    <CheckCircle size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="home-company-cards">
              {[
                {
                  icon: <Target className="w-5 h-5 text-sky-300" />,
                  title: t('Mission', '미션'),
                  desc: t(
                    'To make digital finance practical, trusted, and accessible through real utility and secure infrastructure.',
                    '실사용과 보안 인프라를 기반으로 디지털 금융을 실용적이고 신뢰 가능하며 접근 가능하게 만드는 것입니다.'
                  ),
                  modifier: 'home-info-card--blue',
                },
                {
                  icon: <Rocket className="w-5 h-5 text-fuchsia-300" />,
                  title: t('Vision', '비전'),
                  desc: t(
                    'To become a globally recognizable settlement and utility ecosystem for the next era of digital payments.',
                    '차세대 디지털 결제를 위한 글로벌 정산 및 유틸리티 생태계로 자리잡는 것입니다.'
                  ),
                  modifier: 'home-info-card--purple',
                },
                {
                  icon: <TrendingUp className="w-5 h-5 text-emerald-300" />,
                  title: t('Strategy', '전략'),
                  desc: t(
                    'Start from wallet utility and platform services, then expand liquidity, payments, and partner integrations step by step.',
                    '지갑 유틸리티와 플랫폼 서비스에서 시작해 유동성, 결제, 파트너 연동으로 단계적으로 확장합니다.'
                  ),
                  modifier: 'home-info-card--green',
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className={`home-info-card ${card.modifier} reveal reveal-d${Math.min(i + 1, 4) as 1 | 2 | 3 | 4}`}
                >
                  <div className="home-info-card__row">
                    <div className="home-info-card__icon">{card.icon}</div>
                    <div>
                      <h4 className="home-info-card__title">{card.title}</h4>
                      <p className="home-info-card__desc">{card.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="home-architecture-grid">
            {architectureItems.map((item, idx) => (
              <div key={idx} className="home-architecture-card reveal">
                <div className="home-architecture-card__icon">{item.icon}</div>
                <div className="home-architecture-card__title">{item.title}</div>
                <p className="home-architecture-card__desc">{item.desc}</p>
                <div className="home-architecture-card__link">
                  <span>{t('Designed for scale', '확장을 고려한 설계')}</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ecosystem" className="home-section home-section--ecosystem">
        <div className="home-shell">
          <div className="home-ecosystem-head reveal">
            <div className="home-section-eyebrow home-section-eyebrow--purple">
              {t('Full-Stack Digital Economy', '풀스택 디지털 경제')}
            </div>
            <h2 className="home-section-title home-section-title--center">
              {t('A Unified Digital', '통합 디지털')}{' '}
              <span className="home-section-title-accent home-section-title-accent--pink">
                {t('Ecosystem', '생태계')}
              </span>
            </h2>
            <p className="home-ecosystem-desc">
              {t(
                'Every component of KORION is designed to work in synergy — where infrastructure, utility, payment flows, and platform expansion strengthen one another.',
                'KORION의 모든 구성 요소는 상호 시너지를 이루도록 설계되었습니다. 인프라, 유틸리티, 결제 흐름, 플랫폼 확장이 서로를 강화합니다.'
              )}
            </p>
          </div>

          <div className="home-ecosystem-stack">
            <div className="home-feature-grid">
              <div className="reveal home-feature-copy home-feature-copy--order-last-mobile">
                <div className="home-feature-icon home-feature-icon--blue">
                  <Smartphone className="w-7 h-7" />
                </div>
                <div className="home-feature-index home-feature-index--blue">01 — KORION Wallet</div>
                <h3 className="home-feature-title">
                  {t('The Core Access Point of the Ecosystem', '생태계의 핵심 진입점')}
                </h3>
                <p className="home-feature-text">
                  {t(
                    'KORION Wallet delivers a premium multi-chain experience for users managing assets, interacting with ecosystem services, and preparing for broader digital payment scenarios. It combines professional usability with security-focused design.',
                    'KORION Wallet은 자산 관리, 생태계 서비스 연동, 디지털 결제 확장을 위한 프리미엄 멀티체인 경험을 제공합니다. 전문적인 사용성과 보안 중심 설계를 동시에 갖추고 있습니다.'
                  )}
                </p>

                <ul className="home-feature-list">
                  {[
                    t('Multi-chain asset routing & management', '멀티체인 자산 라우팅 및 관리'),
                    t('Biometric security & hardened key protection', '생체 인식 보안 및 강화된 키 보호'),
                    t('Native integration with platform services', '플랫폼 서비스와 기본 연동'),
                    t('Human-readable address experience', '사람이 읽을 수 있는 주소 경험'),
                  ].map((f, i) => (
                    <li key={i} className="home-feature-list__item">
                      <CheckCircle className="home-feature-list__icon" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="home-feature-badge-row">
                  <div className="home-version-badge">
                    <Download size={14} className="home-version-badge__icon" />
                    <span>v1.2.4 LIVE</span>
                  </div>
                  <div className="home-inline-chip">{t('iOS / Android Ready', 'iOS / Android 지원')}</div>
                </div>
              </div>

              <div className="reveal reveal-d2 home-panel home-panel--blue">
                <div className="home-panel__glow" />
                <div>
                  <div className="home-panel__label">{t('Security Standard', '보안 표준')}</div>
                  <div className="home-panel__headline">EAL5+ Verified</div>
                </div>
                <div className="home-progress-group">
                  {[
                    { label: t('Active Validators', '활성 검증자'), value: 85 },
                    { label: t('Network Throughput', '네트워크 처리량'), value: 92 },
                    { label: t('Block Finality', '블록 최종성'), value: 98 },
                  ].map((s, i) => (
                    <div key={i}>
                      <div className="home-progress-row">
                        <span>{s.label}</span>
                        <span className="home-progress-row__value">{s.value}%</span>
                      </div>
                      <div className="home-progress-track">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.value}%` }}
                          transition={{ duration: 1.2, delay: i * 0.1 }}
                          className="home-progress-fill home-progress-fill--blue"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="home-feature-grid">
              <div className="reveal home-graph-card">
                <div className="home-graph-card__topbar">
                  <div className="home-graph-card__dots">
                    <div className="home-graph-card__dot home-graph-card__dot--red" />
                    <div className="home-graph-card__dot home-graph-card__dot--yellow" />
                    <div className="home-graph-card__dot home-graph-card__dot--green" />
                  </div>
                  <span className="home-graph-card__status">system_active</span>
                </div>

                <div className="home-graph-card__body">
                  <div className="home-graph-card__head">
                    <div className="home-graph-card__value">1.2M</div>
                    <div className="home-graph-card__caption">
                      {t('Projected Global Reach', '예상 글로벌 도달 규모')}
                    </div>
                  </div>

                  <div className="home-graph-bars">
                    {[42, 58, 47, 82, 37, 76, 61, 100, 72].map((h, i) => (
                      <div key={i} className="home-graph-bars__column">
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          transition={{ duration: 1, delay: i * 0.05 }}
                          className="home-graph-bars__fill"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="reveal reveal-d2 home-feature-copy">
                <div className="home-feature-icon home-feature-icon--orange home-feature-icon--text">F</div>
                <div className="home-feature-index home-feature-index--orange">02 — Foxyya Platform</div>
                <h3 className="home-feature-title">
                  {t('Real Utility That Connects Users and Services', '사용자와 서비스를 연결하는 실사용 유틸리티')}
                </h3>
                <p className="home-feature-text">
                  {t(
                    'Foxyya represents the practical utility layer of the KORION ecosystem. It connects digital assets to service flows, engagement, and payment behavior — helping transform ecosystem participation into measurable demand.',
                    'Foxyya는 KORION 생태계의 실사용 유틸리티 레이어입니다. 디지털 자산을 서비스 흐름, 참여, 결제 행동과 연결해 생태계 참여를 실제 수요로 전환하도록 돕습니다.'
                  )}
                </p>

                <div className="home-highlight-card home-highlight-card--orange">
                  <div className="home-highlight-card__head">
                    <Rocket className="home-highlight-card__icon" />
                    <span>{t('Utility Growth Engine', '유틸리티 성장 엔진')}</span>
                  </div>
                  <p className="home-highlight-card__text">
                    {t(
                      'Real usage flows strengthen ecosystem credibility, token demand visibility, and long-term network relevance.',
                      '실제 사용 흐름은 생태계 신뢰도와 토큰 수요 가시성, 장기 네트워크 가치를 강화합니다.'
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className="home-feature-grid">
              <div className="reveal home-feature-copy">
                <div className="home-feature-icon home-feature-icon--purple">
                  <Zap className="w-7 h-7" />
                </div>
                <div className="home-feature-index home-feature-index--purple">03 — KORION Pay</div>
                <h3 className="home-feature-title">
                  {t('Payment Experiences Beyond Traditional Limits', '기존 한계를 넘는 결제 경험')}
                </h3>
                <p className="home-feature-text">
                  {t(
                    'KORION Pay is designed as a future-ready payment layer for secure digital transactions across a wider range of environments. Its architecture focuses on trust, operational resilience, and next-generation settlement experiences.',
                    'KORION Pay는 더 넓은 환경에서 안전한 디지털 거래를 가능하게 하는 미래형 결제 레이어로 설계되었습니다. 신뢰성, 운영 안정성, 차세대 정산 경험에 초점을 맞춘 구조입니다.'
                  )}
                </p>

                <div className="home-mini-grid">
                  {[
                    {
                      icon: <Cpu className="text-violet-300 w-5 h-5" />,
                      title: t('Architecture', '아키텍처'),
                      desc: t('Secure Elements', '보안 요소'),
                    },
                    {
                      icon: <Shield className="text-violet-300 w-5 h-5" />,
                      title: t('Integrity', '무결성'),
                      desc: t('Zero-Trust', '제로 트러스트'),
                    },
                  ].map((s, i) => (
                    <div key={i} className="home-mini-card">
                      <div className="home-mini-card__icon">{s.icon}</div>
                      <div className="home-mini-card__title">{s.title}</div>
                      <div className="home-mini-card__desc">{s.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="reveal reveal-d2 home-panel home-panel--purple home-panel--center">
                <div className="home-panel__header">
                  <div className="home-panel__header-bar" />
                  <div>
                    <div className="home-panel__header-title">Offline Protocol v4.2</div>
                    <div className="home-panel__header-sub">
                      {t('Enterprise Ready', '엔터프라이즈 대응')}
                    </div>
                  </div>
                </div>

                <div className="home-progress-group">
                  {[
                    { label: t('Sync Security', '동기화 보안'), v: 99 },
                    { label: t('Offline Range', '오프라인 범위'), v: 88 },
                    { label: t('Integrity Validation', '무결성 검증'), v: 96 },
                  ].map((s, i) => (
                    <div key={i}>
                      <div className="home-progress-row home-progress-row--dim">
                        <span>{s.label}</span>
                        <span className="home-progress-row__value home-progress-row__value--dim">
                          {s.v}%
                        </span>
                      </div>
                      <div className="home-progress-track">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.v}%` }}
                          transition={{ duration: 1, delay: i * 0.08 }}
                          className="home-progress-fill home-progress-fill--purple"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section home-section--cta">
        <div className="home-shell">
          <div className="home-cta-shell reveal">
            <div className="home-cta-card">
              <div className="home-cta-card__radial" />
              <div className="home-cta-card__grid" />
              <div className="home-cta-card__content">
                <div className="home-cta-card__eyebrow">
                  {t('Join The Movement', '함께 하세요')}
                </div>

                <h2 className="home-cta-card__title">
                  {t('Ready to build the future with KORION?', 'KORION과 함께 미래를 구축할 준비가 되셨나요?')}
                </h2>

                <p className="home-cta-card__desc">
                  {t(
                    'Explore the wallet, review the whitepaper, and discover how KORION is shaping the next generation of real digital utility.',
                    '지갑을 확인하고, 백서를 검토하고, KORION이 어떻게 차세대 실사용 디지털 유틸리티를 구축하는지 확인해보세요.'
                  )}
                </p>

                <div className="home-cta-card__actions">
                  <button
                    onClick={() => navigate('/download')}
                    className="home-cta-card__button home-cta-card__button--primary"
                  >
                    {t('Get Started', '시작하기')}
                  </button>

                  <a
                    href="https://t.me/KORION_Official_chat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="home-cta-card__button home-cta-card__button--ghost"
                  >
                    {t('Join Community', '커뮤니티 참여')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
