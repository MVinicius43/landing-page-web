import {
  Flex,
  Text,
  Img, 
  Button,
  useDisclosure,
  useMediaQuery
} from '@chakra-ui/react'
import { SignInModal } from './SignInModal'
import { ButtonMotion } from './Button'

import home from '../public/home2.png'

import Section from './Section'

import { ToastContainer } from 'react-toastify'

export function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  const [mdScreen] = useMediaQuery("(min-width: 1485px)")

  return (
    <Flex
      bg="linear-gradient(89.06deg, #6357FF 13.97%, #00005D 99.03%)"
      flexDirection="column"
      width="100%"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex
          color="white"
          flexDirection="column"
          marginTop="2%"
          marginLeft="70px"
          position="absolute"
        >
          <Section delay={1.2}>
            <Text
              fontFamily="Montserrat"
              fontSize={{ base: 24, md: 20, lg: 60 }}
              fontWeight="700"
            >
              LANDING PAGE
            </Text>
          </Section>

            <Flex
              width="40%"
              marginLeft="0.5%"
            >
              <Section delay={1.4}>
                <Text
                  fontSize={{ base: 24, md: 20, lg: 20 }}
                  fontFamily="Lato"
                >
                  Economize seu dinheiro capturando o lead certo com um design inovador e sem enrolação!
                </Text> 
              </Section>
            </Flex>
            
            <Section delay={1.6}>
              <ButtonMotion>
                <Button
                  onClick={onOpen}
                  width="32%"
                  marginLeft="0.5%"
                  marginTop="5%"
                  variant="outline"
                  borderRadius="10px"
                  borderWidth="3px"
                  borderBottomLeftRadius="0px"
                  borderStartColor="#1D0E9F"
                  borderBlockStartColor="#1D0E9F"
                  borderRightColor="#1D0E9F"
                  borderBottomColor="#1D0E9F"
                  color="white"
                  fontFamily="Montserrat"
                  fontWeight="600"
                  p="25px"
                  _hover={{
                    color: "white",
                    bg:"#1D0E9F",
                    transition: '1s'
                  }}
                >
                  Vamos conversar!
                </Button>
              </ButtonMotion>
            </Section>
        </Flex>

        <Img
          src={home}
          marginTop="23px"
          width={mdScreen ? "80%" : "74.9%"}
          height={mdScreen ? "80%" : "74.9%"}
          mixBlendMode={'hard-light'}
          marginLeft="317px"
        />
        <SignInModal
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        />
      </Flex>
      <ToastContainer />
    </Flex>
  )
}