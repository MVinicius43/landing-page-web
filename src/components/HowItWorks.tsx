import {
  Flex,
  Box,
  Text,
  Img
} from "@chakra-ui/react";

import registration from '../public/cadastro.svg'
import meeting from '../public/reuniao.svg'
import informations from '../public/maisinformacoes.png'
import verification from '../public/verificacao.png'
import arrow from '../public/seta.svg'

export function HowItWorks() {

  return (
    <Flex 
      backgroundColor={'#FFFFFF'}
      flexDirection="column"
      height={'100vh'}
      width="100%"
    >
      <Box
        marginLeft={"4.37rem"}
        marginTop={"6.25rem"}
      >
        <Text
          fontSize={{ base: '24px', md: '28px', lg: '30px' }} 
          lineHeight={"1.52rem"}
          color="#050042"
          fontWeight={"600"}
        >
          Como Funciona?
        </Text>
      </Box>
      <Flex
        alignItems={"center"}
        width={"90%"}
        marginLeft={{ base: '24px', md: '40px', lg: '80px' }}
        marginTop={{ base: '24px', md: '40px', lg: '150px' }}
      >
        <Flex
          flexDirection="column"
          alignItems={'center'}
        >
          <Img
            src={registration}
            width='80px'
            height='80px'
          />
          <Text
            marginTop="14px"
            lineHeight={"29.26px"}
            textAlign="center"
            fontSize="24px"
            color="#050042"
            fontWeight={"600"}
            >
            Realize seu cadastro
          </Text>
        </Flex>
        <Flex
          marginLeft={"55px"}
          alignItems={'center'}
          marginRight={"54px"}
        >
          <Img
            src={arrow}
            width='80px'
            height='80px'
          />
        </Flex>
        <Flex
          flexDirection="column"
          alignItems={'center'}
        >
          <Img
            src={meeting}
            width='80px'
            height='80px'
          />
          <Text
            marginTop="14px"
            lineHeight={"29.26px"}
            textAlign="center"
            fontSize="24px"
            color="#050042"
            fontWeight={"600"}
          >
            Reunião com nosso time técnico
          </Text>
        </Flex>
        <Flex
          marginLeft={"55px"}
          alignItems={'center'}
          marginRight={"54px"}
        >
          <Img
            src={arrow}
            width='80px'
            height='80px'
          />
        </Flex>
        <Flex
          flexDirection="column"
          alignItems={'center'}
        >
          <Img
            src={informations}
            width='80px'
            height='80px'
          />
          <Text
            marginTop="14px"
            lineHeight={"29.26px"}
            textAlign="center"
            fontSize="24px"
            color="#050042"
            fontWeight={"600"}
          >
            Coleta das informações
          </Text>
        </Flex>
        <Flex
          marginLeft={"55px"}
          alignItems={'center'}
          marginRight={"54px"}
        >
          <Img 
            src={arrow}
            width='80px'
            height='80px'
          />
        </Flex>
        <Flex
          flexDirection="column"
          alignItems={'center'}
        >
          <Img
            src={verification}
            width='80px'
            height='80px'
          />
          <Text
            marginTop="14px"
            lineHeight={"29.26px"}
            textAlign="center"
            fontSize="24px"
            color="#050042"
            fontWeight={"600"}
          >
            Entrega da Landing Page
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}