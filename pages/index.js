import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Hero from '@components/Hero'
import IntroMain from '@components/IntroMain'
import Newsletter from '@components/Newsletter'
import MainHeadline from '@components/MainHeadline'
import IntroDetailSection1 from '@components/IntroDetailSection1'
import IntroDetailSection2 from '@components/IntroDetailSection2'


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <MainHeadline />
      <IntroMain />
      <Newsletter />
      <IntroDetailSection1 />
      <IntroDetailSection2 />
      <Footer />
    </div>
  )
}