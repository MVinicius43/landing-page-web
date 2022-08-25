import {
  Flex,
  HStack,
  Link 
} from "@chakra-ui/react";

import { ReactNode } from "react";

import { useScrollSection } from "react-scroll-section";

interface INavLink {
  children: ReactNode,
  selectedSection: string
}

const NavLink = ({ children }: INavLink) => {
  return (
    <Link
      px={2}
      py={1}
      _hover={{
        borderBottom: '2px solid #00005D',
        borderBottomRadius: '5px',
        fontSize: '20.4px',
        color: '#00005D',
        transition: '0.4s'
      }}
    >
      {children}
    </Link> 
  )
}

export function NavBar() {
  const homeSection = useScrollSection('Home')
  const aboutUsSection = useScrollSection('Sobre nós')
  const servicesSection = useScrollSection('Nossos serviços')
  const functionalitiesSection = useScrollSection('Funcionamento')
  const benefitsSection = useScrollSection('Vantagens')
  const contactUsSection = useScrollSection('Contate-nos')
  
  const links = ['Home', 'Sobre nós', 'Nossos serviços', 'Funcionamento', 'Vantagens', 'Contate-nos']

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
      
      case 'Contate-nos':
        return contactUsSection.onClick();
    }
  }

  return (
    <Flex
      position="fixed"
      width="100%"
      as="nav"
      color={functionalitiesSection.selected ? '#00005D ' :
              aboutUsSection.selected ? 
              '#141414' : contactUsSection.selected ? 
              '#141414' : servicesSection.selected ?
              '#00005D' :
              "#FFFFFF"
            }
      
      justifyContent="center"
      fontWeight="600"
      fontSize={{ base: 5, md: 13, lg: 20 }}
      lineHeight="30px"
    >
      <HStack
        as={'nav'}
        justifyContent="space-between"
        width="60%"
        display={{ base: 'none', md: 'flex' }}>
          {
            links.map(link => (
              <NavLink
                key={link}
                selectedSection={link}
              >
                <button
                onClick={() => { handleWithSections(link) }}
                >
                  {link}
                </button>
              </NavLink>
            ))
          }
      </HStack>
    </Flex>
  )
}