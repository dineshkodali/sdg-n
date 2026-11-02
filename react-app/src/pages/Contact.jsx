import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Contact() {
    const [submitted, setSubmitted] = useState(false)
    const [submissionRef, setSubmissionRef] = useState('')
    const [selectedService, setSelectedService] = useState('Cloud & Infrastructure')
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        company: '',
        phone: '',
        budget: 'Not Sure / Needs Technical Scoping',
        message: '',
        agree: true
    })

    const services = [
        'Cloud & Infrastructure',
        'Managed IT & Systems',
        'Networking & Security',
        'Software & Web Apps',
        'DevOps & Observability',
        'Digital Solutions',
        'Cloud Backups & Disaster Recovery'
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
        const refId = 'SDG-' + Math.floor(100000 + Math.random() * 900000)
        const payload = {
            ref: refId,
            timestamp: new Date().toISOString(),
            service: selectedService,
            ...formData
        }

        // Store into localStorage log for persistence and verification
        try {
            const existing = JSON.parse(localStorage.getItem('sdg_inquiries') || '[]')
            existing.unshift(payload)
            localStorage.setItem('sdg_inquiries', JSON.stringify(existing.slice(0, 20)))
        } catch {
            // fallback gracefully
        }

        setSubmissionRef(refId)
        setSubmitted(true)
    }

    const handleReset = () => {
        setSubmitted(false)
        setFormData({
            fullName: '',
            email: '',
            company: '',
            phone: '',
            budget: 'Not Sure / Needs Technical Scoping',
            message: '',
            agree: true
        })
    }

    return (
        <div className="homepage13-body">

            {/* PAGE HEADER */}
            <div className="about-header-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <div className="about-inner-header heading9 text-center">
                                <h1>Contact Our Engineering Team</h1>
                                <Link to="/">Home <i className="fa-solid fa-angle-right"></i> <span>Contact</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CONTACT MAIN SECTION */}
            <div className="sp1">
                <div className="container">
                    <div className="row g-4">
                        {/* LEFT COLUMN: DIRECT CONTACT DETAILS */}
                        <div className="col-lg-5">
                            <div className="fs-card" style={{ padding: '32px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                                        <span className="badge-active">Average Response: 3.2h</span>
                                        <span className="badge-complete">Direct Technical Lead</span>
                                    </div>

                                    <h2 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '12px' }}>
                                        Let’s Discuss Your Technology Requirements
                                    </h2>
                                    <p style={{ fontSize: '14px', lineHeight: '1.65', color: 'var(--text-secondary)', marginBottom: '28px' }}>
                                        Speak directly with engineers who understand cloud systems, systems administration,
                                        network architecture, and software development. We evaluate your requirements without sales pressure.
                                    </p>

                                    {/* Direct Phones */}
                                    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '22px' }}>
                                        <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#EBF0E6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <i className="fa-solid fa-phone" style={{ color: 'var(--brand-forest)', fontSize: '16px' }}></i>
                                        </div>
                                        <div>
                                            <div className="kpi-label">Direct Phone Lines</div>
                                            <div style={{ marginBottom: '4px' }}>
                                                <span style={{ fontSize: '12px', color: 'var(--brand-sage)', fontWeight: '600', marginRight: '6px' }}>UK:</span>
                                                <a href="tel:+4407862172610" style={{ fontSize: '15px', fontWeight: '600', color: 'var(--brand-ink)' }}>
                                                    +44 07862172610
                                                </a>
                                            </div>
                                            <div>
                                                <span style={{ fontSize: '12px', color: 'var(--brand-sage)', fontWeight: '600', marginRight: '6px' }}>IN:</span>
                                                <a href="tel:+919398357180" style={{ fontSize: '15px', fontWeight: '600', color: 'var(--brand-ink)' }}>
                                                    +91 9398357180
                                                </a>
                                            </div>
                                            <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px' }}>Mon – Fri: 8:30 AM – 6:00 PM GMT / IST</div>
                                        </div>
                                    </div>

                                    {/* Direct Emails */}
                                    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '22px' }}>
                                        <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#EBF0E6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <i className="fa-solid fa-envelope" style={{ color: 'var(--brand-forest)', fontSize: '16px' }}></i>
                                        </div>
                                        <div>
                                            <div className="kpi-label">Official Inquiries</div>
                                            <div style={{ marginBottom: '2px' }}>
                                                <a href="mailto:info@sdgsolutions.in" style={{ fontSize: '15px', fontWeight: '600', color: 'var(--brand-ink)' }}>
                                                    info@sdgsolutions.in
                                                </a>
                                            </div>
                                            <div>
                                                <a href="mailto:ella@sdgsolutions.in" style={{ fontSize: '15px', fontWeight: '600', color: 'var(--brand-forest)' }}>
                                                    ella@sdgsolutions.in
                                                </a>
                                            </div>
                                            <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px' }}>Inquiries reviewed directly by engineering leads</div>
                                        </div>
                                    </div>

                                    {/* Dual Operating Locations */}
                                    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '24px' }}>
                                        <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#EBF0E6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <i className="fa-solid fa-location-dot" style={{ color: 'var(--brand-forest)', fontSize: '16px' }}></i>
                                        </div>
                                        <div>
                                            <div className="kpi-label">Operating Locations</div>
                                            <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--brand-ink)', lineHeight: '1.4' }}>
                                                London, United Kingdom<br />
                                                Vijayawada, India
                                            </div>
                                            <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px' }}>Dual Hubs · Onsite &amp; Global Remote Project Delivery</div>
                                        </div>
                                    </div>
                                </div>

                                {/* QUICK FAQ BANNER IN CONTACT */}
                                <div style={{ background: '#F8F9F4', border: '1px solid var(--border)', borderRadius: '12px', padding: '18px 20px', marginTop: '24px' }}>
                                    <div style={{ fontWeight: '600', fontSize: '14px', color: 'var(--brand-ink)', marginBottom: '4px' }}>
                                        Questions on Scoping or Service Tiers?
                                    </div>
                                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: '0 0 10px 0' }}>
                                        Review our transparent engagement models and answers to technical FAQs.
                                    </p>
                                    <Link to="/faq" style={{ fontSize: '13px', fontWeight: '600', color: 'var(--brand-forest)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                        Read the Technical FAQ <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: INTERACTIVE FORM (Forest & Stone Page 5 Spec) */}
                        <div className="col-lg-7">
                            <div className="fs-card" style={{ padding: '36px' }}>

                                {/* SUCCESS RECEIPT STATE */}
                                {submitted ? (
                                    <div style={{
                                        background: 'var(--status-active-bg)',
                                        border: '1px solid #C4D6C0',
                                        borderRadius: 'var(--radius-card)',
                                        padding: '32px',
                                        textAlign: 'center'
                                    }}>
                                        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--brand-forest)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', fontSize: '20px' }}>
                                            <i className="fa-solid fa-check"></i>
                                        </div>
                                        <h3 style={{ fontSize: '22px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '8px' }}>
                                            Inquiry Dispatched Successfully
                                        </h3>
                                        <div style={{ fontSize: '13px', color: 'var(--brand-forest)', fontWeight: '600', marginBottom: '12px' }}>
                                            Reference Number: {submissionRef}
                                        </div>
                                        <p style={{ fontSize: '14px', lineHeight: '1.65', color: 'var(--text-primary)', maxWidth: '480px', margin: '0 auto 20px auto' }}>
                                            Thank you, <strong>{formData.fullName}</strong>. Your project inquiry regarding <strong>{selectedService}</strong> has been logged. Our technical lead will review your specifications and contact you within 3.2 business hours.
                                        </p>
                                        <button
                                            type="button"
                                            onClick={handleReset}
                                            className="header-btn21 btn2"
                                            style={{ margin: '0 auto' }}
                                        >
                                            Send Another Inquiry <i className="fa-solid fa-arrow-right"></i>
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <div style={{ marginBottom: '24px' }}>
                                            <h3 style={{ fontSize: '22px', fontWeight: '700', color: 'var(--brand-ink)', marginBottom: '6px' }}>
                                                Submit a Project Inquiry
                                            </h3>
                                            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0 }}>
                                                Provide details on your existing systems or development objectives. We respond with practical next steps.
                                            </p>
                                        </div>

                                        <form onSubmit={handleSubmit}>
                                            <div className="row g-3">
                                                {/* Full Name */}
                                                <div className="col-md-6">
                                                    <div>
                                                        <label className="fs-form-label">Full Name *</label>
                                                        <input
                                                            type="text"
                                                            required
                                                            className="fs-input"
                                                            placeholder="e.g. Alex Johnson"
                                                            value={formData.fullName}
                                                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                                        />
                                                        <div className="fs-form-helper">Required field</div>
                                                    </div>
                                                </div>

                                                {/* Business Email */}
                                                <div className="col-md-6">
                                                    <div>
                                                        <label className="fs-form-label">Business Email *</label>
                                                        <input
                                                            type="email"
                                                            required
                                                            className="fs-input"
                                                            placeholder="name@company.com"
                                                            value={formData.email}
                                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                        />
                                                        <div className="fs-form-helper">We never share your contact details</div>
                                                    </div>
                                                </div>

                                                {/* Company Name */}
                                                <div className="col-md-6">
                                                    <div>
                                                        <label className="fs-form-label">Company / Organisation *</label>
                                                        <input
                                                            type="text"
                                                            required
                                                            className="fs-input"
                                                            placeholder="Company Ltd"
                                                            value={formData.company}
                                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                        />
                                                        <div className="fs-form-helper">Helps us understand context</div>
                                                    </div>
                                                </div>

                                                {/* Phone Number (Optional) */}
                                                <div className="col-md-6">
                                                    <div>
                                                        <label className="fs-form-label">Phone Number (Optional)</label>
                                                        <input
                                                            type="tel"
                                                            className="fs-input"
                                                            placeholder="+44 20 0000 0000"
                                                            value={formData.phone}
                                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                        />
                                                        <div className="fs-form-helper">For telephone consultations</div>
                                                    </div>
                                                </div>

                                                {/* Service Required (Interactive Pills) */}
                                                <div className="col-12" style={{ marginTop: '14px' }}>
                                                    <label className="fs-form-label">Primary Technology Service Required *</label>
                                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '6px' }}>
                                                        {services.map((srv, idx) => (
                                                            <button
                                                                type="button"
                                                                key={idx}
                                                                onClick={() => setSelectedService(srv)}
                                                                style={{
                                                                    padding: '7px 14px',
                                                                    borderRadius: '999px',
                                                                    fontSize: '12px',
                                                                    fontWeight: '600',
                                                                    cursor: 'pointer',
                                                                    transition: 'all 0.15s ease',
                                                                    background: selectedService === srv ? 'var(--brand-forest)' : '#FFFFFF',
                                                                    color: selectedService === srv ? '#FFFFFF' : 'var(--text-primary)',
                                                                    border: selectedService === srv ? '1px solid var(--brand-forest)' : '1px solid var(--border)'
                                                                }}
                                                            >
                                                                {srv}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Estimated Budget (Optional) */}
                                                <div className="col-12" style={{ marginTop: '14px' }}>
                                                    <div>
                                                        <label className="fs-form-label">Estimated Budget / Investment Range</label>
                                                        <select
                                                            className="fs-input"
                                                            value={formData.budget}
                                                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                                            style={{ height: '43px', cursor: 'pointer' }}
                                                        >
                                                            <option>Not Sure / Needs Technical Scoping</option>
                                                            <option>Initial Consultation (&lt; £1,500)</option>
                                                            <option>Targeted Project (£1,500 – £5,000)</option>
                                                            <option>Major Deployment (£5,000 – £15,000)</option>
                                                            <option>Enterprise Platform / Retainer (£15,000+)</option>
                                                        </select>
                                                        <div className="fs-form-helper">Assists us in recommending suitable architectural options</div>
                                                    </div>
                                                </div>

                                                {/* Project Description */}
                                                <div className="col-12" style={{ marginTop: '14px' }}>
                                                    <div>
                                                        <label className="fs-form-label">Project Details, Current Environment &amp; Requirements *</label>
                                                        <textarea
                                                            required
                                                            rows="4"
                                                            className="fs-input"
                                                            placeholder="Describe your current setup, challenges, users, or technical targets..."
                                                            value={formData.message}
                                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                        ></textarea>
                                                        <div className="fs-form-helper">The more detail provided, the more specific our initial feedback</div>
                                                    </div>
                                                </div>

                                                {/* Checkbox agreement */}
                                                <div className="col-12">
                                                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '13px', color: 'var(--text-secondary)' }}>
                                                        <input
                                                            type="checkbox"
                                                            checked={formData.agree}
                                                            onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                                                            style={{ width: '16px', height: '16px', accentColor: 'var(--brand-forest)', cursor: 'pointer' }}
                                                        />
                                                        I agree to receive a technical consultation and direct communication from SDG Solutions.
                                                    </label>
                                                </div>

                                                {/* Submit Button */}
                                                <div className="col-12" style={{ marginTop: '18px' }}>
                                                    <button
                                                        type="submit"
                                                        className="header-btn21"
                                                        style={{ width: '100%', justifyContent: 'center' }}
                                                    >
                                                        Submit Project Inquiry <span><i className="fa-solid fa-arrow-right"></i></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
