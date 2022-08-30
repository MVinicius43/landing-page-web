import { Home } from "./components/Home"
import { Aboutus } from "./components/AboutUs"
import { NavBar } from "./components/NavBar"
import { Services } from "./components/Services"
import { HowItWorks } from "./components/HowItWorks"
import { Benefits } from "./components/Benefits"
import { ContactUs } from "./components/ContactUs"
import SectionMotion from "./components/Section"

import {
  ScrollingProvider,
  Section  
} from 'react-scroll-section'

function App() {
  return (
    <ScrollingProvider >
      <SectionMotion delay={2}>
        <NavBar />
      </SectionMotion>
      <Section id="Home">
        <Home />
      </Section>
      <Section id="Sobre nós">
        <Aboutus />
      </Section>
      <Section id="Nossos serviços">
        <Services />
      </Section>
      <Section id="Funcionamento">
        <HowItWorks />
      </Section>
      <Section id="Vantagens">
        <Benefits />
      </Section>
      <Section id="Contate-nos">
        <ContactUs />
      </Section>
    </ScrollingProvider>
  )
}

export default App
