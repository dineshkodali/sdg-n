import { Link } from 'react-router-dom'
import { useState } from 'react'

const servicesData = [
    {
        id: 'cloud-infrastructure',
        number: '01',
        title: 'Cloud Infrastructure & Hosting',
        tagline: 'Reliable cloud servers on AWS, Azure, and Linux sized to fit your budget',
        overview: 'Cloud hosting should be simple, dependable, and fairly priced. We design and manage cloud servers on AWS and Microsoft Azure that are sized properly for your software, so you never pay for wasted server capacity or get caught off guard by surprise bills.',
        problemsSolved: [
            'Frequent server crashes, slow response times, and confusing monthly cloud bills',
            'Over-complicated cloud setups that require expensive specialized consultants to fix',
            'No automated backups in place if a server fails or files are accidentally deleted',
            'Unclear user permissions and security risks that leave company files exposed'
        ],
        whatWeProvide: 'Practical cloud setup and management from start to finish. We configure your cloud network, set up clean virtual servers, automate nightly backups, and keep monthly hosting costs under control.',
        technicalCapabilities: [
            'Private cloud network setup (VPC) with protected subnets for company databases',
            'Clean Linux and Windows Server virtual machine setup, security hardening, and proper sizing',
            'Automated nightly backups with copy storage in separate geographic regions',
            'Clear user roles and security permissions so only authorized staff access sensitive data',
            'Cloudflare speed optimization and free green padlock (SSL) security setup'
        ],
        technologies: ['Amazon Web Services (AWS)', 'Microsoft Azure', 'Ubuntu & Debian Linux', 'Cloudflare DNS', 'AWS Amplify'],
        deliverables: [
            'A clear visual map of your cloud network and servers',
            'Fully configured, secure virtual servers ready for your software',
            'Automated nightly backup schedule and tested recovery plan',
            'Clear monthly budget alerts so you never get surprise bills'
        ],
        engagementApproach: 'We review what your software needs, design a sensible cloud plan, set everything up smoothly with zero downtime, and hand over all master logins and documentation.'
    },
    {
        id: 'managed-it-systems',
        number: '02',
        title: 'Office IT & Systems Administration',
        tagline: 'Smooth Microsoft 365 setup, central user accounts, and reliable staff computers',
        overview: 'Every growing business needs IT systems that just work. We take care of day-to-day office technology: setting up Microsoft 365, managing company user logins, keeping Windows Server running smoothly, and giving remote staff safe access to office files.',
        problemsSolved: [
            'Disorganized staff onboarding and offboarding leading to security risks and wasted software licenses',
            'Inconsistent laptop setups that lead to virus infections and lost files',
            'Messy shared folders where anyone in the office can accidentally delete critical documents',
            'Slow computer support that leaves staff waiting hours for simple fixes'
        ],
        whatWeProvide: 'Straightforward office IT administration. We set up central user accounts, configure automatic security updates across all laptops, and provide fast, dependable help when technical questions arise.',
        technicalCapabilities: [
            'Microsoft 365 setup, company email routing, SharePoint files, and Teams collaboration',
            'Windows Server and Active Directory setup so one login works on all office computers',
            'Automated security policies (screen locks, disk encryption, and automatic Windows updates)',
            'Secure Remote Desktop access so staff can work safely from home without security risks',
            'Organized department folders with clear permissions so staff only see what they need'
        ],
        technologies: ['Microsoft 365', 'Active Directory (AD DS)', 'Windows Server 2022', 'Group Policy (GPO)', 'Remote Desktop (RDS)'],
        deliverables: [
            'Central user account directory for all company staff',
            'Security settings automatically applied to all company laptops and PCs',
            'Protected shared network folders with automatic hourly recovery points',
            'Simple IT onboarding guide for welcoming new employees'
        ],
        engagementApproach: 'Available as a one-time setup project or an ongoing monthly IT support retainer with fast response times for your staff.'
    },
    {
        id: 'networking-security',
        number: '03',
        title: 'Company Networking & Secure Wi-Fi',
        tagline: 'Reliable office broadband, hardware firewalls, and separate guest Wi-Fi',
        overview: 'A stable company network is essential for everyday work. We install and configure business routers, enterprise Wi-Fi that reaches every desk, secure VPNs for home workers, and separate guest networks that protect your internal accounting files.',
        problemsSolved: [
            'Spotty Wi-Fi with dead zones and constant dropouts during important client calls',
            'No internet backup when the main broadband provider experiences local cable cuts',
            'Visitors and personal phones sharing the same network as private company computers',
            'No visibility into which devices are hogging office bandwidth or causing slowdowns'
        ],
        whatWeProvide: 'Clean, reliable business networking using proven hardware like TP-Link Omada. We set up dual-line internet backup, fast Wi-Fi across your whole office, and encrypted connections between branch offices.',
        technicalCapabilities: [
            'Central network management to monitor all office routers and access points from one screen',
            'Dual-line internet setup with automatic switchover so the office stays online if one line drops',
            'Encrypted WireGuard and IPsec VPN connections between office branches and home staff',
            'Separate network zones (VLANs) for Office PCs, Management, Security Cameras, and Guest Wi-Fi',
            'Hardware firewall rules that block untrusted connections from reaching company servers'
        ],
        technologies: ['TP-Link Omada SDN', 'WireGuard', 'IPsec VPN', 'Network VLANs', 'Dual-WAN Backup', 'Enterprise Wi-Fi 6'],
        deliverables: [
            'Clear network diagram showing all routers, switches, and access points',
            'Fully installed business router, managed switches, and ceiling Wi-Fi access points',
            'Simple VPN login setup for staff working from home or traveling',
            'Cloud network dashboard for checking connection health at any time'
        ],
        engagementApproach: 'We assess your office space, pre-configure hardware offsite, install with minimal disruption to your work day, and test Wi-Fi speeds at every desk.'
    },
    {
        id: 'software-web-development',
        number: '04',
        title: 'Custom Web Applications & Software',
        tagline: 'Bespoke operational tools, customer portals, and secure databases',
        overview: 'When off-the-shelf software doesn’t fit your business workflows, we build bespoke web applications, customer portals, and internal tools engineered for speed, ease of use, and strict data privacy between users.',
        problemsSolved: [
            'Day-to-day operations trapped in confusing, error-prone spreadsheets and manual paperwork',
            'Staff accidentally seeing sensitive records or rates they shouldn’t have access to',
            'Slow, clunky web tools that are painful to use on mobile phones and tablets',
            'Difficulty creating professional compliance reports or exporting data to accounting software'
        ],
        whatWeProvide: 'Custom web software development using modern React and PostgreSQL. We build reliable platforms like SDTracker that make operations simple, keep records safe, and give each employee the exact tools they need.',
        technicalCapabilities: [
            'Fast web applications built with React 19 that load instantly on phones, tablets, and desktops',
            'Organized PostgreSQL relational databases with built-in checks to prevent duplicate records',
            'Row Level Security (RLS) policies guaranteeing that branch offices only see their own data',
            'Clean APIs that connect your software to payment gateways, SMS alerts, and email systems',
            'Automated document builders that generate branded Word and PDF reports in seconds'
        ],
        technologies: ['React 19', 'TypeScript', 'Supabase', 'PostgreSQL 15+', 'Node.js / Express', 'AWS Amplify'],
        deliverables: [
            'Live, responsive web application ready for your team and customers',
            'Clean database structure with automated nightly backups',
            'Different permission levels (Admin, Manager, Staff, Customer)',
            'Full handover of all source code and simple user guides'
        ],
        engagementApproach: 'We plan workflows together with wireframes → build the database and security → create clean, easy screens → test thoroughly → launch and train your team.'
    },
    {
        id: 'devops-monitoring',
        number: '05',
        title: 'Server Monitoring & Maintenance',
        tagline: '24/7 health tracking, clean container setups, and zero-downtime updates',
        overview: 'Servers and business software need ongoing attention to stay fast and secure. We package applications into clean, isolated Docker containers and install monitoring tools that alert us before small technical issues turn into costly outages.',
        problemsSolved: [
            'Manual updates breaking live websites and causing unexpected downtime during work hours',
            '"It works on my laptop but crashes on the server" software inconsistencies',
            'Zero visibility when hard drives are filling up or servers are running out of memory',
            'Finding out about a broken website only after angry customers call to complain'
        ],
        whatWeProvide: 'Proactive server care. We package software into reliable containers, set up automated testing before any code goes live, and monitor your systems 24/7 with Prometheus and Grafana.',
        technicalCapabilities: [
            'Clean Docker container packaging so software runs identically in testing and on live servers',
            'Automated GitHub Actions release pipelines that test code and update servers with zero downtime',
            'Prometheus monitoring tracking CPU, memory, hard drive space, and website speed',
            'Visual Grafana dashboards showing live server health in clear green/yellow/red indicators',
            'Automated alerts sent directly to phone and email when a metric crosses safety limits'
        ],
        technologies: ['Docker', 'GitHub Actions', 'Prometheus', 'Grafana', 'Alertmanager', 'Uptime Kuma', 'NGINX'],
        deliverables: [
            'Standardized Docker configuration files for your web applications',
            'Automated deployment setup so updates release cleanly without manual copying',
            'Simple visual health dashboard showing server status',
            'Direct alerts configured for critical events like low disk space'
        ],
        engagementApproach: 'We standardise how your software runs, set up clear automated health checks, test everything thoroughly, and provide ongoing peace of mind.'
    },
    {
        id: 'digital-solutions',
        number: '06',
        title: 'Business Websites & Digital Setup',
        tagline: 'Fast, secure company websites, clean domain setup, and reliable email delivery',
        overview: 'Your company website is often the first impression a customer has. We build fast, modern websites that look great on phones and computers, configure your domain records so company emails never land in spam, and keep software updated.',
        problemsSolved: [
            'Slow, bloated websites that take seconds to load and cause prospective clients to leave',
            'Company emails bouncing or going into spam folders due to missing domain authentication',
            'Unmanaged websites vulnerable to hacking, broken links, or expired security certificates',
            'Hard-to-edit web pages that require expensive developer fees for simple text changes'
        ],
        whatWeProvide: 'Professional website design and digital infrastructure. We build clean, fast-loading pages, configure proper email security records (SPF, DKIM, DMARC), and keep your web presence secure.',
        technicalCapabilities: [
            'Fast, lightweight websites built with clean code that load in under a second on mobile phones',
            'Full domain and DNS setup ensuring company emails arrive reliably in inboxes',
            'Automatic security certificates (SSL) with automatic renewals so sites never show warnings',
            'Tested mobile responsiveness across all smartphone and tablet screen sizes',
            'Search-engine-friendly structure helping local customers find your business'
        ],
        technologies: ['React / Vite', 'Clean HTML5 / CSS3', 'Cloudflare DNS', 'SSL / TLS Security', 'Google Search Console'],
        deliverables: [
            'Modern, mobile-responsive company website tested across all screens',
            'Properly configured domain and DNS records with 100% email deliverability health',
            'Automated offsite backup schedule for peace of mind',
            'Simple guide showing how to update website copy and contact details'
        ],
        engagementApproach: 'Discovery & content outline → Clean page design → Speed & mobile testing → Domain & email security setup → Smooth live launch.'
    },
    {
        id: 'cloud-backup-recovery',
        number: '07',
        title: 'Automated Backups & Disaster Recovery',
        tagline: 'Encrypted offsite copies of your databases and files with tested fast recovery',
        overview: 'A hard drive failure, accidental deletion, or ransomware attack should never put your company out of business. We set up automated, encrypted backups that save your data to secure cloud storage vaults every night, with tested plans to restore operations within hours.',
        problemsSolved: [
            'Manual backups that staff forget to run, leaving weeks of company work unprotected',
            'Backups stored on USB drives in the same office, vulnerable to theft, fire, or hardware failure',
            'Backups that have never been tested, only to discover they were corrupted when an emergency happens',
            'Ransomware threats that deliberately target and delete local backup drives'
        ],
        whatWeProvide: 'Peace of mind with automated, ransomware-proof cloud backups. We configure daily encrypted snapshots to separate cloud regions and test restoration drills to prove your data can be recovered quickly.',
        technicalCapabilities: [
            'Automated nightly database dumps and file share backups running quietly at off-peak hours',
            'Ransomware-proof storage vaults (Object Lock) where backup files cannot be deleted or modified',
            'Cross-region replication so backups are safe even during major cloud data center outages',
            'Plain-English Disaster Recovery plan outlining exact recovery steps for office managers',
            'Regular restoration drills to verify that files and databases restore cleanly without corruption'
        ],
        technologies: ['Amazon S3 Glacier', 'Azure Blob Storage', 'AES-256 Encryption', 'Object Lock (Immutable)', 'PostgreSQL Backup Tools'],
        deliverables: [
            'Automated daily backup schedule running directly to secure cloud vaults',
            'Immutable storage rules preventing ransomware from deleting backup copies',
            'Step-by-step Emergency Recovery Runbook for company directors',
            'Quarterly restoration verification report confirming clean recovery'
        ],
        engagementApproach: 'We inventory your critical data → set up encrypted cloud vaults → automate nightly transfers → test full restoration → document emergency procedures.'
    }
]

