import CopyRight from '@/components/btBanner'
import CallToAction from '@/components/cta'
import DentistIntro from '@/components/dentistIntro'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Services from '@/components/services'
import Testimonials from '@/components/testimonials'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main class="intro">
      <Header />  
      <CallToAction />
      <DentistIntro />
      <Services />
      <Testimonials />
      <Footer />
      <CopyRight />
		</main>
  )
}
