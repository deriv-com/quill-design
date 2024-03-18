import { ReactNode } from 'react'
import { Information } from './information'

type SectionMessageVariants = {
  Information: typeof Information
}

export const SectionMessage: SectionMessageVariants = ({
  children,
}: {
  children: ReactNode
}) => {
  return <>{children}</>
}

SectionMessage.Information = Information

export default SectionMessage