export default function Services() {
    const [activeService, setActiveService] = useState('cloud-infrastructure')
    const current = servicesData.find(s => s.id === activeService) || servicesData[0]

    return (
        <div className="homepage13-body">

            {/* PAGE HEADER */}
            <div className="about-header-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <div className="about-inner-header heading9 text-center">
                                <h1>Services Catalogue</h1>
                                <Link to="/">Home <i className="fa-solid fa-angle-right"></i> <span>Services</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* COMPACT INTRO */}
            <div className="sp5" style={{ padding: '32px 0 20px 0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto text-center mb-3">
                            <div className="heading20">
                                <h5>What We Build &amp; Support</h5>
                                <h2>Practical Technology Services for Business</h2>
                                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                                    Clear, human descriptions of our core services. Select any service below to see
                                    the problems we solve, what we provide, and what you receive.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* HORIZONTAL SWIPE / SCROLL PILLS FOR MOBILE & DESKTOP */}
                    <div className="row mb-3">
                        <div className="col-12">
                            <div style={{
                                display: 'flex',
                                gap: '8px',
                                overflowX: 'auto',
                                paddingBottom: '8px',
                                justifyContent: 'flex-start',
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none'
                            }}>
                                {servicesData.map((s) => (
                                    <button
                                        key={s.id}
                                        type="button"
                                        onClick={() => setActiveService(s.id)}
                                        style={{
                                            padding: '8px 14px',
                                            borderRadius: '999px',
                                            fontSize: '12px',
                                            fontWeight: '600',
                                            cursor: 'pointer',
                                            whiteSpace: 'nowrap',
                                            flexShrink: 0,
                                            transition: 'all 0.15s ease',
                                            background: activeService === s.id ? 'var(--brand-forest)' : '#FFFFFF',
                                            color: activeService === s.id ? '#FFFFFF' : 'var(--text-primary)',
                                            border: activeService === s.id ? '1px solid var(--brand-forest)' : '1px solid var(--border)'
                                        }}
                                    >
                                        <span style={{ opacity: 0.7, marginRight: '4px' }}>{s.number}.</span>
                                        {s.title}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ACTIVE SERVICE CARD - COMPACT & HIGH-DENSITY */}
                    <div className="row">
                        <div className="col-12">
                            <div className="fs-card" style={{ padding: '24px 28px' }}>
                                <div className="row g-4">
                                    {/* Left: Summary & Problem Solving */}
                                    <div className="col-lg-7">
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                            <span className="badge-active" style={{ fontSize: '11px', padding: '2px 8px' }}>
                                                Service {current.number}
                                            </span>
                                            <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--brand-sage)' }}>
                                                {current.tagline}
                                            </span>
                                        </div>
                                        <h3 style={{ fontSize: '22px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '10px' }}>
                                            {current.title}
                                        </h3>
                                        <p style={{ fontSize: '14px', lineHeight: '1.65', color: 'var(--text-primary)', marginBottom: '18px' }}>
                                            {current.overview}
                                        </p>

                                        {/* Problems Solved */}
                                        <div style={{ marginBottom: '18px' }}>
                                            <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '6px' }}>
                                                Problems This Solves for Your Business:
                                            </div>
                                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                                {current.problemsSolved.map((prob, idx) => (
                                                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '6px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                                                        <i className="fa-solid fa-circle-check" style={{ color: 'var(--brand-forest)', marginTop: '3px', fontSize: '12px', flexShrink: 0 }}></i>
                                                        <span>{prob}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* What We Provide */}
                                        <div>
                                            <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '6px' }}>
                                                What We Configure &amp; Set Up:
                                            </div>
                                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                                {current.technicalCapabilities.map((cap, idx) => (
                                                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '6px', fontSize: '13px', color: 'var(--text-primary)' }}>
                                                        <i className="fa-solid fa-check" style={{ color: 'var(--brand-forest)', marginTop: '3px', fontSize: '12px', flexShrink: 0 }}></i>
                                                        <span>{cap}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Right: Deliverables, Technologies & CTA */}
                                    <div className="col-lg-5">
                                        <div style={{ background: '#F8F9F5', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                            <div>
                                                {/* Supported Technologies */}
                                                <div style={{ marginBottom: '14px' }}>
                                                    <div className="kpi-label" style={{ marginBottom: '6px' }}>Supported Platforms &amp; Tools</div>
                                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                                                        {current.technologies.map((t, idx) => (
                                                            <span key={idx} style={{ background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: '6px', padding: '3px 8px', fontSize: '11px', fontWeight: '600', color: 'var(--brand-ink)' }}>
                                                                {t}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* What You Receive */}
                                                <div style={{ marginBottom: '14px' }}>
                                                    <div className="kpi-label" style={{ marginBottom: '6px' }}>Deliverables You Receive</div>
                                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                                        {current.deliverables.map((del, idx) => (
                                                            <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', marginBottom: '4px', fontSize: '12px', color: 'var(--text-secondary)' }}>
                                                                <i className="fa-solid fa-file-lines" style={{ color: 'var(--brand-forest)', marginTop: '3px', fontSize: '11px', flexShrink: 0 }}></i>
                                                                <span>{del}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Engagement Approach */}
                                                <div style={{ marginBottom: '14px' }}>
                                                    <div className="kpi-label" style={{ marginBottom: '4px' }}>Engagement Approach</div>
                                                    <p style={{ fontSize: '12px', lineHeight: '1.5', color: 'var(--text-secondary)', margin: 0 }}>
                                                        {current.engagementApproach}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Action CTA */}
                                            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '12px' }}>
                                                <Link
                                                    to="/contact"
                                                    className="header-btn21"
                                                    style={{ width: '100%', justifyContent: 'center', fontSize: '12px', padding: '10px 14px' }}
                                                >
                                                    Discuss {current.title} <i className="fa-solid fa-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* QUICK DIRECTORY OF ALL SERVICES - COMPACT GRID */}
            <div className="sp5" style={{ background: '#FFFFFF', borderTop: '1px solid var(--border)', padding: '32px 0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto text-center mb-3">
                            <div className="heading20">
                                <h5>Directory</h5>
                                <h2>All Services at a Glance</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-3">
                        {servicesData.map((srv, idx) => (
                            <div className="col-lg-4 col-md-6" key={idx}>
                                <div
                                    className="fs-card"
                                    onClick={() => setActiveService(srv.id)}
                                    style={{
                                        padding: '18px 20px',
                                        cursor: 'pointer',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        borderColor: activeService === srv.id ? 'var(--brand-forest)' : 'var(--border)'
                                    }}
                                >
                                    <div>
                                        <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--brand-forest)', marginBottom: '2px' }}>
                                            {srv.number}
                                        </div>
                                        <h4 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '6px' }}>
                                            {srv.title}
                                        </h4>
                                        <p style={{ fontSize: '12px', lineHeight: '1.5', color: 'var(--text-secondary)', margin: 0 }}>
                                            {srv.tagline}
                                        </p>
                                    </div>
                                    <div style={{ marginTop: '10px', fontSize: '12px', fontWeight: '600', color: 'var(--brand-forest)' }}>
                                        View Details &rarr;
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CALL TO ACTION */}
            <div className="container" style={{ margin: '24px auto' }}>
                <div className="cta13-section-area" style={{ padding: '32px 20px', margin: '0 auto' }}>
                    <h2>Need a clear technical recommendation?</h2>
                    <p style={{ margin: '0 auto 18px auto' }}>
                        We review your current systems, computers, and cloud setup to provide practical advice without sales pressure.
                    </p>
                    <div className="btn-area1" style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                        <Link to="/contact" className="header-btn21">
                            Request a Consultation <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                        <Link to="/pricing" className="header-btn21 btn2">
                            View Pricing Models <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
