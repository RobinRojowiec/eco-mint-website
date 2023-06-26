import Head from 'next/head'
import Header from '@components/General/Header'
import Footer from '@components/General/Footer'
import Hero from '@components/General/Hero'
import IntroMain from '@components/Home/IntroMainScroll'
import Newsletter from '@components/Home/Newsletter'
import MainHeadline from '@components/Home/MainHeadline'
import IntroDetailSection1 from '@components/Home/IntroDetailSection1'
import IntroDetailSection2 from '@components/Home/IntroDetailSection2'
import MainDevider from '@components/Home/MainDevider'
import IntroMainDetailGrid from '@components/Home/IntroMainDetailGrid'


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <MainHeadline />
      <IntroMain />
      <MainDevider />
      <IntroMainDetailGrid />
      <Newsletter />
      <IntroDetailSection1 />
      <IntroDetailSection2 />
      <Footer />
    </div>
  )
}