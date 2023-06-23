import Head from 'next/head'
import Footer from '@components/Footer'
import Hero from '@components/Hero'
import ImprintText from '@components/ImprintText'

export default function Imprint() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ImprintText />
      <Footer />
    </div>
  )
}