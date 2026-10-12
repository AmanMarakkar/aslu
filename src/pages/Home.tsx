import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Works } from '../components/Works'
import { Contact } from '../components/Contact'

export function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Works />
        <Contact />
      </main>
    </>
  )
}
