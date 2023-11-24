import { ComponentProps } from 'react'
import { Tab } from '../tab'
import { TabContainer } from '../container'
import { TabContent, TabList, TabPanel } from '..'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MockTab = ({ disabled, size, ...props }: ComponentProps<typeof Tab>) => {
  return (
    <TabContainer id="test" size={size}>
      <TabList>
        <Tab {...props}>Forex</Tab>
        <Tab disabled={true} {...props}>
          Derived Indices
        </Tab>
        <Tab {...props}>Stocks</Tab>
      </TabList>
      <TabContent>
        <TabPanel>Forex Tab</TabPanel>
        <TabPanel>Derived indices Tab</TabPanel>
        <TabPanel>Stocks Tab</TabPanel>
      </TabContent>
    </TabContainer>
  )
}
export default MockTab
