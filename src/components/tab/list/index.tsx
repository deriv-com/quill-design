import { ComponentProps } from 'react'
import { qtJoin } from 'qtMerge'

type TabProps = ComponentProps<'div'>

const TabList = ({ children, className }: TabProps) => {
  return (
    <div
      className={qtJoin('relative flex', className)}
      role="tablist"
      aria-orientation="horizontal"
    >
      {children}
    </div>
  )
}

TabList.displayName = 'TabList'

export default TabList
