import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import Layout from './components/Layout'

// Lazy load all pages — each page is a separate JS chunk (faster first load)
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogSingle = lazy(() => import('./pages/BlogSingle'))
const CaseStudy = lazy(() => import('./pages/Case'))
const CaseSingle = lazy(() => import('./pages/CaseSingle'))
const Team = lazy(() => import('./pages/Team'))
const Pricing = lazy(() => import('./pages/Pricing'))
const Testimonials = lazy(() => import('./pages/Testimonials'))
const Faq = lazy(() => import('./pages/Faq'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ disable: true })
    }
  }, [])

  return (
    <Router>
      <Suspense fallback={<div style={{ minHeight: '100vh' }}></div>}>
        <Routes>
          {/* All pages use homepage13-body so the nav bar looks identical everywhere */}
          <Route path="/" element={<Layout bodyClass="homepage13-body"><Home /></Layout>} />
          <Route path="/about" element={<Layout bodyClass="homepage13-body"><About /></Layout>} />
          <Route path="/services" element={<Layout bodyClass="homepage13-body"><Services /></Layout>} />
          <Route path="/blog" element={<Layout bodyClass="homepage13-body"><Blog /></Layout>} />
          <Route path="/blog/:id" element={<Layout bodyClass="homepage13-body"><BlogSingle /></Layout>} />
          <Route path="/case" element={<Layout bodyClass="homepage13-body"><CaseStudy /></Layout>} />
          <Route path="/case/:id" element={<Layout bodyClass="homepage13-body"><CaseSingle /></Layout>} />
          <Route path="/team" element={<Layout bodyClass="homepage13-body"><Team /></Layout>} />
          <Route path="/pricing" element={<Layout bodyClass="homepage13-body"><Pricing /></Layout>} />
          <Route path="/testimonials" element={<Layout bodyClass="homepage13-body"><Testimonials /></Layout>} />
          <Route path="/faq" element={<Layout bodyClass="homepage13-body"><Faq /></Layout>} />
          <Route path="/contact" element={<Layout bodyClass="homepage13-body"><Contact /></Layout>} />
          <Route path="*" element={<Layout bodyClass="homepage13-body"><NotFound /></Layout>} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
