import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="homepage13-body">
            <div className="about-header-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <div className="about-inner-header heading9 text-center">
                                <h1>404 — Page Not Found</h1>
                                <Link to="/">Home <i className="fa-solid fa-angle-right"></i> <span>404 Error</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="fs-card text-center" style={{ padding: '40px 24px' }}>
                                <div style={{ fontSize: '48px', fontWeight: '800', color: 'var(--brand-forest)', marginBottom: '12px' }}>
                                    404
                                </div>
                                <h2 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '10px' }}>
                                    Page Not Located
                                </h2>
                                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                                    The requested technical page or resource could not be found or may have moved.
                                    Use the links below to return to active sections of our website.
                                </p>
                                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                    <Link to="/" className="header-btn21">
                                        Back to Home <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                    <Link to="/services" className="header-btn21 btn2">
                                        View Services Catalogue
                                    </Link>
                                    <Link to="/contact" className="header-btn21 btn2">
                                        Contact Support
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
