import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ScrollProgress from './ScrollProgress'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children, bodyClass }) {
    const location = useLocation()

    useEffect(() => {
        // Apply page-specific body class (e.g. homepage13-body for dark theme)
        if (bodyClass) {
            document.body.className = bodyClass
        } else {
            document.body.className = ''
        }
    }, [bodyClass])

    useEffect(() => {
        // Scroll to top on route change
        window.scrollTo(0, 0)

        // Re-initialize AOS after React renders new page content
        if (window.AOS) {
            window.AOS.init({ disable: true })

        }
    }, [location.pathname])

    return (
        <>
            <ScrollProgress />
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}
