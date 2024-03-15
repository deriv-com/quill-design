import { ReactNode } from 'react'
// import { EmptyBadge } from './empty'
// import { LabelBadge } from './label'

type SectionMessageVariants = {
  //   Empty: typeof EmptySectionMessage
  //   Label: typeof LabelSectionMessage
}

export const SectionMessage: SectionMessageVariants = ({
  children,
}: {
  children: ReactNode
}) => {
  return <>{children}</>
}

// SectionMessage.Empty = EmptySectionMessage
// SectionMessage.Label = LabelSectionMessage

export default SectionMessage
