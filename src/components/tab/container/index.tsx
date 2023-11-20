import { createContext, useState } from 'react'
import { TabProps } from '../types'

export type TabContextType = TabProps & {
  activeTab: number
  handleTabChange?: (idx: number) => void
}

export const TabContext = createContext({} as TabContextType)

const TabContainer = ({
  children,
  id,
  className,
  size = 'md',
  iconPosition = 'left',
}: TabProps) => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const handleTabChange = (idx: number) => {
    setActiveTab(idx)
  }
  return (
    <TabContext.Provider
      value={{ activeTab, handleTabChange, id, size, iconPosition }}
    >
      <div className={className} id={id}>
        {children}
      </div>
    </TabContext.Provider>
  )
}

export default TabContainer
