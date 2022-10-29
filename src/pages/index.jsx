import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Head>
        <title>Elon Code Review - Print it out and Elon Musk will check it</title>
        <meta
          name="description"
          content="Print out your last 30/60 days of code and Elon Musk will review it."
        />
        <script src="https://cdn.usefathom.com/script.js" data-site="GCGAUKHE" defer></script>
        <link rel="canonical" href="https://eloncodereview.com" />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
