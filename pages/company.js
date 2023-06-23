import Head from 'next/head'
import Hero from '@components/Hero'
import Footer from '@components/Footer'
import CompanyContent from '@components/CompanyContent'


export default function Company() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <CompanyContent />
      <Footer />
      
    </div>
  )
}