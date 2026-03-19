import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router';
import { CalendarDays, Pin, Sparkles, ChevronRight, Search, ChevronLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { NewsImage } from '../components/news/NewsImage';
import { mockAdminService } from '../services/mockAdminService';
import type { NewsCategory, CardNews } from '../types/AdminTypes';
import './NewsPage.css';

const categoryOrder: Array<NewsCategory | 'all'> = ['all', 'notice', 'update', 'event', 'media'];
const POSTS_PER_PAGE = 6;

export function NewsPage() {
    const { language } = useLanguage();
    const isKo = language === 'KR';

    const [allNews, setAllNews] = useState<CardNews[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<NewsCategory | 'all'>('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [featuredIndex, setFeaturedIndex] = useState(0);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchedNews = mockAdminService.getNews().filter(n => n.isVisible);
        // Sort by manual order first
        const sorted = [...fetchedNews].sort((a, b) => {
            return (a.order || 0) - (b.order || 0);
        });
        setAllNews(sorted);
    }, []);

    const sortedPosts = useMemo(() => {
        return [...allNews].sort((a, b) => {
            // Primary sort by 'order' field
            if (a.order !== b.order) {
                return (a.order || 0) - (b.order || 0);
            }

            // Secondary sort by 'pinned' status (pinned first)
            if (a.pinned && !b.pinned) return -1;
            if (!a.pinned && b.pinned) return 1;
            
            // Tertiary sort by 'publishedAt' (newest first)
            const aTime = new Date(a.publishedAt).getTime();
            const bTime = new Date(b.publishedAt).getTime();
            
            return bTime - aTime;
        });
    }, [allNews]);

    const featuredPosts = useMemo(
        () => sortedPosts.filter((post) => post.featured),
        [sortedPosts]
    );

    const pinnedPosts = useMemo(
        () => sortedPosts.filter((post) => post.pinned),
        [sortedPosts]
    );

    const normalizedSearch = searchTerm.trim().toLowerCase();

    const filteredPosts = useMemo(() => {
        return sortedPosts.filter((post) => {
            const matchesCategory =
                selectedCategory === 'all' ? true : post.category === selectedCategory;

            if (!matchesCategory) return false;
            if (!normalizedSearch) return true;

            const searchPool = [
                post.titleKo,
                post.title,
                post.summaryKo,
                post.summary,
                ...post.contentKo,
                ...post.content,
            ]
                .join(' ')
                .toLowerCase();

            return searchPool.includes(normalizedSearch);
        });
    }, [sortedPosts, selectedCategory, normalizedSearch]);

    const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));

    const paginatedPosts = useMemo(() => {
        const start = (page - 1) * POSTS_PER_PAGE;
        return filteredPosts.slice(start, start + POSTS_PER_PAGE);
    }, [filteredPosts, page]);

    useEffect(() => {
        setPage(1);
    }, [selectedCategory, normalizedSearch]);

    useEffect(() => {
        if (page > totalPages) setPage(totalPages);
    }, [page, totalPages]);

    useEffect(() => {
        if (featuredPosts.length <= 1) return;

        const timer = window.setInterval(() => {
            setFeaturedIndex((prev) => (prev + 1) % featuredPosts.length);
        }, 5000);

        return () => window.clearInterval(timer);
    }, [featuredPosts.length]);

    const currentFeaturedPost = featuredPosts[featuredIndex] || null;

    const getCategoryLabel = (category: string) => {
        if (isKo) {
            switch (category) {
                case 'all':
                    return '전체';
                case 'notice':
                    return '공지';
                case 'update':
                    return '업데이트';
                case 'event':
                    return '이벤트';
                case 'media':
                    return '진행사항';
                default:
                    return category;
            }
        }

        switch (category) {
            case 'all':
                return 'All';
            case 'notice':
                return 'Notice';
            case 'update':
                return 'Update';
            case 'event':
                return 'Event';
            case 'media':
                return 'Progress';
            default:
                return category;
        }
    };

    const formatDate = (date: string) => date;

    const handlePrevFeatured = () => {
        setFeaturedIndex((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length);
    };

    const handleNextFeatured = () => {
        setFeaturedIndex((prev) => (prev + 1) % featuredPosts.length);
    };

    return (
        <div className="news-page">
            <section className="news-page__hero">
                <div className="news-page__glow news-page__glow--1" />
                <div className="news-page__glow news-page__glow--2" />

                <div className="news-page__container news-page__hero-container">
                    <div className="news-page__hero-badge">
                        <Sparkles size={16} />
                        <span>
                            {isKo
                                ? 'KORION 공지 · 업데이트 · 주요 진행 사항'
                                : 'KORION Announcements · Updates · Key Progress'}
                        </span>
                    </div>

                    <h1 className="news-page__hero-title">KORION Newsroom</h1>

                    <p className="news-page__hero-desc">
                        {isKo
                            ? 'KORION의 공식 공지, 서비스 업데이트, 생태계 진행 현황, 주요 운영 소식을 확인할 수 있는 공식 뉴스 페이지입니다.'
                            : 'This is the official newsroom where you can follow KORION announcements, service updates, ecosystem progress, and key operational news.'}
                    </p>
                </div>
            </section>

            {currentFeaturedPost && (
                <section className="news-page__featured">
                    <div className="news-page__container">
                        <div className="news-page__section-head news-page__section-head--between">
                            <span>{isKo ? '주요 소식' : 'Featured'}</span>

                            {featuredPosts.length > 1 && (
                                <div className="news-page__slider-controls">
                                    <button type="button" onClick={handlePrevFeatured} aria-label="Previous featured post">
                                        <ChevronLeft size={18} />
                                    </button>
                                    <button type="button" onClick={handleNextFeatured} aria-label="Next featured post">
                                        <ChevronRight size={18} />
                                    </button>
                                </div>
                            )}
                        </div>

                        <Link to={`/news/${currentFeaturedPost.slug}`} className="news-page__featured-card">
                            <div className="news-page__featured-image">
                                <NewsImage
                                    src={currentFeaturedPost.thumbnail || ''}
                                    alt={isKo ? currentFeaturedPost.titleKo : currentFeaturedPost.title}
                                />
                            </div>

                            <div className="news-page__featured-content">
                                <div className="news-page__meta-row">
                                    <span className="news-page__category-badge">
                                        {getCategoryLabel(currentFeaturedPost.category)}
                                    </span>
                                    <span className="news-page__date">
                                        <CalendarDays size={14} />
                                        {formatDate(currentFeaturedPost.publishedAt)}
                                    </span>
                                </div>

                                <h2>{isKo ? currentFeaturedPost.titleKo : currentFeaturedPost.title}</h2>
                                <p>{isKo ? currentFeaturedPost.summaryKo : currentFeaturedPost.summary}</p>

                                <div className="news-page__readmore">
                                    <span>{isKo ? '자세히 보기' : 'Read More'}</span>
                                    <ChevronRight size={18} />
                                </div>

                                {featuredPosts.length > 1 && (
                                    <div className="news-page__slider-dots">
                                        {featuredPosts.map((post, index) => (
                                            <button
                                                key={post.id}
                                                type="button"
                                                className={index === featuredIndex ? 'is-active' : ''}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setFeaturedIndex(index);
                                                }}
                                                aria-label={`Go to featured slide ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </Link>
                    </div>
                </section>
            )}

            {pinnedPosts.length > 0 && (
                <section className="news-page__pinned">
                    <div className="news-page__container">
                        <div className="news-page__section-head">
                            <span>{isKo ? '고정 공지' : 'Pinned Notices'}</span>
                        </div>

                        <div className="news-page__pinned-list">
                            {pinnedPosts.map((post) => (
                                <Link key={post.id} to={`/news/${post.slug}`} className="news-page__pinned-item">
                                    <div className="news-page__pinned-left">
                                        <Pin size={16} />
                                        <strong>{isKo ? post.titleKo : post.title}</strong>
                                    </div>
                                    <span>{formatDate(post.publishedAt)}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <section className="news-page__toolbar">
                <div className="news-page__container">
                    <div className="news-page__toolbar-shell">
                        <div className="news-page__search-box">
                            <Search size={18} />
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder={isKo ? '공지, 업데이트, 태그 검색' : 'Search notices, updates, tags'}
                            />
                        </div>

                        <div className="news-page__filter-row">
                            {categoryOrder.map((category) => (
                                <button
                                    key={category}
                                    className={`news-page__filter-btn ${selectedCategory === category ? 'is-active' : ''
                                        }`}
                                    onClick={() => setSelectedCategory(category)}
                                    type="button"
                                >
                                    {getCategoryLabel(category)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="news-page__list-section">
                <div className="news-page__container">
                    <div className="news-page__results-meta">
                        <strong>
                            {isKo ? `총 ${filteredPosts.length}개의 게시글` : `${filteredPosts.length} posts found`}
                        </strong>
                    </div>

                    {paginatedPosts.length > 0 ? (
                        <>
                            <div className="news-page__grid">
                                {paginatedPosts.map((post) => (
                                    <NewsCard
                                        key={post.id}
                                        post={post}
                                        isKo={isKo}
                                        getCategoryLabel={getCategoryLabel}
                                        formatDate={formatDate}
                                    />
                                ))}
                            </div>

                            <div className="news-page__pagination">
                                <button
                                    type="button"
                                    disabled={page === 1}
                                    onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                                >
                                    {isKo ? '이전' : 'Prev'}
                                </button>

                                <div className="news-page__pagination-pages">
                                    {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                                        <button
                                            key={pageNumber}
                                            type="button"
                                            className={pageNumber === page ? 'is-active' : ''}
                                            onClick={() => setPage(pageNumber)}
                                        >
                                            {pageNumber}
                                        </button>
                                    ))}
                                </div>

                                <button
                                    type="button"
                                    disabled={page === totalPages}
                                    onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
                                >
                                    {isKo ? '다음' : 'Next'}
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="news-page__empty">
                            <h3>{isKo ? '검색 결과가 없습니다.' : 'No posts found.'}</h3>
                            <p>
                                {isKo
                                    ? '검색어 또는 카테고리를 변경해 다시 확인해 주세요.'
                                    : 'Try changing your search term or category filter.'}
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

type NewsCardProps = {
    post: CardNews;
    isKo: boolean;
    getCategoryLabel: (category: string) => string;
    formatDate: (date: string) => string;
};

function NewsCard({ post, isKo, getCategoryLabel, formatDate }: NewsCardProps) {
    return (
        <Link to={`/news/${post.slug}`} className="news-page__card">
            <div className="news-page__card-image">
                <NewsImage src={post.thumbnail || ''} alt={isKo ? post.titleKo : post.title} />
            </div>

            <div className="news-page__card-body">
                <div className="news-page__meta-row">
                    <span className="news-page__category-badge">{getCategoryLabel(post.category)}</span>
                    <span className="news-page__date">
                        <CalendarDays size={14} />
                        {formatDate(post.publishedAt)}
                    </span>
                </div>

                <h3>{isKo ? post.titleKo : post.title}</h3>
                <p>{isKo ? post.summaryKo : post.summary}</p>
            </div>
        </Link>
    );
}