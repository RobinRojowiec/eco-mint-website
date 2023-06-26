import Head from 'next/head'
import Hero from '@components/General/Hero'
import Footer from '@components/General/Footer'
import CompanyContent from '@components/AboutUs/CompanyContent'
import AboutTeam from '@components/AboutUs/AboutTeam'


export default function Company() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <CompanyContent />
      <AboutTeam />
      <Footer />
      
    </div>
  )
}