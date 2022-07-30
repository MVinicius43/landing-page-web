import {
  Button,
  Flex,
  Text,
  useDisclosure
} from "@chakra-ui/react";

import { SignInModal } from "./SignInModal";

export function FinalMessage() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex height="100vh" background={"#696971"} flexDirection="column">
      <Flex flexDirection={"column"} alignItems="center" justifyContent={"center"} width={"100%"} marginTop="100px">
        <Text fontSize={"36px"} fontWeight="600" lineHeight={"43.57px"} color="#FFFFFF">
          Se você não gostar do que foi entregue, 
        </Text>
        <Text fontSize={"36px"} fontWeight="600" lineHeight={"43.57px"} color="#FFFFFF">
          devolvemos o seu dinheiro!
        </Text>
        <Text fontSize={"36px"} fontWeight="600" lineHeight={"43.57px"} color="#FFFFFF">
          Sem te questionar!
        </Text>
      </Flex>

      <Flex justifyContent={"center"} width="100%" marginTop={"180px"}>
        <Button onClick={onOpen} width="246px" height={"95px"} borderRadius="60px" color={"#FFFFFF"} bg="#32BA7C" fontSize={"20px"} fontWeight="400" lineHeight={"36.31px"}>
          Realize o seu cadastro!
        </Button>
      </Flex>

      <Flex flexDirection={"column"} alignItems="center" justifyContent={"center"} width={"100%"} marginTop="210px">
        <Text fontSize={"24px"} fontWeight="600" lineHeight={"29.26px"} color="#FFFFFF">
          Rua Santo Antônio do Leite, 71, Bairro de Maio, Ouro Branco-MG 
        </Text>
        <Text fontSize={"24px"} fontWeight="600" lineHeight={"29.26px"} color="#FFFFFF">
          CNPJ 37.933.847/0001-39
        </Text>
      </Flex>
      <SignInModal isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
    </Flex>

  )
}