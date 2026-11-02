import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="footer13-section-area">
            <div className="container">

                {/* TOP BAR: BRAND IDENTITY & OPERATIONAL STATUS */}
                <div style={{
                    borderBottom: '1px solid rgba(216, 220, 208, 0.15)',
                    paddingBottom: '28px',
                    marginBottom: '36px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '20px'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center' }}>
                            <img
                                src="/assets/img/logo/sdg-logo.jpg"
                                alt="SDG Solutions"
                                style={{ maxHeight: '48px', borderRadius: '8px', padding: '3px', background: '#FFFFFF' }}
                                loading="lazy"
                            />
                        </Link>
                        <div style={{ borderLeft: '1px solid rgba(216, 220, 208, 0.2)', paddingLeft: '20px' }}>
                            <div style={{ fontSize: '14px', fontWeight: '700', color: '#FFFFFF', letterSpacing: '0.02em' }}>
                                SDG SOLUTIONS
                            </div>
                            <div style={{ fontSize: '12px', color: 'var(--brand-stone)', opacity: 0.8 }}>
                                Technology That Works. Systems That Scale.
                            </div>
                        </div>
                    </div>

                    {/* Operational Health Badge */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'rgba(30, 58, 46, 0.6)',
                            border: '1px solid rgba(107, 127, 103, 0.4)',
                            padding: '6px 14px',
                            borderRadius: '999px',
                            fontSize: '12px',
                            color: '#E5EADF'
                        }}>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#62A36B', display: 'inline-block' }}></span>
                            <span>All Systems Operational · 99.98% Monitored Uptime</span>
                        </div>
                    </div>
                </div>

                {/* MAIN 4-COLUMN CLASSIC GRID */}
                <div className="row g-4">
                    {/* Column 1: Company Overview & Contact Details */}
                    <div className="col-lg-4 col-md-6">
                        <div className="footer-logo-area">
                            <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#FFFFFF', marginBottom: '14px', letterSpacing: '0.02em' }}>
                                About the Company
                            </h3>
                            <p style={{ color: 'var(--brand-stone)', fontSize: '13px', lineHeight: '1.7', marginBottom: '16px' }}>
                                SDG Solutions helps businesses build, manage and improve their technology environments through
                                practical IT infrastructure, cloud solutions, managed systems, networking, software development
                                and digital services.
                            </p>
                            <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(216, 220, 208, 0.1)', borderRadius: '10px', padding: '14px', marginBottom: '16px' }}>
                                <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--brand-sage)', fontWeight: '700', marginBottom: '4px' }}>
                                    Operating Locations
                                </div>
                                <div style={{ fontSize: '13px', color: '#FFFFFF', fontWeight: '600' }}>
                                    London, UK &amp; Vijayawada, India
                                </div>
                                <div style={{ fontSize: '12px', color: 'var(--brand-stone)', opacity: 0.75, marginTop: '2px' }}>
                                    Dual Operations Hubs &amp; Global Remote Project Delivery
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <a
                                    href="https://www.linkedin.com/company/sdgsolutions/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    style={{
                                        width: '36px',
                                        height: '36px',
                                        borderRadius: '8px',
                                        background: 'rgba(255, 255, 255, 0.06)',
                                        border: '1px solid rgba(216, 220, 208, 0.15)',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--brand-stone)'
                                    }}
                                >
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                                <a
                                    href="https://github.com/dineshkodali"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    style={{
                                        width: '36px',
                                        height: '36px',
                                        borderRadius: '8px',
                                        background: 'rgba(255, 255, 255, 0.06)',
                                        border: '1px solid rgba(216, 220, 208, 0.15)',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--brand-stone)'
                                    }}
                                >
                                    <i className="fa-brands fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Technology Disciplines */}
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-logo-area1">
                            <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#FFFFFF', marginBottom: '14px', letterSpacing: '0.02em' }}>
                                Technology Disciplines
                            </h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                <li style={{ marginBottom: '9px' }}><Link to="/services">Cloud &amp; Infrastructure (AWS / Azure)</Link></li>
                                <li style={{ marginBottom: '9px' }}><Link to="/services">Managed IT &amp; Windows Server</Link></li>
                                <li style={{ marginBottom: '9px' }}><Link to="/services">Active Directory &amp; Microsoft 365</Link></li>
                                <li style={{ marginBottom: '9px' }}><Link to="/services">Networking &amp; Omada SDN</Link></li>
                                <li style={{ marginBottom: '9px' }}><Link to="/services">Custom Software &amp; React Web Apps</Link></li>
                                <li style={{ marginBottom: '9px' }}><Link to="/services">PostgreSQL &amp; Row Level Security</Link></li>
                                <li style={{ marginBottom: '9px' }}><Link to="/services">DevOps, Docker &amp; CI/CD</Link></li>
                                <li><Link to="/services">Prometheus &amp; Grafana Observability</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 3: Featured Works & Case Studies */}
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-logo-area1">
                            <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#FFFFFF', marginBottom: '14px', letterSpacing: '0.02em' }}>
                                Featured Systems &amp; Works
                            </h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                <li style={{ marginBottom: '9px' }}><Link to="/case/sdtracker">SDTracker Operations Platform</Link></li>
                                <li style={{ marginBottom: '9px' }}><Link to="/case/multi-site-network">Multi-Site Omada Network WAN</Link></li>
                                <li style={{ marginBottom: '9px' }}><Link to="/case/active-directory">Windows Server 2022 Domain Setup</Link></li>
                                <li style={{ marginBottom: '9px' }}><Link to="/case/infrastructure-monitoring">Prometheus Observability Stack</Link></li>
                                <li style={{ marginBottom: '9px' }}><Link to="/case/containerised-infrastructure">Docker Container CI/CD Pipeline</Link></li>
                                <li style={{ marginBottom: '9px' }}><Link to="/case/cloud-backup-recovery">Cloud Backups &amp; Disaster Recovery</Link></li>
                                <li style={{ marginBottom: '9px' }}><Link to="/case">All Technical Case Studies &rarr;</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 4: Direct Engineering Contact */}
                    <div className="col-lg-2 col-md-6">
                        <div className="footer-logo-area3">
                            <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#FFFFFF', marginBottom: '14px', letterSpacing: '0.02em' }}>
                                Direct Contact
                            </h3>
                            <div style={{ color: 'var(--brand-stone)', fontSize: '13px', lineHeight: '1.6', marginBottom: '14px' }}>
                                <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--brand-sage)', fontWeight: '700', marginBottom: '3px' }}>
                                    Direct Phone Lines
                                </div>
                                <a href="tel:+4407862172610" style={{ color: '#FFFFFF', fontWeight: '600', textDecoration: 'none', display: 'block', fontSize: '12px', marginBottom: '3px' }}>
                                    <span style={{ color: 'var(--brand-stone)', fontSize: '11px', marginRight: '4px' }}>UK:</span> +44 07862172610
                                </a>
                                <a href="tel:+919398357180" style={{ color: '#FFFFFF', fontWeight: '600', textDecoration: 'none', display: 'block', fontSize: '12px', marginBottom: '12px' }}>
                                    <span style={{ color: 'var(--brand-stone)', fontSize: '11px', marginRight: '4px' }}>IN:</span> +91 9398357180
                                </a>

                                <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--brand-sage)', fontWeight: '700', marginBottom: '3px' }}>
                                    Official Inquiries
                                </div>
                                <a href="mailto:info@sdgsolutions.in" style={{ color: '#FFFFFF', fontWeight: '600', textDecoration: 'none', display: 'block', fontSize: '12px', marginBottom: '3px' }}>
                                    info@sdgsolutions.in
                                </a>
                                <a href="mailto:ella@sdgsolutions.in" style={{ color: '#FFFFFF', fontWeight: '600', textDecoration: 'none', display: 'block', fontSize: '12px', marginBottom: '12px' }}>
                                    ella@sdgsolutions.in
                                </a>

                                <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--brand-sage)', fontWeight: '700', marginBottom: '2px' }}>
                                    Locations
                                </div>
                                <div style={{ color: 'var(--brand-stone)', fontSize: '12px' }}>
                                    London &amp; Vijayawada
                                </div>
                            </div>

                            <Link to="/contact" className="header-btn21" style={{ fontSize: '11px', padding: '8px 12px', width: '100%', justifyContent: 'center' }}>
                                Contact Us <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="space40"></div>

                {/* CLASSIC BOTTOM BAR: COPYRIGHT, MOTTO & COMPLIANCE */}
                <div style={{
                    borderTop: '1px solid rgba(216, 220, 208, 0.12)',
                    paddingTop: '20px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '14px'
                }}>
                    <div style={{ color: '#8C968B', fontSize: '12px' }}>
                        &#169; Copyright {new Date().getFullYear()} SDG Solutions. All rights reserved. Technology That Works. Systems That Scale.
                    </div>

                    <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
                        <Link to="/about" style={{ color: '#8C968B', fontSize: '12px' }}>About Company</Link>
                        <Link to="/services" style={{ color: '#8C968B', fontSize: '12px' }}>Services Catalogue</Link>
                        <Link to="/pricing" style={{ color: '#8C968B', fontSize: '12px' }}>Engagement Models</Link>
                        <Link to="/faq" style={{ color: '#8C968B', fontSize: '12px' }}>Technical FAQ</Link>
                        <Link to="/contact" style={{ color: '#8C968B', fontSize: '12px' }}>Inquiries</Link>
                    </div>
                </div>

            </div>
        </footer>
    )
}
