import Tab from '..'

const ExampleTab = () => {
  return (
    <Tab.Container id="example-tab">
      <Tab.List>
        <Tab.Trigger>Home</Tab.Trigger>
        <Tab.Trigger disabled>Profile</Tab.Trigger>
        <Tab.Trigger>Contact</Tab.Trigger>
      </Tab.List>
      <Tab.Content>
        <Tab.Panel>Home Tab</Tab.Panel>
        <Tab.Panel>Profile Tab</Tab.Panel>
        <Tab.Panel>Contact Tab</Tab.Panel>
      </Tab.Content>
    </Tab.Container>
  )
}

export default ExampleTab
