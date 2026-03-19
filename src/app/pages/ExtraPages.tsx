import { motion } from 'motion/react';
import { ShieldCheck, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import './InfoPage.css';

interface InfoPageProps {
    eyebrow: string;
    title: string;
    subtitle: string;
    }

    function InfoPage({ eyebrow, title, subtitle }: InfoPageProps) {
    return (
        <div className="info-page">
        <div className="info-page__bg">
            <div className="info-page__glow info-page__glow--blue" />
            <div className="info-page__glow info-page__glow--purple" />
        </div>

        <div className="info-page__container">
            <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="info-page__hero"
            >
            <div className="info-page__badge">
                <ShieldCheck size={16} />
                <span>{eyebrow}</span>
            </div>

            <h1 className="info-page__title">{title}</h1>
            <p className="info-page__subtitle">{subtitle}</p>

            <div className="info-page__actions">
                <Link to="/support" className="info-page__button info-page__button--primary">
                Support
                <ChevronRight size={16} />
                </Link>

                <Link to="/whitepaper" className="info-page__button info-page__button--ghost">
                Whitepaper
                <ChevronRight size={16} />
                </Link>
            </div>
            </motion.div>
        </div>
        </div>
    );
    }




    export function NewsPage() {
    return <InfoPage eyebrow="NEWS" title="KORION News" subtitle="KORION의 공지, 업데이트, 주요 진행 사항을 안내하는 페이지입니다." />;
    }

    export function SmartContractPage() {
    return <InfoPage eyebrow="SMART CONTRACT" title="Smart Contract" subtitle="KORION 스마트 컨트랙트 구조와 핵심 기능을 안내합니다." />;
    }

    export function MediaKitPage() {
    return <InfoPage eyebrow="MEDIA KIT" title="Media Kit" subtitle="브랜드 자산, 로고, 프로젝트 소개 자료를 위한 페이지입니다." />;
    }

    export function FAQPage() {
    return <InfoPage eyebrow="FAQ" title="Frequently Asked Questions" subtitle="자주 묻는 질문과 기본적인 안내 사항을 확인할 수 있습니다." />;
    }

    export function ContactPage() {
    return <InfoPage eyebrow="CONTACT" title="Contact KORION" subtitle="운영팀 또는 지원팀에 문의할 수 있는 안내 페이지입니다." />;
    }

    export function ExplorerPage() {
    return <InfoPage eyebrow="EXPLORER" title="Explorer" subtitle="토큰 및 거래 조회를 위한 탐색 정보 페이지입니다." />;
    }

    export function ListingInfoPage() {
    return <InfoPage eyebrow="MARKET" title="Listing Information" subtitle="DEX 및 향후 마켓 관련 참고 정보를 제공하는 페이지입니다." />;
    }

    export function SecurityPage() {
    return <InfoPage eyebrow="SECURITY" title="Security" subtitle="계정 보호, 지갑 주의사항, 보안 가이드를 제공하는 페이지입니다." />;
    }