import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface ISection {
  children: ReactNode,
  delay: number,
}

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const Section = ({ children, delay }: ISection) => {
  return (
    <StyledDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={`${delay}s`}
    >
      {children}
    </StyledDiv>
  )
}

export default Section
