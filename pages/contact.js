import Head from 'next/head'
import Header from '@components/General/Header'
import Footer from '@components/General/Footer'
import Hero from '@components/General/Hero'
import ContactForm from '@components/Contact/ContactForm'

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ContactForm />
      <Footer />
    </div>
  )
}