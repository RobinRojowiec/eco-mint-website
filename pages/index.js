import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Hero from '@components/Hero'
import IntroMain from '@components/Intro-main'
import Newsletter from '@components/Newsletter'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <IntroMain />
      <Newsletter />
      <Footer />
    </div>
  )
}
