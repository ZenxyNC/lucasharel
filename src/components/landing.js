import Introduction from './components/introduction/introduction'
import './landing.css'
import '../resource/font-jakartaSans/importFont.css'
import Skills from './components/skills/skills'
import Contact from './components/contact/contact'

export default function Landing() {


  return (
    <>
      <Introduction />
      <Skills />
      <Contact />
    </>
  )
}