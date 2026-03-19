import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Crown,
  Code2,
  Globe2,
  ShieldCheck,
  Users2,
  ChevronRight,
  BadgeCheck,
  Network,
  Megaphone,
  Flag,
  Sparkles,
  Orbit,
  Mail,
  Linkedin,
  Instagram,
  Twitter,
  Check,
} from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import { useAssetUrl } from '../utils/assetLoader';
import { mockAdminService } from '../services/mockAdminService';
import type { PartnerProfile } from '../types/AdminTypes';
import './TeamSection.css';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.6, ease: 'easeOut' as any },
};

const partnerRegions = [
  {
    region: 'Asia',
    regionKo: '아시아',
    icon: Globe2,
    text: 'Regional communication and growth partners supporting awareness and user expansion.',
    textKo:
      '인지도 확대와 사용자 확장을 지원하는 지역 커뮤니케이션 및 성장 파트너들입니다.',
  },
  {
    region: 'Europe',
    regionKo: '유럽',
    icon: Network,
    text: 'Strategic network partners supporting project communication and international positioning.',
    textKo:
      '프로젝트 커뮤니케이션과 국제적 포지셔닝을 지원하는 전략 네트워크 파트너들입니다.',
  },
  {
    region: 'North America',
    regionKo: '북미',
    icon: Megaphone,
    text: 'Promotion-oriented partners expanding visibility across digital channels and communities.',
    textKo:
      '디지털 채널과 커뮤니티 전반에서 가시성을 확대하는 홍보 중심 파트너들입니다.',
  },
  {
    region: 'Global Network',
    regionKo: '글로벌 네트워크',
    icon: Users2,
    text: 'A distributed global support layer strengthening community trust and ecosystem presence.',
    textKo:
      '커뮤니티 신뢰와 생태계 존재감을 강화하는 분산형 글로벌 지원 네트워크입니다.',
  },
];

