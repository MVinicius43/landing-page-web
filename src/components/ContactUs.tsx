import {
  Button,
  Flex,
  Text,
  useDisclosure
} from "@chakra-ui/react";

import { SignInModal } from "./SignInModal";

export function ContactUs() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex
      height="100vh"
      background={"#FFFFFF"}
      flexDirection="column"
      width="100%"
    >
      <Flex
        flexDirection={"column"}
        alignItems="center"
        justifyContent={"center"}
        width={"100%"}
        marginTop="143px"
      >
        <Text
          fontSize={"40px"} 
          fontFamily="Montserrat"
          fontWeight="700"
          lineHeight={"43.57px"}
          color="#000000"
        >
          AINDA COM DÚVIDAS? 
        </Text>
        <Text
          fontSize={"30px"} 
          fontFamily="Lato"
          fontWeight="300"
          lineHeight={"43.57px"}
          color="#000000"
          marginTop="48px"
        >
          Fale com nosso suporte,
        </Text>
        <Text
          fontSize={"30px"} 
          fontFamily="Lato"
          fontWeight="300"
          lineHeight={"43.57px"}
          color="#000000"
        >
          estamos à disposição para saná-las.
        </Text>
      </Flex>

      <Flex
        justifyContent={"center"}
        width="100%"
        marginTop={"57px"}
      >
        <Button
          onClick={onOpen}
          width="487px"
          height={"92px"}
          borderRadius="60px"
          color={"#FFFFFF"}
          bg="#6357FF"
          fontSize="30px"
          fontFamily="Montserrat"
          fontWeight="700"
          lineHeight={"36.31px"}
          >
          CHAME O SUPORTE
        </Button>
      </Flex>

      <Flex
        bg="#141414"
        p="32px 88px 33px 88px"
        flexDirection={"column"}
        alignItems="center"
        justifyContent={"center"}
        width={"100%"}
        marginTop="210px"
      >
        <Text
          fontSize={"24px"}
          fontFamily="Montserrat"
          fontWeight="400"
          lineHeight={"29.26px"}
          color="#FFFFFF"
          >
          Copyright 2022 © “Nome fantasia”
        </Text>
        <Text
          fontSize={"24px"}
          fontFamily="Montserrat"
          fontWeight="700"
          lineHeight={"29.26px"}
          color="#FFFFFF"
          >
          CNPJ 37.933.847/0001-39
        </Text>
        <Text
          fontSize={"13px"}
          fontFamily="Lato"
          fontWeight="700"
          lineHeight={"29.26px"}
          marginTop="21px"
          color="#FFFFFF"
          >
          TERMOS DE USO || POLÍTICA DE PRIVACIDADE
        </Text>
      </Flex>
      <SignInModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
    </Flex>

  )
}