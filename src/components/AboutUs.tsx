import {
  Box,
  Flex,
  Img,
  Text
} from '@chakra-ui/react'

import aboutus from '../public/aboutus.svg'

export function Aboutus() {

  return (
    <Flex
      background="linear-gradient(
        to left,
        #818181 2%,
        #FFFFFF 80%
      )"
      flexDirection={{ base: 'column', md: 'row' }}
      height={'100vh'}
      width="100%"
    >
      <Flex
        marginTop={"8rem"}
        flexDirection="column"
        position="absolute"
        width="100%"
      >
        <Text
          fontSize={{ base: '24px', md: '28px', lg: '30px' }} 
          lineHeight={"1.52rem"}
          color="#000000"
          fontFamily="Montserrat"
          fontWeight="300"
          marginLeft={"3rem"}
        >
          Quem somos?
        </Text>
        <Text
          marginTop={"1.93rem"}
          marginLeft={"3rem"}
          fontSize={{ base: '24px', md: '28px', lg: '50px' }} 
          lineHeight={"2.66rem"}
          color="#000000"
          fontFamily="Montserrat"
          fontWeight="600"
        >
          Um pouco sobre nós:
        </Text>
        
        <Flex
          width={"30rem"}
          height={"17.12rem"}
          marginTop={"75px"}
          marginLeft={"3rem"}
        >
          <Text
            fontSize={{ base: '24px', md: '28px', lg: '36px' }}
            lineHeight="45px"
            color={"#000000"}
            fontFamily="Lato"
            fontWeight="600"
            marginLeft={"1.25rem"}
          >
            Somos três sócios apaixonados por tecnologia e com o foco em capturar o lead certo para o seu negócio.
          </Text>
        </Flex>
      </Flex>

      <Img
        marginTop="7%"
        marginLeft="45%"
        src={aboutus}
        width='70%'
        height="70%"
      />
    </Flex>
  )
}