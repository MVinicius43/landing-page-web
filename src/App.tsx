import { Home } from "./components/Home"
import {
  ScrollingProvider,
  Section  
} from 'react-scroll-section'
import { Aboutus } from "./components/AboutUs"
import { NavBar } from "./components/NavBar"
import { Services } from "./components/Services"
import { HowItWorks } from "./components/HowItWorks"
import { Benefits } from "./components/Benefits"
import { FinalMessage } from "./components/FinalMessage"

function App() {

  return (
    <ScrollingProvider>
      <NavBar />
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
      <FinalMessage />
    </ScrollingProvider>
  )
}

export default App
