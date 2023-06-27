import Head from 'next/head'
import Footer from '@components/General/Footer'
import Hero from '@components/General/Hero'
import DataPrivacyText from '@components/DataPrivacy/DataPrivacyText'

export default function DataPrivacy() {
  return (
    <div className="flex flex-col min-h-screen">
      <title>Datenschutzerklärung</title>
      <Hero />
      <DataPrivacyText />
      <Footer />
    </div>
  )
}