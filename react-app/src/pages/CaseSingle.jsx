import { Link, useParams } from 'react-router-dom'
import { technicalProjects } from '../data/projectsData'

export default function CaseSingle() {
    const { id } = useParams()
    const project = technicalProjects.find(p => p.slug === id || p.id === id) || technicalProjects[0]

    return (
        <div className="homepage13-body">

            {/* PAGE HEADER */}
            <div className="about-header-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 m-auto">
                            <div className="about-inner-header heading9 text-center">
                                <span className={project.statusType === 'active' ? 'badge-active' : project.statusType === 'complete' ? 'badge-complete' : 'badge-pending'} style={{ marginBottom: '12px' }}>
                                    {project.status}
                                </span>
                                <h1 style={{ fontSize: '32px', margin: '8px 0 12px 0' }}>{project.title}</h1>
                                <Link to="/">Home <i className="fa-solid fa-angle-right"></i></Link>
                                <Link to="/case"> Case Studies <i className="fa-solid fa-angle-right"></i></Link>
                                <span> {project.shortTitle}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MAIN CASE STUDY CONTENT */}
            <div className="sp1">
                <div className="container">
                    <div className="row g-4">
                        {/* LEFT COLUMN: MAIN ENGINEERING REPORT */}
                        <div className="col-lg-8">
                            <div className="fs-card" style={{ padding: '36px' }}>

                                {/* Overview */}
                                <div style={{ marginBottom: '28px' }}>
                                    <h2 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '12px' }}>
                                        Project Overview
                                    </h2>
                                    <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-primary)' }}>
                                        {project.summary}
                                    </p>
                                </div>

                                {/* Operational Requirement */}
                                <div style={{ marginBottom: '28px' }}>
                                    <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '10px' }}>
                                        Operational Requirements &amp; Problem Statement
                                    </h3>
                                    <p style={{ fontSize: '14px', lineHeight: '1.65', color: 'var(--text-secondary)' }}>
                                        {project.requirement}
                                    </p>
                                </div>

                                {/* Visual Media (Blueprints / Screenshots if available) */}
                                {project.id === 'sdtracker' && (
                                    <div style={{ marginBottom: '32px' }}>
                                        <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '14px' }}>
                                            Application Blueprint &amp; System Schematics
                                        </h3>
                                        <div style={{ background: '#F8F9F5', border: '1px solid var(--border)', borderRadius: '12px', padding: '16px', marginBottom: '16px', textAlign: 'center' }}>
                                            <img
                                                src="/projects/sdtracker/app-wireframe-blueprint.svg"
                                                alt="SDTracker App Wireframe Blueprint"
                                                style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
                                                loading="lazy"
                                            />
                                            <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '8px' }}>
                                                Production App Wireframe Blueprint: Navigation, repair ticket matrix, and multi-property switcher.
                                            </div>
                                        </div>
                                        <div style={{ background: '#F8F9F5', border: '1px solid var(--border)', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
                                            <img
                                                src="/projects/sdtracker/app-workflow.svg"
                                                alt="SDTracker Security and Role-Based Workflow"
                                                style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
                                                loading="lazy"
                                            />
                                            <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '8px' }}>
                                                System Workflow: User role authentication gate directing traffic through PostgreSQL Row Level Security.
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Architecture */}
                                <div style={{ marginBottom: '28px' }}>
                                    <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '10px' }}>
                                        System Architecture
                                    </h3>
                                    <p style={{ fontSize: '14px', lineHeight: '1.65', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                                        {project.architecture}
                                    </p>

                                    {/* Architecture Layers */}
                                    <div className="row g-3">
                                        {project.architectureLayers.map((layer, idx) => (
                                            <div className="col-12" key={idx}>
                                                <div style={{ background: '#F8F9F5', border: '1px solid var(--border)', borderRadius: '10px', padding: '18px 20px' }}>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                                                        <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--brand-forest)' }}>
                                                            {layer.layer}
                                                        </span>
                                                    </div>
                                                    <div style={{ fontSize: '15px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '6px' }}>
                                                        {layer.title}
                                                    </div>
                                                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: '0 0 10px 0' }}>
                                                        {layer.description}
                                                    </p>
                                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                                        {layer.components.map((c, cIdx) => (
                                                            <span key={cIdx} style={{ background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: '4px', padding: '2px 8px', fontSize: '11px', fontWeight: '600', color: 'var(--text-primary)' }}>
                                                                {c}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Implementation Details */}
                                <div style={{ marginBottom: '28px' }}>
                                    <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '12px' }}>
                                        Technical Implementation Details
                                    </h3>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        {project.implementationDetails.map((step, idx) => (
                                            <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px', fontSize: '14px', color: 'var(--text-primary)' }}>
                                                <i className="fa-solid fa-check" style={{ color: 'var(--brand-forest)', marginTop: '4px', fontSize: '13px' }}></i>
                                                <span>{step}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Challenges & Engineering Decisions */}
                                <div style={{ marginBottom: '28px' }}>
                                    <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '10px' }}>
                                        Engineering Challenges &amp; Strategic Decisions
                                    </h3>
                                    <div style={{ background: '#FFFDF5', border: '1px solid #EEDB9A', borderRadius: '10px', padding: '16px', marginBottom: '12px' }}>
                                        <div style={{ fontSize: '12px', fontWeight: '700', color: '#8F6612', marginBottom: '4px' }}>
                                            Key Engineering Challenge:
                                        </div>
                                        <div style={{ fontSize: '13px', color: '#5A4310' }}>
                                            {project.challenges}
                                        </div>
                                    </div>
                                    <div style={{ background: '#F5F9F4', border: '1px solid #BFD9BD', borderRadius: '10px', padding: '16px' }}>
                                        <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--brand-forest)', marginBottom: '4px' }}>
                                            Architectural Decision:
                                        </div>
                                        <div style={{ fontSize: '13px', color: 'var(--brand-ink)' }}>
                                            {project.decisions}
                                        </div>
                                    </div>
                                </div>

                                {/* Verified Results */}
                                <div>
                                    <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '14px' }}>
                                        Verified Technical Outcomes
                                    </h3>
                                    <div className="row g-3">
                                        {project.results.map((res, idx) => (
                                            <div className="col-sm-6" key={idx}>
                                                <div style={{ background: '#F8F9F5', border: '1px solid var(--border)', borderRadius: '10px', padding: '16px' }}>
                                                    <div style={{ fontSize: '22px', fontWeight: '700', color: 'var(--brand-forest)', marginBottom: '4px' }}>
                                                        {res.value}
                                                    </div>
                                                    <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--brand-ink)', marginBottom: '2px' }}>
                                                        {res.label}
                                                    </div>
                                                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                                                        {res.detail}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* RIGHT COLUMN: METADATA, TECHNOLOGIES & OTHER CASE STUDIES */}
                        <div className="col-lg-4">
                            <div className="fs-card" style={{ padding: '24px', marginBottom: '24px' }}>
                                <h4 style={{ fontSize: '17px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '14px' }}>
                                    Project Metadata
                                </h4>
                                <div style={{ marginBottom: '12px' }}>
                                    <div className="kpi-label">Implementation Status</div>
                                    <span className={project.statusType === 'active' ? 'badge-active' : project.statusType === 'complete' ? 'badge-complete' : 'badge-pending'}>
                                        {project.status}
                                    </span>
                                </div>
                                <div style={{ marginBottom: '12px' }}>
                                    <div className="kpi-label">Discipline</div>
                                    <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--brand-ink)' }}>
                                        {project.category}
                                    </div>
                                </div>
                                <div style={{ marginBottom: '12px' }}>
                                    <div className="kpi-label">Operational Domain</div>
                                    <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                                        {project.domain}
                                    </div>
                                </div>
                                <div style={{ marginBottom: '18px' }}>
                                    <div className="kpi-label">Core Technologies</div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
                                        {project.technologies.map((t, idx) => (
                                            <span key={idx} style={{ background: '#F8F9F5', border: '1px solid var(--border)', borderRadius: '6px', padding: '3px 8px', fontSize: '11px', fontWeight: '600', color: 'var(--brand-forest)' }}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <Link to="/contact" className="header-btn21" style={{ width: '100%', justifyContent: 'center' }}>
                                    Discuss Similar Implementation <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>

                            {/* OTHER CASE STUDIES LIST */}
                            <div className="fs-card" style={{ padding: '24px' }}>
                                <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '12px' }}>
                                    Other Technical Case Studies
                                </h4>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {technicalProjects.filter(p => p.id !== project.id).map((other) => (
                                        <li key={other.id} style={{ borderBottom: '1px solid var(--border)', paddingBottom: '10px', marginBottom: '10px' }}>
                                            <Link to={`/case/${other.slug}`} style={{ textDecoration: 'none' }}>
                                                <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--brand-ink)', marginBottom: '2px' }}>
                                                    {other.shortTitle}
                                                </div>
                                                <div style={{ fontSize: '11px', color: 'var(--brand-sage)' }}>
                                                    {other.category}
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CALL TO ACTION */}
            <div className="container">
                <div className="cta13-section-area">
                    <h2>Have a technical challenge to solve?</h2>
                    <p>
                        We build robust IT networks, cloud infrastructure, and custom business platforms.
                        Let’s review your technical requirements together.
                    </p>
                    <div className="btn-area1" style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                        <Link to="/contact" className="header-btn21">
                            Contact SDG Solutions <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                        <Link to="/case" className="header-btn21 btn2">
                            View All Case Studies <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
