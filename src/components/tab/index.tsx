import { ReactNode } from 'react'
import TabContainer from './container'
import TabContent from './content'
import TabPanel from './panel'
import TabList from './list'
import TabTrigger from './trigger'

type TabType = {
  Container: typeof TabContainer
  Content: typeof TabContent
  Panel: typeof TabPanel
  List: typeof TabList
  Trigger: typeof TabTrigger
}

const Tab: TabType = ({ children }: { children: ReactNode }) => {
  return <>{children}</>
}

Tab.Container = TabContainer
Tab.Content = TabContent
Tab.Panel = TabPanel
Tab.List = TabList
Tab.Trigger = TabTrigger

export default Tab
