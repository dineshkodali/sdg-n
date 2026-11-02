import { Link } from 'react-router-dom'

export default function BlogSingle() {
    return (
        <div className="homepage13-body">
            {/* PAGE HEADER */}
            <div className="about-header-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <div className="about-inner-header heading9 text-center">
                                <h1>Engineering Insight</h1>
                                <Link to="/">Home <i className="fa-solid fa-angle-right"></i></Link>
                                <Link to="/blog"> Insights <i className="fa-solid fa-angle-right"></i></Link>
                                <span> Cloud Migration Strategy</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* BLOG DETAILS AREA */}
            <div className="sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <div className="fs-card" style={{ padding: '36px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                                    <span className="badge-active">Cloud Infrastructure</span>
                                    <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>October 2026 · 6 min read</span>
                                </div>

                                <h2 style={{ fontSize: '28px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '16px', lineHeight: '1.3' }}>
                                    Practical Cloud Migration: Sizing AWS &amp; Azure Workloads Without Waste
                                </h2>

                                <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-primary)', marginBottom: '20px' }}>
                                    Moving existing business applications or on-premise servers to cloud infrastructure is one of the most
                                    critical architectural shifts an organisation can undertake. Yet, far too many companies experience severe
                                    "bill shock" within their first 90 days on AWS or Azure due to 1:1 lift-and-shift provisioning of oversized virtual machines.
                                </p>

                                <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '12px' }}>
                                    1. The Pitfall of Peak-Capacity Sizing
                                </h3>
                                <p style={{ fontSize: '14px', lineHeight: '1.65', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                                    Traditional on-premise hardware was routinely purchased with 3- to 5-year headroom, resulting in servers that
                                    rarely exceeded 15% average CPU utilisation. Migrating those exact CPU and RAM configurations directly to
                                    AWS EC2 or Azure Virtual Machines results in paying continuously for dormant compute capacity.
                                </p>

                                <div style={{ background: '#F8F9F5', border: '1px solid var(--border)', borderRadius: '10px', padding: '18px 20px', marginBottom: '24px' }}>
                                    <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--brand-forest)', marginBottom: '6px' }}>
                                        Key Engineering Rule: Measure Before Provisioning
                                    </div>
                                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0 }}>
                                        Deploy lightweight telemetry (such as Prometheus Node Exporter) to capture 14 to 30 days of 95th-percentile
                                        memory and disk I/O demands. Sizing instances to the 95th percentile with auto-scaling triggers typically
                                        reduces monthly cloud hosting fees by 35% to 50%.
                                    </p>
                                </div>

                                <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '12px' }}>
                                    2. Network Boundaries &amp; VPC Segregation
                                </h3>
                                <p style={{ fontSize: '14px', lineHeight: '1.65', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                                    Every production cloud deployment must isolate database and backend services in private subnets with zero
                                    public IP assignments. Ingress should be restricted strictly to hardened reverse proxies or Application
                                    Load Balancers with managed TLS termination and Cloudflare edge filtering.
                                </p>

                                <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '12px' }}>
                                    3. Automated Backups &amp; Immutable Storage
                                </h3>
                                <p style={{ fontSize: '14px', lineHeight: '1.65', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                                    Disaster recovery is not complete until restoration is tested. We enforce automated snapshot lifecycles
                                    with cross-region replication to immutable S3 or Azure Blob storage vaults, protecting operational records
                                    against both hardware failures and ransomware risks.
                                </p>

                                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                                    <div>
                                        <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--brand-ink)' }}>SDG Solutions Technical Advisory</div>
                                        <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>London, UK &amp; Vijayawada, India · Practical Cloud Architecture</div>
                                    </div>
                                    <Link to="/contact" className="header-btn21" style={{ fontSize: '12px', padding: '8px 16px' }}>
                                        Discuss Your Cloud Architecture <i className="fa-solid fa-arrow-right"></i>
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
