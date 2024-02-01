import About from '@/components/about/about'
import Contact from '@/components/contact/contact'
import Footer from '@/components/footer/footer'
import Home from '@/components/home/home'
import Skills from '@/components/skills/skills'
import Works from '@/components/works/works'
import Image from 'next/image'

export default function HomePage() {
  return (
    <main className='main'>
      <Home />
      <About subtitle="Subtitle" text="text" />
      <Skills />

      <Contact />
      <Footer />
    </main>
  )
}
