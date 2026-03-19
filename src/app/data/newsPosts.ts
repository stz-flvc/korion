import type { NewsCategory } from '../types/AdminTypes';

export type NewsPost = {
    id: string;
    slug: string;
    category: NewsCategory;
    pinned?: boolean;
    featured?: boolean;
    titleKo: string;
    titleEn: string;
    summaryKo: string;
    summaryEn: string;
    contentKo: string[];
    contentEn: string[];
    thumbnail?: string;
    publishedAt: string;
    updatedAt?: string;
    tags: string[];
    };

/** 게시물 추가할때 사용할 폼
{
    id: 'new-post-id',
    slug: 'new-post-slug',
    category: 'notice',
    pinned: false,
    featured: false,
    titleKo: '새 공지 제목',
    titleEn: 'New Notice Title',
    summaryKo: '요약 내용',
    summaryEn: 'Summary content',
    contentKo: ['문단1', '문단2'],
    contentEn: ['Paragraph 1', 'Paragraph 2'],
    thumbnail: '/images/news/example.jpg',
    publishedAt: '2026-03-16',
    tags: ['Notice'],
    }

 */




export const newsPosts: NewsPost[] = [
    {
        id: 'korion-wallet-service-update-2026-03',
        slug: 'korion-wallet-service-update-2026-03',
        category: 'update',
        pinned: true,
        featured: true,
        titleKo: 'KORION Wallet 서비스 안정화 업데이트 안내',
        titleEn: 'KORION Wallet Service Stability Update',
        summaryKo:
        '지갑 사용성, 서비스 안정성, 내부 처리 흐름 개선을 위한 주요 업데이트가 적용되었습니다.',
        summaryEn:
        'Major updates have been applied to improve wallet usability, service stability, and internal processing flow.',
        contentKo: [
        'KORION은 사용자 경험과 플랫폼 안정성을 높이기 위해 지갑 서비스 전반에 대한 구조적 개선 작업을 지속적으로 진행하고 있습니다.',
        '이번 업데이트에는 서비스 응답 흐름 최적화, 일부 처리 구간 안정화, 내부 동기화 구조 개선 등이 포함되어 있습니다.',
        '앞으로도 KORION은 지갑 서비스의 신뢰성과 확장성을 강화하기 위한 운영 개선을 이어갈 예정입니다.',
        ],
        contentEn: [
        'KORION continues to improve the overall wallet service structure in order to enhance user experience and platform stability.',
        'This update includes optimization of response flows, stabilization of selected processing stages, and internal synchronization improvements.',
        'KORION will continue refining its operational structure to strengthen wallet reliability and scalability.',
        ],
        thumbnail: '/images/news/news-wallet-update.jpg',
        publishedAt: '2026-03-15',
        updatedAt: '2026-03-15',
        tags: ['Wallet', 'Update', 'Stability'],
    },
    {
        id: 'korion-policy-governance-page-launch',
        slug: 'korion-policy-governance-page-launch',
        category: 'notice',
        pinned: true,
        featured: true,
        titleKo: 'KORION 정책 및 운영 기준 페이지 오픈 안내',
        titleEn: 'Launch of KORION Policy & Governance Page',
        summaryKo:
        '운영 정책, 리스크 관리, 사용자 보호 기준을 통합한 정책 페이지가 오픈되었습니다.',
        summaryEn:
        'The integrated policy page covering operational standards, risk management, and user protection is now live.',
        contentKo: [
        'KORION은 서비스 운영의 신뢰성과 투명성을 높이기 위해 정책 및 운영 기준 페이지를 새롭게 오픈하였습니다.',
        '해당 페이지에는 운영 거버넌스, 자산 보호, 지갑 정책, 리스크 관리, 사용자 안내 기준 등이 포함됩니다.',
        '사용자와 파트너, 이해관계자 여러분께서는 공식 홈페이지 내 정책 페이지를 통해 최신 기준을 확인하실 수 있습니다.',
        ],
        contentEn: [
        'KORION has launched a dedicated policy and governance page to improve service transparency and operational trust.',
        'The page covers operational governance, asset protection, wallet standards, risk management, and user guidance.',
        'Users, partners, and stakeholders can review the latest standards through the official policy section on the website.',
        ],
        thumbnail: '/images/news/news-policy-launch.jpg',
        publishedAt: '2026-03-14',
        tags: ['Policy', 'Governance', 'Notice'],
    },
    {
        id: 'korion-ecosystem-progress-report-q1',
        slug: 'korion-ecosystem-progress-report-q1',
        category: 'media',
        featured: true,
        titleKo: 'KORION 생태계 진행 현황 리포트',
        titleEn: 'KORION Ecosystem Progress Report',
        summaryKo:
        '플랫폼 구축, 서비스 구조 고도화, 운영 기준 정비 등 주요 진행 상황을 공유합니다.',
        summaryEn:
        'A progress report covering platform buildout, service structure enhancement, and operational standardization.',
        contentKo: [
        'KORION은 생태계 확장과 서비스 완성도 향상을 위한 핵심 작업을 단계적으로 진행하고 있습니다.',
        '현재 지갑 서비스 운영 기준 정비, 홈페이지 구조 개선, 정책 페이지 고도화, 서브페이지 확장 등이 함께 진행되고 있습니다.',
        '앞으로도 주요 진행 상황은 뉴스 페이지를 통해 지속적으로 공유드릴 예정입니다.',
        ],
        contentEn: [
        'KORION is advancing key initiatives in phases to support ecosystem expansion and service maturity.',
        'Current work includes wallet operation standardization, website structure enhancement, policy page refinement, and subpage expansion.',
        'Major progress updates will continue to be shared through the news section.',
        ],
        thumbnail: '/images/news/news-progress-report.jpg',
        publishedAt: '2026-03-13',
        tags: ['Ecosystem', 'Report', 'Progress'],
    },
    {
        id: 'korion-service-maintenance-guidance',
        slug: 'korion-service-maintenance-guidance',
        category: 'notice',
        pinned: true,
        titleKo: '서비스 점검 및 운영 안내',
        titleEn: 'Service Maintenance & Operational Notice',
        summaryKo:
        '서비스 안정성과 품질 향상을 위한 점검 및 운영 기준 안내입니다.',
        summaryEn:
        'This notice outlines maintenance and operational standards to improve service quality and stability.',
        contentKo: [
        '서비스 안정성과 보안 강화를 위해 일부 기능은 점검 시간 동안 일시적으로 제한될 수 있습니다.',
        '네트워크 상태 및 내부 운영 기준에 따라 입금 반영, 출금 처리, 일부 서비스 응답 시점이 달라질 수 있습니다.',
        'KORION은 사용자 자산 보호와 안정적인 서비스 제공을 위해 필요한 운영 절차를 지속적으로 개선하고 있습니다.',
        ],
        contentEn: [
        'To strengthen service stability and security, some functions may be temporarily limited during maintenance windows.',
        'Depending on network conditions and internal operational standards, deposit reflection, withdrawal processing, and response timing may vary.',
        'KORION continues to improve its operational procedures to protect user assets and provide a stable service environment.',
        ],
        thumbnail: '/images/news/news-maintenance.jpg',
        publishedAt: '2026-03-12',
        tags: ['Maintenance', 'Notice', 'Operations'],
    },
    {
        id: 'korion-community-event-announcement',
        slug: 'korion-community-event-announcement',
        category: 'event',
        titleKo: 'KORION 커뮤니티 참여 이벤트 안내',
        titleEn: 'KORION Community Participation Event',
        summaryKo:
        '커뮤니티 활성화와 생태계 확장을 위한 이벤트가 진행됩니다.',
        summaryEn:
        'A new event is being launched to strengthen community engagement and ecosystem growth.',
        contentKo: [
        'KORION은 더 많은 사용자 참여와 커뮤니티 확장을 위해 다양한 이벤트를 준비하고 있습니다.',
        '이벤트 공지와 참여 방식은 공식 홈페이지 및 공식 커뮤니티 채널을 통해 순차적으로 안내될 예정입니다.',
        '많은 관심과 참여 부탁드립니다.',
        ],
        contentEn: [
        'KORION is preparing various events to encourage broader user participation and community growth.',
        'Event announcements and participation details will be shared through the official website and community channels.',
        'We appreciate your interest and participation.',
        ],
        thumbnail: '/images/news/news-community-event.jpg',
        publishedAt: '2026-03-11',
        tags: ['Event', 'Community', 'Announcement'],
    },
    {
        id: 'korion-homepage-subpage-expansion',
        slug: 'korion-homepage-subpage-expansion',
        category: 'update',
        titleKo: 'KORION 홈페이지 서브페이지 확장 진행',
        titleEn: 'KORION Website Subpage Expansion Progress',
        summaryKo:
        '정책, 뉴스, 제품, 기술 등 주요 서브페이지의 구조 확장이 진행 중입니다.',
        summaryEn:
        'Structural expansion is underway for major subpages including policy, news, products, and technology.',
        contentKo: [
        'KORION 홈페이지는 사용자와 파트너가 더 쉽게 정보를 확인할 수 있도록 서브페이지 구조를 지속 확장하고 있습니다.',
        '이번 작업에는 정보 구조 정비, 디자인 통일성 강화, 콘텐츠 가독성 개선이 포함됩니다.',
        '향후에도 신뢰도 높은 기업형 정보 전달 구조를 기반으로 페이지를 확장할 예정입니다.',
        ],
        contentEn: [
        'The KORION website is continuously expanding its subpage structure to make information easier to access for users and partners.',
        'This work includes improved information architecture, stronger design consistency, and better content readability.',
        'KORION will continue building an enterprise-grade information structure with stronger trust and clarity.',
        ],
        thumbnail: '/images/news/news-subpage-expansion.jpg',
        publishedAt: '2026-03-10',
        tags: ['Website', 'Update', 'Design'],
    },
    {
        id: 'korion-platform-security-operations-note',
        slug: 'korion-platform-security-operations-note',
        category: 'notice',
        titleKo: '플랫폼 보안 운영 기준 안내',
        titleEn: 'Platform Security Operations Notice',
        summaryKo:
        '자산 보호와 서비스 신뢰성 강화를 위한 운영 보안 기준을 안내드립니다.',
        summaryEn:
        'This notice introduces operational security standards designed to strengthen asset protection and service reliability.',
        contentKo: [
        'KORION은 플랫폼 운영 과정에서 사용자 자산 보호를 최우선 가치로 두고 있습니다.',
        '이에 따라 일부 보안 검토 절차, 출금 검증 절차, 내부 모니터링 기준이 적용될 수 있습니다.',
        '플랫폼은 보안과 서비스 연속성의 균형을 고려한 운영 구조를 기반으로 지속 개선됩니다.',
        ],
        contentEn: [
        'KORION places user asset protection at the center of its platform operations.',
        'Accordingly, selected security review procedures, withdrawal verification standards, and internal monitoring controls may be applied.',
        'The platform will continue to evolve with an operational model that balances security and service continuity.',
        ],
        thumbnail: '/images/news/news-security-operations.jpg',
        publishedAt: '2026-03-09',
        tags: ['Security', 'Operations', 'Notice'],
    },
    {
        id: 'korion-wallet-ui-improvement',
        slug: 'korion-wallet-ui-improvement',
        category: 'update',
        titleKo: 'KORION Wallet UI 개선 진행 안내',
        titleEn: 'KORION Wallet UI Improvement Update',
        summaryKo:
        '사용자 경험 향상을 위한 인터페이스 개선 작업이 순차적으로 반영되고 있습니다.',
        summaryEn:
        'Interface improvements are being applied in phases to enhance the overall user experience.',
        contentKo: [
        'KORION은 지갑 서비스 이용 흐름을 더 직관적으로 만들기 위한 UI 개선을 진행하고 있습니다.',
        '이번 개선에는 구조 정리, 시각적 명확성 향상, 페이지 간 이동 경험 강화가 포함됩니다.',
        '향후에도 안정성과 직관성을 함께 고려한 방향으로 UI를 고도화할 예정입니다.',
        ],
        contentEn: [
        'KORION is improving wallet UI flows to make the user experience more intuitive.',
        'This enhancement includes better structure, stronger visual clarity, and improved page-to-page navigation.',
        'Further refinements will continue with a balanced focus on stability and usability.',
        ],
        thumbnail: '/images/news/news-wallet-ui.jpg',
        publishedAt: '2026-03-08',
        tags: ['Wallet', 'UI', 'Update'],
    },
    {
        id: 'korion-ecosystem-roadmap-communication',
        slug: 'korion-ecosystem-roadmap-communication',
        category: 'media',
        titleKo: 'KORION 생태계 로드맵 커뮤니케이션 강화',
        titleEn: 'Enhanced Communication on KORION Ecosystem Roadmap',
        summaryKo:
        '주요 개발 및 운영 진행 상황을 더 명확하게 전달하기 위한 커뮤니케이션 구조를 강화합니다.',
        summaryEn:
        'KORION is strengthening its communication structure to share development and operational progress more clearly.',
        contentKo: [
        'KORION은 생태계 진행 상황에 대한 정보 전달 방식을 보다 체계적으로 정리하고 있습니다.',
        '향후 뉴스 페이지와 주요 서브페이지를 통해 보다 명확한 기준과 진행 내용을 안내드릴 예정입니다.',
        '이는 사용자와 파트너의 이해도를 높이고 프로젝트 신뢰도를 강화하기 위한 방향입니다.',
        ],
        contentEn: [
        'KORION is improving the way ecosystem progress is communicated through a more structured format.',
        'Future updates will be shared more clearly across the news section and key subpages.',
        'This approach is intended to improve understanding among users and partners while strengthening project trust.',
        ],
        thumbnail: '/images/news/news-roadmap-communication.jpg',
        publishedAt: '2026-03-07',
        tags: ['Roadmap', 'Media', 'Communication'],
    },
    {
        id: 'korion-operational-transparency-update',
        slug: 'korion-operational-transparency-update',
        category: 'media',
        titleKo: '운영 투명성 강화 방향 안내',
        titleEn: 'Operational Transparency Enhancement Update',
        summaryKo:
        '서비스 공지, 정책 안내, 주요 변경 사항 전달 체계를 강화하는 방향을 공유합니다.',
        summaryEn:
        'This update shares KORION’s direction for strengthening service notices, policy communication, and major change announcements.',
        contentKo: [
        'KORION은 운영 투명성 강화를 위해 공지 전달 구조와 정책 고지 체계를 점진적으로 정비하고 있습니다.',
        '뉴스 페이지는 공식 공지와 서비스 업데이트, 주요 진행 사항을 하나의 흐름에서 확인할 수 있도록 설계됩니다.',
        '향후에도 공식 채널과 홈페이지를 통해 신뢰감 있는 정보 전달을 이어가겠습니다.',
        ],
        contentEn: [
        'KORION is gradually refining its announcement and policy communication framework to improve operational transparency.',
        'The news page is designed to unify official notices, service updates, and major progress updates into one clear flow.',
        'KORION will continue delivering trustworthy information through official channels and the website.',
        ],
        thumbnail: '/images/news/news-transparency.jpg',
        publishedAt: '2026-03-06',
        tags: ['Transparency', 'Media', 'Update'],
    },
    ];