import Hero from '../components/Hero.jsx'
import StudentShowcase from '../components/StudentShowcase.jsx'
import MatricResults from '../components/MatricResults.jsx'
import WhatWeDo from '../components/WhatWeDo.jsx'
import Subjects from '../components/Subjects.jsx'
import Testimonials from '../components/Testimonials.jsx'
import BookingContact from '../components/BookingContact.jsx'
import Footer from '../components/Footer.jsx'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StudentShowcase />
      <MatricResults />
      <WhatWeDo />
      <Subjects />
      <Testimonials />
      <BookingContact />
      <Footer />
    </>
  )
}
