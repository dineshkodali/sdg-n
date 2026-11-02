import { Link } from 'react-router-dom'
import { useState, useMemo } from 'react'

const section1Faqs = [
    {
        q: 'Where is SDG Solutions based and do you support international clients?',
        a: 'We operate from dual hubs in London, United Kingdom and Vijayawada, India. We provide on-site technical support across both locations, alongside full remote cloud management and software development for clients worldwide.'
    },
    {
        q: 'Which cloud platforms do you set up and manage?',
        a: 'We specialize in Amazon Web Services (AWS), Microsoft Azure, and Linux server environments (Ubuntu and Debian). We configure virtual servers, private cloud networks, and automated nightly backups sized properly to prevent wasted cloud spending.'
    },
    {
        q: 'What is included in your office IT and systems administration?',
        a: 'We handle your day-to-day office technology: setting up Microsoft 365 (email, SharePoint, and Teams), managing Windows Server and Active Directory logins, applying security settings across all laptops, and providing fast support when staff run into technical issues.'
    },
    {
        q: 'How do you keep our company Wi-Fi secure from visitors?',
        a: 'We set up separated network zones (VLANs) on business-grade hardware like TP-Link Omada. Guest visitors and mobile phones connect to an isolated Wi-Fi network that only has internet access, keeping your internal company computers and accounting databases completely hidden and secure.'
    },
    {
        q: 'Can staff safely access office computers and files from home?',
        a: 'Yes. We set up encrypted Remote Desktop gateways and secure WireGuard VPN connections. This gives remote employees safe access to office files without exposing open ports directly to the public internet.'
    },
    {
        q: 'How do automated cloud backups protect us from ransomware?',
        a: 'We configure automated nightly backups that save encrypted copies of your databases and files to off-site cloud vaults with Object Lock. Once written, these backup files cannot be deleted or changed for 90 days, ensuring you can restore company data even during a ransomware attack.'
    }
]

const section2Faqs = [
    {
        q: 'What technologies do you use for custom web application development?',
        a: 'We build modern, fast web applications using React 19 on the front end and PostgreSQL on the backend. For API connections and automated tasks, we use Node.js, Express, or Python.'
    },
    {
        q: 'How do you prevent data from leaking between different branches or user roles?',
        a: 'In platforms like SDTracker, we use PostgreSQL Row Level Security (RLS) directly inside the database. This guarantees that branch staff can only see records for their assigned location, making accidental data leakage impossible.'
    },
    {
        q: 'How do you quote for projects — fixed price or monthly retainer?',
        a: 'We offer both options depending on your needs. Specific setup projects (like deploying an office network, setting up Windows Server, or building a web app) are delivered for a clear, fixed milestone quote. Ongoing IT support and server monitoring are provided through transparent monthly retainers.'
    },
    {
        q: 'Are we locked into long-term proprietary contracts?',
        a: 'No. When a project is complete, we hand over all root administrative passwords, source code repositories, and network documentation to you. You retain 100% ownership of your systems and accounts at all times.'
    },
    {
        q: 'How fast does your team respond when we need technical help?',
        a: 'Our average response time for support inquiries and client requests is 3.2 business hours. For critical emergency defects, our systems feature rapid priority triage to resolve issues within agreed targets.'
    },
    {
        q: 'How do we get started with an initial assessment?',
        a: 'Simply send us a message through our contact page or give us a call. We will review your current systems, understand your goals, and give you an honest technical assessment and clear quote with zero sales pressure.'
    }
]

