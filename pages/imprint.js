import Head from 'next/head'
import Footer from '@components/General/Footer'
import Hero from '@components/General/Hero'
import ImprintText from '@components/Imprint/ImprintText'

export default function Imprint() {
  return (
    <div className="flex flex-col min-h-screen">
      <title>Impressum</title>
      <Hero />
      <ImprintText />
      <Footer />
    </div>
  )
}