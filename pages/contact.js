import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Hero from '@components/Hero'
import ContactForm from '@components/ContactForm'

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ContactForm />
      <Footer />
    </div>
  )
}