export default function Faq() {
    const [searchQuery, setSearchQuery] = useState('')
    const [activeSection, setActiveSection] = useState('all')
    const [openIndexSec1, setOpenIndexSec1] = useState(0)
    const [openIndexSec2, setOpenIndexSec2] = useState(0)

    const filteredSec1 = useMemo(() => {
        if (!searchQuery.trim()) return section1Faqs
        const q = searchQuery.toLowerCase()
        return section1Faqs.filter(item => item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q))
    }, [searchQuery])

    const filteredSec2 = useMemo(() => {
        if (!searchQuery.trim()) return section2Faqs
        const q = searchQuery.toLowerCase()
        return section2Faqs.filter(item => item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q))
    }, [searchQuery])

    return (
        <div className="homepage13-body">

            {/* PAGE HEADER */}
            <div className="about-header-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <div className="about-inner-header heading9 text-center">
                                <h1>Frequently Asked Questions</h1>
                                <Link to="/">Home <i className="fa-solid fa-angle-right"></i> <span>FAQ</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MAIN FAQ CONTENT - 2 SECTIONED ARCHITECTURE */}
            <div className="sp5" style={{ padding: '36px 0 24px 0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto text-center mb-3">
                            <div className="heading20">
                                <h5>Helpful Guidance</h5>
                                <h2>Clear, Honest Answers About Working With Us</h2>
                                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                                    Organized into two distinct sections: Infrastructure &amp; Office Systems,
                                    and Software Projects &amp; Support.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* SEARCH & SECTION TOGGLE */}
                    <div className="row mb-4">
                        <div className="col-lg-10 m-auto">
                            <div className="fs-card" style={{ padding: '16px 20px' }}>
                                <div className="row g-3 align-items-center">
                                    <div className="col-md-6">
                                        <div style={{ position: 'relative' }}>
                                            <i className="fa-solid fa-magnifying-glass" style={{ position: 'absolute', left: '14px', top: '13px', color: 'var(--brand-sage)', fontSize: '13px' }}></i>
                                            <input
                                                type="text"
                                                className="fs-input"
                                                placeholder="Search questions (e.g. Wi-Fi, backups, pricing)..."
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                style={{ paddingLeft: '38px', height: '40px', fontSize: '13px' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                            <button
                                                type="button"
                                                onClick={() => setActiveSection('all')}
                                                style={{
                                                    padding: '6px 14px',
                                                    borderRadius: '999px',
                                                    fontSize: '12px',
                                                    fontWeight: '600',
                                                    cursor: 'pointer',
                                                    background: activeSection === 'all' ? 'var(--brand-forest)' : '#F3F5EE',
                                                    color: activeSection === 'all' ? '#FFFFFF' : 'var(--text-primary)',
                                                    border: activeSection === 'all' ? '1px solid var(--brand-forest)' : '1px solid var(--border)'
                                                }}
                                            >
                                                Both Sections
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setActiveSection('sec1')}
                                                style={{
                                                    padding: '6px 14px',
                                                    borderRadius: '999px',
                                                    fontSize: '12px',
                                                    fontWeight: '600',
                                                    cursor: 'pointer',
                                                    background: activeSection === 'sec1' ? 'var(--brand-forest)' : '#F3F5EE',
                                                    color: activeSection === 'sec1' ? '#FFFFFF' : 'var(--text-primary)',
                                                    border: activeSection === 'sec1' ? '1px solid var(--brand-forest)' : '1px solid var(--border)'
                                                }}
                                            >
                                                Section 1: Infrastructure &amp; IT
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setActiveSection('sec2')}
                                                style={{
                                                    padding: '6px 14px',
                                                    borderRadius: '999px',
                                                    fontSize: '12px',
                                                    fontWeight: '600',
                                                    cursor: 'pointer',
                                                    background: activeSection === 'sec2' ? 'var(--brand-forest)' : '#F3F5EE',
                                                    color: activeSection === 'sec2' ? '#FFFFFF' : 'var(--text-primary)',
                                                    border: activeSection === 'sec2' ? '1px solid var(--brand-forest)' : '1px solid var(--border)'
                                                }}
                                            >
                                                Section 2: Software &amp; Pricing
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2-SECTION ACCORDION LAYOUT */}
                    <div className="row g-4">
                        {/* SECTION 1: INFRASTRUCTURE, CLOUD & NETWORKING */}
                        {(activeSection === 'all' || activeSection === 'sec1') && (
                            <div className={activeSection === 'all' ? 'col-lg-6' : 'col-lg-10 m-auto'}>
                                <div style={{ marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span className="badge-active" style={{ fontSize: '11px', padding: '3px 8px' }}>Section 01</span>
                                    <h3 style={{ fontSize: '17px', fontWeight: '700', color: 'var(--brand-ink)', margin: 0 }}>
                                        IT Infrastructure, Cloud &amp; Office Systems
                                    </h3>
                                </div>

                                {filteredSec1.length === 0 ? (
                                    <div className="fs-card" style={{ padding: '24px', textAlign: 'center' }}>
                                        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0 }}>No matching questions in this section.</p>
                                    </div>
                                ) : (
                                    filteredSec1.map((item, idx) => {
                                        const isOpen = openIndexSec1 === idx
                                        return (
                                            <div
                                                key={idx}
                                                className="accordion-item"
                                                style={{
                                                    borderColor: isOpen ? 'var(--brand-sage)' : 'var(--border)',
                                                    marginBottom: '10px'
                                                }}
                                            >
                                                <h4 style={{ margin: 0 }}>
                                                    <button
                                                        type="button"
                                                        className={`accordion-button ${isOpen ? '' : 'collapsed'}`}
                                                        onClick={() => setOpenIndexSec1(isOpen ? -1 : idx)}
                                                        style={{ padding: '14px 18px', fontSize: '14px' }}
                                                    >
                                                        <span style={{ fontSize: '14px', fontWeight: '600', color: isOpen ? 'var(--brand-forest)' : 'var(--brand-ink)' }}>
                                                            {item.q}
                                                        </span>
                                                        <i
                                                            className="fa-solid fa-chevron-down"
                                                            style={{
                                                                fontSize: '11px',
                                                                color: 'var(--brand-forest)',
                                                                transform: isOpen ? 'rotate(180deg)' : 'none',
                                                                transition: 'transform 0.2s ease',
                                                                flexShrink: 0,
                                                                marginLeft: '10px'
                                                            }}
                                                        ></i>
                                                    </button>
                                                </h4>
                                                {isOpen && (
                                                    <div className="accordion-body" style={{ padding: '14px 18px', fontSize: '13px', lineHeight: '1.6' }}>
                                                        {item.a}
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    })
                                )}
                            </div>
                        )}

                        {/* SECTION 2: SOFTWARE, PRICING & SUPPORT */}
                        {(activeSection === 'all' || activeSection === 'sec2') && (
                            <div className={activeSection === 'all' ? 'col-lg-6' : 'col-lg-10 m-auto'}>
                                <div style={{ marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span className="badge-complete" style={{ fontSize: '11px', padding: '3px 8px' }}>Section 02</span>
                                    <h3 style={{ fontSize: '17px', fontWeight: '700', color: 'var(--brand-ink)', margin: 0 }}>
                                        Custom Software, Pricing &amp; Support
                                    </h3>
                                </div>

                                {filteredSec2.length === 0 ? (
                                    <div className="fs-card" style={{ padding: '24px', textAlign: 'center' }}>
                                        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0 }}>No matching questions in this section.</p>
                                    </div>
                                ) : (
                                    filteredSec2.map((item, idx) => {
                                        const isOpen = openIndexSec2 === idx
                                        return (
                                            <div
                                                key={idx}
                                                className="accordion-item"
                                                style={{
                                                    borderColor: isOpen ? 'var(--brand-sage)' : 'var(--border)',
                                                    marginBottom: '10px'
                                                }}
                                            >
                                                <h4 style={{ margin: 0 }}>
                                                    <button
                                                        type="button"
                                                        className={`accordion-button ${isOpen ? '' : 'collapsed'}`}
                                                        onClick={() => setOpenIndexSec2(isOpen ? -1 : idx)}
                                                        style={{ padding: '14px 18px', fontSize: '14px' }}
                                                    >
                                                        <span style={{ fontSize: '14px', fontWeight: '600', color: isOpen ? 'var(--brand-forest)' : 'var(--brand-ink)' }}>
                                                            {item.q}
                                                        </span>
                                                        <i
                                                            className="fa-solid fa-chevron-down"
                                                            style={{
                                                                fontSize: '11px',
                                                                color: 'var(--brand-forest)',
                                                                transform: isOpen ? 'rotate(180deg)' : 'none',
                                                                transition: 'transform 0.2s ease',
                                                                flexShrink: 0,
                                                                marginLeft: '10px'
                                                            }}
                                                        ></i>
                                                    </button>
                                                </h4>
                                                {isOpen && (
                                                    <div className="accordion-body" style={{ padding: '14px 18px', fontSize: '13px', lineHeight: '1.6' }}>
                                                        {item.a}
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    })
                                )}
                            </div>
                        )}
                    </div>

                    {/* STILL HAVE QUESTIONS CARD */}
                    <div className="row mt-4">
                        <div className="col-lg-10 m-auto">
                            <div className="fs-card" style={{ padding: '28px', textAlign: 'center' }}>
                                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                                    <span className="badge-active">Direct Technical Help</span>
                                </div>
                                <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '6px' }}>
                                    Have a Specific Question About Your Setup?
                                </h3>
                                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', maxWidth: '520px', margin: '0 auto 18px auto' }}>
                                    We are happy to answer any questions about your office computers, cloud servers, or custom software project.
                                </p>
                                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                    <Link to="/contact" className="header-btn21" style={{ fontSize: '12px', padding: '10px 16px' }}>
                                        Send Message to Team <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                    <a href="tel:+4407862172610" className="header-btn21 btn2" style={{ fontSize: '12px', padding: '10px 16px' }}>
                                        Call UK: +44 07862172610
                                    </a>
                                    <a href="tel:+919398357180" className="header-btn21 btn2" style={{ fontSize: '12px', padding: '10px 16px' }}>
                                        Call IN: +91 9398357180
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
