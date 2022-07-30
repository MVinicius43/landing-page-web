import { Flex,
         Text,
         Img, 
         Box,
         Button,
         useDisclosure
        } from '@chakra-ui/react'
import { SignInModal } from './SignInModal'

import home from '../public/home.svg'

export function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex bg="primary.200" flexDirection="column">
      <Flex justifyContent="center" alignItems="center" >
        <Box color="white" flexDirection="column" marginTop="2%" marginLeft="9%" width="40%" >
          <Text fontSize={{ base: 24, md: 20, lg: 50 }} fontWeight="bold">
            Landing Page
          </Text>
          <Text fontSize={{ base: 24, md: 20, lg: 20 }}>
            Economize seu dinheiro capturando o lead certo com um design inovador e sem enrolação!
          </Text>
          <Button onClick={onOpen} width="180px" marginLeft="9%" marginTop="20%" variant="outline" borderRadius="10px" borderWidth="3px" borderBottomLeftRadius="0px" borderColor="#1D0E9F" color="white" fontFamily="heading" p="25px" >Vamos conversar!</Button>
        </Box>

        <Img src={home} width="100%" height="100%"/>
        <SignInModal isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
      </Flex>
    </Flex>
  )
}