export function TeamSection() {
  const { language, t } = useLanguage();
  const isKo = language === 'KR';

  const [partners, setPartners] = useState<PartnerProfile[]>([]);

  useEffect(() => {
    setPartners(mockAdminService.getPartners());
  }, []);

  const ceoImage = useAssetUrl('team-ceo-image-v2', () => import('../../assets/team/jang.jpeg'));
  const devDirectorImage = useAssetUrl('team-dev-director-image-v2', () => import('../../assets/team/seo.jpeg'));
  const partnerAvatarImage = useAssetUrl('team-partner-avatar-image-v2', () => import('../../assets/team/avatar.jpg'));
  const joelImage = useAssetUrl('team-joel-image-v2', () => import('../../assets/team/joel.jpeg'));
  const ebenImage = useAssetUrl('team-eben-image-v2', () => import('../../assets/team/eben.jpeg'));
  const judgeImage = useAssetUrl('team-judge-image-v2', () => import('../../assets/team/giant.jpeg'));
  const hyprImage = useAssetUrl('team-hypr-image-v2', () => import('../../assets/team/defnothypr.jpeg'));
  const goldBadge = useAssetUrl('team-gold-badge-v4', () => import('../../assets/team/badge-gold.png'));
  const blueBadge = useAssetUrl('team-blue-badge-v4', () => import('../../assets/team/badge-blue.png'));

  const [leadershipMembers, setLeadershipMembers] = useState<any[]>([]);

  useEffect(() => {
    const members = mockAdminService.getLeadership();
    const withAssets = members.filter(m => m.isVisible).map(member => ({
      ...member,
      icon: (member.role || '').includes('CEO') ? Sparkles : Check,
      image: member.image === 'jang' ? ceoImage 
            : member.image === 'seo' ? devDirectorImage 
            : member.image || null,
    }));
    setLeadershipMembers(withAssets);
  }, [ceoImage, devDirectorImage]);

  const leadershipWithAssets = leadershipMembers;

  const isValidUrl = (url?: string | null) => {
    if (!url) return false;
    const cleanUrl = String(url).trim().toLowerCase();
    return cleanUrl !== '' && cleanUrl !== 'null';
  };

  const partnerProfilesWithAssets = partners
    .filter(p => p.isVisible)
    .map((profile) => ({
      ...profile,
      badgeIcon:
        profile.badge === 'gold'
          ? goldBadge
          : profile.badge === 'blue' || profile.badge === 'green'
            ? blueBadge
            : null,
      image:
        profile.image === 'partner-joel'
          ? joelImage
          : profile.image === 'partner-eben'
            ? ebenImage
            : profile.image === 'partner-judge'
              ? judgeImage
              : profile.image === 'partner-hypr'
                ? hyprImage
                : profile.image === 'partner-avatar'
                  ? partnerAvatarImage
                  : profile.image || null,
      email: profile.email || profile.socials?.email || null,
    }));

  return (
    <main className="team-section">
      <section className="team-section__hero">
        <div className="team-section__hero-bg">
          <div className="team-section__orb team-section__orb--one" />
          <div className="team-section__orb team-section__orb--two" />
          <div className="team-section__grid" />
        </div>

        <div className="team-section__container team-section__hero-container">
          <motion.div
            className="team-section__hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="team-section__eyebrow">
              <BadgeCheck size={16} />
              <span>{t('TEAM & PARTNERS', 'TEAM & PARTNERS')}</span>
            </div>

            <h1 className="team-section__title">
              {t(
                'Leadership and a Global Partner Network',
                '운영진의 리더십과 글로벌 파트너 네트워크'
              )}
            </h1>

            <p className="team-section__desc">
              {t(
                'KORION strengthens both project credibility and international reach through the strategic leadership of its core executives and an expanding network of country-level partners.',
                'KORION은 핵심 운영진의 전략적 리더십과 각 국가별 파트너들의 확장 네트워크를 바탕으로 프로젝트 신뢰도와 글로벌 도달 범위를 함께 강화하고 있습니다.'
              )}
            </p>

            <div className="team-section__hero-actions">
              <Link to="/about" className="team-section__btn team-section__btn--ghost">
                <span>{t('View About', '회사소개 보기')}</span>
                <ChevronRight size={18} />
              </Link>
              <div className="team-section__partner-apply">
                <Link to="/partner" className="team-section__btn team-section__btn--partner">
                  <span>{t('Apply as Partner', '파트너 신청')}</span>
                  <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="team-section__leadership">
        <div className="team-section__container">
          <motion.div className="team-section__heading team-section__heading--center" {...fadeUp}>
            <span>{t('LEADERSHIP', 'LEADERSHIP')}</span>
            <h2>{t('Core Leadership', '핵심 운영진')}</h2>
            <p>
              {t(
                'The core leaders responsible for the project’s direction and execution.',
                '프로젝트의 방향성과 실행력을 책임지는 핵심 운영진입니다.'
              )}
            </p>
          </motion.div>

          <div className="team-section__leadership-list">
            {leadershipWithAssets.map((member, index) => {
              const Icon = member.icon;
              return (
                <motion.article
                  key={member.name}
                  className="team-section__leader-row"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  <div className="team-section__leader-photo-panel">
                    <div className="team-section__leader-photo-frame">
                      <ImageWithFallback
                        src={member.image || undefined}
                        alt={member.name}
                        className="team-section__leader-photo"
                        loading="lazy"
                      />
                    </div>
                    <div className="team-section__leader-role-chip">
                      <Icon size={15} />
                      <span>{(isKo ? member.roleKo : member.role) || ''}</span>
                    </div>
                  </div>

                  <div className="team-section__leader-content">
                    <div className="team-section__leader-top">
                      <h3>{member.name}</h3>
                    </div>

                    <p className="team-section__leader-summary">
                      {(isKo ? member.summaryKo : member.summary) || ''}
                    </p>

                    <p className="team-section__leader-bio">
                      {(isKo ? member.bioKo : member.bio) || ''}
                    </p>

                    <div className="team-section__leader-tags">
                      {((isKo ? member.highlightsKo : member.highlights) || []).map((item: string) => (
                        <span key={item} className="team-section__leader-tag">
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="team-section__socials">
                      {isValidUrl(member.email) && (
                        <a href={member.email!.startsWith('mailto:') ? member.email! : `mailto:${member.email!}`} className="team-section__social" aria-label={`${member.name} email`}>
                          <Mail size={16} />
                        </a>
                      )}
                      {isValidUrl(member.linkedin) && (
                        <a
                          href={member.linkedin!}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="team-section__social"
                          aria-label={`${member.name} linkedin`}
                        >
                          <Linkedin size={16} />
                        </a>
                      )}
                      {isValidUrl(member.instagram) && (
                        <a
                          href={member.instagram!}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="team-section__social"
                          aria-label={`${member.name} instagram`}
                        >
                          <Instagram size={16} />
                        </a>
                      )}
                      {isValidUrl(member.twitter) && (
                        <a
                          href={member.twitter!}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="team-section__social"
                          aria-label={`${member.name} twitter`}
                        >
                          <Twitter size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="team-section__partners">
        <div className="team-section__container">
          <motion.div className="team-section__heading" {...fadeUp}>
            <span>{t('GLOBAL PARTNERS', 'GLOBAL PARTNERS')}</span>
            <h2>{t('Regional Partner Network', '권역별 파트너 네트워크')}</h2>
            <p>
              {t(
                'KORION works with partners across multiple regions and channels to expand visibility, strengthen community growth, and support ecosystem awareness.',
                'KORION은 다양한 권역과 채널에서 프로젝트 인지도와 커뮤니티 성장을 지원하는 파트너들과 함께 움직이고 있습니다.'
              )}
            </p>
          </motion.div>

          <div className="team-section__partners-grid">
            {partnerRegions.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.region}
                  className="team-section__partner-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                >
                  <div className="team-section__partner-icon">
                    <Icon size={20} />
                  </div>
                  <h3>{isKo ? item.regionKo : item.region}</h3>
                  <p>{isKo ? item.textKo : item.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="team-section__profiles">
        <div className="team-section__container">
          <motion.div className="team-section__heading" {...fadeUp}>
            <span>{t('PARTNER PROFILES', 'PARTNER PROFILES')}</span>
            <h2>{t('Partner Profile Showcase', '파트너 프로필 소개')}</h2>
            <p>
              {t(
                'To accommodate a growing network, partner profiles are organized in a refined grid designed for scalability, readability, and premium presentation.',
                '확장되는 파트너 네트워크를 수용하기 위해, 파트너 프로필은 확장성·가독성·프리미엄 표현을 고려한 정제된 그리드 구조로 구성됩니다.'
              )}
            </p>
          </motion.div>

          <div className="team-section__profiles-grid">
            {partnerProfilesWithAssets.map((item: any, index: number) => {
              return (
                <motion.article
                  key={`${item.id}`}
                  className="team-section__profile-card"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.45, delay: index * 0.03, ease: "easeOut" as any }}
                >
                  <div className="team-section__profile-avatar">
                    {item.image ? (
                      <ImageWithFallback
                        src={item.image || undefined}
                        alt={item.name}
                        className="team-section__profile-image"
                        loading="lazy"
                      />
                    ) : (
                      <Flag size={18} />
                    )}
                  </div>

                  <div className="team-section__profile-body">
                    <div className="team-section__profile-country">
                      {isKo ? item.countryKo : item.country}
                      {item.badgeIcon && (
                        <img
                          src={item.badgeIcon}
                          alt="Level Badge"
                          className={`team-section__profile-badge ${item.badge === 'green' ? 'team-section__profile-badge--green' : ''}`}
                          loading="lazy"
                        />
                      )}
                    </div>
                    <h3>{isKo ? item.nameKo : item.name}</h3>
                    <p>{isKo ? item.descKo : item.desc}</p>
                    <div className="team-section__socials team-section__socials--partner">
                      {isValidUrl(item.email) && (
                        <a href={item.email.startsWith('mailto:') ? item.email : `mailto:${item.email}`} className="team-section__social" aria-label={`${isKo ? item.nameKo : item.name} email`}>
                          <Mail size={15} />
                        </a>
                      )}
                      {isValidUrl(item.socials?.twitter) && (
                        <a
                          href={item.socials.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="team-section__social"
                          aria-label={`${isKo ? item.nameKo : item.name} twitter`}
                        >
                          <Twitter size={15} />
                        </a>
                      )}
                      {isValidUrl(item.socials?.linkedin) && (
                        <a
                          href={item.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="team-section__social"
                          aria-label={`${isKo ? item.nameKo : item.name} linkedin`}
                        >
                          <Linkedin size={15} />
                        </a>
                      )}
                      {isValidUrl(item.socials?.instagram) && (
                        <a
                          href={item.socials.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="team-section__social"
                          aria-label={`${isKo ? item.nameKo : item.name} instagram`}
                        >
                          <Instagram size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="team-section__closing">
        <div className="team-section__container">
          <motion.div className="team-section__closing-panel" {...fadeUp}>
            <div className="team-section__closing-copy">
              <span>{t('TRUST & EXECUTION', 'TRUST & EXECUTION')}</span>
              <h2>
                {t(
                  'Leadership and Network Build Trust Together',
                  '리더십과 네트워크가 함께 프로젝트의 신뢰를 만듭니다'
                )}
              </h2>
              <p>
                {t(
                  'KORION builds a balance of trust and growth through strong leadership execution and the scalability of its global partner network.',
                  'KORION은 운영진의 실행력과 글로벌 파트너 네트워크의 확장성을 바탕으로 신뢰와 성장의 균형을 만들어갑니다.'
                )}
              </p>
            </div>

            <div className="team-section__closing-visual">
              <div className="team-section__closing-orb" />
              <div className="team-section__closing-ring team-section__closing-ring--one" />
              <div className="team-section__closing-ring team-section__closing-ring--two" />
              <div className="team-section__closing-core">
                <ShieldCheck size={28} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
