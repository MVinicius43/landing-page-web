import {
  Box,
  Flex,
  Img,
  Text
} from '@chakra-ui/react'

import services from '../public/services.png'

export function Services() {

  return (
    <Flex backgroundColor={'#6357FF'} flexDirection="row" height={'100vh'}>
      <Box marginLeft={"4.37rem"} marginTop={"6.25rem"}>
        <Text fontSize={{ base: '24px', md: '28px', lg: '30px' }}  lineHeight={"1.52rem"} color="#7267FE">
          O que fazemos?
        </Text>
        <Text marginTop={"1.93rem"} fontSize={{ base: '24px', md: '28px', lg: '30px' }}  lineHeight={"2.66rem"} color="#050042">
          Nossos serviços:
        </Text>
        <Box width={"26.12rem"} height={"17.12rem"} marginTop={"3.5rem"} marginLeft={"1.25rem"}>
          <Text fontSize={{ base: '24px', md: '28px', lg: '30px' }} fontFamily={"body"} lineHeight={"1.82rem"} color="#000000">
            Construção da sua Landing Page linkada ao domínio do seu site.
          </Text>
        </Box>
      </Box>
      <Box width={'45.6%'} marginLeft={{ base: '24px', md: '40px', lg: '80px', xl:'200px' }} marginTop={{ base: '24px', md: '40px', lg: '56px' }}>
        <Img src={services} width="100%"/>
      </Box>
    </Flex>
  )
}