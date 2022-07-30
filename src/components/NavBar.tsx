import {
  Flex,
  HStack,
  Link 
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { useScrollSection } from "react-scroll-section";

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      color: "black"
    }}
    href={'#'}>
    {children}
  </Link>
);

export function NavBar() {
  const homeSection = useScrollSection('Home')
  const aboutUsSection = useScrollSection('Sobre nós')
  const servicesSection = useScrollSection('Nossos serviços')
  const functionalitiesSection = useScrollSection('Funcionamento')
  const benefitsSection = useScrollSection('Vantagens')
  
  const links = ['Home', 'Sobre nós', 'Nossos serviços', 'Funcionamento', 'Vantagens']

  const handleWithSections = (selectedSection: string) => {
    switch(selectedSection) {
      case 'Home':
        return homeSection.onClick();
        
      case 'Sobre nós':
        return aboutUsSection.onClick();
      
      case 'Nossos serviços':
        return servicesSection.onClick();

      case 'Funcionamento':
        return functionalitiesSection.onClick();
      
      case 'Vantagens':
        return benefitsSection.onClick();
    }
  }

  return (
    <Flex bg="primary.200" color="white" fontFamily="fonts.heading" justifyContent="center" fontWeight="600">
      <HStack
        as={'nav'}
        justifyContent="space-between"
        width="60%"
        display={{ base: 'none', md: 'flex' }}>
          {
            links.map(link => (
              <NavLink key={link}><button onClick={() => { handleWithSections(link) }}>{link}</button></NavLink>
            ))
          }
      </HStack>
    </Flex>
  )
}