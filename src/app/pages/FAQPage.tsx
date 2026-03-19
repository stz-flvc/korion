import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    BadgeCheck,
    ChevronDown,
    FileText,
    HelpCircle,
    LockKeyhole,
    ShieldCheck,
    Sparkles,
    Wallet,
    Globe,
    Layers3,
    Users,
    } from "lucide-react";
    import { Link } from "react-router";
    import { useLanguage } from "../contexts/LanguageContext";
    import "./FAQPage.css";

    type FaqItem = {
    category: string;
    icon: React.ElementType;
    questionKo: string;
    questionEn: string;
    answerKo: string;
    answerEn: string;
    };

    const faqItems: FaqItem[] = [
    {
        category: "project",
        icon: Sparkles,
        questionKo: "KORION은 어떤 방향의 프로젝트인가요?",
        questionEn: "What direction is KORION pursuing as a project?",
        answerKo:
        "KORION은 단순한 토큰 발행에 머무르지 않고, 결제, 지갑, 생태계 서비스, 브랜드 확장성을 하나의 구조 안에서 연결하는 방향을 지향합니다. 프로젝트의 핵심은 실사용 기반의 확장성과 일관된 서비스 경험에 있습니다.",
        answerEn:
        "KORION aims to go beyond simple token issuance by connecting payments, wallets, ecosystem services, and brand scalability within one integrated structure. Its core focus is practical utility expansion and a consistent service experience.",
    },
    {
        category: "project",
        icon: Layers3,
        questionKo: "KORION 생태계는 무엇을 중심으로 확장되나요?",
        questionEn: "What is the KORION ecosystem expanding around?",
        answerKo:
        "KORION 생태계는 지갑 경험, 디지털 결제, 서비스 연계성, 커뮤니티 확장성을 중심으로 설계됩니다. 단순 보유형 자산이 아니라 실제 서비스 흐름과 연결되는 구조가 중요하게 다뤄집니다.",
        answerEn:
        "The KORION ecosystem is designed around wallet experience, digital payments, service connectivity, and community scalability. The emphasis is not on passive holding alone, but on building a structure tied to actual service flows.",
    },

    {
        category: "investor",
        icon: BadgeCheck,
        questionKo: "투자자 입장에서 가장 먼저 확인해야 할 것은 무엇인가요?",
        questionEn: "What should investors review first?",
        answerKo:
        "투자자 입장에서는 프로젝트가 무엇을 해결하려는지, 어떤 서비스 구조를 가지고 있는지, 브랜드와 운영 방향이 일관적인지 먼저 확인하는 것이 중요합니다. 백서, 로드맵, 기술 구조, 보안 정책, 서비스 연결성을 함께 보는 것이 바람직합니다.",
        answerEn:
        "From an investor perspective, it is important to first review what problem the project aims to address, how its service structure is designed, and whether its branding and operational direction are consistent. Reviewing the whitepaper, roadmap, technical structure, security posture, and service connectivity together is recommended.",
    },
    {
        category: "investor",
        icon: ShieldCheck,
        questionKo: "KORION은 신뢰성을 어떻게 보여주나요?",
        questionEn: "How does KORION present credibility?",
        answerKo:
        "신뢰성은 단순 홍보 문구보다 구조적 완성도에서 나옵니다. KORION은 페이지 구성, 문서화, 브랜드 정리, 기술 정보, 운영 흐름, 보안 관련 설명을 통해 프로젝트의 방향성과 준비도를 일관되게 전달하는 방식이 중요합니다.",
        answerEn:
        "Credibility comes more from structural completeness than from promotional language. KORION emphasizes consistent presentation of its direction and readiness through page architecture, documentation, brand consistency, technical information, operational flow, and security-related communication.",
    },
    {
        category: "investor",
        icon: Sparkles,
        questionKo: "KORION이 장기적으로 주목받을 수 있는 이유는 무엇인가요?",
        questionEn: "Why does KORION have long-term attention potential?",
        answerKo:
        "KORION의 강점은 단기 이슈성보다도 구조적 확장 가능성에 있습니다. 프로젝트는 단순 토큰 중심이 아니라 지갑, 결제, 서비스 연결, 브랜드 경험, 문서화된 구조를 함께 갖추는 방향으로 확장될 수 있습니다. 투자자 관점에서는 이러한 다층적 연결 구조가 장기적인 관심과 지속 가능성을 판단하는 중요한 요소가 됩니다.",
        answerEn:
        "KORION’s strength lies not in short-term visibility, but in its structural expansion potential. The project can grow beyond a token-centered model into a broader framework involving wallet experience, payments, service connectivity, brand experience, and documented structure. From an investor perspective, this layered architecture is an important factor in assessing long-term relevance and sustainability.",
    },
    {
        category: "investor",
        icon: BadgeCheck,
        questionKo: "KORION은 단순한 토큰 프로젝트와 무엇이 다른가요?",
        questionEn: "What differentiates KORION from a simple token project?",
        answerKo:
        "KORION은 단순 발행과 거래만을 위한 구조보다, 실제 사용자 접점과 서비스 경험을 함께 만드는 방향성이 중요합니다. 지갑, 결제 확장성, 문서 구조, 개발자 페이지, 브랜드 자산, 커뮤니티 연결성 등은 프로젝트가 단순 자산이 아니라 하나의 서비스 생태계로 발전하려는 흐름을 보여줍니다.",
        answerEn:
        "KORION is shaped around more than issuance and trading. Its direction emphasizes real user touchpoints and service experience. The presence of wallet potential, payment expansion, documentation structure, developer materials, brand assets, and community linkage reflects an effort to grow beyond a simple asset into a service ecosystem.",
    },
    {
        category: "investor",
        icon: Wallet,
        questionKo: "KORION App은 투자자에게 왜 중요한 요소인가요?",
        questionEn: "Why is the KORION App important from an investor perspective?",
        answerKo:
        "앱은 단순한 사용자 화면이 아니라 프로젝트의 실사용성과 접점 구조를 보여주는 핵심 요소입니다. 사용자가 실제로 접속하고 경험하고 반복적으로 이용할 수 있는 플랫폼이 존재할수록 프로젝트의 지속성은 더 강하게 인식됩니다. 투자자 입장에서는 앱이 있다는 사실보다, 앱이 생태계 확장의 중심이 될 수 있다는 점이 더 중요합니다.",
        answerEn:
        "An app is more than a user interface. It is a core signal of practical utility and user touchpoint structure. The stronger the platform is as a place where users can engage repeatedly and meaningfully, the more sustainable the project appears. For investors, the key point is not merely that an app exists, but that it can serve as a hub for ecosystem expansion.",
    },
    {
        category: "investor",
        icon: Layers3,
        questionKo: "투자자는 KORION의 어떤 확장 가능성을 볼 수 있나요?",
        questionEn: "What type of expansion potential can investors see in KORION?",
        answerKo:
        "투자자는 KORION에서 기능 확장, 서비스 연계, 브랜드 확장, 커뮤니티 성장, 파트너 연결 가능성을 함께 볼 수 있습니다. 단일 기능이 아닌 복합적인 확장 구조를 가진 프로젝트는 시장 내에서 더 다양한 방향으로 가치가 형성될 수 있으며, KORION은 이러한 가능성을 담을 수 있는 기반을 갖추는 방향으로 해석할 수 있습니다.",
        answerEn:
        "Investors can view KORION through multiple dimensions of expansion: feature growth, service integration, brand scalability, community development, and partnership potential. Projects with multi-layered expansion pathways can create value across more than one direction in the market, and KORION can be interpreted as building a foundation for that kind of opportunity.",
    },
    {
        category: "investor",
        icon: ShieldCheck,
        questionKo: "KORION의 브랜드와 페이지 구조가 왜 투자 판단에 도움이 되나요?",
        questionEn: "Why do brand and page structure matter in investment evaluation?",
        answerKo:
        "프로젝트의 브랜드와 페이지 구조는 단순 디자인 문제가 아니라, 준비도와 정보 전달 능력을 보여주는 신호입니다. 잘 정리된 홈페이지, 백서, FAQ, 미디어 키트, 개발자 자료는 프로젝트가 외부 이해관계자에게 무엇을 어떻게 설명할지 준비되어 있음을 보여줍니다. 투자자에게 이는 구조적 신뢰의 일부로 작용할 수 있습니다.",
        answerEn:
        "Brand and page structure are not just design matters. They signal readiness and communication discipline. A well-organized homepage, whitepaper, FAQ, media kit, and developer materials show that the project is prepared to explain itself clearly to external stakeholders. For investors, this can contribute meaningfully to structural trust.",
    },
    {
        category: "investor",
        icon: Sparkles,
        questionKo: "왜 지금 KORION을 검토할 만한 시점인가요?",
        questionEn: "Why is now a meaningful time to review KORION?",
        answerKo:
        "투자자는 보통 프로젝트가 충분히 대중화된 이후보다, 구조와 방향성이 정리되어 가는 초기에 더 큰 관심을 가집니다. KORION은 브랜드, 문서, 서비스 연결 구조, 개발자 자료, 생태계 방향성을 함께 정리해 가는 흐름을 보여줄 수 있으며, 이러한 단계는 프로젝트를 선제적으로 검토하려는 투자자에게 중요한 관찰 포인트가 됩니다.",
        answerEn:
        "Investors often become most interested not after a project is already fully mainstream, but during the stage when its structure and direction are becoming clearly organized. KORION can present a developing framework across brand, documentation, service linkage, developer resources, and ecosystem direction, making this stage a meaningful point of review for early evaluators.",
    },
    {
        category: "investor",
        icon: BadgeCheck,
        questionKo: "투자자가 KORION에서 가장 주의 깊게 봐야 할 성장 신호는 무엇인가요?",
        questionEn: "What growth signals should investors watch most closely in KORION?",
        answerKo:
        "투자자는 단순 가격보다 프로젝트가 실제로 확장될 수 있는 신호를 더 중요하게 봅니다. 예를 들어 서비스 연결성, 앱 및 지갑 접점, 문서 완성도, 커뮤니티 반응, 브랜드 정리 수준, 외부 협업 가능성 등은 프로젝트의 성장 방향을 판단하는 핵심 지표가 될 수 있습니다. KORION은 이러한 구조적 신호를 축적해 나갈 수 있는 프로젝트로 해석될 수 있습니다.",
        answerEn:
        "Investors often prioritize signals of real expansion over price alone. Examples include service connectivity, wallet and app touchpoints, documentation maturity, community response, brand consistency, and external collaboration potential. These can serve as key indicators of growth direction, and KORION can be viewed as a project building toward those structural signals.",
    },
    {
        category: "investor",
        icon: Layers3,
        questionKo: "KORION이 시장에서 더 크게 확장될 수 있는 이유는 무엇인가요?",
        questionEn: "What could allow KORION to scale more meaningfully in the market?",
        answerKo:
        "시장에서 더 크게 확장되는 프로젝트는 단일 기능보다 복합적인 접점을 갖는 경우가 많습니다. KORION은 지갑, 결제, 서비스 연계, 브랜드 자산, 커뮤니티, 문서화 구조를 함께 갖추는 방향으로 확장될 수 있어, 단순 토큰을 넘어 하나의 서비스형 생태계로 인식될 여지가 있습니다. 이러한 점은 투자자에게 장기 검토 포인트가 될 수 있습니다.",
        answerEn:
        "Projects that scale more meaningfully in the market often build multiple connected touchpoints rather than relying on a single function. KORION can expand through wallet, payments, service linkage, brand assets, community, and documentation structure, creating room to be seen as more than a simple token and closer to a service-driven ecosystem. This can become a meaningful long-term evaluation point for investors.",
    },
    {
        category: "investor",
        icon: Wallet,
        questionKo: "실사용 구조는 왜 투자 판단에서 중요한가요?",
        questionEn: "Why does practical utility matter in investment evaluation?",
        answerKo:
        "실사용 구조가 있는 프로젝트는 단기 이슈에만 의존하지 않고, 사용자 접점과 서비스 흐름을 통해 지속적인 관심을 만들 가능성이 높습니다. KORION은 앱, 지갑, 결제 및 서비스 연계 흐름을 통해 실사용 기반 확장을 보여줄 수 있기 때문에, 투자자 입장에서는 프로젝트의 생명력과 확장성을 판단하는 데 중요한 요소가 됩니다.",
        answerEn:
        "Projects with practical utility are less dependent on short-term attention alone and have more potential to create sustained interest through user touchpoints and service flows. Because KORION can present expansion through app, wallet, payment, and service connectivity, this becomes an important factor for investors assessing project durability and scalability.",
    },
    {
        category: "investor",
        icon: ShieldCheck,
        questionKo: "왜 일부 투자자는 초기에 직접 문의까지 진행하나요?",
        questionEn: "Why do some investors choose to reach out directly at an early stage?",
        answerKo:
        "초기 검토 단계에서 직접 문의를 진행하는 투자자는 공개 정보만으로는 확인하기 어려운 프로젝트의 준비도, 팀의 방향성, 향후 계획, 협업 가능성 등을 더 구체적으로 확인하려는 경우가 많습니다. KORION처럼 구조, 문서, 브랜드, 서비스 방향이 함께 정리되는 프로젝트는 이러한 추가 대화를 통해 더 입체적으로 평가될 수 있습니다.",
        answerEn:
        "Investors who reach out directly during an early review stage often want to assess elements that are harder to confirm through public materials alone, such as team direction, project readiness, future planning, and collaboration potential. In a project like KORION, where structure, documentation, brand, and service direction are being organized together, direct discussion can support a more complete evaluation.",
    },
    {
        category: "investor",
        icon: FileText,
        questionKo: "공개 자료만 봐도 KORION의 준비도를 느낄 수 있나요?",
        questionEn: "Can KORION’s level of preparation be seen through its public materials alone?",
        answerKo:
        "공개 자료는 프로젝트의 전체를 모두 보여주지는 않지만, 방향성과 준비도를 판단하는 중요한 단서를 제공합니다. 홈페이지, 백서, FAQ, 미디어 키트, 개발자 자료가 서로 일관되게 연결되어 있다면 프로젝트가 외부 이해관계자와의 소통을 체계적으로 준비하고 있다는 신호로 해석될 수 있습니다.",
        answerEn:
        "Public materials may not reveal everything about a project, but they do provide important signals about direction and readiness. When the homepage, whitepaper, FAQ, media kit, and developer resources connect consistently, this can be interpreted as a sign that the project is preparing systematically for communication with external stakeholders.",
    },
    {
        category: "investor",
        icon: Globe,
        questionKo: "KORION은 어떤 투자자에게 더 매력적으로 보일 수 있나요?",
        questionEn: "What type of investor may find KORION especially attractive?",
        answerKo:
        "KORION은 단순 단기 변동보다 구조적 성장 가능성, 서비스 확장성, 브랜드 구축, 실사용 접점을 함께 보는 투자자에게 더 매력적으로 보일 수 있습니다. 즉 단순 시세보다 프로젝트가 어떤 방향으로 커질 수 있는지, 어떤 생태계를 만들 수 있는지에 관심이 있는 투자자에게 적합한 검토 대상이 될 수 있습니다.",
        answerEn:
        "KORION may appear especially attractive to investors who look beyond short-term movement and focus instead on structural growth potential, service scalability, brand building, and practical user touchpoints. In other words, it may be a stronger fit for investors interested in how a project can grow and what type of ecosystem it can build over time.",
    },
    {
        category: "investor",
        icon: Users,
        questionKo: "추가 문의를 하면 어떤 부분을 더 확인할 수 있나요?",
        questionEn: "What can be explored further through direct inquiry?",
        answerKo:
        "직접 문의를 통해서는 공개 페이지에서 다 담기 어려운 프로젝트 배경, 서비스 확장 로드맵, 운영 방향, 협업 가능성, 자료 요청 범위 등을 더 구체적으로 확인할 수 있습니다. 투자자나 파트너 후보에게는 이러한 대화가 프로젝트 적합성을 판단하는 중요한 단계가 될 수 있습니다.",
        answerEn:
        "Direct inquiry can help explore areas that public pages cannot fully cover, such as project background, service expansion roadmap, operational direction, collaboration potential, and the scope of additional materials available. For investors or prospective partners, this type of discussion can become an important step in evaluating fit.",
    },

    {
        category: "wallet",
        icon: Wallet,
        questionKo: "KORION Wallet은 어떤 역할을 하나요?",
        questionEn: "What role does KORION Wallet play?",
        answerKo:
        "KORION Wallet은 단순 잔액 보관 기능을 넘어 생태계와 사용자 경험을 연결하는 핵심 진입점으로 작동할 수 있습니다. 자산 확인, 서비스 연결, 향후 확장 기능 수용 등 다양한 접점의 중심으로 해석할 수 있습니다.",
        answerEn:
        "KORION Wallet can serve as more than a balance-holding tool; it can function as a core gateway connecting the ecosystem and user experience. It may act as a central touchpoint for asset visibility, service connectivity, and future feature expansion.",
    },
    {
        category: "wallet",
        icon: LockKeyhole,
        questionKo: "지갑 관련해서 사용자가 가장 중요하게 봐야 할 부분은 무엇인가요?",
        questionEn: "What is most important for users to consider regarding the wallet?",
        answerKo:
        "사용자는 지갑의 사용 편의성뿐 아니라 보안 구조, 운영 정책, 자산 처리 흐름, 서비스 연계 가능성 등을 함께 봐야 합니다. 좋은 지갑은 보기 좋은 인터페이스를 넘어서 운영 안정성과 확장성을 함께 가져야 합니다.",
        answerEn:
        "Users should consider not only wallet usability, but also its security structure, operating policies, asset handling flow, and service integration potential. A strong wallet should provide both interface quality and operational reliability with room for future expansion.",
    },

    {
        category: "security",
        icon: ShieldCheck,
        questionKo: "보안 측면에서 FAQ 페이지에 왜 이런 내용이 필요한가요?",
        questionEn: "Why does a FAQ page need to address security-related topics?",
        answerKo:
        "투자자와 사용자 모두 프로젝트를 평가할 때 보안과 운영 구조를 함께 봅니다. FAQ는 기술 문서보다 더 쉽게 핵심 내용을 전달할 수 있기 때문에, 프로젝트 신뢰도를 높이는 중요한 접점이 됩니다.",
        answerEn:
        "Both investors and users evaluate projects based on security and operational structure. Since a FAQ page can communicate these essentials more clearly than technical documents, it becomes an important trust-building touchpoint.",
    },
    {
        category: "security",
        icon: LockKeyhole,
        questionKo: "보안 정보는 어디까지 공개하는 것이 좋나요?",
        questionEn: "How much security information should be disclosed publicly?",
        answerKo:
        "사용자 신뢰를 위해 보안 철학과 운영 원칙은 충분히 설명하되, 실제 공격에 악용될 수 있는 세부 내부 로직은 과도하게 공개하지 않는 균형이 중요합니다. 공개용 정보와 내부 운영 정보는 분리해서 관리하는 것이 일반적입니다.",
        answerEn:
        "It is important to explain security philosophy and operating principles clearly enough to build trust, while avoiding disclosure of overly detailed internal logic that could be abused. Public-facing information and internal operational details are typically managed separately.",
    },

    {
        category: "docs",
        icon: FileText,
        questionKo: "백서와 FAQ는 어떤 차이가 있나요?",
        questionEn: "What is the difference between the whitepaper and the FAQ?",
        answerKo:
        "백서는 프로젝트의 전체 구조와 비전, 기술, 토크노믹스, 로드맵 등을 종합적으로 다루는 문서입니다. FAQ는 사용자가 가장 자주 궁금해하는 핵심 질문을 빠르게 이해할 수 있도록 정리한 실용적인 안내 페이지입니다.",
        answerEn:
        "A whitepaper covers the project’s full structure, vision, technology, tokenomics, and roadmap in a comprehensive document. A FAQ is a practical guide organized around the most common user questions for faster understanding.",
    },
    {
        category: "docs",
        icon: Globe,
        questionKo: "처음 방문한 사람이 어떤 페이지부터 보면 좋나요?",
        questionEn: "Which pages should a first-time visitor review first?",
        answerKo:
        "처음 방문한 경우에는 Home, About, Whitepaper, Tokenomics, FAQ, Developers 순서로 보는 것이 좋습니다. 이렇게 보면 프로젝트의 인상, 구조, 문서화 수준, 확장 가능성을 자연스럽게 파악할 수 있습니다.",
        answerEn:
        "For first-time visitors, a useful order is Home, About, Whitepaper, Tokenomics, FAQ, and then Developers. This sequence helps build a natural understanding of the project’s identity, structure, documentation quality, and scalability.",
    },

    {
        category: "community",
        icon: Users,
        questionKo: "커뮤니티와 파트너 관점에서 FAQ는 왜 중요한가요?",
        questionEn: "Why is the FAQ important for community members and partners?",
        answerKo:
        "FAQ는 반복되는 질문에 대한 일관된 기준 답변을 제공해 커뮤니케이션 효율을 높여줍니다. 커뮤니티 운영, 파트너 미팅, 외부 소개 자료, 미디어 응대에서도 기본 신뢰도를 높여주는 역할을 합니다.",
        answerEn:
        "A FAQ improves communication efficiency by providing a consistent baseline answer to recurring questions. It also helps strengthen credibility in community operations, partner meetings, external introductions, and media responses.",
    },
    {
        category: "community",
        icon: HelpCircle,
        questionKo: "추가 질문이나 협업 문의는 어디로 하면 되나요?",
        questionEn: "Where should additional questions or partnership inquiries be directed?",
        answerKo:
        "추가 질문, 파트너십, 미디어 문의 등은 공식 Contact 페이지를 통해 연결되도록 안내하는 것이 좋습니다. FAQ는 기본적인 이해를 돕고, 실제 협업 대화는 별도 채널로 이어지게 하는 구조가 효율적입니다.",
        answerEn:
        "Additional questions, partnerships, and media-related inquiries are best directed through the official Contact page. The FAQ helps build foundational understanding, while actual collaboration discussions should continue through a dedicated channel.",
    },
    ];

    const categoryMeta = [
    { key: "all", labelKo: "전체", labelEn: "All" },
    { key: "project", labelKo: "프로젝트", labelEn: "Project" },
    { key: "investor", labelKo: "투자자", labelEn: "Investor" },
    { key: "wallet", labelKo: "지갑", labelEn: "Wallet" },
    { key: "security", labelKo: "보안", labelEn: "Security" },
    { key: "docs", labelKo: "문서", labelEn: "Documents" },
    { key: "community", labelKo: "커뮤니티", labelEn: "Community" },
    ];

    const insightCards = [
    {
        icon: BadgeCheck,
        titleKo: "신뢰도 강화",
        titleEn: "Trust Reinforcement",
        descKo:
        "FAQ는 프로젝트가 질문을 피하지 않고 구조적으로 정리되어 있음을 보여주는 신뢰 요소입니다.",
        descEn:
        "A well-built FAQ signals that the project does not avoid key questions and is structurally organized.",
    },
    {
        icon: ShieldCheck,
        titleKo: "운영 가시성",
        titleEn: "Operational Visibility",
        descKo:
        "문서와 정책, 안내 구조가 갖춰져 있을수록 외부에서 보는 프로젝트의 준비도는 높아집니다.",
        descEn:
        "The more complete the documentation, policy, and guidance structure, the more prepared the project appears externally.",
    },
    {
        icon: Sparkles,
        titleKo: "브랜드 완성도",
        titleEn: "Brand Completeness",
        descKo:
        "디자인과 문구, 정보 구조가 정리된 FAQ는 브랜드의 품질을 자연스럽게 끌어올립니다.",
        descEn:
        "A refined FAQ with organized design, language, and information architecture naturally elevates brand quality.",
    },
    ];

    export function FAQPage() {
    const { language } = useLanguage();
    const isKo = language === "KR";

    const [activeCategory, setActiveCategory] = useState("all");
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const filteredFaqs = useMemo(() => {
        if (activeCategory === "all") return faqItems;
        return faqItems.filter((item) => item.category === activeCategory);
    }, [activeCategory]);

    return (
        <div className="faq-page">
        <section className="faq-hero">
            <div className="faq-hero__bg">
            <div className="faq-hero__orb faq-hero__orb--one" />
            <div className="faq-hero__orb faq-hero__orb--two" />
            <div className="faq-hero__grid" />
            <div className="faq-hero__line faq-hero__line--left" />
            <div className="faq-hero__line faq-hero__line--right" />
            </div>

            <div className="faq-page__container faq-hero__container">
            <motion.div
                className="faq-hero__content"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="faq-hero__eyebrow">
                <HelpCircle size={16} />
                <span>{isKo ? "KORION FAQ" : "KORION FAQ"}</span>
                </div>

                <h1 className="faq-hero__title">
                {isKo
                    ? "투자자와 파트너가 가장 먼저 확인하는 핵심 질문"
                    : "The key questions investors and partners review first"}
                </h1>

                <p className="faq-hero__description">
                {isKo
                    ? "이 페이지는 단순 안내가 아니라, KORION의 구조, 확장성, 실사용 접점, 문서화 수준을 빠르게 이해할 수 있도록 설계된 핵심 정보 허브입니다. 프로젝트를 더 깊이 검토하려는 투자자와 파트너에게 중요한 출발점이 됩니다."
                    : "This page is more than simple guidance. It is a core information hub designed to quickly communicate KORION’s structure, scalability, practical touchpoints, and documentation maturity. It serves as an important starting point for investors and partners seeking deeper review."}
                </p>

                <div className="faq-hero__actions">
                <a href="#faq-list" className="faq-hero__primary">
                    <HelpCircle size={18} />
                    <span>{isKo ? "질문 보기" : "Browse Questions"}</span>
                </a>

                <Link to="/whitepaper" className="faq-hero__secondary">
                    <FileText size={18} />
                    <span>{isKo ? "백서 보기" : "View Whitepaper"}</span>
                </Link>
                </div>

                <div className="faq-hero__mini-note">
                <BadgeCheck size={15} />
                <span>
                    {isKo
                    ? "투자자, 파트너, 사용자 모두가 빠르게 핵심을 파악할 수 있도록 구성되었습니다."
                    : "Structured so investors, partners, and users can quickly identify the essentials."}
                </span>
                </div>
            </motion.div>

            <motion.div
                className="faq-hero__visual"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.85, delay: 0.08 }}
            >
                <div className="faq-hero-card">
                <div className="faq-hero-card__glow" />
                <div className="faq-hero-card__top">
                    <div className="faq-hero-card__badge">
                    <HelpCircle size={18} />
                    </div>
                    <div>
                    <p>{isKo ? "신뢰형 정보 허브" : "Trust-oriented info hub"}</p>
                    <h3>{isKo ? "KORION FAQ Center" : "KORION FAQ Center"}</h3>
                    </div>
                </div>

                <div className="faq-hero-card__list">
                    <div className="faq-hero-card__item">
                    <Sparkles size={16} />
                    <span>{isKo ? "프로젝트 방향성" : "Project direction"}</span>
                    </div>
                    <div className="faq-hero-card__item">
                    <ShieldCheck size={16} />
                    <span>{isKo ? "보안과 운영 관점" : "Security & operations"}</span>
                    </div>
                    <div className="faq-hero-card__item">
                    <Wallet size={16} />
                    <span>{isKo ? "지갑 및 서비스 이해" : "Wallet & service understanding"}</span>
                    </div>
                    <div className="faq-hero-card__item">
                    <FileText size={16} />
                    <span>{isKo ? "문서와 자료 연결" : "Docs & materials linkage"}</span>
                    </div>
                </div>

                <div className="faq-hero-card__footer">
                    <span>
                    {isKo
                        ? "투자자 · 파트너 · 커뮤니티를 위한 핵심 검토 포인트"
                        : "Prepared review points for investors, partners, and community"}
                    </span>
                </div>
                </div>
            </motion.div>
            </div>
        </section>

        <section className="faq-insights">
            <div className="faq-page__container-01">
            <div className="faq-insights__grid">
                {insightCards.map((item, index) => {
                const Icon = item.icon;
                return (
                    <motion.article
                    key={item.titleEn}
                    className="faq-insight-card"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    >
                    <div className="faq-insight-card__icon">
                        <Icon size={20} />
                    </div>
                    <h3>{isKo ? item.titleKo : item.titleEn}</h3>
                    <p>{isKo ? item.descKo : item.descEn}</p>
                    </motion.article>
                );
                })}
            </div>
            </div>
        </section>

        <section className="faq-main" id="faq-list">
            <div className="faq-page__container-01 faq-main__container">
            <div className="faq-main__header">
                <div className="faq-section-heading faq-section-heading--left">
                <span>{isKo ? "핵심 질문" : "KEY QUESTIONS"}</span>
                <h2>
                    {isKo
                    ? "KORION을 검토할 때 먼저 확인하게 되는 질문"
                    : "The questions most often reviewed when evaluating KORION"}
                </h2>
                <p>
                    {isKo
                    ? "프로젝트 이해, 투자자 관점, 지갑, 보안, 문서, 커뮤니티까지 핵심 검토 질문을 정리했습니다. 특히 투자자 탭은 프로젝트의 방향성과 확장 가능성을 빠르게 파악하는 데 도움이 됩니다."
                    : "These questions cover project understanding, investor perspective, wallet, security, documentation, and community. The investor section especially helps communicate direction and scalability at a glance."}
                </p>
                </div>

                <div className="faq-category-tabs">
                {categoryMeta.map((category) => (
                    <button
                    key={category.key}
                    type="button"
                    className={`faq-category-tabs__button ${
                        activeCategory === category.key ? "is-active" : ""
                    }`}
                    onClick={() => {
                        setActiveCategory(category.key);
                        setOpenIndex(0);
                    }}
                    >
                    {isKo ? category.labelKo : category.labelEn}
                    </button>
                ))}
                </div>
            </div>

            <div className="faq-accordion">
                {filteredFaqs.map((item, index) => {
                const Icon = item.icon;
                const isOpen = openIndex === index;

                return (
                    <motion.div
                    key={`${item.questionEn}-${index}`}
                    className={`faq-accordion__item ${isOpen ? "is-open" : ""}`}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.18 }}
                    transition={{ duration: 0.5, delay: index * 0.04 }}
                    >
                    <button
                        type="button"
                        className="faq-accordion__trigger"
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                        <div className="faq-accordion__left">
                        <div className="faq-accordion__icon">
                            <Icon size={18} />
                        </div>
                        <div className="faq-accordion__text">
                            <h3>{isKo ? item.questionKo : item.questionEn}</h3>
                            <p>
                            {isKo
                                ? "클릭하여 자세한 설명 보기"
                                : "Click to view the full explanation"}
                            </p>
                        </div>
                        </div>

                        <div
                        className={`faq-accordion__chevron ${
                            isOpen ? "is-rotated" : ""
                        }`}
                        >
                        <ChevronDown size={20} />
                        </div>
                    </button>

                    <AnimatePresence initial={false}>
                        {isOpen && (
                        <motion.div
                            className="faq-accordion__content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28 }}
                        >
                            <div className="faq-accordion__content-inner">
                            <p>{isKo ? item.answerKo : item.answerEn}</p>
                            </div>
                        </motion.div>
                        )}
                    </AnimatePresence>
                    </motion.div>
                );
                })}
            </div>
            </div>
        </section>

        <section className="faq-guide">
            <div className="faq-page__container-01 faq-guide__container">
            <motion.div
                className="faq-guide__panel"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65 }}
            >
                <div className="faq-section-heading faq-section-heading--left">
                <span>{isKo ? "권장 탐색 순서" : "RECOMMENDED FLOW"}</span>
                <h2>
                    {isKo
                    ? "처음 검토한다면 이렇게 보는 것이 좋습니다"
                    : "A recommended review path for first-time visitors"}
                </h2>
                </div>

                <div className="faq-guide__steps">
                <div className="faq-guide__step">
                    <strong>01</strong>
                    <div>
                    <h3>{isKo ? "Home / About" : "Home / About"}</h3>
                    <p>
                        {isKo
                        ? "프로젝트의 첫 인상과 방향성을 빠르게 확인합니다."
                        : "Review the project’s first impression and overall direction."}
                    </p>
                    </div>
                </div>

                <div className="faq-guide__step">
                    <strong>02</strong>
                    <div>
                    <h3>{isKo ? "Whitepaper / Tokenomics" : "Whitepaper / Tokenomics"}</h3>
                    <p>
                        {isKo
                        ? "구조, 문서화 수준, 자산 모델을 함께 확인합니다."
                        : "Evaluate structure, documentation quality, and asset model together."}
                    </p>
                    </div>
                </div>

                <div className="faq-guide__step">
                    <strong>03</strong>
                    <div>
                    <h3>{isKo ? "FAQ / Developers" : "FAQ / Developers"}</h3>
                    <p>
                        {isKo
                        ? "세부 이해와 확장 가능성, 외부 설명력을 더 입체적으로 봅니다."
                        : "Use these pages to deepen understanding, scalability, and external communication readiness."}
                    </p>
                    </div>
                </div>
                </div>
            </motion.div>

            <motion.div
                className="faq-guide__links"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65 }}
            >
                <Link to="/about" className="faq-guide-link">
                <div>
                    <span>{isKo ? "프로젝트 소개" : "Project Overview"}</span>
                    <h3>{isKo ? "About 페이지 보기" : "Visit About Page"}</h3>
                </div>
                <ArrowRight size={18} />
                </Link>

                <Link to="/whitepaper" className="faq-guide-link">
                <div>
                    <span>{isKo ? "공식 문서" : "Official Document"}</span>
                    <h3>{isKo ? "백서 바로가기" : "Open Whitepaper"}</h3>
                </div>
                <ArrowRight size={18} />
                </Link>

                <Link to="/developers" className="faq-guide-link">
                <div>
                    <span>{isKo ? "개발자 자료" : "Developer Resources"}</span>
                    <h3>{isKo ? "Developers 페이지 보기" : "Visit Developers Page"}</h3>
                </div>
                <ArrowRight size={18} />
                </Link>
            </motion.div>
            </div>
        </section>

        <section className="faq-cta">
            <div className="faq-page__container-01">
            <motion.div
                className="faq-cta__panel"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65 }}
            >
                <div className="faq-cta__content">
                <span>
                    {isKo
                    ? "CONTACT · DOCUMENTS · REVIEW"
                    : "CONTACT · DOCUMENTS · REVIEW"}
                </span>
                <h2>
                    {isKo
                    ? "프로젝트를 더 깊이 검토하고 싶으신가요?"
                    : "Interested in reviewing the project more deeply?"}
                </h2>
                <p>
                    {isKo
                    ? "FAQ는 핵심 이해를 돕기 위한 출발점입니다. 투자 검토, 파트너십, 공식 자료 요청, 추가 질의는 별도 문의를 통해 더 구체적으로 이어질 수 있습니다."
                    : "The FAQ is a starting point for core understanding. Investment review, partnerships, official material requests, and further questions can continue through direct inquiry."}
                </p>
                </div>

                <div className="faq-cta__actions">
                <Link to="/contact" className="faq-cta__button">
                    <BadgeCheck size={18} />
                    <span>{isKo ? "프로젝트 문의하기" : "Project Inquiry"}</span>
                </Link>

                <Link
                    to="/media-kit"
                    className="faq-cta__button faq-cta__button--ghost"
                >
                    <FileText size={18} />
                    <span>{isKo ? "공식 자료 보기" : "View Official Materials"}</span>
                </Link>
                </div>
            </motion.div>
            </div>
        </section>
        </div>
    );
    }