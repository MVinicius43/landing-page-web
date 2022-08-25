import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface IButtonMotion {
  children: ReactNode,
}

export function ButtonMotion({ children }: IButtonMotion) {

  return (
    <motion.div 
      whileHover={{ scale: 1.03 }}
    >
      {children}
    </motion.div>
  )
} 
