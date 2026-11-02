import { Link } from 'react-router-dom'

export default function About() {
    const beliefs = [
        {
            title: 'Technology should solve actual business problems',
            desc: 'We never deploy tools, servers, or complexity for their own sake. Every technology decision must directly improve operational stability, staff efficiency, or data security.'
        },
        {
            title: 'Good infrastructure should be reliable and maintainable',
            desc: 'Cloud environments, servers, and networks must be built with standard conventions, automated backups, and clear documentation so they remain simple to maintain.'
        },
        {
            title: 'Security should be considered from the beginning',
            desc: 'Access control, least-privilege permissions, network segmentation, and database-level isolation are architectural fundamentals, never an afterthought.'
        },
        {
            title: 'Software should support real workflows',
            desc: 'Applications should match how teams actually operate on the ground, eliminating manual spreadsheet bottlenecks and paperwork rather than introducing new friction.'
        },
        {
            title: 'Technical solutions should be practical',
            desc: 'We favour proven, well-supported technologies over fragile industry hype, ensuring long-term viability, software longevity, and predictable operational costs.'
        },
        {
            title: 'Businesses deserve clear and honest technical advice',
            desc: 'We communicate in plain English, explain realistic trade-offs, and recommend the most effective technical path forward without vendor bias or enterprise markup.'
        }
    ]

    const milestones = [
        {
            phase: 'The Origin',
            title: 'Addressing Operational Chaos',
            desc: 'SDG Solutions was started to solve a recurring challenge observed across operational businesses: critical workflows trapped in fragmented spreadsheets, unstable networks, unmanaged user accounts, and recurring server downtime.'
        },
        {
            phase: 'The Foundation',
            title: 'Hands-On Systems & Networking',
            desc: 'We began by hardening physical IT environments—deploying centralized Windows Server domain controllers, configuring multi-site Omada networks, establishing secure VPNs, and eliminating single points of failure.'
        },
        {
            phase: 'The Evolution',
            title: 'Custom Software & Data Engineering',
            desc: 'Recognizing that off-the-shelf software failed to address complex property and operational workflows, we expanded into custom full-stack web platforms, engineering SDTracker with Supabase PostgreSQL and Row Level Security.'
        },
        {
            phase: 'Today & Beyond',
            title: 'Complete Technology Solutions',
            desc: 'Today, SDG Solutions delivers end-to-end technology environments: cloud infrastructure on AWS and Azure, managed IT systems, enterprise networking, containerized deployments, and automated cloud backup vaults.'
        }
    ]

    const completeWorks = [
        {
            title: 'SDTracker Operations Platform',
            domain: 'Enterprise Web Platform',
            badge: 'Live Operational Platform',
            desc: 'A comprehensive operations and safeguarding platform engineered for multi-property environments and care facilities. Built with React, Supabase PostgreSQL with strict Row Level Security (RLS), multi-tenant isolation, automated repair triage (CAT 1-3 SLA), and Home Office statutory registers.',
            tech: ['React 19', 'Supabase', 'PostgreSQL 15+', 'AWS Amplify', 'TypeScript', 'Row Level Security'],
            link: '/case/sdtracker'
        },
        {
            title: 'Multi-Site Omada Network Infrastructure',
            domain: 'Business Networking & Security',
            badge: 'Production Infrastructure',
            desc: 'Centralized multi-location network architecture integrating TP-Link Omada Software-Defined Networking (SDN), hardware gateways, automated dual-WAN failover, encrypted WireGuard and IPsec VPN tunnels, and isolated 802.1Q VLANs.',
            tech: ['TP-Link Omada SDN', 'WireGuard', 'IPsec VPN', '802.1Q VLAN', 'Multi-WAN Failover'],
            link: '/case/multi-site-network'
        },
        {
            title: 'Active Directory & Windows Server Environment',
            domain: 'Identity & Workplace Administration',
            badge: 'Production IT System',
            desc: 'Standardized Windows Server 2022 domain architecture featuring dual redundant domain controllers, automated Group Policy security baselines, DNS failover, Remote Desktop Services (RDS), and centralized user profile management.',
            tech: ['Windows Server 2022', 'Active Directory (AD DS)', 'Group Policy (GPOs)', 'Remote Desktop (RDS)'],
            link: '/case/active-directory'
        },
        {
            title: 'Telemetry & Observability Stack',
            domain: 'DevOps & Monitoring',
            badge: 'Production Telemetry',
            desc: 'Proactive metrics collection and automated alerting stack utilizing Prometheus, Node Exporters, Grafana dashboards, and Alertmanager. Monitors server health, database query latency, and endpoint uptime with zero blind spots.',
            tech: ['Prometheus', 'Grafana', 'Alertmanager', 'Node Exporter', 'Uptime Kuma', 'Docker'],
            link: '/case/infrastructure-monitoring'
        },
        {
            title: 'Containerised Application Deployment Pipeline',
            domain: 'Continuous Delivery & Infrastructure',
            badge: 'Production CI/CD',
            desc: 'Docker-based containerized application deployment workflow with multi-stage Dockerfiles, Docker Compose service stacks, persistent volume backups, NGINX TLS reverse proxying, and automated GitHub Actions pipelines.',
            tech: ['Docker', 'Docker Compose', 'GitHub Actions', 'NGINX Reverse Proxy', 'Certbot TLS'],
            link: '/case/containerised-infrastructure'
        },
        {
            title: 'Automated Cloud Backup & Disaster Recovery Vault',
            domain: 'Data Protection & Business Continuity',
            badge: 'Production System',
            desc: 'An automated, encrypted backup system copying databases and file shares to immutable AWS S3 Glacier and Azure vaults, with scheduled restoration drills ensuring rapid business continuity.',
            tech: ['Amazon S3 Glacier', 'Azure Blob Storage', 'AES-256 Encryption', 'Object Lock', 'Bash Automation'],
            link: '/case/cloud-backup-recovery'
        }
    ]

    return (
        <div className="homepage13-body">

            {/* PAGE HEADER */}
            <div className="about-header-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <div className="about-inner-header heading9 text-center">
                                <h1>About SDG Solutions</h1>
                                <Link to="/">Home <i className="fa-solid fa-angle-right"></i> <span>About Us</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 1. WHO WE ARE & WHAT WE ARE FOR */}
            <div className="sp1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="heading20">
                                <h5>Who We Are</h5>
                                <h2 style={{ fontSize: '32px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '16px', lineHeight: '1.25' }}>
                                    Practical Technology Solutions for Real-World Operations
                                </h2>
                                <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-primary)', marginBottom: '14px' }}>
                                    SDG Solutions is a technology solutions company focused on cloud infrastructure, IT systems,
                                    networking, software development, DevOps, digital solutions and business technology.
                                </p>
                                <p style={{ fontSize: '14px', lineHeight: '1.65', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                                    We work with established businesses, growing organisations, and operational teams that depend
                                    on stable technology to run their daily activities. We bridge the gap between high-level software
                                    engineering and low-level infrastructure operations, building dependable environments where
                                    servers stay online, data is strictly isolated, networks are secure, and software supports real workflows.
                                </p>
                                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                    <Link to="/contact" className="header-btn21">
                                        Discuss Your Technology Needs <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                    <Link to="/case" className="header-btn21 btn2">
                                        Explore Our Works <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4 mt-lg-0">
                            {/* MISSION & VISION DUAL CARDS */}
                            <div className="row g-3">
                                <div className="col-12">
                                    <div className="fs-card" style={{ padding: '28px', background: '#FFFFFF', border: '1px solid var(--border)' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                                            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#EBF0E6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <i className="fa-solid fa-bullseye" style={{ color: 'var(--brand-forest)', fontSize: '18px' }}></i>
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '12px', fontWeight: '600', color: 'var(--brand-sage)', textTransform: 'uppercase' }}>Our Core Purpose</div>
                                                <h3 style={{ fontSize: '17px', fontWeight: '700', color: 'var(--brand-ink)', margin: 0 }}>Our Mission</h3>
                                            </div>
                                        </div>
                                        <p style={{ fontSize: '14px', lineHeight: '1.65', color: 'var(--text-primary)', margin: 0 }}>
                                            To help businesses use technology effectively through practical, dependable and well-managed digital solutions.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="fs-card" style={{ padding: '28px', background: '#FFFFFF', border: '1px solid var(--border)' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                                            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#EBF0E6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <i className="fa-solid fa-compass" style={{ color: 'var(--brand-forest)', fontSize: '18px' }}></i>
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '12px', fontWeight: '600', color: 'var(--brand-sage)', textTransform: 'uppercase' }}>Our Direction</div>
                                                <h3 style={{ fontSize: '17px', fontWeight: '700', color: 'var(--brand-ink)', margin: 0 }}>Our Vision</h3>
                                            </div>
                                        </div>
                                        <p style={{ fontSize: '14px', lineHeight: '1.65', color: 'var(--text-primary)', margin: 0 }}>
                                            To become a trusted technology solutions provider recognised for practical expertise,
                                            thoughtful implementation and dependable business technology.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. HOW SDG SOLUTIONS WAS STARTED & HOW IT EVOLVED */}
            <div className="sp1" style={{ background: '#FFFFFF', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto text-center mb-5">
                            <div className="heading20">
                                <h5>Our Origins &amp; Journey</h5>
                                <h2>How SDG Solutions Started &amp; What We Have Built</h2>
                                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto' }}>
                                    Founded out of direct experience in operational environments where fragile technology
                                    continually caused business downtime, SDG Solutions has evolved into a comprehensive technology partner.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row g-4">
                        {milestones.map((m, idx) => (
                            <div className="col-lg-3 col-md-6" key={idx}>
                                <div className="fs-card" style={{ padding: '26px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <div>
                                        <span className="badge-active" style={{ fontSize: '11px', padding: '3px 10px', marginBottom: '14px' }}>
                                            {m.phase}
                                        </span>
                                        <h3 style={{ fontSize: '17px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '10px' }}>
                                            {m.title}
                                        </h3>
                                        <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-secondary)', margin: 0 }}>
                                            {m.desc}
                                        </p>
                                    </div>
                                    <div style={{ marginTop: '16px', borderTop: '1px solid var(--border)', paddingTop: '10px', fontSize: '12px', fontWeight: '600', color: 'var(--brand-forest)' }}>
                                        Step 0{idx + 1}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. WHAT WE ARE FOR & OUR COMPLETE WORKS */}
            <div className="sp1">
                <div className="container">
                    <div className="row align-items-end mb-4">
                        <div className="col-lg-8">
                            <div className="heading20">
                                <h5>Our Complete Works</h5>
                                <h2>Real-World Systems, Platforms &amp; Infrastructure</h2>
                                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', maxWidth: '620px', margin: 0 }}>
                                    Below is an overview of the technical systems, software applications, and network infrastructure
                                    engineered and supported by SDG Solutions.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
                            <Link to="/case" className="header-btn21 btn2">
                                View Case Studies <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="row g-4">
                        {completeWorks.map((work, idx) => (
                            <div className="col-lg-4 col-md-6" key={idx}>
                                <div className="fs-card" style={{ padding: '26px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '6px' }}>
                                            <span className="badge-active" style={{ fontSize: '10px', padding: '2px 8px' }}>
                                                {work.badge}
                                            </span>
                                            <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                                                {work.domain}
                                            </span>
                                        </div>
                                        <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '8px' }}>
                                            {work.title}
                                        </h3>
                                        <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                                            {work.desc}
                                        </p>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '16px' }}>
                                            {work.tech.map((t, tIdx) => (
                                                <span key={tIdx} style={{ background: '#F8F9F5', border: '1px solid var(--border)', borderRadius: '4px', padding: '2px 7px', fontSize: '11px', fontWeight: '600', color: 'var(--brand-forest)' }}>
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <Link to={work.link} style={{ fontSize: '12px', fontWeight: '600', color: 'var(--brand-forest)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                        View Case Details <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 4. WHAT WE BELIEVE (6 CORE PRINCIPLES) */}
            <div className="sp1" style={{ background: '#FFFFFF', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto text-center mb-5">
                            <div className="heading20">
                                <h5>Guiding Philosophy</h5>
                                <h2>What We Believe</h2>
                                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', maxWidth: '620px', margin: '0 auto' }}>
                                    Six core principles define how SDG Solutions evaluates technology, works with clients,
                                    and engineers systems that endure.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row g-4">
                        {beliefs.map((b, idx) => (
                            <div className="col-lg-4 col-md-6" key={idx}>
                                <div className="fs-card" style={{ padding: '24px', height: '100%' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                                        <span className="badge-active" style={{ fontSize: '11px', padding: '2px 8px' }}>
                                            Principle 0{idx + 1}
                                        </span>
                                    </div>
                                    <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '8px', lineHeight: '1.4' }}>
                                        {b.title}
                                    </h3>
                                    <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-secondary)', margin: 0 }}>
                                        {b.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 5. HOW WE DELIVER (THE 6-STAGE STANDARD) */}
            <div className="sp1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto text-center mb-5">
                            <div className="heading20">
                                <h5>Delivery Standard</h5>
                                <h2>How SDG Solutions Operates</h2>
                                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                                    A structured, six-stage delivery model that ensures architectural precision, system stability,
                                    and zero operational disruption.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row g-3">
                        {[
                            { step: '01', title: 'Discover', desc: 'Comprehensive audit of your existing servers, networks, user workflows, and operational pain points.' },
                            { step: '02', title: 'Assess', desc: 'Evaluate security posture, server sizing, network latency, and software dependencies without vendor bias.' },
                            { step: '03', title: 'Plan', desc: 'Author detailed architecture blueprints, database schemas, and milestone-based statements of work.' },
                            { step: '04', title: 'Implement', desc: 'Configure cloud resources, deploy networks, harden servers, or engineer custom application code.' },
                            { step: '05', title: 'Validate', desc: 'Rigorous end-to-end testing, backup restoration trials, failover tests, and security permission audits.' },
                            { step: '06', title: 'Support', desc: 'Provide complete root credential handover, network runbooks, monitoring alerts, and dependable support.' },
                        ].map((s, idx) => (
                            <div className="col-lg-2 col-md-4 col-sm-6" key={idx}>
                                <div className="fs-card" style={{ padding: '20px 16px', height: '100%', textAlign: 'center' }}>
                                    <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--brand-forest)', marginBottom: '4px' }}>
                                        {s.step}
                                    </div>
                                    <div style={{ fontSize: '15px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '8px' }}>
                                        {s.title}
                                    </div>
                                    <p style={{ fontSize: '12px', lineHeight: '1.5', color: 'var(--text-secondary)', margin: 0 }}>
                                        {s.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FINAL CALL TO ACTION */}
            <div className="container">
                <div className="cta13-section-area">
                    <h2>Ready to discuss your technology environment?</h2>
                    <p>
                        Get practical, direct advice on your cloud infrastructure, business networking,
                        or custom software requirements from our engineering team.
                    </p>
                    <div className="btn-area1" style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                        <Link to="/contact" className="header-btn21">
                            Contact SDG Solutions <i className="fa-solid fa-arrow-right"></i>
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
