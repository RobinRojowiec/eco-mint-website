import Head from 'next/head'
import Footer from '@components/Footer'
import Hero from '@components/Hero'
import DataPrivacyText from '@components/DataPrivacyText'

export default function DataPrivacy() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <DataPrivacyText />
      <Footer />
    </div>
  )
}