import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router';
import { CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { NewsImage } from '../components/news/NewsImage';
import { mockAdminService } from '../services/mockAdminService';
import type { CardNews } from '../types/AdminTypes';
import './NewsDetailPage.css';

export function NewsDetailPage() {
    const { slug } = useParams();
    const { language } = useLanguage();
    const isKo = language === 'KR';

    const [post, setPost] = useState<CardNews | null>(null);
    const [prevPost, setPrevPost] = useState<CardNews | null>(null);
    const [nextPost, setNextPost] = useState<CardNews | null>(null);
    const [relatedPosts, setRelatedPosts] = useState<CardNews[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const allNews = mockAdminService.getNews().filter(n => n.isVisible);
        const sortedPosts = [...allNews].sort((a, b) => {
            if (a.order !== b.order) return (a.order || 0) - (b.order || 0);
            return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        });

        const postIndex = sortedPosts.findIndex((p) => p.slug === slug);
        if (postIndex !== -1) {
            const currentPost = sortedPosts[postIndex];
            setPost(currentPost);
            setPrevPost(postIndex < sortedPosts.length - 1 ? sortedPosts[postIndex + 1] : null);
            setNextPost(postIndex > 0 ? sortedPosts[postIndex - 1] : null);

            // Related posts
            const related = sortedPosts
                .filter((item) => item.id !== currentPost.id)
                .sort((a, b) => {
                    const sameCategoryA = a.category === currentPost.category ? 1 : 0;
                    const sameCategoryB = b.category === currentPost.category ? 1 : 0;
                    if (sameCategoryA !== sameCategoryB) return sameCategoryB - sameCategoryA;
                    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
                })
                .slice(0, 3);
            setRelatedPosts(related);
        } else {
            setPost(null);
        }
        setIsLoading(false);
    }, [slug]);

    if (isLoading) {
        return <div className="news-detail-page"><div className="news-detail-page__container">...</div></div>;
    }

    if (!post) {
        return (
            <div className="news-detail-page">
                <div className="news-detail-page__container news-detail-page__empty">
                    <h1>{isKo ? '게시글을 찾을 수 없습니다.' : 'Post not found.'}</h1>
                    <Link to="/news" className="news-detail-page__back-btn">
                        {isKo ? '뉴스 페이지로 돌아가기' : 'Back to News'}
                    </Link>
                </div>
            </div>
        );
    }

    const getCategoryLabel = (category: string) => {
        if (isKo) {
            switch (category) {
                case 'notice':
                    return '공지';
                case 'update':
                    return '업데이트';
                case 'event':
                    return '이벤트';
                case 'media':
                    return '진행사항';
                default:
                    return '뉴스';
            }
        }

        switch (category) {
            case 'notice':
                return 'Notice';
            case 'update':
                return 'Update';
            case 'event':
                return 'Event';
            case 'media':
                return 'Progress';
            default:
                return 'News';
        }
    };

    const title = isKo ? post.titleKo : post.title;
    const summary = isKo ? post.summaryKo : post.summary;
    const content = isKo ? post.contentKo : post.content;

    return (
        <div className="news-detail-page">
            <section className="news-detail-page__hero">
                <div className="news-detail-page__container">
                    <Link to="/news" className="news-detail-page__breadcrumb">
                        <ChevronLeft size={18} />
                        <span>{isKo ? '뉴스 목록으로' : 'Back to News'}</span>
                    </Link>

                    <div className="news-detail-page__meta">
                        <span className="news-detail-page__category">
                            {getCategoryLabel(post.category)}
                        </span>
                        <span className="news-detail-page__date">
                            <CalendarDays size={14} />
                            {post.publishedAt}
                        </span>
                    </div>

                    <h1>{title}</h1>
                    <p>{summary}</p>
                </div>
            </section>

            <section className="news-detail-page__content-section">
                <div className="news-detail-page__container">
                    <div className="news-detail-page__thumbnail">
                        <NewsImage src={post.thumbnail || ''} alt={title} />
                    </div>

                    <article className="news-detail-page__content">
                        {content.map((paragraph, index) => (
                            <p key={`${post.id}-${index}`}>{paragraph}</p>
                        ))}
                    </article>

                    <div className="news-detail-page__tags">
                        {post.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                        ))}
                    </div>

                    <div className="news-detail-page__nav">
                        {prevPost ? (
                            <Link to={`/news/${prevPost.slug}`} className="news-detail-page__nav-card">
                                <span>{isKo ? '이전 글' : 'Previous'}</span>
                                <strong>{isKo ? prevPost.titleKo : prevPost.title}</strong>
                            </Link>
                        ) : (
                            <div />
                        )}

                        {nextPost ? (
                            <Link to={`/news/${nextPost.slug}`} className="news-detail-page__nav-card is-right">
                                <span>{isKo ? '다음 글' : 'Next'}</span>
                                <strong>{isKo ? nextPost.titleKo : nextPost.title}</strong>
                                <ChevronRight size={18} />
                            </Link>
                        ) : (
                            <div />
                        )}
                    </div>
                </div>
            </section>

            {relatedPosts.length > 0 && (
                <section className="news-detail-page__related">
                    <div className="news-detail-page__container">
                        <div className="news-detail-page__related-head">
                            <span>{isKo ? '관련 게시글' : 'Related Posts'}</span>
                        </div>

                        <div className="news-detail-page__related-grid">
                            {relatedPosts.map((item) => (
                                <Link key={item.id} to={`/news/${item.slug}`} className="news-detail-page__related-card">
                                    <div className="news-detail-page__related-image">
                                        <NewsImage
                                            src={item.thumbnail || ''}
                                            alt={isKo ? item.titleKo : item.title}
                                        />
                                    </div>

                                    <div className="news-detail-page__related-body">
                                        <div className="news-detail-page__meta">
                                            <span className="news-detail-page__category">
                                                {getCategoryLabel(item.category)}
                                            </span>
                                            <span className="news-detail-page__date">
                                                <CalendarDays size={14} />
                                                {item.publishedAt}
                                            </span>
                                        </div>

                                        <h3>{isKo ? item.titleKo : item.title}</h3>
                                        <p>{isKo ? item.summaryKo : item.summary}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}