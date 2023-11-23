import { ComponentProps } from 'react'
import { Tab } from '../tab'
import { TabContainer } from '../container'
import { TabContent, TabList, TabPanel } from '..'

const MockTab = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  disabled,
  ...props
}: ComponentProps<typeof Tab>) => {
  return (
    <TabContainer id="test">
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
