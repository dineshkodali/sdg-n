import { Link } from 'react-router-dom'

const techArticles = [
    {
        id: '1',
        category: 'Cloud Infrastructure',
        title: 'Practical Cloud Migration: Sizing AWS & Azure Workloads Without Waste',
        excerpt: 'How to evaluate CPU, RAM, and storage requirements before moving workloads, preventing over-provisioning and surprise cloud bills.',
        date: 'October 2026',
        readTime: '6 min read'
    },
    {
        id: '2',
        category: 'Networking & Security',
        title: 'Securing Multi-Site Networks: Omada VLANs & WireGuard VPN Tunnels',
        excerpt: 'A blueprint for separating corporate systems from untrusted guest Wi-Fi and establishing resilient branch-to-branch encrypted tunnels.',
        date: 'October 2026',
        readTime: '8 min read'
    },
    {
        id: '3',
        category: 'Software Engineering',
        title: 'PostgreSQL Row Level Security: Multi-Tenant Isolation in Practice',
        excerpt: 'Why database-level security policies outperform application-level filtering when safeguarding multi-branch operational platforms.',
        date: 'September 2026',
        readTime: '7 min read'
    },
    {
        id: '4',
        category: 'Managed IT',
        title: 'Windows Server & Active Directory: Baseline Group Policy Hardening',
        excerpt: 'Essential GPOs every company domain should enforce: BitLocker encryption, screen locks, and eliminating local admin credentials.',
        date: 'September 2026',
        readTime: '5 min read'
    },
    {
        id: '5',
        category: 'DevOps & Monitoring',
        title: 'Observability with Prometheus & Grafana: Eliminating Alert Fatigue',
        excerpt: 'How to write PromQL alert expressions with time-window smoothing so engineers only wake up for genuine service outages.',
        date: 'August 2026',
        readTime: '6 min read'
    },
    {
        id: '6',
        category: 'Data Protection & Backups',
        title: 'Automated Cloud Backups: Defending Business Data Against Ransomware',
        excerpt: 'How to configure write-once immutable storage vaults on AWS S3 and Azure with scheduled restoration drills to guarantee quick recovery.',
        date: 'August 2026',
        readTime: '7 min read'
    },
]

export default function Blog() {
    return (
        <div className="homepage13-body">
            {/* PAGE HEADER */}
            <div className="about-header-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <div className="about-inner-header heading9 text-center">
                                <h1>Engineering Insights &amp; Technical Guides</h1>
                                <Link to="/">Home <i className="fa-solid fa-angle-right"></i> <span>Insights</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MAIN ARTICLE DIRECTORY */}
            <div className="sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto text-center mb-5">
                            <div className="heading20">
                                <h5>Practical Knowledge</h5>
                                <h2>Technical Articles from Our Engineering Practice</h2>
                                <p style={{ fontSize: '15px', color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto' }}>
                                    Practical engineering guides covering cloud architecture, network hardening, database security,
                                    and IT systems administration.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row g-4">
                        {techArticles.map((article) => (
                            <div className="col-lg-4 col-md-6" key={article.id}>
                                <div className="fs-card" style={{ padding: '26px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                                            <span className="badge-active" style={{ fontSize: '11px', padding: '2px 8px' }}>
                                                {article.category}
                                            </span>
                                            <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                                                {article.readTime}
                                            </span>
                                        </div>
                                        <h3 style={{ fontSize: '17px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '10px', lineHeight: '1.4' }}>
                                            {article.title}
                                        </h3>
                                        <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                                            {article.excerpt}
                                        </p>
                                    </div>
                                    <div style={{ borderTop: '1px solid var(--border)', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ fontSize: '11px', color: 'var(--brand-sage)' }}>{article.date}</span>
                                        <Link to="/contact" style={{ fontSize: '12px', fontWeight: '600', color: 'var(--brand-forest)' }}>
                                            Discuss Topic &rarr;
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CALL TO ACTION */}
            <div className="container">
                <div className="cta13-section-area">
                    <h2>Have questions about implementing these technologies?</h2>
                    <p>
                        Contact our engineers to review your specific systems environment.
                    </p>
                    <div className="btn-area1" style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                        <Link to="/contact" className="header-btn21">
                            Contact SDG Solutions <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                        <Link to="/case" className="header-btn21 btn2">
                            View Case Studies <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
