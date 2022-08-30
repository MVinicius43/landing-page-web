import { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Input,
} from "@chakra-ui/react";

import signInApi from '../api/signIn'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ISignInModal {
  isOpen: boolean,
  onOpen: () => void,
  onClose: () => void
}

export function SignInModal({ isOpen, onOpen, onClose }: ISignInModal) {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')

  const sendData = () => new Promise<void>((resolve, reject) => {
    const data = {
      name,
      company,
      email,
      contact
    }
    
    signInApi.saveData(data).then(() => {
      toast.success('Dados cadastrados com sucesso!')
      resolve()
    }).catch(() => {
      toast.error('Erro ao enviar os dados...')
    })

    onClose()
  })
  
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={"20px"}>Fale Conosco</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Stack spacing={5}>
            <Input variant='flushed' value={name} onChange={e => { setName(e.target.value) }} placeholder='Nome:'></Input>
            <Input variant='flushed' value={company} onChange={e => { setCompany(e.target.value) }} placeholder='Empresa:'></Input>
            <Input variant='flushed' type={'email'} value={email} onChange={e => { setEmail(e.target.value) }} placeholder='E-mail:'></Input>
            <Input variant='flushed' type={"number"} value={contact} onChange={e => { setContact(e.target.value) }} placeholder='Whatsapp:'></Input>
          </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={async () => { await sendData() }}>
              Cadastre-se
            </Button>
          </ModalFooter>
        </ModalContent>  
    </Modal>
  )
}