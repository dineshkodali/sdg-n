import { Link } from 'react-router-dom'
import { useState } from 'react'
import { technicalProjects } from '../data/projectsData'

const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'software', label: 'Software & Web Apps' },
    { id: 'networking', label: 'Networking & Security' },
    { id: 'systems', label: 'Managed IT & Systems' },
    { id: 'devops', label: 'DevOps & Monitoring' },
    { id: 'cloud', label: 'Cloud Backups & Vaults' },
]

export default function CaseStudy() {
    const [activeTab, setActiveTab] = useState('all')

    const filteredProjects = activeTab === 'all'
        ? technicalProjects
        : technicalProjects.filter(p => p.categoryKey === activeTab)

    return (
        <div className="homepage13-body">

            {/* PAGE HEADER */}
            <div className="about-header-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <div className="about-inner-header heading9 text-center">
                                <h1>Technical Case Studies</h1>
                                <Link to="/">Home <i className="fa-solid fa-angle-right"></i> <span>Case Studies</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* OVERVIEW INTRO */}
            <div className="sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto text-center mb-4">
                            <div className="heading20">
                                <h5>Engineering Evidence</h5>
                                <h2>Real-World Systems Architecture &amp; Delivery</h2>
                                <p style={{ fontSize: '15px', color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto' }}>
                                    We do not publish fictional customer stories or marketing fluff. Below is a portfolio of
                                    genuine technical projects, infrastructure configurations, and software platforms engineered
                                    by our technical team, clearly identifying implementation status.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CATEGORY FILTER TABS */}
                    <div className="row mb-4">
                        <div className="col-12">
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        type="button"
                                        onClick={() => setActiveTab(cat.id)}
                                        style={{
                                            padding: '8px 16px',
                                            borderRadius: '999px',
                                            fontSize: '13px',
                                            fontWeight: '600',
                                            cursor: 'pointer',
                                            transition: 'all 0.15s ease',
                                            background: activeTab === cat.id ? 'var(--brand-forest)' : '#FFFFFF',
                                            color: activeTab === cat.id ? '#FFFFFF' : 'var(--text-primary)',
                                            border: activeTab === cat.id ? '1px solid var(--brand-forest)' : '1px solid var(--border)'
                                        }}
                                    >
                                        {cat.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* PROJECTS GRID */}
                    <div className="row g-4">
                        {filteredProjects.map((project) => (
                            <div className="col-lg-6" key={project.id}>
                                <div className="fs-card" style={{ padding: '28px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <div>
                                        {/* Status Header */}
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                                            <span className={project.statusType === 'active' ? 'badge-active' : project.statusType === 'complete' ? 'badge-complete' : 'badge-pending'}>
                                                {project.status}
                                            </span>
                                            <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                                                {project.domain}
                                            </span>
                                        </div>

                                        {/* Title & Summary */}
                                        <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '10px' }}>
                                            {project.title}
                                        </h3>
                                        <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '18px' }}>
                                            {project.summary}
                                        </p>

                                        {/* Visual Graphic if available */}
                                        {project.blueprintImage ? (
                                            <div style={{ marginBottom: '18px', background: '#F8F9F5', border: '1px solid var(--border)', borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
                                                <img
                                                    src={project.blueprintImage}
                                                    alt={`${project.title} Wireframe`}
                                                    style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'contain' }}
                                                    loading="lazy"
                                                />
                                                <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '6px' }}>
                                                    Production Application Layout &amp; Module Blueprint
                                                </div>
                                            </div>
                                        ) : null}

                                        {/* Technologies */}
                                        <div style={{ background: '#F8F9F5', padding: '14px 16px', borderRadius: '10px', border: '1px solid var(--border)', marginBottom: '18px' }}>
                                            <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '6px' }}>
                                                Key Technologies &amp; Architecture:
                                            </div>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                                {project.technologies.map((tech, idx) => (
                                                    <span key={idx} style={{ background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: '6px', padding: '3px 8px', fontSize: '11px', fontWeight: '600', color: 'var(--brand-forest)' }}>
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Verified Results Metrics */}
                                        <div className="row g-2 mb-3">
                                            {project.results.slice(0, 2).map((res, idx) => (
                                                <div className="col-6" key={idx}>
                                                    <div style={{ background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: '8px', padding: '10px 12px' }}>
                                                        <div style={{ fontSize: '16px', fontWeight: '700', color: 'var(--brand-forest)' }}>
                                                            {res.value}
                                                        </div>
                                                        <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                                                            {res.label}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Link */}
                                    <div style={{ borderTop: '1px solid var(--border)', paddingTop: '16px', marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Link
                                            to={`/case/${project.slug}`}
                                            style={{ fontSize: '13px', fontWeight: '600', color: 'var(--brand-forest)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                                        >
                                            Read Technical Case Study <i className="fa-solid fa-arrow-right"></i>
                                        </Link>
                                        <span style={{ fontSize: '12px', color: 'var(--brand-sage)', fontWeight: '500' }}>
                                            {project.category}
                                        </span>
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
                    <h2>Need similar technical systems for your business?</h2>
                    <p>
                        We design, configure, and maintain robust infrastructure and custom web platforms
                        built to withstand everyday business demands.
                    </p>
                    <div className="btn-area1" style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                        <Link to="/contact" className="header-btn21">
                            Discuss Your Project With Engineers <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                        <Link to="/services" className="header-btn21 btn2">
                            Explore Services Catalogue <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
