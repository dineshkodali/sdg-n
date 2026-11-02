import { Link } from 'react-router-dom'

export default function Testimonials() {
    return (
        <div className="homepage13-body">
            {/* PAGE HEADER */}
            <div className="about-header-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <div className="about-inner-header heading9 text-center">
                                <h1>Client Commitments &amp; Standards</h1>
                                <Link to="/">Home <i className="fa-solid fa-angle-right"></i> <span>Commitments</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* INTEGRITY & CONFIDENTIALITY OVERVIEW */}
            <div className="sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto text-center mb-5">
                            <div className="heading20">
                                <h5>Confidentiality &amp; Integrity</h5>
                                <h2>Our Approach to Client Relationships &amp; Feedback</h2>
                                <p style={{ fontSize: '15px', color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto' }}>
                                    At SDG Solutions, we work extensively with property management operations, care accommodation,
                                    and business infrastructure where client confidentiality and non-disclosure agreements (NDAs) are paramount.
                                    We do not publish fabricated quotes or invent client names.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row g-4 mb-5">
                        {[
                            {
                                icon: 'fa-user-shield',
                                title: 'Strict Confidentiality (NDAs)',
                                desc: 'We treat internal architectures, server credentials, and resident/customer data with rigorous confidentiality. We never compromise client security for marketing promotion.'
                            },
                            {
                                icon: 'fa-chart-line',
                                title: 'Evidence-Based Case Studies',
                                desc: 'Rather than subjective anonymous quotes, we showcase verified technical implementation architectures, database schemas, and measurable operational SLAs.'
                            },
                            {
                                icon: 'fa-handshake',
                                title: 'Direct Engineering Contact',
                                desc: 'Our clients value working directly with seasoned systems and cloud engineers who resolve issues quickly without going through layers of account managers.'
                            },
                            {
                                icon: 'fa-lock',
                                title: 'Client Data Ownership',
                                desc: 'You retain 100% administrative control, source code repositories, cloud tenant ownership, and network documentation at all times.'
                            }
                        ].map((item, idx) => (
                            <div className="col-lg-3 col-md-6" key={idx}>
                                <div className="fs-card" style={{ padding: '24px', height: '100%' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#EBF0E6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                                        <i className={`fa-solid ${item.icon}`} style={{ color: 'var(--brand-forest)', fontSize: '16px' }}></i>
                                    </div>
                                    <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '8px' }}>
                                        {item.title}
                                    </h3>
                                    <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-secondary)', margin: 0 }}>
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* FEATURED CASE STUDY CALLOUT */}
                    <div className="row">
                        <div className="col-lg-10 m-auto">
                            <div className="fs-card" style={{ padding: '36px', background: '#FFFFFF' }}>
                                <div className="row align-items-center">
                                    <div className="col-lg-8">
                                        <span className="badge-active" style={{ marginBottom: '10px' }}>Verified Implementation</span>
                                        <h3 style={{ fontSize: '22px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '8px' }}>
                                            Explore How We Delivered SDTracker
                                        </h3>
                                        <p style={{ fontSize: '14px', lineHeight: '1.65', color: 'var(--text-secondary)', margin: 0 }}>
                                            See how our technical team replaced manual spreadsheets with a high-availability property
                                            and safeguarding operations platform featuring PostgreSQL Row Level Security.
                                        </p>
                                    </div>
                                    <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
                                        <Link to="/case/sdtracker" className="header-btn21">
                                            Read Case Study <i className="fa-solid fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CALL TO ACTION */}
            <div className="container">
                <div className="cta13-section-area">
                    <h2>Speak with our technical team today</h2>
                    <p>
                        We’re ready to review your infrastructure, cloud environments, or software requirements.
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
