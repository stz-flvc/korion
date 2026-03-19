import { motion } from 'motion/react';
import {
    ArrowRight,
    CheckCircle2,
    Mail,
    } from 'lucide-react';
    import { useLanguage } from '../contexts/LanguageContext';
    import './PartnerPage.css';

    export function PartnerPage() {
    const { language } = useLanguage();
    const isKo = language === 'KR';

    const text = {
        processLabel: isKo ? 'PROCESS' : 'PROCESS',
        processTitle: isKo ? '진행 절차' : 'Process',
        processDesc: isKo
        ? '신청 후 아래 절차에 따라 검토 및 연결이 진행됩니다.'
        : 'After submission, the request will be reviewed and followed by the connection process below.',

        applicationLabel: isKo ? 'APPLICATION' : 'APPLICATION',
        applicationTitle: isKo ? '신청 양식' : 'Application Form',
        applicationDesc: isKo
        ? '아래 양식을 작성하여 제출해주세요. 실제 운영 시에는 이메일 전송 또는 백엔드 API와 연결하여 사용할 수 있습니다.'
        : 'Please complete and submit the form below. In production, this form can be connected to email delivery or a backend API.',

        directContact: isKo ? '직접 문의' : 'Direct Contact',
        notice1: isKo
        ? '팀 지원 / 파트너 제휴 모두 접수 가능'
        : 'Both team applications and partnership proposals are accepted',
        notice2: isKo
        ? '내용 검토 후 순차 회신'
        : 'Responses are provided sequentially after review',

        formType: isKo ? '신청 유형' : 'Application Type',
        formTypePlaceholder: isKo ? '선택해주세요' : 'Please select',
        optionTeam: isKo ? '팀 지원' : 'Team Application',
        optionPartner: isKo ? '파트너 제휴' : 'Partnership',
        optionBusiness: isKo ? '비즈니스 제안' : 'Business Proposal',
        optionIntegration: isKo ? '기술 연동 제안' : 'Technical Integration',

        formName: isKo ? '이름 / 담당자명' : 'Name / Contact Person',
        formNamePlaceholder: isKo
        ? '이름 또는 담당자명을 입력하세요'
        : 'Enter your name or contact person',

        formCompany: isKo ? '회사명 / 팀명' : 'Company / Team Name',
        formCompanyPlaceholder: isKo
        ? '회사명 또는 팀명을 입력하세요'
        : 'Enter your company or team name',

        formEmail: isKo ? '이메일' : 'Email',
        formWebsite: isKo ? '홈페이지 / 링크' : 'Website / Link',
        formWebsitePlaceholder: isKo
        ? '웹사이트 또는 소개 링크'
        : 'Website or introduction link',

        formInterest: isKo ? '관심 분야' : 'Area of Interest',
        formInterestPlaceholder: isKo
        ? '예: 결제, 지갑, 마케팅, 기술제휴'
        : 'e.g. Payment, Wallet, Marketing, Technical Partnership',

        formIntro: isKo ? '소개' : 'Introduction',
        formIntroPlaceholder: isKo
        ? '팀 또는 프로젝트 소개를 입력해주세요'
        : 'Please introduce your team or project',

        formProposal: isKo ? '협업 제안 내용' : 'Proposal Details',
        formProposalPlaceholder: isKo
        ? '희망하는 협업 방식 또는 지원 내용을 자세히 작성해주세요'
        : 'Please describe your desired collaboration method or proposal in detail',

        footerNotice: isKo
        ? '제출 후 내부 검토를 거쳐 순차적으로 회신이 진행됩니다.'
        : 'After submission, responses will be provided sequentially following internal review.',

        submit: isKo ? '신청서 제출' : 'Submit Application',
    };

    const processSteps = [
        {
        step: '01',
        title: isKo ? '신청 접수' : 'Application',
        description: isKo
            ? '기본 정보와 협업 또는 지원 내용을 제출합니다. 팀 지원인지 파트너 제휴인지 선택하여 접수할 수 있습니다.'
            : 'Submit your basic information and your collaboration or application details. You can choose whether it is a team application or a partnership request.',
        },
        {
        step: '02',
        title: isKo ? '내부 검토' : 'Review',
        description: isKo
            ? '제안 내용, 적합성, 운영 방향성과의 부합 여부를 내부 기준에 따라 검토합니다.'
            : 'The proposal, suitability, and alignment with operational direction will be reviewed based on internal criteria.',
        },
        {
        step: '03',
        title: isKo ? '후속 연결' : 'Connection',
        description: isKo
            ? '검토 후 필요한 경우 이메일 또는 별도 채널을 통해 후속 논의가 진행됩니다.'
            : 'If needed after review, follow-up discussions will proceed via email or another communication channel.',
        },
    ];

    return (
        <div className="partner-page">
        <section id="partner-process" className="partner-section partner-section--process">
            <div className="partner-page__container">
            <div className="partner-section__heading">
                <span className="partner-section__label">{text.processLabel}</span>
                <h2>{text.processTitle}</h2>
                <p>{text.processDesc}</p>
            </div>

            <div className="partner-process">
                {processSteps.map((item, index) => (
                <motion.div
                    key={item.step}
                    className="partner-process-card"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                    <div className="partner-process-card__step">{item.step}</div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </motion.div>
                ))}
            </div>
            </div>
        </section>

        <section id="partner-application" className="partner-section partner-section--application">
            <div className="partner-page__container">
            <div className="partner-application">
                <motion.div
                className="partner-application__intro"
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                >
                <span className="partner-section__label">{text.applicationLabel}</span>
                <h2>{text.applicationTitle}</h2>
                <p>{text.applicationDesc}</p>

                <div className="partner-application__contact-card">
                    <div className="partner-application__contact-icon">
                    <Mail size={18} />
                    </div>
                    <div>
                    <strong>{text.directContact}</strong>
                    <p>partnership@korion.io</p>
                    </div>
                </div>

                <div className="partner-application__notice">
                    <div className="partner-application__notice-item">
                    <CheckCircle2 size={16} />
                    <span>{text.notice1}</span>
                    </div>
                    <div className="partner-application__notice-item">
                    <CheckCircle2 size={16} />
                    <span>{text.notice2}</span>
                    </div>
                </div>
                </motion.div>

                <motion.form
                className="partner-form"
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.06 }}
                onSubmit={(e) => e.preventDefault()}
                >
                <div className="partner-form__grid">
                    <label className="partner-form__field">
                    <span>{text.formType}</span>
                    <select defaultValue="">
                        <option value="" disabled>
                        {text.formTypePlaceholder}
                        </option>
                        <option value="team">{text.optionTeam}</option>
                        <option value="partner">{text.optionPartner}</option>
                        <option value="business">{text.optionBusiness}</option>
                        <option value="integration">{text.optionIntegration}</option>
                    </select>
                    </label>

                    <label className="partner-form__field">
                    <span>{text.formName}</span>
                    <input type="text" placeholder={text.formNamePlaceholder} />
                    </label>

                    <label className="partner-form__field">
                    <span>{text.formCompany}</span>
                    <input type="text" placeholder={text.formCompanyPlaceholder} />
                    </label>

                    <label className="partner-form__field">
                    <span>{text.formEmail}</span>
                    <input type="email" placeholder="contact@example.com" />
                    </label>

                    <label className="partner-form__field">
                    <span>{text.formWebsite}</span>
                    <input type="text" placeholder={text.formWebsitePlaceholder} />
                    </label>

                    <label className="partner-form__field">
                    <span>{text.formInterest}</span>
                    <input type="text" placeholder={text.formInterestPlaceholder} />
                    </label>

                    <label className="partner-form__field partner-form__field--full">
                    <span>{text.formIntro}</span>
                    <textarea
                        rows={4}
                        placeholder={text.formIntroPlaceholder}
                    />
                    </label>

                    <label className="partner-form__field partner-form__field--full">
                    <span>{text.formProposal}</span>
                    <textarea
                        rows={6}
                        placeholder={text.formProposalPlaceholder}
                    />
                    </label>
                </div>

                <div className="partner-form__footer">
                    <p>{text.footerNotice}</p>
                    <button type="submit" className="partner-btn partner-btn--primary">
                    {text.submit}
                    <ArrowRight size={18} />
                    </button>
                </div>
                </motion.form>
            </div>
            </div>
        </section>
        </div>
    );
    }