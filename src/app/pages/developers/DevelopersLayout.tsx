import { useMemo, useRef, useState, useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router";
import logo from '../../../assets/logo/logo.png';
import {
    ChevronDown,
    Globe,
    ShieldCheck,
    Boxes,
    } from "lucide-react";
    import { useLanguage } from "../../contexts/LanguageContext";
    import "./DevelopersLayout.css";

    type NavItem = {
    label: string;
    to: string;
    end?: boolean;
    };

    type NavGroup = {
    key: string;
    label: string;
    icon: React.ElementType;
    items: NavItem[];
    matchPaths: string[];
    };

    export function DevelopersLayout() {
    const { language, toggleLanguage, t } = useLanguage();
    const location = useLocation();
    const [openGroup, setOpenGroup] = useState<string | null>(null);
    const navRef = useRef<HTMLDivElement | null>(null);

    const pathname = location.pathname;

    const directNavItems: NavItem[] = [
        { label: t("Guides", "가이드"), to: "/developers", end: true },
        { label: t("API Reference", "API 레퍼런스"), to: "/developers/api" },
        { label: t("SDK", "SDK"), to: "/developers/sdk" },
        { label: t("Change Log", "변경사항"), to: "/developers/changelog" },
    ];

    const navGroups: NavGroup[] = useMemo(
        () => [
        {
            key: "security",
            label: t("Security", "보안"),
            icon: ShieldCheck,
            matchPaths: [
            "/developers/authentication",
            "/developers/webhooks",
            "/developers/errors",
            "/developers/rate-limits",
            ],
            items: [
            { label: t("Authentication", "인증"), to: "/developers/authentication" },
            { label: t("Webhooks", "웹훅"), to: "/developers/webhooks" },
            { label: t("Errors", "오류 코드"), to: "/developers/errors" },
            { label: t("Rate Limits", "호출 제한"), to: "/developers/rate-limits" },
            ],
        },
        {
            key: "resources",
            label: t("Resources", "리소스"),
            icon: Boxes,
            matchPaths: [
            "/developers/sandbox",
            "/developers/examples",
            "/developers/partners",
            "/developers/preregister",
            ],
            items: [
            { label: t("Sandbox", "샌드박스"), to: "/developers/sandbox" },
            { label: t("Examples", "예제 코드"), to: "/developers/examples" },
            { label: t("Partners", "파트너"), to: "/developers/partners" },
            { label: t("Pre-register", "사전등록"), to: "/developers/preregister" },
            ],
        },
        ],
        [t]
    );

    const isGroupActive = (group: NavGroup) =>
        group.matchPaths.some((path) => pathname.startsWith(path));

    const handleToggleGroup = (groupKey: string) => {
        setOpenGroup((prev) => (prev === groupKey ? null : groupKey));
    };

    useEffect(() => {
        setOpenGroup(null);
    }, [pathname]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
        if (!navRef.current) return;
        if (!navRef.current.contains(event.target as Node)) {
            setOpenGroup(null);
        }
        };

        const handleEsc = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            setOpenGroup(null);
        }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEsc);

        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleEsc);
        };
    }, []);

    return (
        <div className="developers-layout">
        <header className="developers-layout__topbar">
            <div className="developers-layout__inner">
            <NavLink to="/" className="developers-layout__brand">
                <div className="developers-layout__brand-badge">
                    <img
                    src={logo}
                    alt="KORION logo"
                    className="developers-layout__brand-logo"
                    />
                </div>
                <span className="developers-layout__brand-text">
                {t("KORION Developers", "KORION 개발자")}
                </span>
            </NavLink>

            <nav className="developers-layout__nav" ref={navRef}>
                {directNavItems.map((item) => (
                <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) =>
                    `developers-layout__nav-link ${isActive ? "is-active" : ""}`
                    }
                >
                    {item.label}
                </NavLink>
                ))}

                {navGroups.map((group) => {
                const Icon = group.icon;
                const active = isGroupActive(group);
                const open = openGroup === group.key;

                return (
                    <div
                    key={group.key}
                    className={`developers-layout__group ${active ? "is-active" : ""} ${open ? "is-open" : ""}`}
                    >
                    <button
                        type="button"
                        className="developers-layout__group-trigger"
                        onClick={() => handleToggleGroup(group.key)}
                    >
                        <span className="developers-layout__group-trigger-left">
                        <Icon size={15} />
                        <span>{group.label}</span>
                        </span>
                        <ChevronDown
                        size={15}
                        className="developers-layout__group-chevron"
                        />
                    </button>

                    <div className="developers-layout__group-menu">
                        <div className="developers-layout__group-menu-list">
                        {group.items.map((item) => (
                            <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>
                                `developers-layout__group-link ${isActive ? "is-active" : ""}`
                            }
                            >
                            {item.label}
                            </NavLink>
                        ))}
                        </div>
                    </div>
                    </div>
                );
                })}
            </nav>

            <div className="developers-layout__actions">
                <button
                type="button"
                className="developers-layout__translate"
                onClick={toggleLanguage}
                >
                <Globe size={16} />
                <span>{language}</span>
                </button>

                <NavLink
                to="/developers/preregister"
                className="developers-layout__preregister"
                >
                {t("Pre-register", "사전등록")}
                </NavLink>
            </div>
            </div>
        </header>

        <main className="developers-layout__content">
            <Outlet />
        </main>
        </div>
    );
    }