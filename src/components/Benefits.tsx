import {
  Flex,
  Text,
  Img, 
  Box,
  useMediaQuery
 } from '@chakra-ui/react'

import site from '../public/site2.svg'
import design from '../public/design2.svg'
import agil from '../public/agil2.svg'
import language from '../public/linguagem2.svg'
import email from '../public/email2.svg'
import suporttec from '../public/suportetec2.svg'

export function Benefits() {
  const [isMobile] = useMediaQuery("(max-height: 738px)")

  return (
    <Flex
        bg="primary.200"
        flexDirection="column"
        background={'#6357FF'}
        height={{md: "100%", lg: "100vh"}}
        width="100%"
    >
      <Box
        marginLeft={"4.37rem"}
        marginTop={"6.25rem"}
      >
        <Text
          fontSize={{ base: '24px', md: '28px', lg: '35px' }} 
          lineHeight={"1.52rem"}
          color="#FFFFFF"
          fontWeight={"600"}
        >
          Vantagens
        </Text>
      </Box>
      <Flex
        flexDirection={'row'}
        justifyContent="space-between"
        width={'80%'}
      >
        <Flex
          marginLeft={{ base: '24px', md: '40px', lg: isMobile ? '100px' : '166px' }}
          marginTop={{ base: '24px', md: '40px', lg: '65px' }}
          flexDirection="column"
        >
          <Flex
            flexDirection={'column'}
          >
            <Flex
              flexDirection="row"
              alignItems={'center'}
            >
              <Img
                src={site}
                width='46px'
                height='46px'
              />
              <Text
                marginTop="14px"
                marginLeft={'9px'}
                lineHeight={"29.26px"}
                textAlign="center"
                fontSize="20px"
                color="#FFFFFF" 
                fontFamily="Montserrat"
                fontWeight={"600"}
              >
                Site responsivo
              </Text>
            </Flex>
            <Box
              width={'225px'}
              height="109px"
              marginLeft={'30px'}
              display={'flex'}
              alignItems="center"
            >
              <Text
                marginLeft={'9px'}
                lineHeight={"24.38px"}
                textAlign="start"
                fontSize="20px"
                color="#FFFFFF"
                fontFamily="Lato"
                fontWeight={"600"}
              >
                P??gina Web em qualquer dispositivo.
              </Text>
            </Box>
          </Flex>
          <Flex
            flexDirection={'column'}
            marginTop="50px"
          >
            <Flex
              flexDirection="row"
              alignItems={'center'}
            >
              <Img
                src={design}
                width='46px'
                height='46px'
              />
              <Text
                marginTop="14px"
                marginLeft={'9px'}
                lineHeight={"29.26px"}
                textAlign="center"
                fontSize="20px"
                color="#FFFFFF"
                fontFamily="Montserrat"
                fontWeight={"600"}
              >
                Design Personalisado
              </Text>
            </Flex>
            <Box
              width={'225px'}
              height="109px"
              marginLeft={'30px'}
              display={'flex'}
              alignItems="center"
            >
              <Text
                marginLeft={'9px'}
                lineHeight={"24.38px"}
                textAlign="start"
                fontSize="20px"
                color="#FFFFFF"
                fontFamily="Lato"
                fontWeight={"600"}
              >
                Layout feito sob medida.
              </Text>
            </Box>
          </Flex>
          
          {
            !isMobile &&
            <Flex
              flexDirection={'column'}
              marginTop="50px"
            >
              <Flex
                flexDirection="row"
                alignItems={'center'}
              >
                <Img
                  src={agil}
                  width='46px'
                  height='46px'
                />
                <Text
                  marginTop="14px"
                  marginLeft={'9px'}
                  lineHeight={"29.26px"}
                  textAlign="center"
                  fontSize="20px"
                  color="#FFFFFF"
                  fontFamily="Montserrat"
                  fontWeight={"600"}
                >
                  Agilidade na entrega
                </Text>
              </Flex>
              <Box
                width={'225px'}
                height="109px"
                marginLeft={'30px'}
                display={'flex'}
                alignItems="center"
              >
                <Text
                  marginLeft={'9px'}
                  lineHeight={"24.38px"}
                  textAlign="start"
                  fontSize="20px"
                  color="#FFFFFF"
                  fontFamily="Lato"
                  fontWeight={"600"}
                >
                  Entrega da Landing Page em 8 dias.
                </Text>
              </Box>
            </Flex>
          }
        </Flex>

        <Flex
          marginLeft={{ base: '24px', md: '40px', lg: isMobile ? '100px' : '166px' }}
          marginTop={{ base: '24px', md: '40px', lg: isMobile ? '80px' : '65px' }}
          flexDirection="column"
        >
          <Flex
            flexDirection={'column'}
          >
            <Flex
              flexDirection="row"
              alignItems={'center'}
            >
              <Img
                src={language}
                width='46px'
                height='46px'
              />
              <Text
                marginTop="14px"
                marginLeft={'9px'}
                lineHeight={"29.26px"}
                textAlign="center"
                fontSize="20px"
                color="#FFFFFF"
                fontFamily="Montserrat"
                fontWeight={"600"}
              >
                Linguagem objetiva
              </Text>
            </Flex>
            <Box
              width={'225px'}
              height="109px"
              marginLeft={'30px'}
              display={'flex'}
              alignItems="center"
            >
              <Text
                marginLeft={'9px'}
                lineHeight={"24.38px"}
                textAlign="start"
                fontSize="20px"
                color="#FFFFFF"
                fontFamily="Lato"
                fontWeight={"600"}
              >
                Textos para se entender de maneira simples.
              </Text>
            </Box>
          </Flex>
          <Flex
            flexDirection={'column'}
            marginTop="50px"
          >
            <Flex
              flexDirection="row"
              alignItems={'center'}
            >
              <Img
                src={email}
                width='46px'
                height='46px'
              />
              <Text
                marginTop="20px"
                marginLeft={'9px'}
                lineHeight={"29.26px"}
                textAlign="center"
                fontSize="20px"
                color="#FFFFFF"
                fontFamily="Montserrat"
                fontWeight={"600"}
              >
                Disparo de e-mail
              </Text>
            </Flex>
            <Box
              width={'300px'}
              height="109px"
              marginLeft={'30px'}
              display={'flex'}
              alignItems="center"
            >
              <Text
                marginLeft={'9px'}
                lineHeight={"24.38px"}
                textAlign="start"
                fontSize="20px"
                color="#FFFFFF"
                fontFamily="Lato"
                fontWeight={"600"}
              >
                E-mail personalizado enviado para seus clientes.
              </Text>
            </Box>
          </Flex>
          
          {
            !isMobile &&
            <Flex
              flexDirection={'column'}
              marginTop="50px"
            >
              <Flex
                flexDirection="row"
                alignItems={'center'}
              >
                <Img
                  src={suporttec}
                  width='46px'
                  height='46px'
                />
                <Text
                  marginTop="14px"
                  marginLeft={'9px'}
                  lineHeight={"29.26px"}
                  textAlign="center"
                  fontSize="22px"
                  color="#FFFFFF"
                  fontFamily="Montserrat"
                  fontWeight={"600"}
                >
                  Suporte t??cnico
                </Text>
              </Flex>
              <Box
                width={'225px'}
                height="109px"
                marginLeft={'30px'}
                display={'flex'}
                alignItems="center"
              >
                <Text
                  marginLeft={'9px'}
                  lineHeight={"24.38px"}
                  textAlign="start"
                  fontSize="20px"
                  color="#FFFFFF"
                  fontFamily="Lato"
                  fontWeight={"600"}
                >
                  Equipe atenciosa e competente.
                </Text>
              </Box>
            </Flex>
          }
        </Flex>

        {
          isMobile &&
          <Flex
            marginLeft={{ base: '24px', md: '40px', lg: isMobile ? '100px' : '166px' }}
            marginTop={{ base: '24px', md: '40px', lg: '65px' }}
            flexDirection="column"
          >
            <Flex
              flexDirection={'column'}
            >
              <Flex
                flexDirection="row"
                alignItems={'center'}
              >
                <Img
                  src={agil}
                  width='46px'
                  height='46px'
                />
                <Text
                  marginTop="14px"
                  marginLeft={'9px'}
                  lineHeight={"29.26px"}
                  textAlign="center"
                  fontSize="20px"
                  color="#FFFFFF"
                  fontFamily="Montserrat"
                  fontWeight={"600"}
                >
                  Agilidade na entrega
                </Text>
              </Flex>
              <Box
                width={'225px'}
                height="109px"
                marginLeft={'30px'}
                display={'flex'}
                alignItems="center"
              >
                <Text
                  marginLeft={'9px'}
                  lineHeight={"24.38px"}
                  textAlign="start"
                  fontSize="20px"
                  color="#FFFFFF"
                  fontFamily="Lato"
                  fontWeight={"600"}
                >
                  Entrega da Landing Page em 8 dias.
                </Text>
              </Box>
            </Flex>
            <Flex
              flexDirection={'column'}
              marginTop="50px"
            >
              <Flex
                flexDirection="row"
                alignItems={'center'}
              >
                <Img
                  src={suporttec}
                  width='46px'
                  height='46px'
                />
                <Text
                  marginTop="14px"
                  marginLeft={'9px'}
                  lineHeight={"29.26px"}
                  textAlign="center"
                  fontSize="22px"
                  color="#FFFFFF"
                  fontFamily="Montserrat"
                  fontWeight={"600"}
                >
                  Suporte t??cnico
                </Text>
              </Flex>
              <Box
                width={'225px'}
                height="109px"
                marginLeft={'30px'}
                display={'flex'}
                alignItems="center"
              >
                <Text
                  marginLeft={'9px'}
                  lineHeight={"24.38px"}
                  textAlign="start"
                  fontSize="20px"
                  color="#FFFFFF"
                  fontFamily="Lato"
                  fontWeight={"600"}
                >
                  Equipe atenciosa e competente.
                </Text>
              </Box>
            </Flex>
          </Flex>
        }
      </Flex>
    </Flex>
  )
}