import React from 'react'
import HeroSection from './Section/HeroSection'
import ServiceSection from './Section/ServiceSection'
import WhyChooseUs from './Section/WhyChooseUs'
import PopularTour from './Section/PopularTour'
import TestimoniSection from './Section/TestimoniSection'
import CTASection from './Section/CTASection'

const Homepage = () => {
  
  return (
    <div>
      <HeroSection/>
      <ServiceSection/>
      <WhyChooseUs/>
      <PopularTour/>
      <TestimoniSection/>
      <CTASection/>
    </div>
  )
}

export default Homepage