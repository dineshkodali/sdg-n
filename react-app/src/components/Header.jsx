import { Link, useLocation } from 'react-router-dom'

export default function Header() {
    const location = useLocation()
    const isActive = (path) => location.pathname === path

    return (
        <>
            {/* DESKTOP HEADER */}
            <header>
                <div className="header-area homepage13 header header-sticky d-none d-lg-block" id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="header-elements">
                                    <div className="site-logo">
                                        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center' }} title="SDG Solutions">
                                            <img
                                                src="/assets/img/logo/sdg-logo.jpg"
                                                alt="SDG Solutions - Technology Infrastructure & Cloud Solutions"
                                                style={{ maxHeight: '48px', borderRadius: '8px', border: '1px solid var(--border)' }}
                                                loading="lazy"
                                            />
                                        </Link>
                                    </div>
                                    <nav className="main-menu" aria-label="Main Navigation">
                                        <ul>
                                            <li>
                                                <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
                                            </li>
                                            <li>
                                                <Link to="/about" className={isActive('/about') ? 'active' : ''}>About</Link>
                                            </li>
                                            <li>
                                                <Link to="/services" className={isActive('/services') ? 'active' : ''}>Services</Link>
                                            </li>
                                            <li>
                                                <Link to="/case" className={isActive('/case') ? 'active' : ''}>Case Studies</Link>
                                            </li>
                                            <li>
                                                <Link to="/pricing" className={isActive('/pricing') ? 'active' : ''}>Pricing</Link>
                                            </li>
                                            <li>
                                                <Link to="/faq" className={isActive('/faq') ? 'active' : ''}>FAQ</Link>
                                            </li>
                                            <li>
                                                <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div className="btn-area">
                                        <Link to="/contact" className="header-btn21">
                                            Discuss Your Project <span><i className="fa-solid fa-arrow-right"></i></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* MOBILE HEADER */}
            <div className="mobile-header mobile-haeder13 d-block d-lg-none">
                <div className="container-fluid">
                    <div className="col-12">
                        <div className="mobile-header-elements">
                            <div className="mobile-logo">
                                <Link to="/">
                                    <img
                                        src="/assets/img/logo/sdg-logo.jpg"
                                        alt="SDG Solutions"
                                        style={{ maxHeight: '40px', borderRadius: '6px', border: '1px solid var(--border)' }}
                                        loading="lazy"
                                    />
                                </Link>
                            </div>
                            <div className="mobile-nav-icon dots-menu" aria-label="Open navigation menu">
                                <i className="fa-solid fa-bars" style={{ color: 'var(--brand-ink)', fontSize: '20px' }}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MOBILE SIDEBAR DRAWER */}
            <div className="mobile-sidebar mobile-sidebar13">
                <div className="logosicon-area">
                    <div className="logos">
                        <img
                            src="/assets/img/logo/sdg-logo.jpg"
                            alt="SDG Solutions"
                            style={{ maxHeight: '42px', borderRadius: '6px' }}
                            loading="lazy"
                        />
                    </div>
                    <div className="menu-close" aria-label="Close navigation menu">
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                </div>
                <div className="mobile-nav mobile-nav1">
                    <ul className="mobile-nav-list nav-list1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Services Catalogue</Link></li>
                        <li><Link to="/case">Case Studies</Link></li>
                        <li><Link to="/pricing">Pricing &amp; Engagements</Link></li>
                        <li><Link to="/faq">Frequently Asked Questions</Link></li>
                        <li><Link to="/contact">Contact Our Team</Link></li>
                    </ul>
                    <div className="allmobilesection">
                        <Link to="/contact" className="header-btn21" style={{ width: '100%', justifyContent: 'center' }}>
                            Discuss Your Project <span><i className="fa-solid fa-arrow-right"></i></span>
                        </Link>
                        <div className="single-footer">
                            <h3 style={{ fontSize: '15px', color: 'var(--brand-ink)', margin: '16px 0 8px 0' }}>Technical Advisory</h3>
                            <div className="footer1-contact-info">
                                <div className="contact-info-single" style={{ marginBottom: '6px' }}>
                                    <a href="tel:+4407862172610" style={{ color: 'var(--text-secondary)', fontSize: '13px', display: 'flex', alignItems: 'center' }}>
                                        <i className="fa-solid fa-phone" style={{ marginRight: '8px', color: 'var(--brand-forest)' }}></i> UK: +44 07862172610
                                    </a>
                                </div>
                                <div className="contact-info-single" style={{ marginBottom: '6px' }}>
                                    <a href="tel:+919398357180" style={{ color: 'var(--text-secondary)', fontSize: '13px', display: 'flex', alignItems: 'center' }}>
                                        <i className="fa-solid fa-phone" style={{ marginRight: '8px', color: 'var(--brand-forest)' }}></i> IN: +91 9398357180
                                    </a>
                                </div>
                                <div className="contact-info-single" style={{ marginBottom: '6px' }}>
                                    <a href="mailto:info@sdgsolutions.in" style={{ color: 'var(--text-secondary)', fontSize: '13px', display: 'flex', alignItems: 'center' }}>
                                        <i className="fa-solid fa-envelope" style={{ marginRight: '8px', color: 'var(--brand-forest)' }}></i> info@sdgsolutions.in
                                    </a>
                                </div>
                                <div className="contact-info-single" style={{ marginBottom: '6px' }}>
                                    <a href="mailto:ella@sdgsolutions.in" style={{ color: 'var(--text-secondary)', fontSize: '13px', display: 'flex', alignItems: 'center' }}>
                                        <i className="fa-solid fa-envelope" style={{ marginRight: '8px', color: 'var(--brand-forest)' }}></i> ella@sdgsolutions.in
                                    </a>
                                </div>
                                <div style={{ fontSize: '11px', color: 'var(--brand-sage)', marginTop: '8px' }}>
                                    Operating: London &amp; Vijayawada
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
