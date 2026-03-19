import { motion } from "motion/react";
import { ArrowDownToLine, BadgeCheck, Smartphone } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import androidImage from "../../assets/Android_APK.png";
import "./DownloadPage.css";

export function DownloadPage() {    
    const { language } = useLanguage();
    const isKo = language === "KR";

    return (
        <div className="download-page">
        <div className="download-page__bg">
            <div className="download-page__blur download-page__blur--blue" />
            <div className="download-page__blur download-page__blur--purple" />
            <div className="download-page__grid" />
        </div>

        <div className="download-page__container">
            <motion.div
            className="download-page__hero"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            >
            <div className="download-page__hero-badge">
                <BadgeCheck size={15} />
                <span>{isKo ? "OFFICIAL DOWNLOAD" : "OFFICIAL DOWNLOAD"}</span>
            </div>

            <div className="download-page__hero-icon">
                <Smartphone className="download-page__hero-icon-svg" />
            </div>

            <h1 className="download-page__title">
                {isKo ? "KORION Wallet" : "KORION Wallet"}
                <span className="download-page__title-gradient">
                {isKo ? " 다운로드" : " Download"}
                </span>
            </h1>

            <p className="download-page__subtitle">
                {isKo
                ? "공식 배포 경로를 통해 KORION Wallet을 다운로드하세요."
                : "Download KORION Wallet through the official distribution channels."}
            </p>
            </motion.div>

            <div className="download-page__grid-cards">
            <motion.a
                href="https://play.google.com/store/apps/details?id=com.korion.wallet"
                target="_blank"
                rel="noopener noreferrer"
                className="download-card download-card--play"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
            >
                <div className="download-card__topline">
                <span>{isKo ? "Android" : "Android"}</span>
                </div>

                <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="download-card__badge"
                />

                <h3 className="download-card__title">
                {isKo ? "Google Play" : "Google Play"}
                </h3>

                <p className="download-card__desc">
                {isKo ? "공식 스토어에서 설치" : "Install from the official store"}
                </p>

                <div className="download-card__action download-card__action--play">
                <span>{isKo ? "열기" : "Open"}</span>
                <ArrowRight size={18} />
                </div>
            </motion.a>

            <motion.a
                href="https://apps.apple.com/kr/app/korion-wallet/id6758933528"
                target="_blank"
                rel="noopener noreferrer"
                className="download-card download-card--ios"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                <div className="download-card__topline">
                <span>{isKo ? "iPhone" : "iPhone"}</span>
                </div>

                <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="Download on the App Store"
                className="download-card__badge"
                />

                <h3 className="download-card__title">
                {isKo ? "App Store" : "App Store"}
                </h3>

                <p className="download-card__desc">
                {isKo ? "공식 iOS 배포 경로" : "Official iOS distribution path"}
                </p>

                <div className="download-card__action download-card__action--ios">
                <span>{isKo ? "열기" : "Open"}</span>
                <ArrowRight size={18} />
                </div>
            </motion.a>

            <motion.a
                href="/downloads/app-release.apk"
                download="app-release.apk"
                className="download-card download-card--apk"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
            >
                <div className="download-card__topline">
                <span>{isKo ? "Direct APK" : "Direct APK"}</span>
                </div>

                <div className="download-card__apk-visual">
                <img
                    src={androidImage}
                    alt="Android APK"
                    className="download-card__apk-image"
                />
                </div>

                <h3 className="download-card__title">
                {isKo ? "APK 다운로드" : "Download APK"}
                </h3>

                <p className="download-card__desc">
                {isKo ? "안드로이드 직접 설치 파일" : "Direct installation file for Android"}
                </p>

                <div className="download-card__action download-card__action--apk">
                <span>{isKo ? "다운로드" : "Download"}</span>
                <ArrowDownToLine size={18} />
                </div>
            </motion.a>
            </div>
        </div>
        </div>
    );
    }

    function ArrowRight({ size }: { size: number }) {
    return (
        <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
        </svg>
    );
    }