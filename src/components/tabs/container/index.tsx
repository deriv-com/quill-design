import { createContext, useState } from 'react'
import { TabProps } from '../types'

export type TabContextType = TabProps & {
  handleToggle?: (idx: number) => void
  activeTab?: number
}

export const TabContext = createContext<TabContextType>({
  activeTab: 0,
})

export const TabContainer = ({
  children,
  id = 'tab-default-id',
  size = 'md',
  iconPosition = 'left',
  className,
}: TabProps) => {
  const [activeTab, setActiveTab] = useState(0)

  const handleToggle = (index: number) => {
    setActiveTab(index)
  }

  return (
    <TabContext.Provider
      value={{ activeTab, handleToggle, id, size, iconPosition }}
    >
      <div id={id} className={className}>
        {children}
      </div>
    </TabContext.Provider>
  )
}
