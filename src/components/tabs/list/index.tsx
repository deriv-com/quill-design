import { ComponentProps } from 'react'
import { qtJoin } from 'qtMerge'

type TabListProps = ComponentProps<'div'>

export const TabList = ({ children, className }: TabListProps) => {
  return (
    <div
      className={qtJoin('relative flex overflow-x-auto', className)}
      role="tablist"
      aria-orientation="horizontal"
    >
      {children}
    </div>
  )
}
