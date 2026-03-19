import {
    ShieldCheck,
    LockKeyhole,
    Wallet,
    Activity,
    AlertTriangle,
    FileCheck2,
    Landmark,
    Cpu,
    ArrowRightLeft,
    BatteryCharging,
    Users,
    Eye,
    Server,
    BellRing,
    BadgeCheck,
    Scale,
    Layers3,
    Sparkles,
    ChevronRight,
    Database,
    Workflow,
    Clock3,
    CheckCircle2,
    TimerReset,
    ScanSearch,
    Vault,
    RadioTower,
    HelpCircle,
    ArrowUpRight,
    } from 'lucide-react';
    import { useLanguage } from '../contexts/LanguageContext';
    import './PolicyPage.css';

    type FrameworkSection = {
    icon: React.ElementType;
    titleEn: string;
    titleKo: string;
    descEn: string;
    descKo: string;
    pointsEn: string[];
    pointsKo: string[];
    };

    type PrincipleItem = {
    titleEn: string;
    titleKo: string;
    descEn: string;
    descKo: string;
    };

    type ArchitectureItem = {
    icon: React.ElementType;
    titleEn: string;
    titleKo: string;
    descEn: string;
    descKo: string;
    tagsEn: string[];
    tagsKo: string[];
    };

    type FlowStep = {
    step: string;
    titleEn: string;
    titleKo: string;
    descEn: string;
    descKo: string;
    };

    type EngineCard = {
    icon: React.ElementType;
    titleEn: string;
    titleKo: string;
    descEn: string;
    descKo: string;
    };

    type FaqItem = {
    qEn: string;
    qKo: string;
    aEn: string;
    aKo: string;
    };

    const frameworkSections: FrameworkSection[] = [
    {
        icon: ShieldCheck,
        titleEn: 'Operational Governance Policy',
        titleKo: '운영 거버넌스 정책',
        descEn:
        'KORION is operated under a structured governance model designed to support accountability, continuity, security, and ecosystem stability.',
        descKo:
        'KORION은 책임성, 연속성, 보안, 생태계 안정성을 지원하기 위한 체계적 거버넌스 모델 아래 운영됩니다.',
        pointsEn: [
        'Core operations follow defined internal standards and execution procedures.',
        'Important service changes are reviewed with platform stability in mind.',
        'Governance priorities are aligned with user protection and long-term sustainability.',
        ],
        pointsKo: [
        '핵심 운영은 정의된 내부 기준과 실행 절차에 따라 진행됩니다.',
        '중요 서비스 변경은 플랫폼 안정성을 기준으로 검토됩니다.',
        '거버넌스 우선순위는 사용자 보호와 장기 지속성에 맞춰집니다.',
        ],
    },
    {
        icon: AlertTriangle,
        titleEn: 'Risk Management Framework',
        titleKo: '리스크 관리 체계',
        descEn:
        'The platform monitors operational, liquidity, wallet, transaction, and infrastructure risks through layered controls and response policies.',
        descKo:
        '플랫폼은 다층 통제와 대응 정책을 통해 운영, 유동성, 지갑, 거래, 인프라 리스크를 관리합니다.',
        pointsEn: [
        'Abnormal behaviors may trigger review, delay, or additional protection steps.',
        'Network congestion and unusual fund movement patterns are monitored continuously.',
        'Risk handling is designed to reduce wide ecosystem disruption.',
        ],
        pointsKo: [
        '비정상 행위는 검토, 지연, 추가 보호 절차를 유발할 수 있습니다.',
        '네트워크 혼잡과 비정상 자금 흐름 패턴을 지속 감시합니다.',
        '리스크 대응은 생태계 전반의 혼란을 줄이도록 설계됩니다.',
        ],
    },
    {
        icon: LockKeyhole,
        titleEn: 'Wallet & Asset Security Policy',
        titleKo: '지갑 및 자산 보안 정책',
        descEn:
        'Asset custody and wallet operations are designed with role separation, controlled approval, reserve isolation, and exposure minimization.',
        descKo:
        '자산 보관과 지갑 운영은 역할 분리, 통제된 승인, 준비금 분리, 노출 최소화를 기준으로 설계됩니다.',
        pointsEn: [
        'Operational wallets and reserve wallets may be managed with distinct purposes.',
        'Sensitive actions may require additional authorization or internal review.',
        'Treasury exposure is minimized wherever possible.',
        ],
        pointsKo: [
        '운영 지갑과 준비금 지갑은 목적에 따라 분리 운영될 수 있습니다.',
        '민감 작업은 추가 승인이나 내부 검토가 필요할 수 있습니다.',
        '준비금 노출은 가능한 범위에서 최소화됩니다.',
        ],
    },
    {
        icon: ArrowRightLeft,
        titleEn: 'Deposit, Transfer & Withdrawal Policy',
        titleKo: '입금 · 전송 · 출금 정책',
        descEn:
        'All asset movement is processed according to internal balance validation, network conditions, queue management, and security review rules.',
        descKo:
        '모든 자산 이동은 내부 잔액 검증, 네트워크 상태, 대기열 관리, 보안 검토 기준에 따라 처리됩니다.',
        pointsEn: [
        'Deposits may require sufficient confirmation before final availability.',
        'Withdrawals may be delayed during maintenance, congestion, or risk review.',
        'Transfer timing depends on fee status, resource availability, and system checks.',
        ],
        pointsKo: [
        '입금은 최종 사용 가능 상태가 되기 전 충분한 확인 절차가 필요할 수 있습니다.',
        '출금은 점검, 혼잡, 리스크 검토 시 지연될 수 있습니다.',
        '전송 시점은 수수료 상태, 자원 가용성, 시스템 점검 결과에 따라 달라질 수 있습니다.',
        ],
    },
    {
        icon: BatteryCharging,
        titleEn: 'Network Resource & Fee Policy',
        titleKo: '네트워크 자원 및 수수료 정책',
        descEn:
        'Blockchain transaction processing may depend on fee conditions, bandwidth, delegated energy, and network-level resource availability.',
        descKo:
        '블록체인 거래 처리는 수수료 상태, 대역폭, 위임 에너지, 네트워크 자원 가용성에 따라 달라질 수 있습니다.',
        pointsEn: [
        'Transaction speeds may vary depending on on-chain resource conditions.',
        'Temporary energy shortages or fee fluctuations may impact execution timing.',
        'The platform may optimize resource allocation for service continuity.',
        ],
        pointsKo: [
        '온체인 자원 상태에 따라 거래 속도가 달라질 수 있습니다.',
        '일시적 에너지 부족이나 수수료 변동은 실행 시점에 영향을 줄 수 있습니다.',
        '서비스 연속성을 위해 플랫폼이 자원 배분을 최적화할 수 있습니다.',
        ],
    },
    {
        icon: Server,
        titleEn: 'Infrastructure Stability Policy',
        titleKo: '인프라 안정성 정책',
        descEn:
        'KORION maintains continuity through monitoring, controlled deployment, service redundancy considerations, and protective operational safeguards.',
        descKo:
        'KORION은 모니터링, 통제된 배포, 이중화 고려, 보호 중심 운영 안전장치를 통해 서비스 연속성을 유지합니다.',
        pointsEn: [
        'Maintenance may be performed to preserve reliability and integrity.',
        'Certain features can be temporarily limited to protect the platform.',
        'Continuity planning is built into the operating framework.',
        ],
        pointsKo: [
        '신뢰성과 무결성을 위해 점검이 수행될 수 있습니다.',
        '플랫폼 보호를 위해 일부 기능이 일시 제한될 수 있습니다.',
        '연속성 계획은 운영 프레임워크에 포함됩니다.',
        ],
    },
    {
        icon: Scale,
        titleEn: 'User Protection & Compliance Guidance',
        titleKo: '사용자 보호 및 컴플라이언스 안내',
        descEn:
        'User safety measures may include account checks, transaction screening, behavior review, and temporary restrictions when necessary.',
        descKo:
        '사용자 보호 조치에는 계정 확인, 거래 스크리닝, 행위 검토, 필요 시 임시 제한이 포함될 수 있습니다.',
        pointsEn: [
        'Additional verification may be requested in certain cases.',
        'Misuse, abuse, or suspicious patterns may trigger protection controls.',
        'The platform may apply safety procedures for ecosystem integrity.',
        ],
        pointsKo: [
        '특정 경우 추가 확인 절차가 요청될 수 있습니다.',
        '오용, 남용, 의심 패턴은 보호 통제를 유발할 수 있습니다.',
        '생태계 무결성을 위해 안전 절차가 적용될 수 있습니다.',
        ],
    },
    {
        icon: Eye,
        titleEn: 'Transparency & User Notice Policy',
        titleKo: '투명성 및 사용자 고지 정책',
        descEn:
        'KORION aims to communicate important standards, operational changes, service notices, and policy updates through official channels.',
        descKo:
        'KORION은 공식 채널을 통해 주요 기준, 운영 변경, 서비스 고지, 정책 업데이트를 투명하게 안내하는 것을 지향합니다.',
        pointsEn: [
        'Material updates may be published through official communication channels.',
        'Policies may evolve with ecosystem growth and service expansion.',
        'Users are encouraged to review this page periodically.',
        ],
        pointsKo: [
        '중요 업데이트는 공식 커뮤니케이션 채널을 통해 공지될 수 있습니다.',
        '정책은 생태계 성장과 서비스 확장에 따라 발전할 수 있습니다.',
        '사용자는 본 페이지를 주기적으로 확인하는 것이 권장됩니다.',
        ],
    },
    ];

    const principles: PrincipleItem[] = [
    {
        titleEn: 'Security First',
        titleKo: '보안 우선',
        descEn:
        'Asset protection, wallet integrity, and controlled execution are prioritized across all critical operations.',
        descKo:
        '자산 보호, 지갑 무결성, 통제된 실행 원칙은 모든 핵심 운영에서 최우선입니다.',
    },
    {
        titleEn: 'Operational Reliability',
        titleKo: '운영 신뢰성',
        descEn:
        'KORION is designed to sustain stable service standards through monitoring, review, and controlled operational responses.',
        descKo:
        'KORION은 모니터링, 검토, 통제된 대응을 통해 안정적인 서비스 기준을 유지하도록 설계됩니다.',
    },
    {
        titleEn: 'Controlled Exposure',
        titleKo: '통제된 노출',
        descEn:
        'Wallet, reserve, and treasury structures are organized to reduce unnecessary direct exposure.',
        descKo:
        '지갑, 준비금, 재무 구조는 불필요한 직접 노출을 줄이도록 구성됩니다.',
    },
    {
        titleEn: 'User-Centered Protection',
        titleKo: '사용자 중심 보호',
        descEn:
        'Protective checks and operational controls help reduce abnormal activity and preserve safer participation.',
        descKo:
        '보호 점검과 운영 통제는 비정상 활동을 줄이고 더 안전한 참여를 돕습니다.',
    },
    {
        titleEn: 'Transparent Communication',
        titleKo: '투명한 커뮤니케이션',
        descEn:
        'Important platform notices and policy guidance are intended to be communicated clearly through official resources.',
        descKo:
        '중요 플랫폼 고지와 정책 안내는 공식 리소스를 통해 명확히 전달되는 것을 원칙으로 합니다.',
    },
    {
        titleEn: 'Scalable Governance',
        titleKo: '확장 가능한 거버넌스',
        descEn:
        'The policy structure is designed to support future growth, additional products, and broader ecosystem operations.',
        descKo:
        '정책 구조는 향후 성장, 추가 제품, 더 넓은 생태계 운영을 지원하도록 설계됩니다.',
    },
    ];

    const architectureItems: ArchitectureItem[] = [
    {
        icon: Wallet,
        titleEn: 'Operational Wallet Layer',
        titleKo: '운영 지갑 레이어',
        descEn:
        'This layer supports routine service execution such as user-facing transfers, balance handling, and operational transaction processing within controlled limits.',
        descKo:
        '이 레이어는 사용자 전송, 잔액 처리, 운영성 거래 실행 등 일상 서비스 수행을 지원하며 통제된 한도 내에서 운용됩니다.',
        tagsEn: ['Service Execution', 'Controlled Limits', 'Active Processing'],
        tagsKo: ['서비스 실행', '통제된 한도', '실시간 처리'],
    },
    {
        icon: Database,
        titleEn: 'Internal Ledger & Queue Layer',
        titleKo: '내부 원장 및 큐 레이어',
        descEn:
        'Internal balance accounting, pending state management, and withdrawal queue control help align service logic with execution integrity.',
        descKo:
        '내부 잔액 회계, 대기 상태 관리, 출금 큐 통제를 통해 서비스 로직과 실행 무결성을 일치시킵니다.',
        tagsEn: ['Balance Integrity', 'Queue Control', 'Pending States'],
        tagsKo: ['잔액 무결성', '큐 제어', '대기 상태'],
    },
    {
        icon: Vault,
        titleEn: 'Reserve / Cold Custody Layer',
        titleKo: '준비금 / 콜드 커스터디 레이어',
        descEn:
        'Long-term reserve handling is separated from active transaction flow to reduce direct exposure and improve treasury protection standards.',
        descKo:
        '장기 준비금 관리는 실시간 거래 흐름과 분리되어 직접 노출을 줄이고 재무 보호 수준을 높입니다.',
        tagsEn: ['Reserve Isolation', 'Reduced Exposure', 'Treasury Safety'],
        tagsKo: ['준비금 분리', '노출 최소화', '재무 안전'],
    },
    ];

    const withdrawalFlow: FlowStep[] = [
    {
        step: '01',
        titleEn: 'Request Creation',
        titleKo: '출금 요청 생성',
        descEn:
        'A withdrawal request is created and the requested amount may enter a pending or locked state under internal balance rules.',
        descKo:
        '출금 요청이 생성되며 요청 금액은 내부 잔액 규칙에 따라 pending 또는 잠금 상태로 전환될 수 있습니다.',
    },
    {
        step: '02',
        titleEn: 'Pre-Validation',
        titleKo: '사전 검증',
        descEn:
        'The system may verify balance consistency, account status, limits, destination conditions, and service-level execution rules.',
        descKo:
        '시스템은 잔액 정합성, 계정 상태, 한도, 목적지 조건, 서비스 실행 기준을 검증할 수 있습니다.',
    },
    {
        step: '03',
        titleEn: 'Risk Screening',
        titleKo: '리스크 스크리닝',
        descEn:
        'Behavior patterns, unusual amounts, abnormal timing, and suspicious transaction signals may be reviewed before release.',
        descKo:
        '행동 패턴, 비정상 금액, 이상 시점, 의심 신호 등이 출금 전 검토될 수 있습니다.',
    },
    {
        step: '04',
        titleEn: 'Resource Allocation',
        titleKo: '네트워크 자원 배정',
        descEn:
        'The platform checks network resource conditions such as fee status, energy availability, and execution timing feasibility.',
        descKo:
        '플랫폼은 수수료 상태, 에너지 가용성, 실행 가능 시점 등 네트워크 자원 상태를 확인합니다.',
    },
    {
        step: '05',
        titleEn: 'Execution & Settlement',
        titleKo: '실행 및 정산',
        descEn:
        'Once approved, the transaction is executed and internal status records are updated to reflect final settlement progress.',
        descKo:
        '승인 후 거래가 실행되며 내부 상태 기록은 최종 정산 진행에 맞춰 업데이트됩니다.',
    },
    ];

    const engineCards: EngineCard[] = [
    {
        icon: ScanSearch,
        titleEn: 'Behavior Monitoring',
        titleKo: '행동 패턴 모니터링',
        descEn:
        'The platform may watch for abnormal transaction behavior, repeated attempts, velocity changes, or suspicious execution patterns.',
        descKo:
        '플랫폼은 비정상 거래 행위, 반복 시도, 속도 변화, 의심 실행 패턴을 감시할 수 있습니다.',
    },
    {
        icon: TimerReset,
        titleEn: 'Queue & Delay Control',
        titleKo: '큐 및 지연 제어',
        descEn:
        'Transactions may be queued, delayed, or staged to preserve stability under congestion, maintenance, or review conditions.',
        descKo:
        '혼잡, 점검, 검토 상황에서는 안정성 유지를 위해 거래가 큐에 들어가거나 지연·단계 처리될 수 있습니다.',
    },
    {
        icon: RadioTower,
        titleEn: 'Network Condition Awareness',
        titleKo: '네트워크 상태 인지',
        descEn:
        'Resource-sensitive chains may require timing control based on bandwidth, energy, fee spikes, or chain congestion.',
        descKo:
        '자원 민감형 체인은 대역폭, 에너지, 수수료 급등, 체인 혼잡에 따른 시점 제어가 필요할 수 있습니다.',
    },
    {
        icon: Workflow,
        titleEn: 'Operational Escalation',
        titleKo: '운영 단계적 대응',
        descEn:
        'When needed, the system may shift a request from automatic handling to enhanced review or stricter internal verification.',
        descKo:
        '필요 시 시스템은 자동 처리 요청을 강화 검토 또는 더 엄격한 내부 확인 단계로 전환할 수 있습니다.',
    },
    ];

    const faqs: FaqItem[] = [
    {
        qEn: 'Why is a deposit visible on-chain but not yet fully available in the app?',
        qKo: '온체인에는 입금이 보이는데 앱에서 바로 사용 가능하지 않은 이유는 무엇인가요?',
        aEn:
        'On-chain visibility and service availability are not always identical. The platform may require additional confirmation, internal indexing, or safety checks before reflecting the final usable balance.',
        aKo:
        '온체인 반영과 서비스 내 사용 가능 상태는 항상 동일하지 않습니다. 최종 사용 가능 잔액으로 반영되기 전 추가 확인, 내부 인덱싱, 안전 점검이 필요할 수 있습니다.',
    },
    {
        qEn: 'Why can a withdrawal be delayed even after I submitted it successfully?',
        qKo: '출금 신청이 정상 접수되었는데도 지연될 수 있는 이유는 무엇인가요?',
        aEn:
        'Withdrawals may be delayed due to risk review, network congestion, maintenance, fee conditions, resource allocation, or other protective operating procedures.',
        aKo:
        '출금은 리스크 검토, 네트워크 혼잡, 점검, 수수료 상태, 자원 배정, 기타 보호 중심 운영 절차로 인해 지연될 수 있습니다.',
    },
    {
        qEn: 'Can the platform temporarily restrict certain features?',
        qKo: '플랫폼이 일부 기능을 일시 제한할 수 있나요?',
        aEn:
        'Yes. Certain features may be temporarily restricted during security response, maintenance, abnormal activity review, or infrastructure protection events.',
        aKo:
        '네. 보안 대응, 점검, 이상 행위 검토, 인프라 보호 상황에서는 일부 기능이 일시 제한될 수 있습니다.',
    },
    {
        qEn: 'Do users have responsibilities under this policy page?',
        qKo: '이 정책 페이지 기준에서 사용자 책임도 있나요?',
        aEn:
        'Yes. Users are expected to protect account credentials, device security, destination accuracy, and follow service guidance published through official channels.',
        aKo:
        '네. 사용자는 계정 정보, 기기 보안, 전송 목적지 정확성 보호 및 공식 채널의 서비스 안내 준수가 요구됩니다.',
    },
    ];

    const policyTimeline = [
    {
        date: 'v1.0',
        titleEn: 'Base Operating Policy',
        titleKo: '기본 운영 정책',
        descEn:
        'Foundational standards for service operation, asset handling, and user guidance.',
        descKo:
        '서비스 운영, 자산 처리, 사용자 안내를 위한 기본 기준 수립.',
    },
    {
        date: 'v1.1',
        titleEn: 'Risk & Wallet Control Enhancement',
        titleKo: '리스크 및 지갑 통제 강화',
        descEn:
        'Expanded guidance for wallet segregation, review procedures, and risk screening logic.',
        descKo:
        '지갑 분리, 검토 절차, 리스크 스크리닝 기준을 확장 반영.',
    },
    {
        date: 'v1.2',
        titleEn: 'Network Resource Policy Expansion',
        titleKo: '네트워크 자원 정책 확장',
        descEn:
        'Added fee, energy, bandwidth, and chain-condition-aware execution standards.',
        descKo:
        '수수료, 에너지, 대역폭, 체인 상태 기반 실행 기준 추가.',
    },
    ];

    const highlights = [
    { icon: Landmark, labelEn: 'Governance', labelKo: '거버넌스' },
    { icon: Wallet, labelEn: 'Wallet Policy', labelKo: '지갑 정책' },
    { icon: Activity, labelEn: 'Risk Controls', labelKo: '리스크 통제' },
    { icon: Cpu, labelEn: 'Infrastructure', labelKo: '인프라' },
    { icon: Users, labelEn: 'User Protection', labelKo: '사용자 보호' },
    { icon: BadgeCheck, labelEn: 'Transparency', labelKo: '투명성' },
    ];

    export function PolicyPage() {
    const { language } = useLanguage();
    const isKo = language === 'KR';

    return (
        <div className="policy-page">
        <section className="policy-page__hero">
            <div className="policy-page__glow policy-page__glow--1" />
            <div className="policy-page__glow policy-page__glow--2" />
            <div className="policy-page__glow policy-page__glow--3" />

            <div className="policy-page__container policy-page__hero-container">
            <div className="policy-page__hero-badge">
                <Sparkles size={16} />
                <span>
                {isKo
                    ? 'KORION 운영 정책 · 리스크 관리 · 사용자 보호 · 네트워크 기준'
                    : 'KORION Operational Policy · Risk Management · User Protection · Network Standards'}
                </span>
            </div>

            <h1 className="policy-page__hero-title">
                {isKo
                ? 'KORION Platform Policy'
                : 'KORION Platform Policy'}
            </h1>

            <p className="policy-page__hero-desc">
                {isKo
                ? '본 페이지는 KORION 생태계와 지갑 서비스 운영을 위한 핵심 정책 프레임워크를 제공합니다. 운영 거버넌스, 자산 보호, 출금 검토, 네트워크 자원 관리, 리스크 통제, 사용자 안내 및 서비스 고지 기준을 통합적으로 정리하여 플랫폼의 신뢰성과 안정성을 강화합니다.'
                : 'This page provides the core policy framework for KORION ecosystem and wallet service operations. It integrates standards for operational governance, asset protection, withdrawal review, network resource management, risk controls, user guidance, and service notice practices to strengthen platform trust and stability.'}
            </p>

            <div className="policy-page__hero-actions">
                <a href="#policy-framework" className="policy-page__primary-btn">
                <span>{isKo ? '정책 프레임워크 보기' : 'View Policy Framework'}</span>
                <ChevronRight size={18} />
                </a>

                <a href="#policy-faq" className="policy-page__secondary-btn">
                <span>{isKo ? '사용자 안내 보기' : 'View User Guidance'}</span>
                </a>
            </div>

            <div className="policy-page__hero-highlights">
                {highlights.map(({ icon: Icon, labelEn, labelKo }) => (
                <div className="policy-page__highlight-chip" key={labelEn}>
                    <Icon size={16} />
                    <span>{isKo ? labelKo : labelEn}</span>
                </div>
                ))}
            </div>
            </div>
        </section>

        <section className="policy-page__overview">
            <div className="policy-page__container">
            <div className="policy-page__overview-grid">
                <div className="policy-page__overview-card">
                <div className="policy-page__overview-icon">
                    <ShieldCheck size={22} />
                </div>
                <h3>{isKo ? '자산 보호 중심 운영' : 'Asset Protection Focus'}</h3>
                <p>
                    {isKo
                    ? '모든 운영 기준은 자산 안전성과 서비스 연속성을 최우선으로 고려합니다.'
                    : 'All operating standards prioritize asset safety and service continuity.'}
                </p>
                </div>

                <div className="policy-page__overview-card">
                <div className="policy-page__overview-icon">
                    <Layers3 size={22} />
                </div>
                <h3>{isKo ? '다층 통제 구조' : 'Layered Control Structure'}</h3>
                <p>
                    {isKo
                    ? '운영, 거래, 인프라, 네트워크 리스크를 다층 구조로 감시하고 대응합니다.'
                    : 'Operational, transaction, infrastructure, and network risks are monitored through layered controls.'}
                </p>
                </div>

                <div className="policy-page__overview-card">
                <div className="policy-page__overview-icon">
                    <BellRing size={22} />
                </div>
                <h3>{isKo ? '명확한 고지 기준' : 'Clear Notice Standards'}</h3>
                <p>
                    {isKo
                    ? '중요 정책과 운영 변경사항은 공식 기준에 따라 사용자에게 안내될 수 있습니다.'
                    : 'Important policy and operational changes may be communicated through official standards and channels.'}
                </p>
                </div>
            </div>
            </div>
        </section>

        <section className="policy-page__framework" id="policy-framework">
            <div className="policy-page__container">
            <div className="policy-page__section-head">
                <span className="policy-page__section-eyebrow">Policy Framework</span>
                <h2>
                {isKo
                    ? '운영 정책을 통합한 핵심 프레임워크'
                    : 'An integrated framework for KORION operating policy'}
                </h2>
                <p>
                {isKo
                    ? '단순한 약관 페이지가 아니라, 실제 운영 기준과 자산 보호 원칙을 체계적으로 정리한 플랫폼 정책 구조입니다.'
                    : 'This is not a simple terms page, but a structured policy architecture covering practical operating standards and asset protection principles.'}
                </p>
            </div>

            <div className="policy-page__framework-grid">
                {frameworkSections.map((section) => {
                const Icon = section.icon;
                return (
                    <article className="policy-page__framework-card" key={section.titleEn}>
                    <div className="policy-page__framework-top">
                        <div className="policy-page__framework-icon">
                        <Icon size={22} />
                        </div>
                        <h3>{isKo ? section.titleKo : section.titleEn}</h3>
                    </div>

                    <p className="policy-page__framework-desc">
                        {isKo ? section.descKo : section.descEn}
                    </p>

                    <ul className="policy-page__framework-list">
                        {(isKo ? section.pointsKo : section.pointsEn).map((point) => (
                        <li key={point}>
                            <FileCheck2 size={16} />
                            <span>{point}</span>
                        </li>
                        ))}
                    </ul>
                    </article>
                );
                })}
            </div>
            </div>
        </section>

        <section className="policy-page__architecture">
            <div className="policy-page__container">
            <div className="policy-page__section-head">
                <span className="policy-page__section-eyebrow">
                {isKo ? 'Wallet Architecture' : 'Wallet Architecture'}
                </span>
                <h2>
                {isKo
                    ? '운영 · 원장 · 준비금 기준을 분리한 구조'
                    : 'A separated architecture for operations, ledger control, and reserves'}
                </h2>
                <p>
                {isKo
                    ? 'KORION 정책 페이지는 지갑 운영 구조를 단순 보관 개념이 아니라, 서비스 실행과 자산 보호를 분리하는 구조로 설명합니다.'
                    : 'The KORION policy page presents wallet operations as a structured separation between service execution and asset protection, not just simple custody.'}
                </p>
            </div>

            <div className="policy-page__architecture-grid">
                {architectureItems.map((item) => {
                const Icon = item.icon;
                return (
                    <article className="policy-page__architecture-card" key={item.titleEn}>
                    <div className="policy-page__architecture-icon">
                        <Icon size={22} />
                    </div>
                    <h3>{isKo ? item.titleKo : item.titleEn}</h3>
                    <p>{isKo ? item.descKo : item.descEn}</p>

                    <div className="policy-page__architecture-tags">
                        {(isKo ? item.tagsKo : item.tagsEn).map((tag) => (
                        <span key={tag}>{tag}</span>
                        ))}
                    </div>
                    </article>
                );
                })}
            </div>
            </div>
        </section>

        <section className="policy-page__flow">
            <div className="policy-page__container">
            <div className="policy-page__section-head">
                <span className="policy-page__section-eyebrow">
                {isKo ? 'Withdrawal Flow' : 'Withdrawal Flow'}
                </span>
                <h2>
                {isKo
                    ? '출금 요청부터 실행까지의 정책 흐름'
                    : 'Policy flow from withdrawal request to execution'}
                </h2>
            </div>

            <div className="policy-page__flow-list">
                {withdrawalFlow.map((item) => (
                <div className="policy-page__flow-item" key={item.step}>
                    <div className="policy-page__flow-step">{item.step}</div>
                    <div className="policy-page__flow-line" />
                    <div className="policy-page__flow-card">
                    <h3>{isKo ? item.titleKo : item.titleEn}</h3>
                    <p>{isKo ? item.descKo : item.descEn}</p>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>

        <section className="policy-page__resources">
            <div className="policy-page__container">
            <div className="policy-page__resources-shell">
                <div className="policy-page__resources-main">
                <span className="policy-page__section-eyebrow">
                    {isKo ? 'Network Resource Policy' : 'Network Resource Policy'}
                </span>
                <h2>
                    {isKo
                    ? 'TRON 에너지 · 대역폭 · 수수료 상태를 고려한 실행 기준'
                    : 'Execution standards aware of TRON energy, bandwidth, and fee conditions'}
                </h2>
                <p>
                    {isKo
                    ? '네트워크 자원 기반 체인에서는 서비스 처리 속도와 실행 가능성이 온체인 조건에 영향을 받을 수 있습니다. KORION은 수수료 급등, 에너지 부족, 대역폭 상황, 체인 혼잡도 등을 고려한 자원 인지형 운영 정책을 적용할 수 있습니다.'
                    : 'On resource-sensitive chains, service timing and execution feasibility may be influenced by on-chain conditions. KORION may apply resource-aware operating standards that consider fee spikes, energy shortages, bandwidth conditions, and chain congestion.'}
                </p>

                <div className="policy-page__resource-points">
                    <div className="policy-page__resource-point">
                    <Clock3 size={18} />
                    <span>
                        {isKo
                        ? '네트워크 상태에 따라 처리 시점이 달라질 수 있습니다.'
                        : 'Execution timing may vary based on network conditions.'}
                    </span>
                    </div>
                    <div className="policy-page__resource-point">
                    <BatteryCharging size={18} />
                    <span>
                        {isKo
                        ? '에너지 또는 대역폭 가용성은 서비스 실행 정책에 반영될 수 있습니다.'
                        : 'Energy or bandwidth availability may influence service execution policy.'}
                    </span>
                    </div>
                    <div className="policy-page__resource-point">
                    <CheckCircle2 size={18} />
                    <span>
                        {isKo
                        ? '플랫폼은 자원 효율성과 서비스 연속성 사이의 균형을 고려합니다.'
                        : 'The platform balances resource efficiency and service continuity.'}
                    </span>
                    </div>
                </div>
                </div>

                <div className="policy-page__resources-side">
                <div className="policy-page__resource-stat">
                    <span>{isKo ? '정책 관점' : 'Policy View'}</span>
                    <strong>{isKo ? '자원 인지형 운영' : 'Resource-Aware Operations'}</strong>
                </div>
                <div className="policy-page__resource-stat">
                    <span>{isKo ? '처리 기준' : 'Execution Basis'}</span>
                    <strong>{isKo ? '수수료 · 에너지 · 혼잡도' : 'Fee · Energy · Congestion'}</strong>
                </div>
                <div className="policy-page__resource-stat">
                    <span>{isKo ? '목표' : 'Goal'}</span>
                    <strong>{isKo ? '안정성과 지속성' : 'Stability & Continuity'}</strong>
                </div>
                </div>
            </div>
            </div>
        </section>

        <section className="policy-page__engine">
            <div className="policy-page__container">
            <div className="policy-page__section-head">
                <span className="policy-page__section-eyebrow">
                {isKo ? 'Risk Engine' : 'Risk Engine'}
                </span>
                <h2>
                {isKo
                    ? '플랫폼 보호를 위한 운영형 리스크 엔진 관점'
                    : 'An operational risk engine perspective for platform protection'}
                </h2>
            </div>

            <div className="policy-page__engine-grid">
                {engineCards.map((card) => {
                const Icon = card.icon;
                return (
                    <article className="policy-page__engine-card" key={card.titleEn}>
                    <div className="policy-page__engine-icon">
                        <Icon size={20} />
                    </div>
                    <h3>{isKo ? card.titleKo : card.titleEn}</h3>
                    <p>{isKo ? card.descKo : card.descEn}</p>
                    </article>
                );
                })}
            </div>
            </div>
        </section>

        <section className="policy-page__principles">
            <div className="policy-page__container">
            <div className="policy-page__section-head">
                <span className="policy-page__section-eyebrow">
                {isKo ? 'Core Principles' : 'Core Principles'}
                </span>
                <h2>
                {isKo
                    ? 'KORION 정책을 구성하는 핵심 원칙'
                    : 'Core principles shaping the KORION policy standard'}
                </h2>
            </div>

            <div className="policy-page__principles-grid">
                {principles.map((item) => (
                <div className="policy-page__principle-card" key={item.titleEn}>
                    <h3>{isKo ? item.titleKo : item.titleEn}</h3>
                    <p>{isKo ? item.descKo : item.descEn}</p>
                </div>
                ))}
            </div>
            </div>
        </section>

        <section className="policy-page__timeline">
            <div className="policy-page__container">
            <div className="policy-page__section-head">
                <span className="policy-page__section-eyebrow">
                {isKo ? 'Policy Evolution' : 'Policy Evolution'}
                </span>
                <h2>
                {isKo
                    ? '운영 기준은 생태계 성장에 따라 발전합니다'
                    : 'Operating standards evolve with ecosystem growth'}
                </h2>
            </div>

            <div className="policy-page__timeline-list">
                {policyTimeline.map((item) => (
                <div className="policy-page__timeline-item" key={item.date + item.titleEn}>
                    <div className="policy-page__timeline-badge">{item.date}</div>
                    <div className="policy-page__timeline-content">
                    <h3>{isKo ? item.titleKo : item.titleEn}</h3>
                    <p>{isKo ? item.descKo : item.descEn}</p>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>

        <section className="policy-page__faq" id="policy-faq">
            <div className="policy-page__container">
            <div className="policy-page__faq-shell">
                <div className="policy-page__faq-left">
                <span className="policy-page__section-eyebrow">
                    {isKo ? 'User Guidance' : 'User Guidance'}
                </span>
                <h2>
                    {isKo
                    ? '사용자가 자주 궁금해하는 정책 안내'
                    : 'Policy guidance users most often need'}
                </h2>
                <p>
                    {isKo
                    ? '입금 반영 시점, 출금 지연, 기능 제한, 사용자 책임 등 실제 서비스 이용 중 자주 궁금해지는 핵심 내용을 정리했습니다.'
                    : 'This section covers practical questions users often have during real service use, including deposit availability, withdrawal delay, temporary restrictions, and user responsibility.'}
                </p>
                </div>

                <div className="policy-page__faq-right">
                {faqs.map((item) => (
                    <div className="policy-page__faq-item" key={item.qEn}>
                    <div className="policy-page__faq-q">
                        <HelpCircle size={18} />
                        <h3>{isKo ? item.qKo : item.qEn}</h3>
                    </div>
                    <p>{isKo ? item.aKo : item.aEn}</p>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </section>

        <section className="policy-page__final">
            <div className="policy-page__container">
            <div className="policy-page__final-panel">
                <div className="policy-page__final-icon">
                <ArrowUpRight size={22} />
                </div>

                <div className="policy-page__final-content">
                <h2>
                    {isKo
                    ? '정책 페이지의 목적과 적용 방향'
                    : 'Purpose and application direction of this policy page'}
                </h2>
                <p>
                    {isKo
                    ? '본 정책 페이지는 KORION 플랫폼과 지갑 서비스의 운영 원칙을 사용자, 파트너, 투자자, 이해관계자에게 명확히 전달하기 위한 기준 문서입니다. 정책은 서비스 확장, 보안 강화, 운영 구조 개선, 생태계 성장에 따라 조정될 수 있으며 최신 기준은 공식 채널과 플랫폼 리소스에 반영될 수 있습니다.'
                    : 'This policy page serves as a standard reference that communicates the operating principles of the KORION platform and wallet services to users, partners, investors, and stakeholders. Policies may be adjusted as services expand, security standards improve, operating structures evolve, and the ecosystem grows, with the latest standards reflected through official channels and platform resources.'}
                </p>
                </div>
            </div>
            </div>
        </section>
        </div>
    );
    }