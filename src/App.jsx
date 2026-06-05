import { useEffect, useRef } from 'react'
import tanayphoto from './tanay.jpeg'
import tanayresume from './tanayres.pdf'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Products from './components/Products.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Achievements from './components/Achievements.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  const cursorRef = useRef(null)

  /* Custom cursor */
  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return
    const move = (e) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    }
    const enter = () => cursor.classList.add('hovering')
    const leave = () => cursor.classList.remove('hovering')
    window.addEventListener('mousemove', move)
    document.querySelectorAll('a,button,[data-hover]').forEach(el => {
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
    })
    return () => window.removeEventListener('mousemove', move)
  }, [])

  /* IntersectionObserver scroll reveal */
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!els.length) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) } }),
      { threshold: 0.12 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  })

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <div className="cursor" ref={cursorRef} aria-hidden="true" />
      <Navbar />
      <Hero photoUrl={tanayphoto} resumeUrl={tanayresume} />
      <About />
      <Products />
      <Experience />
      <Skills />
      <Achievements />
      <Contact />
    </>
  )
}
