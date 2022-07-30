import {
  Box,
  Flex,
  Img,
  Text
} from '@chakra-ui/react'

import aboutus from '../public/aboutus.svg'

export function Aboutus() {

  return (
    <Flex backgroundColor={'black'} flexDirection="row"  height={'100vh'}>
      <Box marginLeft={"4.37rem"} marginTop={"6.25rem"}>
        <Text fontSize={{ base: '24px', md: '28px', lg: '30px' }}  lineHeight={"1.52rem"} color="#7267FE">
          Quem somos?
        </Text>
        <Text marginTop={"1.93rem"} fontSize={{ base: '24px', md: '28px', lg: '30px' }}  lineHeight={"2.66rem"} color="#7267FE">
          Um pouco sobre nós:
        </Text>
        <Box width={"26.12rem"} height={"17.12rem"} marginTop={"3.5rem"} marginLeft={"1.25rem"}>
          <Text fontSize={{ base: '24px', md: '28px', lg: '30px' }} fontFamily={"body"} lineHeight={"1.82rem"} fontWeight={'black'} color={"white"}>
            Somos três sócios apaixonados por tecnologia e com o foco em capturar o lead certo para o seu negócio.
          </Text>
        </Box>
      </Box>
      <Box marginLeft={{ base: '24px', md: '40px', lg: '80px', xl:'200px' }} marginTop={{ base: '24px', md: '40px', lg: '56px' }}>
        <Img src={aboutus} width='90%' height="90%"/>
      </Box>
    </Flex>
  )
}