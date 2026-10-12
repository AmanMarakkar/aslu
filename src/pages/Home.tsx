import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Skills } from '../components/Skills'
import { Works } from '../components/Works'
import { Contact } from '../components/Contact'

export function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Works />
        <Contact />
      </main>
    </>
  )
}
