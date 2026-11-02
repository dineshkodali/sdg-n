import { Link } from 'react-router-dom'

export default function Pricing() {
    const engagementModels = [
        {
            category: 'Technical Consultation',
            tag: 'Advisory & Discovery',
            icon: 'fa-comments',
            scope: 'Focused architectural reviews, infrastructure assessments, security audits, and cloud cost optimisation studies.',
            whatIsIncluded: [
                'In-depth review of existing cloud, server, or network architecture',
                'Identification of performance bottlenecks and security vulnerabilities',
                'Vendor-neutral technology recommendations and sizing models',
                'Written technical assessment report with prioritized action roadmap'
            ],
            pricingModel: 'Fixed-fee consultation or day-rate basis',
            idealFor: 'Businesses planning a migration, experiencing system instability, or needing independent technical validation.'
        },
        {
            category: 'Project-Based Implementation',
            tag: 'Defined Deliverables',
            icon: 'fa-diagram-project',
            scope: 'End-to-end delivery of specific infrastructure setups, network rollouts, server deployments, or custom software features.',
            whatIsIncluded: [
                'Fixed-scope statement of work with milestone-based delivery',
                'Staging environment setup, testing, and production cutover',
                'Complete handover documentation, network schematics, and runbooks',
                'Post-deployment warranty support period'
            ],
            pricingModel: 'Milestone-based project quotation based on agreed scope',
            idealFor: 'Organisations rolling out a new office network, deploying Windows Server/AD, or building bespoke software.'
        },
        {
            category: 'Managed IT Support',
            tag: 'Ongoing Administration',
            icon: 'fa-headset',
            scope: 'Proactive management and day-to-day administration of Microsoft 365, user accounts, endpoint policies, and office IT systems.',
            whatIsIncluded: [
                'User onboarding/offboarding and permission administration',
                'Microsoft 365, Exchange, and SharePoint configuration',
                'Group Policy updates, Windows patch management, and antivirus monitoring',
                'Guaranteed response SLAs for urgent workstation and server issues'
            ],
            pricingModel: 'Monthly per-user or per-workstation retainer',
            idealFor: 'Growing companies requiring a dependable outsourced IT administrator without the overhead of full-time internal hires.'
        },
        {
            category: 'Infrastructure Management',
            tag: 'Cloud & Server Operations',
            icon: 'fa-server',
            scope: 'Continuous monitoring, patching, backup verification, and capacity management for cloud VMs, databases, and network gateways.',
            whatIsIncluded: [
                '24/7 automated telemetry monitoring (Prometheus / Grafana / Alertmanager)',
                'Regular OS security patching, kernel updates, and firewall rule auditing',
                'Automated daily backup verification and test restoration runs',
                'Disaster recovery planning and cloud cost governance'
            ],
            pricingModel: 'Monthly infrastructure retainer based on server volume',
            idealFor: 'Companies running business-critical web platforms, private cloud workloads, or multi-site VPN networks.'
        },
        {
            category: 'Application Development',
            tag: 'Custom Software Engineering',
            icon: 'fa-code',
            scope: 'Bespoke web applications, internal tools, customer portals, and database systems built with React and PostgreSQL.',
            whatIsIncluded: [
                'Full UI/UX wireframing and database relational schema design',
                'Row Level Security (RLS) policies guaranteeing multi-tenant isolation',
                'REST/GraphQL API development and external tool integration',
                'CI/CD automated deployment setup and source code ownership handover'
            ],
            pricingModel: 'Sprint-based or fixed-scope project development quotation',
            idealFor: 'Organisations that have outgrown spreadsheets and need a custom platform like SDTracker for their operations.'
        },
        {
            category: 'Website Development & Maintenance',
            tag: 'Digital Presence',
            icon: 'fa-globe',
            scope: 'High-speed business websites, domain and DNS administration, SSL certificate lifecycle management, and ongoing updates.',
            whatIsIncluded: [
                'Responsive, accessible website build tested across mobile and desktop',
                'DNS configuration ensuring 100% email deliverability (SPF, DKIM, DMARC)',
                'Core Web Vitals optimisation for fast page loading speed',
                'Monthly software updates, offsite backups, and uptime monitoring'
            ],
            pricingModel: 'Project build quotation with optional monthly care plan',
            idealFor: 'Businesses wanting a fast, professional digital presence without security vulnerabilities or plugin bloat.'
        }
    ]

    const pricingFactors = [
        {
            title: 'Infrastructure Scale & Complexity',
            desc: 'The number of servers, user endpoints, branch locations, and cloud services directly determines the engineering hours required.'
        },
        {
            title: 'Uptime & SLA Response Requirements',
            desc: 'Standard next-business-day response versus 4-hour emergency response targets for mission-critical production environments.'
        },
        {
            title: 'Compliance & Regulatory Mandates',
            desc: 'Requirements for statutory audit registers, strict data sovereignty, Home Office compliance, or encrypted immutable audit logs.'
        },
        {
            title: 'Integration & Legacy Migration Scope',
            desc: 'Migrating legacy databases, custom accounting exports, or interfacing with external REST APIs influences project timeline.'
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
                                <h1>Pricing &amp; Engagement Models</h1>
                                <Link to="/">Home <i className="fa-solid fa-angle-right"></i> <span>Pricing</span></Link>
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
                                <h5>Transparent Commercials</h5>
                                <h2>Straightforward, Scope-Based Quotations</h2>
                                <p style={{ fontSize: '15px', color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto' }}>
                                    We do not publish misleading "one-size-fits-all" pricing packages. Every business technology
                                    environment has different requirements, scales, and security demands. We scope every project
                                    transparently based on your actual operational needs.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 6 ENGAGEMENT CATEGORIES */}
                    <div className="row g-4 mb-5">
                        {engagementModels.map((model, idx) => (
                            <div className="col-lg-4 col-md-6" key={idx}>
                                <div className="fs-card" style={{ padding: '28px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                                            <span className="badge-active" style={{ fontSize: '11px', padding: '3px 8px' }}>
                                                {model.tag}
                                            </span>
                                            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#EBF0E6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <i className={`fa-solid ${model.icon}`} style={{ color: 'var(--brand-forest)', fontSize: '15px' }}></i>
                                            </div>
                                        </div>

                                        <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '8px' }}>
                                            {model.category}
                                        </h3>
                                        <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                                            {model.scope}
                                        </p>

                                        {/* What's Included */}
                                        <div style={{ marginBottom: '16px' }}>
                                            <div className="kpi-label" style={{ marginBottom: '8px' }}>Scope of Delivery:</div>
                                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                                {model.whatIsIncluded.map((item, itemIdx) => (
                                                    <li key={itemIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '6px', fontSize: '12px', color: 'var(--text-primary)' }}>
                                                        <i className="fa-solid fa-check" style={{ color: 'var(--brand-forest)', marginTop: '3px', fontSize: '11px' }}></i>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Ideal For */}
                                        <div style={{ background: '#F8F9F5', padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--border)', marginBottom: '16px' }}>
                                            <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--brand-forest)', display: 'block', marginBottom: '2px' }}>Ideal For:</span>
                                            <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{model.idealFor}</span>
                                        </div>
                                    </div>

                                    {/* Pricing Structure & CTA */}
                                    <div style={{ borderTop: '1px solid var(--border)', paddingTop: '14px' }}>
                                        <div style={{ fontSize: '12px', fontWeight: '600', color: 'var(--brand-ink)', marginBottom: '10px' }}>
                                            {model.pricingModel}
                                        </div>
                                        <Link
                                            to="/contact"
                                            className="header-btn21"
                                            style={{ width: '100%', justifyContent: 'center', fontSize: '12px', padding: '10px 16px' }}
                                        >
                                            Request a Project Quote <i className="fa-solid fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* WHAT INFLUENCES PRICING? */}
                    <div className="row">
                        <div className="col-12">
                            <div className="fs-card" style={{ padding: '36px', background: '#FFFFFF' }}>
                                <div className="heading20 text-center mb-4">
                                    <h5>Commercial Scoping</h5>
                                    <h2>What Influences Technology Project Pricing?</h2>
                                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto' }}>
                                        We provide transparent estimates following an initial discovery discussion.
                                        Here are the core factors that define project scope and ongoing investment.
                                    </p>
                                </div>
                                <div className="row g-4">
                                    {pricingFactors.map((factor, idx) => (
                                        <div className="col-lg-3 col-md-6" key={idx}>
                                            <div style={{ background: '#F8F9F5', border: '1px solid var(--border)', borderRadius: '10px', padding: '20px', height: '100%' }}>
                                                <div style={{ fontSize: '15px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '8px' }}>
                                                    {factor.title}
                                                </div>
                                                <p style={{ fontSize: '12px', lineHeight: '1.6', color: 'var(--text-secondary)', margin: 0 }}>
                                                    {factor.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div style={{ textAlign: 'center', marginTop: '28px' }}>
                                    <Link to="/contact" className="header-btn21">
                                        Request an Initial Technical Assessment <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* CALL TO ACTION */}
            <div className="container">
                <div className="cta13-section-area">
                    <h2>Ready for an honest quotation on your next project?</h2>
                    <p>
                        Speak directly with a senior systems engineer to scope your infrastructure,
                        networking, or application requirements.
                    </p>
                    <div className="btn-area1" style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                        <Link to="/contact" className="header-btn21">
                            Contact SDG Solutions <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                        <Link to="/faq" className="header-btn21 btn2">
                            Read Pricing &amp; Contract FAQs <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
