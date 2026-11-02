import { Link } from 'react-router-dom'

export default function Team() {
    const roles = [
        {
            role: 'Cloud & Infrastructure Architecture',
            focus: 'Amazon Web Services (AWS) & Microsoft Azure',
            desc: 'Designing Virtual Private Clouds (VPCs), virtual machine sizing, automated snapshot lifecycles, and cloud security governance.',
            icon: 'fa-cloud'
        },
        {
            role: 'Systems & Directory Administration',
            focus: 'Windows Server 2022 & Microsoft 365',
            desc: 'Centralized Active Directory Domain Services (AD DS), Group Policy security enforcement, DNS failover, and Remote Desktop Services (RDS).',
            icon: 'fa-server'
        },
        {
            role: 'Network Engineering & Security',
            focus: 'TP-Link Omada SDN & WireGuard VPNs',
            desc: 'Multi-site corporate connectivity, multi-WAN load balancing, hardware firewalls, and 802.1Q VLAN network segmentation.',
            icon: 'fa-network-wired'
        },
        {
            role: 'Full-Stack Software Engineering',
            focus: 'React 19, Supabase & PostgreSQL 15+',
            desc: 'Bespoke operational platforms like SDTracker, database Row Level Security (RLS), dynamic API adapters, and automated document builders.',
            icon: 'fa-code'
        },
        {
            role: 'DevOps & Telemetry Engineering',
            focus: 'Docker, Prometheus & Grafana',
            desc: 'Containerized deployment pipelines, reproducible build workflows via GitHub Actions, and 24/7 proactive telemetry alerting.',
            icon: 'fa-sliders'
        },
        {
            role: 'Digital & Business Solutions',
            focus: 'Web Platforms & Edge DNS',
            desc: 'High-speed business web platforms, DNS deliverability records (SPF, DKIM, DMARC), and ongoing technical maintenance.',
            icon: 'fa-laptop-code'
        }
    ]

    return (
        <div className="homepage13-body">
            <div className="about-header-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <div className="about-inner-header heading9 text-center">
                                <h1>Engineering Leadership &amp; Disciplines</h1>
                                <Link to="/">Home <i className="fa-solid fa-angle-right"></i> <span>Team &amp; Capabilities</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto text-center mb-5">
                            <div className="heading20">
                                <h5>Direct Engineering Collaboration</h5>
                                <h2>Technical Disciplines at SDG Solutions</h2>
                                <p style={{ fontSize: '15px', color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto' }}>
                                    When you work with SDG Solutions, you collaborate directly with seasoned technical engineers
                                    who design, build, and maintain real infrastructure. We do not use non-technical account managers
                                    or outsourced call centres.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row g-4">
                        {roles.map((r, idx) => (
                            <div className="col-lg-4 col-md-6" key={idx}>
                                <div className="fs-card" style={{ padding: '28px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <div>
                                        <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#EBF0E6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                                            <i className={`fa-solid ${r.icon}`} style={{ color: 'var(--brand-forest)', fontSize: '18px' }}></i>
                                        </div>
                                        <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '6px' }}>
                                            {r.role}
                                        </h3>
                                        <div style={{ fontSize: '12px', fontWeight: '600', color: 'var(--brand-forest)', marginBottom: '12px' }}>
                                            {r.focus}
                                        </div>
                                        <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-secondary)', margin: 0 }}>
                                            {r.desc}
                                        </p>
                                    </div>
                                    <div style={{ borderTop: '1px solid var(--border)', paddingTop: '14px', marginTop: '16px' }}>
                                        <Link to="/services" style={{ fontSize: '12px', fontWeight: '600', color: 'var(--brand-forest)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                            Explore Discipline Capabilities &rarr;
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="cta13-section-area">
                    <h2>Discuss your project with our engineering team</h2>
                    <p>
                        We evaluate your existing infrastructure, networks, and software workloads
                        to recommend practical solutions built for your operational requirements.
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
