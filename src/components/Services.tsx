import {
  Box,
  Flex,
  Img,
  Text
} from '@chakra-ui/react'

import services from '../public/services.png'
import bg from '../public/bg_roxo_white.svg'

export function Services() {

  return (
    <Flex
      backgroundImage={bg}
      flexDirection="row"
      height={'100vh'}
    >
      <Box
        marginLeft={"4.37rem"}
        marginTop={"8rem"}
      >
        <Text
          fontSize={{ base: '24px', md: '28px', lg: '30px' }}
          lineHeight={"1.52rem"}
          color="#7267FE"
          fontFamily="Montserrat"
          fontWeight="300"
        >
          O que fazemos?
        </Text>
        <Text
          marginTop={"3rem"}
          fontSize={{ base: '24px', md: '28px', lg: '40px' }}
          lineHeight={"2.66rem"}
          color="#050042"
          fontFamily="Montserrat"
          fontWeight="600"
        >
          Nossos Serviços:
        </Text>
        <Box
          width={"26.12rem"}
          height={"17.12rem"}
          marginTop={"3.5rem"}
          marginLeft={"1.25rem"}
        >
          <Text
            fontSize={{ base: '24px', md: '28px', lg: '36px' }}
            lineHeight="45px"
            color={"#000000"}
            fontFamily="Lato"
            fontWeight="600"
          >
            Construção da sua Landing Page linkada ao domínio do seu site.
          </Text>
        </Box>
      </Box>
      <Box
        width={'45.6%'}
        marginLeft={{ base: '24px', md: '40px', lg: '80px', xl:'265px' }}
        marginTop={{ base: '24px', md: '40px', lg: '150px' }}
      >
        <Img
          src={services}
          width="100%"
        />
      </Box>
    </Flex>
  )
}