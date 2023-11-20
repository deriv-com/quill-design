import { ComponentProps, useContext } from 'react'
import { TabContext } from '../container'

type PaneProps = ComponentProps<'div'>

const TabPanel = ({ children, className }: PaneProps) => {
  const { id, activeTab } = useContext(TabContext)
  return (
    <div
      className={className}
      role="tabpanel"
      id={`${id}-panel`}
      aria-labelledby={`${id}-trigger-${activeTab}`}
    >
      {children}
    </div>
  )
}

TabPanel.displayName = 'TabPanel'

export default TabPanel
