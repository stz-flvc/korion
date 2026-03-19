import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './SiteHeader.css';

type NavItem = {
    labelKo: string;
    labelEn: string;
    href: string;
    };

    const mainNavItems: NavItem[] = [
    { labelKo: '에코시스템', labelEn: 'Ecosystem', href: '/ecosystem' },
    { labelKo: 'KORION Pay', labelEn: 'KORION Pay', href: '/korionpay' },
    { labelKo: '토크노믹스', labelEn: 'Tokenomics', href: '/tokenomics' },
    { labelKo: '개발자', labelEn: 'Developers', href: '/developers' },
    { labelKo: '로드맵', labelEn: 'Roadmap', href: '/roadmap' },
    { labelKo: '지원', labelEn: 'Support', href: '/support' },
    ];

    const companyDropdownItems: NavItem[] = [
    { labelKo: '소개', labelEn: 'About', href: '/about' },
    { labelKo: '재단', labelEn: 'Foundation', href: '/foundation' },
    { labelKo: '재무', labelEn: 'Treasury', href: '/treasury' },
    { labelKo: '정책', labelEn: 'Policy', href: '/policy' },
    { labelKo: '팀', labelEn: 'Team', href: '/team' },
    ];

    export function SiteHeader() {
    const { language } = useLanguage();
    const isKo = language === 'KR';

    const [mobileOpen, setMobileOpen] = useState(false);
    const [companyOpen, setCompanyOpen] = useState(false);

    return (
        <header className="site-header">
        <div className="site-header__container">
            <Link to="/" className="site-header__brand">
            <div className="site-header__brand-mark">K</div>
            <span>KORION</span>
            </Link>

            <nav className="site-header__nav">
            {mainNavItems.map((item) => (
                <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                    `site-header__nav-link${isActive ? ' is-active' : ''}`
                }
                >
                {isKo ? item.labelKo : item.labelEn}
                </NavLink>
            ))}

            <div
                className="site-header__dropdown"
                onMouseEnter={() => setCompanyOpen(true)}
                onMouseLeave={() => setCompanyOpen(false)}
            >
                <button type="button" className="site-header__dropdown-trigger">
                <span>{isKo ? '회사' : 'Company'}</span>
                <ChevronDown size={15} />
                </button>

                <div className={`site-header__dropdown-menu${companyOpen ? ' is-open' : ''}`}>
                {companyDropdownItems.map((item) => (
                    <Link key={item.href} to={item.href} className="site-header__dropdown-link">
                    {isKo ? item.labelKo : item.labelEn}
                    </Link>
                ))}
                </div>
            </div>
            </nav>

            <div className="site-header__actions">
            <Link to="/download" className="site-header__download">
                {isKo ? '다운로드' : 'Download'}
            </Link>

            <button
                type="button"
                className="site-header__mobile-toggle"
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            </div>
        </div>

        <div className={`site-header__mobile${mobileOpen ? ' is-open' : ''}`}>
            <div className="site-header__mobile-inner">
            {mainNavItems.map((item) => (
                <Link
                key={item.href}
                to={item.href}
                className="site-header__mobile-link"
                onClick={() => setMobileOpen(false)}
                >
                {isKo ? item.labelKo : item.labelEn}
                </Link>
            ))}

            <div className="site-header__mobile-group">
                <span className="site-header__mobile-group-title">
                {isKo ? '회사' : 'Company'}
                </span>

                {companyDropdownItems.map((item) => (
                <Link
                    key={item.href}
                    to={item.href}
                    className="site-header__mobile-sublink"
                    onClick={() => setMobileOpen(false)}
                >
                    {isKo ? item.labelKo : item.labelEn}
                </Link>
                ))}
            </div>

            <Link
                to="/download"
                className="site-header__mobile-download"
                onClick={() => setMobileOpen(false)}
            >
                {isKo ? '다운로드' : 'Download'}
            </Link>
            </div>
        </div>
        </header>
    );
    }