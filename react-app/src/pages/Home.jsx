import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Home() {
    const [activeTab, setActiveTab] = useState('cloud')

    const techStack = [
        { name: 'Amazon Web Services', tag: 'VPC, EC2, IAM, S3, Amplify', category: 'Cloud Infrastructure' },
        { name: 'Microsoft Azure', tag: 'Virtual Machines, Blob Storage, Entra ID', category: 'Cloud Infrastructure' },
        { name: 'Microsoft 365', tag: 'Exchange Email, SharePoint, Teams Security', category: 'Office IT' },
        { name: 'Windows Server 2022', tag: 'Active Directory, Domain Logins, RDS', category: 'Systems Administration' },
        { name: 'Linux (Ubuntu & RHEL)', tag: 'Server Hardening, systemd, SSH Security', category: 'Systems Administration' },
        { name: 'TP-Link Omada SDN', tag: 'Hardware Routers, Managed Switches, Wi-Fi 6', category: 'Company Networking' },
        { name: 'WireGuard & IPsec', tag: 'Site-to-Site Encrypted Office VPNs', category: 'Network Security' },
        { name: 'Docker & Compose', tag: 'Clean App Containers, Internal Networks', category: 'DevOps & Containers' },
        { name: 'Prometheus & Grafana', tag: 'Live Health Checks, Resource Dashboards', category: 'Monitoring & Alerting' },
        { name: 'Alertmanager', tag: 'Instant Phone & Email Outage Alerts', category: 'Monitoring & Alerting' },
        { name: 'React 19 & TypeScript', tag: 'Fast Web Applications, Staff Portals', category: 'Web Applications' },
        { name: 'Supabase & PostgreSQL', tag: 'Row Level Security (RLS), Structured Data', category: 'Company Databases' },
        { name: 'Node.js & Express.js', tag: 'REST APIs, Document Generators, JWT Auth', category: 'Backend Systems' },
        { name: 'Python Automation', tag: 'Nightly Data Processing & Custom Tasks', category: 'Backend & Automation' },
        { name: 'Automated Cloud Backups', tag: 'Immutable Storage, Ransomware Protection', category: 'Data Protection' },
        { name: 'Cloudflare', tag: 'Domain DNS, Speed CDN, Firewall Protection', category: 'Web Security' },
    ]

    const comparisonPoints = [
        {
            feature: 'User Logins & Security',
            traditional: 'Shared passwords, unmanaged accounts, and no audit logs',
            sdgWay: 'Central company accounts with two-factor authentication and role limits'
        },
        {
            feature: 'Company Data Privacy',
            traditional: 'Messy spreadsheets where anyone can accidentally see or edit records',
            sdgWay: 'Database-level Row Level Security guaranteeing strict separation between sites'
        },
        {
            feature: 'Office Wi-Fi & Network',
            traditional: 'Single flat Wi-Fi where guests connect directly to internal office PCs',
            sdgWay: 'Separate network zones (VLANs) keeping visitor Wi-Fi completely isolated'
        },
        {
            feature: 'Software Updates',
            traditional: 'Manual file editing on live servers that causes unexpected website crashes',
            sdgWay: 'Clean Docker containers with automated testing and zero-downtime releases'
        },
        {
            feature: 'Server Health & Outages',
            traditional: 'Finding out about problems only after staff or customers complain',
            sdgWay: '24/7 automated monitoring that catches low disk space before servers go down'
        },
        {
            feature: 'Ownership & Documentation',
            traditional: 'Held hostage by previous developers with no passwords or documentation',
            sdgWay: '100% client ownership of all cloud logins, source code, and network runbooks'
        }
    ]

    const architectureHighlights = {
        cloud: {
            title: 'Cloud Infrastructure & Hosting',
            badge: 'AWS & Azure Multi-Region',
            headline: 'Fast, Dependable Cloud Servers Sized for Your Actual Needs',
            desc: 'We set up and manage cloud servers on AWS and Microsoft Azure with private subnets, automated nightly snapshots, and clear user permissions. Everything is sized to match your real workloads so you never pay for wasted server capacity or get caught out by surprise bills.',
            kpis: [
                { label: 'Uptime Target', value: '99.98%' },
                { label: 'Cloud Cost Savings', value: '35% – 50%' },
                { label: 'Nightly Backups', value: 'Automated' },
                { label: 'Network Security', value: 'Private Subnets' }
            ],
            technologies: ['AWS VPC', 'EC2 Virtual Servers', 'Azure Virtual Machines', 'Cloudflare CDN', 'S3 Secure Vaults']
        },
        software: {
            title: 'Custom Web Apps & Company Databases',
            badge: 'React 19 & Supabase PostgreSQL',
            headline: 'Practical Business Platforms with Built-in Privacy Rules',
            desc: 'Our flagship development work, including the SDTracker platform, shows how we replace messy spreadsheets with clean, easy web software. Using PostgreSQL Row Level Security (RLS), branch offices only see the records for their own location, making accidental data leakage impossible.',
            kpis: [
                { label: 'Cross-Branch Leaks', value: 'Zero Incidents' },
                { label: 'Emergency Repair SLA', value: '<4.0 hours' },
                { label: 'Admin Time Saved', value: '18 hrs/week' },
                { label: 'Compliance Reports', value: '100% Automated' }
            ],
            technologies: ['React 19', 'TypeScript', 'Supabase', 'PostgreSQL 15+', 'Express.js', 'AWS Amplify']
        },
        networking: {
            title: 'Office Networking & Multi-Site Wi-Fi',
            badge: 'TP-Link Omada SDN & WireGuard',
            headline: 'Encrypted Multi-Branch Connections & Isolated Guest Wi-Fi',
            desc: 'We install and manage reliable office networks with dual broadband backup lines, encrypted WireGuard VPN tunnels connecting branches together, and separated Wi-Fi zones (VLANs) that keep visitor devices away from internal company databases.',
            kpis: [
                { label: 'Network Availability', value: '99.98%' },
                { label: 'Branch VPN Speed', value: '<18ms' },
                { label: 'Guest Wi-Fi Isolation', value: '100% Separated' },
                { label: 'Internet Backup', value: 'Sub-second' }
            ],
            technologies: ['Omada Hardware SDN', 'WireGuard VPN', 'VLAN Separation', 'Hardware Firewalls', 'Enterprise Wi-Fi 6']
        },
        observability: {
            title: 'Server Monitoring & Early Warnings',
            badge: 'Prometheus, Grafana & Alertmanager',
            headline: '24/7 Live Health Tracking with Instant Alerts to Your Phone',
            desc: 'We install lightweight health sensors that track server memory, CPU, hard drive space, and website speed around the clock. Simple visual dashboards show server health at a glance, alerting our team before small issues can turn into costly downtime.',
            kpis: [
                { label: 'Early Warning Speed', value: '<60 seconds' },
                { label: 'History Saved', value: '90 Days' },
                { label: 'Alert Accuracy', value: 'No False Alarms' },
                { label: 'Website Probing', value: 'Every 30 secs' }
            ],
            technologies: ['Prometheus TSDB', 'Grafana Dashboards', 'Alertmanager', 'Node Exporter', 'Uptime Kuma']
        }
    }

    const currentArch = architectureHighlights[activeTab]

    return (
        <div className="homepage13-body">

            {/* 1. HERO SECTION: COMPACT, HIGH-IMPACT & DATA-RICH */}
            <section className="hero13-section-area" style={{ padding: '36px 0 24px 0' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="hero13-header heading19">
                                {/* Operational Health & Telemetry Pill */}
                                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#E5EADF', border: '1px solid var(--border)', borderRadius: '999px', padding: '5px 12px', marginBottom: '14px' }}>
                                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--brand-forest)', display: 'inline-block' }}></span>
                                    <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--brand-forest)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                                        Systems Operational · 99.98% Monitored Uptime · Zero Trust Baseline
                                    </span>
                                </div>

                                <h1 style={{ fontSize: '38px', fontWeight: '700', lineHeight: '1.2', color: 'var(--brand-ink)', marginBottom: '14px', letterSpacing: '-0.02em' }}>
                                    Technology That Works.<br />
                                    Systems That Scale.
                                </h1>
                                <p style={{ fontSize: '15px', lineHeight: '1.65', color: 'var(--text-secondary)', maxWidth: '560px', marginBottom: '22px' }}>
                                    From cloud infrastructure and office IT systems to custom applications and digital platforms,
                                    we help businesses make technology more reliable, manageable and useful.
                                </p>
                                <div className="btn-area1" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                    <Link to="/contact" className="header-btn21">
                                        Discuss Your Project <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                    <Link to="/services" className="header-btn21 btn2">
                                        View Services Catalogue <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                    <Link to="/case" className="header-btn21 btn2">
                                        Case Studies
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* HERO RIGHT: LIVE TELEMETRY CONSOLE */}
                        <div className="col-lg-5 mt-4 mt-lg-0">
                            <div className="fs-card" style={{ padding: '22px 24px', background: '#FFFFFF', border: '1px solid var(--border)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', borderBottom: '1px solid var(--border)', paddingBottom: '10px' }}>
                                    <div>
                                        <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--brand-ink)' }}>
                                            Systems Engineering Console
                                        </div>
                                        <div style={{ fontSize: '11px', color: 'var(--brand-sage)' }}>
                                            Infrastructure &amp; Application Architecture
                                        </div>
                                    </div>
                                    <span className="badge-active" style={{ fontSize: '10px', padding: '2px 8px' }}>Live Baseline</span>
                                </div>

                                <div className="row g-2">
                                    <div className="col-6">
                                        <div style={{ background: '#F8F9F5', padding: '12px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                                            <div className="kpi-label">Cloud Servers</div>
                                            <div style={{ fontSize: '15px', fontWeight: '700', color: 'var(--brand-forest)', margin: '2px 0 1px 0' }}>AWS &amp; Azure</div>
                                            <span style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>VPC, S3, Entra ID</span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div style={{ background: '#F8F9F5', padding: '12px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                                            <div className="kpi-label">Database Security</div>
                                            <div style={{ fontSize: '15px', fontWeight: '700', color: 'var(--brand-forest)', margin: '2px 0 1px 0' }}>PostgreSQL RLS</div>
                                            <span style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>Row Level Tenant Security</span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div style={{ background: '#F8F9F5', padding: '12px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                                            <div className="kpi-label">Network Mesh</div>
                                            <div style={{ fontSize: '15px', fontWeight: '700', color: 'var(--brand-forest)', margin: '2px 0 1px 0' }}>Omada &amp; VPN</div>
                                            <span style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>WireGuard &amp; VLANs</span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div style={{ background: '#F8F9F5', padding: '12px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                                            <div className="kpi-label">Observability</div>
                                            <div style={{ fontSize: '15px', fontWeight: '700', color: 'var(--brand-forest)', margin: '4px 0 1px 0' }}>Prometheus</div>
                                            <span style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>Grafana &amp; Alertmanager</span>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ borderTop: '1px solid var(--border)', marginTop: '14px', paddingTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <i className="fa-solid fa-location-dot" style={{ color: 'var(--brand-forest)', fontSize: '11px' }}></i>
                                        <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>London, UK &amp; Vijayawada, India</span>
                                    </div>
                                    <Link to="/about" style={{ fontSize: '11px', fontWeight: '600', color: 'var(--brand-forest)' }}>
                                        About Company &rarr;
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. OPERATIONAL REALITY: REAL PROBLEMS WE SOLVE */}
            <section className="sp5" style={{ borderTop: '1px solid var(--border)', background: '#FFFFFF', padding: '32px 0' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="heading20">
                                <h5>Engineered for Operations</h5>
                                <h2 style={{ fontSize: '26px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '10px', lineHeight: '1.3' }}>
                                    Bridging the Gap Between Software &amp; IT Infrastructure
                                </h2>
                                <p style={{ fontSize: '13px', lineHeight: '1.65', color: 'var(--text-secondary)', margin: 0 }}>
                                    Most technology providers force businesses to choose between web developers who don’t understand
                                    networks and firewalls, or IT support desks who can’t build custom software. SDG Solutions delivers both.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-7 mt-3 mt-lg-0">
                            <div className="row g-2">
                                {[
                                    {
                                        title: 'Eliminating Spreadsheet Chaos',
                                        desc: 'We transform manual spreadsheets and paper forms into secure web platforms like SDTracker with permanent audit logs.'
                                    },
                                    {
                                        title: 'Preventing Cloud Bill Shock',
                                        desc: 'We size cloud servers to real 95th-percentile workload requirements, cutting out wasted idle compute on AWS and Azure.'
                                    },
                                    {
                                        title: 'Airtight Network Segmentation',
                                        desc: 'We isolate guest Wi-Fi on dedicated network zones (VLANs) so visitor phones never touch internal company databases.'
                                    },
                                    {
                                        title: 'Early Warnings Before Outages',
                                        desc: 'Live telemetry monitors hard drive space, memory, and database speed, alerting our team before slowdowns impact staff.'
                                    }
                                ].map((item, idx) => (
                                    <div className="col-sm-6" key={idx}>
                                        <div style={{ background: '#F8F9F5', border: '1px solid var(--border)', borderRadius: '8px', padding: '14px', height: '100%' }}>
                                            <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '4px' }}>
                                                {item.title}
                                            </h3>
                                            <p style={{ fontSize: '12px', lineHeight: '1.5', color: 'var(--text-secondary)', margin: 0 }}>
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. INTERACTIVE ARCHITECTURE CONSOLE (COMPACT & SWIPEABLE ON MOBILE) */}
            <section className="sp5" style={{ padding: '32px 0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto text-center mb-3">
                            <div className="heading20">
                                <h5>System Blueprints</h5>
                                <h2>Interactive Architecture Deep-Dive</h2>
                                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                                    Tap an engineering discipline to inspect how we build, secure, and monitor mission-critical systems.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Horizontal swipeable pills on mobile & tablet */}
                    <div className="row mb-3">
                        <div className="col-12">
                            <div style={{
                                display: 'flex',
                                gap: '8px',
                                overflowX: 'auto',
                                paddingBottom: '6px',
                                justifyContent: 'flex-start',
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none'
                            }}>
                                {[
                                    { id: 'cloud', label: 'Cloud Infrastructure' },
                                    { id: 'software', label: 'Custom Web & Databases' },
                                    { id: 'networking', label: 'Multi-Site Networking' },
                                    { id: 'observability', label: 'Observability & Monitoring' }
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        type="button"
                                        onClick={() => setActiveTab(tab.id)}
                                        style={{
                                            padding: '7px 14px',
                                            borderRadius: '999px',
                                            fontSize: '12px',
                                            fontWeight: '600',
                                            cursor: 'pointer',
                                            whiteSpace: 'nowrap',
                                            flexShrink: 0,
                                            transition: 'all 0.15s ease',
                                            background: activeTab === tab.id ? 'var(--brand-forest)' : '#FFFFFF',
                                            color: activeTab === tab.id ? '#FFFFFF' : 'var(--text-primary)',
                                            border: activeTab === tab.id ? '1px solid var(--brand-forest)' : '1px solid var(--border)'
                                        }}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Active Architecture Display Card */}
                    <div className="row">
                        <div className="col-12">
                            <div className="fs-card" style={{ padding: '24px 28px', background: '#FFFFFF' }}>
                                <div className="row g-4 align-items-center">
                                    <div className="col-lg-7">
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                            <span className="badge-active" style={{ fontSize: '11px', padding: '2px 8px' }}>{currentArch.badge}</span>
                                            <span style={{ fontSize: '11px', fontWeight: '600', color: 'var(--brand-sage)' }}>
                                                {currentArch.title}
                                            </span>
                                        </div>
                                        <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '8px' }}>
                                            {currentArch.headline}
                                        </h3>
                                        <p style={{ fontSize: '13px', lineHeight: '1.65', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                                            {currentArch.desc}
                                        </p>
                                        <div>
                                            <div className="kpi-label" style={{ marginBottom: '6px' }}>Verified Platforms &amp; Protocols:</div>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                                                {currentArch.technologies.map((tech, idx) => (
                                                    <span key={idx} style={{ background: '#F8F9F5', border: '1px solid var(--border)', borderRadius: '6px', padding: '3px 8px', fontSize: '11px', fontWeight: '600', color: 'var(--brand-forest)' }}>
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-5">
                                        <div style={{ background: '#F8F9F5', border: '1px solid var(--border)', borderRadius: '10px', padding: '18px' }}>
                                            <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '12px', borderBottom: '1px solid var(--border)', paddingBottom: '6px' }}>
                                                Operational Target Metrics
                                            </div>
                                            <div className="row g-2">
                                                {currentArch.kpis.map((kpi, idx) => (
                                                    <div className="col-6" key={idx}>
                                                        <div style={{ background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: '8px', padding: '10px' }}>
                                                            <div style={{ fontSize: '16px', fontWeight: '700', color: 'var(--brand-forest)' }}>
                                                                {kpi.value}
                                                            </div>
                                                            <div style={{ fontSize: '10px', color: 'var(--text-secondary)', marginTop: '2px' }}>
                                                                {kpi.label}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div style={{ marginTop: '14px', textAlign: 'center' }}>
                                                <Link to="/case" className="header-btn21" style={{ width: '100%', justifyContent: 'center', fontSize: '11px', padding: '8px 12px' }}>
                                                    Read Engineering Case Study <i className="fa-solid fa-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. TECHNICAL COMPARISON: TRADITIONAL IT VS. SDG SOLUTIONS */}
            <section className="sp5" style={{ background: '#FFFFFF', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '32px 0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto text-center mb-3">
                            <div className="heading20">
                                <h5>Engineered Difference</h5>
                                <h2>Traditional Unmanaged IT vs. SDG Solutions Engineered Standard</h2>
                                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', maxWidth: '620px', margin: '0 auto' }}>
                                    How our systematic approach eliminates configuration drift, security vulnerabilities,
                                    and costly vendor dependency.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-10 m-auto">
                            <div className="fs-card" style={{ padding: '0', overflow: 'hidden' }}>
                                <div style={{ overflowX: 'auto' }}>
                                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '540px' }}>
                                        <thead>
                                            <tr style={{ background: '#F8F9F5', borderBottom: '1px solid var(--border)' }}>
                                                <th style={{ padding: '12px 16px', fontSize: '12px', fontWeight: '700', color: 'var(--brand-ink)' }}>Architecture Aspect</th>
                                                <th style={{ padding: '12px 16px', fontSize: '12px', fontWeight: '700', color: '#8A5D3B' }}>Traditional Ad-Hoc IT</th>
                                                <th style={{ padding: '12px 16px', fontSize: '12px', fontWeight: '700', color: 'var(--brand-forest)' }}>SDG Solutions Standard</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {comparisonPoints.map((item, idx) => (
                                                <tr key={idx} style={{ borderBottom: idx < comparisonPoints.length - 1 ? '1px solid var(--border)' : 'none' }}>
                                                    <td style={{ padding: '12px 16px', fontSize: '12px', fontWeight: '600', color: 'var(--brand-ink)', verticalAlign: 'top' }}>
                                                        {item.feature}
                                                    </td>
                                                    <td style={{ padding: '12px 16px', fontSize: '12px', color: 'var(--text-secondary)', verticalAlign: 'top', background: '#FFFCFC' }}>
                                                        <i className="fa-solid fa-xmark" style={{ color: '#C94A4A', marginRight: '6px' }}></i>
                                                        {item.traditional}
                                                    </td>
                                                    <td style={{ padding: '12px 16px', fontSize: '12px', color: 'var(--text-primary)', fontWeight: '500', verticalAlign: 'top', background: '#F9FCF9' }}>
                                                        <i className="fa-solid fa-check" style={{ color: 'var(--brand-forest)', marginRight: '6px' }}></i>
                                                        {item.sdgWay}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. FEATURED TECHNICAL PROJECTS - COMPACT GRID */}
            <section className="sp5" style={{ padding: '32px 0' }}>
                <div className="container">
                    <div className="row align-items-end mb-3">
                        <div className="col-lg-8">
                            <div className="heading20">
                                <h5>Verified Works</h5>
                                <h2>Real-World Systems Engineering &amp; Platform Delivery</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 text-lg-end mt-2 mt-lg-0">
                            <Link to="/case" className="header-btn21 btn2" style={{ fontSize: '11px', padding: '6px 12px' }}>
                                All Case Studies <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="row g-3">
                        {/* SDTracker Featured Card with Wireframe */}
                        <div className="col-lg-6">
                            <div className="fs-card" style={{ padding: '22px 24px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                        <span className="badge-active" style={{ fontSize: '10px', padding: '2px 8px' }}>Implemented · Live Platform</span>
                                        <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Property Operations</span>
                                    </div>
                                    <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '6px' }}>
                                        SDTracker — Business Operations &amp; Property Platform
                                    </h3>
                                    <p style={{ fontSize: '13px', lineHeight: '1.55', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                                        A business-critical operations platform replacing paper logs with one central control room.
                                        Engineered with React, Supabase PostgreSQL, strict database Row Level Security (RLS),
                                        multi-tenant isolation, automated repair triage (CAT 1-3), and Home Office compliance registers.
                                    </p>
                                    <div style={{ background: '#F8F9F5', border: '1px solid var(--border)', borderRadius: '8px', padding: '10px', textAlign: 'center', marginBottom: '14px' }}>
                                        <img
                                            src="/projects/sdtracker/app-wireframe-blueprint.svg"
                                            alt="SDTracker App Wireframe"
                                            style={{ maxWidth: '100%', maxHeight: '140px', objectFit: 'contain' }}
                                            loading="lazy"
                                        />
                                        <div style={{ fontSize: '10px', color: 'var(--text-secondary)', marginTop: '4px' }}>
                                            Production App Wireframe: Repair matrix &amp; multi-property switcher
                                        </div>
                                    </div>
                                    <div style={{ background: '#F8F9F5', padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--border)', marginBottom: '14px' }}>
                                        <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '2px' }}>Verified Stack:</div>
                                        <div style={{ fontSize: '11px', color: 'var(--brand-forest)' }}>
                                            React 19 · Supabase · PostgreSQL 15+ · AWS Amplify · Express.js · TypeScript
                                        </div>
                                    </div>
                                </div>
                                <Link to="/case/sdtracker" style={{ fontSize: '12px', fontWeight: '600', color: 'var(--brand-forest)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                    View Architecture &amp; Case Study <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>

                        {/* Multi-Site Omada Networking */}
                        <div className="col-lg-6">
                            <div className="fs-card" style={{ padding: '22px 24px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                        <span className="badge-complete" style={{ fontSize: '10px', padding: '2px 8px' }}>Implemented · Production</span>
                                        <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Enterprise Networking</span>
                                    </div>
                                    <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '6px' }}>
                                        Multi-Site Corporate Network Infrastructure
                                    </h3>
                                    <p style={{ fontSize: '13px', lineHeight: '1.55', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                                        Centralized multi-location network architecture integrating TP-Link Omada SDN hardware controllers,
                                        encrypted site-to-site WireGuard and IPsec VPN tunnels, automated multi-WAN failover,
                                        and isolated 802.1Q VLANs preventing guest traffic from accessing internal servers.
                                    </p>
                                    <div className="row g-2 mb-3">
                                        <div className="col-6">
                                            <div style={{ background: '#F8F9F5', padding: '10px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                                                <div style={{ fontSize: '15px', fontWeight: '700', color: 'var(--brand-forest)' }}>99.98%</div>
                                                <div style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>Multi-WAN Availability</div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div style={{ background: '#F8F9F5', padding: '10px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                                                <div style={{ fontSize: '15px', fontWeight: '700', color: 'var(--brand-forest)' }}>&lt;18ms</div>
                                                <div style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>WireGuard Tunnel Latency</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ background: '#F8F9F5', padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--border)', marginBottom: '14px' }}>
                                        <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '2px' }}>Verified Stack:</div>
                                        <div style={{ fontSize: '11px', color: 'var(--brand-forest)' }}>
                                            TP-Link Omada SDN · WireGuard · IPsec VPN · 802.1Q VLAN · Hardware Gateways
                                        </div>
                                    </div>
                                </div>
                                <Link to="/case/multi-site-network" style={{ fontSize: '12px', fontWeight: '600', color: 'var(--brand-forest)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                    View Network Architecture <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. GENUINE TECHNOLOGY ECOSYSTEM - COMPACT */}
            <section className="sp5" style={{ background: '#FFFFFF', borderTop: '1px solid var(--border)', padding: '32px 0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto text-center mb-3">
                            <div className="heading20">
                                <h5>Technology Stack</h5>
                                <h2>Platforms &amp; Protocols We Engineer &amp; Support</h2>
                                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                                    Every technology listed represents direct configuration, deployment, and operational maintenance experience.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-2 justify-content-center">
                        {techStack.map((tech, idx) => (
                            <div className="col-lg-3 col-md-4 col-sm-6" key={idx}>
                                <div style={{
                                    background: '#F8F9F5',
                                    border: '1px solid var(--border)',
                                    borderRadius: '8px',
                                    padding: '10px 12px',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}>
                                    <div>
                                        <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--brand-ink)' }}>{tech.name}</div>
                                        <div style={{ fontSize: '10px', color: 'var(--text-secondary)', marginTop: '1px' }}>{tech.tag}</div>
                                    </div>
                                    <div style={{ fontSize: '9px', fontWeight: '600', color: 'var(--brand-sage)', marginTop: '6px', textTransform: 'uppercase' }}>
                                        {tech.category}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. EXECUTION METHODOLOGY (6 STAGES) */}
            <section className="sp5" style={{ padding: '32px 0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto text-center mb-3">
                            <div className="heading20">
                                <h5>Execution Methodology</h5>
                                <h2>How SDG Solutions Delivers Systems</h2>
                                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto' }}>
                                    A structured, six-stage delivery model that ensures precision, stability, and zero operational downtime.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row g-2">
                        {[
                            { step: '01', title: 'Discover', desc: 'Audit existing servers, networks, user workflows, and operational pain points.' },
                            { step: '02', title: 'Assess', desc: 'Evaluate security posture, server sizing, network latency, and software dependencies.' },
                            { step: '03', title: 'Plan', desc: 'Author detailed architecture blueprints, database schemas, and statements of work.' },
                            { step: '04', title: 'Implement', desc: 'Configure cloud resources, deploy networks, harden servers, or write custom code.' },
                            { step: '05', title: 'Validate', desc: 'Rigorous end-to-end testing, backup restoration trials, and permission audits.' },
                            { step: '06', title: 'Support', desc: 'Hand over root credentials, network runbooks, monitoring alerts, and ongoing support.' },
                        ].map((s, idx) => (
                            <div className="col-lg-2 col-md-4 col-sm-6" key={idx}>
                                <div className="fs-card" style={{ padding: '16px 12px', height: '100%', textAlign: 'center' }}>
                                    <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--brand-forest)', marginBottom: '2px' }}>
                                        {s.step}
                                    </div>
                                    <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '4px' }}>
                                        {s.title}
                                    </div>
                                    <p style={{ fontSize: '11px', lineHeight: '1.45', color: 'var(--text-secondary)', margin: 0 }}>
                                        {s.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. FINAL CALL TO ACTION */}
            <div className="container" style={{ margin: '20px auto' }}>
                <div className="cta13-section-area" style={{ padding: '32px 20px', margin: '0 auto' }}>
                    <h2>Let’s solve your next technology challenge.</h2>
                    <p style={{ margin: '0 auto 18px auto' }}>
                        Whether evaluating a cloud migration, planning an office network, or building
                        a custom business application, our engineering team is ready to assist.
                    </p>
                    <div className="btn-area1" style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                        <Link to="/contact" className="header-btn21">
                            Contact SDG Solutions <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                        <Link to="/services" className="header-btn21 btn2">
                            View Services Catalogue <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
